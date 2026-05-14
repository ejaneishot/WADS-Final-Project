// src/app/api/roadmaps/[id]/generate/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAuth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { resolveQuizScoreLabel } from "@/lib/assessmentScoring";
import { z } from "zod";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const BodySchema = z.object({
  topic: z.string().min(3).max(800),
  includeProfile: z.boolean().optional().default(false),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const auth = await getAuth();
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const raw = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const { topic, includeProfile } = parsed.data;

    const ownedRoadmap = await prisma.roadmap.findFirst({
      where: { id, userId: auth.sub },
      select: { id: true },
    });
    if (!ownedRoadmap) {
      return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
    }

    let learnerBlock = "";
    if (includeProfile) {
      const [profile, latestAttempt, careers] = await Promise.all([
        prisma.profile.findUnique({
          where: { userId: auth.sub },
          include: {
            skills: { include: { skill: { select: { name: true } } } },
          },
        }),
        prisma.assessmentAttempt.findFirst({
          where: { userId: auth.sub },
          orderBy: { createdAt: "desc" },
          select: { primary: true, secondary: true },
        }),
        prisma.career.findMany({
          select: { slug: true, title: true, tag: true },
        }),
      ]);

      const major = profile?.major ?? null;
      const semester = profile?.semester ?? null;
      const gpaRange = profile?.gpaRange ?? null;
      const interests = profile?.interests ?? [];
      const skillsLines =
        profile?.skills?.length ?
          profile.skills
            .map((us) => `${us.skill.name} (level ${us.level} of 5)`)
            .join("; ")
        : "none listed";

      const primaryCode = latestAttempt?.primary ?? "";
      const secondaryCode = latestAttempt?.secondary ?? null;
      const primaryLabel = primaryCode
        ? resolveQuizScoreLabel(primaryCode, careers)
        : "not completed";
      const secondaryLabel = secondaryCode
        ? resolveQuizScoreLabel(secondaryCode, careers)
        : null;

      learnerBlock = `

The learner has shared the following profile. Use it only to personalize the roadmap (difficulty, ordering, and which adjacent skills to mention). Do not quote or restate it as a biography; weave it into pedagogical choices.

- Major: ${major ?? "not specified"}
- Semester: ${semester != null ? String(semester) : "not specified"}
- GPA range: ${gpaRange ?? "not specified"}
- Interests: ${interests.length ? interests.join(", ") : "none listed"}
- Skills (name, level out of 5): ${skillsLines}
- Assessment primary career match: ${primaryLabel}${primaryCode ? ` (code: ${primaryCode})` : ""}
- Assessment secondary career match: ${secondaryLabel ? `${secondaryLabel} (code: ${secondaryCode})` : "none / not available"}
`;
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `
      Create a branching learning roadmap for: "${topic}".
      ${learnerBlock}
      Structure the JSON exactly like this:
      {
        "nodes": [
          { "id": "1", "title": "Skill Name", "description": "Short explanation" }
        ],
        "edges": [
          { "from": "1", "to": "2" }
        ]
      }
      Rules:
      - Include 6 to 8 nodes.
      - Use simple string IDs for "from" and "to" that match the node IDs.
      - Ensure a logical flow from basics to advanced.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const data = JSON.parse(response.text());

    if (!data.nodes || data.nodes.length === 0) {
      throw new Error("AI returned no nodes");
    }

    await prisma.$transaction(async (tx) => {
      const nodeMap = new Map<string, string>();

      for (const aiNode of data.nodes) {
        const dbNode = await tx.roadmapNode.create({
          data: {
            title: aiNode.title,
            description: aiNode.description,
            roadmapId: id,
          },
        });
        nodeMap.set(aiNode.id.toString(), dbNode.id);
      }

      if (data.edges && data.edges.length > 0) {
        const edgeData = data.edges
          .map((edge: { from: unknown; to: unknown }) => ({
            parentId: nodeMap.get(String(edge.from)),
            childId: nodeMap.get(String(edge.to)),
          }))
          .filter(
            (e: { parentId?: string; childId?: string }) =>
              e.parentId && e.childId,
          );

        if (edgeData.length > 0) {
          await tx.roadmapEdge.createMany({ data: edgeData });
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("AI_GEN_ERROR:", error);
    return NextResponse.json(
      { error: "AI Generation failed. Check server logs." },
      { status: 500 },
    );
  }
}

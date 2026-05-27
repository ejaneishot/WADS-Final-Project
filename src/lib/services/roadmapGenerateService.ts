/**
 * AI-powered roadmap generation via Google Gemini.
 * Optionally personalizes nodes from the learner profile and latest assessment results.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/db";
import { resolveQuizScoreLabel } from "@/lib/assessmentScoring";
import { z } from "zod";

export const RoadmapGenerateBodySchema = z.object({
  topic: z.string().min(3).max(800),
  includeProfile: z.boolean().optional().default(false),
});

export type RoadmapGenerateBody = z.infer<typeof RoadmapGenerateBodySchema>;

/** Returned when the topic is not a tech career learning goal. */
export const ROADMAP_TOPIC_NOT_CAREER_ERROR =
  "Your input isn't about your career. Please describe a tech skill or career topic you want to learn (for example: Master Unity, Learn React, or cloud engineering fundamentals).";

const TopicClassificationSchema = z.object({
  isTechCareerTopic: z.boolean(),
});

type AiGraph = {
  nodes: Array<{ id: unknown; title: unknown; description: unknown }>;
  edges?: Array<{ from: unknown; to: unknown }>;
};

/** Build a prompt appendix from profile, skills, and latest assessment match codes. */
async function buildLearnerContextBlock(userId: string): Promise<string> {
  const [profile, latestAttempt, careers] = await Promise.all([
    prisma.profile.findUnique({
      where: { userId },
      include: {
        skills: { include: { skill: { select: { name: true } } } },
      },
    }),
    prisma.assessmentAttempt.findFirst({
      where: { userId },
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

  return `

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

/** Gemini classifier: accept only tech career / professional skill learning topics. */
async function isTechCareerRoadmapTopic(
  apiKey: string,
  topic: string,
): Promise<boolean | null> {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL ?? "gemini-3-flash-preview",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const prompt = `You classify user input for a tech career learning roadmap generator.

VALID (isTechCareerTopic: true): topics about learning tech skills, software, IT, data, design, game development, cybersecurity, cloud, DevOps, programming languages, frameworks, tools (e.g. Unity, React, Kubernetes), technical certifications, or professional tech career paths.

INVALID (isTechCareerTopic: false): unrelated questions (weather, news), cooking or recipes, dangerous or illegal content, general chit-chat, non-technical hobbies, medical/legal advice, or anything that is not a tech career learning goal.

User input: "${topic.replace(/"/g, '\\"')}"

Reply with JSON only: { "isTechCareerTopic": true } or { "isTechCareerTopic": false }`;

  try {
    const result = await model.generateContent(prompt);
    const parsed = TopicClassificationSchema.safeParse(
      JSON.parse(result.response.text()),
    );
    if (!parsed.success) return null;
    return parsed.data.isTechCareerTopic;
  } catch (error) {
    console.error("AI_TOPIC_CLASSIFY_ERROR:", error);
    return null;
  }
}

export type GenerateRoadmapAiResult =
  | { ok: true }
  | {
      ok: false;
      status: 400 | 404 | 500;
      error: string;
    };

/**
 * Call Gemini to produce nodes/edges, then persist them on the user's roadmap.
 * Verifies roadmap ownership before writing; rolls back via transaction on DB errors.
 */
export async function generateRoadmapFromAi(params: {
  userId: string;
  roadmapId: string;
  topic: string;
  includeProfile: boolean;
}): Promise<GenerateRoadmapAiResult> {
  const { userId, roadmapId, topic, includeProfile } = params;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "AI is not configured (missing API key)." };
  }

  const ownedRoadmap = await prisma.roadmap.findFirst({
    where: { id: roadmapId, userId },
    select: { id: true },
  });
  if (!ownedRoadmap) {
    return { ok: false, status: 404, error: "Roadmap not found" };
  }

  const isCareerTopic = await isTechCareerRoadmapTopic(apiKey, topic);
  if (isCareerTopic === false) {
    return {
      ok: false,
      status: 400,
      error: ROADMAP_TOPIC_NOT_CAREER_ERROR,
    };
  }
  if (isCareerTopic === null) {
    return {
      ok: false,
      status: 500,
      error: "Could not validate your topic. Please try again.",
    };
  }

  let learnerBlock = "";
  if (includeProfile) {
    learnerBlock = await buildLearnerContextBlock(userId);
  }

  const genAI = new GoogleGenerativeAI(apiKey);
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

  let data: AiGraph;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    data = JSON.parse(response.text()) as AiGraph;
  } catch (error) {
    console.error("AI_GEN_ERROR:", error);
    return {
      ok: false,
      status: 500,
      error: "AI Generation failed. Check server logs.",
    };
  }

  if (!data.nodes || data.nodes.length === 0) {
    return {
      ok: false,
      status: 500,
      error: "AI returned no nodes",
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const nodeMap = new Map<string, string>();

      for (const aiNode of data.nodes) {
        const dbNode = await tx.roadmapNode.create({
          data: {
            title: String(aiNode.title),
            description:
              aiNode.description == null || aiNode.description === ""
                ? null
                : String(aiNode.description),
            roadmapId,
          },
        });
        nodeMap.set(String(aiNode.id), dbNode.id);
      }

      if (data.edges && data.edges.length > 0) {
        const edgeData = data.edges
          .map((edge) => ({
            parentId: nodeMap.get(String(edge.from)),
            childId: nodeMap.get(String(edge.to)),
          }))
          .filter(
            (e): e is { parentId: string; childId: string } =>
              Boolean(e.parentId && e.childId),
          );

        if (edgeData.length > 0) {
          await tx.roadmapEdge.createMany({ data: edgeData });
        }
      }
    });
  } catch (error) {
    console.error("AI_GEN_ERROR:", error);
    return {
      ok: false,
      status: 500,
      error: "AI Generation failed. Check server logs.",
    };
  }

  return { ok: true };
}

// src/app/api/roadmaps/[id]/generate/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { getAuth } from "@/lib/auth";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

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
    const { topic } = await req.json();

    const ownedRoadmap = await prisma.roadmap.findFirst({
      where: { id, userId: auth.sub },
      select: { id: true },
    });
    if (!ownedRoadmap) {
      return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
    }

    // 1. Initialize model with JSON constraint
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `
      Create a branching learning roadmap for: "${topic}".
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

    // 2. Database Transaction
    await prisma.$transaction(async (tx) => {
      const nodeMap = new Map();

      // Create Nodes first
      for (const aiNode of data.nodes) {
        const dbNode = await tx.roadmapNode.create({
          data: {
            title: aiNode.title,
            description: aiNode.description,
            roadmapId: id,
          },
        });
        // Map the AI's "1", "2" IDs to the real Database UUIDs
        nodeMap.set(aiNode.id.toString(), dbNode.id);
      }

      // Create Edges second
      if (data.edges && data.edges.length > 0) {
        const edgeData = data.edges
          .map((edge: any) => ({
            parentId: nodeMap.get(edge.from.toString()),
            childId: nodeMap.get(edge.to.toString()),
          }))
          .filter((e: any) => e.parentId && e.childId);

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

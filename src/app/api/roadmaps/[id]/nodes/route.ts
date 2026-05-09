// src/app/api/roadmaps/[id]/nodes/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuth } from "@/lib/auth";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }, // Change to Promise
) {
  try {
    const auth = await getAuth();
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params; // 1. Unwrap params
    const { title, description, parentIds } = await req.json();

    const ownedRoadmap = await prisma.roadmap.findFirst({
      where: { id, userId: auth.sub },
      select: { id: true },
    });
    if (!ownedRoadmap) {
      return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
    }

    const newNode = await prisma.$transaction(async (tx) => {
      const node = await tx.roadmapNode.create({
        data: {
          title,
          description,
          roadmapId: id, // Use the unwrapped id
        },
      });

      if (parentIds && Array.isArray(parentIds) && parentIds.length > 0) {
        await tx.roadmapEdge.createMany({
          data: parentIds.map((parentId: string) => ({
            parentId,
            childId: node.id,
          })),
        });
      }
      return node;
    });

    return NextResponse.json(newNode, { status: 201 });
  } catch (error) {
    console.error("NODE_CREATION_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create node" },
      { status: 500 },
    );
  }
}

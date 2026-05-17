// src/app/api/roadmaps/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Create a blank roadmap
export async function POST(req: Request) {
  const { title, userId } = await req.json();
  const roadmap = await prisma.roadmap.create({
    data: { title, userId },
  });
  return NextResponse.json(roadmap);
}

// Update title or Delete
export async function PATCH(req: Request) {
  const { id, title } = await req.json();
  const updated = await prisma.roadmap.update({
    where: { id },
    data: { title },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Roadmap ID is required" },
        { status: 400 },
      );
    }

    // Use a transaction to ensure all related data is cleared safely
    await prisma.$transaction(async (tx) => {
      // 1. Delete all edges associated with nodes in this roadmap
      // We target edges where the parentNode belongs to this roadmapId
      await tx.roadmapEdge.deleteMany({
        where: {
          parent: {
            roadmapId: id,
          },
        },
      });

      // 2. Delete all nodes belonging to this roadmap
      await tx.roadmapNode.deleteMany({
        where: {
          roadmapId: id,
        },
      });

      // 3. Finally, delete the roadmap itself
      await tx.roadmap.delete({
        where: {
          id: id,
        },
      });
    });

    return NextResponse.json({ deleted: true });
  } catch (error) {
    console.error("ROADMAP_DELETE_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete roadmap and its contents" },
      { status: 500 },
    );
  }
}

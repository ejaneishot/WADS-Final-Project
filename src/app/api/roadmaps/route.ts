import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { title, userId } = await req.json();
  const roadmap = await prisma.roadmap.create({
    data: { title, userId },
  });
  return NextResponse.json(roadmap);
}

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

    await prisma.$transaction(async (tx) => {
      await tx.roadmapEdge.deleteMany({
        where: {
          parent: {
            roadmapId: id,
          },
        },
      });

      await tx.roadmapNode.deleteMany({
        where: {
          roadmapId: id,
        },
      });

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

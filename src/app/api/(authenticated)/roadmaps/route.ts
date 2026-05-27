/**
 * API route: POST | PATCH | DELETE /api/roadmaps
 *
 * Methods: POST, PATCH, DELETE
 * Auth: Signed JWT cookie (`getAuth`). All mutations scoped to `auth.sub`.
 * Purpose: Create, rename, or cascade-delete the current user's roadmaps.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAuth } from "@/lib/auth";

export async function POST(req: Request) {
  const auth = await getAuth();
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Validation: title must be a non-empty string
  const { title } = await req.json();
  if (!title || typeof title !== "string") {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const roadmap = await prisma.roadmap.create({
    data: { title, userId: auth.sub },
  });
  return NextResponse.json(roadmap);
}

export async function PATCH(req: Request) {
  const auth = await getAuth();
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, title } = await req.json();
  // Validation: both roadmap id and new title required
  if (!id || !title) {
    return NextResponse.json(
      { error: "Roadmap id and title are required" },
      { status: 400 },
    );
  }

  // Business logic: only update roadmaps owned by the session user
  const owned = await prisma.roadmap.findFirst({
    where: { id, userId: auth.sub },
    select: { id: true },
  });
  if (!owned) {
    return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
  }

  const updated = await prisma.roadmap.update({
    where: { id },
    data: { title },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  try {
    const auth = await getAuth();
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Roadmap ID is required" },
        { status: 400 },
      );
    }

    const owned = await prisma.roadmap.findFirst({
      where: { id, userId: auth.sub },
      select: { id: true },
    });
    if (!owned) {
      return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
    }

    // Business logic: transactional delete of edges → nodes → roadmap
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
    // Error handling: unexpected DB errors → 500
    console.error("ROADMAP_DELETE_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete roadmap and its contents" },
      { status: 500 },
    );
  }
}

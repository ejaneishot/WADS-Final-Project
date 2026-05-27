/**
 * API route: PATCH | DELETE /api/nodes/[nodeId]
 *
 * Methods: PATCH, DELETE
 * Auth: Signed JWT cookie (`getAuth`). Node must belong to a roadmap owned by the session user.
 * Purpose: Update node fields or remove a node and its incident edges.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAuth } from "@/lib/auth";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ nodeId: string }> },
) {
  try {
    const auth = await getAuth();
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { nodeId } = await params;
    const { title, description } = await req.json();

    // Business logic: ownership via parent roadmap before update
    const ownedNode = await prisma.roadmapNode.findFirst({
      where: { id: nodeId, roadmap: { userId: auth.sub } },
      select: { id: true },
    });
    if (!ownedNode) {
      return NextResponse.json({ error: "Node not found" }, { status: 404 });
    }

    const updatedNode = await prisma.roadmapNode.update({
      where: { id: nodeId },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(updatedNode);
  } catch (error) {
    console.error("NODE_UPDATE_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update node" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ nodeId: string }> },
) {
  try {
    const auth = await getAuth();
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { nodeId } = await params;

    const ownedNode = await prisma.roadmapNode.findFirst({
      where: { id: nodeId, roadmap: { userId: auth.sub } },
      select: { id: true },
    });
    if (!ownedNode) {
      return NextResponse.json({ error: "Node not found" }, { status: 404 });
    }

    // We use a transaction to ensure edges are cleared before the node is removed
    await prisma.$transaction(async (tx) => {
      // 1. Delete all edges where this node is either a parent or a child
      await tx.roadmapEdge.deleteMany({
        where: {
          OR: [{ parentId: nodeId }, { childId: nodeId }],
        },
      });

      // 2. Delete the node itself
      await tx.roadmapNode.delete({
        where: { id: nodeId },
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("NODE_DELETE_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete node" },
      { status: 500 },
    );
  }
}

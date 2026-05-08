// src/app/actions/roadmap.ts
"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

// 1. Create a Blank Roadmap
export async function createRoadmap(title: string) {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) throw new Error("User not found");

  const newRoadmap = await prisma.roadmap.create({
    data: {
      title,
      userId: user.id,
    },
  });

  revalidatePath("/roadmaps");
  return newRoadmap;
}

// 2. Update Roadmap Title
export async function updateRoadmapTitle(id: string, newTitle: string) {
  const updated = await prisma.roadmap.update({
    where: { id },
    data: { title: newTitle },
  });

  revalidatePath(`/roadmaps/${id}`);
  return updated;
}

// 3. Delete Roadmap
export async function deleteRoadmap(id: string) {
  // Note: Prisma will handle cascading deletes if configured,
  // otherwise, you'll need to delete nodes and edges first.
  await prisma.roadmap.delete({
    where: { id },
  });

  revalidatePath("/roadmaps");
  return { success: true };
}

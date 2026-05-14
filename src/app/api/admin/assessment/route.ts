import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";

export async function GET() {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const sections = await prisma.quizSection.findMany({
    orderBy: { order: "asc" },
    select: {
      id: true,
      title: true,
      description: true,
      order: true,
      questions: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          prompt: true,
          helperText: true,
          type: true,
          order: true,
          isRequired: true,
          options: {
            orderBy: { order: "asc" },
            select: {
              id: true,
              label: true,
              value: true,
              order: true,
              scoring: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json({ ok: true, sections }, { status: 200 });
}

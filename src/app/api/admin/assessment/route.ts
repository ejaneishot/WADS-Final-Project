import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { getAllowedScoringTags } from "@/lib/assessmentScoring";

export async function GET() {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const [sections, scoringTags] = await Promise.all([
    prisma.quizSection.findMany({
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
    }),
    getAllowedScoringTags(prisma),
  ]);

  return NextResponse.json({ ok: true, sections, scoringTags }, { status: 200 });
}

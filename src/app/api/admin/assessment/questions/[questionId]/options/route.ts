import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";
import {
  buildAllowedScoringTagSet,
  getAllowedScoringTags,
} from "@/lib/assessmentScoring";

const CreateOptionSchema = z.object({
  label: z.string().min(1).max(2000),
  value: z.string().max(96).nullable().optional(),
  scoring: z
    .array(
      z.object({
        tag: z.string().min(1).max(96),
        weight: z.number().int().min(0).max(10),
      }),
    )
    .optional()
    .default([]),
});

type Params = { params: Promise<{ questionId: string }> };

export async function POST(req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { questionId } = await params;
  const body = await req.json().catch(() => null);
  const parsed = CreateOptionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const question = await prisma.quizQuestion.findUnique({
    where: { id: questionId },
    select: { id: true },
  });
  if (!question) {
    return NextResponse.json({ message: "Question not found" }, { status: 404 });
  }

  const allowedList = await getAllowedScoringTags(prisma);
  const allowed = buildAllowedScoringTagSet(allowedList);
  const scoringInput = parsed.data.scoring ?? [];
  const invalidTags = scoringInput
    .map((s) => s.tag)
    .filter((tag) => !allowed.has(tag));
  if (invalidTags.length > 0) {
    return NextResponse.json(
      {
        message:
          "Each scoring tag must match a Career.tag value (e.g. SWE, FE) from the database.",
        invalidTags: [...new Set(invalidTags)],
      },
      { status: 400 },
    );
  }

  const deduped = new Map<string, number>();
  for (const item of scoringInput) {
    deduped.set(item.tag, item.weight);
  }
  const normalized = [...deduped.entries()]
    .filter(([, weight]) => weight > 0)
    .map(([tag, weight]) => ({ tag, weight }));

  const agg = await prisma.quizOption.aggregate({
    where: { questionId },
    _max: { order: true },
  });
  const nextOrder = (agg._max.order ?? 0) + 1;

  const option = await prisma.quizOption.create({
    data: {
      questionId,
      label: parsed.data.label.trim(),
      value: parsed.data.value?.trim() || null,
      order: nextOrder,
      ...(normalized.length > 0 ? { scoring: normalized } : {}),
    },
    select: {
      id: true,
      questionId: true,
      label: true,
      value: true,
      order: true,
      scoring: true,
    },
  });

  return NextResponse.json({ ok: true, option }, { status: 201 });
}

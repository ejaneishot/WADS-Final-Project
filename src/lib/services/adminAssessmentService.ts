// src/lib/services/adminAssessmentService.ts
import { prisma } from "@/lib/db";
import {
  buildAllowedScoringTagSet,
  getAllowedScoringTags,
} from "@/lib/assessmentScoring";
import { z } from "zod";

export const CreateQuestionSchema = z.object({
  sectionId: z.string().min(1),
  prompt: z.string().min(5).max(8000),
  helperText: z.string().max(2000).nullable().optional(),
  type: z.enum(["SINGLE_CHOICE"]).default("SINGLE_CHOICE"),
  isRequired: z.boolean().optional().default(true),
});

export const UpdateQuestionSchema = z.object({
  prompt: z.string().min(5),
  helperText: z.string().nullable().optional(),
  isRequired: z.boolean().optional(),
});

export const CreateOptionSchema = z.object({
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

export const UpdateOptionSchema = z.object({
  label: z.string().min(1),
  value: z.string().nullable().optional(),
  scoring: z
    .array(
      z.object({
        tag: z.string().min(1).max(96),
        weight: z.number().int().min(0).max(10),
      }),
    )
    .default([]),
});

export type CreateQuestionInput = z.infer<typeof CreateQuestionSchema>;
export type UpdateQuestionInput = z.infer<typeof UpdateQuestionSchema>;
export type CreateOptionInput = z.infer<typeof CreateOptionSchema>;
export type UpdateOptionInput = z.infer<typeof UpdateOptionSchema>;

type ScoringItem = { tag: string; weight: number };

async function validateScoringTags(
  scoring: ScoringItem[],
): Promise<
  | { ok: true; normalized: ScoringItem[] }
  | { ok: false; invalidTags: string[] }
> {
  const allowedList = await getAllowedScoringTags(prisma);
  const allowed = buildAllowedScoringTagSet(allowedList);
  const invalidTags = scoring
    .map((s) => s.tag)
    .filter((tag) => !allowed.has(tag));
  if (invalidTags.length > 0) {
    return { ok: false, invalidTags: [...new Set(invalidTags)] };
  }
  const deduped = new Map<string, number>();
  for (const item of scoring) {
    deduped.set(item.tag, item.weight);
  }
  const normalized = [...deduped.entries()]
    .filter(([, weight]) => weight > 0)
    .map(([tag, weight]) => ({ tag, weight }));
  return { ok: true, normalized };
}

export async function getAssessmentEditorPayload() {
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
  return { sections, scoringTags };
}

export async function createQuizQuestion(input: CreateQuestionInput) {
  const section = await prisma.quizSection.findUnique({
    where: { id: input.sectionId },
    select: { id: true },
  });
  if (!section) {
    return { ok: false as const, status: 404 as const, message: "Section not found" };
  }

  const agg = await prisma.quizQuestion.aggregate({
    where: { sectionId: input.sectionId },
    _max: { order: true },
  });
  const nextOrder = (agg._max.order ?? 0) + 1;

  const question = await prisma.quizQuestion.create({
    data: {
      sectionId: input.sectionId,
      prompt: input.prompt.trim(),
      helperText: input.helperText?.trim() || null,
      type: input.type,
      order: nextOrder,
      isRequired: input.isRequired ?? true,
    },
    include: {
      options: { orderBy: { order: "asc" } },
    },
  });

  return { ok: true as const, question };
}

export async function updateQuizQuestion(
  questionId: string,
  input: UpdateQuestionInput,
) {
  const existing = await prisma.quizQuestion.findUnique({
    where: { id: questionId },
    select: { id: true },
  });
  if (!existing) {
    return { ok: false as const, status: 404 as const, message: "Question not found" };
  }

  const updated = await prisma.quizQuestion.update({
    where: { id: questionId },
    data: {
      prompt: input.prompt,
      helperText: input.helperText ?? null,
      isRequired: input.isRequired ?? true,
    },
    select: {
      id: true,
      prompt: true,
      helperText: true,
      isRequired: true,
    },
  });
  return { ok: true as const, question: updated };
}

export async function deleteQuizQuestion(questionId: string) {
  const existing = await prisma.quizQuestion.findUnique({
    where: { id: questionId },
    select: { id: true },
  });
  if (!existing) {
    return { ok: false as const, status: 404 as const, message: "Question not found" };
  }
  await prisma.quizQuestion.delete({ where: { id: questionId } });
  return { ok: true as const };
}

export async function createQuizOption(
  questionId: string,
  input: CreateOptionInput,
) {
  const question = await prisma.quizQuestion.findUnique({
    where: { id: questionId },
    select: { id: true },
  });
  if (!question) {
    return { ok: false as const, status: 404 as const, message: "Question not found" };
  }

  const scoringInput = input.scoring ?? [];
  const scored = await validateScoringTags(scoringInput);
  if (!scored.ok) {
    return {
      ok: false as const,
      status: 400 as const,
      message:
        "Each scoring tag must match a Career.tag value (e.g. SWE, FE) from the database.",
      invalidTags: scored.invalidTags,
    };
  }

  const agg = await prisma.quizOption.aggregate({
    where: { questionId },
    _max: { order: true },
  });
  const nextOrder = (agg._max.order ?? 0) + 1;

  const option = await prisma.quizOption.create({
    data: {
      questionId,
      label: input.label.trim(),
      value: input.value?.trim() || null,
      order: nextOrder,
      ...(scored.normalized.length > 0 ? { scoring: scored.normalized } : {}),
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

  return { ok: true as const, option };
}

export async function updateQuizOption(optionId: string, input: UpdateOptionInput) {
  const existing = await prisma.quizOption.findUnique({
    where: { id: optionId },
    select: { id: true },
  });
  if (!existing) {
    return { ok: false as const, status: 404 as const, message: "Option not found" };
  }

  const scored = await validateScoringTags(input.scoring);
  if (!scored.ok) {
    return {
      ok: false as const,
      status: 400 as const,
      message:
        "Each scoring tag must match a Career.tag value (e.g. SWE, FE) from the database.",
      invalidTags: scored.invalidTags,
    };
  }

  const updated = await prisma.quizOption.update({
    where: { id: optionId },
    data: {
      label: input.label,
      value: input.value ?? null,
      scoring: scored.normalized,
    },
    select: {
      id: true,
      label: true,
      value: true,
      scoring: true,
    },
  });

  return { ok: true as const, option: updated };
}

export async function deleteQuizOption(optionId: string) {
  const existing = await prisma.quizOption.findUnique({
    where: { id: optionId },
    select: { id: true },
  });
  if (!existing) {
    return { ok: false as const, status: 404 as const, message: "Option not found" };
  }
  await prisma.quizOption.delete({ where: { id: optionId } });
  return { ok: true as const };
}

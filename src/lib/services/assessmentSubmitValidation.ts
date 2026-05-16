import type { PrismaClient } from "@/generated/prisma/client";
import type { z } from "zod";
import {
  assessmentSubmitSchema,
  type assessmentAnswerSchema,
} from "@/lib/validators";

export type AssessmentAnswerInput = z.infer<typeof assessmentAnswerSchema>;

type ValidationFailure = {
  ok: false;
  status: number;
  message: string;
  issues?: z.ZodIssue[];
};

type ValidationSuccess = {
  ok: true;
  answers: AssessmentAnswerInput[];
};

export type AssessmentSubmitValidationResult =
  | ValidationSuccess
  | ValidationFailure;

export async function validateAssessmentSubmission(
  prisma: PrismaClient,
  body: unknown,
): Promise<AssessmentSubmitValidationResult> {
  const parsed = assessmentSubmitSchema.safeParse(body);
  if (!parsed.success) {
    return {
      ok: false,
      status: 400,
      message: "Invalid input",
      issues: parsed.error.issues,
    };
  }

  const answers = parsed.data.answers;

  const questionIdsSeen = new Set<string>();
  for (const a of answers) {
    if (questionIdsSeen.has(a.questionId)) {
      return {
        ok: false,
        status: 400,
        message: "Duplicate questionId in answers payload",
      };
    }
    questionIdsSeen.add(a.questionId);
  }

  const catalog = await prisma.quizQuestion.findMany({
    select: {
      id: true,
      isRequired: true,
      options: { select: { id: true } },
    },
  });

  if (catalog.length === 0) {
    return {
      ok: false,
      status: 503,
      message: "Assessment is not configured",
    };
  }

  const catalogById = new Map(catalog.map((q) => [q.id, q]));
  const requiredIds = catalog
    .filter((q) => q.isRequired)
    .map((q) => q.id);

  for (const a of answers) {
    if (!catalogById.has(a.questionId)) {
      return {
        ok: false,
        status: 400,
        message: "Unknown or inactive questionId",
      };
    }
  }

  for (const requiredId of requiredIds) {
    if (!questionIdsSeen.has(requiredId)) {
      return {
        ok: false,
        status: 400,
        message: "Missing answers for required questions",
      };
    }
  }

  if (answers.length > catalog.length) {
    return {
      ok: false,
      status: 400,
      message: "Too many answers in payload",
    };
  }

  const optionIds = answers.map((a) => a.optionId);
  const options = await prisma.quizOption.findMany({
    where: { id: { in: optionIds } },
    select: { id: true, questionId: true },
  });

  if (options.length !== optionIds.length) {
    return {
      ok: false,
      status: 400,
      message: "One or more options not found",
    };
  }

  const optById = new Map(options.map((o) => [o.id, o]));

  for (const a of answers) {
    const opt = optById.get(a.optionId);
    if (!opt || opt.questionId !== a.questionId) {
      return {
        ok: false,
        status: 400,
        message: "optionId does not belong to questionId",
      };
    }

    const allowedOptionIds = new Set(
      catalogById.get(a.questionId)!.options.map((o) => o.id),
    );
    if (!allowedOptionIds.has(a.optionId)) {
      return {
        ok: false,
        status: 400,
        message: "optionId is not valid for this question",
      };
    }
  }

  return { ok: true, answers };
}

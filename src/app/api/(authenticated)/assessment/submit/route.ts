//src/app/api/assessment/submit/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { getAllowedScoringTags } from "@/lib/assessmentScoring";
import { validateAssessmentSubmission } from "@/lib/services/assessmentSubmitValidation";

function topTwo(scores: Record<string, number>) {
  const sorted = Object.entries(scores)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);
  const primary = sorted[0]?.[0];
  const secondary = sorted[1]?.[0];
  return { primary, secondary };
}

/**
 * @swagger
 * /api/assessment/submit:
 *   post:
 *     summary: Submit assessment answers
 *     description: Submits assessment answers, computes role scores based on option scoring weights, stores the attempt, and returns the computed result.
 *     tags:
 *       - Assessment
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - answers
 *             properties:
 *               answers:
 *                 type: array
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   required:
 *                     - questionId
 *                     - optionId
 *                   properties:
 *                     questionId:
 *                       type: string
 *                     optionId:
 *                       type: string
 *     responses:
 *       200:
 *         description: Assessment submitted successfully
 *       400:
 *         description: Invalid or manipulated payload
 *       401:
 *         description: Unauthorized
 */
export async function POST(req: Request) {
  const { user, error } = await requireAuth();
  if (error) return error;

  const body = await req.json().catch(() => null);
  const validation = await validateAssessmentSubmission(prisma, body);
  if (!validation.ok) {
    return NextResponse.json(
      {
        message: validation.message,
        ...(validation.issues ? { issues: validation.issues } : {}),
      },
      { status: validation.status },
    );
  }

  const answers = validation.answers;
  const optionIds = answers.map((a) => a.optionId);

  const options = await prisma.quizOption.findMany({
    where: { id: { in: optionIds } },
    select: { id: true, scoring: true },
  });

  const optById = new Map(options.map((o) => [o.id, o]));

  const allowedList = await getAllowedScoringTags(prisma);
  const allowed = new Set(allowedList);
  const scores: Record<string, number> = {};

  for (const a of answers) {
    const opt = optById.get(a.optionId)!;
    const scoring = opt.scoring as unknown;

    if (Array.isArray(scoring)) {
      for (const item of scoring) {
        const tag = (item as { tag?: unknown }).tag;
        const weight = (item as { weight?: unknown }).weight;
        if (
          typeof tag === "string" &&
          allowed.has(tag) &&
          typeof weight === "number" &&
          Number.isFinite(weight)
        ) {
          scores[tag] = (scores[tag] ?? 0) + weight;
        }
      }
    }
  }

  const { primary, secondary } = topTwo(scores);
  if (!primary) {
    return NextResponse.json(
      { message: "Failed to compute result" },
      { status: 500 },
    );
  }

  const attempt = await prisma.$transaction(async (tx) => {
    const created = await tx.assessmentAttempt.create({
      data: {
        userId: user!.sub,
        scores,
        primary,
        secondary: secondary ?? null,
      },
      select: { id: true, createdAt: true },
    });

    await tx.assessmentAnswer.createMany({
      data: answers.map((a) => ({
        attemptId: created.id,
        questionId: a.questionId,
        optionId: a.optionId,
      })),
    });

    return created;
  });

  return NextResponse.json(
    {
      ok: true,
      attemptId: attempt.id,
      createdAt: attempt.createdAt,
      result: { primary, secondary: secondary ?? null },
      scores,
    },
    { status: 200 },
  );
}

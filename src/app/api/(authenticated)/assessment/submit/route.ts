/**
 * API route: POST /api/assessment/submit
 *
 * Methods: POST
 * Auth: Signed JWT cookie (`requireAuth`).
 * Purpose: Validate answers, aggregate option scoring weights, persist attempt, return primary/secondary roles.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { z } from "zod";
import { getAllowedScoringTags } from "@/lib/assessmentScoring";

const SubmitSchema = z.object({
  answers: z
    .array(
      z.object({
        questionId: z.string().min(1),
        optionId: z.string().min(1),
      }),
    )
    .min(1),
});

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
 *                 description: List of answers selected by the user.
 *                 minItems: 1
 *                 items:
 *                   type: object
 *                   required:
 *                     - questionId
 *                     - optionId
 *                   properties:
 *                     questionId:
 *                       type: string
 *                       example: qst_123456
 *                     optionId:
 *                       type: string
 *                       example: opt_987654
 *           example:
 *             answers:
 *               - questionId: q1
 *                 optionId: opt1
 *               - questionId: q2
 *                 optionId: opt4
 *               - questionId: q3
 *                 optionId: opt7
 *     responses:
 *       200:
 *         description: Assessment submitted and result computed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 attemptId:
 *                   type: string
 *                   example: att_123456
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2026-03-11T10:30:00.000Z
 *                 result:
 *                   type: object
 *                   properties:
 *                     primary:
 *                       type: string
 *                       example: SWE
 *                     secondary:
 *                       type: string
 *                       nullable: true
 *                       example: AI
 *                 scores:
 *                   type: object
 *                   description: Score totals for each career role tag.
 *                   additionalProperties:
 *                     type: number
 *                   example:
 *                     SWE: 8
 *                     FE: 3
 *                     BE: 4
 *                     AI: 7
 *                     SEC: 1
 *                     GAME: 0
 *                     QA: 2
 *                     PM: 3
 *       400:
 *         description: Invalid request payload or validation failure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 issues:
 *                   type: array
 *                   items:
 *                     type: object
 *             examples:
 *               invalidInput:
 *                 value:
 *                   message: Invalid input
 *               duplicateQuestion:
 *                 value:
 *                   message: Duplicate questionId in answers payload
 *               optionMismatch:
 *                 value:
 *                   message: optionId does not belong to questionId
 *       401:
 *         description: Unauthorized – authentication required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *       500:
 *         description: Failed to compute result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to compute result
 */
export async function POST(req: Request) {
  const { user, error } = await requireAuth();
  if (error) return error;

  const body = await req.json().catch(() => null);

  // Validation: SubmitSchema — non-empty answers with questionId + optionId
  const parsed = SubmitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const answers = parsed.data.answers;

  // Validation: each questionId may appear only once in the payload
  const qSet = new Set<string>();
  for (const a of answers) {
    if (qSet.has(a.questionId)) {
      return NextResponse.json(
        { message: "Duplicate questionId in answers payload" },
        { status: 400 },
      );
    }
    qSet.add(a.questionId);
  }

  // Business logic: load options and verify each belongs to its question
  const optionIds = answers.map((a) => a.optionId);

  const options = await prisma.quizOption.findMany({
    where: { id: { in: optionIds } },
    select: {
      id: true,
      questionId: true,
      scoring: true,
      question: { select: { id: true } },
    },
  });

  if (options.length !== optionIds.length) {
    return NextResponse.json(
      { message: "One or more options not found" },
      { status: 400 },
    );
  }

  // Build lookup
  const optById = new Map(options.map((o) => [o.id, o]));

  // Validate all (questionId, optionId) pairs match
  for (const a of answers) {
    const opt = optById.get(a.optionId);
    if (!opt) {
      return NextResponse.json(
        { message: "Invalid optionId" },
        { status: 400 },
      );
    }
    if (opt.questionId !== a.questionId) {
      return NextResponse.json(
        { message: "optionId does not belong to questionId" },
        { status: 400 },
      );
    }
  }

  // Business logic: sum scoring weights per career tag from option JSON
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
          typeof weight === "number"
        ) {
          scores[tag] = (scores[tag] ?? 0) + weight;
        }
      }
    }
  }

  const { primary, secondary } = topTwo(scores);
  // Error handling: no positive scores means scoring data misconfigured
  if (!primary) {
    return NextResponse.json(
      { message: "Failed to compute result" },
      { status: 500 },
    );
  }

  // Store attempt + answers in a transaction
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

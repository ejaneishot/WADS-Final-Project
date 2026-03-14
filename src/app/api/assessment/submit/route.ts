//src/app/api/assessment/submit/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { z } from "zod";

const DEFAULT_QUIZ_SLUG = "tech-career-matcher-v1";

const SubmitSchema = z.object({
  quizSlug: z.string().min(1).optional(),
  answers: z
    .array(
      z.object({
        questionId: z.string().min(1),
        optionId: z.string().min(1),
      }),
    )
    .min(1),
});

type RoleTag = "SWE" | "FE" | "BE" | "AI" | "SEC" | "GAME" | "QA" | "PM";
const ROLE_TAGS: RoleTag[] = [
  "SWE",
  "FE",
  "BE",
  "AI",
  "SEC",
  "GAME",
  "QA",
  "PM",
];

function emptyScores(): Record<RoleTag, number> {
  return {
    SWE: 0,
    FE: 0,
    BE: 0,
    AI: 0,
    SEC: 0,
    GAME: 0,
    QA: 0,
    PM: 0,
  };
}

function topTwo(scores: Record<RoleTag, number>) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0]?.[0] as RoleTag | undefined;
  const secondary = sorted[1]?.[0] as RoleTag | undefined;
  return { primary, secondary };
}

/**
 * @swagger
 * /api/assessment/submit:
 *   post:
 *     summary: Submit assessment answers
 *     description: Submits answers for the assessment quiz, computes role scores based on option scoring weights, stores the attempt, and returns the computed result.
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
 *               quizSlug:
 *                 type: string
 *                 description: Slug of the quiz. If omitted, the default quiz is used.
 *                 example: tech-career-matcher-v1
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
 *             quizSlug: tech-career-matcher-v1
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
 *       404:
 *         description: Quiz not found or inactive
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Quiz not found or inactive
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
  const parsed = SubmitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const quizSlug = parsed.data.quizSlug ?? DEFAULT_QUIZ_SLUG;
  const answers = parsed.data.answers;

  // Prevent duplicates of same question in payload
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

  // Load quiz
  const quiz = await prisma.quiz.findUnique({
    where: { slug: quizSlug },
    select: { id: true, isActive: true },
  });

  if (!quiz || !quiz.isActive) {
    return NextResponse.json(
      { message: "Quiz not found or inactive" },
      { status: 404 },
    );
  }

  // Fetch all selected options, and verify:
  // - option exists
  // - option belongs to question
  // - question belongs to quiz
  const optionIds = answers.map((a) => a.optionId);

  const options = await prisma.quizOption.findMany({
    where: { id: { in: optionIds } },
    select: {
      id: true,
      questionId: true,
      scoring: true,
      question: { select: { id: true, quizId: true } },
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

  // Validate all (questionId, optionId) pairs match & belong to quiz
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
    if (opt.question.quizId !== quiz.id) {
      return NextResponse.json(
        { message: "Answer question does not belong to this quiz" },
        { status: 400 },
      );
    }
  }

  // Compute scores from option.scoring JSON
  const scores = emptyScores();

  for (const a of answers) {
    const opt = optById.get(a.optionId)!;
    const scoring = opt.scoring as unknown;

    // scoring expected: [{ tag: "SWE", weight: 2 }, ...]
    if (Array.isArray(scoring)) {
      for (const item of scoring) {
        const tag = (item as any)?.tag;
        const weight = (item as any)?.weight;
        if (ROLE_TAGS.includes(tag) && typeof weight === "number") {
          scores[tag] += weight;
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

  // Store attempt + answers in a transaction
  const attempt = await prisma.$transaction(async (tx) => {
    const created = await tx.assessmentAttempt.create({
      data: {
        userId: user!.sub,
        quizId: quiz.id,
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

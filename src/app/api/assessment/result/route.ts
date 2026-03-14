// src/app/api/assessment/result/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

const DEFAULT_QUIZ_SLUG = "tech-career-matcher-v1";

/**
 * @swagger
 * /api/assessment/result:
 *   get:
 *     summary: Get latest assessment result
 *     description: Returns the most recent assessment result for the authenticated user for a given quiz.
 *     tags:
 *       - Assessment
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: quizSlug
 *         required: false
 *         schema:
 *           type: string
 *         description: Slug of the quiz. If omitted, the default quiz is used.
 *         example: tech-career-matcher-v1
 *     responses:
 *       200:
 *         description: Successfully retrieved assessment result or confirmed no result exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 hasResult:
 *                   type: boolean
 *                   example: true
 *                 quiz:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: clxquiz123abc
 *                     slug:
 *                       type: string
 *                       example: tech-career-matcher-v1
 *                     title:
 *                       type: string
 *                       example: Technology Career Matcher
 *                 attempt:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: clxattempt123
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2026-03-10T12:00:00.000Z
 *                 result:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     primary:
 *                       type: string
 *                       example: Software Engineer
 *                     secondary:
 *                       type: string
 *                       example: Data Scientist
 *                     scores:
 *                       type: object
 *                       additionalProperties:
 *                         type: number
 *                       example:
 *                         Software Engineer: 82
 *                         Data Scientist: 74
 *                         Cybersecurity Analyst: 65
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
 *         description: Quiz not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Quiz not found
 *       500:
 *         description: Failed to retrieve assessment result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to load latest assessment result.
 */
export async function GET(req: Request) {
  const { user, error } = await requireAuth();
  if (error) return error;

  try {
    const { searchParams } = new URL(req.url);
    const quizSlug = searchParams.get("quizSlug") ?? DEFAULT_QUIZ_SLUG;

    // Find quiz id (so slug changes don't break attempts)
    const quiz = await prisma.quiz.findUnique({
      where: { slug: quizSlug },
      select: { id: true, title: true, slug: true },
    });

    if (!quiz) {
      return NextResponse.json({ message: "Quiz not found" }, { status: 404 });
    }

    const attempt = await prisma.assessmentAttempt.findFirst({
      where: { userId: user!.sub, quizId: quiz.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        createdAt: true,
        primary: true,
        secondary: true,
        scores: true,
      },
    });

    if (!attempt) {
      return NextResponse.json(
        { ok: true, hasResult: false, message: "No assessment result yet." },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        hasResult: true,
        quiz: { id: quiz.id, slug: quiz.slug, title: quiz.title },
        attempt: {
          id: attempt.id,
          createdAt: attempt.createdAt,
        },
        result: {
          primary: attempt.primary,
          secondary: attempt.secondary,
          scores: attempt.scores,
        },
      },
      { status: 200 },
    );
  } catch (e) {
    console.error("GET /api/assessment/result error:", e);
    return NextResponse.json(
      { message: "Failed to load latest assessment result." },
      { status: 500 },
    );
  }
}

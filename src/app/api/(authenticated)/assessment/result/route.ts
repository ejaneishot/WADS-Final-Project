/**
 * API route: GET /api/assessment/result
 *
 * Methods: GET
 * Auth: Signed JWT cookie (`requireAuth`).
 * Purpose: Return the user's most recent assessment attempt scores and role match.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

const ASSESSMENT_META = {
  id: "tech-career-matcher",
  slug: "tech-career-matcher-v1",
  title: "Tech Career Matcher (Buzzfeed-style) v1",
} as const;

/**
 * @swagger
 * /api/assessment/result:
 *   get:
 *     summary: Get latest assessment result
 *     description: Returns the most recent assessment result for the authenticated user.
 *     tags:
 *       - Assessment
 *     security:
 *       - cookieAuth: []
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
export async function GET() {
  const { user, error } = await requireAuth();
  if (error) return error;

  try {
    // Business logic: latest attempt for this user (or hasResult: false)
    const attempt = await prisma.assessmentAttempt.findFirst({
      where: { userId: user!.sub },
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
        quiz: ASSESSMENT_META,
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

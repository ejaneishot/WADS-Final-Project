//src/app/api/assessment/questions/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

const ASSESSMENT_META = {
  id: "tech-career-matcher",
  slug: "tech-career-matcher-v1",
  title: "Tech Career Matcher (Buzzfeed-style) v1",
  description:
    "A multiple-choice assessment that maps preferences to tech role clusters.",
} as const;

/**
 * @swagger
 * /api/assessment/questions:
 *   get:
 *     summary: Get assessment questions
 *     description: Returns the assessment sections, questions, and options. Requires authentication.
 *     tags:
 *       - Assessment
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved assessment questions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 quiz:
 *                   type: object
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
 *                     description:
 *                       type: string
 *                       example: Assessment to recommend suitable tech careers.
 *                 sections:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                         example: Interests
 *                       description:
 *                         type: string
 *                         nullable: true
 *                       order:
 *                         type: integer
 *                         example: 1
 *                       questions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             prompt:
 *                               type: string
 *                               example: Which activities do you enjoy the most?
 *                             helperText:
 *                               type: string
 *                               nullable: true
 *                             type:
 *                               type: string
 *                               example: multiple-choice
 *                             order:
 *                               type: integer
 *                             isRequired:
 *                               type: boolean
 *                               example: true
 *                             options:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                   label:
 *                                     type: string
 *                                     example: Building software
 *                                   value:
 *                                     type: string
 *                                     example: software
 *                                   order:
 *                                     type: integer
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
 *         description: Assessment questions not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Assessment questions not found.
 *       500:
 *         description: Server error while retrieving quiz questions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to load assessment questions.
 */
export async function GET() {
  // Auth (JWT)
  const { error } = await requireAuth();
  if (error) return error;

  try {
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
              },
            },
          },
        },
      },
    });

    if (sections.length === 0) {
      return NextResponse.json(
        { error: "Assessment questions not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        quiz: ASSESSMENT_META,
        sections,
      },
      { status: 200 },
    );
  } catch (e) {
    console.error("GET /api/assessment/questions error:", e);
    return NextResponse.json(
      { error: "Failed to load assessment questions." },
      { status: 500 },
    );
  }
}

//src/app/api/assessment/questions/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

// If you seeded this slug, keep it as the default
const DEFAULT_QUIZ_SLUG = "tech-career-matcher-v1";

/**
 * @swagger
 * /api/assessment/questions:
 *   get:
 *     summary: Get assessment quiz questions
 *     description: Returns the active assessment quiz with its sections, questions, and options. Requires authentication.
 *     tags:
 *       - Assessment
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: false
 *         schema:
 *           type: string
 *         description: Quiz slug identifier. If omitted, the default quiz will be returned.
 *         example: tech-career-matcher-v1
 *     responses:
 *       200:
 *         description: Successfully retrieved quiz questions
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
 *         description: Quiz not found or inactive
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Assessment quiz not found or inactive.
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
export async function GET(req: Request) {
  // Auth (JWT)
  const { error } = await requireAuth();
  if (error) return error;

  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug") ?? DEFAULT_QUIZ_SLUG;

    const quiz = await prisma.quiz.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        isActive: true,
        sections: {
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
                    // IMPORTANT: do NOT leak scoring to the client unless you want to.
                    // scoring: true,
                  },
                },
              },
            },
          },
        },

        // Optional: if you also support questions directly under quiz (no sections),
        // you can include them here and merge client-side.
        // questions: { ... }
      },
    });

    if (!quiz || !quiz.isActive) {
      return NextResponse.json(
        { error: "Assessment quiz not found or inactive." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        quiz: {
          id: quiz.id,
          slug: quiz.slug,
          title: quiz.title,
          description: quiz.description,
        },
        sections: quiz.sections,
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

// src/app/api/careers/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { validateCareerProgressUpdate } from "@/lib/services/careerProgressValidation";

/**
 * @swagger
 * /api/careers:
 *   get:
 *     summary: Get all careers and user progress
 *     description: Returns all tech career tracks. When authenticated, includes saved milestone progress.
 *     tags:
 *       - Careers
 *     responses:
 *       200:
 *         description: Careers and optional progress map
 *       500:
 *         description: Server error
 */
export async function GET(req: Request) {
  try {
    // 1. Fetch all careers from the database
    const careers = await prisma.career.findMany({
      orderBy: { title: "asc" },
      select: {
        id: true,
        slug: true,
        tag: true,
        title: true,
        industry: true,
        description: true,
        icon: true,
        color: true,
        gradient: true,
        border: true,
        milestones: true,
      },
    });

    // 2. Try to get the user session (fail gracefully if they are just browsing as a guest)
    const { user, error } = await requireAuth().catch(() => ({
      user: null,
      error: true,
    }));

    let progress: Record<string, number[]> = {};

    // 3. If logged in, fetch their specific milestone checklist progress
    if (user && !error) {
      const userProgress = await prisma.userCareerProgress.findMany({
        where: { userId: user.sub },
      });

      // Map it into an easy dictionary for the frontend: { "career-id": [0, 2, 3] }
      userProgress.forEach((up) => {
        progress[up.careerId] = up.completedMilestones;
      });
    }

    return NextResponse.json(
      {
        careers,
        progress,
      },
      { status: 200 },
    );
  } catch (e) {
    console.error("GET /api/careers error:", e);
    return NextResponse.json(
      { message: "Failed to load careers." },
      { status: 500 },
    );
  }
}

/**
 * @swagger
 * /api/careers:
 *   post:
 *     summary: Update career milestone progress
 *     description: Saves the user's checked milestones for a career track.
 *     tags:
 *       - Careers
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - careerId
 *               - completedMilestones
 *             properties:
 *               careerId:
 *                 type: string
 *               completedMilestones:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: Progress saved
 *       400:
 *         description: Invalid payload
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */
export async function POST(req: Request) {
  const { user, error } = await requireAuth();
  if (error) return error;

  try {
    const body = await req.json().catch(() => null);
    const validation = await validateCareerProgressUpdate(prisma, body);
    if (!validation.ok) {
      return NextResponse.json(
        {
          message: validation.message,
          ...(validation.issues ? { issues: validation.issues } : {}),
        },
        { status: validation.status },
      );
    }

    const { careerId, completedMilestones } = validation;

    const progress = await prisma.userCareerProgress.upsert({
      where: {
        userId_careerId: {
          userId: user!.sub,
          careerId,
        },
      },
      update: {
        completedMilestones,
      },
      create: {
        userId: user!.sub,
        careerId,
        completedMilestones,
      },
    });

    return NextResponse.json({ ok: true, progress }, { status: 200 });
  } catch (e) {
    console.error("POST /api/careers error:", e);
    return NextResponse.json(
      { message: "Failed to save milestone progress." },
      { status: 500 },
    );
  }
}

// src/app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getAuth } from "@/lib/auth";

/**
 * @swagger
 * /api/me:
 *   get:
 *     summary: Get current authenticated user
 *     description: Returns the currently authenticated user's basic account information and profile data.
 *     tags:
 *       - Users
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved current user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: clx123abc456def789ghi012
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: student@example.com
 *                     role:
 *                       type: string
 *                       example: student
 *                 profile:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     major:
 *                       type: string
 *                       nullable: true
 *                       example: Computer Science
 *                     semester:
 *                       type: integer
 *                       nullable: true
 *                       example: 4
 *                     gpaRange:
 *                       type: string
 *                       nullable: true
 *                       example: 3.5-4.0
 *                     interests:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["AI", "Cybersecurity"]
 *       401:
 *         description: Unauthorized – user not logged in or token invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 */
export async function GET() {
  const auth = await getAuth();
  if (!auth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // auth.sub is userId from token
  const user = await prisma.user.findUnique({
    where: { id: auth.sub },
    select: { id: true, email: true, role: true },
  });

  if (!user) {
    // token valid but user doesn't exist anymore
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Optional: include profile too (remove if you don't want it)
  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
    select: {
      major: true,
      semester: true,
      gpaRange: true,
      interests: true,
    },
  });

  return NextResponse.json({ ok: true, user, profile }, { status: 200 });
}

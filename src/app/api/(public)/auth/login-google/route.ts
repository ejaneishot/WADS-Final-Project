//src/app/api/auth/login-google/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { admin } from "@/lib/firebaseAdmin";
import { setAuthCookie, signToken } from "@/lib/auth";

/**
 * @swagger
 * /api/auth/login-google:
 *   post:
 *     summary: Log in or register a user with Google
 *     description: Verifies a Firebase Google ID token, creates the user and profile if they do not exist yet, issues an app JWT, and stores it in a secure cookie.
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *         description: Firebase ID token in Bearer format.
 *         example: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6...
 *     responses:
 *       200:
 *         description: Google login successful
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
 *                       example: user@example.com
 *                     role:
 *                       type: string
 *                       example: student
 *                 profile:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       nullable: true
 *                       example: John Doe
 *                     picture:
 *                       type: string
 *                       nullable: true
 *                       example: https://lh3.googleusercontent.com/a/example-photo
 *       400:
 *         description: Google account has no email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Google account has no email
 *       401:
 *         description: Missing or invalid Firebase token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             examples:
 *               missingBearerToken:
 *                 summary: Missing Bearer token
 *                 value:
 *                   message: Missing Authorization Bearer token
 *               invalidFirebaseToken:
 *                 summary: Invalid Firebase token
 *                 value:
 *                   message: Invalid Firebase token
 */
export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization") || "";
  const match = authHeader.match(/^Bearer (.+)$/);

  if (!match) {
    return NextResponse.json(
      { message: "Missing Authorization Bearer token" },
      { status: 401 },
    );
  }

  const idToken = match[1];

  try {
    // Verify Firebase ID token
    const decoded = await admin.auth().verifyIdToken(idToken);

    const email = decoded.email;
    if (!email) {
      return NextResponse.json(
        { message: "Google account has no email" },
        { status: 400 },
      );
    }

    // Optional: get nicer profile fields
    const name = decoded.name ?? null;
    const picture = decoded.picture ?? null;

    // Find or create user in your DB
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          passwordHash: null,
          role: "student", // must match enum exactly
        },
      });

      // create profile like register does
      await prisma.profile.create({
        data: {
          userId: user.id,
          interests: [],
          major: null,
          semester: null,
          gpaRange: null,
        },
      });
    } else {
      // ensure profile exists (safety net)
      const profile = await prisma.profile.findUnique({
        where: { userId: user.id },
      });

      if (!profile) {
        await prisma.profile.create({
          data: {
            userId: user.id,
            interests: [],
            major: null,
            semester: null,
            gpaRange: null,
          },
        });
      }
    }

    // Issue your app JWT (same as password login)
    const token = signToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
    await setAuthCookie(token);

    return NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, role: user.role },
      profile: { name, picture },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Invalid Firebase token" },
      { status: 401 },
    );
  }
}

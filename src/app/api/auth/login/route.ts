// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { loginSchema } from "@/lib/validators";
import { setAuthCookie, signToken, verifyPassword } from "@/lib/auth";

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     description: Authenticates a user using email and password, then stores a signed JWT in a secure cookie.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: MySecurePassword123
 *     responses:
 *       200:
 *         description: Login successful
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
 *                       example: USER
 *       400:
 *         description: Invalid input or account uses Google login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid input
 *                 issues:
 *                   type: array
 *                   items:
 *                     type: object
 *             examples:
 *               invalidInput:
 *                 summary: Validation failed
 *                 value:
 *                   message: Invalid input
 *                   issues:
 *                     - path: ["email"]
 *                       message: Invalid email
 *               googleLoginOnly:
 *                 summary: Google login account
 *                 value:
 *                   message: This account uses Google login. Please sign in with Google.
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid credentials
 */
// Handle POST requests for user login
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  // Validate request body using Zod schema
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );

  // Extract validated email and password
  const { email, password } = parsed.data;

  // Look up user by email
  const user = await prisma.user.findUnique({ where: { email } });

  // If user not found, return generic auth error (prevents user enumeration)
  if (!user)
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );

  // If user exists but has no password hash, they registered via Google OAuth
  if (!user.passwordHash) {
    return NextResponse.json(
      {
        message: "This account uses Google login. Please sign in with Google.",
      },
      { status: 400 },
    );
  }

  // Verify provided password against stored hash
  const ok = await verifyPassword(password, user.passwordHash);

  // If password is incorrect, return generic auth error
  if (!ok)
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );

  // Create signed JWT token containing basic user claims
  const token = signToken({ sub: user.id, email: user.email, role: user.role });

  // Store token in secure auth cookie
  await setAuthCookie(token);

  // Return success response with minimal user info
  return NextResponse.json({
    ok: true,
    user: { id: user.id, email: user.email, role: user.role },
  });
}

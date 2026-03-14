//src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/validators";
import { hashPassword, setAuthCookie, signToken } from "@/lib/auth";

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new account using email and password, generates a default profile, issues a JWT token, and stores it in a secure authentication cookie.
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
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: student@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: MySecurePassword123
 *               role:
 *                 type: string
 *                 example: student
 *                 description: Role assigned to the new user (must match your Prisma enum).
 *     responses:
 *       201:
 *         description: User registered successfully
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
 *       400:
 *         description: Invalid input data
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
 *       409:
 *         description: Email already registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email already registered
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );

  const { email, password, role } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing)
    return NextResponse.json(
      { message: "Email already registered" },
      { status: 409 },
    );

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, passwordHash, role },
  });

  // Create empty profile by default
  await prisma.profile.create({
    data: {
      userId: user.id,
      interests: [],
      major: null,
      semester: null,
      gpaRange: null,
    },
  });

  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  await setAuthCookie(token);

  return NextResponse.json(
    { ok: true, user: { id: user.id, email: user.email, role: user.role } },
    { status: 201 },
  );
}

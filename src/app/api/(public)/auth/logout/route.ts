/**
 * API route: POST /api/auth/logout
 *
 * Methods: POST
 * Auth: None (public). Clears the session cookie whether or not one was present.
 * Purpose: End the current session by removing the auth cookie.
 */
import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/auth";

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Log out the current user
 *     description: Clears the authentication cookie and logs the user out of the application.
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 */
export async function POST() {
  // Business logic: clear session cookie (idempotent)
  await clearAuthCookie();
  return NextResponse.json({ ok: true }, { status: 200 });
}

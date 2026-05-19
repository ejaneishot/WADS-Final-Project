/**
 * Authentication primitives: password hashing, JWT issue/verify, and HTTP-only session cookies.
 * Used by API routes and server components; middleware only checks cookie presence.
 */
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

export type Role = "student" | "admin";
export type JwtPayload = { sub: string; email: string; role: Role };

/** Hash passwords with bcrypt cost factor 10 before storing in the database. */
export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

/** Issue a signed JWT (7-day expiry) embedded in the session cookie. */
export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7d" });
}

/** Returns decoded payload or null if the token is missing, expired, or tampered. */
export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

/** Set the HTTP-only session cookie after login or registration. */
export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(env.COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: env.COOKIE_SECURE,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

/** Clear the session cookie on logout (maxAge 0). */
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(env.COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: env.COOKIE_SECURE,
    path: "/",
    maxAge: 0,
  });
}

/** Read and verify the current user's JWT from the request cookies. */
export async function getAuth(): JwtPayload | null {
  const cookieStore = await cookies();
  const token = cookieStore.get(
    process.env.COOKIE_NAME ?? "smartcareer_token",
  )?.value;
  if (!token) return null;

  return verifyToken(token);
}

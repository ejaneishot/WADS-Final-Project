//src/lib/auth.ts
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

export type Role = "student" | "admin";
export type JwtPayload = { sub: string; email: string; role: Role };

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

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

export async function getAuth(): JwtPayload | null {
  const cookieStore = await cookies();
  const token = cookieStore.get(
    process.env.COOKIE_NAME ?? "smartcareer_token",
  )?.value;
  if (!token) return null;

  // verify token and return payload
  return verifyToken(token); // whatever your existing logic is
}

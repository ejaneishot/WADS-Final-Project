import { jwtVerify } from "jose";
import type { JwtPayload, Role } from "@/lib/auth";

/** JWT verify for Next.js middleware (Edge-safe; matches HS256 tokens from jsonwebtoken). */
export async function verifyAuthToken(
  token: string,
): Promise<JwtPayload | null> {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 16) return null;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
    );

    const sub = payload.sub;
    const email = payload.email;
    const role = payload.role;

    if (typeof sub !== "string" || typeof email !== "string") return null;
    if (role !== "student" && role !== "admin") return null;

    return { sub, email, role: role as Role };
  } catch {
    return null;
  }
}

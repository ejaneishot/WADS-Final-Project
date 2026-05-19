/**
 * Role-based access control helpers for API route handlers.
 * Returns a NextResponse error or the authenticated user; callers branch on `error`.
 */
import { NextResponse } from "next/server";
import type { Role } from "@/lib/auth";
import { getAuth } from "@/lib/auth";

/** Require any authenticated user (401 if no valid session). */
export async function requireAuth() {
  const user = await getAuth();
  if (!user)
    return {
      user: null,
      error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    };
  return { user, error: null };
}

/** Require authentication and one of the given roles (403 if role mismatch). */
export async function requireRole(roles: Role[]) {
  const { user, error } = await requireAuth();
  if (error) return { user: null, error };
  if (!roles.includes(user!.role)) {
    return {
      user: null,
      error: NextResponse.json({ message: "Forbidden" }, { status: 403 }),
    };
  }
  return { user, error: null };
}

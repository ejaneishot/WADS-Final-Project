import { NextResponse } from "next/server";
import type { Role } from "@/lib/auth";
import { getAuth } from "@/lib/auth";

export function requireAuth() {
  const user = getAuth();
  if (!user) return { user: null, error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }) };
  return { user, error: null };
}

export function requireRole(roles: Role[]) {
  const { user, error } = requireAuth();
  if (error) return { user: null, error };
  if (!roles.includes(user!.role)) {
    return { user: null, error: NextResponse.json({ message: "Forbidden" }, { status: 403 }) };
  }
  return { user, error: null };
}

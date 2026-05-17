//src/lib/rbac.ts
import { NextResponse } from "next/server";
import type { Role } from "@/lib/auth";
import { getAuth } from "@/lib/auth";

export async function requireAuth() {
  const user = await getAuth();
  if (!user)
    return {
      user: null,
      error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    };
  return { user, error: null };
}

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

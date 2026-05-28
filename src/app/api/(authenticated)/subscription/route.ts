/**
 * API route: GET /api/subscription
 * Returns the current user's plan (free | pro).
 * Auth: requires signed JWT.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

export async function GET() {
  const { user, error } = await requireAuth();
  if (error) return error;

  try {
    const dbUser = await prisma.user.findUnique({
      where: { id: user!.sub },
      select: { plan: true },
    });

    return NextResponse.json({
      plan: dbUser?.plan ?? "free",
    });
  } catch (e) {
    console.error("GET /api/subscription error:", e);
    return NextResponse.json({ message: "Failed to load subscription." }, { status: 500 });
  }
}
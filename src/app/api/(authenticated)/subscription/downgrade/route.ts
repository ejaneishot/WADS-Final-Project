/**
 * API route: POST /api/subscription/downgrade
 * Downgrades the current user back to the free plan.
 * Auth: requires signed JWT.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

export async function POST() {
  const { user, error } = await requireAuth();
  if (error) return error;

  try {
    await prisma.user.update({
      where: { id: user!.sub },
      data: { plan: "free" },
    });

    return NextResponse.json({ ok: true, plan: "free" });
  } catch (e) {
    console.error("POST /api/subscription/downgrade error:", e);
    return NextResponse.json({ message: "Failed to downgrade plan." }, { status: 500 });
  }
}
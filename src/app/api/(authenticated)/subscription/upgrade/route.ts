/**
 * API route: POST /api/subscription/upgrade
 * Upgrades the current user to the pro plan.
 * Auth: requires signed JWT.
 *
 * In production this would verify a Stripe payment intent before upgrading.
 * For now it upgrades immediately (placeholder until payment is wired up).
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
      data: { plan: "pro" },
    });

    return NextResponse.json({ ok: true, plan: "pro" });
  } catch (e) {
    console.error("POST /api/subscription/upgrade error:", e);
    return NextResponse.json({ message: "Failed to upgrade plan." }, { status: 500 });
  }
}
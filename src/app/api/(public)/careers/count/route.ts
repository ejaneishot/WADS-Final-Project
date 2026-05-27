/**
 * API route: GET /api/careers/count
 *
 * Methods: GET
 * Auth: None (public).
 * Purpose: Return total career rows for marketing/home-page stats.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const count = await prisma.career.count();
    return NextResponse.json({ count }, { status: 200 });
  } catch (e) {
    // Error handling: database failures → 500
    console.error("GET /api/careers/count:", e);
    return NextResponse.json(
      { message: "Failed to load career count." },
      { status: 500 },
    );
  }
}

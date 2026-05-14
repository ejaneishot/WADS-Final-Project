import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * Public count of career rows (each career is unique by id / slug).
 * Used on the marketing home page.
 */
export async function GET() {
  try {
    const count = await prisma.career.count();
    return NextResponse.json({ count }, { status: 200 });
  } catch (e) {
    console.error("GET /api/careers/count:", e);
    return NextResponse.json(
      { message: "Failed to load career count." },
      { status: 500 },
    );
  }
}

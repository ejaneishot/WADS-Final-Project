import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { createCareerSchema } from "@/lib/validators";

export async function GET() {
  const careers = await prisma.career.findMany({ orderBy: { title: "asc" } });
  return NextResponse.json({ careers });
}

export async function POST(req: Request) {
  const { error } = requireRole(["admin"]);
  if (error) return error;

  const body = await req.json().catch(() => null);
  const parsed = createCareerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Invalid input", issues: parsed.error.issues }, { status: 400 });

  const career = await prisma.career.create({ data: parsed.data });
  return NextResponse.json({ ok: true, career }, { status: 201 });
}

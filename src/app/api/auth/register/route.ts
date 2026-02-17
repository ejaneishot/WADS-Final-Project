import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/validators";
import { hashPassword, setAuthCookie, signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Invalid input", issues: parsed.error.issues }, { status: 400 });

  const { email, password, role } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ message: "Email already registered" }, { status: 409 });

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, passwordHash, role }
  });

  // Create empty profile by default
  await prisma.profile.create({
    data: { userId: user.id, interests: [], major: null, semester: null, gpaRange: null }
  });

  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  setAuthCookie(token);

  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, role: user.role } }, { status: 201 });
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { loginSchema } from "@/lib/validators";
import { setAuthCookie, signToken, verifyPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Invalid input", issues: parsed.error.issues }, { status: 400 });

  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  setAuthCookie(token);

  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, role: user.role } });
}

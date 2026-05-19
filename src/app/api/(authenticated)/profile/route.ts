/**
 * API route: GET | PUT /api/profile
 *
 * Methods: GET, PUT
 * Auth: Signed JWT cookie (`requireAuth`).
 * Purpose: Read or upsert the current user's profile and replace linked skill rows.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { profileSchema } from "@/lib/validators";

export async function GET() {
  const { user, error } = await requireAuth();
  if (error) return error;

  // Business logic: load profile with nested skills for the dashboard form
  const profile = await prisma.profile.findUnique({
    where: { userId: user!.sub },
    include: { skills: { include: { skill: true } } },
  });

  return NextResponse.json({
    name: profile?.name ?? null,
    major: profile?.major ?? null,
    semester: profile?.semester ?? null,
    gpaRange: profile?.gpaRange ?? null,
    interests: profile?.interests ?? [],
    skills: (profile?.skills ?? []).map((s) => ({
      name: s.skill.name,
      level: s.level,
    })),
  });
}

export async function PUT(req: Request) {
  const { user, error } = await requireAuth();
  if (error) return error;

  const body = await req.json().catch(() => null);

  // Validation: profileSchema (demographics, interests, skills array)
  const parsed = profileSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );

  const data = parsed.data;

  // Upsert profile
  const prof = await prisma.profile.upsert({
    where: { userId: user!.sub },
    update: {
      name: data.name ?? null,
      major: data.major ?? null,
      semester: data.semester ?? null,
      gpaRange: data.gpaRange ?? null,
      interests: data.interests ?? [],
    },
    create: {
      userId: user!.sub,
      name: data.name ?? null,
      major: data.major ?? null,
      semester: data.semester ?? null,
      gpaRange: data.gpaRange ?? null,
      interests: data.interests ?? [],
    },
  });

  // Business logic: full replace of user skills (delete-all then recreate)
  await prisma.userSkill.deleteMany({ where: { profileId: prof.id } });

  for (const s of data.skills ?? []) {
    const skill = await prisma.skill.upsert({
      where: { name: s.name },
      update: {},
      create: { name: s.name, category: "general" },
    });
    await prisma.userSkill.create({
      data: { profileId: prof.id, skillId: skill.id, level: s.level },
    });
  }

  return NextResponse.json({ ok: true });
}

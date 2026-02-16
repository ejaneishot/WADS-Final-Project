import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { profileSchema } from "@/lib/validators";

export async function GET() {
  const { user, error } = requireAuth();
  if (error) return error;

  const profile = await prisma.profile.findUnique({
    where: { userId: user!.sub },
    include: { skills: { include: { skill: true } } }
  });

  return NextResponse.json({
    major: profile?.major ?? null,
    semester: profile?.semester ?? null,
    gpaRange: profile?.gpaRange ?? null,
    interests: profile?.interests ?? [],
    skills: (profile?.skills ?? []).map((s) => ({ name: s.skill.name, level: s.level }))
  });
}

export async function PUT(req: Request) {
  const { user, error } = requireAuth();
  if (error) return error;

  const body = await req.json().catch(() => null);
  const parsed = profileSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Invalid input", issues: parsed.error.issues }, { status: 400 });

  const data = parsed.data;

  // Upsert profile
  const prof = await prisma.profile.upsert({
    where: { userId: user!.sub },
    update: {
      major: data.major ?? null,
      semester: data.semester ?? null,
      gpaRange: data.gpaRange ?? null,
      interests: data.interests ?? []
    },
    create: {
      userId: user!.sub,
      major: data.major ?? null,
      semester: data.semester ?? null,
      gpaRange: data.gpaRange ?? null,
      interests: data.interests ?? []
    }
  });

  // Replace skills (simple approach)
  await prisma.userSkill.deleteMany({ where: { profileId: prof.id } });

  for (const s of data.skills ?? []) {
    const skill = await prisma.skill.upsert({
      where: { name: s.name },
      update: {},
      create: { name: s.name, category: "general" }
    });
    await prisma.userSkill.create({
      data: { profileId: prof.id, skillId: skill.id, level: s.level }
    });
  }

  return NextResponse.json({ ok: true });
}

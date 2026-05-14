import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";

const CreateCareerSchema = z.object({
  title: z.string().min(2),
  industry: z.string().min(2),
  description: z.string().min(10),
});

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(req: Request) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const body = await req.json().catch(() => null);
  const parsed = CreateCareerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { title, industry, description } = parsed.data;

  const baseSlug = slugify(title);
  if (!baseSlug) {
    return NextResponse.json({ message: "Invalid title" }, { status: 400 });
  }

  let slug = baseSlug;
  let suffix = 2;
  while (await prisma.career.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const career = await prisma.career.create({
    data: {
      slug,
      title,
      industry,
      description,
      milestones: [],
    },
    select: { id: true, slug: true, title: true, industry: true },
  });

  return NextResponse.json({ ok: true, career }, { status: 201 });
}

import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";

const CreateCareerSchema = z.object({
  title: z.string().min(2),
  industry: z.string().min(2),
  description: z.string().min(10),
  tag: z
    .string()
    .min(2)
    .max(12)
    .regex(/^[A-Za-z0-9_]+$/)
    .optional(),
});

function normalizeTag(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9_]/g, "").slice(0, 12);
}

async function assignUniqueCareerTag(
  preferred: string | undefined,
  title: string,
): Promise<string> {
  const candidates: string[] = [];
  if (preferred?.trim()) {
    const p = normalizeTag(preferred.trim());
    if (p.length >= 2) candidates.push(p);
  }
  const words = title.trim().split(/\s+/).filter(Boolean);
  const initials = words
    .map((w) => w.replace(/[^a-zA-Z]/g, "").charAt(0))
    .join("")
    .toUpperCase();
  const base = normalizeTag(initials || "C");
  candidates.push(base);
  for (let i = 2; i < 99; i++) {
    candidates.push(normalizeTag(`${base.slice(0, 6)}${i}`));
  }
  for (const cand of candidates) {
    if (cand.length < 2) continue;
    const exists = await prisma.career.findUnique({ where: { tag: cand } });
    if (!exists) return cand;
  }
  return `C${randomBytes(4).toString("hex").toUpperCase()}`;
}

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

  const { title, industry, description, tag: tagInput } = parsed.data;

  const tag = await assignUniqueCareerTag(tagInput, title);

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
      tag,
      title,
      industry,
      description,
      milestones: [],
    },
    select: { id: true, slug: true, tag: true, title: true, industry: true },
  });

  return NextResponse.json({ ok: true, career }, { status: 201 });
}

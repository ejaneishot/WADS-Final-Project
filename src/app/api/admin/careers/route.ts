import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/db";
import { withAdmin } from "@/lib/rbac";
import { z } from "zod";

const CreateCareerSchema = z.object({
  title: z.string().min(2).max(200),
  industry: z.string().min(2).max(120),
  description: z.string().min(10).max(8000),
  tag: z
    .string()
    .min(2)
    .max(12)
    .regex(/^[A-Za-z0-9_]+$/)
    .optional(),
  slug: z
    .string()
    .min(1)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .optional(),
  icon: z.string().max(32).nullable().optional(),
  color: z.string().max(160).nullable().optional(),
  gradient: z.string().max(160).nullable().optional(),
  border: z.string().max(200).nullable().optional(),
  milestones: z.array(z.string().max(800)).max(80).optional(),
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

export const GET = withAdmin(async (_req, _auth, _ctx) => {
  const careers = await prisma.career.findMany({
    orderBy: { title: "asc" },
  });

  return NextResponse.json({ ok: true, careers }, { status: 200 });
});

export const POST = withAdmin(async (req, _auth, _ctx) => {
  const body = await req.json().catch(() => null);
  const parsed = CreateCareerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const {
    title,
    industry,
    description,
    tag: tagInput,
    slug: slugInput,
    icon,
    color,
    gradient,
    border,
    milestones: milestonesInput,
  } = parsed.data;

  const tag = await assignUniqueCareerTag(tagInput, title);

  let slug: string;
  if (slugInput?.trim()) {
    slug = slugInput.trim();
    const taken = await prisma.career.findUnique({ where: { slug } });
    if (taken) {
      return NextResponse.json(
        { message: "That slug is already in use." },
        { status: 409 },
      );
    }
  } else {
    const baseSlug = slugify(title);
    if (!baseSlug) {
      return NextResponse.json({ message: "Invalid title" }, { status: 400 });
    }
    slug = baseSlug;
    let suffix = 2;
    while (await prisma.career.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }
  }

  const milestones = (milestonesInput ?? [])
    .map((m) => m.trim())
    .filter(Boolean);

  const career = await prisma.career.create({
    data: {
      slug,
      tag,
      title: title.trim(),
      industry: industry.trim(),
      description: description.trim(),
      milestones,
      icon: icon?.trim() || null,
      color: color?.trim() || null,
      gradient: gradient?.trim() || null,
      border: border?.trim() || null,
    },
  });

  return NextResponse.json({ ok: true, career }, { status: 201 });
});


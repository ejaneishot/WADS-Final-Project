/**
 * API route: PATCH | DELETE /api/admin/careers/[careerId]
 *
 * Methods: PATCH, DELETE
 * Auth: Admin role only (`requireRole(["admin"])`).
 * Purpose: Update career metadata/milestones or permanently delete a career row.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";

const UpdateCareerSchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  tag: z
    .string()
    .min(2)
    .max(12)
    .regex(/^[A-Za-z0-9_]+$/),
  title: z.string().min(2).max(200),
  industry: z.string().min(2).max(120),
  description: z.string().min(10).max(8000),
  icon: z.string().max(32).nullable().optional(),
  color: z.string().max(160).nullable().optional(),
  gradient: z.string().max(160).nullable().optional(),
  border: z.string().max(200).nullable().optional(),
  milestones: z.array(z.string().max(800)).max(80),
});

type Params = { params: Promise<{ careerId: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { careerId } = await params;
  const body = await req.json().catch(() => null);

  // Validation: UpdateCareerSchema (full career shape including milestones)
  const parsed = UpdateCareerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const existing = await prisma.career.findUnique({ where: { id: careerId } });
  if (!existing) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  const data = parsed.data;
  const slug = data.slug.trim();
  const tag = data.tag.trim().toUpperCase().replace(/[^A-Z0-9_]/g, "").slice(0, 12);

  // Business logic: slug and assessment tag must be unique across other careers
  const conflict = await prisma.career.findFirst({
    where: {
      id: { not: careerId },
      OR: [{ slug }, { tag }],
    },
    select: { id: true, slug: true, tag: true },
  });
  if (conflict) {
    return NextResponse.json(
      {
        message:
          conflict.slug === slug
            ? "Another career already uses this slug."
            : "Another career already uses this assessment tag.",
      },
      { status: 409 },
    );
  }

  const updated = await prisma.career.update({
    where: { id: careerId },
    data: {
      slug,
      tag,
      title: data.title.trim(),
      industry: data.industry.trim(),
      description: data.description.trim(),
      icon: data.icon?.trim() || null,
      color: data.color?.trim() || null,
      gradient: data.gradient?.trim() || null,
      border: data.border?.trim() || null,
      milestones: data.milestones.map((m) => m.trim()).filter(Boolean),
    },
  });

  return NextResponse.json({ ok: true, career: updated }, { status: 200 });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { careerId } = await params;

  const existing = await prisma.career.findUnique({ where: { id: careerId } });
  if (!existing) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  await prisma.career.delete({ where: { id: careerId } });

  return NextResponse.json({ ok: true }, { status: 200 });
}

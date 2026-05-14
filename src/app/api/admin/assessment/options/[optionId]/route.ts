import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";

const ROLE_TAGS = ["SWE", "FE", "BE", "AI", "SEC", "GAME", "QA", "PM"] as const;
const RoleTagSchema = z.enum(ROLE_TAGS);

const UpdateOptionSchema = z.object({
  label: z.string().min(1),
  value: z.string().nullable().optional(),
  scoring: z
    .array(
      z.object({
        tag: RoleTagSchema,
        weight: z.number().int().min(0).max(10),
      }),
    )
    .default([]),
});

type Params = { params: Promise<{ optionId: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { optionId } = await params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateOptionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const deduped = new Map<string, number>();
  for (const item of parsed.data.scoring) {
    deduped.set(item.tag, item.weight);
  }

  const normalized = [...deduped.entries()]
    .filter(([, weight]) => weight > 0)
    .map(([tag, weight]) => ({ tag, weight }));

  const updated = await prisma.quizOption.update({
    where: { id: optionId },
    data: {
      label: parsed.data.label,
      value: parsed.data.value ?? null,
      scoring: normalized,
    },
    select: {
      id: true,
      label: true,
      value: true,
      scoring: true,
    },
  });

  return NextResponse.json({ ok: true, option: updated }, { status: 200 });
}

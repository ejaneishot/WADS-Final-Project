import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";

const CreateQuestionSchema = z.object({
  sectionId: z.string().min(1),
  prompt: z.string().min(5).max(8000),
  helperText: z.string().max(2000).nullable().optional(),
  type: z.enum(["SINGLE_CHOICE"]).default("SINGLE_CHOICE"),
  isRequired: z.boolean().optional().default(true),
});

export async function POST(req: Request) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const body = await req.json().catch(() => null);
  const parsed = CreateQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const section = await prisma.quizSection.findUnique({
    where: { id: parsed.data.sectionId },
    select: { id: true },
  });
  if (!section) {
    return NextResponse.json({ message: "Section not found" }, { status: 404 });
  }

  const agg = await prisma.quizQuestion.aggregate({
    where: { sectionId: parsed.data.sectionId },
    _max: { order: true },
  });
  const nextOrder = (agg._max.order ?? 0) + 1;

  const question = await prisma.quizQuestion.create({
    data: {
      sectionId: parsed.data.sectionId,
      prompt: parsed.data.prompt.trim(),
      helperText: parsed.data.helperText?.trim() || null,
      type: parsed.data.type,
      order: nextOrder,
      isRequired: parsed.data.isRequired ?? true,
    },
    include: {
      options: { orderBy: { order: "asc" } },
    },
  });

  return NextResponse.json({ ok: true, question }, { status: 201 });
}

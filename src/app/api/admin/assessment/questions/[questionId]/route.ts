import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";
import { z } from "zod";

const UpdateQuestionSchema = z.object({
  prompt: z.string().min(5),
  helperText: z.string().nullable().optional(),
  isRequired: z.boolean().optional(),
});

type Params = { params: Promise<{ questionId: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { questionId } = await params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const updated = await prisma.quizQuestion.update({
    where: { id: questionId },
    data: {
      prompt: parsed.data.prompt,
      helperText: parsed.data.helperText ?? null,
      isRequired: parsed.data.isRequired ?? true,
    },
    select: {
      id: true,
      prompt: true,
      helperText: true,
      isRequired: true,
    },
  });

  return NextResponse.json({ ok: true, question: updated }, { status: 200 });
}

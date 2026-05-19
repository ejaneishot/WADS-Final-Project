/**
 * API route: PATCH | DELETE /api/admin/assessment/questions/[questionId]
 *
 * Methods: PATCH, DELETE
 * Auth: Admin role only (`requireRole(["admin"])`).
 * Purpose: Update or delete a quiz question by id.
 */
import { NextResponse } from "next/server";
import { requireRole } from "@/lib/rbac";
import {
  UpdateQuestionSchema,
  updateQuizQuestion,
  deleteQuizQuestion,
} from "@/lib/services/adminAssessmentService";

type Params = { params: Promise<{ questionId: string }> };

export async function PATCH(req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { questionId } = await params;
  const body = await req.json().catch(() => null);

  // Validation: UpdateQuestionSchema
  const parsed = UpdateQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const result = await updateQuizQuestion(questionId, parsed.data);
  if (!result.ok) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true, question: result.question }, { status: 200 });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { questionId } = await params;
  const result = await deleteQuizQuestion(questionId);
  if (!result.ok) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

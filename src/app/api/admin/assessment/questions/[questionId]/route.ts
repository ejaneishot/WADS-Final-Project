import { NextResponse } from "next/server";
import { withAdmin } from "@/lib/rbac";
import {
  UpdateQuestionSchema,
  updateQuizQuestion,
  deleteQuizQuestion,
} from "@/lib/services/adminAssessmentService";

export const PATCH = withAdmin(async (req, _auth, routeContext) => {
  const { questionId } = await routeContext.params;
  const body = await req.json().catch(() => null);
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
});

export const DELETE = withAdmin(async (_req, _auth, routeContext) => {
  const { questionId } = await routeContext.params;
  const result = await deleteQuizQuestion(questionId);
  if (!result.ok) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
});

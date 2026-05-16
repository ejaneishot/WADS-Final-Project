import { NextResponse } from "next/server";
import { withAdmin } from "@/lib/rbac";
import {
  CreateQuestionSchema,
  createQuizQuestion,
} from "@/lib/services/adminAssessmentService";

export const POST = withAdmin(async (req, _auth, _ctx) => {
  const body = await req.json().catch(() => null);
  const parsed = CreateQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const result = await createQuizQuestion(parsed.data);
  if (!result.ok) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true, question: result.question }, { status: 201 });
});

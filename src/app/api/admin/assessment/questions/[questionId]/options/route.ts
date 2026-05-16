import { NextResponse } from "next/server";
import { withAdmin } from "@/lib/rbac";
import {
  CreateOptionSchema,
  createQuizOption,
} from "@/lib/services/adminAssessmentService";

function jsonForCreateOptionFailure(
  result: Extract<Awaited<ReturnType<typeof createQuizOption>>, { ok: false }>,
) {
  if (result.status === 400 && "invalidTags" in result) {
    return NextResponse.json(
      { message: result.message, invalidTags: result.invalidTags },
      { status: 400 },
    );
  }
  return NextResponse.json({ message: result.message }, { status: result.status });
}

export const POST = withAdmin(async (req, _auth, routeContext) => {
  const { questionId } = await routeContext.params;
  const body = await req.json().catch(() => null);
  const parsed = CreateOptionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const result = await createQuizOption(questionId, parsed.data);
  if (!result.ok) {
    return jsonForCreateOptionFailure(result);
  }

  return NextResponse.json({ ok: true, option: result.option }, { status: 201 });
});

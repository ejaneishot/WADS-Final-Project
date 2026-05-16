import { NextResponse } from "next/server";
import { withAdmin } from "@/lib/rbac";
import {
  UpdateOptionSchema,
  updateQuizOption,
  deleteQuizOption,
} from "@/lib/services/adminAssessmentService";

function jsonForUpdateOptionFailure(
  result: Extract<Awaited<ReturnType<typeof updateQuizOption>>, { ok: false }>,
) {
  if (result.status === 400 && "invalidTags" in result) {
    return NextResponse.json(
      { message: result.message, invalidTags: result.invalidTags },
      { status: 400 },
    );
  }
  return NextResponse.json({ message: result.message }, { status: result.status });
}

export const PATCH = withAdmin(async (req, _auth, routeContext) => {
  const { optionId } = await routeContext.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateOptionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const result = await updateQuizOption(optionId, parsed.data);
  if (!result.ok) {
    return jsonForUpdateOptionFailure(result);
  }

  return NextResponse.json({ ok: true, option: result.option }, { status: 200 });
});

export const DELETE = withAdmin(async (_req, _auth, routeContext) => {
  const { optionId } = await routeContext.params;
  const result = await deleteQuizOption(optionId);
  if (!result.ok) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
});

import { NextResponse } from "next/server";
import { requireRole } from "@/lib/rbac";
import { getAssessmentEditorPayload } from "@/lib/services/adminAssessmentService";

export async function GET() {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { sections, scoringTags } = await getAssessmentEditorPayload();
  return NextResponse.json({ ok: true, sections, scoringTags }, { status: 200 });
}

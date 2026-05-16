import { NextResponse } from "next/server";
import { withAdmin } from "@/lib/rbac";
import { getAssessmentEditorPayload } from "@/lib/services/adminAssessmentService";

export const GET = withAdmin(async (_req, _auth, _ctx) => {
  const { sections, scoringTags } = await getAssessmentEditorPayload();
  return NextResponse.json({ ok: true, sections, scoringTags }, { status: 200 });
});

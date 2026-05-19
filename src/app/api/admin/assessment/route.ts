/**
 * API route: GET /api/admin/assessment
 *
 * Methods: GET
 * Auth: Admin role only (`requireRole(["admin"])`).
 * Purpose: Load full quiz structure and allowed scoring tags for the admin assessment editor.
 */
import { NextResponse } from "next/server";
import { requireRole } from "@/lib/rbac";
import { getAssessmentEditorPayload } from "@/lib/services/adminAssessmentService";

export async function GET() {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const { sections, scoringTags } = await getAssessmentEditorPayload();
  return NextResponse.json({ ok: true, sections, scoringTags }, { status: 200 });
}

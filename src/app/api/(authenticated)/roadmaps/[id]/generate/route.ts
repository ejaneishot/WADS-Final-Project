/**
 * API route: POST /api/roadmaps/[id]/generate
 *
 * Methods: POST
 * Auth: Signed JWT cookie (`getAuth`).
 * Purpose: AI-generate roadmap nodes for a tech career topic via `generateRoadmapFromAi` (owned roadmap only).
 * Rejects off-topic prompts (non-career, dangerous, or unrelated) with 400.
 */
import { NextResponse } from "next/server";
import { getAuth } from "@/lib/auth";
import {
  RoadmapGenerateBodySchema,
  generateRoadmapFromAi,
} from "@/lib/services/roadmapGenerateService";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await getAuth();
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: roadmapId } = await params;
  const raw = await req.json().catch(() => null);

  // Validation: topic + optional includeProfile flag
  const parsed = RoadmapGenerateBodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const { topic, includeProfile } = parsed.data;
  const result = await generateRoadmapFromAi({
    userId: auth.sub,
    roadmapId,
    topic,
    includeProfile,
  });

  // Error handling: service layer returns status + message (404, 502, etc.)
  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status },
    );
  }

  return NextResponse.json({ success: true });
}

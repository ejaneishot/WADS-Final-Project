import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/rbac";
import { prisma } from "@/lib/db";
import { rateLimit } from "@/lib/rateLimit";

/**
 * AI Career Match (Template)
 * - Uses a deterministic keyword scoring approach and returns top 3 careers.
 * - Later: add LLM explanations (OpenAI/Gemini) with timeout + fallback.
 */
export async function POST() {
  const { user, error } = requireAuth();
  if (error) return error;

  // Simple rate limiting: 10 requests / minute per user
  const bucket = rateLimit(`ai:${user!.sub}`, 10, 60_000);
  if (!bucket.ok) {
    return NextResponse.json(
      { message: "Too many requests. Please wait.", resetAt: bucket.resetAt },
      { status: 429 }
    );
  }

  const profile = await prisma.profile.findUnique({
    where: { userId: user!.sub },
    include: { skills: { include: { skill: true } } }
  });

  const careers = await prisma.career.findMany();

  const interests = new Set((profile?.interests ?? []).map((s) => s.toLowerCase()));
  const skillNames = new Set((profile?.skills ?? []).map((s) => s.skill.name.toLowerCase()));

  const scored = careers
    .map((c) => {
      const text = (c.title + " " + c.industry + " " + c.description).toLowerCase();
      let score = 0;
      for (const i of interests) if (i && text.includes(i)) score += 10;
      for (const sk of skillNames) if (sk && text.includes(sk)) score += 3;
      return { careerId: c.id, careerTitle: c.title, score };
    })
    .sort((a, b) => b.score - a.score);

  const top = scored.slice(0, 3).map((m, idx) => ({
    ...m,
    explanation:
      idx === 0
        ? "Top match based on your profile keywords. Replace with AI explanation later."
        : "Matched using basic scoring. Improve with skill-weighted requirements."
  }));

  return NextResponse.json({ ok: true, matches: top });
}

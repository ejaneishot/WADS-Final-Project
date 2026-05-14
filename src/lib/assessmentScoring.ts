// src/lib/assessmentScoring.ts
import type { PrismaClient } from "@/generated/prisma/client";

/** Careers returned to the client for resolving assessment codes to titles. */
export type CareerScoreLabel = {
  slug: string;
  title: string;
  tag: string;
};

export function resolveQuizScoreLabel(
  code: string,
  careers?: ReadonlyArray<CareerScoreLabel>,
): string {
  const byTag = careers?.find((x) => x.tag === code);
  if (byTag) return byTag.title;
  const bySlug = careers?.find((x) => x.slug === code);
  if (bySlug) return bySlug.title;
  return code;
}

/** Assessment scoring keys: each career's `tag` (e.g. SWE, FE). */
export async function getAllowedScoringTags(
  prisma: PrismaClient,
): Promise<string[]> {
  const rows = await prisma.career.findMany({
    select: { tag: true },
    orderBy: { title: "asc" },
  });
  return rows.map((r) => r.tag);
}

export function buildAllowedScoringTagSet(tags: string[]): Set<string> {
  return new Set(tags);
}

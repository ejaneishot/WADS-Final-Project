/**
 * Tech career assessment scoring: career tags, quiz result labels, and allowed tag sets.
 * Quiz option weights reference Career.tag values (e.g. SWE, FE) stored in the database.
 */
import type { PrismaClient } from "@/generated/prisma/client";

/** Careers returned to the client for resolving assessment codes to titles. */
export type CareerScoreLabel = {
  slug: string;
  title: string;
  tag: string;
};

/** Map a stored primary/secondary code to a human-readable career title when possible. */
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

/** Load all valid scoring tags from careers (admin quiz editor validates against these). */
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

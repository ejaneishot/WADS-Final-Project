import { z } from "zod";
import { env } from "@/lib/env";
import { ExternalApiError } from "@/lib/integrations/externalApiError";
import { secureFetch } from "@/lib/integrations/secureFetch";

const remotiveJobSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).max(300),
  company_name: z.string().min(1).max(200),
  url: z.string().url().max(2000),
  candidate_required_location: z.string().max(200).optional(),
  publication_date: z.string().max(40).optional(),
  category: z.string().max(120).optional(),
});

const remotiveResponseSchema = z.object({
  jobs: z.array(remotiveJobSchema).max(500),
});

export type PublicJobListing = {
  id: string;
  title: string;
  company: string;
  url: string;
  location: string | null;
  publishedAt: string | null;
  category: string | null;
  source: string;
};

function allowedJobBoardHosts(): string[] {
  try {
    return [new URL(env.JOB_BOARD_API_URL).hostname];
  } catch {
    return ["remotive.com"];
  }
}

function buildRemotiveUrl(search: string, limit: number): string {
  const base = new URL(env.JOB_BOARD_API_URL);
  base.searchParams.set("search", search.slice(0, 80));
  base.searchParams.set("limit", String(limit));
  return base.toString();
}

function mapRemotiveJobs(
  jobs: z.infer<typeof remotiveJobSchema>[],
  limit: number,
): PublicJobListing[] {
  return jobs.slice(0, limit).map((job) => ({
    id: String(job.id),
    title: job.title.trim(),
    company: job.company_name.trim(),
    url: job.url,
    location: job.candidate_required_location?.trim() ?? null,
    publishedAt: job.publication_date?.trim() ?? null,
    category: job.category?.trim() ?? null,
    source: "remotive",
  }));
}

async function fetchFromRemotive(
  search: string,
  limit: number,
): Promise<PublicJobListing[]> {
  const url = buildRemotiveUrl(search, limit);
  const headers: Record<string, string> = {};
  const apiKey = env.JOB_BOARD_API_KEY?.trim();
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  const res = await secureFetch(url, {
    allowedHosts: allowedJobBoardHosts(),
    timeoutMs: env.EXTERNAL_API_TIMEOUT_MS,
    headers,
  });

  const json: unknown = await res.json();
  const parsed = remotiveResponseSchema.safeParse(json);
  if (!parsed.success) {
    throw new ExternalApiError("External job data failed validation", 502);
  }

  return mapRemotiveJobs(parsed.data.jobs, limit);
}

/** Server-only job listings (never call third-party APIs from the browser). */
export async function fetchCareerJobListings(
  careerTitle: string,
  options?: { limit?: number },
): Promise<PublicJobListing[]> {
  const limit = Math.min(Math.max(options?.limit ?? 8, 1), 20);
  const search = careerTitle.trim() || "technology";

  if (env.JOB_BOARD_PROVIDER === "stub") {
    return [];
  }

  if (env.JOB_BOARD_PROVIDER === "remotive") {
    return fetchFromRemotive(search, limit);
  }

  throw new ExternalApiError("Job board provider is not configured", 503);
}

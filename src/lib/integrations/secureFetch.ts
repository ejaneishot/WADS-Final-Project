import { ExternalApiError } from "@/lib/integrations/externalApiError";

export type SecureFetchOptions = {
  method?: "GET" | "POST";
  headers?: Record<string, string>;
  body?: string;
  timeoutMs?: number;
  /** Hostnames allowed for this request (e.g. remotive.com). */
  allowedHosts: string[];
};

function hostMatchesAllowlist(hostname: string, allowedHosts: string[]): boolean {
  const host = hostname.toLowerCase();
  return allowedHosts.some(
    (allowed) => host === allowed.toLowerCase() || host.endsWith(`.${allowed.toLowerCase()}`),
  );
}

/**
 * Server-only fetch for third-party HTTPS APIs.
 * Enforces HTTPS, host allowlist, timeout, and generic errors (no secret leakage).
 */
export async function secureFetch(
  url: string,
  options: SecureFetchOptions,
): Promise<Response> {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new ExternalApiError("Invalid external API URL", 500);
  }

  if (parsed.protocol !== "https:") {
    throw new ExternalApiError("External APIs must use HTTPS", 500);
  }

  if (!hostMatchesAllowlist(parsed.hostname, options.allowedHosts)) {
    throw new ExternalApiError("External API host is not allowed", 500);
  }

  const timeoutMs = options.timeoutMs ?? 15_000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(parsed.toString(), {
      method: options.method ?? "GET",
      headers: {
        Accept: "application/json",
        ...options.headers,
      },
      body: options.body,
      signal: controller.signal,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new ExternalApiError(
        `External service returned ${res.status}`,
        res.status >= 500 ? 502 : 400,
      );
    }

    return res;
  } catch (error) {
    if (error instanceof ExternalApiError) throw error;
    if (error instanceof Error && error.name === "AbortError") {
      throw new ExternalApiError("External service timed out", 504);
    }
    throw new ExternalApiError("External service is unreachable", 502);
  } finally {
    clearTimeout(timer);
  }
}

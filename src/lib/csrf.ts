/**
 * CSRF mitigation for cookie-authenticated API routes.
 * SameSite=Lax alone does not block cross-site HTML form POSTs (e.g. from file://).
 * Mutating requests must include Origin/Referer matching APP_URL.
 */
const MUTATING = new Set(["POST", "PUT", "PATCH", "DELETE"]);

export function isMutatingMethod(method: string) {
  return MUTATING.has(method.toUpperCase());
}

function getAllowedOrigins(): Set<string> {
  const allowed = new Set<string>();
  const appUrl = process.env.APP_URL ?? "http://localhost:3000";
  try {
    const url = new URL(appUrl);
    allowed.add(url.origin);
    const host = url.hostname;
    if (host.startsWith("www.")) {
      allowed.add(`${url.protocol}//${host.slice(4)}${url.port ? `:${url.port}` : ""}`);
    } else {
      allowed.add(`${url.protocol}//www.${host}${url.port ? `:${url.port}` : ""}`);
    }
  } catch {
    allowed.add("http://localhost:3000");
  }
  return allowed;
}

/** True when Origin or Referer matches the configured app origin(s). */
export function isAllowedOrigin(req: Request): boolean {
  const allowed = getAllowedOrigins();

  const origin = req.headers.get("origin");
  if (origin && origin !== "null") {
    try {
      return allowed.has(new URL(origin).origin);
    } catch {
      return false;
    }
  }

  const referer = req.headers.get("referer");
  if (referer) {
    try {
      return allowed.has(new URL(referer).origin);
    } catch {
      return false;
    }
  }

  return false;
}

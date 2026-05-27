/**
 * Next.js edge middleware: gate authenticated UI routes before page render.
 * Checks for a session cookie only (no JWT verification here); API routes
 * enforce full auth via @/lib/rbac.
 */
import { NextRequest, NextResponse } from "next/server";

/** App sections that require a logged-in user (prefix match). */
const PROTECTED_PATHS = ["/dashboard", "/resume-optimizer", "/admin"];

/** Legacy and current cookie names so existing sessions keep working. */
const COOKIE_CANDIDATES = ["smartcareer_token", "token"];

/** Redirect unauthenticated visitors on protected paths to /login. */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (!isProtected) return NextResponse.next();

  const hasAuthCookie = COOKIE_CANDIDATES.some((name) =>
    Boolean(req.cookies.get(name)?.value),
  );

  if (!hasAuthCookie) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/resume-optimizer/:path*", "/admin/:path*"],
};

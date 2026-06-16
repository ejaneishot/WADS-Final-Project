/**
 * Next.js edge middleware: CSRF checks on mutating API routes and auth gates on UI.
 */
import { NextRequest, NextResponse } from "next/server";
import { isAllowedOrigin, isMutatingMethod } from "@/lib/csrf";

/** App sections that require a logged-in user (prefix match). */
const PROTECTED_PATHS = ["/dashboard", "/resume-optimizer", "/admin"];

/** Legacy and current cookie names so existing sessions keep working. */
const COOKIE_CANDIDATES = ["smartcareer_token", "token"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/") && isMutatingMethod(req.method)) {
    if (!isAllowedOrigin(req)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
  }

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
  matcher: [
    "/api/:path*",
    "/dashboard/:path*",
    "/resume-optimizer/:path*",
    "/admin/:path*",
  ],
};

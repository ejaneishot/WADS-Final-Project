import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS = ["/dashboard", "/resume-optimizer", "/admin"];
const COOKIE_CANDIDATES = ["smartcareer_token", "token"];

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

import { NextRequest, NextResponse } from "next/server";
import { verifyAuthToken } from "@/lib/auth-edge";
import {
  ADMIN_API_PREFIX,
  ADMIN_PAGE_PREFIX,
  AUTH_REQUIRED_PAGE_PREFIXES,
} from "@/lib/security-paths";

const COOKIE_NAME = process.env.COOKIE_NAME ?? "smartcareer_token";

function matchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isApi = pathname.startsWith("/api/");

  const needsAuth = AUTH_REQUIRED_PAGE_PREFIXES.some((prefix) =>
    matchesPrefix(pathname, prefix),
  );

  const needsAdmin =
    matchesPrefix(pathname, ADMIN_PAGE_PREFIX) ||
    matchesPrefix(pathname, ADMIN_API_PREFIX);

  if (!needsAuth && !needsAdmin) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;
  const auth = token ? await verifyAuthToken(token) : null;

  if (!auth) {
    if (isApi) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (needsAdmin && auth.role !== "admin") {
    if (isApi) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/forbidden";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/resume-optimizer",
    "/resume-optimizer/:path*",
    "/admin",
    "/admin/:path*",
    `${ADMIN_API_PREFIX}/:path*`,
  ],
};

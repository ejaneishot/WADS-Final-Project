//src/lib/rbac.ts
import { NextResponse } from "next/server";
import type { JwtPayload, Role } from "@/lib/auth";
import { getAuth } from "@/lib/auth";

export async function requireAuth() {
  const user = await getAuth();
  if (!user)
    return {
      user: null,
      error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    };
  return { user, error: null };
}

export async function requireRole(roles: Role[]) {
  const { user, error } = await requireAuth();
  if (error) return { user: null, error };
  if (!roles.includes(user!.role)) {
    return {
      user: null,
      error: NextResponse.json({ message: "Forbidden" }, { status: 403 }),
    };
  }
  return { user, error: null };
}

export type RouteAuthContext = { user: JwtPayload };

/** Next.js App Router route context (dynamic segments). */
export type RouteHandlerContext = {
  params: Promise<Record<string, string>>;
};

type RouteHandler = (
  req: Request,
  auth: RouteAuthContext,
  routeContext: RouteHandlerContext,
) => Promise<Response> | Response;

/** Wrap a route handler so it always runs after role checks (use inside /api/admin/*). */
export function withRole(roles: Role[], handler: RouteHandler) {
  return async (req: Request, routeContext?: RouteHandlerContext) => {
    const { user, error } = await requireRole(roles);
    if (error) return error;
    return handler(req, { user: user! }, routeContext ?? { params: Promise.resolve({}) });
  };
}

/** Shorthand for admin-only API/page handlers. */
export const withAdmin = (handler: RouteHandler) =>
  withRole(["admin"], handler);

/** Any authenticated user (student or admin). */
export const withAuth = (handler: RouteHandler) =>
  withRole(["student", "admin"], handler);

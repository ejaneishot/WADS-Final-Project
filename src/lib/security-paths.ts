/** Path prefixes guarded by middleware RBAC (keep admin APIs under ADMIN_API_PREFIX). */
export const ADMIN_API_PREFIX = "/api/admin";
export const ADMIN_PAGE_PREFIX = "/admin";

export const AUTH_REQUIRED_PAGE_PREFIXES = [
  "/dashboard",
  "/resume-optimizer",
] as const;

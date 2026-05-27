/**
 * Dashboard route guard.
 * Requires authenticated session; redirects guests to /login and admins to /admin.
 */
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth();

  if (!auth?.sub) {
    redirect("/login");
  }

  if (auth.role === "admin") {
    redirect("/admin");
  }

  return <>{children}</>;
}

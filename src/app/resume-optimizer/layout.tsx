/**
 * Resume optimizer route guard.
 * Requires authenticated session; guests redirect to /login.
 */
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default async function ResumeOptimizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth();

  if (!auth?.sub) {
    redirect("/login");
  }

  return <>{children}</>;
}

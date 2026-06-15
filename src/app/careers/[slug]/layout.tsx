/**
 * Career track detail route guard.
 * Requires authenticated session; guests are redirected to /login.
 */
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default async function CareerDetailLayout({
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

// src/app/dashboard/layout.tsx
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

  return <>{children}</>;
}

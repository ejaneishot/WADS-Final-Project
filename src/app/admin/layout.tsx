import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth();

  if (!auth?.sub) {
    redirect("/login");
  }

  if (auth.role !== "admin") {
    redirect("/forbidden");
  }

  return <>{children}</>;
}

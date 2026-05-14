import "./globals.css";
import type { Metadata } from "next";
import { getAuth } from "@/lib/auth";
import { Navbar } from "@/components/navbar";
import { AdminNavbar } from "@/components/AdminNavbar";

export const metadata: Metadata = {
  title: "SmartCareer AI",
  description: "AI-powered career counseling & guidance for CS students."
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getAuth();
  const isAdmin = auth?.role === "admin";

  return (
    <html lang="en" className="dark">
      <body className="bg-grid noise-overlay relative min-h-screen" suppressHydrationWarning>
        {isAdmin && auth ? (
          <AdminNavbar email={auth.email} />
        ) : (
          <Navbar />
        )}
        <main>{children}</main>
      </body>
    </html>
  );
}

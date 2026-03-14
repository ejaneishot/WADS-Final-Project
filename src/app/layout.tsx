import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "SmartCareer AI",
  description: "AI-powered career counseling & guidance for CS students."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-grid noise-overlay relative min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "SmartCareer AI",
  description: "AI-powered career counseling & guidance template."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-page py-8">{children}</main>
      </body>
    </html>
  );
}

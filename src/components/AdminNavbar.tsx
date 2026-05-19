/**
 * Admin navigation bar (root layout when role === admin).
 * Receives email from server layout; highlights active admin/docs routes via pathname.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ADMIN_LINKS: ReadonlyArray<{
  href: string;
  label: string;
  title?: string;
}> = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/assessment", label: "Assessment" },
  { href: "/admin/careers", label: "Tracks", title: "Career tracks (admin)" },
  { href: "/docs", label: "API Docs", title: "OpenAPI documentation" },
];

type Props = {
  email: string;
};

export function AdminNavbar({ email }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const pathActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    if (href === "/docs") return pathname === "/docs";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-[#0A0A0F]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "var(--border)" : "transparent" }}
    >
      <div className="container-page flex h-16 flex-wrap items-center justify-between gap-y-2">
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold tracking-tight">
            SmartCareer<span className="text-gradient">.AI</span>
          </span>
        </Link>

        <nav className="flex flex-1 flex-wrap items-center justify-end gap-1 sm:flex-nowrap sm:justify-end">
          <span
            className="w-full py-1 text-[10px] font-semibold uppercase tracking-wider sm:mr-1 sm:w-auto sm:py-0"
            style={{ color: "var(--text-muted)" }}
          >
            Admin
          </span>
          {ADMIN_LINKS.map(({ href, label, title }) => (
            <Link
              key={href}
              href={href}
              title={title}
              className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{
                color: pathActive(href)
                  ? "var(--accent)"
                  : "var(--text-secondary)",
              }}
            >
              {label}
            </Link>
          ))}

          <div className="ml-2 flex w-full items-center justify-end gap-2.5 sm:ml-3 sm:w-auto">
            <span
              className="hidden max-w-[140px] truncate text-xs sm:inline mono md:max-w-[220px]"
              style={{ color: "var(--text-muted)" }}
              title={email}
            >
              {email}
            </span>
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/auth/logout", { method: "POST" });
                window.location.href = "/";
              }}
              className="btn-ghost !py-1.5 !px-3 !text-xs"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

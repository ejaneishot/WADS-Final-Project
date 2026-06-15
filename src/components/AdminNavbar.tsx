// src/components/AdminNavbar.tsx
/**
 * Admin navigation bar (root layout when role === admin).
 * Receives email from server layout; highlights active admin/docs routes via pathname.
 * Unlike the public navbar that fetches its own session data client-side,
 *  this component accepts session injection directly from a Next.js Server Component layout via props,
 *  ensuring zero client-side layout shift for admin tools.
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
  // Defines a strict TypeScript type definition requiring an email string. This enforces that whichever parent layout renders this navigation must supply the administrator's email address.
  email: string;
};

export function AdminNavbar({ email }: Props) {
  // Declares and exports the functional component AdminNavbar, destructuring the required email property out of incoming arguments.
  const pathname = usePathname(); // Initializes the Next.js App Router client routing observer. It captures the window's live sub-path location string, triggering minor visual updates when the administrator jumps between panels.
  const [scrolled, setScrolled] = useState(false); // Provisions a state variable to hold a simple binary indicator (true/false). This tells the header when to shift between a transparent state and an elevated frosted-glass backdrop.

  useEffect(() => {
    // Comments are same as navbar.tsx since scroll handling is identical
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
    // Declares a deterministic link evaluation arrow function that takes a target link route destination configuration parameter and returns a boolean state assessment.
    if (href === "/admin") return pathname === "/admin"; // Implements strict identity matching rules for the root administrator URL base path. This guards against false-positives (so the "Overview" tab doesn't stay lit up when you drill down into lower subsections like /admin/careers).
    if (href === "/docs") return pathname === "/docs";
    return pathname === href || pathname.startsWith(`${href}/`); // A comprehensive fallback rule structure for hierarchical management routes. It marks nested dashboard tools active if the current browser route is identical to the target section or down its dynamic child hierarchies (e.g., matching both /admin/careers and /admin/careers/[id]).
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
            SmartCareer<span className="text-gradient">.Academy</span>
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

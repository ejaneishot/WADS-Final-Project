/**
 * Primary site navigation for non-admin users (rendered from root layout).
 * Client: loads /api/me for session email and logout; sticky header reacts to scroll.
 * Active link highlighted with accent color + subtle background to match app style.
 */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Me = { id: string; email: string; role: "student" | "admin" };

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/careers", label: "Careers" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/resume-optimizer", label: "Resume Optimizer" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [me, setMe] = useState<Me | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((payload) => setMe(payload?.user ?? null))
      .catch(() => setMe(null));
  }, []);

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-[#0A0A0F]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "var(--border)" : "transparent" }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold tracking-tight">
            SmartCareer<span className="text-gradient">.AI</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className="relative rounded-lg px-3 py-2 text-sm transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  background: isActive ? "var(--accent-glow)" : "transparent",
                }}
              >
                {label}
                {/* Active underline dot */}
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </Link>
            );
          })}

          <div className="ml-3 flex items-center gap-2.5">
            {me ? (
              <>
                <span
                  className="hidden text-xs sm:inline mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {me.email}
                </span>
                <button
                  onClick={async () => {
                    await fetch("/api/auth/logout", { method: "POST" });
                    window.location.href = "/";
                  }}
                  className="btn-ghost !py-1.5 !px-3 !text-xs"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="btn-accent !py-1.5 !px-4 !text-xs">
                Sign in
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
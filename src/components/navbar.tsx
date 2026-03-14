"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Me = { id: string; email: string; role: "student" | "admin" };

export function Navbar() {
  const [me, setMe] = useState<Me | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch("/api/me")
      .then((r) => (r.ok ? r.json() : null))
      .then(setMe)
      .catch(() => setMe(null));
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
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
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 text-xs font-bold text-[#0A0A0F] transition-transform group-hover:scale-110">
            SC
          </span>
          <span className="text-sm font-semibold tracking-tight">
            SmartCareer<span className="text-gradient">.AI</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          <Link
            href="/dashboard"
            className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
            style={{ color: "var(--text-secondary)" }}
          >
            Dashboard
          </Link>
          <Link
            href="/careers"
            className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
            style={{ color: "var(--text-secondary)" }}
          >
            Careers
          </Link>
          {me?.role === "admin" && (
            <Link
              href="/admin"
              className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: "var(--text-secondary)" }}
            >
              Admin
            </Link>
          )}

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

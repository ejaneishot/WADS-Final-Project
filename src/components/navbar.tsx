"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Me = { id: string; email: string; role: "student" | "admin" };

export function Navbar() {
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((r) => (r.ok ? r.json() : null))
      .then(setMe)
      .catch(() => setMe(null));
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            SC
          </span>
          <span>SmartCareer AI</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link href="/dashboard" className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
            Dashboard
          </Link>
          <Link href="/careers" className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
            Careers
          </Link>
          {me?.role === "admin" && (
            <Link href="/admin" className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
              Admin
            </Link>
          )}

          <div className="ml-2 flex items-center gap-2">
            {me ? (
              <>
                <span className="hidden text-xs text-slate-500 sm:inline">
                  {me.email} • {me.role}
                </span>
                <button
                  onClick={async () => {
                    await fetch("/api/auth/logout", { method: "POST" });
                    window.location.href = "/";
                  }}
                  className="rounded-xl bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-xl bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800">
                  Login
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

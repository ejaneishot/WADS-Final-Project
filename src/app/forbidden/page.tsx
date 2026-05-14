"use client";

import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-red-500/8 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-lg text-center">
        <p className="section-label">Access Denied</p>
        <h1 className="mt-2 text-3xl font-bold">403 Forbidden</h1>
        <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
          You do not have permission to access this page.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="btn-ghost">
            Back to Home
          </Link>
          <Link href="/dashboard" className="btn-accent">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

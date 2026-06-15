/**
 * Registration page (public).
 * Creates account via /api/auth/register; role selectable (student | admin).
 * On success redirects to /dashboard (no role-based split on register).
 */
"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative z-10 min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Left panel — branding */}
      <div className="hidden lg:flex relative flex-col justify-between border-r p-12 bg-dots" style={{ borderColor: "var(--border)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-transparent to-[#0A0A0F] pointer-events-none" />
        <Link href="/" className="relative font-mono text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          SmartCareer Academy
        </Link>
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            // new student
          </p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Start your career discovery journey.
          </h1>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
            Take the assessment, get matched to a track, and follow a guided roadmap built for you.
          </p>
        </div>
        <p className="relative text-xs" style={{ color: "var(--text-muted)" }}>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-gradient hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              SmartCareer Academy
            </Link>
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Start your career discovery journey
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setErr(null);
              setLoading(true);
              const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role: "student" }),
              });
              setLoading(false);
              if (!res.ok) {
                const j = await res.json().catch(() => ({ message: "Register failed" }));
                setErr(j.message ?? "Register failed");
                return;
              }
              window.location.href = "/dashboard";
            }}
          >
            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Email
              </label>
              <input
                className="input-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                type="email"
                required
              />
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Password
              </label>
              <input
                className="input-dark"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                type="password"
                required
                minLength={8}
              />
            </div>

            {err && <div className="error-box">{err}</div>}

            <button
              disabled={loading}
              className="btn-accent w-full !rounded-xl !py-2.5 justify-center"
            >
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>

          {/* Sign in link (desktop has it in left panel) */}
          <p
            className="mt-5 text-center text-sm lg:hidden"
            style={{ color: "var(--text-secondary)" }}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-gradient hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

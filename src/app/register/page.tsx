"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "admin">("student");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-16">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 text-sm font-bold text-[#0A0A0F] mb-4">
            SC
          </div>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Start your career discovery journey
          </p>
        </div>

        {/* Card */}
        <div className="card-dark">
          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setErr(null);
              setLoading(true);
              const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role }),
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
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                Email
              </label>
              <input
                className="input-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@binus.ac.id"
                type="email"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
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

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                Role
              </label>
              <select
                className="input-dark"
                value={role}
                onChange={(e) => setRole(e.target.value as "student" | "admin")}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {err && <div className="error-box">{err}</div>}

            <button disabled={loading} className="btn-accent w-full !rounded-xl !py-2.5">
              {loading ? "Creating..." : "Create account"}
            </button>

            <p className="text-center text-sm" style={{ color: "var(--text-secondary)" }}>
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-gradient hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

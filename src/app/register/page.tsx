"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/card";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "admin">("student");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto max-w-md">
      <Card>
        <h2 className="text-xl font-semibold">Create your account</h2>
        <p className="mt-1 text-sm text-slate-600">
          Register as a student (default). Admin role is for dataset management.
        </p>

        <form
          className="mt-6 space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            setErr(null);
            setLoading(true);
            const res = await fetch("/api/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password, role })
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
          <label className="block text-sm font-medium">
            Email
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@binus.ac.id"
              type="email"
              required
            />
          </label>

          <label className="block text-sm font-medium">
            Password
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 chars"
              type="password"
              required
              minLength={8}
            />
          </label>

          <label className="block text-sm font-medium">
            Role
            <select
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
            >
              <option value="student">student</option>
              <option value="admin">admin</option>
            </select>
          </label>

          {err && <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">{err}</p>}

          <button
            disabled={loading}
            className="w-full rounded-xl bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create account"}
          </button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link className="font-medium text-slate-900 underline" href="/login">
              Login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

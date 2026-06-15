/**
 * Sign-in page (public).
 * Supports email/password (/api/auth/login) and Google (Firebase popup → /api/auth/login-google).
 * Redirects admins to /admin and students to /dashboard based on role in the response.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setErr(null);
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      const res = await fetch("/api/auth/login-google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      });
      if (!res.ok) {
        const j = await res
          .json()
          .catch(() => ({ message: "Google login failed" }));
        setErr(j.message ?? "Google login failed");
        return;
      }
      const payload = await res.json().catch(() => null);
      const role = payload?.user?.role;
      window.location.href = role === "admin" ? "/admin" : "/dashboard";
    } catch {
      setErr("Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-page relative z-10 min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Left panel — branding */}
      <div className="hidden lg:flex relative flex-col justify-between border-r py-12 pr-12 bg-dots" style={{ borderColor: "var(--border)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-transparent to-[#0A0A0F] pointer-events-none" />
        <Link href="/" className="relative font-mono text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          SmartCareer Academy
        </Link>
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            // student access
          </p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Pick up where you left off.
          </h1>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
            Your assessments, tutor matches, and career roadmap are saved to your account.
          </p>
        </div>
        <p className="relative text-xs" style={{ color: "var(--text-muted)" }}>
          New here?{" "}
          <Link href="/register" className="font-medium text-gradient hover:underline">
            Create an account
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
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Enter your credentials to continue
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setErr(null);
              setLoading(true);
              const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
              });
              setLoading(false);
              if (!res.ok) {
                const j = await res
                  .json()
                  .catch(() => ({ message: "Login failed" }));
                setErr(j.message ?? "Login failed");
                return;
              }
              const payload = await res.json().catch(() => null);
              const role = payload?.user?.role;
              window.location.href = role === "admin" ? "/admin" : "/dashboard";
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
                placeholder="youremail@domain.com"
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
                placeholder="••••••••"
                type="password"
                required
              />
            </div>

            {err && <div className="error-box">{err}</div>}

            <button
              disabled={loading}
              className="btn-accent w-full !rounded-xl !py-2.5 justify-center"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="divider flex-1" />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              or
            </span>
            <div className="divider flex-1" />
          </div>

          {/* Google button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="btn-ghost w-full !rounded-xl !py-2.5 !inline-flex !items-center !justify-center gap-2.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Register link (desktop has it in left panel) */}
          <p
            className="mt-5 text-center text-sm lg:hidden"
            style={{ color: "var(--text-secondary)" }}
          >
            No account?{" "}
            <Link
              href="/register"
              className="font-medium text-gradient hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

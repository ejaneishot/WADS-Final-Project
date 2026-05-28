/**
 * Pricing page — /pricing
 * Shows Free vs Pro plan. Upgrade button calls /api/subscription/upgrade.
 */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FREE_FEATURES = [
  "Career assessment & track matching",
  "Full career dictionary & roadmaps",
  "First 5 coding challenges per track",
  "Milestone tracking (questions 1–5)",
  "Resume optimizer (basic)",
  "Job listings per track",
];

const PRO_FEATURES = [
  "Everything in Free",
  "All 10 coding challenges per track",
  "Full milestone tracking (questions 1–10)",
  "Priority tutor matching",
  "Advanced resume optimizer",
  "Early access to new tracks & features",
];

export default function PricingPage() {
  const router = useRouter();
  const [currentPlan, setCurrentPlan] = useState<"free" | "pro" | null>(null);
  const [loading, setLoading] = useState(true);
  const [upgrading, setUpgrading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/subscription")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => setCurrentPlan(data?.plan ?? "free"))
      .catch(() => setCurrentPlan("free"))
      .finally(() => setLoading(false));
  }, []);

  const handleUpgrade = async () => {
    setUpgrading(true);
    setError(null);
    try {
      const res = await fetch("/api/subscription/upgrade", { method: "POST" });
      if (!res.ok) {
        const data = await res.json();
        // 401 means not logged in
        if (res.status === 401) {
          router.push("/login?redirect=/pricing");
          return;
        }
        setError(data.message || "Something went wrong.");
        return;
      }
      setCurrentPlan("pro");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setUpgrading(false);
    }
  };

  return (
    <div className="container-page relative z-10 py-16">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-14">
        <p className="section-label mb-3">Pricing</p>
        <h1 className="text-4xl font-bold mb-4">
          Simple,{" "}
          <span className="text-gradient">transparent</span> pricing
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Start free and unlock the full experience when you're ready to go deeper.
        </p>
      </div>

      {/* Current plan banner */}
      {!loading && currentPlan === "pro" && (
        <div
          className="max-w-3xl mx-auto mb-8 flex items-center gap-3 p-4 rounded-xl"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--border-accent)",
          }}
        >
          <span className="text-xl">🎉</span>
          <div>
            <p className="font-semibold text-sm" style={{ color: "var(--accent)" }}>
              You&apos;re on the Pro plan
            </p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              All 10 challenges per track are unlocked. Enjoy!
            </p>
          </div>
          <Link
            href="/careers"
            className="ml-auto text-sm font-medium"
            style={{ color: "var(--accent)" }}
          >
            Go to Careers →
          </Link>
        </div>
      )}

      {/* Error banner */}
      {error && (
        <div
          className="max-w-3xl mx-auto mb-6 p-3 rounded-xl text-sm text-center"
          style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", color: "#F87171" }}
        >
          {error}
        </div>
      )}

      {/* Plans */}
      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">

        {/* Free Plan */}
        <div
          className="card-dark flex flex-col"
          style={{
            border: currentPlan === "free" ? "1px solid var(--border-accent)" : "1px solid var(--border)",
          }}
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Free
              </p>
              {currentPlan === "free" && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
                >
                  Current plan
                </span>
              )}
            </div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-sm mb-1.5" style={{ color: "var(--text-muted)" }}>/month</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Everything you need to get started.
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {FREE_FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div
            className="block text-center rounded-xl py-2.5 text-sm font-semibold"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            {currentPlan === "free" ? "Your current plan" : "Downgraded"}
          </div>
        </div>

        {/* Pro Plan */}
        <div
          className="relative flex flex-col rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, var(--surface-raised), var(--surface-overlay))",
            border: currentPlan === "pro" ? "1px solid var(--accent)" : "1px solid var(--border-accent)",
            boxShadow: "0 0 40px rgba(110,231,183,0.08)",
          }}
        >
          {/* Popular badge */}
          {currentPlan !== "pro" && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                  color: "var(--surface)",
                }}
              >
                Most Popular
              </span>
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                Pro
              </p>
              {currentPlan === "pro" && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
                >
                  Current plan
                </span>
              )}
            </div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold">$12</span>
              <span className="text-sm mb-1.5" style={{ color: "var(--text-muted)" }}>/month</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Unlock everything and accelerate your career.
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {PRO_FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>✓</span>
                {i === 0 ? <span style={{ color: "var(--text-muted)" }}>{f}</span> : f}
              </li>
            ))}
          </ul>

          {currentPlan === "pro" ? (
            <div
              className="w-full text-center rounded-xl py-2.5 text-sm font-semibold"
              style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
            >
              ✓ Active
            </div>
          ) : (
            <button
              onClick={handleUpgrade}
              disabled={upgrading || loading}
              className="btn-accent w-full text-sm"
            >
              {upgrading ? "Upgrading..." : "Upgrade to Pro"}
            </button>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-center">Common questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I try Pro before paying?",
              a: "Yes — the first 5 questions of every track are completely free. You'll see exactly what you're getting before upgrading.",
            },
            {
              q: "What happens to my progress if I upgrade?",
              a: "All your existing progress is kept. Upgrading simply unlocks questions 6–10 and their corresponding milestones.",
            },
            {
              q: "Is this instant?",
              a: "Yes. Once you click Upgrade your account is immediately upgraded and you can access all 10 challenges right away.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}
            >
              <p className="font-semibold text-sm mb-2">{item.q}</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
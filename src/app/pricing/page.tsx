/**
 * Pricing page — /pricing
 * Shows Free vs Pro plan. No payment system yet; Upgrade button is a placeholder.
 */
"use client";

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

      {/* Plans */}
      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">

        {/* Free Plan */}
        <div
          className="card-dark flex flex-col"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="mb-6">
            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Free
            </p>
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
                <span className="flex-shrink-0 mt-0.5 text-base" style={{ color: "var(--accent)" }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="/register"
            className="block text-center rounded-xl py-2.5 text-sm font-semibold transition-all"
            style={{
              border: "1px solid var(--border-accent)",
              color: "var(--accent)",
            }}
          >
            Get started free
          </Link>
        </div>

        {/* Pro Plan */}
        <div
          className="relative flex flex-col rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, var(--surface-raised), var(--surface-overlay))",
            border: "1px solid var(--border-accent)",
            boxShadow: "0 0 40px rgba(110,231,183,0.08)",
          }}
        >
          {/* Popular badge */}
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

          <div className="mb-6">
            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
              Pro
            </p>
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
                <span className="flex-shrink-0 mt-0.5 text-base" style={{ color: "var(--accent)" }}>✓</span>
                {i === 0 ? <span style={{ color: "var(--text-muted)" }}>{f}</span> : f}
              </li>
            ))}
          </ul>

          <button
            className="btn-accent w-full text-sm"
            onClick={() => alert("Payment system coming soon! Check back later.")}
          >
            Upgrade to Pro
          </button>
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
              q: "When will payments be available?",
              a: "We're actively working on it. Join the waitlist to be notified when Pro launches.",
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
"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  careerId: string;
  milestones: string[];
  initialCompleted: number[];
  isLoggedIn: boolean;
  /** Tailwind gradient classes for the progress bar, e.g. `from-blue-500 to-cyan-500` */
  colorClass: string;
};

export function CareerMilestones({
  careerId,
  milestones,
  initialCompleted,
  isLoggedIn,
  colorClass,
}: Props) {
  const [completed, setCompleted] = useState<number[]>(initialCompleted);

  const toggle = async (idx: number) => {
    if (!isLoggedIn) return;
    const prev = completed;
    const next = prev.includes(idx)
      ? prev.filter((i) => i !== idx)
      : [...prev, idx];
    setCompleted(next);
    try {
      await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ careerId, completedMilestones: next }),
      });
    } catch (e) {
      console.error("Failed to save milestone progress", e);
      setCompleted(prev);
    }
  };

  if (milestones.length === 0) {
    return (
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Milestones for this track are not set yet. Check back later, or ask an
        admin to add steps from the dashboard.
      </p>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {milestones.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ol>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          <Link href="/login" className="font-medium underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
            Sign in
          </Link>{" "}
          to check off milestones and sync your progress across devices.
        </p>
      </div>
    );
  }

  const total = milestones.length;
  const done = completed.length;
  const pct = Math.round((done / (total || 1)) * 100);

  return (
    <div>
      <div className="mb-5">
        <div
          className="flex justify-between text-xs mb-1.5"
          style={{ color: "var(--text-muted)" }}
        >
          <span>
            {done} of {total} milestones completed
          </span>
          <span className="font-semibold" style={{ color: "var(--accent)" }}>
            {pct}%
          </span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "var(--surface)" }}
        >
          <div
            className={`h-full rounded-full bg-gradient-to-r ${colorClass}`}
            style={{
              width: `${pct}%`,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-1">
        {milestones.map((m, i) => {
          const checked = completed.includes(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all"
              style={{
                background: checked ? "var(--accent-glow)" : "var(--surface)",
                border: `1px solid ${checked ? "var(--border-accent)" : "var(--border)"}`,
              }}
            >
              <span
                className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  background: checked ? "var(--accent)" : "transparent",
                  border: `1.5px solid ${checked ? "var(--accent)" : "var(--border)"}`,
                  color: "var(--surface)",
                }}
              >
                {checked ? "✓" : ""}
              </span>
              <span
                className="text-sm"
                style={{
                  color: checked ? "var(--accent)" : "var(--text-secondary)",
                  textDecoration: checked ? "line-through" : "none",
                }}
              >
                {m}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

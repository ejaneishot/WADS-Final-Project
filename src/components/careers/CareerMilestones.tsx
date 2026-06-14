// src/components/careers/CareerMilestones.tsx
/**
 * Interactive milestone checklist for a career detail page.
 * Guests see read-only list + sign-in prompt; logged-in users can only check off
 * milestones they have already completed via the coding quiz.
 */
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
  /** The career slug — used to link to the quiz */
  slug: string;
  isPro?: boolean;
};

export function CareerMilestones({
  careerId,
  milestones,
  initialCompleted,
  isLoggedIn,
  colorClass,
  slug,
  isPro = false,
}: Props) {
  const [completed, setCompleted] = useState<number[]>(initialCompleted);

  // completed already comes from the DB which is synced by the quiz,
  // so we treat it as the source of truth for what's unlocked.
  // Users cannot manually check — only the quiz can unlock milestones.

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
        <ol
          className="list-decimal list-inside space-y-2 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {milestones.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ol>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          <Link
            href="/login"
            className="font-medium underline-offset-2 hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Sign in
          </Link>{" "}
          to track your progress.
        </p>
      </div>
    );
  }

  const total = milestones.length;
  const done = completed.length;
  const pct = Math.round((done / (total || 1)) * 100);

  return (
    <div>
      {/* Progress bar */}
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
            style={{ width: `${pct}%`, transition: "width 0.4s ease" }}
          />
        </div>
      </div>

      {/* Quiz CTA if not started */}
      {done === 0 && (
        <div
          className="mb-4 flex items-center gap-3 p-3 rounded-lg text-sm"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--border-accent)",
          }}
        >
          <span>🧩</span>
          <span style={{ color: "var(--text-secondary)" }}>
            Complete the{" "}
            <Link
              href={`/quiz/${slug}`}
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              challenge
            </Link>{" "}
            to unlock the next one.
          </span>
        </div>
      )}

      {/* Milestone list */}
      <div className="grid gap-2 sm:grid-cols-1">
        {milestones.map((m, i) => {
          const checked = completed.includes(i);
          const isProLocked = i >= 5 && !isPro;
          const locked = !checked;

          return (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: checked ? "var(--accent-glow)" : "var(--surface)",
                border: `1px solid ${checked ? "var(--border-accent)" : isProLocked ? "rgba(251,191,36,0.15)" : "var(--border)"}`,
                opacity: locked ? 0.55 : 1,
                cursor: "default",
              }}
              title={
                isProLocked
                  ? "Upgrade to Pro to unlock"
                  : locked
                    ? "Complete this question in the quiz to unlock"
                    : undefined
              }
            >
              <span
                className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: checked ? "var(--accent)" : "transparent",
                  border: `1.5px solid ${checked ? "var(--accent)" : "var(--border)"}`,
                  color: "var(--surface)",
                }}
              >
                {checked ? "✓" : ""}
              </span>
              <span
                className="text-sm flex-1"
                style={{
                  color: checked ? "var(--accent)" : "var(--text-secondary)",
                  textDecoration: checked ? "line-through" : "none",
                }}
              >
                {m}
              </span>
              {isProLocked ? (
                <a
                  href="/pricing"
                  className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(251,191,36,0.12)",
                    color: "#FCD34D",
                    border: "1px solid rgba(251,191,36,0.25)",
                  }}
                >
                  Pro
                </a>
              ) : locked ? (
                <span
                  className="text-xs flex-shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  🔒
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      {done > 0 && done < total && (
        <p
          className="mt-4 text-xs text-center"
          style={{ color: "var(--text-muted)" }}
        >
          <Link
            href={`/quiz/${slug}`}
            className="hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Continue the quiz →
          </Link>{" "}
          to unlock more milestones.
        </p>
      )}
    </div>
  );
}

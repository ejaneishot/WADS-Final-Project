/**
 * Career tracks browser (public listing; milestone toggles need session).
 * Loads careers + user progress + assessment primary tag to highlight recommended track.
 * Milestone toggles optimistically update then POST to /api/careers.
 *
 * ONLY CHANGE from original: "Explore track →" links now go to /quiz/[slug]
 * instead of /careers/[slug], so clicking it opens the coding quiz directly.
 */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Career = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  industry: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  border: string;
  milestones: string[];
};

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [q, setQ] = useState("");

  // Track progress mapping: { "career-id": [0, 2, 3] }
  const [progress, setProgress] = useState<Record<string, number[]>>({});

  // The dynamically recommended career object
  const [recommendedCareer, setRecommendedCareer] = useState<Career | null>(
    null,
  );

  useEffect(() => {
    Promise.all([
      fetch("/api/careers").then((r) => r.json()),
      fetch("/api/assessment/result").then((r) => r.json()),
    ])
      .then(([careersData, resultData]) => {
        const fetchedCareers = careersData.careers ?? [];
        setCareers(fetchedCareers);
        setProgress(careersData.progress ?? {});

        // If they took the quiz, find their matching track
        if (resultData.ok && resultData.hasResult) {
          const primaryTag = resultData.result.primary;
          const match = fetchedCareers.find(
            (c: Career) => c.tag === primaryTag || c.slug === primaryTag,
          );
          if (match) setRecommendedCareer(match);
        }
      })
      .catch((e) => console.error("Failed to load career data:", e));
  }, []);

  /** Optimistic milestone toggle with persistence to /api/careers */
  const toggleMilestone = async (careerId: string, milestoneIdx: number) => {
    const currentCompleted = progress[careerId] || [];
    const nextCompleted = currentCompleted.includes(milestoneIdx)
      ? currentCompleted.filter((i) => i !== milestoneIdx)
      : [...currentCompleted, milestoneIdx];

    // Optimistic UI update
    setProgress((prev) => ({ ...prev, [careerId]: nextCompleted }));

    // Send to backend
    try {
      await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ careerId, completedMilestones: nextCompleted }),
      });
    } catch (e) {
      console.error("Failed to save milestone progress", e);
      // Optional: Revert optimistic update here if the request fails
    }
  };

  const filtered = careers.filter((c) =>
    (c.title + " " + c.industry).toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="mb-10">
        <p className="section-label">Explore</p>
        <h1 className="mt-2 text-3xl font-bold">Specialization Tracks</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Find your domain and start building expertise.
        </p>
      </div>

      {/* Track cards (Dynamically rendered from DB) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {careers.map((track) => (
          <div
            key={track.id}
            className="relative flex flex-col justify-between rounded-2xl p-6 glow-ring"
            style={{
              background: `linear-gradient(135deg, var(--surface-raised), var(--surface-overlay))`,
              border: `1px solid ${track.border}`,
            }}
          >
            <div>
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${track.gradient} text-2xl`}
              >
                {track.icon}
              </div>
              <h2 className="text-lg font-semibold mb-1">{track.title}</h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {track.description}
              </p>
            </div>
            <div className="flex justify-end mt-6">
              {/* CHANGED: href points to /quiz/[slug] instead of /careers/[slug] */}
              <Link
                href={`/quiz/${track.slug}`}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white"
                style={{ color: "var(--accent)" }}
              >
                Explore track <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="divider mb-10" />

      {/* Recommended Track Progress */}
      {recommendedCareer && (
        <div className="mb-16">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border-accent)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${recommendedCareer.color} text-xl`}
                >
                  {recommendedCareer.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    YOUR RECOMMENDED TRACK
                  </p>
                  <h2 className="text-lg font-bold">
                    {recommendedCareer.title}
                  </h2>
                </div>
              </div>
              <Link
                href={`/careers/${recommendedCareer.slug}`}
                className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-white"
                style={{ color: "var(--accent)" }}
              >
                View Track →
              </Link>
            </div>

            {/* Progress Bar */}
            <div className="mb-5">
              <div
                className="flex justify-between text-xs mb-1.5"
                style={{ color: "var(--text-muted)" }}
              >
                <span>
                  {(progress[recommendedCareer.id] || []).length} of{" "}
                  {recommendedCareer.milestones.length} milestones completed
                </span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {Math.round(
                    ((progress[recommendedCareer.id] || []).length /
                      (recommendedCareer.milestones.length || 1)) *
                      100,
                  )}
                  %
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${recommendedCareer.color}`}
                  style={{
                    width: `${((progress[recommendedCareer.id] || []).length / (recommendedCareer.milestones.length || 1)) * 100}%`,
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>

            {/* Milestones Checkboxes */}
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedCareer.milestones.map((m, i) => {
                const checked = (progress[recommendedCareer.id] || []).includes(
                  i,
                );
                return (
                  <button
                    key={i}
                    onClick={() => toggleMilestone(recommendedCareer.id, i)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all"
                    style={{
                      background: checked
                        ? "var(--accent-glow)"
                        : "var(--surface)",
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
                        color: checked
                          ? "var(--accent)"
                          : "var(--text-secondary)",
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
        </div>
      )}

      {/* All careers Search */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-label">Browse</p>
          <h2 className="mt-2 text-2xl font-bold">Career Dictionary</h2>
        </div>
        <div className="relative w-full max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-muted)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className="input-dark !pl-10"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search careers..."
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((c) => (
          <div key={c.id} className="card-dark glow-ring group">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="text-lg font-semibold group-hover:text-gradient">
                {c.title}
              </h2>
              <span className="badge flex-shrink-0">{c.industry}</span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {c.description}
            </p>
            <Link
              href={`/careers/${c.slug}`}
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: "var(--accent)" }}
            >
              View track →
            </Link>
          </div>
        ))}
      </div>

      {q && filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p
            className="text-lg font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            No careers found
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
            Try a different search term
          </p>
        </div>
      )}
    </div>
  );
}
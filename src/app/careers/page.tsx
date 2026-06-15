/**
 * Career tracks browser (public listing; milestone toggles need session).
 * Loads careers + user progress + assessment primary tag to highlight recommended track.
 * Milestone toggles optimistically update then POST to /api/careers.
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

      {!recommendedCareer && (
      <div
        className="mb-10 flex items-center gap-4 p-5 rounded-2xl flex-wrap"
        style={{
          background: "linear-gradient(135deg, var(--surface-raised), var(--surface-overlay))",
          border: "1px solid var(--border-accent)",
        }}
      >
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <span className="text-2xl flex-shrink-0">🎯</span>
      <div>
        <p className="font-semibold text-sm">Not sure which track suits you?</p>
        <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
          Take the assessment to get a personalized recommendation based on your strengths and interests.
        </p>
      </div>
    </div>
    <Link
      href="/assessment"
      className="btn-accent flex-shrink-0 text-sm"
      style={{ padding: "0.5rem 1.25rem" }}
    >
      Take Assessment →
    </Link>
  </div>
)}

      {/*track cards from db*/}
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
              <Link
                href={`/careers/${track.slug}`}
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

    </div>
  );
}
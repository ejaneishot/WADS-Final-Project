// src/components/assessment/AssessmentExperiencePage.tsx
/**
 * Student career assessment wizard: intro → quiz → results.
 * Fetches questions from /api/assessment/questions; submit aggregates answers to /api/assessment/submit.
 * Resolves result labels via careers catalog and LEGACY_TRACK_META fallbacks.
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CareerSummary = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  icon: string | null;
  color: string | null;
};

type TrackDisplay = {
  label: string;
  slug: string;
  icon: string;
  color: string;
  desc: string;
};

/** Short assessment tags (SWE, FE, …) when DB career row is missing */
const LEGACY_TRACK_META: Record<string, TrackDisplay> = {
  SWE: {
    label: "Software Engineering",
    slug: "software-engineering",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    desc: "Build scalable systems, APIs, and full-stack products.",
  },
  FE: {
    label: "Frontend Engineering",
    slug: "frontend-engineering",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    desc: "Design delightful interfaces and shape user experiences.",
  },
  BE: {
    label: "Backend Engineering",
    slug: "backend-engineering",
    icon: "⚙️",
    color: "from-gray-600 to-gray-900",
    desc: "Architect databases, APIs, and distributed systems.",
  },
  AI: {
    label: "Artificial Intelligence",
    slug: "artificial-intelligence",
    icon: "🤖",
    color: "from-emerald-400 to-teal-500",
    desc: "Build intelligent systems, ML models, and analyze data.",
  },
  SEC: {
    label: "Cybersecurity",
    slug: "cybersecurity",
    icon: "🔐",
    color: "from-red-500 to-orange-500",
    desc: "Protect systems, hunt threats, and do ethical hacking.",
  },
  GAME: {
    label: "Game Development",
    slug: "game-development",
    icon: "🎮",
    color: "from-fuchsia-600 to-indigo-600",
    desc: "Build immersive worlds, gameplay mechanics, and simulations.",
  },
};

function resolveTrackDisplay(
  code: string,
  careers: CareerSummary[],
): TrackDisplay {
  const c = careers.find((x) => x.tag === code || x.slug === code);
  if (c) {
    return {
      label: c.title,
      slug: c.slug,
      icon: c.icon ?? "💼",
      color: c.color ?? "from-slate-500 to-slate-700",
      desc: c.description,
    };
  }
  const legacy = LEGACY_TRACK_META[code];
  if (legacy) return legacy;
  return {
    label: code,
    slug: code,
    icon: "💼",
    color: "from-slate-500 to-slate-700",
    desc: "Explore this track on the careers page.",
  };
}

export default function AssessmentExperiencePage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");

  // Dynamic state for backend data
  const [questions, setQuestions] = useState<any[]>([]);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(true);

  // Quiz progression state
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<
    { questionId: string; optionId: string }[]
  >([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Results state
  const [scores, setScores] = useState<Record<string, number> | null>(null);
  const [primaryResult, setPrimaryResult] = useState<string | null>(null);
  const [careers, setCareers] = useState<CareerSummary[]>([]);
  const [animating, setAnimating] = useState(false);

  /* Bootstrap: auth gate, question bank, prior result (skip to results), career labels */
  useEffect(() => {
    Promise.all([
      fetch("/api/me"),
      fetch("/api/assessment/questions"),
      fetch("/api/assessment/result"),
      fetch("/api/careers"),
    ]).then(async ([authRes, quizRes, resultRes, careersRes]) => {
      setIsLoggedIn(authRes.ok);

      if (careersRes.ok) {
        const careerPayload = await careersRes.json();
        const list = (careerPayload.careers ?? []) as CareerSummary[];
        setCareers(list);
      }

      // 1. Load the questions
      if (quizRes.ok) {
        const data = await quizRes.json();
        const flatQuestions = data.sections.flatMap(
          (section: any) => section.questions,
        );
        setQuestions(flatQuestions);
      }

      // 2. Check if they already have a result!
      if (resultRes.ok) {
        const pastResult = await resultRes.json();
        if (pastResult.hasResult) {
          // If they already took it, load their scores and jump to the result phase!
          setScores(pastResult.result.scores);
          setPrimaryResult(pastResult.result.primary as string);
          setPhase("result");
        }
      }

      setIsLoadingQuiz(false);
    });
  }, []);

  if (isLoggedIn === false) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">
            Sign in to take the assessment
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Your results will be saved to your profile.
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href="/login" className="btn-accent">
              Sign In
            </Link>
            <Link href="/" className="btn-ghost">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoggedIn === null || isLoadingQuiz) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div
          className="h-8 w-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{
            borderColor: "var(--accent)",
            borderTopColor: "transparent",
          }}
        />
      </div>
    );
  }

  /* ── INTRO ── */
  if (phase === "intro") {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />
        <div className="max-w-lg w-full text-center space-y-6">
          <p className="section-label">Career Discovery</p>
          <h1 className="text-4xl font-extrabold leading-tight">
            Find your <span className="text-gradient">perfect track.</span>
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Answer {questions.length} quick questions and we'll match you to the
            tech specialization that fits you best based on your natural
            problem-solving style.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {(careers.length > 0
              ? careers.map((c) => ({
                  key: c.slug,
                  icon: c.icon,
                  text: c.title,
                }))
              : Object.values(LEGACY_TRACK_META).map((t) => ({
                  key: t.slug,
                  icon: t.icon,
                  text: t.label,
                }))
            ).map((c) => (
              <span
                key={c.key}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {c.icon ? `${c.icon} ` : ""}
                {c.text}
              </span>
            ))}
          </div>
          <button onClick={() => setPhase("quiz")} className="btn-accent mt-2">
            Start Assessment →
          </button>
        </div>
      </div>
    );
  }

  /* ── RESULT ── */
  if (phase === "result" && scores && primaryResult) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const total = sorted.reduce((s, [, v]) => s + v, 0) || 1;
    const topTrack = resolveTrackDisplay(primaryResult, careers);
    const topScore = scores[primaryResult] ?? sorted[0]?.[1] ?? 0;

    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-2">
            <p className="section-label">Your Results</p>
            <h1 className="text-3xl font-extrabold">
              Here's your best-fit track.
            </h1>
          </div>

          {/* Winner card */}
          <div
            className="rounded-2xl p-8 text-center space-y-4"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border-accent)",
            }}
          >
            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${topTrack.color} text-4xl`}
            >
              {topTrack.icon}
            </div>
            <div>
              <p
                className="text-xs font-semibold mb-1"
                style={{ color: "var(--accent)" }}
              >
                BEST MATCH
              </p>
              <h2 className="text-2xl font-bold">{topTrack.label}</h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {topTrack.desc}
              </p>
            </div>
            <div className="flex justify-center">
              <div
                className="rounded-full px-4 py-1 text-sm font-semibold"
                style={{
                  background: "var(--accent-glow)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                {Math.round((topScore / total) * 100)}% match
              </div>
            </div>
          </div>

          {/* Score breakdown */}
          <div
            className="rounded-2xl p-6 space-y-3"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Full breakdown
            </p>
            {sorted.map(([tag, score]) => {
              if (score === 0) return null;
              const t = resolveTrackDisplay(tag, careers);
              const pct = Math.round((score / total) * 100);
              return (
                <div key={tag} className="flex items-center gap-3">
                  <span className="text-lg w-6">{t.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium">{t.label}</span>
                      <span style={{ color: "var(--text-muted)" }}>{pct}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "var(--surface-overlay)" }}
                    >
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${t.color}`}
                        style={{
                          width: `${pct}%`,
                          transition: "width 0.8s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={`/careers/${topTrack.slug}`} className="btn-accent">
              Explore {topTrack.label} Track →
            </Link>
            <button
              onClick={() => {
                setPhase("intro");
                setAnswers([]);
                setCurrent(0);
                setSelectedOptionId(null);
                setScores(null);
                setPrimaryResult(null);
              }}
              className="btn-ghost"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── QUIZ ── */
  const q = questions[current];
  const progress = (current / questions.length) * 100;

  const handleNext = async () => {
    if (!selectedOptionId || animating) return;
    setAnimating(true);

    const newAnswers = [
      ...answers,
      { questionId: q.id, optionId: selectedOptionId },
    ];

    if (current + 1 >= questions.length) {
      // Reached the end: Submit to API!
      try {
        const res = await fetch("/api/assessment/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: newAnswers }),
        });

        if (res.ok) {
          const resultData = await res.json();
          setScores(resultData.scores);
          setPrimaryResult(resultData.result.primary);
          setPhase("result");
        } else {
          console.error("Submission failed", await res.text());
          // Optional: handle error state here
        }
      } catch (e) {
        console.error("Network error during submission", e);
      }
    } else {
      // Go to next question
      setTimeout(() => {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelectedOptionId(null);
        setAnimating(false);
      }, 300);
      return; // prevent setting animating to false immediately
    }
    setAnimating(false);
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-xl w-full space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div
            className="flex justify-between text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <span>
              Question {current + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% done</span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "var(--surface-overlay)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          className="rounded-2xl p-7 space-y-6"
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--border)",
            opacity: animating ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <div>
            <h2 className="text-xl font-bold leading-snug">{q.prompt}</h2>
            {q.helperText && (
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {q.helperText}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {q.options.map((opt: any) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => !animating && setSelectedOptionId(opt.id)}
                  className="w-full text-left rounded-xl px-4 py-3.5 text-sm font-medium transition-all"
                  style={{
                    background: isSelected
                      ? "var(--accent-glow)"
                      : "var(--surface-overlay)",
                    border: `1px solid ${isSelected ? "var(--border-accent)" : "var(--border)"}`,
                    color: isSelected ? "var(--accent)" : "var(--text-primary)",
                    transform: isSelected ? "translateX(4px)" : "none",
                  }}
                >
                  <span className="inline-flex items-center gap-3">
                    <span
                      className="flex-shrink-0 h-5 w-5 rounded-full border flex items-center justify-center text-xs"
                      style={{
                        borderColor: isSelected
                          ? "var(--accent)"
                          : "var(--border)",
                        background: isSelected
                          ? "var(--accent)"
                          : "transparent",
                        color: "var(--surface)",
                      }}
                    >
                      {isSelected ? "✓" : ""}
                    </span>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => {
                if (current > 0) {
                  const prevAnswer = answers[answers.length - 1];
                  setCurrent(current - 1);
                  setSelectedOptionId(prevAnswer.optionId);
                  setAnswers(answers.slice(0, -1));
                }
              }}
              className="text-sm transition-colors hover:text-white"
              style={{
                color:
                  current > 0 ? "var(--text-secondary)" : "var(--text-muted)",
                cursor: current > 0 ? "pointer" : "not-allowed",
              }}
              disabled={current === 0}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedOptionId}
              className="btn-accent"
              style={{
                padding: "0.5rem 1.5rem",
                fontSize: "0.875rem",
                opacity: !selectedOptionId ? 0.4 : 1,
              }}
            >
              {current + 1 === questions.length ? "See Results" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

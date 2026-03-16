"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Track = "DS" | "SWE" | "SEC" | "AI" | "CLOUD" | "UX";

const TRACKS: Record<Track, { label: string; slug: string; icon: string; color: string; desc: string }> = {
  DS:    { label: "Data Science",          slug: "data-science",           icon: "📊", color: "from-violet-500 to-purple-600",  desc: "Uncover insights from data, build dashboards, and drive decisions." },
  SWE:   { label: "Software Engineering",  slug: "software-engineering",   icon: "💻", color: "from-blue-500 to-cyan-500",      desc: "Build scalable systems, APIs, and full-stack products." },
  SEC:   { label: "Cybersecurity",         slug: "cybersecurity",          icon: "🔐", color: "from-red-500 to-orange-500",     desc: "Protect systems, hunt threats, and do ethical hacking." },
  AI:    { label: "Artificial Intelligence", slug: "artificial-intelligence", icon: "🤖", color: "from-emerald-400 to-teal-500", desc: "Build intelligent systems, LLMs, and autonomous agents." },
  CLOUD: { label: "Cloud & DevOps",        slug: "cloud-devops",           icon: "☁️", color: "from-sky-400 to-blue-500",      desc: "Deploy, automate, and scale infrastructure in the cloud." },
  UX:    { label: "UX & Product",          slug: "ux-product",             icon: "🎨", color: "from-pink-500 to-rose-500",      desc: "Design delightful interfaces and shape product strategy." },
};

type Option = { label: string; scores: Partial<Record<Track, number>> };
type Question = { prompt: string; helper?: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    prompt: "What kind of problem excites you most?",
    helper: "Pick the one that genuinely gets you curious.",
    options: [
      { label: "Finding hidden patterns in large datasets",           scores: { DS: 3, AI: 1 } },
      { label: "Building apps and systems people actually use",       scores: { SWE: 3, UX: 1 } },
      { label: "Figuring out how systems can be broken into",         scores: { SEC: 3 } },
      { label: "Making software run faster and more reliably at scale", scores: { CLOUD: 3, SWE: 1 } },
      { label: "Teaching computers to learn from examples",           scores: { AI: 3, DS: 1 } },
      { label: "Designing experiences that feel effortless",          scores: { UX: 3 } },
    ],
  },
  {
    prompt: "Which toolset sounds most interesting to you?",
    options: [
      { label: "Python, Pandas, Jupyter, Tableau",                   scores: { DS: 3, AI: 1 } },
      { label: "React, Node.js, PostgreSQL, REST APIs",              scores: { SWE: 3 } },
      { label: "Kali Linux, Wireshark, Burp Suite",                  scores: { SEC: 3 } },
      { label: "Docker, Kubernetes, Terraform, CI/CD",               scores: { CLOUD: 3, SWE: 1 } },
      { label: "PyTorch, TensorFlow, Hugging Face",                  scores: { AI: 3, DS: 1 } },
      { label: "Figma, Notion, user research methods",               scores: { UX: 3 } },
    ],
  },
  {
    prompt: "Pick the side project you'd actually build:",
    options: [
      { label: "A dashboard visualizing trends in a public dataset",  scores: { DS: 3, AI: 1 } },
      { label: "A full-stack web or mobile app",                     scores: { SWE: 3, UX: 1 } },
      { label: "A tool to detect or prevent a specific attack",       scores: { SEC: 3 } },
      { label: "An automated home server cluster with monitoring",    scores: { CLOUD: 3 } },
      { label: "A chatbot or recommendation engine",                  scores: { AI: 3, DS: 1 } },
      { label: "A redesign of an app you find frustrating to use",   scores: { UX: 3, SWE: 1 } },
    ],
  },
  {
    prompt: "Which class sounds most exciting?",
    options: [
      { label: "Statistics, probability, and data visualization",     scores: { DS: 3 } },
      { label: "Algorithms, data structures, and system design",      scores: { SWE: 3 } },
      { label: "Network security and ethical hacking",                scores: { SEC: 3 } },
      { label: "Cloud computing and distributed systems",             scores: { CLOUD: 3, SWE: 1 } },
      { label: "Machine learning and deep learning",                  scores: { AI: 3, DS: 1 } },
      { label: "Human-computer interaction and product design",       scores: { UX: 3 } },
    ],
  },
  {
    prompt: "In a team project, you naturally end up doing...",
    options: [
      { label: "Crunching the data and presenting the findings",      scores: { DS: 3, AI: 1 } },
      { label: "Writing the core application logic",                  scores: { SWE: 3 } },
      { label: "Reviewing the system for security holes",             scores: { SEC: 3, SWE: 1 } },
      { label: "Setting up the deployment pipeline",                  scores: { CLOUD: 3 } },
      { label: "Building the prediction or recommendation model",     scores: { AI: 3 } },
      { label: "Wireframing the UI and running user tests",           scores: { UX: 3 } },
    ],
  },
  {
    prompt: "Which challenge sounds most engaging to you?",
    options: [
      { label: "Finding the story hidden in millions of rows",        scores: { DS: 3, AI: 1 } },
      { label: "Making legacy code clean, fast, and maintainable",   scores: { SWE: 3 } },
      { label: "Exploiting a system before real attackers do",        scores: { SEC: 3 } },
      { label: "Migrating a monolith to microservices in the cloud",  scores: { CLOUD: 3, SWE: 1 } },
      { label: "Getting a model to generalize to unseen data",        scores: { AI: 3, DS: 1 } },
      { label: "Reducing friction in a confusing user flow",          scores: { UX: 3 } },
    ],
  },
  {
    prompt: "What kind of impact do you want your work to have?",
    options: [
      { label: "Help organizations make smarter data-driven decisions", scores: { DS: 3, AI: 1 } },
      { label: "Ship products that millions of people rely on",       scores: { SWE: 3, UX: 1 } },
      { label: "Protect people's data and digital privacy",           scores: { SEC: 3 } },
      { label: "Ensure critical infrastructure never fails",          scores: { CLOUD: 3 } },
      { label: "Build AI that solves real-world problems at scale",   scores: { AI: 3, DS: 1 } },
      { label: "Make technology more accessible and delightful",      scores: { UX: 3 } },
    ],
  },
  {
    prompt: "Which phrase resonates with you the most?",
    options: [
      { label: "\"Data is the new oil.\"",                           scores: { DS: 3 } },
      { label: "\"Clean code, clean mind.\"",                        scores: { SWE: 3 } },
      { label: "\"Security by design.\"",                            scores: { SEC: 3 } },
      { label: "\"Automate everything.\"",                           scores: { CLOUD: 3 } },
      { label: "\"Intelligence, engineered.\"",                      scores: { AI: 3 } },
      { label: "\"Design for humans first.\"",                       scores: { UX: 3 } },
    ],
  },
];

function computeScores(answers: number[]): Record<Track, number> {
  const scores: Record<Track, number> = { DS: 0, SWE: 0, SEC: 0, AI: 0, CLOUD: 0, UX: 0 };
  answers.forEach((optIdx, qIdx) => {
    const option = QUESTIONS[qIdx]?.options[optIdx];
    if (!option) return;
    (Object.entries(option.scores) as [Track, number][]).forEach(([t, w]) => {
      scores[t] += w;
    });
  });
  return scores;
}

export default function AssessmentPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [scores, setScores] = useState<Record<Track, number> | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    fetch("/api/me").then((r) => setIsLoggedIn(r.ok));
  }, []);

  if (isLoggedIn === false) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Sign in to take the assessment</p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Your results will be saved to your profile.
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href="/login" className="btn-accent">Sign In</Link>
            <Link href="/" className="btn-ghost">Go Back</Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoggedIn === null) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "var(--accent)", borderTopColor: "transparent" }} />
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
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Answer {QUESTIONS.length} quick questions and we'll match you to the tech specialization that fits you best — Data Science, Software Engineering, Cybersecurity, AI, Cloud & DevOps, or UX & Product.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {(Object.values(TRACKS)).map((t) => (
              <span key={t.slug} className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: "var(--surface-raised)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                {t.icon} {t.label}
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
  if (phase === "result" && scores) {
    const sorted = (Object.entries(scores) as [Track, number][]).sort((a, b) => b[1] - a[1]);
    const [topTag, topScore] = sorted[0];
    const total = sorted.reduce((s, [, v]) => s + v, 0);
    const topTrack = TRACKS[topTag];

    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-2">
            <p className="section-label">Your Results</p>
            <h1 className="text-3xl font-extrabold">Here's your best-fit track.</h1>
          </div>

          {/* Winner card */}
          <div className="rounded-2xl p-8 text-center space-y-4"
            style={{ background: "var(--surface-raised)", border: "1px solid var(--border-accent)" }}>
            <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${topTrack.color} text-4xl`}>
              {topTrack.icon}
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>BEST MATCH</p>
              <h2 className="text-2xl font-bold">{topTrack.label}</h2>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{topTrack.desc}</p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-full px-4 py-1 text-sm font-semibold"
                style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}>
                {Math.round((topScore / total) * 100)}% match
              </div>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="rounded-2xl p-6 space-y-3"
            style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}>
            <p className="text-sm font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>Full breakdown</p>
            {sorted.map(([tag, score]) => {
              const t = TRACKS[tag];
              const pct = total > 0 ? Math.round((score / total) * 100) : 0;
              return (
                <div key={tag} className="flex items-center gap-3">
                  <span className="text-lg w-6">{t.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium">{t.label}</span>
                      <span style={{ color: "var(--text-muted)" }}>{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-overlay)" }}>
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${t.color}`}
                        style={{ width: `${pct}%`, transition: "width 0.8s ease" }}
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
              onClick={() => { setPhase("intro"); setAnswers([]); setCurrent(0); setSelected(null); setScores(null); }}
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
  const q = QUESTIONS[current];
  const progress = ((current) / QUESTIONS.length) * 100;

  const handleSelect = (optIdx: number) => {
    if (animating) return;
    setSelected(optIdx);
  };

  const handleNext = () => {
    if (selected === null || animating) return;
    setAnimating(true);
    const newAnswers = [...answers, selected];
    setTimeout(() => {
      if (current + 1 >= QUESTIONS.length) {
        const finalScores = computeScores(newAnswers);
        const topTag = (Object.entries(finalScores) as [Track, number][]).sort((a, b) => b[1] - a[1])[0][0];
        localStorage.setItem("sc_assessment_done", "true");
        localStorage.setItem("sc_assessment_result", TRACKS[topTag].label);
        setScores(finalScores);
        setPhase("result");
      } else {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
      }
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-xl w-full space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs" style={{ color: "var(--text-muted)" }}>
            <span>Question {current + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(progress)}% done</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-overlay)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, background: "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))", transition: "width 0.4s ease" }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="rounded-2xl p-7 space-y-6"
          style={{ background: "var(--surface-raised)", border: "1px solid var(--border)", opacity: animating ? 0 : 1, transition: "opacity 0.3s ease" }}>
          <div>
            <h2 className="text-xl font-bold leading-snug">{q.prompt}</h2>
            {q.helper && <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{q.helper}</p>}
          </div>

          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="w-full text-left rounded-xl px-4 py-3.5 text-sm font-medium transition-all"
                style={{
                  background: selected === i ? "var(--accent-glow)" : "var(--surface-overlay)",
                  border: `1px solid ${selected === i ? "var(--border-accent)" : "var(--border)"}`,
                  color: selected === i ? "var(--accent)" : "var(--text-primary)",
                  transform: selected === i ? "translateX(4px)" : "none",
                }}
              >
                <span className="inline-flex items-center gap-3">
                  <span
                    className="flex-shrink-0 h-5 w-5 rounded-full border flex items-center justify-center text-xs"
                    style={{
                      borderColor: selected === i ? "var(--accent)" : "var(--border)",
                      background: selected === i ? "var(--accent)" : "transparent",
                      color: "var(--surface)",
                    }}
                  >
                    {selected === i ? "✓" : ""}
                  </span>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => { if (current > 0) { setCurrent(current - 1); setSelected(answers[current - 1] ?? null); setAnswers(answers.slice(0, -1)); } }}
              className="text-sm transition-colors hover:text-white"
              style={{ color: current > 0 ? "var(--text-secondary)" : "var(--text-muted)", cursor: current > 0 ? "pointer" : "not-allowed" }}
              disabled={current === 0}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="btn-accent"
              style={{ padding: "0.5rem 1.5rem", fontSize: "0.875rem", opacity: selected === null ? 0.4 : 1 }}
            >
              {current + 1 === QUESTIONS.length ? "See Results" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

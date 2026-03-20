"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Career = {
  id: string;
  title: string;
  description: string;
  industry: string;
};

type TrackKey =
  | "Software Engineering"
  | "Data Science"
  | "Cybersecurity"
  | "Artificial Intelligence"
  | "Cloud & DevOps"
  | "UX & Product";

const TRACK_META: Record<
  TrackKey,
  { icon: string; color: string; slug: string; milestones: string[] }
> = {
  "Software Engineering": {
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    slug: "software-engineering",
    milestones: [
      "Learn a programming language",
      "Build your first project",
      "Study data structures & algorithms",
      "Learn system design basics",
      "Build a portfolio with 3+ projects",
      "Apply for internships",
    ],
  },
  "Data Science": {
    icon: "📊",
    color: "from-violet-500 to-purple-600",
    slug: "data-science",
    milestones: [
      "Learn Python & statistics",
      "Data wrangling with Pandas",
      "Data visualization with Matplotlib/Seaborn",
      "Machine learning basics with Scikit-learn",
      "Build an end-to-end data project",
      "Apply for internships",
    ],
  },
  Cybersecurity: {
    icon: "🔐",
    color: "from-red-500 to-orange-500",
    slug: "cybersecurity",
    milestones: [
      "Networking & Linux fundamentals",
      "Learn ethical hacking basics",
      "Practice on TryHackMe / HackTheBox",
      "Complete a CTF competition",
      "Get CompTIA Security+ certified",
      "Apply for internships",
    ],
  },
  "Artificial Intelligence": {
    icon: "🤖",
    color: "from-emerald-400 to-teal-500",
    slug: "artificial-intelligence",
    milestones: [
      "Python, math & linear algebra",
      "Machine learning fundamentals",
      "Deep learning with PyTorch/TensorFlow",
      "NLP & transformer basics",
      "Build and deploy an AI project",
      "Apply for internships",
    ],
  },
  "Cloud & DevOps": {
    icon: "☁️",
    color: "from-sky-400 to-blue-500",
    slug: "cloud-devops",
    milestones: [
      "Linux & networking basics",
      "Learn Docker & containerization",
      "Kubernetes fundamentals",
      "Cloud provider basics (AWS/GCP/Azure)",
      "Build a CI/CD pipeline",
      "Apply for internships",
    ],
  },
  "UX & Product": {
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    slug: "ux-product",
    milestones: [
      "Design thinking & UX fundamentals",
      "Learn Figma",
      "Conduct user research & usability tests",
      "Build a UX case study portfolio",
      "Product management basics",
      "Apply for internships",
    ],
  },
};

const tracks = [
  {
    title: "Data Science",
    desc: "Master data analysis, machine learning, and statistical modeling.",
    icon: "📊",
    gradient: "from-violet-500/20 to-purple-600/20",
    border: "rgba(167,139,250,0.2)",
    slug: "data-science",
  },
  {
    title: "Software Engineering",
    desc: "Build scalable systems, APIs, and full-stack applications.",
    icon: "💻",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "rgba(59,130,246,0.2)",
    slug: "software-engineering",
  },
  {
    title: "Cybersecurity",
    desc: "Protect systems, networks, and data from digital threats.",
    icon: "🔐",
    gradient: "from-red-500/20 to-orange-500/20",
    border: "rgba(239,68,68,0.2)",
    slug: "cybersecurity",
  },
  {
    title: "Artificial Intelligence",
    desc: "Design intelligent systems, LLMs, and autonomous agents.",
    icon: "🤖",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "rgba(110,231,183,0.2)",
    slug: "artificial-intelligence",
  },
  {
    title: "Cloud & DevOps",
    desc: "Deploy, scale, and automate infrastructure in the cloud.",
    icon: "☁️",
    gradient: "from-sky-500/20 to-blue-400/20",
    border: "rgba(14,165,233,0.2)",
    slug: "cloud-devops",
  },
  {
    title: "UX & Product",
    desc: "Shape user experiences and drive product strategy.",
    icon: "🎨",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "rgba(236,72,153,0.2)",
    slug: "ux-product",
  },
];

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [q, setQ] = useState("");
  const [recommendedTrack, setRecommendedTrack] = useState<string | null>(null);
  const [completedMilestones, setCompletedMilestones] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/careers")
      .then((r) => r.json())
      .then((j) => setCareers(j.careers ?? []))
      .catch(() => setCareers([]));
    const track = localStorage.getItem("sc_assessment_result");
    setRecommendedTrack(track);
    if (track) {
      setCompletedMilestones(
        JSON.parse(localStorage.getItem(`sc_progress_${track}`) ?? "[]"),
      );
    }
  }, []);

  const toggleMilestone = (idx: number) => {
    const next = completedMilestones.includes(idx)
      ? completedMilestones.filter((i) => i !== idx)
      : [...completedMilestones, idx];
    setCompletedMilestones(next);
    if (recommendedTrack)
      localStorage.setItem(
        `sc_progress_${recommendedTrack}`,
        JSON.stringify(next),
      );
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

      {/* Track cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {tracks.map((track) => (
          <div
            key={track.slug}
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
                {track.desc}
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

      {/* All careers */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-label">Browse</p>
          <h2 className="mt-2 text-2xl font-bold">My Career Paths</h2>
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
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {c.description}
            </p>
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

      {/* Recommended Track Progress */}
      {recommendedTrack &&
        TRACK_META[recommendedTrack as TrackKey] &&
        (() => {
          const meta = TRACK_META[recommendedTrack as TrackKey];
          const total = meta.milestones.length;
          const done = completedMilestones.length;
          const pct = Math.round((done / total) * 100);
          return (
            <div
              className="mt-12 rounded-2xl p-6"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border-accent)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${meta.color} text-xl`}
                  >
                    {meta.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      YOUR RECOMMENDED TRACK
                    </p>
                    <h2 className="text-lg font-bold">{recommendedTrack}</h2>
                  </div>
                </div>
                <Link
                  href={`/careers/${meta.slug}`}
                  className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-white"
                  style={{ color: "var(--accent)" }}
                >
                  View Track →
                </Link>
              </div>
              <div className="mb-5">
                <div
                  className="flex justify-between text-xs mb-1.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span>
                    {done} of {total} milestones completed
                  </span>
                  <span
                    className="font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {pct}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "var(--surface)" }}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${meta.color}`}
                    style={{ width: `${pct}%`, transition: "width 0.5s ease" }}
                  />
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {meta.milestones.map((m, i) => {
                  const checked = completedMilestones.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleMilestone(i)}
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
          );
        })()}
    </div>
  );
}

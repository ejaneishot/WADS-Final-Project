"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Create account and complete guided assessment",
    desc: "Designed to turn academic potential into actionable career direction.",
  },
  {
    num: "02",
    title: "Analyze strengths, interests, and learning patterns",
    desc: "Designed to turn academic potential into actionable career direction.",
  },
  {
    num: "03",
    title: "Match results to specialization clusters",
    desc: "Designed to turn academic potential into actionable career direction.",
  },
  {
    num: "04",
    title: "Unlock roadmap, courses, and program recommendations",
    desc: "Designed to turn academic potential into actionable career direction.",
  },
];

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Ambient glows */}
        <div className="absolute top-[-100px] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[140px] pointer-events-none will-change-transform" />
        <div className="absolute bottom-[-50px] right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/6 blur-[120px] pointer-events-none will-change-transform" />

        <div className="container-page relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* ── LEFT COLUMN ── */}
            <div className="space-y-8">
              {/* Top badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}>
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" style={{ animation: "pulse-glow 2s infinite" }} />
                SmartCareer AI · Talent Discovery Platform
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]">
                Discover the{" "}
                <span className="text-gradient">best-fit tech path</span>{" "}
                for every student.
              </h1>

              {/* Description */}
              <p className="max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
                A modern talent discovery platform for Computer Science students —
                combining assessment, AI-assisted recommendations, and personalized
                learning roadmaps in one focused experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/register" className="btn-accent">
                  Start Assessment
                </Link>
                <Link href="/careers" className="btn-ghost">
                  Explore Careers
                </Link>
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { value: "6", label: "career tracks" },
                  { value: "100+", label: "question signals" },
                  { value: "AI", label: "personalized guidance" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl px-4 py-4"
                    style={{
                      background: "var(--surface-raised)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p className="text-2xl font-bold mono">{stat.value}</p>
                    <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="space-y-4">
              {/* Journey Monitor Card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--surface-raised)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="section-label mb-1">Assessment Overview</p>
                    <h2 className="text-xl font-bold">STUDENT JOURNEY MONITOR</h2>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: "rgba(110, 231, 183, 0.12)",
                      color: "var(--accent)",
                      border: "1px solid var(--border-accent)",
                    }}
                  >
                    Live Flow
                  </span>
                </div>

                {/* Steps */}
                <div className="space-y-3">
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      className="flex items-start gap-4 rounded-xl p-4 transition-all hover:border-[var(--border-accent)]"
                      style={{
                        background: "var(--surface-overlay)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span
                        className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                          color: "var(--surface)",
                        }}
                      >
                        {step.num}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-snug">{step.title}</p>
                        <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation Engine Banner */}
              <div
                className="rounded-2xl p-5 flex items-center gap-5"
                style={{
                  background: "linear-gradient(135deg, rgba(110, 231, 183, 0.06), rgba(59, 130, 246, 0.06))",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="section-label mb-2">Recommendation Engine</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    Weighted scoring, AI-assisted insights, and student-centric pathways
                    built into a cleaner, more premium interface.
                  </p>
                </div>
                <div
                  className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl px-4 py-3"
                  style={{
                    background: "var(--surface-raised)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p className="text-[0.6rem] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Match confidence
                  </p>
                  <p className="text-2xl font-bold mono text-gradient">94%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-page"><div className="divider" /></div>

      {/* ── WHAT WE DELIVER ── */}
      <section className="py-20">
        <div className="container-page">
          <p className="section-label">What We Deliver</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            End-to-end career discovery,<br />
            <span style={{ color: "var(--text-secondary)" }}>from assessment to roadmap.</span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                ),
                title: "Structured Assessment",
                desc: "Scientifically designed quizzes evaluate analytical, programming, and problem-solving tendencies with weighted scoring.",
                tags: ["Analytical", "Programming"],
              },
              {
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.36-7.36l-1.41 1.41M7.05 16.95l-1.41 1.41m12.72 0l-1.41-1.41M7.05 7.05L5.64 5.64" />
                  </svg>
                ),
                title: "AI Recommendation",
                desc: "Intelligent classification matches you with suitable CS domains using weighted scoring models in real-time.",
                tags: ["ML", "Real-time"],
              },
              {
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                ),
                title: "Personalized Roadmaps",
                desc: "Tailored learning paths with curated courses, certifications, and programs aligned to your strengths.",
                tags: ["Adaptive", "Tracking"],
              },
            ].map((item) => (
              <div key={item.title} className="card-dark glow-ring group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                  style={{ background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-page"><div className="divider" /></div>

      {/* ── SPECIALIZATIONS ── */}
      <section className="py-20">
        <div className="container-page">
          <p className="section-label">Specialization Tracks</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Find your domain.{" "}
            <span style={{ color: "var(--text-secondary)" }}>Master it.</span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Data Science", icon: "📊", color: "from-violet-500/10 to-purple-500/10" },
              { name: "Software Engineering", icon: "⚙️", color: "from-blue-500/10 to-cyan-500/10" },
              { name: "Cybersecurity", icon: "🛡️", color: "from-red-500/10 to-orange-500/10" },
              { name: "Artificial Intelligence", icon: "🧠", color: "from-emerald-500/10 to-teal-500/10" },
              { name: "Cloud & DevOps", icon: "☁️", color: "from-sky-500/10 to-blue-500/10" },
              { name: "UX & Product", icon: "🎨", color: "from-pink-500/10 to-rose-500/10" },
            ].map((track) => (
              <div key={track.name} className="card-dark glow-ring group flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${track.color} text-xl transition-transform group-hover:scale-110`}>
                  {track.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{track.name}</h3>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Explore track →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="container-page"><div className="divider" /></div>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="container-page text-center">
          <p className="section-label">Ready to Get Started?</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            From assessment to career path —<br />
            <span className="text-gradient">let&apos;s discover your potential.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/register" className="btn-accent">Start Assessment</Link>
            <Link href="/login" className="btn-ghost">Sign In</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>© SmartCareer.AI 2025</span>
          <div className="flex gap-5">
            {["Dashboard", "Careers", "Docs"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="text-xs transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

type Career = { id: string; title: string; description: string; industry: string };

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("/api/careers")
      .then((r) => r.json())
      .then((j) => setCareers(j.careers ?? []))
      .catch(() => setCareers([]));
  }, []);

  const filtered = careers.filter((c) =>
    (c.title + " " + c.industry).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="container-page relative z-10 py-12">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-label">Browse</p>
          <h1 className="mt-2 text-3xl font-bold">Careers</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Explore career paths in tech. Data is pre-seeded on first run.
          </p>
        </div>

        {/* Search */}
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

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((c) => (
          <div key={c.id} className="card-dark glow-ring group">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="text-lg font-semibold group-hover:text-gradient transition-all">
                {c.title}
              </h2>
              <span className="badge flex-shrink-0">{c.industry}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {c.description}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-lg font-medium" style={{ color: "var(--text-muted)" }}>
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

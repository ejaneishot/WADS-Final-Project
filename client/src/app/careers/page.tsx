"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/card";

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
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Careers</h1>
          <p className="text-sm text-slate-600">A small dataset is pre-seeded on first run.</p>
        </div>
        <input
          className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search (e.g., analyst, ux, engineer)"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((c) => (
          <Card key={c.id} className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200">
                {c.industry}
              </span>
            </div>
            <p className="text-sm text-slate-600">{c.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

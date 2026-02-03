"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/card";

type Profile = {
  major: string | null;
  semester: number | null;
  gpaRange: string | null;
  interests: string[];
  skills: Array<{ name: string; level: number }>;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then(async (r) => {
        if (!r.ok) throw new Error((await r.json()).message ?? "Failed to load profile");
        return r.json();
      })
      .then(setProfile)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-slate-600">Update your profile and generate AI career matches.</p>
        </div>

        <button
          onClick={async () => {
            const res = await fetch("/api/ai/career-match", { method: "POST" });
            if (!res.ok) {
              const j = await res.json().catch(() => ({ message: "AI request failed" }));
              alert(j.message ?? "AI request failed");
              return;
            }
            const j = await res.json();
            alert("Top match: " + j.matches?.[0]?.careerTitle);
          }}
          className="rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-500"
        >
          Generate AI matches
        </button>
      </div>

      {err && <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">{err}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Your profile</h2>
          <p className="mt-1 text-sm text-slate-600">Edit via API (PUT /api/profile). UI form is a homework exercise 🙂</p>
          <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">
{JSON.stringify(profile, null, 2)}
          </pre>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Next steps</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-700">
            <li>Add a Profile edit form (major, semester, GPA range, interests, skills).</li>
            <li>Build an assessment quiz (store answers, compute interest clusters).</li>
            <li>Replace AI stub with real provider + fallback + test cases.</li>
            <li>Add skill-gap chart + learning plan generator.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

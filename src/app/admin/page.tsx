"use client";

import { useState } from "react";
import { Card } from "@/components/card";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Admin</h1>
        <p className="text-sm text-slate-600">Create careers (requires admin role).</p>
      </div>

      <Card>
        <form
          className="grid gap-3"
          onSubmit={async (e) => {
            e.preventDefault();
            setMsg(null);
            const res = await fetch("/api/careers", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title, industry, description })
            });
            const j = await res.json().catch(() => ({}));
            setMsg(res.ok ? "Created!" : (j.message ?? "Failed"));
          }}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="block text-sm font-medium">
              Title
              <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="block text-sm font-medium">
              Industry
              <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Description
            <textarea className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>

          {msg && <p className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700 ring-1 ring-slate-200">{msg}</p>}

          <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
            Create Career
          </button>
        </form>
      </Card>
    </div>
  );
}

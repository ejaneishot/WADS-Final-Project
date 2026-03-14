"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container-page relative z-10 py-12">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <p className="section-label">Management</p>
          <h1 className="mt-2 text-3xl font-bold">Admin Panel</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Create and manage career entries. Requires admin role.
          </p>
        </div>

        {/* Card */}
        <div className="card-dark glow-ring">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">New Career</h2>
            <span className="badge">Admin Only</span>
          </div>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setMsg(null);
              setLoading(true);
              const res = await fetch("/api/careers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, industry, description }),
              });
              const j = await res.json().catch(() => ({}));
              setLoading(false);
              setMsg({
                text: res.ok ? "Career created successfully!" : (j.message ?? "Failed to create"),
                ok: res.ok,
              });
              if (res.ok) {
                setTitle("");
                setIndustry("");
                setDescription("");
              }
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Title
                </label>
                <input
                  className="input-dark"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Data Analyst"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Industry
                </label>
                <input
                  className="input-dark"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Technology"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                Description
              </label>
              <textarea
                className="input-dark !min-h-[100px] resize-y"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the career path, responsibilities, and growth opportunities..."
                required
              />
            </div>

            {msg && (
              <div className={msg.ok ? "success-box" : "error-box"}>
                {msg.text}
              </div>
            )}

            <button disabled={loading} className="btn-accent !rounded-xl !py-2.5">
              {loading ? "Creating..." : "Create Career"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

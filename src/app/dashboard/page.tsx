"use client";

import { useEffect, useState } from "react";

type Profile = {
  name: string | null;
  major: string | null;
  semester: number | null;
  gpaRange: string | null;
  interests: string[];
  skills: Array<{ name: string; level: number }>;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [matchLoading, setMatchLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [semester, setSemester] = useState("");
  const [gpaRange, setGpaRange] = useState("");
  const [interests, setInterests] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("3");
  const [skills, setSkills] = useState<Array<{ name: string; level: number }>>([]);

  useEffect(() => {
    fetch("/api/profile")
      .then(async (r) => {
        if (!r.ok) throw new Error((await r.json()).message ?? "Failed to load profile");
        return r.json();
      })
      .then((data) => {
        setProfile(data);
        setName(data.name ?? "");
        setMajor(data.major ?? "");
        setSemester(data.semester?.toString() ?? "");
        setGpaRange(data.gpaRange ?? "");
        setInterests(data.interests?.join(", ") ?? "");
        setSkills(data.skills ?? []);
      })
      .catch((e) => setErr(e.message));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg(null);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || null,
          major: major || null,
          semester: semester ? parseInt(semester) : null,
          gpaRange: gpaRange || null,
          interests: interests
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          skills,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({ message: "Save failed" }));
        setSaveMsg(j.message ?? "Save failed");
      } else {
        // Re-fetch profile since PUT only returns { ok: true }
        const fresh = await fetch("/api/profile").then((r) => r.json());
        setProfile(fresh);
        setName(fresh.name ?? "");
        setMajor(fresh.major ?? "");
        setSemester(fresh.semester?.toString() ?? "");
        setGpaRange(fresh.gpaRange ?? "");
        setInterests(fresh.interests?.join(", ") ?? "");
        setSkills(fresh.skills ?? []);
        setSaveMsg("Profile saved!");
        setEditing(false);
      }
    } catch {
      setSaveMsg("Save failed");
    } finally {
      setSaving(false);
    }
  };

  const addSkill = () => {
    if (!skillName.trim()) return;
    setSkills([...skills, { name: skillName.trim(), level: parseInt(skillLevel) }]);
    setSkillName("");
    setSkillLevel("3");
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none will-change-transform" />

      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-label">Overview</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Update your profile and generate AI career matches.
          </p>
        </div>
        <button
          onClick={async () => {
            setMatchLoading(true);
            const res = await fetch("/api/ai/career-match", { method: "POST" });
            setMatchLoading(false);
            if (!res.ok) {
              const j = await res.json().catch(() => ({ message: "AI request failed" }));
              alert(j.message ?? "AI request failed");
              return;
            }
            const j = await res.json();
            alert("Top match: " + j.matches?.[0]?.careerTitle);
          }}
          disabled={matchLoading}
          className="btn-accent flex items-center gap-2"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.36-7.36l-1.41 1.41M7.05 16.95l-1.41 1.41m12.72 0l-1.41-1.41M7.05 7.05L5.64 5.64" />
          </svg>
          {matchLoading ? "Analyzing..." : "Generate AI Matches"}
        </button>
      </div>

      {err && <div className="error-box mb-6">{err}</div>}

      <div className="grid gap-5 md:grid-cols-2">
        {/* Profile card */}
        <div className="card-dark glow-ring">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your Profile</h2>
            <button
              onClick={() => { setEditing(!editing); setSaveMsg(null); }}
              className={editing ? "btn-ghost !py-1.5 !px-3 !text-xs" : "badge cursor-pointer hover:opacity-80"}
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {!editing ? (
            /* View mode */
            <div className="space-y-3">
              {[
                { label: "Name", value: profile?.name },
                { label: "Major", value: profile?.major },
                { label: "Semester", value: profile?.semester },
                { label: "GPA Range", value: profile?.gpaRange },
                { label: "Interests", value: profile?.interests?.length ? profile.interests.join(", ") : null },
              ].map((field) => (
                <div key={field.label} className="flex items-center justify-between rounded-lg p-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <span className="text-xs mono" style={{ color: "var(--text-muted)" }}>{field.label}</span>
                  <span className="text-sm">{field.value ?? <span style={{ color: "var(--text-muted)" }}>Not set</span>}</span>
                </div>
              ))}

              {/* Skills */}
              <div className="rounded-lg p-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <span className="text-xs mono" style={{ color: "var(--text-muted)" }}>Skills</span>
                {profile?.skills?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.skills.map((s, i) => (
                      <span key={i} className="badge">
                        {s.name} · {s.level}/5
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>No skills added</p>
                )}
              </div>
            </div>
          ) : (
            /* Edit mode */
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Major</label>
                <input className="input-dark" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. John Doe" />
                <input className="input-dark" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="e.g. Computer Science" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Semester</label>
                  <input className="input-dark" type="number" min="1" max="14" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="e.g. 4" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>GPA Range</label>
                  <select className="input-dark" value={gpaRange} onChange={(e) => setGpaRange(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="< 2.5">{"< 2.5"}</option>
                    <option value="2.5 - 3.0">2.5 - 3.0</option>
                    <option value="3.0 - 3.5">3.0 - 3.5</option>
                    <option value="3.5 - 4.0">3.5 - 4.0</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Interests (comma-separated)</label>
                <input className="input-dark" value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="e.g. AI, Web Dev, Data Science" />
              </div>

              {/* Skills editor */}
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Skills</label>
                <div className="flex gap-2 mb-2">
                  <input className="input-dark flex-1" value={skillName} onChange={(e) => setSkillName(e.target.value)} placeholder="Skill name" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())} />
                  <select className="input-dark !w-20" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
                    {[1,2,3,4,5].map((n) => <option key={n} value={n}>{n}/5</option>)}
                  </select>
                  <button onClick={addSkill} className="btn-ghost !py-1.5 !px-3 !text-xs">Add</button>
                </div>
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <span key={i} className="badge group cursor-pointer" onClick={() => removeSkill(i)}>
                        {s.name} · {s.level}/5 <span className="ml-1 opacity-50 group-hover:opacity-100">✕</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {saveMsg && (
                <div className={saveMsg === "Profile saved!" ? "success-box" : "error-box"}>
                  {saveMsg}
                </div>
              )}

              <button onClick={handleSave} disabled={saving} className="btn-accent w-full !rounded-xl !py-2.5">
                {saving ? "Saving..." : "Save Profile"}
              </button>
            </div>
          )}
        </div>

        {/* Next steps card */}
        <div className="card-dark glow-ring">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Next Steps</h2>
            <span className="badge">Roadmap</span>
          </div>
          <div className="space-y-3">
            {[
              { num: "01", text: "Add a Profile edit form (major, semester, GPA range, interests, skills)." },
              { num: "02", text: "Build an assessment quiz (store answers, compute interest clusters)." },
              { num: "03", text: "Replace AI stub with real provider + fallback + test cases." },
              { num: "04", text: "Add skill-gap chart + learning plan generator." },
            ].map((step) => (
              <div key={step.num} className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.02]" style={{ border: "1px solid var(--border)" }}>
                <span className="mono text-xs font-bold text-gradient mt-0.5">{step.num}</span>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
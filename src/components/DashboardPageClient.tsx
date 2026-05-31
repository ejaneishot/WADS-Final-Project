// src/components/DashboardPageClient.tsx
/**
 * Extended student dashboard client (profile + assessment + AI career-match CTA).
 * Same data model as dashboard/page but adds POST /api/ai/career-match from the header.
 */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { resolveQuizScoreLabel } from "@/lib/assessmentScoring";

/** Strict payload contract modeling client-side structural profile schema */
type Profile = {
  name: string | null;
  major: string | null;
  semester: number | null;
  gpaRange: string | null;
  interests: string[];
  skills: Array<{ name: string; level: number }>;
};

/** Data schema representing analytical cluster allocations from the scoring runtime */
type AssessmentResult = {
  primary: string;
  secondary: string | null;
  scores: Record<string, number>;
};

export default function DashboardPageClient() {
  // ── SERVER RECONCILIATION STATE READS ──
  const [profile, setProfile] = useState<Profile | null>(null);
  const [assessmentResult, setAssessmentResult] =
    useState<AssessmentResult | null>(null);

  /** Active baseline catalog used for downstream lookup text translations */
  const [careerTitles, setCareerTitles] = useState<
    { slug: string; title: string; tag: string }[]
  >([]);

  // ── FORM INTERACTION & LOADING GATES ──
  const [matchLoading, setMatchLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // ── ISOLATED FIELD ELEMENT STORES (BUFFERED FORM STATE) ──
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [semester, setSemester] = useState("");
  const [gpaRange, setGpaRange] = useState("");
  const [interests, setInterests] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("3");
  const [skills, setSkills] = useState<Array<{ name: string; level: number }>>(
    [],
  );

  /**
   * LIFECYCLE INITIALIZATION HANDSHAKE
   * Fires parallel asynchronous queries on component frame mount to populate view dependencies.
   * Pulls base career titles, student profiles, and recent assessment heuristics concurrently.
   */
  useEffect(() => {
    /* Parallel fetch: careers (tag labels), profile, assessment result */
    fetch("/api/careers")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.careers) {
          setCareerTitles(
            (
              data.careers as { slug: string; title: string; tag: string }[]
            ).map((c) => ({
              slug: c.slug,
              title: c.title,
              tag: c.tag,
            })),
          );
        }
      })
      .catch(console.error);

    fetch("/api/profile")
      .then(async (r) => {
        if (!r.ok)
          throw new Error((await r.json()).message ?? "Failed to load profile");
        return r.json();
      })
      .then((data) => {
        setErr(null);
        setProfile(data);
        // Hydrate localized field variables to separate layout rendering from form mutations
        setName(data.name ?? "");
        setMajor(data.major ?? "");
        setSemester(data.semester?.toString() ?? "");
        setGpaRange(data.gpaRange ?? "");
        setInterests(data.interests?.join(", ") ?? "");
        setSkills(data.skills ?? []);
      })
      .catch((e) => setErr(e.message));

    fetch("/api/assessment/result")
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && data.hasResult) {
          setAssessmentResult(data.result);
        }
      })
      .catch(console.error);
  }, []);

  /**
   * SERIALIZATION & RE-MUTATION DISPATCHER
   * Packages buffered field data states and pushes a PUT query to modify database state.
   * Re-fetches current structural references upon successful mutations to achieve single-source-of-truth parity.
   */
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
          // Unpacks CSV string data into a clean sanitized string literal array array
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
        // Re-hydrate application states with raw normalized values returned from our backend
        const fresh = await fetch("/api/profile").then((r) => r.json());
        setProfile(fresh);
        setName(fresh.name ?? "");
        setMajor(fresh.major ?? "");
        setSemester(fresh.semester?.toString() ?? "");
        setGpaRange(fresh.gpaRange ?? "");
        setInterests(fresh.interests?.join(", ") ?? "");
        setSkills(fresh.skills ?? []);
        setSaveMsg("Profile saved!");
        setEditing(false); // Disengage layout modifications panel
      }
    } catch {
      setSaveMsg("Save failed");
    } finally {
      setSaving(false);
    }
  };

  /**
   * IN-MEMORY CAPABILITY MODIFIER
   * Enqueues freshly declared tech items into the local un-saved state buffer map.
   */
  const addSkill = () => {
    if (!skillName.trim()) return;
    setSkills([
      ...skills,
      { name: skillName.trim(), level: parseInt(skillLevel) },
    ]);
    setSkillName(""); // Clear form item descriptor input element
    setSkillLevel("3"); // Reset baseline qualification parameter to default median value
  };

  /**
   * IN-MEMORY SKILL STRIPPER
   * Filters targeted capability array parameters out of the temporary buffer mapping based on positional array index keys.
   */
  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="container-page relative z-10 py-12">
      {/* Background radial atmosphere enhancement layer */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none will-change-transform" />

      {/* ── MODULE HEADER & INFERENCE INTERACTION ENGINE ── */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-label">Overview</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Update your profile and generate AI career matches.
          </p>
        </div>

        {/* Dispatches structured analytical vector tasks directly via explicit POST endpoints */}
        <button
          onClick={async () => {
            setMatchLoading(true);
            const res = await fetch("/api/ai/career-match", { method: "POST" });
            setMatchLoading(false);
            if (!res.ok) {
              const j = await res
                .json()
                .catch(() => ({ message: "AI request failed" }));
              alert(j.message ?? "AI request failed");
              return;
            }
            const j = await res.json();
            alert("Top match: " + j.matches?.[0]?.careerTitle);
          }}
          disabled={matchLoading}
          className="btn-accent flex items-center gap-2"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.36-7.36l-1.41 1.41M7.05 16.95l-1.41 1.41m12.72 0l-1.41-1.41M7.05 7.05L5.64 5.64" />
          </svg>
          {matchLoading ? "Analyzing..." : "Generate AI Matches"}
        </button>
      </div>

      {err && <div className="error-box mb-6">{err}</div>}

      <div className="max-w-2xl">
        {/* ── DATA DISCOVERY LEFT RAIL: THE PROFILE PROFILE CARD ── */}
        <div className="card-dark glow-ring">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your Profile</h2>
            <button
              onClick={() => {
                setEditing(!editing);
                setSaveMsg(null);
              }}
              className={
                editing
                  ? "btn-ghost !py-1.5 !px-3 !text-xs"
                  : "badge cursor-pointer hover:opacity-80"
              }
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* ── CASE 1: READ ONLY LAYOUT LAYER ── */}
          {!editing ? (
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  { label: "Name", value: profile?.name },
                  { label: "Major", value: profile?.major },
                  { label: "Semester", value: profile?.semester },
                  { label: "GPA Range", value: profile?.gpaRange },
                  {
                    label: "Interests",
                    value: profile?.interests?.length
                      ? profile.interests.join(", ")
                      : null,
                  },
                ].map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between rounded-lg p-3"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span
                      className="text-xs mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {field.label}
                    </span>
                    <span className="text-sm">
                      {field.value ?? (
                        <span style={{ color: "var(--text-muted)" }}>
                          Not set
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Read Only Tagged Capability Chips */}
              <div
                className="rounded-lg p-3"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-xs mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  Skills
                </span>
                {profile?.skills?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.skills.map((s, i) => (
                      <span key={i} className="badge">
                        {s.name} · {s.level}/5
                      </span>
                    ))}
                  </div>
                ) : (
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    No skills added
                  </p>
                )}
              </div>

              {/* Real-time Dynamic Assessment Cluster Resolvers */}
              {assessmentResult ? (
                <div
                  className="rounded-xl p-4 flex flex-col gap-2"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-accent)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Career Match
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {/* Resolves relational string slug hashes over into human readable track text literals */}
                      {resolveQuizScoreLabel(
                        assessmentResult.primary,
                        careerTitles,
                      )}
                    </span>
                  </div>

                  {assessmentResult.secondary && (
                    <div
                      className="flex items-center justify-between mt-1 pt-3 border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Secondary Match
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {resolveQuizScoreLabel(
                          assessmentResult.secondary,
                          careerTitles,
                        )}
                      </span>
                    </div>
                  )}
                  <Link
                    href="/assessment"
                    className="text-xs text-center mt-2 opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Retake Assessment
                  </Link>
                </div>
              ) : (
                /* Prompt funnel view shown to students with clear diagnostic history gaps */
                <div
                  className="rounded-xl p-6 mt-2 text-center"
                  style={{
                    background: "var(--surface-overlay)",
                    border: "1px dashed var(--border)",
                  }}
                >
                  <div className="mb-2 text-2xl">🎯</div>
                  <h3 className="text-sm font-semibold mb-1 text-white">
                    No Assessment Result
                  </h3>
                  <p
                    className="text-xs mb-4 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Discover which tech career track aligns perfectly with your
                    natural problem-solving style.
                  </p>
                  <Link
                    href="/assessment"
                    className="btn-accent inline-block w-full !py-2.5 !text-sm"
                  >
                    Take Assessment Now
                  </Link>
                </div>
              )}
            </div>
          ) : (
            /* ── CASE 2: LIVE ACTION EDIT PANEL CONTROLS ── */
            <div className="space-y-4">
              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  className="input-dark mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                />

                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Major
                </label>
                <input
                  className="input-dark"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  placeholder="e.g. Computer Science"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Semester
                  </label>
                  <input
                    className="input-dark"
                    type="number"
                    min="1"
                    max="14"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    placeholder="e.g. 4"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    GPA Range
                  </label>
                  <select
                    className="input-dark"
                    value={gpaRange}
                    onChange={(e) => setGpaRange(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="< 2.5">{"< 2.5"}</option>
                    <option value="2.5 - 3.0">2.5 - 3.0</option>
                    <option value="3.0 - 3.5">3.0 - 3.5</option>
                    <option value="3.5 - 4.0">3.5 - 4.0</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Interests (comma-separated)
                </label>
                <input
                  className="input-dark"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g. AI, Web Dev, Data Science"
                />
              </div>

              {/* Dynamic capability buffer creation sub-form layout */}
              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Skills
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    className="input-dark flex-1"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="Skill name"
                    onKeyDown={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addSkill())
                    }
                  />
                  <select
                    className="input-dark !w-20"
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}/5
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={addSkill}
                    className="btn-ghost !py-1.5 !px-3 !text-xs"
                  >
                    Add
                  </button>
                </div>

                {/* Dynamic state buffer badge arrays featuring interactive deletion triggers */}
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <span
                        key={i}
                        className="badge group cursor-pointer"
                        onClick={() => removeSkill(i)}
                      >
                        {s.name} · {s.level}/5{" "}
                        <span className="ml-1 opacity-50 group-hover:opacity-100">
                          ✕
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {saveMsg && (
                <div
                  className={
                    saveMsg === "Profile saved!" ? "success-box" : "error-box"
                  }
                >
                  {saveMsg}
                </div>
              )}

              <button
                onClick={handleSave}
                disabled={saving}
                className="btn-accent w-full !rounded-xl !py-2.5"
              >
                {saving ? "Saving..." : "Save Profile"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

//src/app/roadmap/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function RoadmapPage() {
  const [profile, setProfile] = useState<any>(null);
  const [notes, setNotes] = useState("");
  const [roadmap, setRoadmap] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 1. Load the user's current profile/track data on mount
  useEffect(() => {
    fetch("/api/ai/generate-roadmap")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  // 2. Handle the POST request to generate the roadmap
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/ai/generate-roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes }),
      });
      const data = await res.json();
      setRoadmap(data);
    } catch (err) {
      console.error("Failed to generate roadmap", err);
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return <div>Loading Profile...</div>;

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Career Roadmap Generator</h1>

      {/* Profile Summary Section */}
      <section
        style={{
          marginBottom: "2rem",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <h2>Your Context</h2>
        <p>
          <strong>Name:</strong> {profile.name || "N/A"}
        </p>
        <p>
          <strong>Primary Track:</strong> {profile.primaryTrack}
        </p>
        <p>
          <strong>Secondary Track:</strong> {profile.secondaryTrack || "None"}
        </p>
        <p>
          <strong>Skills:</strong>{" "}
          {profile.skills.map((s: any) => s.name).join(", ")}
        </p>
      </section>

      {/* Input Form */}
      <form onSubmit={handleGenerate} style={{ marginBottom: "2rem" }}>
        <label
          htmlFor="notes"
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          Additional Notes (e.g., availability, specific goals):
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="I have 5 hours a week and want to learn Next.js..."
          style={{ width: "100%", height: "100px", marginBottom: "1rem" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating with Gemini..." : "Generate Roadmap"}
        </button>
      </form>

      <hr />

      {/* Results Section */}
      {roadmap && (
        <section style={{ marginTop: "2rem" }}>
          <h2>{roadmap.roadmapTitle}</h2>
          <p>
            <em>{roadmap.summary}</em>
          </p>
          <p>
            <strong>Timeline:</strong> {roadmap.estimatedTimeline}
          </p>

          <h3>Skills to Master:</h3>
          <ul>
            {roadmap.skillsToLearn.map((item: any, idx: number) => (
              <li key={idx} style={{ marginBottom: "1rem" }}>
                <strong>{item.skill}</strong> ({item.priority})
                <br />
                <small>{item.reason}</small>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: "0.8rem", color: "#666" }}>
            Generated in {roadmap.meta.totalMs}ms
          </p>
        </section>
      )}
    </main>
  );
}

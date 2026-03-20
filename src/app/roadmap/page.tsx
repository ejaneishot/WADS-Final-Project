"use client";

import { useState, useEffect } from "react";

export default function RoadmapPage() {
  // --- 1. State Initializations ---
  const [profile, setProfile] = useState<any>(null);
  const [notes, setNotes] = useState("");
  const [roadmap, setRoadmap] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  // --- 2. Data Loading Logic ---
  const loadData = async (id?: string) => {
    try {
      const url = id
        ? `/api/ai/generate-roadmap?id=${id}`
        : "/api/ai/generate-roadmap";

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      setProfile(data);
      setHistory(data.history || []);

      // If we fetched a specific roadmap or the latest one exists
      if (data.activeRoadmap) {
        setRoadmap(data.activeRoadmap);
        setNotes(data.activeRoadmap.userNotes || "");
      }
    } catch (err) {
      console.error("Error loading roadmap data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // --- 3. Generation Logic ---
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
      // Refresh history so the new one appears in the sidebar immediately
      loadData();
    } catch (err) {
      console.error("Failed to generate roadmap", err);
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return <div style={{ padding: "2rem" }}>Loading...</div>;

  return (
    <div
      style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}
    >
      {/* --- Sidebar: History --- */}
      <aside
        style={{
          width: "260px",
          borderRight: "1px solid #ddd",
          padding: "1.5rem",
          backgroundColor: "#fcfcfc",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Roadmap History</h3>
        <button
          onClick={() => {
            setRoadmap(null);
            setNotes("");
          }}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1.5rem",
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          + New Roadmap
        </button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {history.map((item) => (
            <li key={item.id} style={{ marginBottom: "0.75rem" }}>
              <button
                onClick={() => loadData(item.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px",
                  fontSize: "0.85rem",
                  backgroundColor:
                    roadmap?.id === item.id ? "#eef2ff" : "white",
                  border:
                    roadmap?.id === item.id
                      ? "1px solid #4f46e5"
                      : "1px solid #ddd",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                  {item.roadmapTitle}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#777" }}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* --- Main Content --- */}
      <main
        style={{
          flex: 1,
          padding: "2.5rem",
          maxWidth: "900px",
          overflowY: "auto",
        }}
      >
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ margin: 0 }}>Career Roadmap</h1>
          <p style={{ color: "#666" }}>
            AI-powered path for {profile.name || "User"}
          </p>
        </header>

        {/* Input Section */}
        <section style={{ marginBottom: "3rem" }}>
          <form onSubmit={handleGenerate}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              What's your focus today?
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., I want to focus on Next.js and backend security..."
              style={{
                width: "100%",
                height: "100px",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: "1rem",
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: loading ? "#ccc" : "#4f46e5",
                color: "white",
                cursor: "pointer",
              }}
            >
              {loading
                ? "Generating..."
                : roadmap
                  ? "Re-generate"
                  : "Generate Roadmap"}
            </button>
          </form>
        </section>

        {/* Results Area */}
        {roadmap ? (
          <div style={{ animation: "fadeIn 0.5s" }}>
            <h2
              style={{
                borderBottom: "2px solid #f0f0f0",
                paddingBottom: "10px",
              }}
            >
              {roadmap.roadmapTitle}
            </h2>
            <p style={{ lineHeight: "1.6", color: "#444" }}>
              {roadmap.summary}
            </p>

            <div style={{ marginTop: "2rem" }}>
              <h3>Steps to Mastery</h3>
              {roadmap.skillsToLearn.map((s: any, i: number) => (
                <div
                  key={i}
                  style={{
                    padding: "15px",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong style={{ fontSize: "1.1rem" }}>{s.skill}</strong>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        backgroundColor:
                          s.priority === "High" ? "#fee2e2" : "#f3f4f6",
                        color: s.priority === "High" ? "#991b1b" : "#374151",
                      }}
                    >
                      {s.priority}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    {s.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{ marginTop: "5rem", textAlign: "center", color: "#aaa" }}
          >
            Select a past roadmap from the sidebar or generate a new one.
          </div>
        )}
      </main>
    </div>
  );
}

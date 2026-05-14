// src/components/roadmap/AIGeneratorModal.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AIGeneratorModalProps {
  roadmapId: string;
}

export default function AIGeneratorModal({ roadmapId }: AIGeneratorModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [includeProfile, setIncludeProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/roadmaps/${roadmapId}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, includeProfile }),
      });

      if (res.ok) {
        setIsOpen(false);
        setTopic("");
        setIncludeProfile(false);
        router.refresh(); // Update the canvas with new AI nodes
      } else {
        alert("AI generation failed. Please try a different topic.");
      }
    } catch (err) {
      console.error("AI Generation Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn-ghost !py-2 !px-4 flex items-center gap-2"
      >
        <span>✨</span> Generate with AI
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]">
          <div
            className="p-6 rounded-xl shadow-2xl w-full max-w-md"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
            }}
          >
            <h2 className="text-xl font-bold mb-2">AI Roadmap Generator</h2>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Tell Gemini what you want to learn, and it will build a branching
              roadmap for you.
            </p>

            <form onSubmit={handleGenerate} className="flex flex-col gap-4">
              <input
                autoFocus
                type="text"
                placeholder="e.g., Master Next.js and Prisma"
                className="input-dark"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={loading}
                required
              />

              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border"
                  style={{ borderColor: "var(--border)" }}
                  checked={includeProfile}
                  onChange={(e) => setIncludeProfile(e.target.checked)}
                  disabled={loading}
                />
                <span style={{ color: "var(--text-secondary)" }}>
                  <span
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Include my profile
                  </span>
                  {" — "}
                  Send major, semester, GPA range, interests, skills (with levels),
                  and your latest assessment career matches to Gemini so the roadmap
                  fits your context.
                </span>
              </label>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn-ghost !py-2 !px-4"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-accent !py-2 !px-6"
                >
                  {loading ? "AI is thinking..." : "Generate Roadmap"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// src/components/AIGeneratorModal.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AIGeneratorModalProps {
  roadmapId: string;
}

export default function AIGeneratorModal({ roadmapId }: AIGeneratorModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("");
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
        body: JSON.stringify({ topic }),
      });

      if (res.ok) {
        setIsOpen(false);
        setTopic("");
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
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition font-medium shadow-sm flex items-center gap-2"
      >
        <span>✨</span> Generate with AI
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md border border-purple-100">
            <h2 className="text-xl font-bold mb-2 text-gray-900">
              AI Roadmap Generator
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Tell Gemini what you want to learn, and it will build a branching
              roadmap for you.
            </p>

            <form onSubmit={handleGenerate} className="flex flex-col gap-4">
              <input
                autoFocus
                type="text"
                placeholder="e.g., Master Next.js and Prisma"
                className="p-3 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-black"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={loading}
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 disabled:bg-purple-300 transition"
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

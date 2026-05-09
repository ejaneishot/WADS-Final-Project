// src/components/CreateRoadmapModal.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateRoadmapModal({ userId }: { userId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/roadmaps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, userId }),
      });

      if (res.ok) {
        setIsOpen(false);
        setTitle("");
        router.refresh(); // Refresh the server component data
      }
    } catch (error) {
      console.error("Failed to create roadmap", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="btn-accent">
        New Roadmap
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="p-6 rounded-xl shadow-xl w-full max-w-md"
        style={{
          background: "var(--surface-raised)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="text-xl font-bold mb-2">Create New Roadmap</h2>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          Start a new learning path with your own title.
        </p>
        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          <input
            autoFocus
            type="text"
            placeholder="Roadmap Title (e.g., Fullstack Developer)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-dark"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn-ghost !py-2 !px-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-accent !py-2 !px-4 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

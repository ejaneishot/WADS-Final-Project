// src/components/RoadmapCardActions.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface RoadmapCardActionsProps {
  id: string;
  currentTitle: string;
}

export default function RoadmapCardActions({
  id,
  currentTitle,
}: RoadmapCardActionsProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(currentTitle);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/roadmaps", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title: newTitle }),
      });
      if (res.ok) {
        setIsEditOpen(false);
        router.refresh();
      }
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation
    if (!confirm("Are you sure you want to delete this roadmap?")) return;

    setLoading(true);
    try {
      const res = await fetch("/api/roadmaps", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) router.refresh();
    } catch (err) {
      console.error("Delete failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsEditOpen(true);
        }}
        className="text-xs px-3 py-1 rounded border transition"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        Rename
      </button>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-xs px-3 py-1 rounded border transition disabled:opacity-50"
        style={{
          background: "rgba(239,68,68,0.08)",
          borderColor: "rgba(239,68,68,0.25)",
          color: "#fca5a5",
        }}
      >
        {loading ? "..." : "Delete"}
      </button>

      {/* Rename Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div
            className="p-6 rounded-xl shadow-xl w-80"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
            }}
          >
            <h3 className="font-bold mb-4">Rename Roadmap</h3>
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
              <input
                autoFocus
                className="input-dark"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="btn-ghost !py-1.5 !px-3 !text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-accent !py-1.5 !px-3 !text-xs"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

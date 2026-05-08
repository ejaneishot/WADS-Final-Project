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
        className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
      >
        Rename
      </button>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-xs bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded"
      >
        {loading ? "..." : "Delete"}
      </button>

      {/* Rename Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 className="font-bold mb-4 text-gray-900">Rename Roadmap</h3>
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
              <input
                autoFocus
                className="border p-2 rounded text-black"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
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

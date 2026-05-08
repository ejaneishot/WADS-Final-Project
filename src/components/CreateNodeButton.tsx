// src/components/CreateNodeButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CreateNodeButtonProps {
  roadmapId: string;
  isSelecting: boolean;
  setIsSelecting: (val: boolean) => void;
  selectedParentIds: string[];
  setSelectedParentIds: (ids: string[]) => void;
}

export default function CreateNodeButton({
  roadmapId,
  isSelecting,
  setIsSelecting,
  selectedParentIds,
  setSelectedParentIds,
}: CreateNodeButtonProps) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/roadmaps/${roadmapId}/nodes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          parentIds: selectedParentIds,
        }),
      });

      if (res.ok) {
        setIsSelecting(false);
        setSelectedParentIds([]);
        setTitle("");
        setDescription("");
        setShowForm(false);
        router.refresh();
      }
    } catch (err) {
      console.error("Branching error:", err);
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setIsSelecting(false);
    setSelectedParentIds([]);
    setShowForm(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-end gap-2">
      {!isSelecting ? (
        <button
          onClick={() => setIsSelecting(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium shadow-sm"
        >
          + Create Branch
        </button>
      ) : (
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 w-80 shadow-lg">
          {!showForm ? (
            <>
              <p className="text-sm font-bold text-blue-800 mb-4">
                Step 1: Click nodes to set as parents (
                {selectedParentIds.length} selected)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-semibold flex-1"
                >
                  Next: Details
                </button>
                <button
                  onClick={resetState}
                  className="bg-gray-400 text-white px-3 py-2 rounded text-sm font-semibold"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleCreate} className="flex flex-col gap-3">
              <p className="text-sm font-bold text-blue-800">
                Step 2: Node Details
              </p>
              <input
                autoFocus
                type="text"
                placeholder="Skill Title (e.g. Next.js)"
                className="p-2 text-sm border rounded border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="What will you learn? (Description)"
                className="p-2 text-sm border rounded border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[80px] text-black"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm font-semibold flex-1 disabled:bg-green-300"
                >
                  {loading ? "Creating..." : "Finish & Create"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 text-white px-3 py-2 rounded text-sm font-semibold"
                >
                  Back
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

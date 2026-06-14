// src/components/roadmap/CreateNodeButton.tsx
/**
 * Two-step branch creator: select parent node(s) on canvas, then submit title/description.
 * POST /api/roadmaps/[id]/nodes with parentIds for multi-parent edges.
 */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CreateNodeButtonProps {
  // Configures the strict TypeScript typing contract for props passed down from a parent visual interactive roadmap canvas. It handles lifting state up so that clicking standard nodes on the background canvas can stream selected ID keys straight back into this control instance.
  roadmapId: string;
  isSelecting: boolean;
  setIsSelecting: (val: boolean) => void;
  selectedParentIds: string[];
  setSelectedParentIds: (ids: string[]) => void;
}

export default function CreateNodeButton({
  // Declares and default-exports the functional button view, mapping hoisted canvas state hook actions out of its destruction layout structure.
  roadmapId,
  isSelecting,
  setIsSelecting,
  selectedParentIds,
  setSelectedParentIds,
}: CreateNodeButtonProps) {
  const [loading, setLoading] = useState(false); // Standard network transaction lock flag. Blocks duplicate form execution requests while an ongoing node injection is running.
  const [title, setTitle] = useState(""); // Local string value state containers to store string literals from the node details form input elements.
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false); // Step state index mapping variable. Tracks whether the current interface step is gathering parental node references on the background canvas (false) or gathering text identifiers (true).
  const router = useRouter(); // Configures Next.js Client Component navigation control instances to enable server-side frame data refreshes later.

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    // (3 lines above this) Handles form form data execution, instantly calling preventDefault to break standard browser layout transitions while checking for basic string presence validation constraints.

    setLoading(true); // Engages the local asset load locking state variable and safely drops execution parameters inside a structured exception try-catch block wrapper.
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
          className="btn-accent !py-2 !px-4"
        >
          + Create Branch
        </button>
      ) : (
        <div
          className="p-6 rounded-lg w-80 shadow-lg"
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--border)",
          }}
        >
          {!showForm ? (
            <>
              <p className="text-sm font-bold mb-4 text-emerald-300">
                Step 1: Click nodes to set as parents (
                {selectedParentIds.length} selected)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-accent !rounded-md !py-2 !px-3 !text-xs flex-1"
                >
                  Next: Details
                </button>
                <button
                  onClick={resetState}
                  className="btn-ghost !rounded-md !py-2 !px-3 !text-xs"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleCreate} className="flex flex-col gap-3">
              <p className="text-sm font-bold text-emerald-300">
                Step 2: Node Details
              </p>
              <input
                autoFocus
                type="text"
                placeholder="Skill Title (e.g. Next.js)"
                className="input-dark !text-xs"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="What will you learn? (Description)"
                className="input-dark !text-xs min-h-[80px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-accent !rounded-md !py-2 !px-3 !text-xs flex-1"
                >
                  {loading ? "Creating..." : "Finish & Create"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-ghost !rounded-md !py-2 !px-3 !text-xs"
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

// src/components/nodes/RoadmapNode.tsx
"use client";

import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { useRouter } from "next/navigation";

export default function RoadmapNode({ data, id }: { data: any; id: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(data.label);
  const [editDesc, setEditDesc] = useState(data.description || "");
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering selection mode
    if (!confirm("Delete this node and all its connections?")) return;

    try {
      const res = await fetch(`/api/nodes/${id}`, { method: "DELETE" });
      if (res.ok) router.refresh();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/nodes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, description: editDesc }),
      });
      if (res.ok) {
        setIsEditing(false);
        router.refresh();
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div
      className={`group px-4 py-2 rounded-md border transition-all shadow-md ${
        data.isSelected ? "border-emerald-400 bg-emerald-400/10" : ""
      }`}
      style={
        data.isSelected
          ? undefined
          : {
              background: "var(--surface-raised)",
              borderColor: "var(--border)",
            }
      }
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 !bg-emerald-400"
      />

      {isEditing ? (
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-2 min-w-[150px]"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="input-dark !text-xs !p-1.5"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
          />
          <textarea
            className="input-dark !text-[10px] !p-1.5"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <div className="flex gap-1">
            <button
              type="submit"
              className="text-[10px] px-2 py-1 rounded btn-accent !py-1 !px-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-[10px] px-2 py-1 rounded btn-ghost !py-1 !px-2"
            >
              X
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col relative">
          {/* Hover Actions */}
          <div className="absolute -top-8 -right-2 hidden group-hover:flex gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="p-1 rounded border text-[10px]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="p-1 rounded border text-[10px]"
              style={{
                background: "rgba(239,68,68,0.08)",
                borderColor: "rgba(239,68,68,0.25)",
                color: "#fca5a5",
              }}
            >
              Del
            </button>
          </div>

          <div className="font-bold text-sm text-[var(--text-primary)]">{data.label}</div>
          {data.description && (
            <div className="text-[10px] mt-1 max-w-[150px] line-clamp-2 italic text-[var(--text-secondary)]">
              {data.description}
            </div>
          )}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 !bg-emerald-400"
      />
    </div>
  );
}

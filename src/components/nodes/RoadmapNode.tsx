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
      className={`group px-4 py-2 shadow-md rounded-md bg-white border-2 transition-all ${data.isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 !bg-blue-400"
      />

      {isEditing ? (
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-2 min-w-[150px]"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="text-xs border p-1 rounded"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
          />
          <textarea
            className="text-[10px] border p-1 rounded"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <div className="flex gap-1">
            <button
              type="submit"
              className="text-[10px] bg-green-500 text-white px-2 py-1 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-[10px] bg-gray-300 px-2 py-1 rounded"
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
              className="bg-gray-100 p-1 rounded border hover:bg-gray-200 text-[10px]"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-50 p-1 rounded border border-red-200 hover:bg-red-100 text-red-600 text-[10px]"
            >
              Del
            </button>
          </div>

          <div className="font-bold text-sm text-gray-800">{data.label}</div>
          {data.description && (
            <div className="text-[10px] text-gray-500 mt-1 max-w-[150px] line-clamp-2 italic">
              {data.description}
            </div>
          )}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 !bg-blue-400"
      />
    </div>
  );
}

/**
 * Admin career track CRUD (admin only).
 * Lists careers from /api/admin/careers; inline create/edit/delete with milestone text parsing.
 * Assessment tag on each career links quiz scoring to track recommendations.
 */
"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Career = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  industry: string;
  description: string;
  icon: string | null;
  color: string | null;
  gradient: string | null;
  border: string | null;
  milestones: string[];
  createdAt: string;
  updatedAt: string;
};

const emptyCreate = {
  title: "",
  industry: "",
  description: "",
  tag: "",
  slug: "",
  milestonesText: "",
};

export default function AdminCareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const [savingId, setSavingId] = useState<string | null>(null);

  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState(emptyCreate);

  const [draft, setDraft] = useState<Career | null>(null);
  const [milestonesText, setMilestonesText] = useState("");

  /** Refetch table after create, update, or delete */
  const loadCareers = useCallback(async () => {
    setListError(null);
    const res = await fetch("/api/admin/careers");
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      setListError(data?.message ?? "Failed to load careers.");
      setCareers([]);
      return;
    }
    setCareers(data.careers ?? []);
  }, []);

  useEffect(() => {
    setLoading(true);
    loadCareers()
      .catch(() => setListError("Failed to load careers."))
      .finally(() => setLoading(false));
  }, [loadCareers]);

  const openEdit = (c: Career) => {
    setMessage(null);
    setDraft({ ...c });
    setMilestonesText(c.milestones.join("\n"));
  };

  const closeEdit = () => {
    setDraft(null);
    setMilestonesText("");
  };

  const saveEdit = async () => {
    if (!draft) return;
    setMessage(null);
    setSavingId(draft.id);
    const milestones = milestonesText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const res = await fetch(`/api/admin/careers/${draft.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: draft.slug.trim(),
        tag: draft.tag.trim(),
        title: draft.title.trim(),
        industry: draft.industry.trim(),
        description: draft.description.trim(),
        icon: draft.icon?.trim() || null,
        color: draft.color?.trim() || null,
        gradient: draft.gradient?.trim() || null,
        border: draft.border?.trim() || null,
        milestones,
      }),
    });
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Could not save career.",
      });
      return;
    }
    setMessage({ ok: true, text: "Career updated." });
    await loadCareers();
    closeEdit();
  };

  const removeCareer = async (c: Career) => {
    if (
      !window.confirm(
        `Delete “${c.title}”? User milestone progress for this track will be removed.`,
      )
    ) {
      return;
    }
    setMessage(null);
    setSavingId(c.id);
    const res = await fetch(`/api/admin/careers/${c.id}`, { method: "DELETE" });
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Could not delete career.",
      });
      return;
    }
    setMessage({ ok: true, text: "Career deleted." });
    if (draft?.id === c.id) closeEdit();
    await loadCareers();
  };

  const submitCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSavingId("__create__");
    const milestones = createForm.milestonesText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const payload: Record<string, unknown> = {
      title: createForm.title.trim(),
      industry: createForm.industry.trim(),
      description: createForm.description.trim(),
    };
    if (createForm.tag.trim()) payload.tag = createForm.tag.trim();
    if (createForm.slug.trim()) payload.slug = createForm.slug.trim();
    if (milestones.length) payload.milestones = milestones;

    const res = await fetch("/api/admin/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Could not create career.",
      });
      return;
    }
    setMessage({ ok: true, text: "Career created." });
    setCreateForm(emptyCreate);
    setShowCreate(false);
    await loadCareers();
  };

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-1/3 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-label">Admin Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold">Career tracks</h1>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Create, edit, or remove careers stored in the database. Assessment
              scoring uses each career’s <span className="mono">tag</span> (for
              example SWE, FE).
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-accent"
              onClick={() => {
                setMessage(null);
                setShowCreate((v) => !v);
              }}
            >
              {showCreate ? "Close form" : "New career"}
            </button>
          </div>
        </div>

        {message && (
          <div className={message.ok ? "success-box mb-5" : "error-box mb-5"}>
            {message.text}
          </div>
        )}

        {showCreate && (
          <form
            onSubmit={submitCreate}
            className="card-dark glow-ring mb-8 space-y-4"
          >
            <h2 className="text-lg font-semibold">New career</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Title *
                </label>
                <input
                  className="input-dark"
                  value={createForm.title}
                  onChange={(e) =>
                    setCreateForm((f) => ({ ...f, title: e.target.value }))
                  }
                  required
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Industry *
                </label>
                <input
                  className="input-dark"
                  value={createForm.industry}
                  onChange={(e) =>
                    setCreateForm((f) => ({ ...f, industry: e.target.value }))
                  }
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-xs mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Description *
              </label>
              <textarea
                className="input-dark !min-h-[88px]"
                value={createForm.description}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, description: e.target.value }))
                }
                required
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Assessment tag (optional)
                </label>
                <input
                  className="input-dark mono"
                  placeholder="e.g. SWE"
                  value={createForm.tag}
                  onChange={(e) =>
                    setCreateForm((f) => ({ ...f, tag: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Slug (optional)
                </label>
                <input
                  className="input-dark mono"
                  placeholder="auto from title if empty"
                  value={createForm.slug}
                  onChange={(e) =>
                    setCreateForm((f) => ({ ...f, slug: e.target.value }))
                  }
                />
              </div>
            </div>
            <div>
              <label
                className="block text-xs mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Milestones (one per line, optional)
              </label>
              <textarea
                className="input-dark !min-h-[100px] mono text-sm"
                value={createForm.milestonesText}
                onChange={(e) =>
                  setCreateForm((f) => ({
                    ...f,
                    milestonesText: e.target.value,
                  }))
                }
              />
            </div>
            <button
              type="submit"
              className="btn-accent"
              disabled={savingId === "__create__"}
            >
              {savingId === "__create__" ? "Creating…" : "Create career"}
            </button>
          </form>
        )}

        {loading ? (
          <p style={{ color: "var(--text-secondary)" }}>Loading careers…</p>
        ) : listError ? (
          <div className="error-box">{listError}</div>
        ) : (
          <div className="space-y-4">
            {draft && (
              <div
                className="card-dark glow-ring space-y-4"
                style={{ borderColor: "var(--border-accent)" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-lg font-semibold">Edit career</h2>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={closeEdit}
                  >
                    Cancel
                  </button>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label
                      className="block text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Title
                    </label>
                    <input
                      className="input-dark"
                      value={draft.title}
                      onChange={(e) =>
                        setDraft((d) =>
                          d ? { ...d, title: e.target.value } : d,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Industry
                    </label>
                    <input
                      className="input-dark"
                      value={draft.industry}
                      onChange={(e) =>
                        setDraft((d) =>
                          d ? { ...d, industry: e.target.value } : d,
                        )
                      }
                    />
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label
                      className="block text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Slug (URL)
                    </label>
                    <input
                      className="input-dark mono text-sm"
                      value={draft.slug}
                      onChange={(e) =>
                        setDraft((d) =>
                          d ? { ...d, slug: e.target.value } : d,
                        )
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Assessment tag
                    </label>
                    <input
                      className="input-dark mono text-sm"
                      value={draft.tag}
                      onChange={(e) =>
                        setDraft((d) => (d ? { ...d, tag: e.target.value } : d))
                      }
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Description
                  </label>
                  <textarea
                    className="input-dark !min-h-[100px]"
                    value={draft.description}
                    onChange={(e) =>
                      setDraft((d) =>
                        d ? { ...d, description: e.target.value } : d,
                      )
                    }
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {(
                    [
                      ["icon", "Icon (emoji)"],
                      ["color", "Tailwind color"],
                      ["gradient", "Tailwind gradient"],
                      ["border", "Border CSS"],
                    ] as const
                  ).map(([key, label]) => (
                    <div key={key}>
                      <label
                        className="block text-xs mb-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {label}
                      </label>
                      <input
                        className="input-dark text-sm"
                        value={draft[key] ?? ""}
                        onChange={(e) =>
                          setDraft((d) =>
                            d ? { ...d, [key]: e.target.value || null } : d,
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    className="block text-xs mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Milestones (one per line)
                  </label>
                  <textarea
                    className="input-dark !min-h-[120px] mono text-sm"
                    value={milestonesText}
                    onChange={(e) => setMilestonesText(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="btn-accent"
                    onClick={() => void saveEdit()}
                    disabled={savingId === draft.id}
                  >
                    {savingId === draft.id ? "Saving…" : "Save changes"}
                  </button>
                  <Link
                    href={`/careers/${draft.slug}`}
                    className="btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View public page
                  </Link>
                </div>
              </div>
            )}

            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr
                      className="border-b"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <th
                        className="p-3 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Title
                      </th>
                      <th
                        className="p-3 font-medium mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Tag
                      </th>
                      <th
                        className="p-3 font-medium mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Slug
                      </th>
                      <th
                        className="p-3 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Industry
                      </th>
                      <th
                        className="p-3 font-medium text-right"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {careers.map((c) => (
                      <tr
                        key={c.id}
                        className="border-b"
                        style={{
                          borderColor: "var(--border)",
                          background:
                            draft?.id === c.id
                              ? "var(--surface-overlay)"
                              : undefined,
                        }}
                      >
                        <td className="p-3 font-medium">{c.title}</td>
                        <td className="p-3 mono text-xs">{c.tag}</td>
                        <td
                          className="p-3 mono text-xs max-w-[180px] truncate"
                          title={c.slug}
                        >
                          {c.slug}
                        </td>
                        <td
                          className="p-3"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {c.industry}
                        </td>
                        <td className="p-3 text-right whitespace-nowrap">
                          <button
                            type="button"
                            className="btn-ghost !py-1 !px-2 !text-xs mr-1"
                            onClick={() => openEdit(c)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn-ghost !py-1 !px-2 !text-xs text-red-400 hover:text-red-300"
                            onClick={() => void removeCareer(c)}
                            disabled={savingId === c.id}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {careers.length === 0 && (
                <p
                  className="p-6 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  No careers yet. Add one with <strong>New career</strong> or
                  run the seed script.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

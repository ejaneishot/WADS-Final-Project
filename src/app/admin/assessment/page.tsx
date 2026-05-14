"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type ScoreItem = { tag: string; weight: number };

type Option = {
  id: string;
  label: string;
  value: string | null;
  order: number;
  scoring: unknown;
};

type Question = {
  id: string;
  prompt: string;
  helperText: string | null;
  type: string;
  order: number;
  isRequired: boolean;
  options: Option[];
};

type Section = {
  id: string;
  title: string;
  description: string | null;
  order: number;
  questions: Question[];
};

type EditorState = {
  sections: Section[];
  scoringTags: string[];
  loading: boolean;
  error: string | null;
};

function tagsFromScoring(scoring: unknown): string[] {
  if (!Array.isArray(scoring)) return [];
  const tags: string[] = [];
  for (const item of scoring) {
    const tag = (item as { tag?: unknown }).tag;
    if (typeof tag === "string" && tag.length > 0) tags.push(tag);
  }
  return tags;
}

function mergedScoringKeys(knownTags: string[], scoring: unknown): string[] {
  const set = new Set(knownTags);
  for (const t of tagsFromScoring(scoring)) set.add(t);
  return [...set].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
}

function toScoreMap(
  scoring: unknown,
  knownTags: string[],
): Record<string, number> {
  const keys = mergedScoringKeys(knownTags, scoring);
  const map = Object.fromEntries(keys.map((k) => [k, 0])) as Record<
    string,
    number
  >;
  if (!Array.isArray(scoring)) return map;
  for (const item of scoring) {
    const tag = (item as { tag?: string }).tag;
    const weight = (item as { weight?: number }).weight;
    if (tag && typeof weight === "number" && typeof map[tag] === "number") {
      map[tag] = weight;
    }
  }
  return map;
}

function toScoringArray(scoreMap: Record<string, number>): ScoreItem[] {
  return Object.entries(scoreMap)
    .filter(([, w]) => w > 0)
    .map(([tag, weight]) => ({ tag, weight }));
}

export default function AdminAssessmentEditorPage() {
  const [state, setState] = useState<EditorState>({
    sections: [],
    scoringTags: [],
    loading: true,
    error: null,
  });
  const [savingId, setSavingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(
    null,
  );

  const reloadAssessment = useCallback(async () => {
    const res = await fetch("/api/admin/assessment");
    if (!res.ok) return;
    const data = await res.json().catch(() => null);
    if (!data?.sections) return;
    setState((prev) => ({
      ...prev,
      sections: data.sections,
      scoringTags: data.scoringTags ?? prev.scoringTags,
    }));
  }, []);

  useEffect(() => {
    fetch("/api/admin/assessment")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load assessment editor data.");
        return res.json();
      })
      .then((data) =>
        setState({
          sections: data.sections,
          scoringTags: data.scoringTags ?? [],
          loading: false,
          error: null,
        }),
      )
      .catch((err: Error) =>
        setState({
          sections: [],
          scoringTags: [],
          loading: false,
          error: err.message,
        }),
      );
  }, []);

  const totalQuestions = useMemo(
    () =>
      state.sections.reduce(
        (sum, section) => sum + section.questions.length,
        0,
      ),
    [state.sections],
  );

  const updateQuestionField = (
    questionId: string,
    updater: (question: Question) => Question,
  ) => {
    setState((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => ({
        ...section,
        questions: section.questions.map((question) =>
          question.id === questionId ? updater(question) : question,
        ),
      })),
    }));
  };

  const updateOptionField = (
    optionId: string,
    updater: (option: Option) => Option,
  ) => {
    setState((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => ({
        ...section,
        questions: section.questions.map((question) => ({
          ...question,
          options: question.options.map((option) =>
            option.id === optionId ? updater(option) : option,
          ),
        })),
      })),
    }));
  };

  const saveQuestion = async (question: Question) => {
    setMessage(null);
    setSavingId(question.id);

    const res = await fetch(`/api/admin/assessment/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: question.prompt,
        helperText: question.helperText,
        isRequired: question.isRequired,
      }),
    });

    const body = await res.json().catch(() => null);
    setSavingId(null);
    setMessage({
      ok: res.ok,
      text: res.ok
        ? "Question updated."
        : (body?.message ?? "Failed to update question."),
    });
  };

  const saveOption = async (option: Option) => {
    setMessage(null);
    setSavingId(option.id);

    const scoreMap = toScoreMap(option.scoring, state.scoringTags);
    const res = await fetch(`/api/admin/assessment/options/${option.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        label: option.label,
        value: option.value,
        scoring: toScoringArray(scoreMap),
      }),
    });

    const body = await res.json().catch(() => null);
    setSavingId(null);
    setMessage({
      ok: res.ok,
      text: res.ok
        ? "Option updated."
        : (body?.message ?? "Failed to update option."),
    });
  };

  const addQuestionToSection = async (sectionId: string) => {
    setMessage(null);
    setSavingId(`new-q-${sectionId}`);
    const res = await fetch("/api/admin/assessment/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sectionId,
        prompt: "New question — edit the prompt and click Save question.",
        isRequired: true,
      }),
    });
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Failed to add question.",
      });
      return;
    }
    setMessage({ ok: true, text: "Question added." });
    await reloadAssessment();
  };

  const deleteQuestion = async (question: Question) => {
    if (
      !window.confirm(
        "Delete this question and all of its choices? Past user answers that reference it will be removed.",
      )
    ) {
      return;
    }
    setMessage(null);
    setSavingId(question.id);
    const res = await fetch(`/api/admin/assessment/questions/${question.id}`, {
      method: "DELETE",
    });
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Failed to delete question.",
      });
      return;
    }
    setMessage({ ok: true, text: "Question deleted." });
    await reloadAssessment();
  };

  const addOptionToQuestion = async (questionId: string) => {
    setMessage(null);
    setSavingId(`new-o-${questionId}`);
    const res = await fetch(
      `/api/admin/assessment/questions/${questionId}/options`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: "New choice — edit label and scoring, then save.",
          value: null,
          scoring: [],
        }),
      },
    );
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Failed to add choice.",
      });
      return;
    }
    setMessage({ ok: true, text: "Choice added." });
    await reloadAssessment();
  };

  const deleteOption = async (option: Option) => {
    if (
      !window.confirm(
        "Delete this choice? Past user answers that selected it will be removed.",
      )
    ) {
      return;
    }
    setMessage(null);
    setSavingId(option.id);
    const res = await fetch(`/api/admin/assessment/options/${option.id}`, {
      method: "DELETE",
    });
    const body = await res.json().catch(() => null);
    setSavingId(null);
    if (!res.ok) {
      setMessage({
        ok: false,
        text: body?.message ?? "Failed to delete choice.",
      });
      return;
    }
    setMessage({ ok: true, text: "Choice deleted." });
    await reloadAssessment();
  };

  if (state.loading) {
    return (
      <div className="container-page py-12">
        <p style={{ color: "var(--text-secondary)" }}>
          Loading assessment editor...
        </p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="container-page py-12">
        <div className="error-box">{state.error}</div>
      </div>
    );
  }

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="section-label">Admin Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold">Assessment Editor</h1>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Add or remove questions and choices, edit prompts, and set scoring
              weights. Weights use each career’s <strong>assessment tag</strong>{" "}
              (<span className="mono">Career.tag</span>, e.g.{" "}
              <span className="mono">SWE</span>,{" "}
              <span className="mono">FE</span>) — the same codes stored on
              career rows in the database.
            </p>
          </div>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>
              Sections
            </p>
            <p className="mt-1 text-xl font-semibold">
              {state.sections.length}
            </p>
          </div>
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>
              Questions
            </p>
            <p className="mt-1 text-xl font-semibold">{totalQuestions}</p>
          </div>
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>
              Career tags
            </p>
            <p className="mt-1 text-xl font-semibold">
              {state.scoringTags.length}
            </p>
          </div>
        </div>

        {message && (
          <div className={message.ok ? "success-box mb-4" : "error-box mb-4"}>
            {message.text}
          </div>
        )}

        <div className="space-y-5">
          {state.sections.map((section) => (
            <div
              key={section.id}
              className="card-dark glow-ring"
              style={{ overflow: "hidden" }}
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold">
                  {section.order}. {section.title}
                </h2>
                {section.description && (
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {section.description}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {section.questions.map((question) => (
                  <div
                    key={question.id}
                    className="rounded-xl p-4"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold">
                        Q{question.order} ({question.type})
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => void addOptionToQuestion(question.id)}
                          disabled={savingId === `new-o-${question.id}`}
                          className="btn-ghost !py-1.5 !px-3 !text-xs"
                        >
                          Add choice
                        </button>
                        <button
                          type="button"
                          onClick={() => void deleteQuestion(question)}
                          disabled={savingId === question.id}
                          className="btn-ghost !py-1.5 !px-3 !text-xs text-red-400 hover:text-red-300"
                        >
                          Delete question
                        </button>
                        <button
                          type="button"
                          onClick={() => saveQuestion(question)}
                          disabled={savingId === question.id}
                          className="btn-ghost !py-1.5 !px-3 !text-xs"
                        >
                          {savingId === question.id
                            ? "Saving..."
                            : "Save question"}
                        </button>
                      </div>
                    </div>

                    <label
                      className="block text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Prompt
                    </label>
                    <textarea
                      className="input-dark !min-h-[80px] mb-2"
                      value={question.prompt}
                      onChange={(e) =>
                        updateQuestionField(question.id, (q) => ({
                          ...q,
                          prompt: e.target.value,
                        }))
                      }
                    />

                    <label
                      className="block text-xs mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Helper text
                    </label>
                    <input
                      className="input-dark mb-2"
                      value={question.helperText ?? ""}
                      onChange={(e) =>
                        updateQuestionField(question.id, (q) => ({
                          ...q,
                          helperText: e.target.value || null,
                        }))
                      }
                    />

                    <label className="inline-flex items-center gap-2 text-xs mb-3">
                      <input
                        type="checkbox"
                        checked={question.isRequired}
                        onChange={(e) =>
                          updateQuestionField(question.id, (q) => ({
                            ...q,
                            isRequired: e.target.checked,
                          }))
                        }
                      />
                      Required
                    </label>

                    <div className="space-y-3">
                      {question.options.map((option) => {
                        const scoreMap = toScoreMap(
                          option.scoring,
                          state.scoringTags,
                        );
                        return (
                          <div
                            key={option.id}
                            className="rounded-lg p-3"
                            style={{
                              background: "var(--surface-overlay)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                              <p
                                className="text-xs mono"
                                style={{ color: "var(--text-muted)" }}
                              >
                                Option {option.order}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  onClick={() => void deleteOption(option)}
                                  disabled={savingId === option.id}
                                  className="btn-ghost !py-1 !px-2.5 !text-xs text-red-400 hover:text-red-300"
                                >
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  onClick={() => saveOption(option)}
                                  disabled={savingId === option.id}
                                  className="btn-ghost !py-1 !px-2.5 !text-xs"
                                >
                                  {savingId === option.id
                                    ? "Saving..."
                                    : "Save choice"}
                                </button>
                              </div>
                            </div>

                            <div className="grid gap-2 md:grid-cols-2">
                              <input
                                className="input-dark"
                                value={option.label}
                                onChange={(e) =>
                                  updateOptionField(option.id, (o) => ({
                                    ...o,
                                    label: e.target.value,
                                  }))
                                }
                                placeholder="Option label"
                              />
                              <input
                                className="input-dark"
                                value={option.value ?? ""}
                                onChange={(e) =>
                                  updateOptionField(option.id, (o) => ({
                                    ...o,
                                    value: e.target.value || null,
                                  }))
                                }
                                placeholder="Option value"
                              />
                            </div>

                            {(() => {
                              const mergedKeys = mergedScoringKeys(
                                state.scoringTags,
                                option.scoring,
                              );

                              const renderWeightInputs = (tags: string[]) =>
                                tags.map((tag) => {
                                  const orphan =
                                    !state.scoringTags.includes(tag);
                                  return (
                                    <label key={tag} className="text-xs">
                                      <span
                                        className="block mb-1 mono truncate"
                                        style={{ color: "var(--text-muted)" }}
                                        title={
                                          orphan
                                            ? "Not in current Career.tag list (refresh after DB changes)"
                                            : tag
                                        }
                                      >
                                        {tag}
                                        {orphan ? " *" : ""}
                                      </span>
                                      <input
                                        className="input-dark"
                                        type="number"
                                        min={0}
                                        max={10}
                                        value={scoreMap[tag] ?? 0}
                                        onChange={(e) => {
                                          const nextValue = Number(
                                            e.target.value || 0,
                                          );
                                          const nextMap = {
                                            ...scoreMap,
                                            [tag]: Number.isNaN(nextValue)
                                              ? 0
                                              : nextValue,
                                          };
                                          updateOptionField(option.id, (o) => ({
                                            ...o,
                                            scoring: toScoringArray(nextMap),
                                          }));
                                        }}
                                      />
                                    </label>
                                  );
                                });

                              return (
                                <div className="mt-3 space-y-3">
                                  <div>
                                    <p
                                      className="text-[11px] uppercase tracking-wide mb-2"
                                      style={{ color: "var(--text-muted)" }}
                                    >
                                      Weights by career tag
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                                      {renderWeightInputs(mergedKeys)}
                                    </div>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => void addQuestionToSection(section.id)}
                    disabled={savingId === `new-q-${section.id}`}
                    className="btn-ghost !py-2 !px-4 !text-sm"
                  >
                    + Add question to this section
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

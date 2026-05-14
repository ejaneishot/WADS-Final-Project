"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const ROLE_TAGS = ["SWE", "FE", "BE", "AI", "SEC", "GAME", "QA", "PM"] as const;
type RoleTag = (typeof ROLE_TAGS)[number];

type ScoreItem = { tag: RoleTag; weight: number };

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
  loading: boolean;
  error: string | null;
};

function toScoreMap(scoring: unknown): Record<RoleTag, number> {
  const init = Object.fromEntries(ROLE_TAGS.map((tag) => [tag, 0])) as Record<
    RoleTag,
    number
  >;
  if (!Array.isArray(scoring)) return init;

  for (const item of scoring) {
    const tag = (item as { tag?: string }).tag;
    const weight = (item as { weight?: number }).weight;
    if (tag && ROLE_TAGS.includes(tag as RoleTag) && typeof weight === "number") {
      init[tag as RoleTag] = weight;
    }
  }
  return init;
}

function toScoringArray(scoreMap: Record<RoleTag, number>): ScoreItem[] {
  return ROLE_TAGS.filter((tag) => scoreMap[tag] > 0).map((tag) => ({
    tag,
    weight: scoreMap[tag],
  }));
}

export default function AdminAssessmentEditorPage() {
  const [state, setState] = useState<EditorState>({
    sections: [],
    loading: true,
    error: null,
  });
  const [savingId, setSavingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/assessment")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load assessment editor data.");
        return res.json();
      })
      .then((data) => setState({ sections: data.sections, loading: false, error: null }))
      .catch((err: Error) =>
        setState({ sections: [], loading: false, error: err.message }),
      );
  }, []);

  const totalQuestions = useMemo(
    () => state.sections.reduce((sum, section) => sum + section.questions.length, 0),
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

    const scoreMap = toScoreMap(option.scoring);
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
      text: res.ok ? "Option updated." : (body?.message ?? "Failed to update option."),
    });
  };

  if (state.loading) {
    return (
      <div className="container-page py-12">
        <p style={{ color: "var(--text-secondary)" }}>Loading assessment editor...</p>
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
            <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              Edit questions, options, and scoring weights used in the quiz.
            </p>
          </div>
          <Link href="/admin" className="btn-ghost">
            Back to Admin
          </Link>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl p-4" style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}>
            <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>Sections</p>
            <p className="mt-1 text-xl font-semibold">{state.sections.length}</p>
          </div>
          <div className="rounded-xl p-4" style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}>
            <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>Questions</p>
            <p className="mt-1 text-xl font-semibold">{totalQuestions}</p>
          </div>
          <div className="rounded-xl p-4" style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}>
            <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>Role Tags</p>
            <p className="mt-1 text-xl font-semibold">{ROLE_TAGS.length}</p>
          </div>
        </div>

        {message && <div className={message.ok ? "success-box mb-4" : "error-box mb-4"}>{message.text}</div>}

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
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                    {section.description}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {section.questions.map((question) => (
                  <div
                    key={question.id}
                    className="rounded-xl p-4"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-semibold">
                        Q{question.order} ({question.type})
                      </p>
                      <button
                        onClick={() => saveQuestion(question)}
                        disabled={savingId === question.id}
                        className="btn-ghost !py-1.5 !px-3 !text-xs"
                      >
                        {savingId === question.id ? "Saving..." : "Save Question"}
                      </button>
                    </div>

                    <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
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

                    <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
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
                        const scoreMap = toScoreMap(option.scoring);
                        return (
                          <div
                            key={option.id}
                            className="rounded-lg p-3"
                            style={{
                              background: "var(--surface-overlay)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            <div className="mb-2 flex items-center justify-between">
                              <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>
                                Option {option.order}
                              </p>
                              <button
                                onClick={() => saveOption(option)}
                                disabled={savingId === option.id}
                                className="btn-ghost !py-1 !px-2.5 !text-xs"
                              >
                                {savingId === option.id ? "Saving..." : "Save Option"}
                              </button>
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

                            <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                              {ROLE_TAGS.map((tag) => (
                                <label key={tag} className="text-xs">
                                  <span
                                    className="block mb-1 mono"
                                    style={{ color: "var(--text-muted)" }}
                                  >
                                    {tag}
                                  </span>
                                  <input
                                    className="input-dark"
                                    type="number"
                                    min={0}
                                    max={10}
                                    value={scoreMap[tag]}
                                    onChange={(e) => {
                                      const nextValue = Number(e.target.value || 0);
                                      const nextMap = {
                                        ...scoreMap,
                                        [tag]: Number.isNaN(nextValue) ? 0 : nextValue,
                                      };
                                      updateOptionField(option.id, (o) => ({
                                        ...o,
                                        scoring: toScoringArray(nextMap),
                                      }));
                                    }}
                                  />
                                </label>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

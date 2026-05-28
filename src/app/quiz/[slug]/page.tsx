"use client";
/**
 * Features:
 * - One question per view with full-screen split layout (instructions | editor)
 * - Must pass all test cases before advancing
 * - Progress persisted to localStorage per track
 * - Live test result feedback with per-case status
 */

import { useState, useEffect, useCallback, useRef, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TRACK_QUIZZES, type QuizQuestion, type TrackQuiz } from "@/lib/quiz-data";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type TestResult = {
  label: string;
  pass: boolean;
  actual: string;
  expected: string;
  error?: string;
};

type RunStatus = "idle" | "running" | "passed" | "failed";

// ─────────────────────────────────────────────────────────────────────────────
// Deep equality for test case checking
// ─────────────────────────────────────────────────────────────────────────────
function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

// ─────────────────────────────────────────────────────────────────────────────
// Code Runner — evaluates user code against test cases using Function constructor
// ─────────────────────────────────────────────────────────────────────────────
function runCode(code: string, question: QuizQuestion): TestResult[] {
  const results: TestResult[] = [];

  for (const tc of question.testCases) {
    try {
      // Wrap user code + extract function reference
      // eslint-disable-next-line no-new-func
      const fn = new Function(`
        ${code}
        return ${question.functionName};
      `)();

      let actual: unknown;

      // Handle special "type check" test cases
      if (tc.expected === "function") {
        actual = typeof fn === "function" ? "function" : typeof fn;
        results.push({
          label: tc.label,
          pass: actual === "function",
          actual: String(actual),
          expected: "function",
        });
        continue;
      }

      if (tc.expected === "class") {
        // Detect a real class by checking if its toString starts with "class"
        const isClass = typeof fn === "function" && /^class[\s{]/.test(fn.toString());
        actual = isClass ? "class" : typeof fn;
        results.push({
          label: tc.label,
          pass: isClass,
          actual: String(actual),
          expected: "class",
        });
        continue;
      }

      if (tc.expected === "object") {
        const result = typeof fn === "function" ? fn(...(tc.args as unknown[])) : fn;
        actual = result !== null && typeof result === "object" ? "object" : typeof result;
        results.push({
          label: tc.label,
          pass: actual === "object",
          actual: String(actual),
          expected: "object",
        });
        continue;
      }

      if (tc.expected === "async") {
        actual = typeof fn === "function" && fn.constructor.name === "AsyncFunction" ? "async" : "sync";
        results.push({
          label: tc.label,
          pass: actual === "async",
          actual: String(actual),
          expected: "async",
        });
        continue;
      }

      // Normal test: call the function with args and compare result
      if (typeof fn === "function") {
        actual = fn(...(tc.args as unknown[]));
      } else {
        actual = fn;
      }

      // For generateOTP — check length instead of exact value
      if (tc.label.includes("has length")) {
        const pass = typeof actual === "string" && actual.length === tc.expected;
        results.push({
          label: tc.label,
          pass,
          actual: String(typeof actual === "string" ? actual.length : actual),
          expected: String(tc.expected),
        });
        continue;
      }

      // For shuffle — check length preserved
      if (tc.label.includes("preserves length")) {
        const pass = Array.isArray(actual) && actual.length === (tc.expected as number);
        results.push({
          label: tc.label,
          pass,
          actual: String(Array.isArray(actual) ? actual.length : actual),
          expected: String(tc.expected),
        });
        continue;
      }

      // For randInt — check the returned value is in expected range (deterministic for equal bounds)
      const pass = deepEqual(actual, tc.expected);

      results.push({
        label: tc.label,
        pass,
        actual: JSON.stringify(actual),
        expected: JSON.stringify(tc.expected),
      });
    } catch (err: unknown) {
      results.push({
        label: tc.label,
        pass: false,
        actual: "ERROR",
        expected: JSON.stringify(tc.expected),
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return results;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  const pct = (current / total) * 100;
  return (
    <div className="w-full h-1.5 rounded-full" style={{ background: "var(--surface-overlay)" }}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

function TestResultRow({ result }: { result: TestResult }) {
  return (
    <div
      className="flex items-start gap-3 p-3 rounded-lg text-sm"
      style={{
        background: result.pass ? "rgba(110,231,183,0.06)" : "rgba(248,113,113,0.06)",
        border: `1px solid ${result.pass ? "rgba(110,231,183,0.15)" : "rgba(248,113,113,0.15)"}`,
      }}
    >
      <span className="flex-shrink-0 mt-0.5 text-base">{result.pass ? "✅" : "❌"}</span>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-xs mb-1" style={{ color: "var(--text-secondary)" }}>
          {result.label}
        </div>
        {result.error ? (
          <div className="font-mono text-xs" style={{ color: "#F87171" }}>
            Error: {result.error}
          </div>
        ) : !result.pass ? (
          <div className="font-mono text-xs space-y-0.5">
            <div><span style={{ color: "var(--text-muted)" }}>Expected:</span> <span style={{ color: "#6EE7B7" }}>{result.expected}</span></div>
            <div><span style={{ color: "var(--text-muted)" }}>Got:</span> <span style={{ color: "#F87171" }}>{result.actual}</span></div>
          </div>
        ) : (
          <div className="font-mono text-xs" style={{ color: "#6EE7B7" }}>→ {result.actual}</div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Quiz Experience
// ─────────────────────────────────────────────────────────────────────────────

function QuizExperience({ track }: { track: TrackQuiz }) {
  const storageKey = `quiz-progress-${track.slug}`;
  const [questionIdx, setQuestionIdx] = useState(0);
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [runStatus, setRunStatus] = useState<RunStatus>("idle");
  const [showHint, setShowHint] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [careerId, setCareerId] = useState<string | null>(null);
  const careerIdRef = useRef<string | null>(null);
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const question: QuizQuestion = track.questions[questionIdx];
  const totalQuestions = track.questions.length;
  const allDone = completedIds.size === totalQuestions;

  // Fetch careerId from /api/careers and merge DB milestone progress with localStorage
  useEffect(() => {
    fetch("/api/careers")
      .then((r) => r.json())
      .then((data) => {
        const career = (data.careers ?? []).find(
          (c: { slug: string }) => c.slug === track.slug
        );
        if (!career) return;
        setCareerId(career.id);
        careerIdRef.current = career.id;

        // DB progress: array of milestone indices already completed
        const dbCompleted: number[] = data.progress?.[career.id] ?? [];

        // Merge with localStorage so neither source overwrites the other
        let localCompleted = new Set<number>();
        let localIdx = 0;
        try {
          const saved = localStorage.getItem(storageKey);
          if (saved) {
            const parsed = JSON.parse(saved);
            localCompleted = new Set<number>(parsed.completedIds || []);
            localIdx = parsed.currentIdx || 0;
          }
        } catch { /* ignore */ }

        const merged = new Set<number>([...localCompleted, ...dbCompleted]);
        // Find the first question index that hasn't been completed yet
        let nextUnanswered = 0;
        for (let i = 0; i < totalQuestions; i++) {
          if (!merged.has(i)) { nextUnanswered = i; break; }
          nextUnanswered = totalQuestions - 1;
        }
        // Use the further of localIdx and nextUnanswered, so we never go backwards
        const resolvedIdx = Math.max(localIdx, nextUnanswered);

        setCompletedIds(merged);
        setQuestionIdx(resolvedIdx);

        // If localStorage has more progress than DB, sync it up immediately
        if (merged.size > dbCompleted.length && career.id) {
          fetch("/api/careers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              careerId: career.id,
              completedMilestones: Array.from(merged),
            }),
          }).catch(() => {});
        }
      })
      .catch(() => {
        // Not logged in or API error — fall back to localStorage only
        try {
          const saved = localStorage.getItem(storageKey);
          if (saved) {
            const data = JSON.parse(saved);
            setCompletedIds(new Set(data.completedIds || []));
            setQuestionIdx(data.currentIdx || 0);
          }
        } catch { /* ignore */ }
      });
  }, [storageKey, track.slug, totalQuestions]);

  // Fetch subscription plan independently on mount
  useEffect(() => {
    fetch("/api/subscription")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data?.plan === "pro") setIsPro(true); })
      .catch(() => {});
  }, []);

  // Reset code editor when question changes
  useEffect(() => {
    setCode(question.starterCode);
    setTestResults([]);
    setRunStatus("idle");
    setShowHint(false);
    if (textareaRef.current) {
      textareaRef.current.scrollTop = 0;
    }
  }, [question]);

  const saveProgress = useCallback((completed: Set<number>, idx: number) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        completedIds: Array.from(completed),
        currentIdx: idx,
      }));
    } catch {
      // ignore
    }
  }, [storageKey]);

  // POST completed milestone indices to /api/careers so the career page reflects quiz progress
  const syncToCareer = useCallback(async (completedQuestionIndices: Set<number>) => {
    const id = careerIdRef.current;
    if (!id) {
      console.warn("[Quiz] syncToCareer called but careerId is null — user may not be logged in");
      return;
    }
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          careerId: id,
          completedMilestones: Array.from(completedQuestionIndices),
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("[Quiz] POST /api/careers failed:", res.status, text);
      } else {
        console.log("[Quiz] Synced milestones:", Array.from(completedQuestionIndices));
      }
    } catch (e) {
      console.error("[Quiz] syncToCareer network error:", e);
    }
  }, []);

  const handleRunCode = () => {
    setRunStatus("running");
    setTestResults([]);

    // Small delay to show "running" state
    setTimeout(() => {
      const results = runCode(code, question);
      const allPass = results.every((r) => r.pass);
      setTestResults(results);
      setRunStatus(allPass ? "passed" : "failed");
    }, 300);
  };

  const handleNextQuestion = () => {
    if (runStatus !== "passed") return;

    const newCompleted = new Set(completedIds);
    newCompleted.add(questionIdx);

    // Save progress and sync regardless
    setCompletedIds(newCompleted);
    saveProgress(newCompleted, questionIdx);
    syncToCareer(newCompleted);

    const nextIdx = questionIdx + 1;

    if (questionIdx === totalQuestions - 1) {
      // Last question done
      setShowCelebration(true);
    } else if (nextIdx >= 5 && !isPro) {
      // Trying to go to question 6+ without Pro — show modal
      setShowProModal(true);
    } else {
      setQuestionIdx(nextIdx);
      saveProgress(newCompleted, nextIdx);
    }
  };

  const handleTabKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 2;
          textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  const handleResetProgress = () => {
    if (confirm("Reset all progress for this track?")) {
      localStorage.removeItem(storageKey);
      setCompletedIds(new Set());
      setQuestionIdx(0);
      setShowCelebration(false);
      // Also clear DB milestones for this career
      const id = careerIdRef.current;
      if (id) {
        fetch("/api/careers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ careerId: id, completedMilestones: [] }),
        }).catch(() => {});
      }
    }
  };

  // ── Celebration screen ──
  if (showCelebration || allDone) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--surface)" }}>
        <div className="text-center max-w-lg mx-auto px-6">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-3">Track Complete!</h1>
          <p className="text-lg mb-2" style={{ color: "var(--text-secondary)" }}>
            You&apos;ve mastered all 10 challenges in
          </p>
          <p className="text-2xl font-bold mb-8" style={{ color: track.color }}>
            {track.icon} {track.title}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/careers" className="btn-accent px-6 py-3 rounded-lg font-semibold text-sm">
              Explore Other Tracks
            </Link>
            <button
              onClick={handleResetProgress}
              className="px-6 py-3 rounded-lg font-semibold text-sm border"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              Reset & Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const passedCount = testResults.filter((r) => r.pass).length;

  return (
    <div className="flex flex-col h-screen" style={{ background: "var(--surface)" }}>
      {/* ── Top Bar ── */}
      <div
        className="flex items-center gap-4 px-4 py-3 border-b flex-shrink-0"
        style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
      >
        <Link
          href="/careers"
          className="flex items-center gap-1.5 text-sm transition-colors hover:text-white"
          style={{ color: "var(--text-muted)" }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Tracks
        </Link>

        <div className="h-4 w-px" style={{ background: "var(--border)" }} />

        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-base">{track.icon}</span>
          <span className="font-semibold text-sm truncate">{track.title}</span>
          <span
            className="px-2 py-0.5 rounded text-xs font-mono font-bold"
            style={{ background: "var(--surface-overlay)", color: track.color }}
          >
            {track.tag}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
            {completedIds.size}/{totalQuestions}
          </span>
          <div className="w-24">
            <ProgressBar current={completedIds.size} total={totalQuestions} color={track.color} />
          </div>
        </div>
      </div>

      {/* ── Main Split Layout ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── LEFT: Question Panel ── */}
        <div
          className="w-[42%] flex-shrink-0 border-r overflow-y-auto"
          style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
        >
          <div className="p-6">
            {/* Question header */}
            <div className="flex items-start justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: "var(--surface-overlay)", color: "var(--text-muted)" }}
                  >
                    Q{questionIdx + 1}
                  </span>
                  {completedIds.has(questionIdx) && (
                    <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(110,231,183,0.1)", color: "#6EE7B7" }}>
                      ✓ Solved
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold">{question.title}</h2>
              </div>
            </div>

            {/* Problem statement */}
            <div
              className="text-sm leading-relaxed mb-6 whitespace-pre-wrap font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              {question.prompt}
            </div>

            {/* Test Cases */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                Test Cases
              </h3>
              <div className="space-y-2">
                {question.testCases.slice(0, 4).map((tc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg font-mono text-xs"
                    style={{ background: "var(--surface-overlay)" }}
                  >
                    <span style={{ color: "var(--text-muted)" }}>Input: </span>
                    <span style={{ color: "#60A5FA" }}>{tc.label}</span>
                    <br />
                    <span style={{ color: "var(--text-muted)" }}>Expected: </span>
                    <span style={{ color: "#6EE7B7" }}>{JSON.stringify(tc.expected)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hint */}
            {question.hint && (
              <div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1.5 text-xs transition-colors mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <svg
                    width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    style={{ transform: showHint ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}
                  >
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {showHint ? "Hide hint" : "Show hint"}
                </button>
                {showHint && (
                  <div
                    className="p-3 rounded-lg text-xs leading-relaxed"
                    style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)", color: "#FCD34D" }}
                  >
                    💡 {question.hint}
                  </div>
                )}
              </div>
            )}

            {/* Question nav pills */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                Questions
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {track.questions.map((q, i) => {
                  const isDone = completedIds.has(i);
                  const isCurrent = i === questionIdx;
                  const isProLocked = i >= 5 && !isPro;
                  const maxCompleted = completedIds.size > 0 ? Math.max(...Array.from(completedIds)) : -1;
                  const isLocked = !isDone && i > maxCompleted + 1;
                  return (
                    <button
                      key={q.id}
                      disabled={isLocked || isProLocked}
                      onClick={() => {
                        if (isProLocked) { setShowProModal(true); return; }
                        if (!isLocked) setQuestionIdx(i);
                      }}
                      className="w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all"
                      style={{
                        background: isProLocked
                          ? "var(--surface-overlay)"
                          : isCurrent
                          ? track.color
                          : isDone
                          ? "rgba(110,231,183,0.15)"
                          : "var(--surface-overlay)",
                        color: isProLocked
                          ? "var(--text-muted)"
                          : isCurrent
                          ? "var(--surface)"
                          : isDone
                          ? "#6EE7B7"
                          : isLocked
                          ? "var(--text-muted)"
                          : "var(--text-secondary)",
                        opacity: isLocked || isProLocked ? 0.4 : 1,
                        cursor: isProLocked ? "pointer" : isLocked ? "not-allowed" : "pointer",
                      }}
                      title={isProLocked ? "Upgrade to Pro to unlock" : isLocked ? "Complete previous question first" : q.title}
                    >
                      {isProLocked ? "🔒" : isDone ? "✓" : i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Editor + Output ── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor toolbar */}
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b flex-shrink-0"
            style={{ borderColor: "var(--border)", background: "var(--surface-raised)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: "#F87171" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FBBF24" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#34D399" }} />
              <span className="ml-2 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                solution.js
              </span>
            </div>
            <button
              onClick={() => setCode(question.starterCode)}
              className="text-xs transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              Reset
            </button>
          </div>

          {/* Code editor */}
          <div className="flex-1 relative overflow-hidden">
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (runStatus !== "idle") {
                  setRunStatus("idle");
                  setTestResults([]);
                }
              }}
              onKeyDown={handleTabKey}
              spellCheck={false}
              className="w-full h-full resize-none font-mono text-sm outline-none p-5 leading-relaxed"
              style={{
                background: "var(--surface)",
                color: "var(--text-primary)",
                caretColor: track.color,
              }}
            />
          </div>

          {/* ── Bottom: Output Panel ── */}
          <div
            className="border-t flex-shrink-0"
            style={{ borderColor: "var(--border)", background: "var(--surface-raised)", maxHeight: "45%" }}
          >
            {/* Run button + status bar */}
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Output
                </span>
                {testResults.length > 0 && (
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {passedCount}/{testResults.length} passed
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunCode}
                  disabled={runStatus === "running"}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    background: "var(--surface-overlay)",
                    color: runStatus === "running" ? "var(--text-muted)" : "var(--text-primary)",
                    border: "1px solid var(--border)",
                    opacity: runStatus === "running" ? 0.7 : 1,
                  }}
                >
                  {runStatus === "running" ? (
                    <>
                      <span
                        className="w-3 h-3 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: "var(--text-muted)", borderTopColor: "transparent" }}
                      />
                      Running
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4 2l12 6-12 6V2z" />
                      </svg>
                      Run
                    </>
                  )}
                </button>

                {runStatus === "passed" && questionIdx < totalQuestions - 1 && (
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5"
                    style={{ background: "#6EE7B7", color: "var(--surface)" }}
                  >
                    Next
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}

                {runStatus === "passed" && questionIdx === totalQuestions - 1 && (
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                    style={{ background: "#6EE7B7", color: "var(--surface)" }}
                  >
                    🎉 Complete Track
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="p-4 overflow-y-auto" style={{ maxHeight: "calc(45vh - 50px)" }}>
              {runStatus === "idle" && (
                <p className="text-sm text-center py-4" style={{ color: "var(--text-muted)" }}>
                  Press Run to execute your code against the test cases
                </p>
              )}

              {runStatus === "running" && (
                <p className="text-sm text-center py-4" style={{ color: "var(--text-muted)" }}>
                  Running tests...
                </p>
              )}

              {testResults.length > 0 && (
                <div className="space-y-2">
                  {/* Summary banner */}
                  {runStatus === "passed" ? (
                    <div
                      className="flex items-center gap-2 p-3 rounded-lg mb-3"
                      style={{ background: "rgba(110,231,183,0.1)", border: "1px solid rgba(110,231,183,0.2)" }}
                    >
                      <span>🎯</span>
                      <span className="text-sm font-semibold" style={{ color: "#6EE7B7" }}>
                        All tests passed! {questionIdx < totalQuestions - 1 ? "Click Next to continue." : "Track complete!"}
                      </span>
                    </div>
                  ) : (
                    <div
                      className="flex items-center gap-2 p-3 rounded-lg mb-3"
                      style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)" }}
                    >
                      <span>⚠️</span>
                      <span className="text-sm font-semibold" style={{ color: "#F87171" }}>
                        {testResults.length - passedCount} test{testResults.length - passedCount !== 1 ? "s" : ""} failing — fix and run again
                      </span>
                    </div>
                  )}
                  {testResults.map((r, i) => (
                    <TestResultRow key={i} result={r} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ── Pro Modal ── */}
      {showProModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-8 text-center"
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border-accent)",
              boxShadow: "0 0 60px rgba(110,231,183,0.1)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setShowProModal(false)}
              className="absolute top-4 right-4 text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-muted)" }}
            >
              ✕
            </button>

            <div className="text-5xl mb-4">🔒</div>

            <p
              className="text-xs font-mono font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--accent)" }}
            >
              Pro Feature
            </p>

            <h2 className="text-2xl font-bold mb-3">
              Questions 6–10 require Pro
            </h2>

            <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              You&apos;ve completed the free tier for{" "}
              <span style={{ color: "var(--accent)" }}>{track.title}</span>.
              Upgrade to Pro to unlock all 10 challenges and sync your full milestone progress.
            </p>

            {/* Plan comparison */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-left">
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Free</p>
                {["Questions 1–5", "Basic milestones"].map(f => (
                  <p key={f} className="flex items-center gap-1.5 text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> {f}
                  </p>
                ))}
                {["Questions 6–10", "Full milestones"].map(f => (
                  <p key={f} className="flex items-center gap-1.5 text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>
                    <span>✕</span> {f}
                  </p>
                ))}
              </div>
              <div
                className="rounded-xl p-4"
                style={{
                  background: "var(--accent-glow)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>Pro</p>
                {["Questions 1–5", "Questions 6–10", "Full milestones", "All tracks"].map(f => (
                  <p key={f} className="flex items-center gap-1.5 text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> {f}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => router.push("/pricing")}
                className="btn-accent w-full text-sm py-3 rounded-xl text-center block"
              >
                Upgrade to Pro — $12/mo
              </button>
              <button
                onClick={() => setShowProModal(false)}
                className="w-full text-sm py-2.5 rounded-xl transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Track Selector — shown when slug doesn't match any track
// ─────────────────────────────────────────────────────────────────────────────
function TrackSelector() {
  return (
    <div className="container-page py-12">
      <div className="mb-10">
        <p className="section-label">Practice</p>
        <h1 className="mt-2 text-3xl font-bold">Coding Quizzes</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Select a specialization track to start your coding challenge.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TRACK_QUIZZES.map((track) => (
          <Link
            key={track.slug}
            href={`/quiz/${track.slug}`}
            className="card-dark glow-ring group p-5 block"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{track.icon}</span>
              <div>
                <div className="font-bold group-hover:text-gradient">{track.title}</div>
                <div className="text-xs font-mono" style={{ color: track.color }}>{track.tag}</div>
              </div>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              10 coding challenges · JavaScript
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page entry point — client component, use React.use() to unwrap params Promise
// ─────────────────────────────────────────────────────────────────────────────
export default function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const track = TRACK_QUIZZES.find((t) => t.slug === slug);
  if (!track) return <TrackSelector />;
  return <QuizExperience track={track} />;
}
"use client";
/**
 * Interactive roadmap lesson: short lesson content + a tiny challenge on the
 * left, a Monaco code editor with run/submit + console output on the right.
 * Code execution is proxied through /api/code/execute (Wandbox).
 */
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { RoadmapLesson } from "@/lib/roadmaps";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const MONACO_LANGUAGE: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  java: "java",
  csharp: "csharp",
  bash: "shell",
};

type RunStatus = "idle" | "running" | "passed" | "failed";

type ExecuteResult = {
  stdout: string;
  stderr: string;
  compileError: string;
};

export default function RoadmapGuide({
  lesson,
  topicTitle,
  topicIcon,
  topicHref,
  stepLabel,
  prevHref,
  prevText,
  nextHref,
  nextText,
}: {
  lesson: RoadmapLesson;
  topicTitle: string;
  topicIcon: string;
  topicHref: string;
  stepLabel: string;
  prevHref: string;
  prevText: string;
  nextHref: string;
  nextText: string;
}) {
  const challenge = lesson.challenge;
  const [code, setCode] = useState(challenge.starterCode);
  const [result, setResult] = useState<ExecuteResult | null>(null);
  const [status, setStatus] = useState<RunStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const run = async (isSubmit: boolean) => {
    setStatus("running");
    setError(null);

    try {
      const res = await fetch("/api/code/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: challenge.language, code }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Execution failed");
        setResult(null);
        setStatus("idle");
        return;
      }

      setResult(data);

      if (isSubmit) {
        const actual = (data.stdout || "").trim();
        const pass =
          actual === challenge.expectedOutput.trim() &&
          !data.stderr &&
          !data.compileError;
        setStatus(pass ? "passed" : "failed");
      } else {
        setStatus("idle");
      }
    } catch {
      setError("Couldn't reach the code execution service — try again.");
      setResult(null);
      setStatus("idle");
    }
  };

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-1/4 w-[320px] h-[320px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <header className="mb-6 max-w-3xl">
        <Link
          href={topicHref}
          title={`Back to ${topicTitle}`}
          className="section-label mb-2 inline-block transition-colors hover:text-white"
        >
          {topicIcon} {stepLabel}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{lesson.title}</h1>
      </header>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* ── Left: Lesson + Challenge ── */}
        <div
          className="rounded-2xl border overflow-hidden flex flex-col"
          style={{ borderColor: "var(--border)", background: "var(--surface-raised)", maxHeight: "75vh" }}
        >
          <div className="p-6 overflow-y-auto space-y-6">
            <section className="space-y-3">
              {lesson.body.map((p, j) => (
                <p key={j} className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {p}
                </p>
              ))}
              {lesson.list && lesson.list.length > 0 && (
                <ul
                  className="list-disc list-inside space-y-1.5 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {lesson.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
              {lesson.code && <pre className="code-block">{lesson.code.content}</pre>}
            </section>

            <section className="space-y-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                💻 Challenge
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {challenge.prompt}
              </p>
              <div
                className="p-3 rounded-lg font-mono text-xs"
                style={{ background: "var(--surface-overlay)" }}
              >
                <span style={{ color: "var(--text-muted)" }}>Expected output: </span>
                <span style={{ color: "#6EE7B7" }}>{challenge.expectedOutput}</span>
              </div>

              {challenge.hint && (
                <div>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {showHint ? "Hide hint" : "Show hint"}
                  </button>
                  {showHint && (
                    <div
                      className="mt-2 p-3 rounded-lg text-xs leading-relaxed"
                      style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)", color: "#FCD34D" }}
                    >
                      💡 {challenge.hint}
                    </div>
                  )}
                </div>
              )}
            </section>
          </div>
        </div>

        {/* ── Right: Editor + Console ── */}
        <div
          className="rounded-2xl border overflow-hidden flex flex-col"
          style={{ borderColor: "var(--border)", background: "var(--surface-raised)", height: "75vh" }}
        >
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b flex-shrink-0"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              {challenge.language}
            </span>
            <button
              onClick={() => {
                setCode(challenge.starterCode);
                setResult(null);
                setStatus("idle");
                setError(null);
              }}
              className="text-xs transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              Reset
            </button>
          </div>

          <div className="flex-1 min-h-0">
            <Editor
              height="100%"
              theme="vs-dark"
              language={MONACO_LANGUAGE[challenge.language] ?? "plaintext"}
              value={code}
              onChange={(value) => {
                setCode(value ?? "");
                if (status !== "idle") {
                  setStatus("idle");
                  setResult(null);
                }
              }}
              options={{
                fontSize: 13,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
              }}
            />
          </div>

          {/* Console */}
          <div
            className="border-t flex-shrink-0"
            style={{ borderColor: "var(--border)", maxHeight: "40%" }}
          >
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                Console
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => run(false)}
                  disabled={status === "running"}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    background: "var(--surface-overlay)",
                    color: status === "running" ? "var(--text-muted)" : "var(--text-primary)",
                    border: "1px solid var(--border)",
                    opacity: status === "running" ? 0.7 : 1,
                  }}
                >
                  {status === "running" ? "Running…" : "Run"}
                </button>
                <button
                  onClick={() => run(true)}
                  disabled={status === "running"}
                  className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    background: "#6EE7B7",
                    color: "var(--surface)",
                    opacity: status === "running" ? 0.7 : 1,
                  }}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto font-mono text-xs" style={{ maxHeight: "calc(40vh - 90px)" }}>
              {status === "idle" && !result && !error && (
                <p style={{ color: "var(--text-muted)" }}>
                  Press Run to execute your code, or Submit to check it against the expected output.
                </p>
              )}

              {status === "running" && <p style={{ color: "var(--text-muted)" }}>Running…</p>}

              {error && (
                <p style={{ color: "#F87171" }}>{error}</p>
              )}

              {result && (
                <div className="space-y-2">
                  {result.compileError && (
                    <pre className="whitespace-pre-wrap" style={{ color: "#F87171" }}>{result.compileError}</pre>
                  )}
                  {result.stdout && (
                    <pre className="whitespace-pre-wrap" style={{ color: "var(--text-primary)" }}>{result.stdout}</pre>
                  )}
                  {result.stderr && (
                    <pre className="whitespace-pre-wrap" style={{ color: "#F87171" }}>{result.stderr}</pre>
                  )}
                  {!result.stdout && !result.stderr && !result.compileError && (
                    <p style={{ color: "var(--text-muted)" }}>(no output)</p>
                  )}
                </div>
              )}

              {status === "passed" && (
                <div
                  className="mt-3 flex items-center gap-2 p-3 rounded-lg"
                  style={{ background: "rgba(110,231,183,0.1)", border: "1px solid rgba(110,231,183,0.2)" }}
                >
                  <span>🎯</span>
                  <span className="text-sm font-semibold" style={{ color: "#6EE7B7" }}>
                    Output matches — lesson complete!
                  </span>
                </div>
              )}

              {status === "failed" && (
                <div
                  className="mt-3 flex items-center gap-2 p-3 rounded-lg"
                  style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)" }}
                >
                  <span>⚠️</span>
                  <span className="text-sm font-semibold" style={{ color: "#F87171" }}>
                    Output doesn&apos;t match expected result yet — keep iterating.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="mt-8 max-w-3xl flex items-center justify-between gap-4">
        <Link href={prevHref} className="btn-ghost">
          {prevText}
        </Link>
        <Link href={nextHref} className="btn-accent">
          {nextText}
        </Link>
      </div>
    </div>
  );
}

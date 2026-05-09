// src/app/resume-optimizer/page.tsx
"use client";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface AnalysisResult {
  good: { phrase: string; reason: string }[];
  bad: { phrase: string; reason: string }[];
  suggestedSkills: string[];
  criticalImprovements: string;
}

export default function ResumeOptimizer() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Paste your resume or upload a PDF to start...</p>",
    immediatelyRender: false,
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        alert(
          typeof data.error === "string" ? data.error : "Failed to upload PDF",
        );
        return;
      }
      if (data.text) {
        const html = data.text
          .split("\n\n")
          .map((p: string) => `<p>${p}</p>`)
          .join("");
        editor.commands.setContent(html);
      }
    } catch {
      alert("Failed to upload PDF");
    } finally {
      setIsUploading(false);
    }
  };

  const analyzeContent = async () => {
    if (!editor) return;
    setIsAnalyzing(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: editor.getText() }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(typeof data.error === "string" ? data.error : "Analysis failed");
        return;
      }
      setAnalysis(data);
    } catch {
      alert("Analysis failed");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderHighlights = () => {
    if (!analysis || !editor) return null;
    let html = editor.getHTML();

    const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    [...(Array.isArray(analysis.good) ? analysis.good : [])].forEach((item) => {
      const regex = new RegExp(`(${escapeRe(item.phrase)})`, "gi");
      html = html.replace(
        regex,
        `<span title="${item.reason}" class="bg-emerald-400/20 text-emerald-200 border-b border-emerald-300 cursor-help">$1</span>`,
      );
    });

    [...(Array.isArray(analysis.bad) ? analysis.bad : [])].forEach((item) => {
      const regex = new RegExp(`(${escapeRe(item.phrase)})`, "gi");
      html = html.replace(
        regex,
        `<span title="${item.reason}" class="bg-red-500/20 text-red-200 border-b border-red-300 cursor-help">$1</span>`,
      );
    });

    return (
      <div className="space-y-6 animate-in fade-in duration-700">
        <h3 className="text-lg font-bold">Visual Feedback</h3>
        <div
          className="max-w-none p-6 rounded-xl text-sm leading-relaxed"
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-4 rounded-lg"
            style={{
              background: "rgba(52,211,153,0.08)",
              border: "1px solid var(--border-accent)",
            }}
          >
            <h4 className="font-bold text-emerald-200 mb-2">
              Skills to Add (ATS)
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(analysis.suggestedSkills)
                ? analysis.suggestedSkills
                : []
              ).map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded text-xs border"
                  style={{
                    background: "var(--surface-raised)",
                    borderColor: "var(--border-accent)",
                    color: "var(--accent)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-4 rounded-lg"
            style={{
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.25)",
            }}
          >
            <h4 className="font-bold text-amber-200 mb-2">
              Critical Improvements
            </h4>
            <p className="text-sm leading-relaxed text-amber-100">
              {analysis.criticalImprovements}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-page relative z-10 py-12 space-y-8">
      <div className="absolute top-0 left-0 w-[280px] h-[280px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-label">Tools</p>
          <h1 className="mt-2 text-3xl font-bold">Resume Optimizer</h1>
          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Upload your CV and get AI feedback tailored for ATS screening.
          </p>
        </div>
        <span className="badge">AI Analysis</span>
      </div>

      <div className="card-dark glow-ring">
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex-1 min-w-[220px]">
            <span className="sr-only">Upload PDF</span>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="block w-full text-sm cursor-pointer text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border file:border-[var(--border-accent)] file:text-xs file:font-semibold file:bg-emerald-400/10 file:text-emerald-300 hover:file:bg-emerald-400/20"
            />
          </label>

          <button
            onClick={analyzeContent}
            disabled={isAnalyzing || isUploading}
            className="btn-accent"
          >
            {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Editor (Editable)</h2>
            {isUploading && (
              <span className="text-xs animate-pulse text-emerald-300">
                Extracting text...
              </span>
            )}
          </div>
          <div className="card-dark min-h-[500px] focus-within:border-[var(--border-accent)] transition-colors">
            <EditorContent
              editor={editor}
              className="outline-none min-h-[440px] text-sm leading-relaxed text-[var(--text-primary)] [&_.ProseMirror]:min-h-[440px] [&_.ProseMirror]:outline-none [&_.ProseMirror]:whitespace-pre-wrap"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Analysis Results</h2>
          {analysis ? (
            renderHighlights()
          ) : (
            <div
              className="h-[500px] rounded-2xl flex flex-col items-center justify-center space-y-2"
              style={{
                background: "var(--surface-overlay)",
                border: "1px dashed var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <p>Upload a file and click "Run AI Analysis"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

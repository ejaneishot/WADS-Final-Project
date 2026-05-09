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

  // Step 1: Extract PDF Text to Editor
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
        // Formats plain text into simple HTML paragraphs for Tiptap
        const html = data.text
          .split("\n\n")
          .map((p: string) => `<p>${p}</p>`)
          .join("");
        editor.commands.setContent(html);
      }
    } catch (err) {
      alert("Failed to upload PDF");
    } finally {
      setIsUploading(false);
    }
  };

  // Step 2: Analyze Text from Editor
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
    } catch (err) {
      alert("Analysis failed");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderHighlights = () => {
    if (!analysis || !editor) return null;
    let html = editor.getHTML();

    const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    [...(Array.isArray(analysis.good) ? analysis.good : [])].forEach(
      (item) => {
        const regex = new RegExp(`(${escapeRe(item.phrase)})`, "gi");
        html = html.replace(
          regex,
          `<span title="${item.reason}" class="bg-green-100 text-green-800 border-b-2 border-green-400 cursor-help">$1</span>`,
        );
      },
    );

    [...(Array.isArray(analysis.bad) ? analysis.bad : [])].forEach((item) => {
      const regex = new RegExp(`(${escapeRe(item.phrase)})`, "gi");
      html = html.replace(
        regex,
        `<span title="${item.reason}" class="bg-red-100 text-red-800 border-b-2 border-red-400 cursor-help">$1</span>`,
      );
    });

    return (
      <div className="space-y-6 animate-in fade-in duration-700">
        <h3 className="text-lg font-bold">Visual Feedback</h3>
        <div
          className="prose max-w-none p-6 border rounded-xl bg-white shadow-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h4 className="font-bold text-emerald-900 mb-2">
              Skills to Add (ATS)
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(analysis.suggestedSkills)
                ? analysis.suggestedSkills
                : []
              ).map((s, i) => (
                <span
                  key={i}
                  className="bg-white px-2 py-1 rounded text-xs border border-emerald-300 text-emerald-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h4 className="font-bold text-amber-900 mb-2">
              Critical Improvements
            </h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              {analysis.criticalImprovements}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-wrap gap-4 items-center bg-slate-50 p-4 rounded-xl border">
        <label className="flex-1 min-w-[200px]">
          <span className="sr-only">Upload PDF</span>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </label>

        <button
          onClick={analyzeContent}
          disabled={isAnalyzing || isUploading}
          className="bg-blue-600 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-700 disabled:bg-slate-300 transition-all"
        >
          {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-slate-700">Editor (Editable)</h2>
            {isUploading && (
              <span className="text-xs text-blue-500 animate-pulse">
                Extracting text...
              </span>
            )}
          </div>
          <div className="border-2 border-slate-200 rounded-2xl p-6 bg-white min-h-[500px] focus-within:border-blue-400 transition-colors">
            <EditorContent editor={editor} className="outline-none" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-slate-700">Analysis Results</h2>
          {analysis ? (
            renderHighlights()
          ) : (
            <div className="h-[500px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 space-y-2">
              <p>Upload a file and click "Run AI Analysis"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

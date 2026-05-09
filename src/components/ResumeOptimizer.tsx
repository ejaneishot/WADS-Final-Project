// src/components/ResumeOptimizer.tsx
"use client";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Define the unified interface
interface AnalysisResult {
  good: { phrase: string; reason: string }[];
  bad: { phrase: string; reason: string }[];
  suggestedSkills: string[];
  criticalImprovements: string;
}

export default function ResumeOptimizer() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Upload a PDF to begin the analysis...</p>",
    immediatelyRender: false,
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // 1. Set the raw text into the editor
      editor.commands.setContent(
        `<p>${data.extractedText.replace(/\n/g, "<br/>")}</p>`,
      );

      // 2. Store the analysis metadata
      setAnalysis(data);
    } catch (err) {
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  const renderHighlightedView = () => {
    if (!analysis || !editor) return null;
    let html = editor.getHTML();

    // Apply "Good" highlights
    analysis.good.forEach((item) => {
      const regex = new RegExp(`(${item.phrase})`, "gi");
      html = html.replace(
        regex,
        `<span title="${item.reason}" class="bg-green-200 text-green-800 px-1 rounded cursor-help border-b border-green-400">$1</span>`,
      );
    });

    // Apply "Bad" highlights
    analysis.bad.forEach((item) => {
      const regex = new RegExp(`(${item.phrase})`, "gi");
      html = html.replace(
        regex,
        `<span title="${item.reason}" class="bg-red-200 text-red-800 px-1 rounded cursor-help border-b border-red-400">$1</span>`,
      );
    });

    return (
      <div className="space-y-6">
        <div
          className="prose max-w-none p-6 border rounded-xl bg-white shadow-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* The "Fixer" Additions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Skills to Add</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.suggestedSkills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white px-2 py-1 rounded text-xs border border-green-300 text-green-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <h3 className="font-bold text-amber-800 mb-2">Critical Feedback</h3>
            <p className="text-sm text-amber-900 leading-relaxed">
              {analysis.criticalImprovements}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Resume AI Optimizer</h1>
        <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          {loading ? "Analyzing..." : "Upload & Analyze PDF"}
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileUpload}
            disabled={loading}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Editor Content</h2>
          <div className="border rounded-lg p-4 bg-white min-h-[400px]">
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">AI Insights</h2>
          {analysis ? (
            renderHighlightedView()
          ) : (
            <div className="h-full border-2 border-dashed flex items-center justify-center text-gray-400 rounded-lg">
              Insights will appear after analysis
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

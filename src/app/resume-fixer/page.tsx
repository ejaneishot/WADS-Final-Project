//src/app/resume-fixer/page.tsx
"use client";

import React, { useState } from "react";

interface UpgradedCV {
  professionalSummary: string;
  workExperience: {
    company: string;
    role: string;
    duration: string;
    bulletPoints: string[];
  }[];
  suggestedSkillsToAdd: string[];
  criticalImprovements: string;
}

export default function ResumeFixerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UpgradedCV | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/ai/generate-cv", {
        method: "POST",
        body: formData, // NextJS/Fetch handles the boundary headers automatically
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Failed to upgrade CV");

      // In your handleUpload function
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || errorData.error || "Server Error");
      }
      setResult(json.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">AI Resume Upgrader</h1>

      {/* Upload Section */}
      <div className="bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-200 mb-8">
        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload your current CV (PDF or Text)
          </label>
          <input
            type="file"
            accept=".pdf,.txt"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            disabled={!file || loading}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-all"
          >
            {loading ? "Analyzing with Gemini..." : "Upgrade My CV"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <section className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 italic leading-relaxed">
              {result.professionalSummary}
            </p>
          </section>

          <section className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">
              Optimized Experience
            </h2>
            {result.workExperience.map((job, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg">{job.role}</h3>
                  <span className="text-sm text-gray-500">{job.duration}</span>
                </div>
                <p className="text-blue-600 font-medium text-sm">
                  {job.company}
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {job.bulletPoints.map((point, j) => (
                    <li key={j} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-green-800 mb-3">
                Skills to Add (ATS Match)
              </h2>
              <div className="flex flex-wrap gap-2">
                {result.suggestedSkillsToAdd.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white px-3 py-1 rounded-full text-sm border border-green-300 text-green-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-amber-800 mb-3">
                Critical Feedback
              </h2>
              <p className="text-sm text-amber-900 leading-relaxed">
                {result.criticalImprovements}
              </p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

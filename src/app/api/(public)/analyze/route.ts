/**
 * API route: POST /api/analyze
 *
 * Methods: POST
 * Auth: None (public). Requires server-side GEMINI_API_KEY.
 * Purpose: Send resume text to Gemini and return structured feedback (good/bad lines, skills, summary).
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

type PhraseItem = { phrase: string; reason: string };

function coercePhraseList(value: unknown): PhraseItem[] {
  if (value == null) return [];
  const mapEntry = (raw: unknown): PhraseItem | null => {
    if (!raw || typeof raw !== "object") return null;
    const o = raw as Record<string, unknown>;
    const phrase = typeof o.phrase === "string" ? o.phrase : "";
    const reason = typeof o.reason === "string" ? o.reason : "";
    if (!phrase.trim()) return null;
    return { phrase, reason: reason || "—" };
  };

  if (Array.isArray(value)) {
    return value.map(mapEntry).filter((x): x is PhraseItem => x !== null);
  }
  if (typeof value === "object") {
    return Object.values(value as Record<string, unknown>)
      .map(mapEntry)
      .filter((x): x is PhraseItem => x !== null);
  }
  return [];
}

function coerceStringList(value: unknown): string[] {
  if (value == null) return [];
  if (Array.isArray(value)) {
    return value
      .map((s) => (typeof s === "string" ? s.trim() : String(s)))
      .filter(Boolean);
  }
  if (typeof value === "object") {
    return Object.values(value as Record<string, unknown>)
      .map((s) => (typeof s === "string" ? s.trim() : String(s)))
      .filter(Boolean);
  }
  return [];
}

function parseModelJson(raw: string): unknown {
  const trimmed = raw.trim();
  const unfenced = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "");
  return JSON.parse(unfenced);
}

function normalizeAnalysis(raw: unknown) {
  const obj =
    raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};

  const critical =
    typeof obj.criticalImprovements === "string"
      ? obj.criticalImprovements
      : typeof obj.critical_improvements === "string"
        ? obj.critical_improvements
        : "";

  return {
    good: coercePhraseList(obj.good),
    bad: coercePhraseList(obj.bad),
    suggestedSkills: coerceStringList(
      obj.suggestedSkills ?? obj.suggested_skills,
    ),
    criticalImprovements: critical || "No summary returned.",
  };
}

export async function POST(req: Request) {
  // Auth / config: refuse when Gemini is not configured
  if (!process.env.GEMINI_API_KEY?.trim()) {
    return NextResponse.json(
      { error: "Server is not configured with GEMINI_API_KEY" },
      { status: 503 },
    );
  }

  try {
    // Validation: JSON body with non-empty `text`
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const text =
      typeof body === "object" &&
      body !== null &&
      "text" in body &&
      typeof (body as { text: unknown }).text === "string"
        ? (body as { text: string }).text
        : "";

    if (!text.trim()) {
      return NextResponse.json(
        { error: 'Missing or empty "text" field' },
        { status: 400 },
      );
    }

    // Business logic: prompt Gemini for JSON-shaped resume critique
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      generationConfig: { responseMimeType: "application/json" },
    });

    const prompt = `
      Analyze this resume text as an expert recruiter.

      Return ONLY a JSON object (no markdown) with exactly these keys:
      - "good": array of 3-5 objects, each { "phrase": string, "reason": string } for impactful lines (phrase must be an exact substring of the resume when possible).
      - "bad": array of 3-5 objects, same shape, for weak or risky lines.
      - "suggestedSkills": array of strings (missing technical / ATS keywords).
      - "criticalImprovements": one string paragraph of high-level feedback.

      Resume Text:
      ${text.slice(0, 48_000)}
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const rawText = response.text();
    if (!rawText?.trim()) {
      return NextResponse.json(
        { error: "Empty model response" },
        { status: 502 },
      );
    }

    // Error handling: malformed model JSON → 502
    let parsed: unknown;
    try {
      parsed = parseModelJson(rawText);
    } catch {
      return NextResponse.json(
        { error: "Model returned invalid JSON" },
        { status: 502 },
      );
    }

    const analysis = normalizeAnalysis(parsed);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Analyze route:", error);
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}

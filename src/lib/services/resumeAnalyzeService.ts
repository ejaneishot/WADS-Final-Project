/**
 * Resume text validation for POST /api/analyze (Gemini classifier).
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";

/** Returned when pasted/uploaded text is not resume or resume-draft content. */
export const RESUME_NOT_RESUME_ERROR =
  "Your input isn't a resume. Please paste or upload resume text, or a resume draft you're working on.";

const ResumeClassificationSchema = z.object({
  isResumeOrDraft: z.boolean(),
});

const CLASSIFIER_SAMPLE_MAX = 12_000;

/** Gemini classifier: accept resumes and incomplete resume drafts only. */
export async function isResumeOrDraft(
  apiKey: string,
  text: string,
): Promise<boolean | null> {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL ?? "gemini-3-flash-preview",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const sample = text.trim().slice(0, CLASSIFIER_SAMPLE_MAX);

  const prompt = `You classify user input for a resume feedback tool.

VALID (isResumeOrDraft: true): complete resumes or CVs, partial resume drafts, work-in-progress resume sections (experience, education, skills, summary), bullet lists clearly meant as resume content, or sparse drafts that still read as job-application material.

INVALID (isResumeOrDraft: false): unrelated text such as recipes, weather, news, general chat, essays or stories not for job applications, code-only snippets with no resume structure, random questions, dangerous or illegal content, shopping lists, or anything that is not resume or resume-draft material.

User input:
"""
${sample}
"""

Reply with JSON only: { "isResumeOrDraft": true } or { "isResumeOrDraft": false }`;

  try {
    const result = await model.generateContent(prompt);
    const parsed = ResumeClassificationSchema.safeParse(
      JSON.parse(result.response.text()),
    );
    if (!parsed.success) return null;
    return parsed.data.isResumeOrDraft;
  } catch (error) {
    console.error("AI_RESUME_CLASSIFY_ERROR:", error);
    return null;
  }
}

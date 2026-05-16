import { GoogleGenerativeAI, type GenerativeModel } from "@google/generative-ai";
import { env } from "@/lib/env";

export function getGeminiApiKey(): string | null {
  const key = env.GEMINI_API_KEY?.trim();
  return key || null;
}

export function getGeminiModel(options?: {
  jsonResponse?: boolean;
}): GenerativeModel | null {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return null;

  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({
    model: env.GEMINI_MODEL,
    ...(options?.jsonResponse
      ? { generationConfig: { responseMimeType: "application/json" } }
      : {}),
  });
}

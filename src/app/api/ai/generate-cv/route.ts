//src/app/api/ai/generate-cv/route.ts
import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/rbac";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // 1. Security Check (WADS style)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large (Max 5MB)" },
        { status: 400 },
      );
    }

    // 2. Convert File to Base64
    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString("base64");

    // 3. Setup Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview", // Flash is highly optimized for document processing
      generationConfig: { responseMimeType: "application/json" },
    });

    const prompt = `
      You are an expert technical recruiter. Analyze the attached resume.
      Provide a highly professional, upgraded version of this CV.
      Focus on Web App Development and Security (WADS) keywords.

      Return a JSON object:
      {
        "professionalSummary": "string",
        "workExperience": [
          { "company": "string", "role": "string", "duration": "string", "bulletPoints": ["string"] }
        ],
        "suggestedSkillsToAdd": ["string"],
        "criticalImprovements": "string"
      }
    `;

    // 4. Send the file bytes directly to Gemini
    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Data,
          mimeType: file.type || "application/pdf", // This tells Gemini it's a PDF
        },
      },
      prompt,
    ]);

    const rawText = result.response.text();

    // Safety check: remove potential markdown code blocks if Gemini adds them
    const cleanJson = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      const jsonOutput = JSON.parse(cleanJson);
      return NextResponse.json({ success: true, data: jsonOutput });
    } catch (parseError) {
      console.error("JSON Parse Error. Raw output was:", rawText);
      throw new Error("AI returned invalid JSON structure.");
    }
  } catch (err: any) {
    console.error("Gemini CV Error:", err);
    // Returning the error as JSON prevents the "Unexpected token <" HTML error on the frontend
    return NextResponse.json(
      { error: "AI Processing failed", detail: err.message },
      { status: 500 },
    );
  }
}

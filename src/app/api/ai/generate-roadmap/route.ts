import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// Reuse your mapping from the GET route
const ROLE_NAMES: Record<string, string> = {
  SWE: "Software Engineer",
  FE: "Frontend Engineer",
  BE: "Backend Engineer",
  AI: "AI/Machine Learning Engineer",
  SEC: "Cybersecurity Specialist",
  GAME: "Game Developer",
  QA: "Quality Assurance Engineer",
  PM: "Project Manager",
};

export async function GET() {
  const { user, error } = await requireAuth();
  if (error) return error;

  // 1. Fetch Profile Data
  const profile = await prisma.profile.findUnique({
    where: { userId: user!.sub },
    include: {
      skills: {
        include: { skill: true },
      },
    },
  });

  // 2. Fetch the latest Assessment Attempt
  const latestAssessment = await prisma.assessmentAttempt.findFirst({
    where: { userId: user!.sub },
    orderBy: { createdAt: "desc" },
    select: {
      primary: true,
      secondary: true,
    },
  });

  // 3. Fetch the most recently saved Roadmap
  const savedRoadmap = await prisma.careerRoadmap.findFirst({
    where: { userId: user!.sub },
    orderBy: { createdAt: "desc" },
  });

  // 4. Return merged object
  return NextResponse.json({
    // Profile Context
    name: profile?.name ?? null,
    major: profile?.major ?? null,
    semester: profile?.semester ?? null,
    gpaRange: profile?.gpaRange ?? null,
    interests: profile?.interests ?? [],
    skills: (profile?.skills ?? []).map((s) => ({
      name: s.skill.name,
      level: s.level,
    })),
    // Track Context (Converted to actual names)
    primaryTrack: latestAssessment?.primary
      ? ROLE_NAMES[latestAssessment.primary]
      : null,
    secondaryTrack: latestAssessment?.secondary
      ? ROLE_NAMES[latestAssessment.secondary]
      : null,
    // The existing roadmap (if any)
    savedRoadmap: savedRoadmap ?? null,
  });
}

export async function POST(req: Request) {
  const t0 = Date.now();

  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { notes } = (await req.json()) as { notes?: string };

    const profile = await prisma.profile.findUnique({
      where: { userId: user!.sub },
      include: { skills: { include: { skill: true } } },
    });

    const latestAssessment = await prisma.assessmentAttempt.findFirst({
      where: { userId: user!.sub },
      orderBy: { createdAt: "desc" },
    });

    const userData = {
      major: profile?.major,
      interests: profile?.interests,
      existingSkills: profile?.skills.map((s) => s.skill.name),
      primaryTrack: latestAssessment?.primary
        ? ROLE_NAMES[latestAssessment.primary]
        : "General Software",
      secondaryTrack: latestAssessment?.secondary
        ? ROLE_NAMES[latestAssessment.secondary]
        : null,
      userNotes: notes || "No additional notes provided.",
    };

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL ?? "gemini-3-flash-preview",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `
      You are a career coach. Based on the user's profile, generate a technical roadmap.
      User Profile: ${JSON.stringify(userData)}

      Return a JSON object with the following structure:
      {
        "roadmapTitle": "string",
        "summary": "string",
        "skillsToLearn": [
          { "skill": "string", "reason": "string", "priority": "High" | "Medium" | "Low" }
        ],
        "estimatedTimeline": "string"
      }
    `;

    const tModelStart = Date.now();
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonOutput = JSON.parse(response.text());
    const tModelEnd = Date.now();

    // Auto-save the roadmap to the database
    const savedRoadmap = await prisma.careerRoadmap.create({
      data: {
        userId: user!.sub,
        roadmapTitle: jsonOutput.roadmapTitle,
        summary: jsonOutput.summary,
        estimatedTimeline: jsonOutput.estimatedTimeline,
        skillsToLearn: jsonOutput.skillsToLearn,
        userNotes: notes,
      },
    });

    return NextResponse.json({
      ...jsonOutput,
      id: savedRoadmap.id,
      meta: {
        totalMs: Date.now() - t0,
        geminiMs: tModelEnd - tModelStart,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Roadmap generation failed", detail: err.message },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  const t0 = Date.now();

  try {
    // 1. Auth & Input
    const { user, error } = await requireAuth();
    if (error) return error;

    const { notes } = (await req.json()) as { notes?: string };

    // 2. Gather Context (Same logic as your GET)
    const profile = await prisma.profile.findUnique({
      where: { userId: user!.sub },
      include: { skills: { include: { skill: true } } },
    });

    const latestAssessment = await prisma.assessmentAttempt.findFirst({
      where: { userId: user!.sub },
      orderBy: { createdAt: "desc" },
    });

    const userData = {
      major: profile?.major,
      interests: profile?.interests,
      existingSkills: profile?.skills.map((s) => s.skill.name),
      primaryTrack: latestAssessment?.primary
        ? ROLE_NAMES[latestAssessment.primary]
        : "General Software",
      secondaryTrack: latestAssessment?.secondary
        ? ROLE_NAMES[latestAssessment.secondary]
        : null,
      userNotes: notes || "No additional notes provided.",
    };

    // 3. Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL ?? "gemini-3-flash-preview", // Use stable flash for speed/JSON
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // 4. Construct the Prompt
    const prompt = `
      You are a career coach. Based on the user's profile, generate a technical roadmap.
      User Profile: ${JSON.stringify(userData)}

      Return a JSON object with the following structure:
      {
        "roadmapTitle": "string",
        "summary": "string",
        "skillsToLearn": [
          { "skill": "string", "reason": "string", "priority": "High" | "Medium" | "Low" }
        ],
        "estimatedTimeline": "string"
      }
    `;

    const tModelStart = Date.now();
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonOutput = JSON.parse(response.text());
    const tModelEnd = Date.now();

    // ... inside your POST try block, after jsonOutput is parsed ...

    const savedRoadmap = await prisma.careerRoadmap.create({
      data: {
        userId: user!.sub,
        roadmapTitle: jsonOutput.roadmapTitle,
        summary: jsonOutput.summary,
        estimatedTimeline: jsonOutput.estimatedTimeline,
        skillsToLearn: jsonOutput.skillsToLearn,
        userNotes: notes,
      },
    });

    return NextResponse.json({
      ...jsonOutput,
      id: savedRoadmap.id, // Return the ID so the frontend knows it's saved
      meta: {
        totalMs: Date.now() - t0,
        geminiMs: tModelEnd - tModelStart,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Roadmap generation failed", detail: err.message },
      { status: 500 },
    );
  }
}

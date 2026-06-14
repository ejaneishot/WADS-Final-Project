/**
 * Learning roadmap content for each career track.
 * Each topic is broken into small lessons, and each lesson pairs a short
 * explanation with a tiny runnable coding challenge (see /api/code/execute).
 */
import { softwareEngineering } from "./roadmap-data/software-engineering";
import { backendEngineering } from "./roadmap-data/backend-engineering";
import { frontendEngineering } from "./roadmap-data/frontend-engineering";
import { artificialIntelligence } from "./roadmap-data/artificial-intelligence";
import { cybersecurity } from "./roadmap-data/cybersecurity";
import { gameDevelopment } from "./roadmap-data/game-development";

export type ChallengeLanguage = "python" | "javascript" | "java" | "csharp" | "bash";

export type RoadmapChallenge = {
  language: ChallengeLanguage;
  prompt: string;
  starterCode: string;
  /** Exact stdout expected (after trimming) for a correct solution. */
  expectedOutput: string;
  hint?: string;
};

export type RoadmapLesson = {
  slug: string;
  title: string;
  body: string[];
  code?: { lang: string; content: string };
  list?: string[];
  challenge: RoadmapChallenge;
};

export type RoadmapTopic = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  lessons: RoadmapLesson[];
};

export const ROADMAPS: Record<string, RoadmapTopic[]> = {
  "software-engineering": softwareEngineering,
  "backend-engineering": backendEngineering,
  "frontend-engineering": frontendEngineering,
  "artificial-intelligence": artificialIntelligence,
  cybersecurity: cybersecurity,
  "game-development": gameDevelopment,
};

export function getRoadmap(careerSlug: string): RoadmapTopic[] {
  return ROADMAPS[careerSlug] ?? [];
}

export function getRoadmapTopic(careerSlug: string, topicSlug: string): RoadmapTopic | undefined {
  return getRoadmap(careerSlug).find((t) => t.slug === topicSlug);
}

export function getRoadmapLesson(
  careerSlug: string,
  topicSlug: string,
  lessonSlug: string,
): { topic: RoadmapTopic; lesson: RoadmapLesson; lessonIndex: number } | undefined {
  const topic = getRoadmapTopic(careerSlug, topicSlug);
  if (!topic) return undefined;
  const lessonIndex = topic.lessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex === -1) return undefined;
  return { topic, lesson: topic.lessons[lessonIndex], lessonIndex };
}

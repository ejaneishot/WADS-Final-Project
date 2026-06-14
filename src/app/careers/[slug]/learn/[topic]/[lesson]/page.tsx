/**
 * Interactive lesson page: small lesson content + a tiny runnable challenge,
 * rendered via RoadmapGuide. Navigates linearly through every lesson in
 * every topic of the career's roadmap.
 */
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getRoadmap, getRoadmapLesson } from "@/lib/roadmaps";
import RoadmapGuide from "@/components/careers/RoadmapGuide";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; topic: string; lesson: string }>;
}) {
  const { slug, topic, lesson } = await params;
  const found = getRoadmapLesson(slug, topic, lesson);
  if (!found) return { title: "Lesson" };
  return {
    title: `${found.lesson.title} | ${found.topic.title}`,
  };
}

export default async function RoadmapLessonPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string; lesson: string }>;
}) {
  const { slug, topic, lesson } = await params;

  const career = await prisma.career.findUnique({
    where: { slug },
    select: { title: true },
  });
  if (!career) notFound();

  const roadmap = getRoadmap(slug);
  const topicIndex = roadmap.findIndex((t) => t.slug === topic);
  if (topicIndex === -1) notFound();

  const found = getRoadmapLesson(slug, topic, lesson);
  if (!found) notFound();

  const { lesson: item, lessonIndex } = found;
  const currentTopic = roadmap[topicIndex];

  // Previous lesson: previous in this topic, or last lesson of previous topic.
  let prevHref: string;
  let prevText: string;
  if (lessonIndex > 0) {
    const prevLesson = currentTopic.lessons[lessonIndex - 1];
    prevHref = `/careers/${slug}/learn/${topic}/${prevLesson.slug}`;
    prevText = `← ${prevLesson.title}`;
  } else if (topicIndex > 0) {
    const prevTopic = roadmap[topicIndex - 1];
    const prevLesson = prevTopic.lessons[prevTopic.lessons.length - 1];
    prevHref = `/careers/${slug}/learn/${prevTopic.slug}/${prevLesson.slug}`;
    prevText = `← ${prevTopic.title}`;
  } else {
    prevHref = `/careers/${slug}`;
    prevText = `← Back to ${career.title}`;
  }

  // Next lesson: next in this topic, or first lesson of next topic.
  let nextHref: string;
  let nextText: string;
  if (lessonIndex < currentTopic.lessons.length - 1) {
    const nextLesson = currentTopic.lessons[lessonIndex + 1];
    nextHref = `/careers/${slug}/learn/${topic}/${nextLesson.slug}`;
    nextText = `Next: ${nextLesson.title} →`;
  } else if (topicIndex < roadmap.length - 1) {
    const nextTopic = roadmap[topicIndex + 1];
    const nextLesson = nextTopic.lessons[0];
    nextHref = `/careers/${slug}/learn/${nextTopic.slug}/${nextLesson.slug}`;
    nextText = `Next: ${nextTopic.title} →`;
  } else {
    nextHref = `/careers/${slug}`;
    nextText = "Finish roadmap →";
  }

  return (
    <RoadmapGuide
      lesson={item}
      topicTitle={currentTopic.title}
      topicIcon={currentTopic.icon}
      topicHref={`/careers/${slug}/learn/${topic}`}
      stepLabel={`${currentTopic.title} (${lessonIndex + 1} / ${currentTopic.lessons.length})`}
      prevHref={prevHref}
      prevText={prevText}
      nextHref={nextHref}
      nextText={nextText}
    />
  );
}

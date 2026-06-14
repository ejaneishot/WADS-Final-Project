/**
 * Topic overview: lists the small lessons within a roadmap topic
 * (e.g. "Python Fundamentals" -> Print Hello World, Variables, Functions),
 * each linking to its own interactive lesson page.
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getRoadmap, getRoadmapTopic } from "@/lib/roadmaps";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = await params;
  const item = getRoadmapTopic(slug, topic);
  if (!item) return { title: "Guide" };
  return {
    title: `${item.title} | Learning Roadmap`,
    description: item.summary,
  };
}

export default async function RoadmapTopicPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = await params;

  const career = await prisma.career.findUnique({
    where: { slug },
    select: { title: true },
  });
  if (!career) notFound();

  const roadmap = getRoadmap(slug);
  const index = roadmap.findIndex((t) => t.slug === topic);
  if (index === -1) notFound();

  const item = roadmap[index];
  const prev = roadmap[index - 1];
  const next = roadmap[index + 1];

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-1/4 w-[320px] h-[320px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <nav className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        <Link href="/careers" className="transition-colors hover:text-white">
          Careers
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/careers/${slug}`} className="transition-colors hover:text-white">
          {career.title}
        </Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--text-secondary)" }}>{item.title}</span>
      </nav>

      <header className="mb-10 max-w-3xl">
        <p className="section-label mb-2">
          Module {index + 1} of {roadmap.length}
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.title}
        </h1>
        <p className="mt-3 text-base" style={{ color: "var(--text-secondary)" }}>
          {item.summary}
        </p>
      </header>

      <div className="max-w-3xl space-y-3">
        {item.lessons.map((lesson, i) => (
          <Link
            key={lesson.slug}
            href={`/careers/${slug}/learn/${topic}/${lesson.slug}`}
            className="card-dark glow-ring flex items-center gap-4 p-4"
          >
            <span
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono font-bold"
              style={{ background: "var(--surface-overlay)", color: "var(--accent)" }}
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold">{lesson.title}</div>
              <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "var(--text-secondary)" }}>
                {lesson.body[0]}
              </p>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: "var(--surface-overlay)", color: "var(--text-muted)" }}>
              {lesson.challenge.language}
            </span>
          </Link>
        ))}
      </div>

      {/* Prev / Next module navigation */}
      <div className="mt-10 max-w-3xl flex items-center justify-between gap-4">
        {prev ? (
          <Link href={`/careers/${slug}/learn/${prev.slug}`} className="btn-ghost">
            ← {prev.title}
          </Link>
        ) : (
          <Link href={`/careers/${slug}`} className="btn-ghost">
            ← Back to {career.title}
          </Link>
        )}
        {next ? (
          <Link href={`/careers/${slug}/learn/${next.slug}`} className="btn-accent">
            Next: {next.title} →
          </Link>
        ) : (
          <Link href={`/careers/${slug}`} className="btn-accent">
            Finish roadmap →
          </Link>
        )}
      </div>
    </div>
  );
}

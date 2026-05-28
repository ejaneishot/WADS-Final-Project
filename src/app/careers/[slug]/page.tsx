/**
 * Single career track detail (public page; milestone save requires login).
 * Server: loads career by slug, optional UserCareerProgress for auth user.
 * Job listings and interactive milestones are client components.
 *
 * ONLY CHANGE from original: added "Practice coding challenges →" link
 * next to the "← All tracks" link, pointing to /quiz/[slug].
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getAuth } from "@/lib/auth";
import { CareerMilestones } from "@/components/careers/CareerMilestones";
import { CareerJobListings } from "@/components/careers/CareerJobListings";

const DEFAULT_ICON = "💼";
const DEFAULT_COLOR = "from-slate-500 to-slate-700";
const DEFAULT_GRADIENT = "from-slate-500/20 to-slate-700/20";
const DEFAULT_BORDER = "rgba(148,163,184,0.25)";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = await prisma.career.findUnique({
    where: { slug },
    select: { title: true, description: true },
  });
  if (!career) return { title: "Career" };
  return {
    title: `${career.title} | Careers`,
    description:
      career.description.length > 160
        ? `${career.description.slice(0, 157)}…`
        : career.description,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const career = await prisma.career.findUnique({
    where: { slug },
  });
  if (!career) notFound();

  const auth = await getAuth();
  let initialCompleted: number[] = [];
  let isPro = false;
  if (auth?.sub) {
    /* Hydrate milestone checkboxes and plan for signed-in users only */
    const [row, user] = await Promise.all([
      prisma.userCareerProgress.findUnique({
        where: {
          userId_careerId: { userId: auth.sub, careerId: career.id },
        },
        select: { completedMilestones: true },
      }),
      prisma.user.findUnique({
        where: { id: auth.sub },
        select: { plan: true },
      }),
    ]);
    initialCompleted = row?.completedMilestones ?? [];
    isPro = user?.plan === "pro";
  }

  const icon = career.icon ?? DEFAULT_ICON;
  const color = career.color ?? DEFAULT_COLOR;
  const gradient = career.gradient ?? DEFAULT_GRADIENT;
  const border = career.border ?? DEFAULT_BORDER;

  const moreTracks = await prisma.career.findMany({
    where: { id: { not: career.id } },
    orderBy: { title: "asc" },
    take: 8,
    select: { slug: true, title: true, icon: true },
  });

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-1/4 w-[320px] h-[320px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <nav className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        <Link href="/careers" className="transition-colors hover:text-white">
          Careers
        </Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--text-secondary)" }}>{career.title}</span>
      </nav>

      <header
        className="relative overflow-hidden rounded-2xl p-8 md:p-10 mb-10 glow-ring"
        style={{
          background: `linear-gradient(135deg, var(--surface-raised), var(--surface-overlay))`,
          border: `1px solid ${border}`,
        }}
      >
        <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-5">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-3xl shadow-lg`}
            >
              {icon}
            </div>
            <div>
              <p className="section-label mb-1">Career track</p>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {career.title}
              </h1>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span className="badge">{career.industry}</span>
              </p>
            </div>
          </div>
          {/* ADDED: quiz link alongside the back link */}
          <div className="flex items-center gap-4 md:mt-2 flex-shrink-0">
            <Link
              href={`/quiz/${slug}`}
              className="text-sm font-semibold px-3 py-1.5 rounded-lg transition-all"
              style={{
                background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                color: "var(--surface)",
              }}
            >
              🧩 Practice challenges
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: "var(--accent)" }}
            >
              ← All tracks
            </Link>
          </div>
        </div>

        <p
          className="relative mt-8 max-w-3xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {career.description}
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Roadmap milestones</h2>
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: "var(--surface-raised)",
            border: "1px solid var(--border)",
          }}
        >
          <CareerMilestones
            careerId={career.id}
            milestones={career.milestones}
            initialCompleted={initialCompleted}
            isLoggedIn={Boolean(auth?.sub)}
            colorClass={color}
            slug={slug}
            isPro={isPro}
          />
        </div>
      </section>

      {auth?.sub ? <CareerJobListings slug={slug} /> : null}

      {moreTracks.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Explore other tracks</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreTracks.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/careers/${c.slug}`}
                  className="card-dark glow-ring flex items-center gap-3 p-4 transition-opacity hover:opacity-95"
                >
                  <span className="text-xl">{c.icon ?? DEFAULT_ICON}</span>
                  <span className="font-medium">{c.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

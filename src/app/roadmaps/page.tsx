// src/app/roadmaps/page.tsx
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import CreateRoadmapModal from "@/components/CreateRoadmapModal";
import RoadmapCardActions from "@/components/RoadmapCardActions";

export default async function RoadmapsDashboard() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/login");
  }

  // Fetch the user to get the ID for the modal
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true },
  });

  const userRoadmaps = await prisma.roadmap.findMany({
    where: { userId: user?.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <header className="flex flex-wrap justify-between items-end gap-4 mb-8">
        <div>
          <p className="section-label">Planner</p>
          <h1 className="mt-2 text-3xl font-bold">Your Roadmaps</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            Manage and continue your learning paths.
          </p>
        </div>
        {user && <CreateRoadmapModal userId={user.id} />}
      </header>

      <div className="grid gap-4">
        {userRoadmaps.length === 0 ? (
          <div
            className="rounded-xl p-6 text-center"
            style={{
              background: "var(--surface-overlay)",
              border: "1px dashed var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            No roadmaps found.
          </div>
        ) : (
          userRoadmaps.map((map) => (
            <div
              key={map.id}
              className="card-dark glow-ring transition flex justify-between items-center gap-4 group"
            >
              <Link href={`/roadmaps/${map.id}`} className="flex-1">
                <h2 className="font-semibold text-lg transition group-hover:text-emerald-300">
                  {map.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Created: {map.createdAt.toLocaleDateString()}
                </p>
              </Link>

              <RoadmapCardActions id={map.id} currentTitle={map.title} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

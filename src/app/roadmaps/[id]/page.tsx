// src/app/roadmaps/[id]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import RoadmapCanvas from "@/components/RoadmapCanvas";
import { getAuth } from "@/lib/auth";

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const auth = await getAuth();
  if (!auth?.sub) notFound();

  const { id } = await params;

  const roadmap = await prisma.roadmap.findFirst({
    where: { id, userId: auth.sub },
    include: {
      nodes: {
        include: {
          parents: true, // This gets the RoadmapEdge entries where this node is a child
          children: true, // Optional: gets edges where this node is a parent
        },
      },
    },
  });

  if (!roadmap) notFound();

  return (
    <div className="container-page relative z-10 py-12">
      <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <header className="mb-8">
        <p className="section-label">Roadmap</p>
        <h1 className="text-3xl font-bold">{roadmap.title}</h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          ID: {roadmap.id}
        </p>
      </header>

      <div
        className="rounded-xl min-h-[600px] relative overflow-hidden"
        style={{
          background: "var(--surface-raised)",
          border: "1px solid var(--border)",
        }}
      >
        <RoadmapCanvas roadmapId={id} initialNodes={roadmap.nodes} />
      </div>
    </div>
  );
}

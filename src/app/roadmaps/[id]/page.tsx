// src/app/roadmaps/[id]/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import RoadmapCanvas from "@/components/RoadmapCanvas";

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const roadmap = await prisma.roadmap.findUnique({
    where: { id },
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
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{roadmap.title}</h1>
        <p className="text-gray-500 text-sm">ID: {roadmap.id}</p>
      </header>

      {/* Let the Canvas handle whether it is empty or has flow nodes */}
      <div className="border rounded-lg min-h-[600px] bg-gray-50 relative">
        <RoadmapCanvas roadmapId={id} initialNodes={roadmap.nodes} />
      </div>
    </div>
  );
}

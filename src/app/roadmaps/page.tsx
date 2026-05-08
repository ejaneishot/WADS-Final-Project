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
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Roadmaps</h1>
        {user && <CreateRoadmapModal userId={user.id} />}
      </header>

      <div className="grid gap-4">
        {userRoadmaps.length === 0 ? (
          <p className="text-gray-500">No roadmaps found.</p>
        ) : (
          userRoadmaps.map((map) => (
            /* We use a div as the wrapper instead of the Link covering everything */
            <div
              key={map.id}
              className="border p-4 rounded hover:bg-gray-50 transition flex justify-between items-center group"
            >
              {/* This Link now only wraps the text content */}
              <Link href={`/roadmaps/${map.id}`} className="flex-1">
                <h2 className="font-semibold text-lg group-hover:text-blue-600 transition">
                  {map.title}
                </h2>
                <p className="text-sm text-gray-400">
                  Created: {map.createdAt.toLocaleDateString()}
                </p>
              </Link>

              {/* The actions are now completely outside the Link tag */}
              <RoadmapCardActions id={map.id} currentTitle={map.title} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

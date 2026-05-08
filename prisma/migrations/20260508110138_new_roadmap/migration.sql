/*
  Warnings:

  - You are about to drop the `CareerRoadmap` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCareerProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CareerRoadmap" DROP CONSTRAINT "CareerRoadmap_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCareerProgress" DROP CONSTRAINT "UserCareerProgress_careerId_fkey";

-- DropForeignKey
ALTER TABLE "UserCareerProgress" DROP CONSTRAINT "UserCareerProgress_userId_fkey";

-- DropTable
DROP TABLE "CareerRoadmap";

-- DropTable
DROP TABLE "UserCareerProgress";

-- CreateTable
CREATE TABLE "Roadmap" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Roadmap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoadmapNode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "roadmapId" TEXT NOT NULL,

    CONSTRAINT "RoadmapNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoadmapEdge" (
    "parentId" TEXT NOT NULL,
    "childId" TEXT NOT NULL,

    CONSTRAINT "RoadmapEdge_pkey" PRIMARY KEY ("parentId","childId")
);

-- AddForeignKey
ALTER TABLE "Roadmap" ADD CONSTRAINT "Roadmap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoadmapNode" ADD CONSTRAINT "RoadmapNode_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "Roadmap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoadmapEdge" ADD CONSTRAINT "RoadmapEdge_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "RoadmapNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoadmapEdge" ADD CONSTRAINT "RoadmapEdge_childId_fkey" FOREIGN KEY ("childId") REFERENCES "RoadmapNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

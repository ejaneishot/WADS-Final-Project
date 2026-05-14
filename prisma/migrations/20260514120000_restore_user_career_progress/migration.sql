-- Restore UserCareerProgress (dropped in 20260508110138_new_roadmap); required by /api/careers.

CREATE TABLE "UserCareerProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "careerId" TEXT NOT NULL,
    "completedMilestones" INTEGER[] NOT NULL DEFAULT ARRAY[]::INTEGER[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCareerProgress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "UserCareerProgress_userId_careerId_key" ON "UserCareerProgress"("userId", "careerId");

CREATE INDEX "UserCareerProgress_userId_idx" ON "UserCareerProgress"("userId");

CREATE INDEX "UserCareerProgress_careerId_idx" ON "UserCareerProgress"("careerId");

ALTER TABLE "UserCareerProgress" ADD CONSTRAINT "UserCareerProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "UserCareerProgress" ADD CONSTRAINT "UserCareerProgress_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

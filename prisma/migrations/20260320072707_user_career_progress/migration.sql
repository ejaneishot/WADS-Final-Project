-- CreateTable
CREATE TABLE "UserCareerProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "careerId" TEXT NOT NULL,
    "completedMilestones" INTEGER[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCareerProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserCareerProgress_userId_idx" ON "UserCareerProgress"("userId");

-- CreateIndex
CREATE INDEX "UserCareerProgress_careerId_idx" ON "UserCareerProgress"("careerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCareerProgress_userId_careerId_key" ON "UserCareerProgress"("userId", "careerId");

-- AddForeignKey
ALTER TABLE "UserCareerProgress" ADD CONSTRAINT "UserCareerProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCareerProgress" ADD CONSTRAINT "UserCareerProgress_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

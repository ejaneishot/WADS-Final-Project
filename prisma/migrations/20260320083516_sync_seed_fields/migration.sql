/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Career` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Career` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Career" ADD COLUMN     "border" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "gradient" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "milestones" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Career_slug_key" ON "Career"("slug");

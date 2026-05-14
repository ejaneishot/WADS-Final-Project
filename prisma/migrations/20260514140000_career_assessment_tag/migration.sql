-- AlterTable
ALTER TABLE "Career" ADD COLUMN "tag" TEXT;

-- Backfill from known career slugs (matches seed mapping)
UPDATE "Career" SET "tag" = CASE "slug"
  WHEN 'software-engineering' THEN 'SWE'
  WHEN 'frontend-engineering' THEN 'FE'
  WHEN 'backend-engineering' THEN 'BE'
  WHEN 'artificial-intelligence' THEN 'AI'
  WHEN 'cybersecurity' THEN 'SEC'
  WHEN 'game-development' THEN 'GAME'
  WHEN 'quality-assurance' THEN 'QA'
  WHEN 'product-management' THEN 'PM'
  ELSE NULL
END;

-- Any remaining rows: stable unique code from id (alphanumeric, max 12)
UPDATE "Career" SET "tag" = SUBSTRING(REPLACE("id", '-', ''), 1, 12) WHERE "tag" IS NULL;

ALTER TABLE "Career" ALTER COLUMN "tag" SET NOT NULL;

CREATE UNIQUE INDEX "Career_tag_key" ON "Career"("tag");

-- Remove multi-quiz catalog and keep a single built-in assessment structure.

-- Drop foreign keys to Quiz
ALTER TABLE "QuizSection" DROP CONSTRAINT IF EXISTS "QuizSection_quizId_fkey";
ALTER TABLE "QuizQuestion" DROP CONSTRAINT IF EXISTS "QuizQuestion_quizId_fkey";
ALTER TABLE "AssessmentAttempt" DROP CONSTRAINT IF EXISTS "AssessmentAttempt_quizId_fkey";

-- Drop old quiz-based indexes/uniques
DROP INDEX IF EXISTS "QuizSection_quizId_idx";
DROP INDEX IF EXISTS "QuizSection_quizId_order_key";
DROP INDEX IF EXISTS "QuizQuestion_quizId_idx";
DROP INDEX IF EXISTS "QuizQuestion_quizId_sectionId_order_key";
DROP INDEX IF EXISTS "AssessmentAttempt_quizId_idx";

-- Remove quizId columns now that there is only one assessment definition
ALTER TABLE "QuizSection" DROP COLUMN IF EXISTS "quizId";
ALTER TABLE "QuizQuestion" DROP COLUMN IF EXISTS "quizId";
ALTER TABLE "AssessmentAttempt" DROP COLUMN IF EXISTS "quizId";

-- Recreate ordering constraints without quiz catalog dimension
CREATE UNIQUE INDEX "QuizSection_order_key" ON "QuizSection"("order");
CREATE UNIQUE INDEX "QuizQuestion_sectionId_order_key" ON "QuizQuestion"("sectionId", "order");

-- Drop obsolete quiz catalog table
DROP TABLE IF EXISTS "Quiz";

import type { PrismaClient } from "@/generated/prisma/client";
import type { z } from "zod";
import { careerProgressSchema } from "@/lib/validators";

type ValidationFailure = {
  ok: false;
  status: number;
  message: string;
  issues?: z.ZodIssue[];
};

type ValidationSuccess = {
  ok: true;
  careerId: string;
  completedMilestones: number[];
};

export type CareerProgressValidationResult =
  | ValidationSuccess
  | ValidationFailure;

export async function validateCareerProgressUpdate(
  prisma: PrismaClient,
  body: unknown,
): Promise<CareerProgressValidationResult> {
  const parsed = careerProgressSchema.safeParse(body);
  if (!parsed.success) {
    return {
      ok: false,
      status: 400,
      message: "Invalid input",
      issues: parsed.error.issues,
    };
  }

  const { careerId, completedMilestones } = parsed.data;

  const career = await prisma.career.findUnique({
    where: { id: careerId },
    select: { id: true, milestones: true },
  });

  if (!career) {
    return { ok: false, status: 404, message: "Career not found" };
  }

  const maxIndex = career.milestones.length - 1;
  for (const index of completedMilestones) {
    if (index > maxIndex) {
      return {
        ok: false,
        status: 400,
        message: "Invalid milestone index for this career",
      };
    }
  }

  return { ok: true, careerId, completedMilestones };
}

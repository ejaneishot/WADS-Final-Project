import { z } from "zod";

/** Prisma cuid-style ids from the client (length + charset only). */
export const resourceIdSchema = z
  .string()
  .trim()
  .min(20)
  .max(40)
  .regex(/^[a-z0-9]+$/i, "Invalid id format");

export const registerSchema = z
  .object({
    email: z.string().trim().email().max(254),
    password: z
      .string()
      .min(8)
      .max(72)
      .regex(/[A-Za-z]/, "Password must include a letter")
      .regex(/[0-9]/, "Password must include a number"),
    role: z.enum(["student", "admin"]).optional(),
  })
  .strict();

export const loginSchema = z
  .object({
    email: z.string().trim().email().max(254),
    password: z.string().min(8).max(72),
  })
  .strict();

export const profileSchema = z
  .object({
    name: z.string().trim().max(100).nullable().optional(),
    major: z.string().trim().max(120).nullable().optional(),
    semester: z.number().int().min(1).max(14).nullable().optional(),
    gpaRange: z
      .string()
      .trim()
      .max(20)
      .regex(/^[\d.\-+ ]*$/, "Invalid GPA range format")
      .nullable()
      .optional(),
    interests: z
      .array(z.string().trim().min(1).max(40))
      .max(15)
      .default([]),
    skills: z
      .array(
        z.object({
          name: z.string().trim().min(1).max(60),
          level: z.number().int().min(1).max(5),
        }),
      )
      .max(40)
      .default([]),
  })
  .strict();

export const assessmentAnswerSchema = z
  .object({
    questionId: resourceIdSchema,
    optionId: resourceIdSchema,
  })
  .strict();

/** Rejects extra keys (e.g. client-sent scores or primary). */
export const assessmentSubmitSchema = z
  .object({
    answers: z.array(assessmentAnswerSchema).min(1).max(200),
  })
  .strict();

export const careerProgressSchema = z
  .object({
    careerId: resourceIdSchema,
    completedMilestones: z
      .array(z.number().int().min(0))
      .max(80)
      .refine(
        (indices) => new Set(indices).size === indices.length,
        "Duplicate milestone indices",
      ),
  })
  .strict();

export const resumeAnalyzeSchema = z
  .object({
    text: z.string().min(1).max(50_000),
  })
  .strict();

export const createCareerSchema = z.object({
  title: z.string().min(2).max(120),
  industry: z.string().min(2).max(80),
  description: z.string().min(10).max(500),
});

import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72),
  role: z.enum(["student", "admin"]).default("student")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72)
});

export const profileSchema = z.object({
  major: z.string().max(120).nullable().optional(),
  semester: z.number().int().min(1).max(14).nullable().optional(),
  gpaRange: z.string().max(20).nullable().optional(),
  interests: z.array(z.string().max(40)).max(15).default([]),
  skills: z.array(z.object({ name: z.string().max(60), level: z.number().int().min(1).max(5) })).max(40).default([])
});

export const createCareerSchema = z.object({
  title: z.string().min(2).max(120),
  industry: z.string().min(2).max(80),
  description: z.string().min(10).max(500)
});

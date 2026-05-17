import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.string().default("development"),
  APP_URL: z.string().default("http://localhost:3000"),
  JWT_SECRET: z.string().min(16),
  COOKIE_NAME: z.string().default("smartcareer_token"),
  COOKIE_SECURE: z.coerce.boolean().default(false),
  DATABASE_URL: z.string().min(10),
  AI_PROVIDER: z.string().default("stub"),
  AI_API_KEY: z.string().optional(),
  AI_MODEL: z.string().optional()
});

export const env = schema.parse({
  NODE_ENV: process.env.NODE_ENV,
  APP_URL: process.env.APP_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  COOKIE_NAME: process.env.COOKIE_NAME,
  COOKIE_SECURE: process.env.COOKIE_SECURE,
  DATABASE_URL: process.env.DATABASE_URL,
  AI_PROVIDER: process.env.AI_PROVIDER,
  AI_API_KEY: process.env.AI_API_KEY,
  AI_MODEL: process.env.AI_MODEL
});

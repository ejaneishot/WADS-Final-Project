import { z } from "zod";

function envBoolean(defaultValue = false) {
  return z.preprocess((val) => {
    if (val === undefined || val === null || val === "") return defaultValue;
    if (typeof val === "boolean") return val;
    const s = String(val).trim().toLowerCase();
    if (s === "true" || s === "1" || s === "yes") return true;
    if (s === "false" || s === "0" || s === "no") return false;
    return defaultValue;
  }, z.boolean());
}

function envInt(defaultValue: number, min: number, max: number) {
  return z.preprocess((val) => {
    if (val === undefined || val === null || val === "") return defaultValue;
    const n = Number(val);
    if (!Number.isFinite(n)) return defaultValue;
    return Math.min(max, Math.max(min, Math.trunc(n)));
  }, z.number().int());
}

const schema = z.object({
  NODE_ENV: z.string().default("development"),
  APP_URL: z.string().default("http://localhost:3000"),
  JWT_SECRET: z.string().min(16),
  COOKIE_NAME: z.string().default("smartcareer_token"),
  COOKIE_SECURE: envBoolean(false),
  DATABASE_URL: z.string().min(10),
  AI_PROVIDER: z.string().default("stub"),
  AI_API_KEY: z.string().optional(),
  AI_MODEL: z.string().optional(),
  GEMINI_API_KEY: z.string().optional(),
  GEMINI_MODEL: z.string().default("gemini-3-flash-preview"),
  JOB_BOARD_PROVIDER: z.enum(["stub", "remotive"]).default("stub"),
  JOB_BOARD_API_URL: z
    .string()
    .url()
    .default("https://remotive.com/api/remote-jobs"),
  JOB_BOARD_API_KEY: z.string().optional(),
  EXTERNAL_API_TIMEOUT_MS: envInt(15_000, 1_000, 60_000),
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
  AI_MODEL: process.env.AI_MODEL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  GEMINI_MODEL: process.env.GEMINI_MODEL,
  JOB_BOARD_PROVIDER: process.env.JOB_BOARD_PROVIDER,
  JOB_BOARD_API_URL: process.env.JOB_BOARD_API_URL,
  JOB_BOARD_API_KEY: process.env.JOB_BOARD_API_KEY,
  EXTERNAL_API_TIMEOUT_MS: process.env.EXTERNAL_API_TIMEOUT_MS,
});

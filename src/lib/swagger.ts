/**
 * OpenAPI 3 document assembly via swagger-jsdoc.
 * Merges JSDoc from API route files and src/lib/openapi for /api/docs UI.
 */
import "server-only";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import { env } from "@/lib/env";

const apiGlob = path.join(process.cwd(), "src/app/api/**/*.ts");
const extraGlob = path.join(process.cwd(), "src/lib/openapi/**/*.ts");

/** Build the full OpenAPI spec (cookie JWT auth, shared error schemas). */
export function getApiDocs() {
  return swaggerJSDoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "SmartCareer.Academy API",
        version: "1.0.0",
        description:
          "REST API for the WADS final project (Next.js, Prisma, PostgreSQL). Authenticated routes use the `smartcareer_token` HTTP-only cookie set by login endpoints.",
      },
      servers: [
        {
          url: env.APP_URL,
          description:
            env.NODE_ENV === "production" ? "Production" : "Development",
        },
      ],
      tags: [
        { name: "Auth", description: "Registration, login, and logout" },
        { name: "Users", description: "Current user and profile" },
        { name: "Careers", description: "Career tracks and milestone progress" },
        { name: "Assessment", description: "Tech career matcher quiz" },
        { name: "Roadmaps", description: "Learning roadmaps, nodes, and AI generation" },
        { name: "Resume", description: "PDF upload and AI resume analysis" },
        { name: "Admin", description: "Admin-only management endpoints" },
      ],
      components: {
        securitySchemes: {
          cookieAuth: {
            type: "apiKey",
            in: "cookie",
            name: env.COOKIE_NAME,
            description:
              "JWT stored in an HTTP-only cookie after POST /api/auth/login or /api/auth/register.",
          },
        },
        schemas: {
          ErrorMessage: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          ValidationError: {
            type: "object",
            properties: {
              message: { type: "string", example: "Invalid input" },
              issues: {
                type: "array",
                items: { type: "object" },
              },
            },
          },
          OkResponse: {
            type: "object",
            properties: {
              ok: { type: "boolean", example: true },
            },
          },
        },
        responses: {
          Unauthorized: {
            description: "Missing or invalid authentication",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorMessage" },
                example: { message: "Unauthorized" },
              },
            },
          },
          Forbidden: {
            description: "Authenticated but not allowed (e.g. admin only)",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorMessage" },
              },
            },
          },
        },
      },
    },
    apis: [apiGlob, extraGlob],
  });
}

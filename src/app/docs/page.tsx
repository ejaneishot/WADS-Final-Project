/**
 * Interactive API documentation page (public).
 * Server-rendered OpenAPI spec via getApiDocs(); Swagger UI client handles try-it-out
 * with credentials so session cookies apply to authenticated endpoints.
 */
import Link from "next/link";
import { createElement } from "react";
import { getApiDocs } from "@/lib/swagger";
import Swagger from "@/components/swagger-ui";

export const metadata = {
  title: "API Docs | SmartCareer.Academy",
  description: "Interactive OpenAPI documentation for SmartCareer.Academy",
};

const el = createElement;

export default function DocsPage() {
  const spec = getApiDocs();

  return el(
    "div",
    { className: "min-h-screen bg-[#0A0A0F] text-white" },
    el(
      "header",
      {
        className: "border-b px-4 py-4 sm:px-6",
        style: { borderColor: "var(--border)" },
      },
      el(
        "div",
        {
          className:
            "container-page flex flex-wrap items-center justify-between gap-3",
        },
        el(
          "div",
          { className: "flex flex-col gap-1" },
          el(
            "h1",
            { className: "text-xl font-semibold tracking-tight" },
            "API Documentation",
          ),
          el(
            "p",
            {
              className: "text-sm",
              style: { color: "var(--text-secondary)" },
            },
            "OpenAPI 3 — try endpoints from the browser (cookies sent when logged in).",
          ),
        ),
        el(
          "nav",
          { className: "flex items-center gap-3 text-sm" },
          el(Link, {
            href: "/api/docs",
            className:
              "rounded-lg px-3 py-2 transition-colors hover:bg-white/5",
            style: { color: "var(--text-secondary)" },
            target: "_blank",
            rel: "noreferrer",
            children: "Raw JSON",
          }),
          el(Link, {
            href: "/",
            className: "btn-ghost !py-1.5 !px-3 !text-xs",
            children: "Home",
          }),
        ),
      ),
    ),
    el("main", { className: "swagger-docs-shell" }, el(Swagger, { spec })),
  );
}

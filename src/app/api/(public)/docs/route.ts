/**
 * API route: GET /api/docs
 *
 * Methods: GET
 * Auth: None (public).
 * Purpose: Serve the generated OpenAPI/Swagger document for API exploration.
 */
import { NextResponse } from "next/server";
import { getApiDocs } from "@/lib/swagger";

export async function GET() {
  return NextResponse.json(getApiDocs());
}

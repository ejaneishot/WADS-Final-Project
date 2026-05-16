import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";
import {
  ExternalApiError,
  publicExternalApiMessage,
} from "@/lib/integrations/externalApiError";
import { fetchCareerJobListings } from "@/lib/integrations/jobBoard";

type Params = { params: Promise<{ slug: string }> };

/**
 * Proxies vetted job listings from an external board (server-side only).
 */
export async function GET(_req: Request, { params }: Params) {
  const { error } = await requireAuth();
  if (error) return error;

  const { slug } = await params;
  const career = await prisma.career.findUnique({
    where: { slug },
    select: { title: true },
  });

  if (!career) {
    return NextResponse.json({ message: "Career not found" }, { status: 404 });
  }

  try {
    const jobs = await fetchCareerJobListings(career.title, { limit: 8 });
    return NextResponse.json({ ok: true, jobs }, { status: 200 });
  } catch (e) {
    console.error("GET /api/careers/[slug]/jobs:", e);
    const status = e instanceof ExternalApiError ? e.status : 502;
    return NextResponse.json(
      { message: publicExternalApiMessage(e) },
      { status },
    );
  }
}

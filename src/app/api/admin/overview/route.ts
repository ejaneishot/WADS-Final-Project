import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/rbac";

export async function GET() {
  const { error } = await requireRole(["admin"]);
  if (error) return error;

  const [totalUsers, totalStudents, totalAdmins, totalCareers, totalAttempts] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: "student" } }),
      prisma.user.count({ where: { role: "admin" } }),
      prisma.career.count(),
      prisma.assessmentAttempt.count(),
    ]);

  return NextResponse.json(
    {
      ok: true,
      stats: {
        totalUsers,
        totalStudents,
        totalAdmins,
        totalCareers,
        totalAttempts,
      },
    },
    { status: 200 },
  );
}

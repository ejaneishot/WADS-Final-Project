import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { withAdmin } from "@/lib/rbac";

export const GET = withAdmin(async (_req, _auth, _ctx) => {
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
});

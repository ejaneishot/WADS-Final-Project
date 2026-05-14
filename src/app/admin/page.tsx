"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type AdminStats = {
  totalUsers: number;
  totalStudents: number;
  totalAdmins: number;
  totalCareers: number;
  totalAttempts: number;
};

export default function AdminPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [statsError, setStatsError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/overview")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to load admin overview");
        }
        return res.json();
      })
      .then((data) => setStats(data.stats))
      .catch((err: Error) => setStatsError(err.message));
  }, []);

  return (
    <div className="container-page relative z-10 py-12">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <p className="section-label">Admin Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold">Admin Panel</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            View platform stats and open the careers or assessment editors.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/admin/careers" className="btn-ghost">
              Manage careers
            </Link>
            <Link href="/admin/assessment" className="btn-ghost">
              Open Assessment Editor
            </Link>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {[
            { label: "Users", value: stats?.totalUsers },
            { label: "Students", value: stats?.totalStudents },
            { label: "Admins", value: stats?.totalAdmins },
            { label: "Career Tracks", value: stats?.totalCareers },
            { label: "Assessment Attempts", value: stats?.totalAttempts },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-4"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="text-xs mono" style={{ color: "var(--text-muted)" }}>
                {item.label}
              </p>
              <p className="mt-1 text-xl font-semibold">
                {typeof item.value === "number" ? item.value : "-"}
              </p>
            </div>
          ))}
        </div>
        {statsError && <div className="error-box mb-5">{statsError}</div>}
      </div>
    </div>
  );
}

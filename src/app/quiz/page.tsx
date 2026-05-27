"use client";
import { TRACK_QUIZZES } from "@/lib/quiz-data";
import Link from "next/link";

export default function QuizIndexPage() {
  return (
    <div className="container-page py-12">
      <div className="mb-10">
        <p className="section-label">Practice</p>
        <h1 className="mt-2 text-3xl font-bold">Coding Quizzes</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Select a specialization track to start your coding challenge.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TRACK_QUIZZES.map((track) => (
          <Link key={track.slug} href={`/quiz/${track.slug}`} className="card-dark glow-ring group p-5 block">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{track.icon}</span>
              <div>
                <div className="font-bold group-hover:text-gradient">{track.title}</div>
                <div className="text-xs font-mono" style={{ color: track.color }}>{track.tag}</div>
              </div>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>10 coding challenges · JavaScript</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
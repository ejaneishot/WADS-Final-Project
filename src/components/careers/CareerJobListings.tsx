"use client";

import { useEffect, useState } from "react";

type Job = {
  id: string;
  title: string;
  company: string;
  url: string;
  location: string | null;
  publishedAt: string | null;
  category: string | null;
  source: string;
};

export function CareerJobListings({ slug }: { slug: string }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setMessage(null);
      try {
        const res = await fetch(`/api/careers/${slug}/jobs`);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          if (!cancelled) {
            setJobs([]);
            setMessage(
              typeof data.message === "string"
                ? data.message
                : "Could not load job listings.",
            );
          }
          return;
        }
        if (!cancelled) {
          setJobs(Array.isArray(data.jobs) ? data.jobs : []);
          if (!data.jobs?.length) {
            setMessage("No external listings right now. Try again later.");
          }
        }
      } catch {
        if (!cancelled) {
          setJobs([]);
          setMessage("Could not load job listings.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-2">Related job openings</h2>
      <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
        Listings are fetched securely on the server from an external job board.
      </p>

      {loading && (
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Loading openings…
        </p>
      )}

      {!loading && message && jobs.length === 0 && (
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {message}
        </p>
      )}

      {!loading && jobs.length > 0 && (
        <ul className="space-y-3">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="card-dark glow-ring p-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="font-medium truncate">{job.title}</p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {job.company}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
              </div>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-1.5 !px-3 !text-xs shrink-0"
              >
                View posting
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

"use client";
/**
 * GitHub-style activity heatmap: tracks days the student visits the
 * dashboard (a proxy for "learning activity") in localStorage and renders
 * a 52-week grid of intensity squares.
 */
import { useEffect, useState } from "react";

const DAY_MS = 86400000;
const STORAGE_KEY = "sc_activity_log";
const WEEKS = 53;

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const LEVEL_COLORS = [
  "var(--surface-overlay)",
  "rgba(52,211,153,0.25)",
  "rgba(52,211,153,0.5)",
  "rgba(52,211,153,0.75)",
  "rgba(52,211,153,1)",
];

function levelFor(count: number) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

function toKey(d: Date) {
  return d.toISOString().slice(0, 10);
}

function getActivityLog(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function recordActivityToday(): Record<string, number> {
  const log = getActivityLog();
  const key = toKey(new Date());
  log[key] = (log[key] ?? 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  return log;
}

export default function ActivityHeatmap() {
  const [log, setLog] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    setLog(recordActivityToday());
  }, []);

  if (!log) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Grid ends on the Saturday of the current week, starts WEEKS*7 days earlier.
  const gridEnd = new Date(today.getTime() + (6 - today.getDay()) * DAY_MS);
  const gridStart = new Date(gridEnd.getTime() - (WEEKS * 7 - 1) * DAY_MS);

  const weeks: { date: Date; count: number; future: boolean }[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const days: { date: Date; count: number; future: boolean }[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(gridStart.getTime() + (w * 7 + d) * DAY_MS);
      const key = toKey(date);
      days.push({ date, count: log[key] ?? 0, future: date > today });
    }
    weeks.push(days);
  }

  const total = weeks.flat().reduce((sum, d) => (d.future ? sum : sum + d.count), 0);
  const activeDays = weeks.flat().filter((d) => !d.future && d.count > 0).length;

  // Current streak: consecutive active days counting back from today.
  let currentStreak = 0;
  for (let i = 0; ; i++) {
    const date = new Date(today.getTime() - i * DAY_MS);
    if ((log[toKey(date)] ?? 0) > 0) currentStreak++;
    else break;
  }

  // Longest streak: longest run of consecutive active days within the grid.
  let longestStreak = 0;
  let run = 0;
  for (const day of weeks.flat()) {
    if (day.future) continue;
    if (day.count > 0) {
      run++;
      longestStreak = Math.max(longestStreak, run);
    } else {
      run = 0;
    }
  }

  // Month label per week column: label the first week containing the 1st of a month.
  const monthLabels: (string | null)[] = weeks.map((days) => {
    const firstOfMonth = days.find((d) => d.date.getDate() === 1);
    return firstOfMonth ? MONTH_NAMES[firstOfMonth.date.getMonth()] : null;
  });

  const CELL = 15;
  const GAP = 4;

  return (
    <div className="card-dark h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold">
          {total} {total === 1 ? "activity" : "activities"} in the last year
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-stretch">
        <div className="overflow-x-auto">
          <div className="inline-flex gap-3 mx-auto" style={{ minWidth: "max-content" }}>
            {/* Day-of-week labels */}
            <div
              className="grid text-xs font-medium"
              style={{
                gridTemplateRows: `repeat(7, ${CELL}px)`,
                gap: `${GAP}px`,
                color: "var(--text-muted)",
                marginTop: "20px",
              }}
            >
              {DAY_LABELS.map((label, i) => (
                <span key={i} className="flex items-center">
                  {label}
                </span>
              ))}
            </div>

            <div>
              {/* Month labels */}
              <div
                className="grid text-xs font-medium mb-1.5"
                style={{
                  gridTemplateColumns: `repeat(${WEEKS}, ${CELL}px)`,
                  gap: `${GAP}px`,
                  color: "var(--text-muted)",
                }}
              >
                {monthLabels.map((label, i) => (
                  <span key={i} style={{ whiteSpace: "nowrap" }}>
                    {label ?? ""}
                  </span>
                ))}
              </div>

              {/* Heatmap grid */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: `repeat(${WEEKS}, ${CELL}px)`,
                  gridTemplateRows: `repeat(7, ${CELL}px)`,
                  gridAutoFlow: "column",
                  gap: `${GAP}px`,
                }}
              >
                {weeks.flat().map((day, i) => (
                  <div
                    key={i}
                    title={
                      day.future
                        ? undefined
                        : `${day.date.toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}: ${day.count} ${day.count === 1 ? "activity" : "activities"}`
                    }
                    className="rounded-[3px]"
                    style={{
                      width: `${CELL}px`,
                      height: `${CELL}px`,
                      background: day.future ? "transparent" : LEVEL_COLORS[levelFor(day.count)],
                      border: day.future ? "none" : "1px solid var(--border)",
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-end gap-1.5 mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>Less</span>
                {LEVEL_COLORS.map((color, i) => (
                  <div
                    key={i}
                    className="rounded-[3px]"
                    style={{ width: `${CELL}px`, height: `${CELL}px`, background: color, border: "1px solid var(--border)" }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats panel */}
        <div
          className="flex flex-row lg:flex-col gap-4 lg:gap-3 justify-center lg:justify-center lg:border-l lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              {currentStreak}🔥
            </div>
            <div className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
              Day streak
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold">{longestStreak}</div>
            <div className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
              Longest streak
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold">{activeDays}</div>
            <div className="text-[10px] uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
              Active days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * API route: POST /api/code/execute
 *
 * Methods: POST
 * Auth: Signed JWT cookie (`requireAuth`).
 * Purpose: Run a learner's code for an interactive roadmap challenge.
 * Proxies to the free Wandbox compile API (https://wandbox.org) — no API key required.
 */
import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/rbac";

const WANDBOX_COMPILERS: Record<string, string> = {
  python: "cpython-3.11.10",
  javascript: "nodejs-20.17.0",
  java: "openjdk-jdk-21+35",
  csharp: "mono-6.12.0.199",
  bash: "bash",
};

const MAX_CODE_LENGTH = 10_000;

export async function POST(req: Request) {
  const { error } = await requireAuth();
  if (error) return error;

  const body = await req.json().catch(() => null);
  const language = body?.language;
  const code = body?.code;

  if (typeof language !== "string" || !(language in WANDBOX_COMPILERS)) {
    return NextResponse.json({ message: "Unsupported language" }, { status: 400 });
  }
  if (typeof code !== "string" || code.length === 0) {
    return NextResponse.json({ message: "Code is required" }, { status: 400 });
  }
  if (code.length > MAX_CODE_LENGTH) {
    return NextResponse.json({ message: "Code is too long" }, { status: 400 });
  }

  try {
    const res = await fetch("https://wandbox.org/api/compile.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        compiler: WANDBOX_COMPILERS[language],
      }),
      signal: AbortSignal.timeout(20_000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Code execution service unavailable" },
        { status: 502 },
      );
    }

    const result = await res.json();

    return NextResponse.json({
      stdout: result.program_output ?? "",
      stderr: result.program_error ?? "",
      compileError: result.compiler_error ?? "",
      status: result.status ?? null,
    });
  } catch {
    return NextResponse.json(
      { message: "Code execution timed out" },
      { status: 504 },
    );
  }
}

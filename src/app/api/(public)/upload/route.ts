// src/app/api/upload/route.ts
import { NextResponse } from "next/server";
import { PdfReader } from "pdfreader";

export const runtime = "nodejs";

function isPdfFile(file: File): boolean {
  const name = file.name?.toLowerCase() ?? "";
  if (name.endsWith(".pdf")) return true;
  const type = file.type?.toLowerCase() ?? "";
  return (
    type === "application/pdf" ||
    type === "application/x-pdf" ||
    type === "binary/octet-stream"
  );
}

async function extractPdfText(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return await new Promise<string>((resolve, reject) => {
    const pages = new Map<number, string[]>();
    let settled = false;

    const finish = (err: unknown, text?: string) => {
      if (settled) return;
      settled = true;
      if (err) reject(err);
      else resolve(text ?? "");
    };

    try {
      new PdfReader().parseBuffer(buffer, (error, item) => {
        if (error) {
          finish(error);
          return;
        }

        // pdfreader ends the stream with handler() — both args undefined
        if (item === undefined || item === null) {
          const text = [...pages.entries()]
            .sort((a, b) => a[0] - b[0])
            .map(([, lines]) => lines.join(" ").replace(/\s+/g, " ").trim())
            .filter(Boolean)
            .join("\n\n");
          finish(null, text);
          return;
        }

        // Opening marker { file: ... } or page markers — ignore
        if (!("text" in item) || typeof item.text !== "string") {
          return;
        }

        const pageNumber =
          typeof item.page === "number" && item.page > 0 ? item.page : 0;
        const currentLines = pages.get(pageNumber) ?? [];
        currentLines.push(item.text);
        pages.set(pageNumber, currentLines);
      });
    } catch (e) {
      finish(e);
    }
  });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!isPdfFile(file)) {
      return NextResponse.json(
        { error: "Only PDF files are supported" },
        { status: 400 },
      );
    }

    const text = await extractPdfText(file);

    return NextResponse.json({ text });
  } catch (error) {
    console.error("PDF Parse Error:", error);
    return NextResponse.json({ error: "Failed to parse PDF" }, { status: 500 });
  }
}

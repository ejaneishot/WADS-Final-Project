import { NextResponse } from "next/server";
import { getAuth } from "@/lib/auth";

export async function GET() {
  const user = getAuth();
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ id: user.sub, email: user.email, role: user.role });
}

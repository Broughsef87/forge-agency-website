import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "no key" });
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
  const data = await res.json();
  const names = data.models?.map((m: { name: string }) => m.name) ?? data;
  return NextResponse.json(names);
}

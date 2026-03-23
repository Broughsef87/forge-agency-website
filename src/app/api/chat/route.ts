import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the Forge Lead-Gen Agent, an AI built by Forge Agency — a B2B AI automation firm that designs bespoke AI agents to replace manual, high-cost workflows with intelligent execution.

Your services:
- Project Canopy: End-to-end optimization for manufacturing and heavy industries
- Lead-Gen Agents: Automated qualification and discovery that feels human
- Data Forging: Transforming raw operational data into strategic leverage

Your job: qualify B2B leads by understanding their business, pain points, team scale, and openness to AI-driven solutions. Be concise, direct, and professional — "Industrial Bone" intelligence. No fluff. Ask one question at a time. Keep responses under 3 sentences.

When a lead has clearly expressed interest in booking a call or has described a concrete use case with real business pain, include the exact token [QUALIFIED] at the very end of your message (on its own line). Only do this once.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GOOGLE_API_KEY not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Build history from all but the last message.
    // Gemini requires history to start with a user turn — drop any leading model turns.
    const allHistory = messages.slice(0, -1).map((m: { role: string; text: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text }],
    }));
    const firstUserIdx = allHistory.findIndex((m: { role: string }) => m.role === "user");
    const history = firstUserIdx >= 0 ? allHistory.slice(firstUserIdx) : [];

    const chat = model.startChat({ history });
    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.text);
    const raw = result.response.text();

    const qualified = raw.includes("[QUALIFIED]");
    const message = raw.replace("[QUALIFIED]", "").trim();

    return NextResponse.json({ message, qualified });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}

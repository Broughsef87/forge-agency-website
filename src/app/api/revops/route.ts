import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an Autonomous RevOps Agent. When given a company trigger event, you analyze it and produce a structured outreach response.

Return ONLY valid JSON with this exact shape — no preamble, no markdown, no explanation:
{
  "signal": "<1-sentence summary of why this is a strong reason to reach out now>",
  "sequence": [
    { "subject": "<email subject line>", "body": "<2-sentence email body, personalized to the trigger>" },
    { "subject": "<follow-up subject>", "body": "<2-sentence follow-up body>" },
    { "subject": "<final touch subject>", "body": "<2-sentence closing body>" }
  ],
  "confidence": <integer 1-10>,
  "justification": "<1 sentence explaining the confidence score>"
}

Be specific, concise, and professional. Reference the actual trigger in each email.`;

export async function POST(req: NextRequest) {
  try {
    const { trigger } = await req.json();
    if (!trigger?.trim()) {
      return NextResponse.json({ error: "trigger is required" }, { status: 400 });
    }

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json({ error: "GOOGLE_API_KEY not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: { responseMimeType: "application/json" },
    });

    const result = await model.generateContent(trigger);
    const text = result.response.text();
    const data = JSON.parse(text);

    return NextResponse.json(data);
  } catch (err) {
    console.error("RevOps API error:", err);
    return NextResponse.json({ error: "Failed to generate sequence" }, { status: 500 });
  }
}

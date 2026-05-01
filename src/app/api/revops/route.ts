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
      model: "gemini-3-flash-preview",
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: { responseMimeType: "application/json" },
    });

    const result = await model.generateContentStream(trigger);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) controller.enqueue(encoder.encode(text));
          }
          controller.close();
        } catch (err) {
          console.error("RevOps stream error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    console.error("RevOps API error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("429") || msg.includes("quota") || msg.includes("403")) {
      return NextResponse.json(
        { error: "Demo agent is at capacity right now. Book a call to see it live, or try again in a few minutes." },
        { status: 503 }
      );
    }
    return NextResponse.json({ error: "Failed to generate sequence" }, { status: 500 });
  }
}

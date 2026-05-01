import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an Autonomous Customer Success Agent. When given a customer's recent activity data, you assess their health and produce a structured intervention response.

Return ONLY valid JSON with this exact shape — no preamble, no markdown, no explanation:
{
  "healthScore": <integer 1-100>,
  "status": "<3-word label, e.g. 'At-Risk: Disengaging' or 'Healthy: Expanding'>",
  "churnRisk": "<one of: Low | Medium | High | Critical>",
  "summary": "<2-3 sentence plain-English situation summary written as if by a human CSM>",
  "interventions": [
    "<concrete action the agent would take automatically>",
    "<concrete action the agent would take automatically>",
    "<concrete action the agent would take automatically>"
  ]
}

Be direct and specific. Base everything strictly on the data provided.`;

export async function POST(req: NextRequest) {
  try {
    const { customerData } = await req.json();
    if (!customerData?.trim()) {
      return NextResponse.json({ error: "customerData is required" }, { status: 400 });
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

    const result = await model.generateContentStream(customerData);

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
          console.error("CS Agent stream error:", err);
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
    console.error("CS Agent API error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("429") || msg.includes("quota") || msg.includes("403")) {
      return NextResponse.json(
        { error: "Demo agent is at capacity right now. Book a call to see it live, or try again in a few minutes." },
        { status: 503 }
      );
    }
    return NextResponse.json({ error: "Failed to assess customer health" }, { status: 500 });
  }
}

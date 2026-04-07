import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are an Autonomous RevOps Agent. When given a company trigger event, analyze it and produce a structured outreach response. Be specific, concise, and professional. Reference the actual trigger in each email.`

const sequenceSchema = z.object({
  signal: z.string().describe('1-sentence summary of why this is a strong reason to reach out now'),
  sequence: z.array(z.object({
    subject: z.string(),
    body: z.string().describe('2-sentence email body, personalized to the trigger'),
  })).length(3),
  confidence: z.number().int().min(1).max(10),
  justification: z.string().describe('1 sentence explaining the confidence score'),
})

export async function POST(req: NextRequest) {
  try {
    const { trigger } = await req.json()
    if (!trigger?.trim()) {
      return NextResponse.json({ error: 'trigger is required' }, { status: 400 })
    }

    const { object: data } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: SYSTEM_PROMPT,
      prompt: trigger,
      schema: sequenceSchema,
    })

    return NextResponse.json(data)
  } catch (err) {
    console.error('RevOps API error:', err)
    return NextResponse.json({ error: 'Failed to generate sequence' }, { status: 500 })
  }
}

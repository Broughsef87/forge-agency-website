import { google } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are an Autonomous Customer Success Agent. When given a customer's recent activity data, assess their health and produce a structured intervention response. Be direct and specific. Base everything strictly on the data provided.`

const healthSchema = z.object({
  healthScore: z.number().int().min(1).max(100),
  status: z.string().describe("3-word label, e.g. 'At-Risk: Disengaging' or 'Healthy: Expanding'"),
  churnRisk: z.enum(['Low', 'Medium', 'High', 'Critical']),
  summary: z.string().describe('2-3 sentence plain-English situation summary written as if by a human CSM'),
  interventions: z.array(z.string().describe('concrete action the agent would take automatically')).length(3),
})

export async function POST(req: NextRequest) {
  try {
    const { customerData } = await req.json()
    if (!customerData?.trim()) {
      return NextResponse.json({ error: 'customerData is required' }, { status: 400 })
    }

    const { object: data } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: SYSTEM_PROMPT,
      prompt: customerData,
      schema: healthSchema,
    })

    return NextResponse.json(data)
  } catch (err) {
    console.error('CS Agent API error:', err)
    return NextResponse.json({ error: 'Failed to assess customer health' }, { status: 500 })
  }
}

import { google } from '@ai-sdk/google'
import { generateText } from 'ai'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const DISCORD_WEBHOOK = process.env.DISCORD_LEAD_WEBHOOK_URL
const resend = new Resend(process.env.RESEND_API_KEY)

async function postToDiscord(content: string) {
  if (!DISCORD_WEBHOOK) return
  await fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  })
}

async function sendEmailNotification(
  name: string,
  email: string,
  company: string,
  use_case: string,
  score: string,
  brief: string,
  opener: string
) {
  await resend.emails.send({
    from: 'Forge Agency <leads@the-forge-agency.com>',
    to: 'andrew.brough@the-forge-agency.com',
    subject: `New Lead: ${name} · ${company}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #C8820A; margin-bottom: 4px;">New Inbound Lead</h2>
        <p style="margin: 0 0 24px; color: #666; font-size: 13px;">Forge Agency · Lead Gen Agent</p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Use case</td><td style="padding: 8px 0;">${use_case || 'Not provided'}</td></tr>
        </table>

        <div style="background: #f9f9f9; border-left: 3px solid #C8820A; padding: 16px; margin-bottom: 16px; border-radius: 0 4px 4px 0;">
          <p style="margin: 0 0 4px; font-weight: bold; font-size: 13px; color: #C8820A;">SCORE</p>
          <p style="margin: 0;">${score}</p>
        </div>

        <div style="background: #f9f9f9; border-left: 3px solid #666; padding: 16px; margin-bottom: 16px; border-radius: 0 4px 4px 0;">
          <p style="margin: 0 0 4px; font-weight: bold; font-size: 13px; color: #666;">COMPANY BRIEF</p>
          <p style="margin: 0;">${brief}</p>
        </div>

        <div style="background: #f9f9f9; border-left: 3px solid #333; padding: 16px; margin-bottom: 24px; border-radius: 0 4px 4px 0;">
          <p style="margin: 0 0 4px; font-weight: bold; font-size: 13px; color: #333;">DRAFT OPENER</p>
          <p style="margin: 0; font-style: italic;">${opener}</p>
        </div>

        <p style="font-size: 12px; color: #999;">Forge Agency Lead Gen Agent · <a href="https://soznassgjksaaygwgpwj.supabase.co" style="color: #999;">View in Supabase</a></p>
      </div>
    `,
  })
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, use_case, conversation } = await req.json()

    const prompt = `You are scoring an inbound lead for Forge Agency — a B2B AI automation firm that builds bespoke agent systems for small-to-mid businesses.

Lead info:
- Name: ${name}
- Email: ${email}
- Company: ${company}
- Use case they described: ${use_case || 'Not provided'}
- Chat conversation summary: ${conversation ? conversation.slice(0, 800) : 'Not provided'}

Do 3 things:

1. **Score** the lead 1-10 on fit (10 = perfect: clear pain, business can pay, concrete use case). One sentence explanation.

2. **Company brief** (2-3 sentences): What does this company likely do? What's the probable team size and industry? What operational pain points do they likely have?

3. **Draft opener** (3 sentences max): A personalized first reply from Andrew. Reference their specific use case. End with a soft CTA to confirm the strategy call. Tone: direct, no fluff, builder-to-builder.

Format your response exactly like this:
SCORE: [number]/10 — [one sentence why]
BRIEF: [company analysis]
OPENER: [draft reply]`

    const { text: analysis } = await generateText({
      model: google('gemini-2.5-flash'),
      prompt,
    })

    const scoreMatch = analysis.match(/SCORE:\s*(.+)/)
    const briefMatch = analysis.match(/BRIEF:\s*([\s\S]+?)(?=OPENER:|$)/)
    const openerMatch = analysis.match(/OPENER:\s*([\s\S]+)/)

    const score = scoreMatch?.[1]?.trim() ?? 'N/A'
    const brief = briefMatch?.[1]?.trim() ?? 'N/A'
    const opener = openerMatch?.[1]?.trim() ?? 'N/A'

    const discordMessage = `**NEW LEAD — Forge Agency**
**${name}** · ${email}
**Company:** ${company}
**Use case:** ${use_case || 'Not provided'}

**Score:** ${score}
**Brief:** ${brief}

**Draft opener:**
> ${opener.replace(/\n/g, '\n> ')}

---
*Book link sent to lead · [View Supabase](https://soznassgjksaaygwgpwj.supabase.co)*`

    await Promise.all([
      postToDiscord(discordMessage),
      sendEmailNotification(name, email, company, use_case, score, brief, opener),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('notify-lead error:', err)
    return NextResponse.json({ ok: false })
  }
}

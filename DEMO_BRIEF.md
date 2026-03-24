# Forge Agency — New Demo Brief
_Authored 2026-03-23 by Devroux_

## Context
The existing Lead-Gen Agent demo (`ChatDemo.tsx` + `/api/chat`) is live and working.
We're adding two more demo components for the soft launch. These should be standalone sections
on the landing page (`page.tsx`), styled identically to the existing demo (Industrial Bone: clean,
stone palette, rounded-3xl cards, no dark mode).

---

## Demo 2: Autonomous RevOps Agent
**Concept:** A live simulation of a "Revenue Operations Agent" — it monitors a deal pipeline,
detects trigger events (e.g., a company raised funding), and drafts a hyper-personalized
outreach sequence autonomously.

### Build Instructions
1. Create `/src/app/api/revops/route.ts`
   - POST handler accepts `{ trigger: string }` (e.g., "Acme Corp just raised $10M Series B")
   - Uses Gemini/Gemini-flash to generate:
     - A 1-sentence "Why reach out now" signal summary
     - A 3-step outreach sequence (Subject line + 2-sentence email body for each step)
     - A "Confidence Score" (1-10) with 1-line justification
   - Return as structured JSON: `{ signal, sequence: [{subject, body}], confidence, justification }`
   - Enforce strict JSON output (no conversational preamble)

2. Create `/src/components/RevOpsDemo.tsx`
   - UI: Two-panel layout (same grid as ChatDemo)
   - Left panel: "Trigger Input" — a text input asking "Describe a company trigger event:"
     with example placeholder: "Acme Corp just hired a new VP of Sales"
     Button: "Generate Sequence →"
     Loading state: "Analyzing signal..."
   - Right panel: Renders the result — Signal summary card, then 3 Step cards (numbered),
     then a Confidence badge
   - Include a small "This is your RevOps agent working." tagline under the heading

3. Add a section to `page.tsx` between the existing ChatDemo and the footer:
   ```
   <RevOpsDemo />
   ```

### Copy (use this exactly)
- Section label: "AUTONOMOUS REVOPS"
- Heading: "Know exactly when to reach out. And what to say."
- Subtext: "This agent monitors market signals and builds personalized outreach sequences
  in seconds — without a human SDR."

---

## Demo 3: Autonomous Customer Success Agent
**Concept:** A simulation of a "Customer Health Monitor" — the user enters a fake customer's
recent activity log and the agent produces a churn risk assessment + intervention plan.

### Build Instructions
1. Create `/src/app/api/cs-agent/route.ts`
   - POST handler accepts `{ customerData: string }` (free text describing a customer's recent behavior)
   - Uses Gemini-flash to generate:
     - A "Health Score" (1-100) with 3-word status label (e.g., "At-Risk: Disengaging")
     - A "Churn Risk" level: Low / Medium / High / Critical
     - A 2-3 sentence "Situation Summary" (plain English, like a human CSM wrote it)
     - An "Intervention Plan": 3 concrete actions the agent would take automatically
   - Return as structured JSON: `{ healthScore, status, churnRisk, summary, interventions: string[] }`

2. Create `/src/components/CSAgentDemo.tsx`
   - UI: Two-panel layout
   - Left panel: A `<textarea>` labeled "Paste customer activity:"
     Placeholder: "Last login: 14 days ago. Support tickets opened: 3 this month (all unresolved). Feature usage dropped 80% since onboarding. Contract renewal in 45 days."
     Button: "Run Health Check →"
   - Right panel: Renders a "Customer Health Card" with:
     - Large Health Score number + Status label
     - Churn Risk badge (color-coded: green/yellow/orange/red)
     - Situation Summary paragraph
     - Numbered list of 3 Interventions
   - The card should feel like a real internal dashboard widget — clean, no fluff

3. Add to `page.tsx` after RevOpsDemo:
   ```
   <CSAgentDemo />
   ```

### Copy (use this exactly)
- Section label: "AUTONOMOUS CUSTOMER SUCCESS"
- Heading: "Your agent knows which customers are about to leave. Before they do."
- Subtext: "Paste in any customer's recent activity and watch the agent assess health,
  calculate churn risk, and generate an intervention plan — instantly."

---

## Shared Requirements
- All API routes: use `GOOGLE_API_KEY` env var (Gemini). Import pattern consistent with existing `/api/chat/route.ts`
- All UI: match existing stone/bone aesthetic. No dark mode classes. Rounded-3xl cards, stone-200 borders.
- All sections: include `data-reveal` attributes on headings for scroll animation consistency
- Push to GitHub and deploy to Vercel when done

---

## Definition of Done
- [ ] `/api/revops/route.ts` live and returning structured JSON
- [ ] `/api/cs-agent/route.ts` live and returning structured JSON
- [ ] `RevOpsDemo.tsx` renders and calls real API
- [ ] `CSAgentDemo.tsx` renders and calls real API
- [ ] Both sections visible on the live Vercel URL
- [ ] No TypeScript errors, no build failures

/**
 * NAP contact constants — ONE source of truth. Never hardcode these.
 *
 * NAP (Name / Address / Phone) consistency IS the local-ranking signal
 * (FOR-131 · FOR-141). These strings must be byte-identical everywhere they
 * appear — JSON-LD, the site footer, GBP, and every directory listing. A
 * single drifted digit does not weaken the signal, it breaks the match.
 *
 * This file exists because the site has EIGHT separately authored footers
 * (no shared Footer component). Hardcoding the number into each is exactly
 * what would let them drift apart, so nobody hardcodes it — import here.
 * Same reason SITE_URL is imported rather than redeclared (see schema.ts).
 *
 * Canonical format, fixed by Sage (FOR-131) — character-for-character:
 *   display   (303) 919-3187
 *   tel: href tel:3039193187
 *   schema    +13039193187     (E.164)
 *
 * 303 = Denver metro, correct for Castle Rock. Deliberately a real line,
 * not Google Voice: Google flags VoIP during GBP verification (manual
 * review, blocked SMS codes), and a number that fights the verification
 * we need is self-defeating.
 */

/** Human-readable form. Use for anything a person reads. */
export const PHONE_DISPLAY = '(303) 919-3187';

/** href for tel: links. */
export const PHONE_TEL_HREF = 'tel:3039193187';

/** E.164 — the form schema.org/GBP expect. Used by ORGANIZATION.telephone. */
export const PHONE_E164 = '+13039193187';

/**
 * Public contact email — the consolidated public identity (FOR-133).
 *
 * ⚠️ DIVERGENCE, pending Sage: the eight footers and NavBar.tsx still
 * hardcode the retired info@forge-automations.com, so the entity schema and
 * the visible pages currently disagree. When that switch is approved they
 * should import this constant rather than hardcode a tenth copy — same
 * reason as PHONE_* above.
 */
export const EMAIL = 'info@the-forge-agency.com';

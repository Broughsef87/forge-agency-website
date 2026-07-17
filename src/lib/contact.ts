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
 * the-forge-agency.com is the canonical public domain. forge-automations.com
 * is retired from public use (it survives as the legal entity name, see
 * ORGANIZATION.legalName) — do not surface it anywhere user-facing.
 *
 * Delivery confirmed 2026-07-09: info@ and andrew@the-forge-agency.com both
 * tested and delivering, send-as configured.
 *
 * Every surface imports this — Organization.contactPoint, all eight footers,
 * and the NavBar mobile menu. Don't hardcode an eleventh copy.
 */
export const EMAIL = 'info@the-forge-agency.com';

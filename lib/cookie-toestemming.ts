"use client";

/**
 * Cookietoestemming — bewust klein gehouden, zonder externe consent-tool.
 *
 * De site plaatst uit zichzelf geen analytische of marketingcookies. Wil je er
 * later toch een toevoegen (HubSpot-tracking, Google Analytics), laad dat script
 * dan alleen wanneer `leesKeuze() === "alles"` en luister op
 * `TOESTEMMING_EVENT` zodat een wijziging meteen doorwerkt.
 */

export type CookieKeuze = "alles" | "alleen-noodzakelijk";

/** localStorage-sleutel met de keuze én de datum waarop die is gemaakt. */
export const TOESTEMMING_SLEUTEL = "mm-cookie-keuze";

/** Wordt op `window` afgevuurd zodra de keuze verandert. */
export const TOESTEMMING_EVENT = "mm-cookie-keuze-gewijzigd";

/** Verzoek aan de banner om zich (opnieuw) te tonen — gebruikt op de cookiepagina. */
export const OPEN_BANNER_EVENT = "mm-cookie-banner-openen";

/** Na een jaar vragen we het opnieuw; dat is de gangbare termijn. */
const GELDIG_MS = 365 * 24 * 60 * 60 * 1000;

type Opgeslagen = { keuze: CookieKeuze; datum: string };

export function leesKeuze(): CookieKeuze | null {
  if (typeof window === "undefined") return null;
  try {
    const ruw = window.localStorage.getItem(TOESTEMMING_SLEUTEL);
    if (!ruw) return null;
    const opgeslagen = JSON.parse(ruw) as Opgeslagen;
    if (opgeslagen.keuze !== "alles" && opgeslagen.keuze !== "alleen-noodzakelijk") {
      return null;
    }
    const leeftijd = Date.now() - new Date(opgeslagen.datum).getTime();
    if (!Number.isFinite(leeftijd) || leeftijd > GELDIG_MS) return null;
    return opgeslagen.keuze;
  } catch {
    // Privémodus of gewiste opslag: dan gedragen we ons alsof er geen keuze is.
    return null;
  }
}

export function bewaarKeuze(keuze: CookieKeuze) {
  if (typeof window === "undefined") return;
  try {
    const waarde: Opgeslagen = { keuze, datum: new Date().toISOString() };
    window.localStorage.setItem(TOESTEMMING_SLEUTEL, JSON.stringify(waarde));
  } catch {
    // Niets aan te doen; de keuze geldt dan alleen voor dit bezoek.
  }
  window.dispatchEvent(new CustomEvent(TOESTEMMING_EVENT, { detail: keuze }));
}

export function wisKeuze() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(TOESTEMMING_SLEUTEL);
  } catch {
    // idem
  }
  window.dispatchEvent(new CustomEvent(TOESTEMMING_EVENT, { detail: null }));
}

/** Vraagt de banner om weer tevoorschijn te komen, zodat je je keuze kunt wijzigen. */
export function openBanner() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_BANNER_EVENT));
}

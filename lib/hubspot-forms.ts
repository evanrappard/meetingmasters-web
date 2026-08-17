/**
 * Centrale plek voor de HubSpot-formulieren van de website.
 *
 * De formulieren zijn aangemaakt met `scripts/create-hubspot-forms.mjs`;
 * het overzicht met doel en plaatsing staat in `docs/hubspot-forms.md`.
 *
 * Gebruik:
 *   import { HUBSPOT_PORTAL_ID, HUBSPOT_FORMS } from "@/lib/hubspot-forms";
 *   <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS.advies} />
 */

export const HUBSPOT_PORTAL_ID = "147433380";

/** Datacenter van het account. Is ook de default in HubSpotForm.tsx. */
export const HUBSPOT_REGION = "eu1";

export const HUBSPOT_FORMS = {
  /** Vrijblijvend advies — /nl/expert-advies */
  advies: "02bdc77f-14e3-4826-9d48-96449c8ca062",
  /** Algemeen contact — /nl/contact */
  contact: "c747d7cd-4850-44f4-965f-a87120e55d38",
  /** Demo of rondleiding — CTA-blok + technologie-pagina's */
  demo: "a052e71e-9ed7-4c11-adc9-36d8e8b26ea8",
  /** Boeking & beschikbaarheid — zaaltje, R@venHack, EscapeMasters */
  boeking: "ddf3e496-b036-4720-b7b1-44eed87f7506",
  /** Kostenindicatie — event-detailpagina's, VO huren, escape-rooms */
  kostenindicatie: "8fb6d169-df70-45f0-bb36-671df8ad0f58",
  /** Nieuwsbrief — /nl/nieuwsbrief (footer linkt ernaartoe) */
  nieuwsbrief: "0992ca5c-97ed-4940-a45d-55357d69f57a",
  /** Vergadermacht — download van de publicatie, /nl/downloads */
  vergadermacht: "cbf9b66f-20d8-4dae-86d4-f85b1dda4331",
  /** Vergaderkosten-calculator — los HTML-bestand, niet via HubSpotForm.tsx */
  calculator: "229f1966-fafc-4929-bfae-173a27b5edee",
} as const;

export type HubSpotFormKey = keyof typeof HUBSPOT_FORMS;

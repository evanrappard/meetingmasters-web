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

/**
 * Boekingsagenda van Emilie. Bezoekers kiezen hier zelf een moment; wij
 * gebruiken dat op de rondleiding en als snelle route naast het adviesformulier.
 */
export const HUBSPOT_AGENDA =
  "https://meetings-eu1.hubspot.com/emilie-van-rappard?uuid=3053d26f-cdc7-495c-ab78-587396c1a7e3";

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

/**
 * De Engelse formulieren. Zelfde velden en dezelfde contacteigenschappen als de
 * Nederlandse — een keuzelijst slaat de wáárde op, niet het label — dus in
 * HubSpot komt alles netjes in één veld terecht, ongeacht de taal waarin
 * iemand het formulier invulde.
 *
 * Vergadermacht ontbreekt met opzet: die publicatie bestaat niet in het Engels.
 */
export const HUBSPOT_FORMS_EN = {
  /** Free advice */
  advies: "e4d50964-6457-440f-a73c-5f31726c6060",
  /** General contact */
  contact: "8afa782e-bc97-4fb0-a182-2621167527d1",
  /** Demo or tour */
  demo: "e7294822-87d4-4759-97fc-532b52a4c9e2",
  /** Booking & availability */
  boeking: "d2cce099-ab58-4753-915c-0d1c20a00eb1",
  /** Cost estimate */
  kostenindicatie: "ae15b8b5-de37-40eb-8172-52da38e2cff2",
  /** Newsletter */
  nieuwsbrief: "d6c9525f-7b57-46b2-bd74-243c30c3250e",
  /** Meeting cost calculator — los HTML-bestand, niet via HubSpotForm.tsx */
  calculator: "77dffdf4-e911-49d3-ace3-8bc77b9c2cc7",
} as const;

/**
 * Het juiste formulier bij de taal van de pagina. Vergadermacht bestaat alleen
 * in het Nederlands; vraag je die op in het Engels, dan krijg je het
 * Nederlandse formulier terug — daarom staat dat blok niet op de Engelse site.
 */
export function formulierVoor(sleutel: HubSpotFormKey, taal: "nl" | "en" = "nl"): string {
  if (taal === "en" && sleutel in HUBSPOT_FORMS_EN) {
    return HUBSPOT_FORMS_EN[sleutel as keyof typeof HUBSPOT_FORMS_EN];
  }
  return HUBSPOT_FORMS[sleutel];
}

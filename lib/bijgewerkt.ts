/**
 * De "laatst bijgewerkt"-datums, op één plek en in beide talen.
 *
 * Er staan er bewust twee, want ze betekenen niet hetzelfde:
 *
 * - `SITE_BIJGEWERKT` staat in de voettekst en zegt iets over de site als
 *   geheel — een recency-signaal voor zoekmachines.
 * - `JURIDISCH_BIJGEWERKT` staat onder het privacy statement en de
 *   cookieverklaring. Die datum hoort alléén op te schuiven als de inhoud van
 *   die stukken verandert. Zou hij meelopen met elke knop die we verzetten,
 *   dan zegt hij niets meer over het document waar hij onder staat.
 *
 * De maandnaam staat per taal uitgeschreven; eerder toonde de Engelse pagina
 * "Last updated: augustus 2026".
 */

export type Taalcode = "nl" | "en";

export const SITE_BIJGEWERKT: Record<Taalcode, string> = {
  nl: "augustus 2026",
  en: "August 2026",
};

/** Bijwerken zodra de tekst van het privacy statement of de cookieverklaring wijzigt. */
export const JURIDISCH_BIJGEWERKT: Record<Taalcode, string> = {
  nl: "22 augustus 2026",
  en: "22 August 2026",
};

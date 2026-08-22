/**
 * Eén plek voor de formele bedrijfsgegevens. De privacy- en cookiepagina's en
 * de footer lezen hieruit, zodat een wijziging maar op één plek hoeft.
 *
 * `kvk` en `btw` staan bewust op null: zolang het nummer ontbreekt tonen de
 * footer en de privacypagina die regel niet, in plaats van een placeholder.
 * Vul ze hier in en ze verschijnen overal tegelijk.
 */
export const BEDRIJF = {
  naam: "MeetingMasters Online",
  adres: "Schellingwouderdijk 157",
  postcode: "1023 NC",
  plaats: "Amsterdam",
  land: "Nederland",
  email: "contact@meetingmasters.online",
  telefoon: "+31 20 239 03 13",
  telefoonHref: "tel:+31202390313",
  mobiel: "+31 6 4575 2819",
  mobielHref: "tel:+31645752819",
  kvk: "34214932" as string | null,
  btw: "NL001689693B11" as string | null,
} as const;

/** "Schellingwouderdijk 157, 1023 NC Amsterdam" — voor lopende tekst. */
export const ADRES_REGEL = `${BEDRIJF.adres}, ${BEDRIJF.postcode} ${BEDRIJF.plaats}`;

// De "laatst bijgewerkt"-datums staan in lib/bijgewerkt.ts.

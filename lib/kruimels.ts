/**
 * Kruimelpad voor zoekmachines (BreadcrumbList).
 *
 * Google toont dit als het paadje boven een zoekresultaat, in plaats van het
 * kale adres. Dat levert meer kliks op en helpt hem de opbouw van de site te
 * begrijpen: een eventpagina is een kind van het eventoverzicht, en niet een
 * losse pagina die toevallig bestaat.
 *
 * Het pad hoeft niet zichtbaar op de pagina te staan; Google accepteert het
 * ook als losse gegevens, zolang de adressen kloppen.
 */

const SITE = "https://www.meetingmasters.online";

export type Kruimel = { naam: string; pad: string };

export function kruimelSchema(kruimels: Kruimel[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: kruimels.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: k.naam,
      item: `${SITE}${k.pad}`,
    })),
  };
}

/** De twee vaste beginpunten, per taal. */
export const HOME_KRUIMEL: Record<"nl" | "en", Kruimel> = {
  nl: { naam: "Home", pad: "/nl/home" },
  en: { naam: "Home", pad: "/en/home" },
};

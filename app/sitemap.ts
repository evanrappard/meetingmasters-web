import { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { POSTS } from "@/app/nl/blog/posts";
import { eventFormats } from "@/app/nl/events/page";
import { POSTS_EN } from "@/app/en/blog/posts";
import { engelsPad } from "@/lib/talen";

const BASE = "https://www.meetingmasters.online";

/**
 * De sitemap wordt afgeleid uit de routes in `app/`, niet met de hand
 * bijgehouden. De handmatige versie liep jarenlang achter: hij miste de hele
 * events-sectie en wees deels naar pagina's die inmiddels doorverwijzen.
 *
 * Nieuwe pagina toevoegen? Dan staat hij er vanzelf in. Wil je een pagina er
 * juist buiten houden, zet 'm dan in NIET_INDEXEREN hieronder — en geef die
 * pagina ook `robots: { index: false }` mee, anders vindt Google hem alsnog
 * via een link.
 */

/**
 * Pagina's die bestaan maar (nog) niet gevonden hoeven te worden: ze zijn niet
 * af, of ze zijn vervangen. Ze blijven bereikbaar via een directe link.
 */
export const NIET_INDEXEREN = new Set([
  "/nl/cases",
  "/nl/csr",
  "/nl/escape-rooms",
  "/nl/meeting-formats",
  "/nl/partners",
  "/nl/planning-support",
  "/nl/quality",
  "/nl/strategy-concept",
  "/nl/team",
  // Oudere routes zonder taalprefix en de Engelse variant verwijzen door.
]);

/** Routes waarvan de inhoud elders staat of die alleen als kader dienen. */
const OVERSLAAN = [
  /^\/embed\b/,
  /^\/studio\b/,
  // /en verwijst grotendeels door naar /nl. Wat er wél in het Engels
  // bestaat, voegen we hieronder expliciet toe.
  /^\/en\b/,
  /^\/nl\/technologie$/, // verwijst door naar /tools
  /^\/nl\/technologie\/(faq|helpdesk|platforms|hoe-het-werkt|support|zoom|teams|zoom-events)$/,
  /^\/nl\/(about\/(team|partners|quality|csr)|inspiratie|remote-office|publicaties)$/,
  /^\/$/,
  /^\/nl$/,
];

/** Alle statische routes uit de app-map. Dynamische routes vullen we apart. */
function statischeRoutes(): string[] {
  const gevonden: string[] = [];
  (function loop(map: string, pad: string) {
    for (const item of readdirSync(map, { withFileTypes: true })) {
      if (item.name.startsWith("_") || item.name === "api") continue;
      const vol = join(map, item.name);
      if (item.isDirectory()) {
        if (item.name.includes("[")) continue; // dynamisch: apart afgehandeld
        loop(vol, pad + (item.name.startsWith("(") ? "" : "/" + item.name));
      } else if (item.name === "page.tsx") {
        gevonden.push(pad || "/");
      }
    }
  })("app", "");
  return gevonden;
}

/** Hoe belangrijk is deze pagina? Bepaalt priority en changeFrequency. */
function gewicht(pad: string): { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] } {
  if (pad === "/nl/home") return { priority: 1.0, changeFrequency: "weekly" };
  if (/^\/nl\/(events|virtual-office|games-tools|blog)$/.test(pad)) return { priority: 0.9, changeFrequency: "weekly" };
  if (/^\/nl\/technologie\/(hulp|tools|spatialchat)$/.test(pad)) return { priority: 0.8, changeFrequency: "monthly" };
  if (/^\/nl\/events\//.test(pad)) return { priority: 0.8, changeFrequency: "monthly" };
  if (/^\/nl\/(virtual-office|games-tools)\//.test(pad)) return { priority: 0.7, changeFrequency: "monthly" };
  if (pad === "/en/blog") return { priority: 0.8, changeFrequency: "weekly" };
  if (/^\/en\//.test(pad)) return { priority: 0.6, changeFrequency: "monthly" };
  if (/^\/(nl|en)\/blog\//.test(pad)) return { priority: 0.6, changeFrequency: "yearly" };
  if (/^\/nl\/(privacy-statement|cookieverklaring)$/.test(pad)) return { priority: 0.3, changeFrequency: "yearly" };
  return { priority: 0.6, changeFrequency: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paden = new Set<string>();

  for (const route of statischeRoutes()) {
    if (OVERSLAAN.some((r) => r.test(route))) continue;
    if (NIET_INDEXEREN.has(route)) continue;
    paden.add(route);
  }

  for (const e of eventFormats) paden.add(`/nl/events/${e.slug}`);
  for (const p of POSTS) paden.add(`/nl/blog/${p.slug}`);
  // Elke Nederlandse pagina die een Engelse tegenhanger heeft, hoort er ook
  // in te staan. lib/talen.ts weet welke dat zijn.
  for (const pad of [...paden]) {
    const en = engelsPad(pad);
    if (en) paden.add(en);
  }
  paden.add("/en/blog");
  for (const p of POSTS_EN) paden.add(`/en/blog/${p.slug}`);
  for (const t of ["zoom", "teams", "zoom-events"]) paden.delete(`/nl/technologie/${t}`);

  return [...paden]
    .sort()
    .map((pad) => ({ url: `${BASE}${pad}`, ...gewicht(pad) }));
}

// Bouwt app/nl/events/[slug]/tekst-en.ts uit de losse vertaalbestanden.
// Zo kan de vertaling in stukken groeien zonder handwerk in de code.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const MAP = "/private/tmp/claude-501/-Users-emilievanrappard/4da308e1-f28d-4ad3-a632-d535c7e29365/scratchpad/";
const alles = {};
for (const f of readdirSync(MAP).filter((f) => /^ev-\d+\.json$/.test(f)).sort()) {
  Object.assign(alles, JSON.parse(readFileSync(MAP + f, "utf8")));
}

const slugs = [];
const tekst = {};
for (const [nl, o] of Object.entries(alles)) {
  const { enSlug, ...rest } = o;
  if (!enSlug) throw new Error(`${nl} mist enSlug`);
  slugs.push([nl, enSlug]);
  tekst[nl] = rest;
}

const uit = `import type { EventData } from "./data";

/**
 * De Engelse teksten van de eventpagina's. Alleen tekst: beeld, icoon, kleur en
 * structuur staan in data.ts en zijn taalloos.
 *
 * Wat hier niet in staat, is nog niet vertaald. Zo'n event valt dan terug op
 * het Nederlands en staat niet in de lijst met vertaalde pagina's in
 * lib/talen.ts — de taalschakelaar toont daar dus geen Engelse link.
 *
 * Dit bestand wordt gegenereerd; pas de vertaling aan in de bronbestanden.
 */
export const EVENT_TEKST_EN: Record<string, Partial<EventData>> = ${JSON.stringify(tekst, null, 2)};

/**
 * De Engelse adressen van de eventpagina's. Een adres is leesbare tekst, dus
 * /en/events/strategy-day en niet /en/events/strategiedagen.
 */
const SLUGS: Array<[nl: string, en: string]> = ${JSON.stringify(slugs, null, 2)};

export function engelseEventSlug(nl: string): string | undefined {
  return SLUGS.find(([n]) => n === nl)?.[1];
}

export function nederlandseEventSlug(en: string): string | undefined {
  return SLUGS.find(([, e]) => e === en)?.[0];
}

/** Alle events die in het Engels bestaan, als [nl, en]. */
export const VERTAALDE_EVENTS = SLUGS;
`;
writeFileSync("app/nl/events/[slug]/tekst-en.ts", uit);
console.log(slugs.length, "events vertaald:", slugs.map(([n]) => n).join(", "));

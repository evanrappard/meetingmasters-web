/**
 * De tweetaligheid van de site op één plek.
 *
 * ── Hoe je een pagina vertaalt ──
 * 1. Haal de teksten uit de pagina naar een `T`-object met `nl` en `en`, of
 *    geef het component een `taal`-prop als het er al een heeft.
 * 2. Maak `app/en/<engelse-route>/page.tsx` die hetzelfde component rendert
 *    met `taal="en"`.
 * 3. Zet het paar hieronder in PAREN.
 *
 * Staat een route niet in PAREN, dan toont de taalschakelaar de andere taal
 * grijs in plaats van als link. Dat is eerlijker dan een link die op een 404
 * uitkomt of je op een willekeurige andere pagina dumpt.
 *
 * ── Waarom de adressen verschillen ──
 * Het Engelse adres is Engels: `/nl/offerte` wordt `/en/quote`, niet
 * `/en/offerte`. Een adres is leesbare tekst — voor de bezoeker die het in de
 * balk ziet staan en voor de zoekmachine die erop zoekt.
 */

import { VERTAALDE_EVENTS } from "@/app/nl/events/[slug]/tekst-en";

export type Taal = "nl" | "en";

/**
 * Alle pagina's die in beide talen bestaan, als [Nederlands, Engels] zonder
 * taaldeel vooraan. Deze lijst is de voortgangsmeter van de vertaling: wat er
 * niet in staat, is nog niet vertaald.
 */
const PAREN: Array<[nl: string, en: string]> = [
  ["/home", "/home"],

  // ── Blog ──
  ["/blog", "/blog"],
  ["/blog/terug-naar-kantoor", "/blog/back-to-the-office"],
  ["/blog/niet-hetzelfde-wel-goed", "/blog/not-the-same-still-good"],
  ["/blog/heen-en-weer", "/blog/back-and-forth"],
  ["/blog/online-beheersen", "/blog/we-have-online-covered"],
  ["/blog/wat-gamers-weten", "/blog/what-gamers-know"],
  ["/blog/rondjes-versus-vierkantjes", "/blog/circles-versus-squares"],
  ["/blog/systeemwoede", "/blog/system-rage"],
  ["/blog/ai-paradox", "/blog/the-ai-paradox"],
  ["/blog/acht-grens", "/blog/the-rule-of-eight"],
  ["/blog/stok-om-mee-te-slaan", "/blog/a-stick-to-beat-it-with"],
  ["/blog/olympiers", "/blog/an-online-home-for-olympians"],

  // ── Contact en formulieren ──
  ["/contact", "/contact"],
  ["/demo", "/demo"],
  ["/offerte", "/quote"],
  ["/boeken", "/booking"],
  ["/nieuwsbrief", "/newsletter"],
  ["/expert-advies", "/expert-advice"],
  ["/testimonials", "/testimonials"],
  ["/about", "/about"],
  ["/games-tools", "/games-tools"],
  ["/downloads", "/downloads"],
  ["/meeting-calculator", "/meeting-calculator"],
  ["/games-tools/ravenhack", "/games-tools/ravenhack"],
  ["/games-tools/tools/inspiration-cards", "/games-tools/tools/inspiration-cards"],
  ["/games-tools/tools/bingo", "/games-tools/tools/bingo"],
  ["/games-tools/tools/storytelling", "/games-tools/tools/storytelling"],
  ["/games-tools/tools/wheel-of-fortune", "/games-tools/tools/wheel-of-fortune"],

  // ── Events ──
  ["/events", "/events"],

  // ── Technologie ──
  // Het Engelse adres is korter: "tech help" is waar een Engelse bezoeker op
  // zoekt, niet "technology/help".
  ["/technologie/hulp", "/help"],
  ["/technologie/spatialchat", "/spatialchat"],
  ["/technologie/tools", "/platforms"],

  // ── Virtueel Kantoor ──
  ["/virtual-office", "/virtual-office"],
  ["/virtual-office/zaaltje", "/virtual-office/meeting-room"],
  ["/virtual-office/huren", "/virtual-office/rent"],
  ["/virtual-office/kantoor-cultuur", "/virtual-office/office-and-culture"],
];

/**
 * De eventpagina's komen uit hun eigen vertaalbestand, zodat er maar één plek
 * is waar staat welke events vertaald zijn. Vertaal je een event, dan hoef je
 * hier niets aan te passen.
 */
const EVENT_PAREN: Array<[string, string]> = VERTAALDE_EVENTS.map(
  ([nl, en]) => [`/events/${nl}`, `/events/${en}`]
);

const ALLE_PAREN = [...PAREN, ...EVENT_PAREN];
const NAAR_EN = new Map(ALLE_PAREN);
const NAAR_NL = new Map(ALLE_PAREN.map(([nl, en]) => [en, nl]));

/** De taal die bij dit adres hoort. Alles buiten /en is Nederlands. */
export function taalVanPad(pad: string): Taal {
  return pad === "/en" || pad.startsWith("/en/") ? "en" : "nl";
}

/** Het adres zonder taaldeel: `/nl/contact` wordt `/contact`. */
export function zonderTaal(pad: string): string {
  return pad.replace(/^\/(nl|en)(?=\/|$)/, "") || "/";
}

/**
 * Dit adres in de andere taal, of `null` als die pagina er nog niet is.
 *
 * `null` is het belangrijke deel: de schakelaar mag niet doen alsof er een
 * vertaling is die er niet is.
 */
export function anderTaalPad(pad: string): string | null {
  const taal = taalVanPad(pad);
  const kaal = zonderTaal(pad).replace(/#.*$/, "");
  const doel = taal === "nl" ? NAAR_EN.get(kaal) : NAAR_NL.get(kaal);
  return doel ? `/${taal === "nl" ? "en" : "nl"}${doel}` : null;
}

/** Het Engelse adres bij een Nederlandse route, voor menu en hreflang. */
export function engelsPad(nlPad: string): string | undefined {
  const en = NAAR_EN.get(zonderTaal(nlPad).replace(/#.*$/, ""));
  return en ? `/en${en}` : undefined;
}

/** Het Nederlandse adres bij een Engelse route. */
export function nederlandsPad(enPad: string): string | undefined {
  const nl = NAAR_NL.get(zonderTaal(enPad).replace(/#.*$/, ""));
  return nl ? `/nl${nl}` : undefined;
}

/** Hoeveel pagina's staan er inmiddels in beide talen? */
export const VERTAALD_AANTAL = ALLE_PAREN.length;

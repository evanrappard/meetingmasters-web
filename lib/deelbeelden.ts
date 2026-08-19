/**
 * Het beeld dat verschijnt als iemand een pagina deelt op LinkedIn, in een
 * mail of in een chat.
 *
 * Zonder dit kreeg elke pagina hetzelfde algemene beeld, en zag een gedeelde
 * link naar de strategiedag er precies zo uit als een link naar de homepage.
 * Nu deelt elke pagina zijn eigen hero.
 *
 * De adressen hieronder wijzen naar `public/images/share/`. Die bestanden zijn
 * 1200×630 jpg — het formaat dat LinkedIn en Facebook verwachten. Ze worden
 * gemaakt met `node scripts/deelbeelden-maken.mjs` uit de hero's zelf; draai
 * dat script opnieuw als er een hero verandert.
 *
 * Waarom jpg en niet de webp van de hero zelf: LinkedIn gaat niet betrouwbaar
 * om met webp en laat dan een leeg vlak zien.
 */

import { zonderTaal } from "./talen";

const SITE = "https://www.meetingmasters.online";

/** Route zonder taaldeel → bronbeeld in `public/`. */
export const HERO_PER_ROUTE: Record<string, string> = {
  "/home": "/images/home-hero-poster.jpg",
  "/events": "/images/events-hero-poster.jpg",
  "/virtual-office": "/images/vo-hero-office.jpg",
  "/virtual-office/zaaltje": "/images/vo-zaaltje-v2.webp",
  "/virtual-office/huren": "/images/vo-huren-v2.webp",
  "/virtual-office/kantoor-cultuur": "/images/vo-fundament-v2.webp",
  "/games-tools": "/images/games-hero-v5.jpg",
  "/games-tools/ravenhack": "/images/ravenhack-hero.webp",
  "/about": "/images/about-hero.webp",
  "/downloads": "/images/downloads-hero.webp",
  "/technologie/spatialchat": "/images/spatialchat-hero-v3.webp",
  "/technologie/tools": "/images/platforms-hero-v2.webp",
  "/technologie/hulp": "/images/tech-hulp-hero-poster.jpg",
  "/blog": "/images/blog/blog-hero.webp",
};

/** Van bronbeeld naar de naam van het deelbeeld. */
export function deelBeeldNaam(bron: string): string {
  // Submappen worden platgeslagen: /images/blog/blog-hero.webp wordt
  // blog-blog-hero.jpg, zodat alles in één map staat.
  return (
    bron
      .replace(/^\/images\//, "")
      .replace(/\//g, "-")
      .replace(/\.(webp|jpg|jpeg|png)$/, "") + ".jpg"
  );
}

/**
 * Het volledige adres van het deelbeeld bij een route, of `undefined` als die
 * route er geen eigen beeld heeft — dan valt Next terug op het algemene beeld
 * uit `app/opengraph-image.png`.
 */
export function deelBeeld(pad: string): string | undefined {
  const bron = HERO_PER_ROUTE[zonderTaal(pad)];
  return bron ? `${SITE}/images/share/${deelBeeldNaam(bron)}` : undefined;
}

/** Hetzelfde, maar rechtstreeks vanaf een bronbeeld (voor de eventpagina's). */
export function deelBeeldVanBron(bron: string): string {
  return `${SITE}/images/share/${deelBeeldNaam(bron)}`;
}

/** Voor `openGraph.images` in de metadata: compleet met afmetingen. */
export function ogBeeld(url: string, alt: string) {
  return [{ url, width: 1200, height: 630, alt }];
}

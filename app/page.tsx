import { permanentRedirect } from "next/navigation";

/**
 * De homepage staat op /nl/home; dit adres verwijst er alleen naar door.
 *
 * Let op de `permanent`: met het gewone `redirect()` stuurt Next een 307
 * (tijdelijk). Google leest dat als "het origineel blijft /" en koos daarom
 * ook / als canonical, terwijl /nl/home zelf naar /nl/home wijst. Dat gaf in
 * Search Console "Duplicate, Google chose different canonical than user" op de
 * belangrijkste pagina van de site. Met 308 is de verhuizing definitief en telt
 * /nl/home als het echte adres.
 */
export default function RootPage() {
  permanentRedirect("/nl/home");
}

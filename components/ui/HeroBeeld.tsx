import Image, { type ImageProps } from "next/image";
import { vervaging } from "@/lib/hero-vervaging";

/**
 * Het beeld van een hero, met een vervaagde miniatuur eronder.
 *
 * Een hero is een groot bestand. Zolang dat onderweg is, is het vlak leeg, en
 * omdat de pagina wit is zag je een witte flits — precies op de plek waar je
 * het eerst kijkt. Deze component zet er een miniatuur van 20 pixels breed
 * achter, vervaagd uitgerekt door de browser. Die staat er meteen, in de goede
 * kleuren, en verdwijnt zodra het echte beeld eroverheen valt.
 *
 * De miniaturen worden gemaakt met `node scripts/hero-vervagingen.mjs` en staan
 * in `lib/hero-vervaging.ts`. Ze wegen zo'n 200 bytes per stuk en reizen mee in
 * de pagina zelf, dus er komt geen extra verzoek bij.
 *
 * **Dit is een servercomponent.** Gebruik hem niet in een bestand met
 * "use client": dan gaat de hele lijst met miniaturen mee naar de browser in
 * plaats van het ene regeltje dat die pagina nodig heeft.
 *
 * Staat er (nog) geen miniatuur voor een beeld, dan valt de component terug op
 * een donkere ondergrond. Ook dan zie je geen wit.
 */
export default function HeroBeeld({ src, style, ...rest }: ImageProps) {
  const mini = typeof src === "string" ? vervaging(src) : undefined;

  return (
    <Image
      src={src}
      {...rest}
      {...(mini ? { placeholder: "blur" as const, blurDataURL: mini } : {})}
      style={mini ? style : { backgroundColor: "#2D2D2D", ...style }}
    />
  );
}

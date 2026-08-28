import Image, { type ImageProps } from "next/image";

/**
 * Het beeld van een hero.
 *
 * Eén ding doet dit component dat `next/image` niet doet: het zet een donkere
 * ondergrond onder het beeld. Zolang de hero onderweg is, was dat vlak wit —
 * precies op de plek waar je het eerst kijkt.
 *
 * Bewust géén vervaagde miniatuur (`placeholder="blur"`). Dat vulde het wit wel
 * op, maar je zag de hero dan zachtjes scherp worden in plaats van er gewoon te
 * staan. Een donkere ondergrond valt niet op als het beeld snel is, en is
 * rustiger als het even duurt.
 *
 * Wil je dat de hero echt meteen staat, dan zit de winst in het gewicht van het
 * bestand, niet in wat eronder ligt. Zie docs/website-visuals.md.
 */
export default function HeroBeeld({ style, ...rest }: ImageProps) {
  return <Image {...rest} style={{ backgroundColor: "#2D2D2D", ...style }} />;
}

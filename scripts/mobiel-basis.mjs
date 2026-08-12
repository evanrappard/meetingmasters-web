import { networkInterfaces } from "node:os";

/**
 * Standaard testen we tegen het netwerk-IP, niet tegen localhost — want zo
 * bekijkt Emilie de site op haar telefoon.
 *
 * Dat verschil is een keer duur geweest: Next 16 blokkeert in ontwikkelmodus
 * verzoeken naar /_next/* die van een ander origin komen. Via localhost merk
 * je daar niets van; via het netwerk-IP kreeg élk JavaScript-bestand een 403.
 * De pagina zag er goed uit, maar er draaide niets — geen menu, geen
 * cookiebanner. Alle tests slaagden, omdat ze op het verkeerde adres keken.
 *
 * (De blokkade zelf is opgelost via `allowedDevOrigins` in next.config.ts.
 * Hier standaard op het netwerk-IP testen zodat een volgende variant van dit
 * soort fouten meteen opvalt.)
 */
export function standaardBasis(poort = 3000) {
  const adres = Object.values(networkInterfaces())
    .flat()
    .find((net) => net?.family === "IPv4" && !net.internal)?.address;
  return `http://${adres ?? "localhost"}:${poort}`;
}

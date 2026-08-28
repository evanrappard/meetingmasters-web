/**
 * Kortingscodes.
 *
 * Dit draait alleen op de server. De lijst met codes zit dus niet in de
 * JavaScript die bezoekers binnenhalen — anders kon iedereen die openslaan en
 * de codes eruit lezen.
 *
 * Het percentage staat niet apart in de lijst maar zit ín de code: de cijfers
 * aan het eind zijn het kortingspercentage. "EscapeMasters20" is 20 procent.
 * Dat scheelt een veld dat uit de pas kan lopen met wat er in de campagne staat.
 */

import codes from "@/config/kortingscodes.json";

export type Kortingscode = { code: string; geldigTot: string; actief: boolean };

export type Kortingsoordeel =
  | { geldig: true; code: string; percentage: number }
  | { geldig: false; reden: "onbekend" | "verlopen" | "ingetrokken" | "configuratiefout" };

/** Meer dan de helft weggeven is bijna altijd een typefout in de code. */
const MAX_PERCENTAGE = 50;

export function percentageUitCode(code: string): number | null {
  const cijfers = code.trim().match(/(\d+)$/);
  if (!cijfers) return null;
  const percentage = Number(cijfers[1]);
  if (!Number.isFinite(percentage) || percentage <= 0 || percentage > MAX_PERCENTAGE) return null;
  return percentage;
}

export function beoordeelCode(ingevoerd: string, nu = new Date()): Kortingsoordeel {
  const gezocht = ingevoerd.trim().toLowerCase();
  if (!gezocht) return { geldig: false, reden: "onbekend" };

  const gevonden = (codes as Kortingscode[]).find((c) => c.code.toLowerCase() === gezocht);
  if (!gevonden) return { geldig: false, reden: "onbekend" };
  if (!gevonden.actief) return { geldig: false, reden: "ingetrokken" };

  // Geldig tot en met die dag zelf, dus we vergelijken met het einde ervan.
  const eind = new Date(`${gevonden.geldigTot}T23:59:59`);
  if (!Number.isFinite(eind.getTime())) {
    console.error(`Kortingscode ${gevonden.code} heeft een onleesbare datum: ${gevonden.geldigTot}`);
    return { geldig: false, reden: "configuratiefout" };
  }
  if (nu > eind) return { geldig: false, reden: "verlopen" };

  const percentage = percentageUitCode(gevonden.code);
  if (percentage === null) {
    console.error(
      `Kortingscode ${gevonden.code} eindigt niet op een bruikbaar percentage; de code is afgewezen.`
    );
    return { geldig: false, reden: "configuratiefout" };
  }

  return { geldig: true, code: gevonden.code, percentage };
}

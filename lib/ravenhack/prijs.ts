/**
 * De prijsberekening van R@venHack.
 *
 * Dit bestand draait zowel in de browser (de calculator rekent live mee) als
 * op de server (de kortingscontrole). Daarom staat er niets in dat alleen in
 * een browser bestaat.
 *
 * De regels:
 *
 *   basis      = basisprijs + max(0, deelnemers − 12) × prijs per extra deelnemer
 *   subtotaal  = avond of weekend ? basis × 1,20 : basis
 *   totaal     = subtotaal − (subtotaal × kortingspercentage / 100)
 *   btw        = totaal × 0,21
 *
 * Er wordt pas bij het tonen afgerond, niet tussendoor.
 */

import {
  BTW_PERCENTAGE,
  TOESLAG,
  VARIANTEN,
  type SpelTaal,
  type VariantSleutel,
} from "@/config/ravenhack";

export type Prijsinvoer = {
  variant: VariantSleutel;
  deelnemers: number;
  /** "2026-09-12", leeg als er nog geen datum gekozen is. */
  datum?: string;
  /** "14:30", leeg als er nog geen tijd gekozen is. */
  tijd?: string;
  kortingspercentage?: number;
  kortingscode?: string;
};

/**
 * Wat er met dit aantal deelnemers aan de hand is.
 *
 *  ok             — gewoon rekenen en tonen
 *  onder-minimum  — prijs tonen, met de melding dat het spel vanaf 5 gaat
 *  overleg        — prijs tonen, met het verzoek om te overleggen (vanaf 100)
 *  te-groot       — geen prijs; alleen de vraag om te overleggen (boven 150)
 *  quick-te-groot — geen prijs; de Quick gaat niet boven 30, verwijs naar Experience
 */
export type Deelnemersstatus = "ok" | "onder-minimum" | "overleg" | "te-groot" | "quick-te-groot";

export type Prijs = {
  status: Deelnemersstatus;
  /** false bij te-groot en quick-te-groot: dan tonen we geen bedrag. */
  toonPrijs: boolean;
  basisprijs: number;
  extraDeelnemers: number;
  extraBedrag: number;
  basis: number;
  toeslagToegepast: boolean;
  toeslagBedrag: number;
  subtotaal: number;
  kortingspercentage: number;
  kortingsbedrag: number;
  totaalExclBtw: number;
  btwBedrag: number;
  totaalInclBtw: number;
};

export function bepaalStatus(variant: VariantSleutel, deelnemers: number): Deelnemersstatus {
  const v = VARIANTEN[variant];
  if (deelnemers > v.maxDeelnemers) {
    return variant === "quick" ? "quick-te-groot" : "te-groot";
  }
  if (deelnemers < v.minDeelnemers) return "onder-minimum";
  if (v.overlegVanaf !== null && deelnemers >= v.overlegVanaf) return "overleg";
  return "ok";
}

/**
 * Geldt er een toeslag? Ja bij een start om 19:00 of later, en ja in het
 * weekend. Zonder datum én tijd weten we het nog niet, en rekenen we niets.
 *
 * De datum wordt gelezen als kalenderdatum, niet als moment in de tijd: op een
 * server die in UTC draait zou `new Date("2026-09-12")` anders zomaar een dag
 * verschuiven.
 */
export function geldtToeslag(datum?: string, tijd?: string): boolean {
  if (!datum) return false;
  const [jaar, maand, dag] = datum.split("-").map(Number);
  if (!jaar || !maand || !dag) return false;
  const weekdag = new Date(jaar, maand - 1, dag).getDay();
  if (TOESLAG.weekenddagen.includes(weekdag)) return true;
  if (!tijd) return false;
  const uur = Number(tijd.split(":")[0]);
  return Number.isFinite(uur) && uur >= TOESLAG.avondVanafUur;
}

export function berekenPrijs(invoer: Prijsinvoer): Prijs {
  const v = VARIANTEN[invoer.variant];
  const status = bepaalStatus(invoer.variant, invoer.deelnemers);
  const toonPrijs = status !== "te-groot" && status !== "quick-te-groot";

  // Onder het inbegrepen aantal blijft de basisprijs staan, ook bij 5 personen.
  const extraDeelnemers = Math.max(0, invoer.deelnemers - v.inbegrepenDeelnemers);
  const extraBedrag = extraDeelnemers * v.prijsPerExtraDeelnemer;
  const basis = v.basisprijs + extraBedrag;

  const toeslagToegepast = geldtToeslag(invoer.datum, invoer.tijd);
  const toeslagBedrag = toeslagToegepast ? (basis * TOESLAG.percentage) / 100 : 0;
  const subtotaal = basis + toeslagBedrag;

  // Korting gaat over het bedrag inclusief een eventuele toeslag.
  const kortingspercentage = invoer.kortingspercentage ?? 0;
  const kortingsbedrag = (subtotaal * kortingspercentage) / 100;
  const totaalExclBtw = subtotaal - kortingsbedrag;

  const btwBedrag = (totaalExclBtw * BTW_PERCENTAGE) / 100;

  return {
    status,
    toonPrijs,
    basisprijs: v.basisprijs,
    extraDeelnemers,
    extraBedrag,
    basis,
    toeslagToegepast,
    toeslagBedrag,
    subtotaal,
    kortingspercentage,
    kortingsbedrag,
    totaalExclBtw,
    btwBedrag,
    totaalInclBtw: totaalExclBtw + btwBedrag,
  };
}

/**
 * Bedragen in de notatie van de taal: € 1.234,50 in het Nederlands,
 * € 1,234.50 in het Engels. Altijd twee decimalen, ook bij ronde bedragen —
 * dat leest als een prijs in plaats van als een schatting.
 */
export function bedrag(waarde: number, taal: SpelTaal = "nl"): string {
  const getal = new Intl.NumberFormat(taal === "en" ? "en-GB" : "nl-NL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.round(waarde * 100) / 100);
  return `€ ${getal}`;
}

/**
 * De prijsopbouw als leesbare regels — hetzelfde lijstje dat je op het scherm
 * ziet, en dat als tekst met de aanvraag meegaat naar HubSpot.
 */
export function prijsopbouwRegels(
  prijs: Prijs,
  invoer: Prijsinvoer,
  taal: SpelTaal,
  teksten: {
    basis: string;
    extra: string;
    toeslag: string;
    korting: string;
    totaal: string;
  }
): { label: string; waarde: string; gelijkteken?: boolean }[] {
  const v = VARIANTEN[invoer.variant];
  const regels: { label: string; waarde: string; gelijkteken?: boolean }[] = [
    {
      label: teksten.basis
        .replace("{variant}", v.naam[taal].replace("R@venHack ", ""))
        .replace("{inbegrepen}", String(v.inbegrepenDeelnemers)),
      waarde: bedrag(prijs.basisprijs, taal),
    },
  ];
  if (prijs.extraDeelnemers > 0) {
    regels.push({
      label: teksten.extra
        .replace("{aantal}", String(prijs.extraDeelnemers))
        .replace("{prijs}", bedrag(v.prijsPerExtraDeelnemer, taal)),
      waarde: bedrag(prijs.extraBedrag, taal),
      // "8 × € 25,00 = € 200,00" leest beter dan datzelfde met een dubbele punt.
      gelijkteken: true,
    });
  }
  if (prijs.toeslagToegepast) {
    regels.push({ label: teksten.toeslag, waarde: bedrag(prijs.toeslagBedrag, taal) });
  }
  if (prijs.kortingspercentage > 0) {
    regels.push({
      label: teksten.korting
        .replace("{code}", invoer.kortingscode ?? "")
        .replace("{percentage}", String(prijs.kortingspercentage)),
      waarde: `− ${bedrag(prijs.kortingsbedrag, taal)}`,
    });
  }
  regels.push({ label: teksten.totaal, waarde: bedrag(prijs.totaalExclBtw, taal) });
  return regels;
}

/** Dezelfde opbouw als platte tekst, voor het verborgen veld in HubSpot. */
export function prijsopbouwTekst(
  prijs: Prijs,
  invoer: Prijsinvoer,
  taal: SpelTaal,
  teksten: Parameters<typeof prijsopbouwRegels>[3]
): string {
  return prijsopbouwRegels(prijs, invoer, taal, teksten)
    .map((r) => `${r.label}${r.gelijkteken ? " =" : ":"} ${r.waarde}`)
    .join("\n");
}

// ── Het boekingsvenster ────────────────────────────────────────────────────

/** Datum als "2026-09-12", in lokale tijd. */
export function alsDatumtekst(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * De vroegste datum die geboekt kan worden: drie werkdagen vanaf vandaag.
 * Werkdagen zijn maandag tot en met vrijdag; feestdagen tellen hier gewoon mee,
 * want daar houden we (nog) geen kalender voor bij.
 */
export function vroegsteDatum(vanaf: Date, werkdagen: number): Date {
  const d = new Date(vanaf.getFullYear(), vanaf.getMonth(), vanaf.getDate());
  let over = werkdagen;
  while (over > 0) {
    d.setDate(d.getDate() + 1);
    const dag = d.getDay();
    if (dag !== 0 && dag !== 6) over--;
  }
  return d;
}

export function laatsteDatum(vanaf: Date, maanden: number): Date {
  const d = new Date(vanaf.getFullYear(), vanaf.getMonth(), vanaf.getDate());
  d.setMonth(d.getMonth() + maanden);
  return d;
}

/**
 * Past de sessie nog vóór sluitingstijd? De laatste starttijd hangt af van hoe
 * lang het spel duurt: de Experience moet om 19:30 beginnen, de Quick om 20:00.
 */
export function laatsteStarttijd(variant: VariantSleutel, eindUur: number): string {
  const eindMinuten = eindUur * 60;
  const start = eindMinuten - VARIANTEN[variant].duurMinuten;
  return `${String(Math.floor(start / 60)).padStart(2, "0")}:${String(start % 60).padStart(2, "0")}`;
}

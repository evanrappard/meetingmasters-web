/**
 * Stuurt de bezoeker een bevestiging van zijn R@venHack-aanvraag.
 *
 * Het formulier zelf gaat rechtstreeks naar HubSpot; die kant blijft ongemoeid.
 * Zodra de bedanktekst verschijnt meldt de pagina zich hier, en dan gaat
 * dezelfde samenvatting ook per e-mail de deur uit. Waarom niet via HubSpot:
 * zie de toelichting boven `lib/mail/verzend.ts`.
 *
 * **Niets uit de browser wordt op zijn woord geloofd.** Wat er binnenkomt zijn
 * alleen de keuzes: welk spel, hoeveel mensen, welke datum en tijd, en een
 * eventuele kortingscode. De prijs rekenen we hier opnieuw uit en de
 * kortingscode beoordelen we hier opnieuw, met dezelfde functies als de rest
 * van de site. Er is dus geen veld waarin iemand een eigen tekst of een eigen
 * bedrag de mail in kan schrijven.
 *
 * Wat wel kan, is deze route aanroepen met andermans adres. Daar staat een rem
 * op: een handjevol per IP-adres en per ontvanger per tien minuten. De tellers
 * staan in het geheugen van de server en beginnen na een nieuwe versie opnieuw
 * — genoeg voor waar het hier om gaat, net als bij de kortingscodes.
 *
 * Gaat het versturen mis, dan blijft dat stil. De aanvraag staat allang in
 * HubSpot en Emilie heeft haar melding; een foutmelding op het scherm zou de
 * bezoeker alleen maar laten denken dat zijn aanvraag niet is aangekomen.
 */

import { NextResponse } from "next/server";
import { VARIANTEN, type SpelTaal, type VariantSleutel } from "@/config/ravenhack";
import { beoordeelCode } from "@/lib/ravenhack/korting";
import { berekenPrijs } from "@/lib/ravenhack/prijs";
import { bouwBevestiging } from "@/lib/ravenhack/bevestigingsmail";
import { verstuurMail, verzendstand } from "@/lib/mail/verzend";
import type { Taal } from "@/lib/talen";

const VENSTER_MS = 10 * 60_000;
const MAX_PER_IP = 5;
const MAX_PER_ADRES = 2;
const tellers = new Map<string, { aantal: number; tot: number }>();

function magNog(sleutel: string, maximum: number): boolean {
  const nu = Date.now();
  const staand = tellers.get(sleutel);
  if (!staand || nu > staand.tot) {
    tellers.set(sleutel, { aantal: 1, tot: nu + VENSTER_MS });
    return true;
  }
  staand.aantal++;
  if (tellers.size > 5000) {
    for (const [k, v] of tellers) if (nu > v.tot) tellers.delete(k);
  }
  return staand.aantal <= maximum;
}

/** Niet streng volgens de norm, wel streng genoeg om onzin tegen te houden. */
const ADRES = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;

function tekst(waarde: unknown, maxLengte: number): string {
  return typeof waarde === "string" ? waarde.trim().slice(0, maxLengte) : "";
}

export async function POST(verzoek: Request) {
  const stand = verzendstand();
  if (!stand.klaar) {
    // Nog niet ingesteld: geen fout, er gebeurt alleen niets.
    return NextResponse.json({ verstuurd: false, reden: stand.reden });
  }

  const ip =
    verzoek.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    verzoek.headers.get("x-real-ip") ||
    "onbekend";

  if (!magNog(`ip:${ip}`, MAX_PER_IP)) {
    return NextResponse.json({ verstuurd: false, reden: "te-vaak" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await verzoek.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ verstuurd: false, reden: "onleesbaar" }, { status: 400 });
  }

  const email = tekst(body.email, 200).toLowerCase();
  if (!ADRES.test(email)) {
    return NextResponse.json({ verstuurd: false, reden: "geen-adres" }, { status: 400 });
  }
  if (!magNog(`adres:${email}`, MAX_PER_ADRES)) {
    return NextResponse.json({ verstuurd: false, reden: "te-vaak" }, { status: 429 });
  }

  const taal: Taal = body.taal === "en" ? "en" : "nl";
  const spelTaal: SpelTaal = body.spelTaal === "en" ? "en" : "nl";
  const variant = tekst(body.variant, 20) as VariantSleutel;
  if (!(variant in VARIANTEN)) {
    return NextResponse.json({ verstuurd: false, reden: "geen-variant" }, { status: 400 });
  }

  const deelnemers = Math.round(Number(body.deelnemers));
  if (!Number.isFinite(deelnemers) || deelnemers < 1 || deelnemers > 1000) {
    return NextResponse.json({ verstuurd: false, reden: "geen-aantal" }, { status: 400 });
  }

  const datum = /^\d{4}-\d{2}-\d{2}$/.test(tekst(body.datum, 10)) ? tekst(body.datum, 10) : "";
  const tijd = /^\d{2}:\d{2}$/.test(tekst(body.tijd, 5)) ? tekst(body.tijd, 5) : "";

  // De korting hier opnieuw beoordelen, niet overnemen uit de browser.
  const oordeel = beoordeelCode(tekst(body.kortingscode, 40));
  const kortingspercentage = oordeel.geldig ? oordeel.percentage : 0;

  const prijs = berekenPrijs({ variant, deelnemers, datum, tijd, kortingspercentage });

  const mail = bouwBevestiging({
    taal,
    voornaam: tekst(body.voornaam, 80),
    variant,
    spelTaal,
    deelnemers,
    datum,
    tijd,
    kortingscode: oordeel.geldig ? oordeel.code : "",
    poNummer: tekst(body.poNummer, 60),
    prijs,
  });

  try {
    await verstuurMail({
      naar: email,
      onderwerp: mail.onderwerp,
      html: mail.html,
      tekst: mail.tekst,
      antwoordNaar: "contact@meetingmasters.online",
    });
  } catch (fout) {
    console.error("[ravenhack] bevestigingsmail mislukt:", fout);
    return NextResponse.json({ verstuurd: false, reden: "mislukt" }, { status: 502 });
  }

  return NextResponse.json({ verstuurd: true });
}

/**
 * Alleen buiten productie: de mail bekijken zonder hem te versturen.
 *
 *   http://localhost:3000/api/ravenhack/bevestiging?taal=nl
 *
 * Met `?tekst=1` krijg je de platte versie, en met `?taal=en` de Engelse. De
 * getallen zijn een voorbeeldsessie; het gaat om de vorm.
 */
export async function GET(verzoek: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ fout: "niet beschikbaar" }, { status: 404 });
  }

  const vraag = new URL(verzoek.url).searchParams;
  const taal: Taal = vraag.get("taal") === "en" ? "en" : "nl";
  const deelnemers = Number(vraag.get("deelnemers")) || 20;
  const variant: VariantSleutel = vraag.get("variant") === "quick" ? "quick" : "experience";
  const datum = vraag.get("datum") ?? "2026-10-17";
  const tijd = vraag.get("tijd") ?? "19:30";

  const prijs = berekenPrijs({ variant, deelnemers, datum, tijd, kortingspercentage: 10 });
  const mail = bouwBevestiging({
    taal,
    voornaam: taal === "nl" ? "Sanne" : "Sam",
    variant,
    spelTaal: taal,
    deelnemers,
    datum,
    tijd,
    kortingscode: "Najaar10",
    poNummer: "PO-2026-0148",
    prijs,
  });

  if (vraag.get("tekst")) {
    return new Response(`${mail.onderwerp}\n\n${mail.tekst}`, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new Response(mail.html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

/**
 * Controleert een kortingscode. De enige serverkant die de R@venHack-modules
 * nodig hebben: de calculator rekent verder helemaal in de browser en het
 * boekingsformulier gaat rechtstreeks naar HubSpot.
 *
 * Waarom niet in de browser? Dan zou de lijst met codes meegeleverd worden met
 * de pagina, en kan iedereen die uitlezen.
 *
 * Er zit een eenvoudige rem op: wie blijft proberen, kan codes raden. Vijftien
 * pogingen per minuut per IP-adres is ruim voor een mens en te weinig om een
 * lijst af te grazen. De teller staat in het geheugen van de server; na een
 * nieuwe versie begint hij opnieuw. Dat is genoeg voor waar het hier om gaat.
 */

import { NextResponse } from "next/server";
import { beoordeelCode } from "@/lib/ravenhack/korting";

const VENSTER_MS = 60_000;
const MAX_POGINGEN = 15;
const tellers = new Map<string, { aantal: number; tot: number }>();

function magNog(sleutel: string): boolean {
  const nu = Date.now();
  const staand = tellers.get(sleutel);
  if (!staand || nu > staand.tot) {
    tellers.set(sleutel, { aantal: 1, tot: nu + VENSTER_MS });
    return true;
  }
  staand.aantal++;
  // Oude tellers opruimen, anders groeit de kaart bij veel bezoekers door.
  if (tellers.size > 5000) {
    for (const [k, v] of tellers) if (nu > v.tot) tellers.delete(k);
  }
  return staand.aantal <= MAX_POGINGEN;
}

export async function POST(verzoek: Request) {
  const ip =
    verzoek.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    verzoek.headers.get("x-real-ip") ||
    "onbekend";

  if (!magNog(ip)) {
    return NextResponse.json({ geldig: false, reden: "te-vaak" }, { status: 429 });
  }

  let code = "";
  try {
    const body = (await verzoek.json()) as { code?: unknown };
    code = typeof body.code === "string" ? body.code : "";
  } catch {
    return NextResponse.json({ geldig: false, reden: "onbekend" }, { status: 400 });
  }

  if (code.length > 40) {
    return NextResponse.json({ geldig: false, reden: "onbekend" });
  }

  return NextResponse.json(beoordeelCode(code));
}

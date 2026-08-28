/**
 * Tijdelijke proefroute: draait de opleveringsgevallen uit de bouwopdracht af.
 * Alleen bereikbaar buiten productie. Bedoeld om lokaal te controleren, en mag
 * weg zodra de modules staan.
 */

import { NextResponse } from "next/server";
import { berekenPrijs, bedrag, laatsteStarttijd, vroegsteDatum, alsDatumtekst } from "@/lib/ravenhack/prijs";
import { beoordeelCode } from "@/lib/ravenhack/korting";
import type { VariantSleutel } from "@/config/ravenhack";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ fout: "niet beschikbaar" }, { status: 404 });
  }

  const aantallen = [5, 12, 13, 30, 31, 100, 150, 151];
  const varianten: VariantSleutel[] = ["experience", "quick"];

  const deelnemers = varianten.flatMap((variant) =>
    aantallen.map((n) => {
      const p = berekenPrijs({ variant, deelnemers: n });
      return {
        variant,
        deelnemers: n,
        status: p.status,
        prijs: p.toonPrijs ? bedrag(p.totaalExclBtw) : "—",
      };
    })
  );

  const momenten = [
    { naam: "zaterdag 10:00", datum: "2026-09-12", tijd: "10:00" },
    { naam: "zondag 14:00", datum: "2026-09-13", tijd: "14:00" },
    { naam: "dinsdag 19:00", datum: "2026-09-15", tijd: "19:00" },
    { naam: "dinsdag 18:30", datum: "2026-09-15", tijd: "18:30" },
    { naam: "dinsdag 09:00", datum: "2026-09-15", tijd: "09:00" },
  ].map((m) => {
    const p = berekenPrijs({ variant: "experience", deelnemers: 12, datum: m.datum, tijd: m.tijd });
    return { ...m, toeslag: p.toeslagToegepast, totaal: bedrag(p.totaalExclBtw) };
  });

  const codes = ["EscapeMasters20", "escapemasters20", "Lente10", "Verzonnen15", ""].map((c) => ({
    code: c || "(leeg)",
    oordeel: beoordeelCode(c),
  }));

  const voorbeeldUitOpdracht = berekenPrijs({
    variant: "experience",
    deelnemers: 20,
    datum: "2026-09-15",
    tijd: "19:00",
    kortingspercentage: 10,
    kortingscode: "Lente10",
  });

  return NextResponse.json(
    {
      deelnemers,
      momenten,
      codes,
      venster: {
        vroegste: alsDatumtekst(vroegsteDatum(new Date(), 3)),
        laatsteStartExperience: laatsteStarttijd("experience", 21),
        laatsteStartQuick: laatsteStarttijd("quick", 21),
      },
      voorbeeldUitOpdracht: {
        basis: bedrag(voorbeeldUitOpdracht.basis),
        toeslag: bedrag(voorbeeldUitOpdracht.toeslagBedrag),
        korting: bedrag(voorbeeldUitOpdracht.kortingsbedrag),
        totaalExclBtw: bedrag(voorbeeldUitOpdracht.totaalExclBtw),
        totaalInclBtw: bedrag(voorbeeldUitOpdracht.totaalInclBtw),
      },
    },
    { status: 200 }
  );
}

"use client";

import { useMemo } from "react";
import Link from "next/link";
import HubSpotForm from "@/components/ui/HubSpotForm";
import Disclaimer from "./Disclaimer";
import type { Keuze } from "./Calculator";
import {
  ADVIES_LINK,
  BOEKINGSFORMULIER,
  FORMULIERVELDEN,
  TEKST,
  VARIANTEN,
} from "@/config/ravenhack";
import { HUBSPOT_PORTAL_ID } from "@/lib/hubspot-forms";
import { bedrag, berekenPrijs, prijsopbouwTekst } from "@/lib/ravenhack/prijs";
import type { Taal } from "@/lib/talen";

/**
 * Het boekingsformulier.
 *
 * Het formulier zelf is een gewoon HubSpot-formulier, net als de andere op de
 * site: HubSpot bewaart de gegevens, koppelt ze aan een bestaand contact en
 * stuurt de melding. Wat de bezoeker hierboven koos, gaat mee in verborgen
 * velden.
 *
 * Let op: die verborgen velden staan in de pagina en zijn dus in principe aan
 * te passen. Dat is geen probleem omdat de prijs hier niets vastlegt — de
 * boeking geldt pas na onze bevestiging, en de offerte maken we zelf vanuit
 * HubSpot. De ingevulde keuzes zijn wat telt; het bedrag is een weergave.
 */
export default function BoekNu({
  keuze,
  taal,
  terug,
}: {
  keuze: Keuze;
  taal: Taal;
  /** Terug naar de prijs, zonder dat de keuzes kwijtraken. */
  terug: () => void;
}) {
  const t = TEKST[taal];
  const f = t.formulier;
  const prijs = berekenPrijs(keuze);
  const formId = BOEKINGSFORMULIER[taal];

  const velden = useMemo(() => {
    const opbouw = prijsopbouwTekst(prijs, keuze, taal, t.calculator.opbouw);
    return {
      [FORMULIERVELDEN.variant]: VARIANTEN[keuze.variant].naam.nl.replace("R@venHack ", ""),
      [FORMULIERVELDEN.taal]: keuze.spelTaal.toUpperCase(),
      [FORMULIERVELDEN.deelnemers]: String(keuze.deelnemers),
      [FORMULIERVELDEN.datum]: keuze.datum,
      [FORMULIERVELDEN.tijd]: keuze.tijd,
      [FORMULIERVELDEN.toeslag]: prijs.toeslagToegepast ? "Ja" : "Nee",
      [FORMULIERVELDEN.kortingscode]: keuze.kortingspercentage > 0 ? keuze.kortingscode : "",
      [FORMULIERVELDEN.kortingspercentage]: String(prijs.kortingspercentage),
      [FORMULIERVELDEN.prijsopbouw]: opbouw,
      [FORMULIERVELDEN.totaalExclBtw]: (Math.round(prijs.totaalExclBtw * 100) / 100).toFixed(2),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keuze, taal, prijs.toeslagToegepast, prijs.totaalExclBtw, prijs.kortingspercentage]);

  // Boven de bovengrens laten we niemand een aanvraag insturen: die sessie
  // vraagt eerst een gesprek, en een aanvraag met een prijs die we toch moeten
  // omgooien helpt niemand.
  if (!prijs.toonPrijs) {
    return (
      <div className="rounded-xl border border-[#E7E7E3] bg-[#F7F7F5] p-7 max-w-[640px]">
        <p className="text-[#434343] leading-relaxed mb-4">
          {prijs.status === "quick-te-groot" ? t.quickTeGroot : t.teGroot}
        </p>
        <Link
          href={ADVIES_LINK[taal]}
          className="inline-block rounded bg-[#EEBE3D] px-6 py-3 text-sm font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
        >
          {t.overlegLink} →
        </Link>
      </div>
    );
  }

  const c = t.calculator;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
      <div>
        <button
          type="button"
          onClick={terug}
          className="mb-5 text-sm font-semibold text-[#28A8AA] hover:underline"
        >
          {c.terug}
        </button>

        {/* De keuzes staan hier zichtbaar, boven de adresvelden. Ze gaan
            ongezien mee in verborgen velden, en dan wil je ze ook kunnen
            nalezen voordat je je gegevens invult. */}
        <div className="rounded-xl border border-[#E7E7E3] bg-white p-6 mb-6">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#28A8AA] mb-4">
            {f.samenvatting}
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Regel label={c.spel} waarde={VARIANTEN[keuze.variant].naam[taal]} />
            <Regel label={c.taal} waarde={keuze.spelTaal === "nl" ? "Nederlands" : "English"} />
            <Regel label={c.deelnemers} waarde={String(keuze.deelnemers)} />
            <Regel label={c.datum} waarde={keuze.datum} />
            <Regel label={c.tijd} waarde={keuze.tijd} />
            {prijs.toeslagToegepast && (
              <Regel label={c.opbouw.toeslag} waarde={bedrag(prijs.toeslagBedrag, taal)} />
            )}
            {keuze.kortingspercentage > 0 && (
              <Regel
                label={c.kortingscode}
                waarde={`${keuze.kortingscode} (${keuze.kortingspercentage}%)`}
              />
            )}
          </dl>
          <div className="mt-4 border-t border-[#E7E7E3] pt-3 flex justify-between gap-4 font-bold text-[#2D2D2D]">
            <span>{c.opbouw.totaal}</span>
            <span className="tabular-nums">{bedrag(prijs.totaalExclBtw, taal)}</span>
          </div>
        </div>

        {formId ? (
          <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formId} taal={taal} prefill={velden} />
        ) : (
          <div className="rounded-xl border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6">
            <p className="text-[#434343] leading-relaxed">{f.nogNiet}</p>
          </div>
        )}
        <Disclaimer taal={taal} />
      </div>

      {/* Wat er na het versturen gebeurt, en waar iemand aan vastzit. */}
      <aside className="rounded-xl border border-[#E7E7E3] bg-[#F7F7F5] p-6 lg:sticky lg:top-24">
        <ul className="space-y-3">
          {t.voorwaarden.map((v) => (
            <li key={v} className="text-sm text-[#434343] leading-relaxed">
              {v}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function Regel({ label, waarde }: { label: string; waarde: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-[#7A8483]">{label}</dt>
      <dd className="text-[#2D2D2D] font-semibold text-right">{waarde}</dd>
    </div>
  );
}

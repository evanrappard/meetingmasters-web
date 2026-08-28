"use client";

import { useMemo } from "react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { BOEKINGSFORMULIER, FORMULIERVELDEN, TEKST, VARIANTEN } from "@/config/ravenhack";
import { HUBSPOT_PORTAL_ID } from "@/lib/hubspot-forms";
import { berekenPrijs, prijsopbouwTekst } from "@/lib/ravenhack/prijs";
import type { Keuze } from "./Calculator";
import type { Taal } from "@/lib/talen";

/**
 * Het tweede deel van het formulier: de gegevens van de bezoeker.
 *
 * Dit staat ónder de calculator op dezelfde bladzijde, niet op een eigen stap.
 * Wie hier komt heeft zijn sessie al samengesteld en ziet die keuzes gewoon
 * boven zich staan — één formulier dat je van boven naar beneden invult.
 *
 * Het formulier zelf is een gewoon HubSpot-formulier, net als de andere op de
 * site: HubSpot bewaart de gegevens, koppelt ze aan een bestaand contact en
 * stuurt de melding. Wat er hierboven gekozen is, gaat mee in verborgen velden.
 *
 * Die verborgen velden staan in de pagina en zijn dus in principe aan te
 * passen. Dat kan geen kwaad: de prijs legt niets vast — de boeking geldt pas na
 * onze bevestiging, en de offerte maken we zelf vanuit HubSpot.
 */
export default function BoekNu({ keuze, taal }: { keuze: Keuze; taal: Taal }) {
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

  return (
    <div id="rh-boeken" className="mt-10 border-t border-[#E2E2DE] pt-9 scroll-mt-24">
      <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{f.kicker}</p>
      <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] leading-snug mb-3">{f.kop}</h3>
      <p className="text-[#434343] leading-relaxed mb-7 max-w-[640px]">{f.onder}</p>

      {formId ? (
        <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formId} taal={taal} prefill={velden} />
      ) : (
        <div className="rounded-xl border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6">
          <p className="text-[#434343] leading-relaxed">{f.nogNiet}</p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useCallback, useMemo } from "react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { BOEKINGSFORMULIER, FORMULIERVELDEN, TEKST, VARIANTEN } from "@/config/ravenhack";
import { HUBSPOT_PORTAL_ID } from "@/lib/hubspot-forms";
import { berekenPrijs, prijsopbouwTekst } from "@/lib/ravenhack/prijs";
import { FORMULIERVORM } from "@/lib/hubspot-vorm";
import type { Keuze } from "./Calculator";
import type { Taal } from "@/lib/talen";

/**
 * Het tweede deel van het formulier: de gegevens van de bezoeker.
 *
 * Bewust zonder kop, inleiding of logo. Dit is geen apart formulier maar het
 * vervolg van de velden erboven; alles wat ertussen staat onderbreekt dat
 * alleen maar.
 *
 * Het formulier zelf is een gewoon HubSpot-formulier, net als de andere op de
 * site: HubSpot bewaart de gegevens, koppelt ze aan een bestaand contact en
 * stuurt de melding. Wat er hierboven gekozen is, gaat mee in verborgen velden.
 *
 * Die verborgen velden staan in de pagina en zijn dus in principe aan te
 * passen. Dat kan geen kwaad: de prijs legt niets vast — de boeking geldt pas na
 * onze bevestiging, en de offerte maken we zelf vanuit HubSpot.
 *
 * Zodra het formulier verstuurd is, sturen we de bezoeker ook een bevestiging
 * per e-mail. Dat gaat níét via HubSpot: een e-mail daaruit is een marketing-
 * bericht en gaat alleen naar wie zich voor een nieuwsbrief heeft aangemeld,
 * terwijl een bevestiging van je eigen aanvraag iedereen hoort te bereiken. De
 * route `/api/ravenhack/bevestiging` doet het daarom zelf, en rekent de prijs
 * daar opnieuw uit — we sturen alleen de keuzes mee, geen bedragen.
 */


export default function BoekNu({ keuze, taal }: { keuze: Keuze; taal: Taal }) {
  const t = TEKST[taal];
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

  /**
   * Het formulier is de deur uit. De naam, het e-mailadres en het PO-nummer
   * komen uit de velden zelf; wat er gekozen is, staat hier al. Lukt het
   * versturen niet, dan laten we dat stil: de aanvraag staat allang in HubSpot
   * en een foutmelding zou de bezoeker alleen maar laten twijfelen.
   */
  const bijVerzonden = useCallback(
    (velden: Record<string, string>) => {
      const email = velden.email ?? "";
      if (!email) return;
      fetch("/api/ravenhack/bevestiging", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          taal,
          voornaam: velden.firstname ?? "",
          email,
          variant: keuze.variant,
          spelTaal: keuze.spelTaal,
          deelnemers: keuze.deelnemers,
          datum: keuze.datum,
          tijd: keuze.tijd,
          kortingscode: keuze.kortingspercentage > 0 ? keuze.kortingscode : "",
          poNummer: velden.rh_po_nummer ?? "",
        }),
      }).catch(() => {});
    },
    [keuze, taal]
  );

  if (!formId) {
    return (
      <div id="rh-boeken" className="mt-6 rounded-xl border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6 scroll-mt-24">
        <p className="text-[#434343] leading-relaxed">{t.formulier.nogNiet}</p>
      </div>
    );
  }

  return (
    <div id="rh-boeken" className="scroll-mt-24">
      <HubSpotForm
        portalId={HUBSPOT_PORTAL_ID}
        formId={formId}
        taal={taal}
        prefill={velden}
        stijl={FORMULIERVORM}
        bijVerzonden={bijVerzonden}
      />
    </div>
  );
}

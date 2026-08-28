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
 */

/**
 * HubSpot zet het formulier in een eigen iframe met zijn eigen opmaak. Deze
 * stijl gaat daar naar binnen, zodat de velden er hetzelfde uitzien als de
 * velden van de calculator erboven: zelfde lettertype, zelfde randen, zelfde
 * ruimte. Anders zie je halverwege de bladzijde het formulier van een ander.
 */
const VORM = `
  /* Alles in dit venstertje erft van body. Zo pakt ook de bedanktekst die
     HubSpot ná het versturen neerzet ons lettertype, en niet Times of Arial. */
  html, body {
    font-family: var(--rh-font), "Helvetica Neue", Arial, sans-serif;
    color: #434343;
    background: transparent;
  }
  body * { font-family: inherit !important; }
  .hs-form-field { margin-bottom: 1.25rem; }
  .hs-form-field > label { margin-bottom: .5rem; display: block; }
  input[type=text], input[type=email], input[type=tel], input[type=number], select, textarea {
    width: 100% !important;
    box-sizing: border-box;
    border: 1px solid #E2E2DE !important;
    border-radius: .5rem !important;
    background: #fff !important;
    padding: .75rem 1rem !important;
    font-size: 16px !important;
    color: #2D2D2D !important;
  }
  input:focus, select:focus, textarea:focus {
    outline: none !important;
    border-color: #28A8AA !important;
    box-shadow: 0 0 0 2px rgba(40,168,170,.25) !important;
  }
  .hs-button {
    border: 0 !important;
    border-radius: .25rem !important;
    padding: .85rem 1.75rem !important;
    font-weight: 700 !important;
    cursor: pointer;
  }
  .hs-button:hover { background: #D4A835 !important; }
  .hs-error-msg, .hs-error-msgs label { color: #C64A60 !important; font-size: 14px !important; }
  .legal-consent-container { margin-top: 1.25rem; }

  /* De bedanktekst na het versturen. Zonder dit is het een kale regel op een
     wit vlak, in het lettertype van HubSpot. */
  .submitted-message {
    border: 1px solid #E7E7E3;
    border-left: 4px solid #EEBE3D;
    border-radius: .75rem;
    background: #FFFBEE;
    padding: 1.5rem 1.75rem;
    font-size: 17px;
    line-height: 1.6;
    color: #2D2D2D;
  }
  .submitted-message p { margin: 0; }
`;

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
        stijl={VORM}
      />
    </div>
  );
}

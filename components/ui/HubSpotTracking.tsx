"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { leesKeuze, TOESTEMMING_EVENT, type CookieKeuze } from "@/lib/cookie-toestemming";
import { HUBSPOT_PORTAL_ID, HUBSPOT_REGION } from "@/lib/hubspot-forms";
import { zetHubSpotTracking } from "@/lib/hubspot-toestemming";

/**
 * De algemene trackingcode van HubSpot — alleen ná toestemming.
 *
 * Dit is het script dat HubSpot zelf "de tracking code" noemt. Het doet iets
 * anders dan de formulieren, die al op de site staan: het herkent een bezoeker
 * over meerdere bezoeken heen, houdt bij welke pagina's hij bekeek, en plakt
 * die geschiedenis aan het contact zodra iemand een formulier invult. In
 * HubSpot zie je dan bij een lead welke pagina's daaraan voorafgingen.
 *
 * Dezelfde regel als bij Google Analytics in `Analytics.tsx`: het script wordt
 * pas geladen wanneer iemand "Alles accepteren" heeft gekozen. Zonder keuze, of
 * bij "alleen noodzakelijk", gaat er geen enkel verzoek naar hs-scripts.com en
 * staat er dus ook geen `hubspotutk` of `__hstc` in de browser. Dat is precies
 * wat de cookieverklaring belooft.
 *
 * Trekt iemand de toestemming later in, dan zet `zetHubSpotTracking(false)` de
 * code op "niet volgen" én wissen we de cookies die er staan. Het script zelf
 * zit dan al in de pagina; dat verdwijnt pas bij de volgende paginalading, en
 * dan komt het niet terug.
 *
 * Het script hoort volgens HubSpot onderaan de `<body>`; `afterInteractive` van
 * Next zet het daar neer, ná de inhoud. Het id `hs-script-loader` staat er
 * omdat HubSpot daarop controleert of de code goed geïnstalleerd is.
 */

/**
 * Ons account staat in het EU-datacenter en heeft daarom een eigen adres:
 * `js-eu1.hs-scripts.com`. Een Amerikaans account (na1) zou het adres zonder
 * die toevoeging gebruiken — verhuist het account ooit, dan verandert
 * `HUBSPOT_REGION` in `lib/hubspot-forms.ts` en moet dit adres mee.
 */
const SCRIPT = `https://js-${HUBSPOT_REGION}.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`;

/** Alleen op de echte site. Zo komt lokaal en preview-verkeer niet in HubSpot. */
const DOMEIN = "meetingmasters.online";

function wachtrij() {
  const w = window as unknown as { _hsq?: unknown[] };
  w._hsq = w._hsq || [];
  return w._hsq;
}

export default function HubSpotTracking() {
  const [keuze, setKeuze] = useState<CookieKeuze | null>(null);
  /**
   * Of de keuze al uit de browser is gelezen. Zonder dit onderscheid zou de
   * eerste ronde ("nog niets gelezen") er hetzelfde uitzien als "geen keuze
   * gemaakt", en wisten we bij élke paginalading de cookies van iemand die wél
   * toestemming had gegeven — dan is hij bij elk bezoek weer een onbekende.
   */
  const [gelezen, setGelezen] = useState(false);
  const [opDeSite, setOpDeSite] = useState(false);
  const pad = usePathname();

  useEffect(() => {
    setKeuze(leesKeuze());
    setGelezen(true);
    setOpDeSite(location.hostname.endsWith(DOMEIN));
    const bij = (e: Event) => setKeuze((e as CustomEvent).detail ?? null);
    window.addEventListener(TOESTEMMING_EVENT, bij);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bij);
  }, []);

  /**
   * De stand doorgeven vóórdat het script binnen is: de wachtrij `_hsq` wordt
   * uitgelezen zodra de code laadt, dus wat we hier neerzetten geldt meteen
   * vanaf het eerste moment. Bij intrekken ruimt dit ook de cookies op.
   */
  useEffect(() => {
    if (!gelezen) return;
    zetHubSpotTracking(keuze === "alles");
  }, [keuze, gelezen]);

  /**
   * Elke paginawissel apart doorgeven. De router laadt geen nieuwe pagina, dus
   * zonder dit ziet HubSpot alleen de pagina waarop iemand binnenkwam.
   *
   * De eerste ronde slaan we over: de trackingcode telt de pagina waarop hij
   * binnenkomt zelf al. Zouden we hem hier ook doorgeven, dan staat die ene
   * pagina dubbel in de cijfers. Zet iemand de toestemming weer uit, dan gaat de
   * teller terug — het script begint bij de volgende keer immers opnieuw.
   */
  const eersteRonde = useRef(true);
  useEffect(() => {
    if (keuze !== "alles" || !opDeSite || !pad) {
      eersteRonde.current = true;
      return;
    }
    if (eersteRonde.current) {
      eersteRonde.current = false;
      return;
    }
    wachtrij().push(["setPath", pad]);
    wachtrij().push(["trackPageView"]);
  }, [pad, keuze, opDeSite]);

  if (!opDeSite || keuze !== "alles") return null;

  return <Script id="hs-script-loader" src={SCRIPT} strategy="afterInteractive" />;
}

"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { leesKeuze, TOESTEMMING_EVENT, type CookieKeuze } from "@/lib/cookie-toestemming";

/**
 * Bezoekerherkenning van strds.nl — alleen ná toestemming.
 *
 * De leverancier vraagt om dit script bovenin de `<head>` te zetten, vóór de
 * cookiebanner. Dat doen we bewust niet. Wat het script doet:
 *
 * - het maakt een vingerafdruk van de browser (scherm, tijdzone, kernen,
 *   geheugen, taal, plug-ins, platform);
 * - het zet een eigen blijvend kenmerk `_stfv` in localStorage én als cookie;
 * - het leest bestaande marketingcookies uit (Google, Facebook, TikTok, Reddit,
 *   Microsoft, Quantcast en `hubspotutk`) en stuurt die mee;
 * - het leest mee met wat bezoekers in formuliervelden typen, inclusief het
 *   domein achter de @ van een e-mailadres;
 * - het luistert op `hs-form-event:on-submission:success` en op berichten van
 *   hubspot.com en hsforms, en stuurt bij een verzending de ingevulde waarden
 *   door. Onze formulieren zijn precies zulke HubSpot-formulieren.
 *
 * Dat is geen noodzakelijke cookie, dus laadt het pas wanneer iemand "Alles
 * accepteren" heeft gekozen — dezelfde regel als bij Google Analytics in
 * `Analytics.tsx`. Zonder keuze, of bij "alleen noodzakelijk", gaat er geen
 * enkel verzoek naar strds.nl of jsapis.com.
 *
 * Trekt iemand de toestemming later in, dan wissen we het kenmerk dat het
 * script heeft achtergelaten. Het script zelf zit dan al in de pagina; dat
 * verdwijnt pas bij de volgende paginalading, en dan komt het niet terug.
 *
 * Het stylesheet `controls.css` hoort volgens de leverancier bij de installatie,
 * maar is een leeg bestand van vijf tekens. Het staat er alleen omdat zij erom
 * vragen, en het valt onder dezelfde toestemming.
 */

const SCRIPT = "https://k.strds.nl/jq_352a29d4.js";
const STIJL = "https://css.jsapis.com/controls.css";

/** Alleen op de echte site. Zo stuurt lokaal en preview-verkeer niets door. */
const DOMEIN = "meetingmasters.online";

/** Wat het script achterlaat, zodat we het bij intrekken kunnen opruimen. */
function wisKenmerk() {
  try {
    window.localStorage.removeItem("_stfv");
  } catch {
    // Privémodus: dan stond het er ook niet.
  }
  for (const domein of [location.hostname, "." + location.hostname]) {
    document.cookie = `_stfv=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domein}`;
  }
  document.cookie = "_stfv=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

export default function Bezoekerherkenning() {
  const [keuze, setKeuze] = useState<CookieKeuze | null>(null);
  const [opDeSite, setOpDeSite] = useState(false);

  useEffect(() => {
    setKeuze(leesKeuze());
    setOpDeSite(location.hostname.endsWith(DOMEIN));
    const bij = (e: Event) => setKeuze((e as CustomEvent).detail ?? null);
    window.addEventListener(TOESTEMMING_EVENT, bij);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bij);
  }, []);

  useEffect(() => {
    if (keuze === "alles" || typeof window === "undefined") return;
    wisKenmerk();
  }, [keuze]);

  if (!opDeSite || keuze !== "alles") return null;

  return (
    <>
      <link rel="stylesheet" href={STIJL} />
      <Script src={SCRIPT} strategy="afterInteractive" />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { leesKeuze, TOESTEMMING_EVENT, type CookieKeuze } from "@/lib/cookie-toestemming";

/**
 * De LinkedIn Insight Tag, maar alleen ná toestemming.
 *
 * Aangevraagd door Emilie (24 september 2026) om te zien wat LinkedIn-campagnes
 * op de site opleveren. Opgebouwd als `Analytics.tsx`: het script komt pas in
 * de pagina wanneer de bezoeker "Alles accepteren" heeft gekozen. Zonder die
 * keuze gaat er geen enkel verzoek naar LinkedIn, dus ook geen IP-adres.
 *
 * ── Twee dingen die bewust afwijken van het knipsel van LinkedIn ──
 *
 * 1. **Geen `<noscript>`-pixel.** LinkedIn levert er een mee, als beeldje van
 *    één pixel. Dat beeldje laadt altijd, ook zonder JavaScript — en dus ook
 *    zonder dat iemand iets heeft kunnen kiezen. Precies wat we niet willen.
 *    Zonder JavaScript werkt onze cookiebanner sowieso niet, dus dan meten we
 *    liever niets.
 * 2. **Het script staat niet in de footer maar hier**, naast de andere
 *    meetscripts. Waar het in de HTML staat maakt voor LinkedIn niet uit; wat
 *    telt is dát het laadt, en wanneer.
 *
 * Trekt iemand zijn toestemming later in, dan halen we de cookies weg die op
 * ons eigen domein staan en stopt het meten bij de volgende paginalading.
 * De cookies die LinkedIn op zijn eigen domein zet (`bcookie`, `lidc`,
 * `UserMatchHistory` en dergelijke) kunnen wij niet wissen — die beheert de
 * bezoeker via zijn browser of via LinkedIn zelf. Dat staat zo in de
 * cookieverklaring.
 *
 * Zonder `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` doet dit component niets, zodat de
 * site lokaal en op preview-omgevingen niets meet.
 */

const PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

/** Wat de Insight Tag op ons eigen domein achterlaat. */
function wisLinkedInCookies() {
  for (const c of document.cookie.split(";")) {
    const naam = c.split("=")[0]?.trim();
    if (!naam || !/^(li_|_li|bcookie|lidc|UserMatchHistory|bscookie)/.test(naam)) continue;
    for (const domein of [location.hostname, "." + location.hostname]) {
      document.cookie = `${naam}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domein}`;
    }
    document.cookie = `${naam}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

export default function LinkedInInsight() {
  const [keuze, setKeuze] = useState<CookieKeuze | null>(null);

  useEffect(() => {
    setKeuze(leesKeuze());
    const bij = (e: Event) => setKeuze((e as CustomEvent).detail ?? null);
    window.addEventListener(TOESTEMMING_EVENT, bij);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bij);
  }, []);

  useEffect(() => {
    if (keuze === "alles" || typeof window === "undefined") return;
    wisLinkedInCookies();
  }, [keuze]);

  if (!PARTNER_ID || keuze !== "alles") return null;

  return (
    <Script id="linkedin-insight" strategy="afterInteractive">
      {`
        window._linkedin_partner_id = "${PARTNER_ID}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push("${PARTNER_ID}");
        (function(l) {
          if (!l) {
            window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) };
            window.lintrk.q = [];
          }
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";
          b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
        })(window.lintrk);
      `}
    </Script>
  );
}

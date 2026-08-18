"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { leesKeuze, TOESTEMMING_EVENT, type CookieKeuze } from "@/lib/cookie-toestemming";

/**
 * Google Analytics 4, maar alleen ná toestemming.
 *
 * Het script wordt pas ingeladen wanneer de bezoeker "Alles accepteren" heeft
 * gekozen. Kiest hij "Alleen noodzakelijk", of maakt hij geen keuze, dan komt
 * er niets van Google binnen — ook geen verzoek naar googletagmanager.com, dus
 * ook geen IP-adres dat er stiekem heen gaat.
 *
 * Trekt iemand zijn toestemming later in, dan zetten we `gtag` op weigeren en
 * wissen we de _ga-cookies. Het script zelf kun je niet meer uit de pagina
 * halen zonder te herladen; door de toestemmingsmodus terug te zetten stuurt
 * het niets meer door.
 *
 * Zonder `NEXT_PUBLIC_GA_ID` doet dit component niets. Zo draait de site
 * lokaal en op preview-omgevingen zonder metingen.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** De cookies die GA4 zelf plaatst, zodat we ze bij intrekken kunnen wissen. */
function wisGaCookies() {
  for (const c of document.cookie.split(";")) {
    const naam = c.split("=")[0]?.trim();
    if (!naam || !/^_ga/.test(naam)) continue;
    for (const domein of [location.hostname, "." + location.hostname]) {
      document.cookie = `${naam}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domein}`;
    }
    document.cookie = `${naam}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

export default function Analytics() {
  const [keuze, setKeuze] = useState<CookieKeuze | null>(null);
  const pad = usePathname();

  useEffect(() => {
    setKeuze(leesKeuze());
    const bij = (e: Event) => setKeuze((e as CustomEvent).detail ?? null);
    window.addEventListener(TOESTEMMING_EVENT, bij);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bij);
  }, []);

  // Toestemming ingetrokken: meten stoppen en opruimen wat er staat.
  useEffect(() => {
    if (keuze === "alles" || typeof window === "undefined") return;
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    w.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
    wisGaCookies();
  }, [keuze]);

  // Elke paginawissel apart doorgeven: de router laadt geen nieuwe pagina, dus
  // GA ziet het anders als één lang bezoek aan de eerste pagina.
  useEffect(() => {
    if (keuze !== "alles" || !GA_ID || !pad) return;
    const w = window as unknown as { gtag?: (...a: unknown[]) => void };
    w.gtag?.("event", "page_view", { page_path: pad });
  }, [pad, keuze]);

  if (!GA_ID || keuze !== "alles") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

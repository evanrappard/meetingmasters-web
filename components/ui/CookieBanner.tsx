"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { taalVanPad } from "@/lib/talen";
import {
  bewaarKeuze,
  leesKeuze,
  OPEN_BANNER_EVENT,
  type CookieKeuze,
} from "@/lib/cookie-toestemming";

/**
 * Cookiebanner onderaan het scherm. Verschijnt alleen als er nog geen keuze is
 * gemaakt (of als die ouder is dan een jaar), en kan vanaf de cookiepagina
 * opnieuw worden geopend via `openBanner()`.
 *
 * De banner blokkeert de pagina niet: de site plaatst uit zichzelf geen
 * analytische of marketingcookies, dus lezen kan gewoon doorgaan.
 */
/**
 * De teksten van de banner, per taal. De cookieverklaring zelf bestaat nog
 * alleen in het Nederlands; de Engelse banner linkt daar dus naartoe, met een
 * regel erbij dat de pagina Nederlandstalig is. Beter dat te zeggen dan iemand
 * er onaangekondigd op te laten belanden.
 */
const T = {
  nl: {
    titel: "MeetingMasters maakt gebruik van cookies",
    tekst:
      "MeetingMasters gaat over contact maken en houden. En omdat we dat graag nog beter doen, niet alleen voor onze klanten maar ook mét onze klanten, gebruiken we cookies. Een deel is nodig om de site en onze formulieren te laten werken. Geef je ons ook toestemming voor statistieken, dan maken we de site daar beter mee. Wat we precies bewaren, lees je in onze ",
    link: "cookieverklaring",
    linkExtra: "",
    noodzakelijk: "Alleen noodzakelijk",
    alles: "Alles accepteren",
  },
  en: {
    titel: "MeetingMasters uses cookies",
    tekst:
      "MeetingMasters is about making and keeping contact. And because we would like to do that even better, not only for our clients but with them, we use cookies. Some are needed to make the site and our forms work. Give us permission for statistics as well and we can make the site better with it. What exactly we store is set out in our ",
    link: "cookie statement",
    linkExtra: " (in Dutch)",
    noodzakelijk: "Essential only",
    alles: "Accept all",
  },
} as const;

export default function CookieBanner() {
  const [zichtbaar, setZichtbaar] = useState(false);
  const taal = taalVanPad(usePathname() ?? "/nl/home");

  useEffect(() => {
    // Pas na het monteren beslissen; op de server bestaat localStorage niet en
    // anders zou de eerste render van server en client verschillen.
    if (leesKeuze() === null) setZichtbaar(true);

    const opnieuw = () => setZichtbaar(true);
    window.addEventListener(OPEN_BANNER_EVENT, opnieuw);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, opnieuw);
  }, []);

  if (!zichtbaar) return null;

  const t = T[taal];

  const kies = (keuze: CookieKeuze) => {
    bewaarKeuze(keuze);
    setZichtbaar(false);
  };

  // pointer-events-none op de wrapper: op smalle schermen wordt de banner zo
  // hoog dat zijn (doorzichtige) omhulsel tot achter de navbar reikt en daar
  // tikken opvangt — het menu leek dan niet te reageren. Alleen de kaart zelf
  // vangt nog klikken.
  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="pointer-events-auto max-w-content mx-auto max-h-[70vh] overflow-y-auto bg-white border border-white-grey rounded-xl shadow-lg p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-5 lg:gap-8">
        <div className="lg:flex-1">
          <h2 className="text-primary font-bold mb-1">{t.titel}</h2>
          <p className="text-dark-grey text-sm leading-relaxed">
            {t.tekst}
            <Link
              href="/nl/cookieverklaring"
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              {t.link}
            </Link>
            {t.linkExtra}.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
          <button
            type="button"
            onClick={() => kies("alleen-noodzakelijk")}
            className="border border-light-grey text-dark-grey px-6 py-3 text-sm font-semibold rounded hover:border-accent hover:text-accent transition-colors"
          >
            {t.noodzakelijk}
          </button>
          <button
            type="button"
            onClick={() => kies("alles")}
            className="bg-aqua text-white px-6 py-3 text-sm font-semibold rounded hover:bg-aqua-dark transition-colors"
          >
            {t.alles}
          </button>
        </div>
      </div>
    </div>
  );
}

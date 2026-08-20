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
/** De teksten van de banner, per taal, met de verklaring in dezelfde taal. */
const T = {
  nl: {
    titel: "MeetingMasters maakt gebruik van cookies",
    tekst:
      "Een deel van de cookies is nodig om de site en onze formulieren te laten werken. Geef je ook toestemming voor statistieken, dan maken we de site daar beter mee. Meer in onze ",
    link: "cookieverklaring",
    href: "/nl/cookieverklaring",
    noodzakelijk: "Alleen noodzakelijk",
    alles: "Alles accepteren",
  },
  en: {
    titel: "MeetingMasters uses cookies",
    tekst:
      "Some cookies are needed to make the site and our forms work. Give us permission for statistics as well and we can make the site better with it. More in our ",
    link: "cookie statement",
    href: "/en/cookie-statement",
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
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="pointer-events-auto max-w-[820px] mx-auto max-h-[45vh] overflow-y-auto bg-white border border-white-grey rounded-lg shadow-lg px-4 py-3.5 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="sm:flex-1">
          <h2 className="text-primary font-bold text-sm mb-0.5">{t.titel}</h2>
          <p className="text-dark-grey text-[13px] leading-relaxed">
            {t.tekst}
            <Link
              href={t.href}
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              {t.link}
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-row gap-2 shrink-0">
          <button
            type="button"
            onClick={() => kies("alleen-noodzakelijk")}
            className="border border-light-grey text-dark-grey px-4 py-2 text-[13px] font-semibold rounded whitespace-nowrap hover:border-accent hover:text-accent transition-colors"
          >
            {t.noodzakelijk}
          </button>
          <button
            type="button"
            onClick={() => kies("alles")}
            className="bg-aqua text-white px-4 py-2 text-[13px] font-semibold rounded whitespace-nowrap hover:bg-aqua-dark transition-colors"
          >
            {t.alles}
          </button>
        </div>
      </div>
    </div>
  );
}

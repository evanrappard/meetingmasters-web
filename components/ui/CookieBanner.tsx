"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
export default function CookieBanner() {
  const [zichtbaar, setZichtbaar] = useState(false);

  useEffect(() => {
    // Pas na het monteren beslissen; op de server bestaat localStorage niet en
    // anders zou de eerste render van server en client verschillen.
    if (leesKeuze() === null) setZichtbaar(true);

    const opnieuw = () => setZichtbaar(true);
    window.addEventListener(OPEN_BANNER_EVENT, opnieuw);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, opnieuw);
  }, []);

  if (!zichtbaar) return null;

  const kies = (keuze: CookieKeuze) => {
    bewaarKeuze(keuze);
    setZichtbaar(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-content mx-auto bg-white border border-white-grey rounded-xl shadow-lg p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
        <div className="lg:flex-1">
          <h2 className="text-primary font-bold mb-1">
            MeetingMasters maakt gebruik van cookies
          </h2>
          <p className="text-dark-grey text-sm leading-relaxed">
            MeetingMasters gaat over contact maken en houden. En omdat we dat graag nog
            beter doen, niet alleen voor onze klanten maar ook mét onze klanten, gebruiken
            we cookies. Een deel is nodig om de site en onze formulieren te laten werken.
            Geef je ons ook toestemming voor statistieken, dan maken we de site daar beter
            mee. Wat we precies bewaren, lees je in onze{" "}
            <Link
              href="/nl/cookieverklaring"
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              cookieverklaring
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
          <button
            type="button"
            onClick={() => kies("alleen-noodzakelijk")}
            className="border border-light-grey text-dark-grey px-6 py-3 text-sm font-semibold rounded hover:border-accent hover:text-accent transition-colors"
          >
            Alleen noodzakelijk
          </button>
          <button
            type="button"
            onClick={() => kies("alles")}
            className="bg-aqua text-white px-6 py-3 text-sm font-semibold rounded hover:bg-aqua-dark transition-colors"
          >
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  leesKeuze,
  openBanner,
  TOESTEMMING_EVENT,
  type CookieKeuze,
} from "@/lib/cookie-toestemming";

const OMSCHRIJVING: Record<CookieKeuze, string> = {
  alles: "Je hebt alle cookies geaccepteerd.",
  "alleen-noodzakelijk": "Je hebt gekozen voor alleen noodzakelijke cookies.",
};

/**
 * Toont de huidige cookiekeuze en laat die opnieuw maken. Staat op de
 * cookieverklaring, zodat een bezoeker er altijd op terug kan komen.
 */
export default function CookieKeuzeKnop() {
  const [keuze, setKeuze] = useState<CookieKeuze | null>(null);

  useEffect(() => {
    setKeuze(leesKeuze());
    const bij = (e: Event) => setKeuze((e as CustomEvent).detail ?? null);
    window.addEventListener(TOESTEMMING_EVENT, bij);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bij);
  }, []);

  return (
    <div className="bg-gray-50 border border-white-grey rounded-xl p-6">
      <p className="text-dark-grey leading-relaxed mb-4">
        {keuze
          ? OMSCHRIJVING[keuze]
          : "Je hebt nog geen keuze gemaakt. Op dit moment staan alleen de noodzakelijke cookies aan."}
      </p>
      <button
        type="button"
        onClick={openBanner}
        className="border border-accent text-accent px-6 py-3 text-sm font-semibold rounded hover:bg-accent hover:text-white transition-colors"
      >
        Wijzig je cookiekeuze
      </button>
    </div>
  );
}

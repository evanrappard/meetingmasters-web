"use client";

import { useEffect, useRef, useState } from "react";
import { leesKeuze, TOESTEMMING_EVENT } from "@/lib/cookie-toestemming";
import { zetHubSpotTracking } from "@/lib/hubspot-toestemming";

/**
 * Insluitbare HubSpot-agenda: bezoekers kiezen zelf een moment in plaats van
 * een formulier in te vullen en te wachten op antwoord.
 *
 * HubSpot laadt de agenda in een iframe zodra het script het element met de
 * klasse `meetings-iframe-container` ziet. Het script komt van het algemene
 * adres, ook voor een EU-account — anders dan bij de formulieren, die wél een
 * eigen adres per datacenter hebben.
 *
 * Werkt de agenda niet (script geblokkeerd, of een bezoeker die iframes
 * tegenhoudt), dan blijft er een gewone link staan. Zonder die terugval ziet
 * iemand een leeg vlak en denkt hij dat het stuk is.
 */

const SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

/** De terugvaltekst, per taal. */
const T = {
  nl: {
    laadt: "De agenda laadt.",
    link: "Lukt het niet? Open de agenda in een nieuw venster ↗",
    mislukt: "De agenda laadt niet. Open hem in een nieuw venster:",
  },
  en: {
    laadt: "The calendar is loading.",
    link: "Not working? Open the calendar in a new window ↗",
    mislukt: "The calendar isn't loading. Open it in a new window:",
  },
} as const;

type Props = {
  /** Volledige boekingslink uit HubSpot, zonder `?embed=true`. */
  link: string;
  /** Hoogte van het kader. HubSpot past zelf bij, dit is de startwaarde. */
  hoogte?: string;
  className?: string;
  taal?: "nl" | "en";
};

export default function HubSpotAgenda({ link, hoogte = "700px", className, taal = "nl" }: Props) {
  const t = T[taal];
  const houder = useRef<HTMLDivElement>(null);
  const [geladen, setGeladen] = useState(false);
  const [mislukt, setMislukt] = useState(false);

  /**
   * Het HubSpot-script zoekt alleen bij het láden van het script naar
   * `.meetings-iframe-container`. Kwam je hier via een link binnen de site, dan
   * stond dat script er al van een vorige pagina: het draait niet opnieuw, dus
   * de agenda werd nooit opgebouwd en je zag een leeg vlak tot je de pagina
   * ververste. Daarom halen we een bestaand script weg en zetten we het opnieuw
   * neer, zodat het altijd een verse ronde maakt.
   *
   * Daarna kijken we of het kader er echt komt. Blijft het uit (script
   * geblokkeerd, iframes tegengehouden), dan tonen we de directe link.
   */
  useEffect(() => {
    // De meetings-embed trekt HubSpots analytics-stack mee. Eerst de stand
    // zetten (standaard: niet volgen), dan pas het script laden.
    zetHubSpotTracking(leesKeuze() === "alles");
    const bij = (e: Event) =>
      zetHubSpotTracking(((e as CustomEvent).detail ?? null) === "alles");
    window.addEventListener(TOESTEMMING_EVENT, bij);

    let gestopt = false;
    const tellers: {
      poller?: ReturnType<typeof setInterval>;
      limiet?: ReturnType<typeof setTimeout>;
    } = {};
    const opruimen = () => {
      gestopt = true;
      if (tellers.poller) clearInterval(tellers.poller);
      if (tellers.limiet) clearTimeout(tellers.limiet);
    };

    const kijk = () => {
      if (gestopt) return;
      if (houder.current?.querySelector("iframe")) {
        opruimen();
        setGeladen(true);
        setMislukt(false);
      }
    };

    document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT}"]`)?.remove();
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.addEventListener("load", kijk);
    s.addEventListener("error", () => {
      if (gestopt) return;
      opruimen();
      setMislukt(true);
    });
    document.body.appendChild(s);

    tellers.poller = setInterval(kijk, 200);
    tellers.limiet = setTimeout(() => {
      if (gestopt || houder.current?.querySelector("iframe")) return;
      opruimen();
      setMislukt(true);
    }, 10000);

    return () => {
      opruimen();
      window.removeEventListener(TOESTEMMING_EVENT, bij);
    };
  }, []);

  const scheiding = link.includes("?") ? "&" : "?";

  return (
    <div className={className}>
      <div
        ref={houder}
        className="meetings-iframe-container rounded-lg overflow-hidden"
        data-src={`${link}${scheiding}embed=true`}
        style={{ minHeight: hoogte }}
      />
      {!geladen && (
        <p className="text-sm text-[#5F5F5F] mt-3">
          {mislukt ? t.mislukt : t.laadt}{" "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#28A8AA] font-semibold hover:underline">
            {t.link}
          </a>
        </p>
      )}
    </div>
  );
}

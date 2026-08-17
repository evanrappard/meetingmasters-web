"use client";

import { useEffect, useRef, useState } from "react";

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

type Props = {
  /** Volledige boekingslink uit HubSpot, zonder `?embed=true`. */
  link: string;
  /** Hoogte van het kader. HubSpot past zelf bij, dit is de startwaarde. */
  hoogte?: string;
  className?: string;
};

export default function HubSpotAgenda({ link, hoogte = "700px", className }: Props) {
  const houder = useRef<HTMLDivElement>(null);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    const bestaand = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT}"]`);
    if (bestaand) {
      setGeladen(true);
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.addEventListener("load", () => setGeladen(true));
    document.body.appendChild(s);
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
        <p className="text-sm text-[#777777] mt-3">
          De agenda laadt.{" "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#28A8AA] font-semibold hover:underline">
            Lukt het niet? Open de agenda in een nieuw venster ↗
          </a>
        </p>
      )}
    </div>
  );
}

"use client";

import HubSpotAgenda from "@/components/ui/HubSpotAgenda";
import Disclaimer from "./Disclaimer";
import { MEETINGS_EMBED, TEKST } from "@/config/ravenhack";
import { bewaarKeuze, leesKeuze, TOESTEMMING_EVENT } from "@/lib/cookie-toestemming";
import { useEffect, useState } from "react";
import type { Taal } from "@/lib/talen";

/**
 * De agenda van R@venHack.
 *
 * Twee dingen om te weten:
 *
 * 1. De agenda laadt pas na toestemming. Deze site kent geen aparte categorie
 *    voor marketingcookies — het is alles of alleen noodzakelijk — dus de knop
 *    hieronder zet de keuze op "alles".
 * 2. Wie hier een moment kiest, boekt dat écht: HubSpot zet de afspraak in de
 *    agenda en stuurt een uitnodiging. Er komt langs deze weg geen prijs en
 *    geen deelnemersaantal binnen; dat komt uit het formulier verderop.
 */
export default function Beschikbaarheid({
  taal,
  naarCalculator,
  naarFormulier,
}: {
  taal: Taal;
  naarCalculator: string;
  naarFormulier: string;
}) {
  const t = TEKST[taal];
  const b = t.beschikbaarheid;
  const [magLaden, setMagLaden] = useState(false);

  useEffect(() => {
    const bepaal = () => setMagLaden(leesKeuze() === "alles");
    bepaal();
    window.addEventListener(TOESTEMMING_EVENT, bepaal);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bepaal);
  }, []);

  return (
    <div>
      {!MEETINGS_EMBED ? (
        <div className="rounded-xl border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6">
          <p className="text-[#434343] leading-relaxed">{b.nogNiet}</p>
        </div>
      ) : magLaden ? (
        <HubSpotAgenda link={MEETINGS_EMBED} taal={taal} />
      ) : (
        <div className="rounded-xl border border-[#E7E7E3] bg-[#F7F7F5] p-6">
          <p className="text-[#434343] leading-relaxed mb-4">{t.zonderToestemming}</p>
          <button
            type="button"
            onClick={() => bewaarKeuze("alles")}
            className="rounded bg-[#EEBE3D] px-5 py-2.5 text-sm font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
          >
            {t.zonderToestemmingKnop}
          </button>
        </div>
      )}

      <Disclaimer taal={taal} />

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={naarCalculator}
          className="rounded bg-[#EEBE3D] px-6 py-3 text-sm font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
        >
          {b.naarCalculator}
        </a>
        <a
          href={naarFormulier}
          className="rounded border border-[#D2D2D0] px-6 py-3 text-sm font-bold text-[#2D2D2D] hover:border-[#2D2D2D] transition-colors"
        >
          {b.naarFormulier}
        </a>
      </div>
    </div>
  );
}

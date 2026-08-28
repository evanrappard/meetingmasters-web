"use client";

import { bedrag, prijsopbouwRegels, type Prijs, type Prijsinvoer } from "@/lib/ravenhack/prijs";
import { TEKST } from "@/config/ravenhack";
import type { Taal } from "@/lib/talen";

/**
 * Het bedrag met de opbouw eronder.
 *
 * Het grote getal is het bedrag exclusief btw — dat is waar een zakelijke
 * klant op stuurt. De btw staat er kleiner onder, zodat niemand zich later
 * verrast voelt.
 *
 * De opbouw verschijnt pas zodra er iets te tonen is dat niet vanzelf spreekt:
 * extra deelnemers, een toeslag of een korting.
 */
export default function PrijsRegel({
  prijs,
  invoer,
  taal,
}: {
  prijs: Prijs;
  invoer: Prijsinvoer;
  taal: Taal;
}) {
  const t = TEKST[taal].calculator;
  const regels = prijsopbouwRegels(prijs, invoer, taal, t.opbouw);
  // Alleen de basisprijs en het totaal: dan zegt een lijstje niets extra's.
  const toonOpbouw = regels.length > 2;

  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-[2.1rem] sm:text-[2.5rem] font-bold text-[#2D2D2D] leading-none">
          {bedrag(prijs.totaalExclBtw, taal)}
        </span>
        <span className="text-[#5F5F5F] text-sm font-semibold">{t.exclBtw}</span>
      </p>
      <p className="text-[#7A8483] text-sm mt-1.5">
        {t.inclBtw.replace("{bedrag}", bedrag(prijs.totaalInclBtw, taal))}
      </p>

      {toonOpbouw && (
        <dl className="mt-5 border-t border-[#E7E7E3] pt-4 space-y-1.5">
          {regels.map((r, i) => {
            const laatste = i === regels.length - 1;
            return (
              <div
                key={r.label}
                className={`flex justify-between gap-6 text-sm ${
                  laatste
                    ? "border-t border-[#E7E7E3] pt-2.5 mt-2.5 font-bold text-[#2D2D2D]"
                    : "text-[#434343]"
                }`}
              >
                <dt>{r.label}</dt>
                <dd className="shrink-0 tabular-nums">{r.waarde}</dd>
              </div>
            );
          })}
        </dl>
      )}
    </div>
  );
}

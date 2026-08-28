"use client";

import { useState } from "react";
import Beschikbaarheid from "./Beschikbaarheid";
import Calculator, { type Keuze } from "./Calculator";
import BoekNu from "./BoekNu";
import { STANDAARD_DEELNEMERS, STANDAARD_VARIANT, TEKST } from "@/config/ravenhack";
import type { Taal } from "@/lib/talen";

/**
 * De drie modules onder elkaar, met één gedeelde keuze.
 *
 * Beschikbaarheid, prijs en formulier horen bij elkaar: wat je in de calculator
 * kiest, staat verderop al ingevuld. Daarom staan ze in één component in plaats
 * van drie losse — dan hoeft er niets via de URL of via opslag heen en weer.
 *
 * De ankers (#rh-agenda en verder) zijn ook de plek waar de knoppen bovenaan de
 * pagina heen springen.
 */
export default function RavenHackModules({ taal }: { taal: Taal }) {
  const [keuze, setKeuze] = useState<Keuze>({
    variant: STANDAARD_VARIANT,
    // De taal van de pagina is de beste gok voor de taal van de sessie: wie de
    // Engelse pagina leest, wil zijn spel vrijwel zeker in het Engels.
    spelTaal: taal,
    deelnemers: STANDAARD_DEELNEMERS,
    datum: "",
    tijd: "",
    kortingscode: "",
    kortingspercentage: 0,
  });

  const zet = (deel: Partial<Keuze>) => setKeuze((was) => ({ ...was, ...deel }));
  const t = TEKST[taal];

  return (
    <>
      <Blok
        id="rh-agenda"
        kicker={t.beschikbaarheid.kicker}
        kop={t.beschikbaarheid.kop}
        onder={t.beschikbaarheid.onder}
        achtergrond="bg-white"
      >
        <Beschikbaarheid taal={taal} naarCalculator="#rh-prijs" naarFormulier="#rh-boeken" />
      </Blok>

      <Blok
        id="rh-prijs"
        kicker={t.calculator.kicker}
        kop={t.calculator.kop}
        onder={t.calculator.onder}
        achtergrond="bg-[#FAFAFA]"
      >
        <Calculator keuze={keuze} zet={zet} taal={taal} naarFormulier="#rh-boeken" />
      </Blok>

      <Blok
        id="rh-boeken"
        kicker={t.formulier.kicker}
        kop={t.formulier.kop}
        onder={t.formulier.onder}
        achtergrond="bg-white"
      >
        <BoekNu keuze={keuze} taal={taal} />
      </Blok>
    </>
  );
}

/** Eén opmaak voor de drie modules, zodat ze op de pagina één geheel zijn. */
function Blok({
  id,
  kicker,
  kop,
  onder,
  achtergrond,
  children,
}: {
  id: string;
  kicker: string;
  kop: string;
  onder: string;
  achtergrond: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${achtergrond} py-14 md:py-16 border-b border-[#EBEBEB] scroll-mt-24`}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="mb-9 max-w-[760px]">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{kicker}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">{kop}</h2>
          <p className="text-[#434343] leading-relaxed">{onder}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

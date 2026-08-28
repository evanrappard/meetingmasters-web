"use client";

import { useEffect, useState } from "react";
import Calculator, { type Keuze } from "./Calculator";
import BoekNu from "./BoekNu";
import { STANDAARD_DEELNEMERS, STANDAARD_VARIANT, TEKST } from "@/config/ravenhack";
import { berekenPrijs } from "@/lib/ravenhack/prijs";
import type { Taal } from "@/lib/talen";

/**
 * De boekingsmodule: één formulier, van boven naar beneden.
 *
 * Bovenaan staat de knop "Boek nu". Daaronder stel je je sessie samen en zie je
 * de prijs meebewegen. Druk je op die knop, dan komen onderaan de velden erbij
 * die we verder nodig hebben — zonder kop of tussenstuk ertussen, zodat het één
 * doorlopend formulier blijft.
 *
 * Het was eerst twee stappen die elkaar vervingen. Dat werkte niet: de knop in
 * de hero sprong dan naar een leeg formulier, met alle waarden op de
 * standaardwaarde.
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
  const [boekenOpen, setBoekenOpen] = useState(false);
  /** Iemand drukte op "Boek nu" zonder datum of tijd. */
  const [mistMoment, setMistMoment] = useState(false);

  const zet = (deel: Partial<Keuze>) => {
    setKeuze((was) => ({ ...was, ...deel }));
    if (deel.datum || deel.tijd) setMistMoment(false);
  };
  const t = TEKST[taal];
  const prijs = berekenPrijs(keuze);

  /**
   * De knoppen hoger op de pagina wijzen naar #rh-boeken. We luisteren naar de
   * klik zelf en niet naar het adres in de balk: staat dat adres al op
   * #rh-boeken, dan verandert er bij een tweede klik niets.
   */
  useEffect(() => {
    const bijKlik = (e: MouseEvent) => {
      const doel = (e.target as HTMLElement | null)?.closest?.("a")?.getAttribute("href");
      if (doel === "#rh-boeken") probeerTeBoeken();
    };
    if (window.location.hash === "#rh-boeken") setBoekenOpen(true);
    document.addEventListener("click", bijKlik);
    return () => document.removeEventListener("click", bijKlik);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keuze.datum, keuze.tijd]);

  // Wordt de groep te groot, dan kan er niets verstuurd worden en heeft het
  // tweede deel geen zin meer.
  useEffect(() => {
    if (!prijs.toonPrijs) setBoekenOpen(false);
  }, [prijs.toonPrijs]);

  function probeerTeBoeken() {
    // Zonder moment kunnen we niets inplannen, dus dat vragen we hier af en
    // niet pas onderaan het formulier.
    if (!keuze.datum || !keuze.tijd) {
      setMistMoment(true);
      document.getElementById(!keuze.datum ? "rh-datum" : "rh-tijd")?.focus();
      return;
    }
    setMistMoment(false);
    setBoekenOpen(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById("rh-boeken")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    });
  }

  return (
    <section id="rh-prijs" className="bg-[#FAFAFA] py-14 md:py-16 border-b border-[#EBEBEB] scroll-mt-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="mb-8 max-w-[760px]">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            {t.calculator.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
            {t.calculator.kop}
          </h2>

          {/* De knop staat vooraan, zodat je meteen ziet waar dit heen gaat.
              Wie er te vroeg op drukt, krijgt de vraag om eerst een moment te
              kiezen — zonder dat er iets verspringt. */}
          {prijs.toonPrijs && !boekenOpen && (
            <button
              type="button"
              onClick={probeerTeBoeken}
              className="rounded bg-[#EEBE3D] px-8 py-3.5 text-base font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
            >
              {t.calculator.naarFormulier}
            </button>
          )}
          {mistMoment && (
            <p className="mt-3 text-[15px] text-[#C64A60] font-semibold leading-relaxed">
              {t.calculator.datumNodig}
            </p>
          )}
        </div>

        <Calculator keuze={keuze} zet={zet} taal={taal} formulierOpen={boekenOpen} mistMoment={false}>
          {boekenOpen && prijs.toonPrijs && (
            <div className="pt-2">
              <BoekNu keuze={keuze} taal={taal} />
            </div>
          )}
        </Calculator>
      </div>
    </section>
  );
}

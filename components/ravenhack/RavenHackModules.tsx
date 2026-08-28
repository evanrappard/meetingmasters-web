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
 * Bovenaan stel je je sessie samen en zie je de prijs meebewegen. Druk je op
 * "Boek nu", dan vouwt daaronder het tweede deel uit met je gegevens. De
 * keuzes blijven gewoon staan — het is één blad, geen twee stappen.
 *
 * Dat was eerst wél zo, en dat werkte niet: de knop in de hero sprong dan
 * meteen naar een leeg formulier, met alle waarden op de standaardwaarde. Nu
 * komt die knop uit bij de calculator, met het tweede deel open.
 *
 * Beschikbaarheid staat er bewust niet meer bij. De bezoeker geeft zijn
 * voorkeursmoment op; wij kijken of dat kan en komen erop terug.
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

  const zet = (deel: Partial<Keuze>) => setKeuze((was) => ({ ...was, ...deel }));
  const t = TEKST[taal];
  const prijs = berekenPrijs(keuze);

  /**
   * De knoppen hoger op de pagina wijzen naar #rh-prijs en #rh-boeken. We
   * luisteren naar de klik zelf en niet naar het adres in de balk: staat dat
   * adres al op #rh-boeken, dan verandert er bij een tweede klik niets.
   */
  useEffect(() => {
    const bijKlik = (e: MouseEvent) => {
      const doel = (e.target as HTMLElement | null)?.closest?.("a")?.getAttribute("href");
      if (doel === "#rh-boeken") openBoeken();
    };
    if (window.location.hash === "#rh-boeken") setBoekenOpen(true);
    document.addEventListener("click", bijKlik);
    return () => document.removeEventListener("click", bijKlik);
  }, []);

  // Wordt de groep te groot, dan kan er niets verstuurd worden en heeft het
  // tweede deel geen zin meer.
  useEffect(() => {
    if (!prijs.toonPrijs) setBoekenOpen(false);
  }, [prijs.toonPrijs]);

  function openBoeken() {
    setBoekenOpen(true);
    // Even wachten tot het blok er staat, en er dan rustig heen scrollen.
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById("rh-boeken")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    });
  }

  return (
    <section id="rh-prijs" className="bg-[#FAFAFA] py-14 md:py-16 border-b border-[#EBEBEB] scroll-mt-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="mb-9 max-w-[760px]">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            {t.calculator.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
            {t.calculator.kop}
          </h2>
        </div>

        <Calculator
          keuze={keuze}
          zet={zet}
          taal={taal}
          naarFormulier={openBoeken}
          formulierOpen={boekenOpen}
        >
          {boekenOpen && prijs.toonPrijs && <BoekNu keuze={keuze} taal={taal} />}
        </Calculator>
      </div>
    </section>
  );
}

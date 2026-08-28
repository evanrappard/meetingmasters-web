"use client";

import { useEffect, useState } from "react";
import Calculator, { type Keuze } from "./Calculator";
import BoekNu from "./BoekNu";
import { STANDAARD_DEELNEMERS, STANDAARD_VARIANT, TEKST } from "@/config/ravenhack";
import { berekenPrijs } from "@/lib/ravenhack/prijs";
import type { Taal } from "@/lib/talen";

/**
 * De boekingsmodule: één sectie met twee stappen.
 *
 *   1. Wat kost het — de bezoeker stelt zijn sessie samen en ziet de prijs.
 *   2. Boek nu     — dezelfde plek, maar dan het formulier.
 *
 * Beschikbaarheid staat er bewust niet meer bij. De bezoeker geeft zijn
 * voorkeursmoment op in de calculator; wij kijken of dat kan en komen erop
 * terug. Dat scheelt hem een agenda waarin hij zelf moet puzzelen, en het
 * scheelt ons afspraken zonder deelnemersaantal of prijs.
 *
 * Waarom het formulier niet meteen zichtbaar is: wie de prijs nog niet heeft
 * gezien, kan zijn keuzes ook nog niet doorgeven. De knop maakt van "kijken"
 * één duidelijke stap naar "aanvragen".
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
  const [stap, setStap] = useState<"kosten" | "boeken">("kosten");

  const zet = (deel: Partial<Keuze>) => setKeuze((was) => ({ ...was, ...deel }));
  const t = TEKST[taal];
  const prijs = berekenPrijs(keuze);

  /**
   * De knoppen hoger op de pagina wijzen naar #rh-prijs en #rh-boeken. We
   * luisteren naar de klik zelf en niet naar het adres in de balk: staat dat
   * adres al op #rh-boeken, dan verandert er bij een tweede klik niets en zou
   * er ook niets gebeuren. Zo werkt elke knop, elke keer.
   *
   * De hash blijft wel bruikbaar om er meteen op te landen, bijvoorbeeld vanuit
   * een mail of een andere pagina.
   */
  useEffect(() => {
    const bijKlik = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const doel = link?.getAttribute("href");
      if (doel !== "#rh-boeken" && doel !== "#rh-prijs") return;
      setStap(doel === "#rh-boeken" ? "boeken" : "kosten");
    };
    const uitHash = () => {
      if (window.location.hash === "#rh-boeken") setStap("boeken");
    };
    uitHash();
    document.addEventListener("click", bijKlik);
    window.addEventListener("hashchange", uitHash);
    return () => {
      document.removeEventListener("click", bijKlik);
      window.removeEventListener("hashchange", uitHash);
    };
  }, []);

  // Wordt de groep te groot terwijl het formulier openstaat, dan kan er niets
  // meer verstuurd worden en horen we terug bij de prijs te staan.
  useEffect(() => {
    if (!prijs.toonPrijs) setStap("kosten");
  }, [prijs.toonPrijs]);

  function naarBoeken() {
    setStap("boeken");
    // Na het wisselen staat de kop van de sectie boven in beeld, zodat de
    // bezoeker ziet dat hij een stap verder is en niet halverwege een formulier
    // begint te lezen.
    requestAnimationFrame(() => {
      document.getElementById("rh-prijs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const kop = stap === "kosten" ? t.calculator : t.formulier;

  return (
    <section id="rh-prijs" className="bg-[#FAFAFA] py-14 md:py-16 border-b border-[#EBEBEB] scroll-mt-24">
      {/* Tweede anker, zodat een link naar #rh-boeken op deze sectie uitkomt. */}
      <span id="rh-boeken" className="block scroll-mt-24" aria-hidden />
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="mb-9 max-w-[760px]">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            {kop.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
            {kop.kop}
          </h2>
          <p className="text-[#434343] leading-relaxed">{kop.onder}</p>
        </div>

        {stap === "kosten" ? (
          <Calculator keuze={keuze} zet={zet} taal={taal} naarFormulier={naarBoeken} />
        ) : (
          <BoekNu keuze={keuze} taal={taal} terug={() => setStap("kosten")} />
        )}
      </div>
    </section>
  );
}

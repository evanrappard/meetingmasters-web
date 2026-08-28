"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import PrijsRegel from "./PrijsRegel";
import Disclaimer from "./Disclaimer";
import {
  ADVIES_LINK,
  LAATSTE_EINDTIJD_UUR,
  MAX_MAANDEN_VOORUIT,
  MIN_WERKDAGEN_VOORAF,
  TEKST,
  VARIANTEN,
  VROEGSTE_STARTTIJD_UUR,
  type SpelTaal,
  type VariantSleutel,
} from "@/config/ravenhack";
import {
  alsDatumtekst,
  berekenPrijs,
  laatsteDatum,
  laatsteStarttijd,
  vroegsteDatum,
} from "@/lib/ravenhack/prijs";
import type { Taal } from "@/lib/talen";

/** Alles wat de bezoeker kiest, en wat straks met het formulier meegaat. */
export type Keuze = {
  variant: VariantSleutel;
  spelTaal: SpelTaal;
  deelnemers: number;
  datum: string;
  tijd: string;
  kortingscode: string;
  /** 0 zolang er geen geldige code is ingevoerd. */
  kortingspercentage: number;
};

type Codestand = "leeg" | "bezig" | "geldig" | "ongeldig";

const veld =
  "w-full rounded-lg border border-[#E2E2DE] bg-white px-4 py-3 text-base text-[#2D2D2D] focus:outline-none focus:border-[#28A8AA] focus:ring-2 focus:ring-[#28A8AA]/25";
const labelStijl = "block text-[15px] font-bold text-[#2D2D2D] mb-2";

/** Hele en halve uren, van de vroegste start tot de laatste die nog past. */
function starttijden(laatste: string) {
  const tijden: string[] = [];
  for (let minuut = VROEGSTE_STARTTIJD_UUR * 60; ; minuut += 30) {
    const t = `${String(Math.floor(minuut / 60)).padStart(2, "0")}:${String(minuut % 60).padStart(2, "0")}`;
    if (t > laatste) break;
    tijden.push(t);
  }
  return tijden;
}

export default function Calculator({
  keuze,
  zet,
  taal,
  formulierOpen,
  mistMoment,
  naarFormulier,
  children,
}: {
  keuze: Keuze;
  zet: (deel: Partial<Keuze>) => void;
  taal: Taal;
  /** Staat het tweede deel open? Dan komen de voorwaarden erbij. */
  formulierOpen: boolean;
  /** Iemand wilde boeken zonder datum of tijd. */
  mistMoment: boolean;
  /** Vouwt het tweede deel uit, als datum en tijd er zijn. */
  naarFormulier: () => void;
  /** Het tweede deel: de gegevens van de bezoeker, onder de keuzes. */
  children?: React.ReactNode;
}) {
  const t = TEKST[taal];
  const c = t.calculator;
  const prijs = berekenPrijs(keuze);

  const [codestand, setCodestand] = useState<Codestand>("leeg");
  const laatsteControle = useRef("");

  /**
   * Het deelnemersveld houdt zijn eigen tekst bij, los van het getal waarmee we
   * rekenen. Anders kun je het veld niet leegmaken: elke tussenstap werd meteen
   * naar minimaal 1 getrokken, en dan stond er een 1 die je niet weg kreeg en
   * waar je alleen nog achteraan kon typen.
   */
  const [aantalTekst, setAantalTekst] = useState(String(keuze.deelnemers));
  /**
   * Het getal dat wij zelf voor het laatst doorgaven. Verandert het aantal
   * buiten dit veld om — de knop "Bereken als Experience" doet dat — dan volgt
   * het veld. Zonder dit onderscheid overschreef de synchronisatie wat je aan
   * het typen was.
   */
  const zelfGezet = useRef(keuze.deelnemers);
  if (keuze.deelnemers !== zelfGezet.current) {
    zelfGezet.current = keuze.deelnemers;
    setAantalTekst(String(keuze.deelnemers));
  }

  function zetAantal(n: number) {
    zelfGezet.current = n;
    zet({ deelnemers: n });
  }

  /**
   * Het boekingsvenster. Bewust niet in een effect ná het monteren: dan stonden
   * `min` en `max` er nog niet bij de eerste klik, koos de bezoeker een datum
   * die te dichtbij lag, en gooide de browser die stilletjes weer weg. Precies
   * het "hij klikt een paar keer weg voordat hij blijft hangen" dat we zagen.
   *
   * De server rekent in UTC en de browser in lokale tijd; rond middernacht kan
   * dat een dag schelen. Vandaar suppressHydrationWarning op het veld.
   */
  const venster = useMemo(() => {
    const nu = new Date();
    return {
      min: alsDatumtekst(vroegsteDatum(nu, MIN_WERKDAGEN_VOORAF)),
      max: alsDatumtekst(laatsteDatum(nu, MAX_MAANDEN_VOORUIT)),
    };
  }, []);

  const laatsteStart = laatsteStarttijd(keuze.variant, LAATSTE_EINDTIJD_UUR);
  const tijden = useMemo(() => starttijden(laatsteStart), [laatsteStart]);

  /**
   * De code gaat naar de server, want de lijst met codes hoort niet in de
   * pagina te staan. Gebeurt er iets met het netwerk, dan behandelen we de code
   * als onbekend: liever geen korting dan een korting die niet bestaat.
   */
  async function controleerCode(code: string) {
    const schoon = code.trim();
    if (!schoon) {
      setCodestand("leeg");
      zet({ kortingspercentage: 0 });
      return;
    }
    if (schoon === laatsteControle.current && codestand !== "leeg") return;
    laatsteControle.current = schoon;
    setCodestand("bezig");
    try {
      const antwoord = await fetch("/api/ravenhack/korting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: schoon }),
      });
      const oordeel = (await antwoord.json()) as
        | { geldig: true; code: string; percentage: number }
        | { geldig: false };
      if (oordeel.geldig) {
        setCodestand("geldig");
        zet({ kortingscode: oordeel.code, kortingspercentage: oordeel.percentage });
      } else {
        setCodestand("ongeldig");
        zet({ kortingspercentage: 0 });
      }
    } catch {
      setCodestand("ongeldig");
      zet({ kortingspercentage: 0 });
    }
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
      {/* ── Links: de keuzes ── */}
      <div className="space-y-6">
        <fieldset>
          <legend className={labelStijl}>{c.spel}</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.keys(VARIANTEN) as VariantSleutel[]).map((sleutel) => {
              const v = VARIANTEN[sleutel];
              const actief = keuze.variant === sleutel;
              return (
                <label
                  key={sleutel}
                  className={`cursor-pointer rounded-xl border-2 px-5 py-4 transition-colors ${
                    actief
                      ? "border-[#EEBE3D] bg-[#FFFBEE]"
                      : "border-[#E7E7E3] bg-white hover:bg-[#FFFBEE]"
                  }`}
                >
                  <input
                    type="radio"
                    name="rh-variant"
                    className="sr-only"
                    checked={actief}
                    onChange={() => zet({ variant: sleutel })}
                  />
                  <span className="block font-bold text-[#2D2D2D] text-[17px] leading-snug">
                    {v.naam[taal]}
                  </span>
                  <span className="block text-sm text-[#6E7877] mt-1">{v.ondertitel[taal]}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <span className={labelStijl}>{c.taal}</span>
            <div className="flex gap-2">
              {(["nl", "en"] as SpelTaal[]).map((tl) => {
                const actief = keuze.spelTaal === tl;
                return (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => zet({ spelTaal: tl })}
                    aria-pressed={actief}
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-[15px] font-semibold transition-colors ${
                      actief
                        ? "border-[#EEBE3D] bg-[#FFFBEE] text-[#2D2D2D]"
                        : "border-[#E2E2DE] bg-white text-[#5F5F5F] hover:bg-[#FFFBEE]"
                    }`}
                  >
                    {tl === "nl" ? "Nederlands" : "English"}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className={labelStijl} htmlFor="rh-deelnemers">
              {c.deelnemers}
            </label>
            <input
              id="rh-deelnemers"
              type="number"
              inputMode="numeric"
              min={1}
              max={999}
              value={aantalTekst}
              onChange={(e) => {
                const tekst = e.target.value;
                setAantalTekst(tekst);
                // Leeg mag, terwijl je typt. Voor de prijs rekenen we dan even
                // met de basis; zodra er weer een getal staat, telt dat.
                const n = Number(tekst);
                if (tekst !== "" && Number.isFinite(n)) {
                  zetAantal(Math.max(1, Math.min(999, Math.round(n))));
                }
              }}
              onBlur={() => {
                // Leeg of onzin achtergelaten? Dan zetten we het getal terug dat
                // we hebben, zodat er nooit een leeg veld blijft staan.
                const n = Number(aantalTekst);
                if (aantalTekst === "" || !Number.isFinite(n) || n < 1) {
                  setAantalTekst(String(keuze.deelnemers));
                } else {
                  const net = Math.max(1, Math.min(999, Math.round(n)));
                  setAantalTekst(String(net));
                  if (net !== keuze.deelnemers) zetAantal(net);
                }
              }}
              className={veld}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelStijl} htmlFor="rh-datum">
              {c.datum}
            </label>
            <input
              id="rh-datum"
              type="date"
              value={keuze.datum}
              min={venster.min}
              max={venster.max}
              suppressHydrationWarning
              onChange={(e) => {
                zet({ datum: e.target.value });
              }}
              className={veld}
            />
          </div>
          <div>
            <label className={labelStijl} htmlFor="rh-tijd">
              {c.tijd}
            </label>
            {/* Een keuzelijst en geen tijdveld: zo zijn alleen hele en halve
                uren te kiezen, en zie je meteen tot hoe laat het kan. */}
            <select
              id="rh-tijd"
              value={keuze.tijd}
              onChange={(e) => {
                zet({ tijd: e.target.value });
              }}
              className={veld}
            >
              <option value="">—</option>
              {tijden.map((tijd) => (
                <option key={tijd} value={tijd}>
                  {tijd}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelStijl} htmlFor="rh-korting">
            {c.kortingscode}
          </label>
          <div className="flex gap-2">
            <input
              id="rh-korting"
              type="text"
              value={keuze.kortingscode}
              onChange={(e) => {
                zet({ kortingscode: e.target.value, kortingspercentage: 0 });
                setCodestand("leeg");
              }}
              onBlur={(e) => controleerCode(e.target.value)}
              className={veld}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => controleerCode(keuze.kortingscode)}
              className="shrink-0 rounded-lg border border-[#D2D2D0] px-5 text-[15px] font-bold text-[#2D2D2D] hover:border-[#2D2D2D] transition-colors"
            >
              {c.kortingscodeControleer}
            </button>
          </div>
          {codestand === "geldig" && (
            <p className="text-[15px] text-[#28A8AA] font-semibold mt-2">
              {c.kortingscodeGeldig} {keuze.kortingspercentage}%
            </p>
          )}
          {codestand === "ongeldig" && (
            <p className="text-[15px] text-[#C64A60] mt-2">{c.kortingscodeOngeldig}</p>
          )}
        </div>

        {children}
      </div>

      {/* ── Rechts: de uitkomst ── */}
      <div className="rounded-xl border border-[#E7E7E3] bg-[#F7F7F5] p-6 lg:sticky lg:top-24">
        {prijs.toonPrijs ? (
          <PrijsRegel prijs={prijs} invoer={keuze} taal={taal} />
        ) : (
          <p className="font-bold text-[#2D2D2D] text-[17px] leading-snug">
            {prijs.status === "quick-te-groot" ? t.quickTeGroot : t.teGroot}
          </p>
        )}

        {prijs.status === "quick-te-groot" && (
          <button
            type="button"
            onClick={() => zet({ variant: "experience" })}
            className="mt-4 w-full rounded bg-[#EEBE3D] px-5 py-3 text-[15px] font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
          >
            {t.quickOmzetten}
          </button>
        )}

        {prijs.status === "onder-minimum" && (
          <p className="mt-4 text-[15px] text-[#434343] leading-relaxed">{t.onderMinimum}</p>
        )}

        {prijs.status === "te-groot" && (
          <Link
            href={ADVIES_LINK[taal]}
            className="mt-4 inline-block text-[15px] font-bold text-[#28A8AA] hover:underline"
          >
            {t.overlegLink} →
          </Link>
        )}

        <p className="mt-5 border-t border-[#E7E7E3] pt-4 text-[15px] text-[#6E7877] leading-relaxed">
          {t.toeslagregel}
        </p>

        {prijs.toonPrijs && !formulierOpen && (
          <>
            <button
              type="button"
              onClick={naarFormulier}
              className="mt-5 block w-full rounded bg-[#EEBE3D] px-5 py-3.5 text-center text-base font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
            >
              {c.naarFormulier}
            </button>
            {mistMoment && (
              <p className="mt-2.5 text-[15px] font-semibold text-[#2D2D2D] leading-relaxed">
                {c.datumNodig}
              </p>
            )}
          </>
        )}

        {formulierOpen && (
          <ul className="mt-5 border-t border-[#E7E7E3] pt-4 space-y-2.5">
            {t.voorwaarden.map((v) => (
              <li key={v} className="text-[15px] text-[#434343] leading-relaxed">
                {v}
              </li>
            ))}
          </ul>
        )}

        <Disclaimer taal={taal} />
      </div>
    </div>
  );
}

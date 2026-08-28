"use client";

import { useEffect, useRef, useState } from "react";
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

const veldRand =
  "w-full rounded-lg border border-[#E2E2DE] bg-white px-4 py-3 text-base text-[#2D2D2D] focus:outline-none focus:border-[#28A8AA] focus:ring-2 focus:ring-[#28A8AA]/25";
const labelStijl = "block text-sm font-bold text-[#2D2D2D] mb-2";

export default function Calculator({
  keuze,
  zet,
  taal,
  naarFormulier,
}: {
  keuze: Keuze;
  zet: (deel: Partial<Keuze>) => void;
  taal: Taal;
  /** Zet de sectie op de tweede stap: het formulier. */
  naarFormulier: () => void;
}) {
  const t = TEKST[taal];
  const c = t.calculator;
  const prijs = berekenPrijs(keuze);
  const variant = VARIANTEN[keuze.variant];

  const [codestand, setCodestand] = useState<Codestand>("leeg");
  const laatsteControle = useRef("");

  // Het boekingsvenster wordt in de browser bepaald: op de server is "vandaag"
  // in UTC, en dan kan de vroegste datum er een dag naast zitten.
  const [venster, setVenster] = useState<{ min: string; max: string } | null>(null);
  useEffect(() => {
    const nu = new Date();
    setVenster({
      min: alsDatumtekst(vroegsteDatum(nu, MIN_WERKDAGEN_VOORAF)),
      max: alsDatumtekst(laatsteDatum(nu, MAX_MAANDEN_VOORUIT)),
    });
  }, []);

  const laatsteStart = laatsteStarttijd(keuze.variant, LAATSTE_EINDTIJD_UUR);
  const teLaat = keuze.tijd !== "" && keuze.tijd > laatsteStart;
  const teVroeg =
    keuze.tijd !== "" && keuze.tijd < `${String(VROEGSTE_STARTTIJD_UUR).padStart(2, "0")}:00`;

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
                  <span className="block font-bold text-[#2D2D2D] leading-snug">{v.naam[taal]}</span>
                  <span className="block text-[13px] text-[#7A8483] mt-1">{v.ondertitel[taal]}</span>
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
                    className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-colors ${
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
              value={keuze.deelnemers}
              onChange={(e) => {
                const n = Number(e.target.value);
                zet({ deelnemers: Number.isFinite(n) ? Math.max(1, Math.min(999, n)) : 1 });
              }}
              className={veldRand}
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
              min={venster?.min}
              max={venster?.max}
              onChange={(e) => zet({ datum: e.target.value })}
              className={veldRand}
            />
          </div>
          <div>
            <label className={labelStijl} htmlFor="rh-tijd">
              {c.tijd}
            </label>
            <input
              id="rh-tijd"
              type="time"
              step={900}
              value={keuze.tijd}
              onChange={(e) => zet({ tijd: e.target.value })}
              className={veldRand}
            />
          </div>
        </div>
        <p className="text-[13px] text-[#7A8483] -mt-2">
          {c.datumOptioneel} {t.beschikbaarheid}
        </p>

        {(teLaat || teVroeg) && (
          <p className="text-sm text-[#C64A60] font-semibold">
            {taal === "nl"
              ? `Een sessie van ${variant.duurMinuten} minuten start tussen ${String(VROEGSTE_STARTTIJD_UUR).padStart(2, "0")}:00 en ${laatsteStart}. Wilt u later beginnen? Neem even contact op.`
              : `A ${variant.duurMinuten}-minute session starts between ${String(VROEGSTE_STARTTIJD_UUR).padStart(2, "0")}:00 and ${laatsteStart}. Want to start later? Do get in touch.`}
          </p>
        )}

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
              className={veldRand}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => controleerCode(keuze.kortingscode)}
              className="shrink-0 rounded-lg border border-[#D2D2D0] px-5 text-sm font-bold text-[#2D2D2D] hover:border-[#2D2D2D] transition-colors"
            >
              {c.kortingscodeControleer}
            </button>
          </div>
          {codestand === "geldig" && (
            <p className="text-sm text-[#28A8AA] font-semibold mt-2">
              {c.kortingscodeGeldig} {keuze.kortingspercentage}%
            </p>
          )}
          {codestand === "ongeldig" && (
            <p className="text-sm text-[#C64A60] mt-2">{c.kortingscodeOngeldig}</p>
          )}
        </div>
      </div>

      {/* ── Rechts: de uitkomst ── */}
      <div className="rounded-xl border border-[#E7E7E3] bg-[#F7F7F5] p-6 lg:sticky lg:top-24">
        {prijs.toonPrijs ? (
          <PrijsRegel prijs={prijs} invoer={keuze} taal={taal} />
        ) : (
          <p className="font-bold text-[#2D2D2D] leading-snug">
            {prijs.status === "quick-te-groot" ? t.quickTeGroot : t.teGroot}
          </p>
        )}

        {prijs.status === "quick-te-groot" && (
          <button
            type="button"
            onClick={() => zet({ variant: "experience" })}
            className="mt-4 w-full rounded bg-[#EEBE3D] px-5 py-3 text-sm font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
          >
            {t.quickOmzetten}
          </button>
        )}

        {prijs.status === "onder-minimum" && (
          <p className="mt-4 text-sm text-[#434343] leading-relaxed">{t.onderMinimum}</p>
        )}

        {prijs.status === "te-groot" && (
          <Link
            href={ADVIES_LINK[taal]}
            className="mt-4 inline-block text-sm font-bold text-[#28A8AA] hover:underline"
          >
            {t.overlegLink} →
          </Link>
        )}

        <p className="mt-5 border-t border-[#E7E7E3] pt-4 text-[13px] text-[#7A8483] leading-relaxed">
          {t.toeslagregel}
        </p>

        {prijs.toonPrijs && (
          <button
            type="button"
            onClick={naarFormulier}
            className="mt-5 block w-full rounded bg-[#EEBE3D] px-5 py-3 text-center text-sm font-bold text-[#2D2D2D] hover:bg-[#D4A835] transition-colors"
          >
            {c.naarFormulier}
          </button>
        )}

        <Disclaimer taal={taal} />
      </div>
    </div>
  );
}

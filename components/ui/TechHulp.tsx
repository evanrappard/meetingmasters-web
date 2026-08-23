"use client";

import { useEffect, useMemo, useState } from "react";
import type { Categorie, Vraag } from "@/app/nl/technologie/hulp/vragen";
import type { Taal } from "@/lib/talen";

/**
 * Hulp voor iemand die vastloopt, in de volgorde waarin hij denkt:
 *
 *   1. wat gaat er mis?      (symptoom)
 *   2. waar zit je?          (tool — mag je overslaan)
 *   3. dit ga je doen        (antwoord)
 *
 * Bewust andersom dan een gewone FAQ. Wie in stress is, weet wél dat hij niets
 * hoort, maar niet altijd of hij in Zoom of Teams zit. Daarom kan stap 2 worden
 * overgeslagen met "{t.weetNiet}" — die leidt naar het herkennen van de
 * link, én laat je gewoon doorgaan met de algemene antwoorden.
 */

const TOOL_INFO: Record<string, { logo: string; adres: string }> = {
  SpatialChat: { logo: "spatialchat", adres: "spatial.chat" },
  Zoom: { logo: "zoom", adres: "zoom.us" },
  "Zoom Events": { logo: "zoom-events", adres: "events.zoom.us" },
  "Microsoft Teams": { logo: "teams", adres: "teams.microsoft.com" },
};

function normaliseer(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Woorden die niets onderscheiden. Zonder deze lijst matcht "ik hoor niets"
// op elke vraag waarin "ik" voorkomt. Beide talen staan in één lijst: een
// Engelse bezoeker die per ongeluk Nederlands typt krijgt zo nog steeds
// bruikbare resultaten, en het scheelt een schakelaar in de zoekfunctie.
const VULWOORDEN = new Set([
  "ik", "je", "jij", "mijn", "me", "het", "de", "een", "en", "of", "is", "zijn",
  "niet", "geen", "wat", "hoe", "waar", "wie", "kan", "kun", "moet", "doe",
  "doet", "er", "in", "op", "aan", "van", "voor", "met", "te", "bij", "dan",
  "maar", "als", "dat", "die", "dit", "nu", "wel", "ook", "nog", "worden",
  "the", "and", "or", "is", "are", "am", "my", "me", "it", "to", "of", "for",
  "with", "at", "on", "in", "a", "an", "do", "does", "did", "can", "cannot",
  "cant", "how", "what", "where", "who", "when", "why", "not", "no", "get",
  "got", "have", "has", "will", "would", "should", "there", "this", "that",
  "but", "if", "so", "any", "all", "you", "your", "we", "our",
]);

function woorden(s: string) {
  return normaliseer(s)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !VULWOORDEN.has(w));
}

type Kleur = { rand: string; vlak: string; randHex: string; vlakHex: string; beeld: string };

/** De vaste teksten van het hulpblok, per taal. */
const T = {
  nl: {
    kicker: "Support voor meetings",
    kop: "Wat is je probleem?",
    onder: "De meeste dingen zijn in drie stappen opgelost.",
    waar: "Waar vindt je meeting plaats?",
    weetNiet: "Dat weet ik niet",
    nietGevonden: "Hier staat het antwoord niet bij.",
    zoekPlaceholder: "Of typ hier je probleem, bijvoorbeeld “ik hoor niets”",
    zoekLabel: "Zoek in de hulpvragen",
  },
  en: {
    kicker: "Support for meetings",
    kop: "What is the problem?",
    onder: "Most things are sorted in three steps.",
    waar: "Where is your meeting taking place?",
    weetNiet: "I do not know",
    nietGevonden: "The answer is not here.",
    zoekPlaceholder: "Or type your problem here, for instance “I cannot hear anything”",
    zoekLabel: "Search the help questions",
  },
} as const;

export default function TechHulp({
  categorieen,
  tools,
  vragen,
  kleuren = {},
  taal = "nl",
}: {
  categorieen: Categorie[];
  tools: string[];
  vragen: Vraag[];
  kleuren?: Record<string, Kleur>;
  taal?: Taal;
}) {
  const t = T[taal];
  const [symptoom, setSymptoom] = useState<string | null>(null);
  const [tool, setTool] = useState<string | null>(null);
  const [weetNiet, setWeetNiet] = useState(false);
  const [zoek, setZoek] = useState("");

  // De blokken in de hero linken naar #hulp-audio en dergelijke. Zonder dit
  // scrolde je wel, maar moest je het probleem hieronder nóg een keer kiezen.
  useEffect(() => {
    const uitHash = () => {
      const h = window.location.hash.replace("#hulp-", "");
      if (h && categorieen.some((c) => c.id === h)) setSymptoom(h);
    };
    uitHash();
    window.addEventListener("hashchange", uitHash);
    return () => window.removeEventListener("hashchange", uitHash);
  }, [categorieen]);

  const zoekend = zoek.trim().length > 1;

  const resultaten = useMemo(() => {
    if (zoekend) {
      const q = normaliseer(zoek.trim());
      const termen = woorden(zoek);

      // Eerst de hele zin proberen; dat is het meest precies. Levert dat niets
      // op, dan per woord — zodat "ik hoor niets" ook "Ik hoor niemand" vindt.
      const scoor = (v: Vraag) => {
        const tekst = normaliseer([v.vraag, v.antwoord, ...(v.stappen ?? [])].join(" "));
        const titel = normaliseer(v.vraag);
        if (q.length > 2 && tekst.includes(q)) return 100 + (titel.includes(q) ? 10 : 0);
        if (termen.length === 0) return 0;
        const raak = termen.filter((w) => tekst.includes(w));
        if (raak.length === 0) return 0;
        return raak.length * 10 + termen.filter((w) => titel.includes(w)).length * 5;
      };

      return vragen
        .map((v) => ({ v, score: scoor(v) + (tool && v.tool === tool ? 3 : 0) }))
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12)
        .map((r) => r.v);
    }
    if (!symptoom) return [];
    const inCategorie = vragen.filter((v) => v.categorie === symptoom);
    if (!tool) return inCategorie.filter((v) => v.tool === "Algemeen");
    // Heeft de gekozen tool eigen antwoorden, dan zijn die het meest precies.
    // De algemene set zegt vaak hetzelfde in andere woorden; die twee naast
    // elkaar tonen dwingt de bezoeker om zelf te ontdubbelen.
    const perTool = inCategorie.filter((v) => v.tool === tool);
    return perTool.length > 0 ? perTool : inCategorie.filter((v) => v.tool === "Algemeen");
  }, [vragen, zoek, zoekend, symptoom, tool]);

  const huidigeCategorie = categorieen.find((c) => c.id === symptoom);

  function kiesSymptoom(id: string) {
    setSymptoom((was) => (was === id ? null : id));
    setZoek("");
  }

  return (
    <div>
      {/* ── Stap 1: wat gaat er mis? ───────────────────────────────── */}
      <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">{t.kicker}</p>
      <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-1">{t.kop}</h2>
      <p className="text-[#5F5F5F] text-sm mb-5">{t.onder}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-3">
        {categorieen.map((c) => {
          const actief = symptoom === c.id;
          const k = kleuren[c.id];
          return (
            <button
              key={c.id}
              onClick={() => kiesSymptoom(c.id)}
              aria-pressed={actief}
              className={`group flex items-stretch overflow-hidden text-left rounded-xl border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2D2D]/25 ${
                actief ? "border-[#EEBE3D] bg-[#FFFBEE]" : "border-[#E7E7E3] bg-white hover:bg-[#FFFBEE]"
              }`}
            >
              {/* Eerste kwart is beeld, de rest tekst. */}
              <span className="w-1/4 shrink-0 self-stretch" style={{ background: k?.vlakHex }}>
                {k?.beeld && (
                  <img src={k.beeld} alt="" aria-hidden loading="lazy" className="w-full h-full object-cover" />
                )}
              </span>
              <span className="flex-1 min-w-0 px-5 py-4">
                <span className="block font-bold text-[#2D2D2D] text-base leading-snug">{c.label}</span>
                {c.intro && (
                  <span className="block text-[13px] text-[#7A8483] leading-snug mt-1">{c.intro}</span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Zoeken, voor wie liever typt ─────────────────────────────── */}
      <div className="relative mt-4">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAAAAA]" aria-hidden>🔍</span>
        <input
          type="search"
          value={zoek}
          onChange={(e) => setZoek(e.target.value)}
          placeholder={t.zoekPlaceholder}
          aria-label={t.zoekLabel}
          className="w-full rounded-lg border border-[#E2E2DE] bg-[#F4F4F1] pl-11 pr-4 py-3.5 text-base text-[#2D2D2D] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#28A8AA] focus:ring-2 focus:ring-[#28A8AA]/25"
        />
      </div>

      {/* ── Stap 2: waar vindt je meeting plaats? ─────────────────────── */}
      {symptoom && !zoekend && (
        <div className="mt-6 rounded-xl border border-[#EBEBEB] overflow-hidden">
          <div className="bg-[#F7F7F5] px-5 py-3.5 border-b border-[#EBEBEB]">
            <p className="font-bold text-[#2D2D2D]">{t.waar}</p>
            <p className="text-[13px] text-[#7A8483]">Dan maken we het antwoord meteen specifiek. Weet je het niet? Ook prima.</p>
          </div>

          <div className="flex flex-wrap items-stretch gap-2 px-5 py-4">
            {tools
              .filter((t) => t !== "Algemeen")
              .map((t) => {
                const actief = tool === t;
                const info = TOOL_INFO[t];
                return (
                  <button
                    key={t}
                    onClick={() => { setTool(actief ? null : t); setWeetNiet(false); }}
                    aria-pressed={actief}
                    aria-label={t}
                    className={`px-4 py-3 rounded-lg border-2 bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2D2D]/25 ${
                      actief ? "border-[#EEBE3D] bg-[#FFFBEE]" : "border-[#E2E2DE] hover:bg-[#FFFBEE]"
                    }`}
                  >
                    {info ? (
                      <img
                        src={`/images/logos/tools/${info.logo}.webp`}
                        alt={t}
                        width={440}
                        height={176}
                        className="h-6 w-auto max-w-[124px] object-contain"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-[#2D2D2D]">{t}</span>
                    )}
                  </button>
                );
              })}
            <button
              onClick={() => { setWeetNiet((w) => !w); setTool(null); }}
              aria-expanded={weetNiet}
              className={`text-sm font-semibold px-4 py-3 rounded-lg border-2 border-dashed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2D2D]/25 ${
                weetNiet ? "border-[#EEBE3D] bg-[#FFFBEE] text-[#2D2D2D]" : "border-[#C4CBCA] bg-white text-[#6E7877] hover:bg-[#FFFBEE]"
              }`}
            >
              {t.weetNiet}
            </button>
          </div>

          {weetNiet && (
            <p className="border-t border-[#EBEBEB] bg-[#FCFCFB] px-5 py-3.5 text-sm text-[#434343] leading-relaxed">
              Kijk naar het begin van de link in je uitnodiging:{" "}
              {Object.entries(TOOL_INFO).map(([naam, i], n, r) => (
                <span key={naam}>
                  <button
                    onClick={() => { setTool(naam); setWeetNiet(false); }}
                    className="text-[#28A8AA] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#28A8AA]/40 rounded"
                  >
                    {i.adres}
                  </button>
                  {n < r.length - 1 ? ", " : ". "}
                </span>
              ))}
              Kun je het niet vinden? Sla dit gerust over.
            </p>
          )}
        </div>
      )}

      {/* ── Stap 3: het antwoord ─────────────────────────────────────── */}
      {(symptoom || zoekend) && (
        <div className="mt-7">
          {zoekend ? (
            <p className="text-sm text-[#6D6D6D] mb-4">
              {resultaten.length} {resultaten.length === 1 ? "resultaat" : "resultaten"} voor “{zoek.trim()}”
            </p>
          ) : (
            <h3 className="text-lg font-bold text-[#2D2D2D] mb-4">
              {huidigeCategorie?.label}
              {tool && <span className="text-[#7A8483] font-semibold"> · {tool}</span>}
            </h3>
          )}

          {resultaten.length === 0 ? (
            <div className="rounded-xl border border-[#E8E8E8] bg-[#F9F9F7] p-6">
              <p className="font-bold text-[#2D2D2D] mb-1">{t.nietGevonden}</p>
              <p className="text-sm text-[#5F5F5F]">
                Probeer een ander woord, of kies hierboven een andere tool. Is het een begeleide bijeenkomst
                van MeetingMasters? Dan staat je contactpersoon klaar — die vind je in je uitnodiging.
              </p>
            </div>
          ) : (
            <div className="border-t border-[#F0F0F0]">
              {resultaten.map((v, i) => (
                <details key={v.id} className="group border-b border-[#F0F0F0] py-4" open={i === 0 && !zoekend}>
                  <summary className="flex justify-between items-start gap-4 list-none cursor-pointer">
                    <span className="font-semibold text-[#2D2D2D] text-[15px] leading-snug">
                      {zoekend && v.tool !== "Algemeen" && (
                        <span className="inline-block align-middle mr-2 text-[10px] font-bold uppercase tracking-wide text-[#6E7877] bg-[#F0F3F3] rounded px-2 py-0.5">
                          {v.tool}
                        </span>
                      )}
                      {v.vraag}
                    </span>
                    <span className="text-[#28A8AA] font-bold text-lg leading-none group-open:rotate-45 transition-transform shrink-0" aria-hidden>+</span>
                  </summary>

                  {v.stappen ? (
                    <ol className="mt-3 space-y-2.5">
                      {v.stappen.map((s, j) => (
                        <li key={j} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                          <span className="w-6 h-6 rounded-full bg-[#28A8AA] text-white text-xs font-bold grid place-items-center mt-0.5">{j + 1}</span>
                          <span className="text-sm text-[#434343] leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-sm text-[#444444] leading-relaxed mt-3 whitespace-pre-line">{v.antwoord}</p>
                  )}

                </details>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Rustpunt voor wie nog niets koos ─────────────────────────── */}
    </div>
  );
}

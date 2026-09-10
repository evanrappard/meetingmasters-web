"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { bewaarEventwens } from "@/lib/eventwens";
import { meet } from "@/lib/meten";

/**
 * Het keuzeblok op de events-pagina: "Waar ben je naar op zoek?"
 *
 * Waarom dit blok bestaat: de volledige lijst met twintig formats staat verderop
 * en is voor wie precies weet wat hij zoekt. Wie dat niet weet, kiest hier eerst
 * een doel en vertelt daarna in eigen woorden wat er speelt. Die eigen woorden
 * zijn het punt van het hele blok. Niet iedereen noemt zijn bijeenkomst
 * hetzelfde, en "strategiedag voor 120 mensen uit 9 kantoren" zegt ons meer dan
 * welk knopje er is aangeklikt.
 *
 * Daarom klik je hier ook niet meteen door: een format aanklikken kiest het,
 * het stuurt je niet weg. Pas op "Ga" ga je naar de eventpagina, en dan reist
 * de getypte tekst mee (zie `lib/eventwens.ts`), zodat hij al in het berichtveld
 * staat als er verderop een formulier in beeld komt.
 *
 * ── Licht houden is hier een eis, geen smaak ──
 * Dit is een startpunt voor een keuze, geen categorie waar je je aan vastlegt.
 * Vandaar lichte knopjes zonder tekst eronder, en de formats in een popup die
 * onder het knopje hangt in plaats van in een vlak dat de pagina openbreekt.
 * Wat je koos blijft daarna als geel bolletje onder de knopjes staan, zodat de
 * popup dicht kan zonder dat je keuze uit beeld verdwijnt.
 *
 * ── Werkt ook zonder JavaScript ──
 * Het open- en dichtklappen doet CSS, niet React: elk knopje is een `<label>`
 * met een echte radioknop erin, en de bijbehorende popup wordt zichtbaar met
 * `:has(...:checked)`. Alle twintig formatlinks staan dus in de HTML die de
 * server verstuurt, ook de dichtgeklapte, en elke regel heeft naast de keuze een
 * gewone link naar de pagina zelf. Zonder JavaScript blijft de popup gewoon
 * openstaan (daar is je keuze dan te zien) en werkt alles behalve de "Ga"-knop.
 */

export type KiezerFormat = { slug: string; titel: string; href: string };
export type KiezerDoel = { id: string; label: string; formats: KiezerFormat[] };

export type KiezerTeksten = {
  kicker: string;
  kop: string;
  /** Het zesde knopje, dat geen formats heeft. */
  andersLabel: string;
  /** Eén regel boven de formats in de popup. Houdt de keuze laagdrempelig. */
  kiesHint: string;
  /** Staat in de popup van "Anders", die geen formats heeft. */
  andersTekst: string;
  /** Onzichtbare namen van de keuzegroepen, voor schermlezers. */
  legendaDoel: string;
  legendaFormat: string;
  /** Voor schermlezers en de tooltip: "%s" wordt de naam van het format. */
  bekijkTitel: string;
  veldLabel: string;
  placeholder: string;
  ga: string;
  /** Onzichtbaar; vertelt een schermlezer waarom "Ga" nog uit staat. */
  gaHint: string;
  alle: string;
  advies: string;
};

type Props = {
  doelen: KiezerDoel[];
  t: KiezerTeksten;
  /** Waar "Vrijblijvend advies" heen gaat: de adviespagina in de juiste taal. */
  adviesHref: string;
};

/** Het id van de radioknop bij een doel. Staat ook in de CSS hieronder. */
const doelId = (id: string) => `mm-doel-${id}`;

/**
 * De stijlregels die het open- en dichtklappen doen. Dit staat met opzet niet
 * in Tailwind-klassen: het gaat om regels die van de stand van een radioknop
 * afhangen en die een ander element aanwijzen, en dat leest zo een stuk beter
 * dan een rij varianten op elk element.
 */
function stijl(doelen: KiezerDoel[]) {
  const popups = doelen
    .map(
      (d) =>
        `.mm-kiezer:has(#${doelId(d.id)}:checked) [data-paneel="${d.id}"]{display:block}`,
    )
    .join("\n");
  return `
.mm-kiezer [data-paneel]{display:none}
${popups}
.mm-knop:has(input:checked){background:#FFFBEE;border-color:#EEBE3D}
.mm-knop:has(input:checked) .mm-pijl{transform:rotate(180deg);color:#2D2D2D}
.mm-format:has(input:checked){background:#FFFBEE;box-shadow:inset 0 0 0 2px #EEBE3D}
/* Een focusring hoort bij het toetsenbord, niet bij de muis: met
   focus-within kreeg je hem ook na een gewone klik, en dan ziet een
   aangeklikt knopje er twee ringen dik uit. */
.mm-knop:has(:focus-visible),.mm-format:has(:focus-visible){outline:2px solid #EEBE3D;outline-offset:2px}
`.trim();
}

export default function EventKiezer({ doelen, t, adviesHref }: Props) {
  const router = useRouter();
  const blok = useRef<HTMLDivElement>(null);
  const [doel, setDoel] = useState<string | null>(null);
  const [format, setFormat] = useState<KiezerFormat | null>(null);
  /** Bij welk doel het gekozen format hoort: het bolletje hangt daaronder. */
  const [keuzeDoel, setKeuzeDoel] = useState<string | null>(null);
  const [tekst, setTekst] = useState("");

  const gekozenDoel = doelen.find((d) => d.id === doel);
  /**
   * Waar "Ga" heen gaat. Koos iemand een format, dan dat. Staat er alleen een
   * popup open, dan het eerste format van dat doel: dat is het format waar het
   * doel om draait. Bij "Anders" is er niets om heen te gaan.
   */
  const bestemming = format ?? gekozenDoel?.formats[0] ?? null;
  const gevuld = tekst.trim().length > 0;

  /** De tekst en de keuze bewaren voor de volgende pagina. */
  const bewaar = (slug?: string) =>
    bewaarEventwens({ tekst, doel: doel ?? undefined, format: slug });

  /** Alle radioknoppen van een groep uitzetten. Die staan buiten React. */
  const zetUit = (naam: string) => {
    for (const el of blok.current?.querySelectorAll<HTMLInputElement>(
      `input[name="${naam}"]`,
    ) ?? []) {
      el.checked = false;
    }
  };

  /** De popup sluiten. Wat er gekozen is, blijft eronder staan. */
  const sluit = () => {
    zetUit("mm-doel");
    setDoel(null);
  };

  /**
   * Een popup hoort te sluiten als je ernaast klikt of op Escape drukt. Zonder
   * JavaScript blijft hij openstaan; dat is geen fout, alleen minder handig.
   */
  useEffect(() => {
    if (!doel) return;
    const bijKlik = (e: MouseEvent) => {
      if (!blok.current?.contains(e.target as Node)) sluit();
    };
    const bijToets = (e: KeyboardEvent) => {
      if (e.key === "Escape") sluit();
    };
    document.addEventListener("mousedown", bijKlik);
    document.addEventListener("keydown", bijToets);
    return () => {
      document.removeEventListener("mousedown", bijKlik);
      document.removeEventListener("keydown", bijToets);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doel]);

  const kiesDoel = (id: string) => {
    setDoel(id);
    meet("events_goal_select", { doel: id, format: "", route: "doel" });
    /*
     * De popup hangt onder het knopje. Staat dat knopje onderaan het scherm,
     * dan valt de popup erbuiten. Met "nearest" gebeurt er niets zolang hij al
     * in beeld staat, en dat is op een breed scherm bijna altijd zo.
     */
    requestAnimationFrame(() => {
      blok.current
        ?.querySelector<HTMLElement>(`[data-paneel="${id}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  const kiesFormat = (id: string, f: KiezerFormat) => {
    setFormat(f);
    setKeuzeDoel(id);
    bewaarEventwens({ tekst, doel: id, format: f.slug });
    meet("events_goal_select", { doel: id, format: f.slug, route: "kies" });
    // Gekozen is gekozen: de popup mag dicht. Het gele bolletje eronder houdt
    // zichtbaar wát er gekozen is.
    sluit();
  };

  return (
    <section
      id="jouw-event"
      className="scroll-mt-24 bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="mm-kiezer" ref={blok}>
          <style dangerouslySetInnerHTML={{ __html: stijl(doelen) }} />

          <div className="mb-7">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.kop}
            </h2>
          </div>

          {/* ── De zes knopjes, twee rijen van drie ── */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="sr-only">{t.legendaDoel}</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-4">
              {doelen.map((d) => (
                <div key={d.id} className="relative">
                  {/*
                   * Het knopje en het gekozen event zijn samen één vlak: is er
                   * iets gekozen, dan klapt het onderaan het knopje uit in
                   * plaats van eronder los te komen hangen. Vandaar één omhulsel
                   * met de rand en de gele vulling, en een knopje dat zijn eigen
                   * rand dan afstaat. De hoekafronding is precies de halve
                   * hoogte van het knopje, zodat de bovenkant een pil blijft.
                   */}
                  <div
                    className={
                      keuzeDoel === d.id && format
                        ? "rounded-[22px] border border-[#EEBE3D] bg-[#FFFBEE]"
                        : ""
                    }
                  >
                    <label
                      className={`mm-knop cursor-pointer px-5 py-2.5 flex items-center justify-between gap-2 text-left transition-colors hover:bg-[#FFFBEE] hover:border-[#EEBE3D] ${
                        keuzeDoel === d.id && format
                          ? "rounded-[22px] border border-transparent bg-transparent"
                          : "rounded-full border border-[#D8D7CE] bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="mm-doel"
                        id={doelId(d.id)}
                        className="sr-only"
                        onChange={() => kiesDoel(d.id)}
                      />
                      <span className="text-sm font-bold text-[#2D2D2D] leading-snug">
                        {d.label}
                      </span>
                      <ChevronDown
                        className="mm-pijl w-4 h-4 flex-shrink-0 text-[#8C8B80] transition-transform"
                        aria-hidden="true"
                      />
                    </label>

                    {/* De popup onder het knopje. Alle popups staan in de HTML;
                      CSS laat er één zien. */}
                    <div
                      data-paneel={d.id}
                      className="absolute left-0 top-full z-30 mt-2 w-full min-w-[240px] scroll-mt-24 rounded-xl border border-[#D8D7CE] bg-white p-3 shadow-xl"
                    >
                      {d.formats.length === 0 ? (
                        <p className="text-sm text-[#434343] leading-relaxed">
                          {t.andersTekst}
                        </p>
                      ) : (
                        <fieldset className="border-0 p-0 m-0">
                          <legend className="sr-only">{t.legendaFormat}</legend>
                          <p className="text-xs text-[#8C8B80] leading-snug mb-2 px-1">
                            {t.kiesHint}
                          </p>
                          {/* Bewust geen ul/li: `main li` krijgt in globals.css een
                            leesbreedte mee (60vw), en dan houdt elke regel
                            rechts een gat over. */}
                          <div className="space-y-1">
                            {d.formats.map((f) => (
                              <div
                                key={f.slug}
                                className="flex items-center gap-1"
                              >
                                <label className="mm-format flex-1 cursor-pointer rounded-lg px-3 py-2 flex items-center transition-colors hover:bg-[#FFFBEE]">
                                  <input
                                    type="radio"
                                    name="mm-format"
                                    className="sr-only"
                                    onChange={() => kiesFormat(d.id, f)}
                                  />
                                  <span className="text-sm font-bold text-[#2D2D2D] leading-snug">
                                    {f.titel}
                                  </span>
                                </label>
                                <Link
                                  href={f.href}
                                  title={t.bekijkTitel.replace("%s", f.titel)}
                                  aria-label={t.bekijkTitel.replace(
                                    "%s",
                                    f.titel,
                                  )}
                                  onClick={() => {
                                    bewaar(f.slug);
                                    meet("events_goal_select", {
                                      doel: d.id,
                                      format: f.slug,
                                      route: "direct",
                                    });
                                  }}
                                  className="flex-shrink-0 p-2 rounded-lg text-[#28A8AA] hover:text-[#1E8E90] hover:bg-[#FFFBEE] transition-colors"
                                >
                                  <ArrowRight
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      )}
                    </div>

                    {/* De uitgeklapte onderkant: wát er binnen dit doel gekozen
                        is. Zit vast aan het knopje erboven, met een haarlijn
                        ertussen zodat te zien blijft dat het uitgeklapt is. */}
                    {format && keuzeDoel === d.id && (
                      <Link
                        href={format.href}
                        onClick={() => {
                          bewaar(format.slug);
                          meet("events_goal_select", {
                            doel: d.id,
                            format: format.slug,
                            route: "keuze",
                            tekst_gevuld: gevuld,
                          });
                        }}
                        className="mm-keuze flex items-center justify-between gap-2 border-t border-[#F2E4B5] px-5 py-2.5 text-sm font-bold text-[#2D2D2D] rounded-b-[22px] hover:bg-[#FFF5D6] transition-colors"
                      >
                        {format.titel}
                        <ArrowRight
                          className="w-4 h-4 text-[#8C8B80]"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          {/* ── Vertel het zelf ── */}
          <div className="mt-8 max-w-[720px]">
            <label
              htmlFor="mm-eventwens"
              className="block font-bold text-[#2D2D2D] mb-3"
            >
              {t.veldLabel}
            </label>
            <textarea
              id="mm-eventwens"
              name="eventwens"
              rows={3}
              value={tekst}
              onChange={(e) => {
                setTekst(e.target.value);
                // Meteen bewaren, zodat de tekst ook meereist als iemand op de
                // link in een popup klikt.
                bewaarEventwens({
                  tekst: e.target.value,
                  doel: doel ?? undefined,
                  format: format?.slug,
                });
              }}
              placeholder={t.placeholder}
              className="w-full rounded-xl border border-[#CFCEC4] bg-white px-4 py-3 text-[#2D2D2D] leading-relaxed placeholder:text-[#8C8B80] focus:outline-none focus:ring-2 focus:ring-[#EEBE3D] focus:border-[#EEBE3D]"
            />
          </div>

          {/* ── De drie routes ── */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!bestemming}
              /* Met een bestemming vertelt de knop waar hij heen gaat; zonder
                 bestemming blijft de naam "Ga" en komt de uitleg erbij als
                 beschrijving. Zet je de uitleg als naam, dan heet de knop voor
                 een schermlezer niet meer "Ga". */
              aria-label={
                bestemming ? `${t.ga}: ${bestemming.titel}` : undefined
              }
              aria-describedby={bestemming ? undefined : "mm-ga-hint"}
              onClick={() => {
                if (!bestemming) return;
                bewaar(bestemming.slug);
                meet("events_goal_select", {
                  doel: doel ?? "",
                  format: bestemming.slug,
                  route: "ga",
                  tekst_gevuld: gevuld,
                });
                router.push(bestemming.href);
              }}
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3 rounded hover:bg-[#D4A835] transition-colors disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:bg-[#EEBE3D]"
            >
              {t.ga}
            </button>
            {!bestemming && (
              <span id="mm-ga-hint" className="sr-only">
                {t.gaHint}
              </span>
            )}
            <a
              href="#formats"
              onClick={() => meet("events_view_all")}
              className="border border-[#B4B3A8] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#FFFBEE] hover:border-[#EEBE3D] transition-colors"
            >
              {t.alle}
            </a>
            <Link
              href={adviesHref}
              onClick={() => {
                bewaar(format?.slug);
                meet("events_contact", {
                  tekst_gevuld: gevuld,
                  doel: doel ?? "",
                });
              }}
              className="border border-[#B4B3A8] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#FFFBEE] hover:border-[#EEBE3D] transition-colors"
            >
              {t.advies}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

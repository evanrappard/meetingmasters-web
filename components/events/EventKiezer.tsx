"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { bewaarEventwens } from "@/lib/eventwens";
import FormatBol, { type FormatBolProps } from "@/components/events/FormatBol";
import { zoekEvents, type EventIndexItem } from "@/lib/eventzoek";
import { meet } from "@/lib/meten";

/**
 * Het keuzeblok op de events-pagina: "Waar ben je naar op zoek?"
 *
 * Twee ingangen, naast elkaar en los van elkaar:
 *
 * 1. **Kiezen.** Vijf knopjes met een doel; elk klapt een lijstje formats
 *    uit, en een klik op een format brengt je meteen naar die pagina. Het
 *    zesde knopje, "Anders", is geen lijstje maar een vinkje: "geen van
 *    deze vijf".
 * 2. **Beschrijven.** Een open tekstveld waarin je in eigen woorden vertelt
 *    wat je voor ogen hebt. Terwijl je typt zoekt het blok over alle events
 *    heen en toont de formats die daar het dichtst bij komen als dezelfde
 *    bollen als in de catalogus verderop, met erboven de woorden waarop dat
 *    is gebaseerd (zie `lib/eventzoek.ts`). Wie "webinar"
 *    typt, ziet Webinar; wie "kerstborrel voor 80 collega's" typt, ziet het
 *    kerstfeest.
 *
 * Er was eerst een volgorde in: eerst een doel kiezen, dan pas typen, dan op
 * "Ga". Dat voelde als een randvoorwaarde en dat was het niet bedoeld te zijn
 * (Emilie, 17 september 2026). Nu is er geen "Ga" meer: kiezen is gaan, en de
 * zoekresultaten zijn zelf de links.
 *
 * De getypte tekst blijft de kern van het blok. Hij reist mee naar de
 * volgende pagina (`lib/eventwens.ts`), zodat hij al in het berichtveld staat
 * als er verderop een formulier in beeld komt. Dat geldt voor elke weg
 * hiervandaan: een format, een zoekresultaat of "Vrijblijvend advies".
 *
 * ── Licht houden is hier een eis, geen smaak ──
 * Dit is een startpunt voor een keuze, geen categorie waar je je aan vastlegt.
 * Vandaar lichte knopjes zonder tekst eronder, en de formats in een popup die
 * onder het knopje hangt in plaats van in een vlak dat de pagina openbreekt.
 *
 * ── Werkt ook zonder JavaScript ──
 * Het open- en dichtklappen doet CSS, niet React: elk knopje is een `<label>`
 * met een echte radioknop erin, en de bijbehorende popup wordt zichtbaar met
 * `:has(...:checked)`. Alle formatlinks staan dus in de HTML die de server
 * verstuurt, ook de dichtgeklapte. Zonder JavaScript blijft de popup gewoon
 * openstaan en werkt alles behalve het zoeken.
 */

export type KiezerFormat = { slug: string; titel: string; href: string };
export type KiezerDoel = { id: string; label: string; formats: KiezerFormat[] };
/** Wat een zoekresultaat nodig heeft om als bol te verschijnen; de rest komt uit de index. */
export type KiezerBol = Pick<FormatBolProps, "bg" | "iconSrc" | "omschrijving" | "icoon">;

export type KiezerTeksten = {
  kicker: string;
  kop: string;
  /** Het zesde knopje, dat geen formats heeft maar een vinkje is. */
  andersLabel: string;
  /** Eén regel boven de formats in de popup. Houdt de keuze laagdrempelig. */
  kiesHint: string;
  /** Verschijnt boven het tekstveld zodra "Anders" is aangevinkt. */
  andersTekst: string;
  /** Onzichtbare naam van de keuzegroep, voor schermlezers. */
  legendaDoel: string;
  /** Voor schermlezers en de tooltip: "%s" wordt de naam van het format. */
  bekijkTitel: string;
  veldLabel: string;
  placeholder: string;
  /** Boven de zoekresultaten: "%s" wordt de lijst met getypte woorden die raak waren. */
  resultaatKop: string;
  /** Als er wel getypt is, maar niets raakt. */
  geenResultaat: string;
  alle: string;
  advies: string;
};

type Props = {
  doelen: KiezerDoel[];
  t: KiezerTeksten;
  /** Waar "Vrijblijvend advies" heen gaat: de adviespagina in de juiste taal. */
  adviesHref: string;
  /** De zoekindex over alle events, gebouwd op de server. */
  index: EventIndexItem[];
  /** Per slug de bol (kleur, icoon, mouseover-tekst) voor de zoekresultaten. */
  bollen: Record<string, KiezerBol>;
};

/** Het id van de radioknop bij een doel. Staat ook in de CSS hieronder. */
const doelId = (id: string) => `mm-doel-${id}`;
const ANDERS = "anders";

/**
 * De stijlregels die het open- en dichtklappen doen. Dit staat met opzet niet
 * in Tailwind-klassen: het gaat om regels die van de stand van een radioknop
 * afhangen en die een ander element aanwijzen, en dat leest zo een stuk beter
 * dan een rij varianten op elk element.
 */
function stijl(doelen: KiezerDoel[]) {
  const popups = doelen
    .filter((d) => d.formats.length > 0)
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
.mm-knop:has(input:checked) .mm-vinkje{background:#EEBE3D;border-color:#EEBE3D;color:#2D2D2D}
/* Een focusring hoort bij het toetsenbord, niet bij de muis: met
   focus-within kreeg je hem ook na een gewone klik, en dan ziet een
   aangeklikt knopje er twee ringen dik uit. */
.mm-knop:has(:focus-visible){outline:2px solid #EEBE3D;outline-offset:2px}
`.trim();
}

export default function EventKiezer({ doelen, t, adviesHref, index, bollen }: Props) {
  const blok = useRef<HTMLDivElement>(null);
  const veld = useRef<HTMLTextAreaElement>(null);
  /** Welke popup openstaat. */
  const [doel, setDoel] = useState<string | null>(null);
  const [anders, setAnders] = useState(false);
  const [tekst, setTekst] = useState("");

  const gevuld = tekst.trim().length > 0;
  const treffers = useMemo(() => zoekEvents(index, tekst), [index, tekst]);

  /** De tekst en de keuze bewaren voor de volgende pagina. */
  const bewaar = (slug?: string, keuze?: string) =>
    bewaarEventwens({
      tekst,
      doel: keuze ?? (anders ? ANDERS : undefined),
      format: slug,
    });

  /** Alle radioknoppen van de doelen uitzetten. Die staan buiten React. */
  const zetUit = () => {
    for (const el of blok.current?.querySelectorAll<HTMLInputElement>(
      'input[name="mm-doel"]',
    ) ?? []) {
      el.checked = false;
    }
  };

  /** De popup sluiten. */
  const sluit = () => {
    zetUit();
    setDoel(null);
  };

  /**
   * Een popup hoort te sluiten als je er ergens naast klikt of op Escape
   * drukt. De grens is de popup zelf: alles daarbuiten sluit hem, en de klik
   * doet daarna gewoon zijn werk. Zo sluit één klik op het tekstveld de popup
   * én zet hij de cursor in het veld. Het knopje van de open popup is de
   * uitzondering: dat handelt zijn eigen klik af (zie `wisselDoel`), want
   * anders zou de radioknop er meteen weer aangaan.
   */
  useEffect(() => {
    if (!doel) return;
    const buitenom = (doelwit: Node) => {
      const popup = blok.current?.querySelector(`[data-paneel="${doel}"]`);
      if (popup?.contains(doelwit)) return false;
      const knop = blok.current?.querySelector(`#${doelId(doel)}`)?.closest("label");
      if (knop?.contains(doelwit)) return false;
      return true;
    };
    const bijKlik = (e: Event) => {
      const doelwit = e.target as Node | null;
      if (doelwit && buitenom(doelwit)) sluit();
    };
    const bijToets = (e: KeyboardEvent) => {
      if (e.key === "Escape") sluit();
    };
    // In de opvangfase, zodat we er zijn vóórdat iets anders de klik opslokt.
    document.addEventListener("pointerdown", bijKlik, true);
    document.addEventListener("keydown", bijToets);
    return () => {
      document.removeEventListener("pointerdown", bijKlik, true);
      document.removeEventListener("keydown", bijToets);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doel]);

  /**
   * Een klik op een knopje. Staat de popup van dit knopje al open, dan klapt hij
   * dicht. Dat moet hier gebeuren en niet via de radioknop: die staat al aan, dus
   * er komt geen wijziging meer. `preventDefault` houdt tegen dat het label de
   * radioknop opnieuw aanzet, want dan zou de popup meteen terugkomen.
   */
  const wisselDoel = (id: string, e: React.MouseEvent) => {
    if (doel !== id) return;
    e.preventDefault();
    sluit();
  };

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

  /** "Anders" aan of uit. Aan: de popup dicht en de cursor in het tekstveld. */
  const wisselAnders = (aan: boolean) => {
    setAnders(aan);
    bewaarEventwens({ tekst, doel: aan ? ANDERS : undefined });
    if (aan) {
      sluit();
      meet("events_goal_select", { doel: ANDERS, format: "", route: "doel" });
      veld.current?.focus();
    }
  };

  const formatLabel = (titel: string) => t.bekijkTitel.replace("%s", titel);

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
              {doelen.map((d) =>
                d.formats.length === 0 ? (
                  /* "Anders": een vinkje, geen lijstje. */
                  <label
                    key={d.id}
                    className="mm-knop cursor-pointer rounded-full border border-[#D8D7CE] bg-white px-5 py-2.5 flex items-center justify-between gap-2 text-left transition-colors hover:bg-[#FFFBEE] hover:border-[#EEBE3D]"
                  >
                    <input
                      type="checkbox"
                      name="mm-anders"
                      className="sr-only"
                      checked={anders}
                      onChange={(e) => wisselAnders(e.target.checked)}
                    />
                    <span className="text-sm font-bold text-[#2D2D2D] leading-snug">
                      {d.label}
                    </span>
                    <span
                      className="mm-vinkje w-4 h-4 flex-shrink-0 rounded border border-[#B4B3A8] bg-white text-transparent flex items-center justify-center transition-colors"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5l3 3 7-7" />
                      </svg>
                    </span>
                  </label>
                ) : (
                  <div key={d.id} className="relative">
                    <label
                      onClick={(e) => wisselDoel(d.id, e)}
                      className="mm-knop cursor-pointer rounded-full border border-[#D8D7CE] bg-white px-5 py-2.5 flex items-center justify-between gap-2 text-left transition-colors hover:bg-[#FFFBEE] hover:border-[#EEBE3D]"
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
                      CSS laat er één zien. Elke regel is een gewone link. */}
                    <div
                      data-paneel={d.id}
                      className="absolute left-0 top-full z-30 mt-2 w-full min-w-[240px] scroll-mt-24 rounded-xl border border-[#D8D7CE] bg-white p-3 shadow-xl"
                    >
                      <p className="text-xs text-[#8C8B80] leading-snug mb-2 px-1">
                        {t.kiesHint}
                      </p>
                      {/* Bewust geen ul/li: `main li` krijgt in globals.css een
                        leesbreedte mee (60vw), en dan houdt elke regel
                        rechts een gat over. */}
                      <div className="space-y-1">
                        {d.formats.map((f) => (
                          <Link
                            key={f.slug}
                            href={f.href}
                            title={formatLabel(f.titel)}
                            onClick={() => {
                              bewaar(f.slug, d.id);
                              meet("events_goal_select", {
                                doel: d.id,
                                format: f.slug,
                                route: "direct",
                                tekst_gevuld: gevuld,
                              });
                            }}
                            className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#2D2D2D] leading-snug transition-colors hover:bg-[#FFFBEE]"
                          >
                            {f.titel}
                            <ArrowRight
                              className="w-4 h-4 flex-shrink-0 text-[#28A8AA]"
                              aria-hidden="true"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
              )}
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
            {anders && (
              <p className="text-sm text-[#434343] leading-relaxed mb-3">
                {t.andersTekst}
              </p>
            )}
            <textarea
              id="mm-eventwens"
              name="eventwens"
              ref={veld}
              rows={3}
              value={tekst}
              // Kom je er met Tab in, dan hoort de popup ook dicht te gaan.
              onFocus={() => sluit()}
              onChange={(e) => {
                setTekst(e.target.value);
                // Meteen bewaren, zodat de tekst ook meereist als iemand op een
                // link in een popup klikt.
                bewaarEventwens({
                  tekst: e.target.value,
                  doel: anders ? ANDERS : undefined,
                });
              }}
              placeholder={t.placeholder}
              aria-controls="mm-zoekresultaat"
              className="w-full rounded-xl border border-[#CFCEC4] bg-white px-4 py-3 text-[#2D2D2D] leading-relaxed placeholder:text-[#8C8B80] focus:outline-none focus:ring-2 focus:ring-[#EEBE3D] focus:border-[#EEBE3D]"
            />

            {/* ── Wat er bij past ──
                Verschijnt terwijl je typt. `aria-live` laat een schermlezer
                weten dat er iets is veranderd, zonder elke letter voor te lezen. */}
            <div id="mm-zoekresultaat" aria-live="polite" className="mt-3">
              {treffers.length > 0 && (
                <>
                  <p className="text-xs text-[#8C8B80] leading-snug mb-1">
                    {t.resultaatKop.replace(
                      "%s",
                      Array.from(new Set(treffers.flatMap((tr) => tr.woorden))).join(", "),
                    )}
                  </p>
                  {/* Dezelfde bollen als in de catalogus verderop, een maat kleiner. */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {treffers.map((tr) => (
                      <FormatBol
                        key={tr.item.slug}
                        href={tr.item.href}
                        titel={tr.item.titel}
                        maat="klein"
                        {...bollen[tr.item.slug]}
                        onClick={() => {
                          bewaar(tr.item.slug);
                          meet("events_goal_select", {
                            doel: anders ? ANDERS : "",
                            format: tr.item.slug,
                            route: "zoek",
                            tekst_gevuld: true,
                            woorden: tr.woorden.join(" "),
                          });
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
              {treffers.length === 0 && tekst.trim().length >= 4 && (
                <p className="text-sm text-[#434343] leading-relaxed">
                  {t.geenResultaat}
                </p>
              )}
            </div>
          </div>

          {/* ── De twee andere wegen ── */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
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
                bewaar();
                meet("events_contact", {
                  tekst_gevuld: gevuld,
                  doel: anders ? ANDERS : "",
                });
              }}
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3 rounded hover:bg-[#D4A835] transition-colors"
            >
              {t.advies}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

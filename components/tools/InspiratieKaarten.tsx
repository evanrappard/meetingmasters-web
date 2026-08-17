"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import InsluitCode from "./InsluitCode";

const EERSTE = 2;
const LAATSTE = 50;
const TOTAAL = LAATSTE - EERSTE + 1;
const ACHTERKANT = "/images/tools/inspiratiekaarten/achterkant.webp";
const TOOLPAGINA = "/nl/games-tools/tools/inspiration-cards";
const kaartSrc = (n: number) => `/images/tools/inspiratiekaarten/kaart-${n}.webp`;

/** Kaarten in willekeurige volgorde, zodat je niet twee keer dezelfde trekt. */
function schudDek() {
  const dek: number[] = [];
  for (let i = EERSTE; i <= LAATSTE; i++) dek.push(i);
  for (let i = dek.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dek[i], dek[j]] = [dek[j], dek[i]];
  }
  return dek;
}

type Props = {
  /**
   * "pagina" staat in de website tussen andere secties; "embed" vult zijn
   * kader volledig, voor gebruik in een iframe (bv. een scherm in SpatialChat).
   */
  variant?: "pagina" | "embed";
};

export default function InspiratieKaarten({ variant = "pagina" }: Props) {
  const [, setDek] = useState<number[]>([]);
  const [kaart, setKaart] = useState<number | null>(null);
  const [getrokken, setGetrokken] = useState(0);
  const [draait, setDraait] = useState(false);
  const [volledigScherm, setVolledigScherm] = useState(false);
  const [vulVenster, setVulVenster] = useState(false);
  const [smal, setSmal] = useState(false);
  const sectieRef = useRef<HTMLDivElement>(null);

  // Dek pas in de browser schudden — anders verschilt server- en client-HTML.
  useEffect(() => setDek(schudDek()), []);

  // De tool kijkt naar zijn eigen breedte, niet naar het scherm. Zo oogt hij in
  // een smal iframe net zo rustig als op een grote monitor.
  useEffect(() => {
    const el = sectieRef.current;
    if (!el) return;
    const meet = () => setSmal(el.clientWidth < 520);
    meet();
    const waarnemer = new ResizeObserver(meet);
    waarnemer.observe(el);
    return () => waarnemer.disconnect();
  }, []);

  const trek = useCallback(() => {
    if (draait) return;
    setDraait(true);
    setDek((huidig) => {
      const bron = huidig.length ? huidig : schudDek();
      const [volgende, ...rest] = bron;
      // Halverwege de omslag wisselen, zodat je het beeld niet ziet springen.
      window.setTimeout(() => {
        setKaart(volgende);
        setGetrokken((n) => (n >= TOTAAL ? 1 : n + 1));
      }, 260);
      window.setTimeout(() => setDraait(false), 560);
      // Volgende kaart vast inladen, zodat de omslag nooit hapert.
      if (rest[0]) {
        const vooruit = new window.Image();
        vooruit.src = kaartSrc(rest[0]);
      }
      return rest;
    });
  }, [draait]);

  const download = useCallback(() => {
    if (!kaart) return;
    const link = document.createElement("a");
    link.href = kaartSrc(kaart);
    link.download = `MeetingMasters-inspiratiekaart-${kaart}.webp`;
    link.click();
  }, [kaart]);

  /**
   * Echt volledig scherm als het mag. In een iframe staat de browser dat alleen
   * toe met allow="fullscreen"; lukt het niet, dan vullen we het venster zelf.
   */
  const wisselVolledigScherm = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    if (vulVenster) {
      setVulVenster(false);
      return;
    }
    const verzoek = sectieRef.current?.requestFullscreen?.();
    if (verzoek?.catch) verzoek.catch(() => setVulVenster(true));
    else if (!sectieRef.current?.requestFullscreen) setVulVenster(true);
  }, [vulVenster]);

  useEffect(() => {
    const bij = () => setVolledigScherm(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", bij);
    return () => document.removeEventListener("fullscreenchange", bij);
  }, []);

  useEffect(() => {
    if (!vulVenster) return;
    const bij = (e: KeyboardEvent) => e.key === "Escape" && setVulVenster(false);
    window.addEventListener("keydown", bij);
    return () => window.removeEventListener("keydown", bij);
  }, [vulVenster]);

  // Sneltoetsen: handig als je presenteert en je muis niet wilt zoeken.
  useEffect(() => {
    const bij = (e: KeyboardEvent) => {
      const doel = e.target as HTMLElement | null;
      if (doel && ["INPUT", "TEXTAREA"].includes(doel.tagName)) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        trek();
      } else if (e.key.toLowerCase() === "f") {
        wisselVolledigScherm();
      } else if (e.key.toLowerCase() === "d") {
        download();
      }
    };
    window.addEventListener("keydown", bij);
    return () => window.removeEventListener("keydown", bij);
  }, [trek, wisselVolledigScherm, download]);

  const heeftKaart = kaart !== null;
  const groot = volledigScherm || vulVenster;
  const isEmbed = variant === "embed";

  const secundair =
    "text-[#7C7566] hover:text-[#28A8AA] transition-colors underline-offset-4 hover:underline";

  return (
    <div
      ref={sectieRef}
      className={`flex flex-col items-center bg-[#F4F3EF] ${
        vulVenster ? "fixed inset-0 z-[70]" : "relative"
      } ${isEmbed && !groot ? "h-full" : ""}`}
      style={
        groot
          ? { height: "100dvh" }
          : isEmbed
            ? undefined
            : // Op de pagina bewust bescheiden: wie langs surft moet de tool in één
              // oogopslag zien staan, niet erdoorheen moeten scrollen. Wie 'm echt
              // gebruikt, klikt op volledig scherm.
              { minHeight: "min(52dvh, 440px)" }
      }
    >
      {/* Herkenbaar in elke screenshare, ook als de kaart zelf geen logo draagt. */}
      <a
        href={TOOLPAGINA}
        target="_blank"
        rel="noopener"
        title="Inspiratiekaarten van MeetingMasters — open de toolpagina"
        className="absolute top-3 left-3 z-10 opacity-70 hover:opacity-100 transition-opacity"
      >
        <Image
          src="/images/logo-vignet.webp"
          alt="MeetingMasters"
          width={216}
          height={216}
          className={smal ? "w-7 h-7" : "w-9 h-9"}
        />
      </a>

      <div
        className={`w-full flex-1 min-h-0 flex flex-col items-center justify-center ${
          smal ? "gap-3 px-4 py-5" : "gap-5 px-6 py-8"
        }`}
      >
        {/* Teller boven de kaart, zo licht dat hij niet meedoet in het beeld. */}
        <p className="shrink-0 h-4 text-[#B6B0A3] text-[11px] leading-none tracking-wide">
          {heeftKaart ? `Kaart ${getrokken} van ${TOTAAL}` : ""}
        </p>

        {/* ── De kaart ── */}
        <div
          className="flex-1 min-h-0 w-full flex items-center justify-center"
          style={{ perspective: 1400 }}
        >
          <Image
            src={heeftKaart ? kaartSrc(kaart) : ACHTERKANT}
            alt={
              heeftKaart
                ? `Inspiratiekaart ${kaart} van MeetingMasters`
                : "Achterkant van de MeetingMasters inspiratiekaarten"
            }
            width={874}
            height={1240}
            priority
            className="h-auto w-auto max-h-full max-w-full rounded-lg shadow-[0_18px_44px_-16px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out"
            style={{ transform: draait ? "rotateY(90deg) scale(0.97)" : "rotateY(0deg) scale(1)" }}
          />
        </div>

        {/* ── Bediening ──
            Vóór de eerste kaart is trekken de hoofdhandeling; daarna is dat
            downloaden, en zakt 'volgende kaart' naar de dunne regel eronder. */}
        <div className="shrink-0 flex flex-col items-center gap-2.5">
          <button
            type="button"
            onClick={heeftKaart ? download : trek}
            className={`bg-[#EEBE3D] text-[#2D2D2D] font-bold rounded hover:bg-[#D4A835] transition-colors ${
              smal ? "text-sm px-6 py-2.5" : "text-sm px-8 py-3"
            }`}
          >
            {heeftKaart ? "Download" : "Trek een kaart →"}
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
            {heeftKaart && (
              <button type="button" onClick={trek} className={secundair}>
                Volgende kaart
              </button>
            )}
            <button type="button" onClick={wisselVolledigScherm} className={secundair}>
              {groot ? "Sluit volledig scherm" : "Volledig scherm"}
            </button>
            {/* Alleen op de website vóór het trekken: daarna neemt 'volgende kaart' deze plek. */}
            {!isEmbed && !groot && !heeftKaart && (
              <InsluitCode pad="/embed/inspiratiekaarten" naam="de kaarten" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

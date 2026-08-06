"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import InsluitCode from "./InsluitCode";

type Props = {
  /** Adres van de tool: eigen pad of een volledig adres. */
  bron: string;
  /** Naam van de tool, voor de schermlezer en de toelichting bij de code. */
  naam: string;
  /**
   * Hoogte van het kader op de pagina. Bewust bescheiden: wie de tool echt
   * gebruikt klikt op volledig scherm.
   */
  hoogte?: string;
};

/**
 * Draagt een tool die elders draait (een eigen statische app of een Netlify-app
 * met eigen instellingen). Zorgt dat het op elke pagina hetzelfde voelt als de
 * inspiratiekaarten: rustig kader, dunne bediening, insluitcode bij de hand.
 */
export default function ToolKader({ bron, naam, hoogte = "min(62dvh, 560px)" }: Props) {
  const [volledigScherm, setVolledigScherm] = useState(false);
  const [vulVenster, setVulVenster] = useState(false);
  const kaderRef = useRef<HTMLDivElement>(null);

  const wisselVolledigScherm = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    if (vulVenster) {
      setVulVenster(false);
      return;
    }
    const verzoek = kaderRef.current?.requestFullscreen?.();
    if (verzoek?.catch) verzoek.catch(() => setVulVenster(true));
    else if (!kaderRef.current?.requestFullscreen) setVulVenster(true);
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

  const groot = volledigScherm || vulVenster;
  const secundair =
    "text-[#7C7566] hover:text-[#28A8AA] transition-colors underline-offset-4 hover:underline text-xs";

  return (
    <section className="bg-[#F4F3EF] py-8">
      <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col items-center gap-3">
        <div
          ref={kaderRef}
          className={`w-full bg-white overflow-hidden ${
            vulVenster
              ? "fixed inset-0 z-50 rounded-none"
              : "relative rounded-lg shadow-[0_18px_44px_-20px_rgba(0,0,0,0.3)] border border-[#E4E1D8]"
          }`}
          style={{ height: groot ? "100dvh" : hoogte }}
        >
          <iframe
            src={bron}
            title={naam}
            allow="fullscreen; autoplay; clipboard-write"
            className="w-full h-full block border-0"
          />

          {/* Merkteken linksboven — die hoek is bij al onze tools vrij.
              Blijft staan in volledig scherm, juist als je deelt. */}
          <a
            href="/nl/games-tools"
            target="_blank"
            rel="noopener"
            title={`${naam} — een gratis tool van MeetingMasters`}
            className="absolute top-3 left-3 z-10 rounded-md bg-white/85 backdrop-blur-sm p-1 shadow-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/logo-vignet.webp"
              alt="MeetingMasters"
              width={216}
              height={216}
              className="w-7 h-7"
            />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <button type="button" onClick={wisselVolledigScherm} className={secundair}>
            {groot ? "Sluit volledig scherm" : "Volledig scherm"}
          </button>
          <a href={bron} target="_blank" rel="noopener" className={secundair}>
            Openen in een eigen tabblad
          </a>
          {!groot && <InsluitCode pad={bron} naam={naam} />}
        </div>
      </div>
    </section>
  );
}

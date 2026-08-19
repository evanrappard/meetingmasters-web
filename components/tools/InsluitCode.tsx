"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /**
   * Adres van de kale tool. Een pad ("/embed/inspiratiekaarten") wordt aangevuld
   * met het domein waar de site draait; een volledig adres wordt overgenomen.
   */
  pad: string;
  /** Naam van de tool, voor de toelichting. */
  naam: string;
  taal?: "nl" | "en";
};

/**
 * Toont de insluitcode van een tool, zodat je die altijd vanaf de site kunt
 * ophalen en nergens apart hoeft te bewaren. Bewust naast "Volledig scherm",
 * want het is dezelfde soort handeling: de tool ergens anders laten draaien.
 */
/** De knopteksten, per taal. */
const T = {
  nl: {
    tonen: "Insluitcode",
    verbergen: "Verberg insluitcode",
    sluiten: "Sluiten",
    kopieer: "Kopieer code",
    gekopieerd: "Gekopieerd ✓",
  },
  en: {
    tonen: "Embed code",
    verbergen: "Hide embed code",
    sluiten: "Close",
    kopieer: "Copy code",
    gekopieerd: "Copied ✓",
  },
} as const;

export default function InsluitCode({ pad, naam, taal = "nl" }: Props) {
  const t = T[taal];
  const [open, setOpen] = useState(false);
  const [basis, setBasis] = useState("");
  const [gekopieerd, setGekopieerd] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Pas in de browser: op de server weten we het domein niet.
  useEffect(() => setBasis(window.location.origin), []);

  // Sluiten met Escape of door ergens anders te klikken — niet alleen via de knop.
  useEffect(() => {
    if (!open) return;
    const bijToets = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const bijKlik = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", bijToets);
    document.addEventListener("mousedown", bijKlik);
    return () => {
      document.removeEventListener("keydown", bijToets);
      document.removeEventListener("mousedown", bijKlik);
    };
  }, [open]);

  const adres = /^https?:\/\//.test(pad) ? pad : `${basis}${pad}`;
  const code = `<iframe src="${adres}" allow="fullscreen" style="border:0;width:100%;height:100%"></iframe>`;

  const kopieer = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setGekopieerd(true);
      window.setTimeout(() => setGekopieerd(false), 2200);
    } catch {
      // Klembord geweigerd (bv. in een iframe zonder toestemming): dan mag de
      // bezoeker de code gewoon zelf selecteren.
      setGekopieerd(false);
    }
  };

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-[#7C7566] hover:text-[#28A8AA] transition-colors underline-offset-4 hover:underline text-xs"
      >
        {open ? t.verbergen : t.tonen}
      </button>

      {open && (
        // Zweeft boven de rest, zodat de knoppenrij niet verspringt.
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-20 w-[min(90vw,560px)] bg-white border border-[#E4E1D8] rounded p-4 pt-9 text-left shadow-lg">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.sluiten}
            className="absolute top-2 right-2 w-7 h-7 rounded text-[#7C7566] hover:bg-[#F1EFE9] hover:text-[#2D2D2D] transition-colors text-base leading-none"
          >
            ×
          </button>
          <p className="text-xs text-[#434343] leading-relaxed mb-3">
            Plak deze code op een scherm in SpatialChat of op een eigen pagina. Dan draait{" "}
            {naam} daar zonder menu of footer. Het stukje{" "}
            <code className="text-[#2D2D2D]">allow=&quot;fullscreen&quot;</code> is nodig, anders
            mag de browser de volledig-schermknop niet uitvoeren.
          </p>
          <textarea
            readOnly
            value={code}
            onFocus={(e) => e.currentTarget.select()}
            rows={3}
            className="w-full text-[11px] font-mono text-[#2D2D2D] bg-[#F7F6F2] border border-[#E4E1D8] rounded p-3 resize-none"
          />
          <button
            type="button"
            onClick={kopieer}
            className="mt-2 bg-[#EEBE3D] text-[#2D2D2D] text-xs font-bold px-4 py-2 rounded hover:bg-[#D4A835] transition-colors"
          >
            {gekopieerd ? t.gekopieerd : t.kopieer}
          </button>
        </div>
      )}
    </div>
  );
}

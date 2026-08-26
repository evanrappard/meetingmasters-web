"use client";

import { useEffect, useId, useRef, useState } from "react";
import { leesKeuze, TOESTEMMING_EVENT } from "@/lib/cookie-toestemming";
import { zetHubSpotTracking } from "@/lib/hubspot-toestemming";

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

/**
 * HubSpot serveert per datacenter een eigen embed-script. Voor een EU-account
 * (region eu1) is dat js-eu1.hsforms.net; het algemene adres werkt daar niet
 * altijd betrouwbaar mee.
 */
const scriptAdres = (region: string) =>
  region && region !== "na1"
    ? `https://js-${region}.hsforms.net/forms/embed/v2.js`
    : "https://js.hsforms.net/forms/embed/v2.js";

type HubSpotFormProps = {
  portalId: string;
  formId: string;
  /** HubSpot-datacenter van het account, bv. "eu1" of "na1". */
  region?: string;
  className?: string;
  /** Taal van de terugvalboodschap als het formulier niet laadt. */
  taal?: "nl" | "en";
};

/** Wat er staat als het formulier er niet komt. */
const TERUGVAL = {
  nl: {
    kop: "Het formulier laadt niet.",
    tekst:
      "Dat ligt aan de dienst waarmee we formulieren maken, niet aan jou. Probeer het opnieuw, of neem gewoon rechtstreeks contact op.",
    opnieuw: "Probeer opnieuw",
    mail: "Mail ons",
    bel: "Bel ons",
  },
  en: {
    kop: "The form isn't loading.",
    tekst:
      "That's down to the service we build forms with, not to you. Try again, or simply get in touch directly.",
    opnieuw: "Try again",
    mail: "Email us",
    bel: "Call us",
  },
} as const;

/**
 * Herbruikbaar component voor het embedden van een HubSpot-formulier.
 * Laadt het HubSpot embed-script eenmalig en rendert het opgegeven formulier
 * in een eigen target-div. Gebruik:
 *   <HubSpotForm portalId="123456" formId="abcd-..." region="eu1" />
 */
export default function HubSpotForm({
  portalId,
  formId,
  region = "eu1",
  className,
  taal = "nl",
}: HubSpotFormProps) {
  const reactId = useId();
  // Geldige CSS/DOM-id (useId bevat ":") voor de target-div.
  const targetId = `hs-form-${reactId.replace(/:/g, "")}`;
  const created = useRef(false);
  const doel = useRef<HTMLDivElement>(null);
  const [inZicht, setInZicht] = useState(false);
  const [mislukt, setMislukt] = useState(false);
  /** Ophogen forceert een nieuwe poging zonder de pagina te herladen. */
  const [poging, setPoging] = useState(0);

  /**
   * Het HubSpot-script trekt reCAPTCHA mee: ruim 300 kB, en dat werd op elke
   * formulierpagina meteen bij het openen geladen — ook als het formulier pas
   * na drie schermen in beeld komt. We wachten daarom tot het formulier in de
   * buurt is. De marge van 600px zorgt dat het al klaarstaat tegen de tijd dat
   * de bezoeker er is; hij merkt er dus niets van.
   *
   * Zonder IntersectionObserver (heel oude browsers) laden we gewoon meteen.
   */
  useEffect(() => {
    const el = doel.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInZicht(true);
      return;
    }
    const kijker = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInZicht(true);
          kijker.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    kijker.observe(el);
    return () => kijker.disconnect();
  }, []);

  /**
   * Laden en aanmaken, met drie voorzorgen die eerder ontbraken:
   *
   * 1. **Pollen in plaats van alleen op `load` wachten.** Stond het script al
   *    in de pagina van een vorige formulierpagina, dan kan zijn `load` al
   *    geweest zijn voordat dit component zijn luisteraar aanhaakt. Die
   *    luisteraar gaat dan nooit meer af en je houdt een leeg vlak, tot je de
   *    pagina herlaadt. Daarom kijken we ook elke 200 ms zelf of `hbspt` er is.
   * 2. **Een fout op het script opvangen.** Blokkeert een browser of extensie
   *    het (Safari doet dat sneller dan Chrome), dan tonen we een boodschap met
   *    directe contactmogelijkheden in plaats van niets.
   * 3. **Een tijdslimiet.** Komt het formulier binnen 10 seconden niet, dan
   *    laten we diezelfde terugval zien, met een knop om het opnieuw te
   *    proberen zonder de pagina te herladen.
   */
  useEffect(() => {
    if (!inZicht || created.current) return;

    // Standaard niet volgen; alleen bij "Alles accepteren" wél. Zie
    // lib/hubspot-toestemming.ts — dit moet vóór het script gebeuren.
    zetHubSpotTracking(leesKeuze() === "alles");

    let gestopt = false;
    // In één houder, zodat `opruimen` ernaar kan verwijzen voordat de tellers
    // bestaan: `create()` draait namelijk al één keer vóór we ze zetten.
    const tellers: {
      poller?: ReturnType<typeof setInterval>;
      limiet?: ReturnType<typeof setTimeout>;
    } = {};

    const opruimen = () => {
      gestopt = true;
      if (tellers.poller) clearInterval(tellers.poller);
      if (tellers.limiet) clearTimeout(tellers.limiet);
    };

    const create = () => {
      // Let op `hbspt.forms`: de agenda-embed (MeetingsEmbedCode.js) zet
      // óók `window.hbspt`, maar zonder `forms`. Keek je alleen of `hbspt`
      // bestond, dan dacht dit component dat het formulierenscript er al was,
      // klapte `hbspt.forms.create` eruit en bleef het vlak leeg. Dat gebeurde
      // precies als je van "Plan een rondleiding" doorklikte naar "Plan een
      // gesprek".
      if (gestopt || created.current || !window.hbspt?.forms?.create) return;
      created.current = true;
      opruimen();
      setMislukt(false);
      window.hbspt!.forms!.create({ region, portalId, formId, target: `#${targetId}` });
    };

    const misgegaan = () => {
      if (gestopt || created.current) return;
      opruimen();
      setMislukt(true);
    };

    create();
    if (created.current) return;

    // Script eenmalig laden; meerdere formulieren delen hetzelfde script.
    const bron = scriptAdres(region);
    let script = document.querySelector<HTMLScriptElement>(`script[src="${bron}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = bron;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", create);
    script.addEventListener("error", misgegaan);

    tellers.poller = setInterval(create, 200);
    tellers.limiet = setTimeout(misgegaan, 10000);

    return () => {
      opruimen();
      script?.removeEventListener("load", create);
      script?.removeEventListener("error", misgegaan);
    };
  }, [inZicht, portalId, formId, region, targetId, poging]);

  // Wijzigt de bezoeker zijn keuze terwijl het formulier op het scherm staat,
  // dan gaat die wijziging meteen mee.
  useEffect(() => {
    const bij = (e: Event) =>
      zetHubSpotTracking(((e as CustomEvent).detail ?? null) === "alles");
    window.addEventListener(TOESTEMMING_EVENT, bij);
    return () => window.removeEventListener(TOESTEMMING_EVENT, bij);
  }, []);

  const t = TERUGVAL[taal];

  return (
    <>
      <div ref={doel} id={targetId} className={className} />
      {mislukt && (
        <div className="rounded-lg border border-[#EBEBEB] bg-[#FAFAFA] p-6">
          <p className="font-bold text-[#2D2D2D] mb-2">{t.kop}</p>
          <p className="text-sm text-[#434343] leading-relaxed mb-5">{t.tekst}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                created.current = false;
                setMislukt(false);
                setPoging((n) => n + 1);
              }}
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#D4A835] transition-colors"
            >
              {t.opnieuw}
            </button>
            <a
              href="mailto:contact@meetingmasters.online"
              className="border border-[#D2D2D0] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:border-[#2D2D2D] transition-colors"
            >
              {t.mail}
            </a>
            <a
              href="tel:+31202390313"
              className="border border-[#D2D2D0] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:border-[#2D2D2D] transition-colors"
            >
              {t.bel}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { leesKeuze, TOESTEMMING_EVENT } from "@/lib/cookie-toestemming";
import { zetHubSpotTracking } from "@/lib/hubspot-toestemming";
import { leesEventwens, wisEventwens, type Eventwens } from "@/lib/eventwens";

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
  /**
   * Velden die we alvast invullen, op interne veldnaam. Bedoeld voor verborgen
   * velden: wat de bezoeker elders op de pagina koos, gaat zo mee met het
   * formulier. Verandert deze waarde later, dan wordt het formulier bijgewerkt.
   */
  prefill?: Record<string, string>;
  /**
   * Neem mee wat de bezoeker op de events-pagina over zijn bijeenkomst
   * vertelde, en zet het in het berichtveld. Zie `lib/eventwens.ts`.
   *
   * Dit gaat bewust ánders dan `prefill` hierboven: dat is voor verborgen
   * velden en wordt daarom blijvend gelijkgehouden. Dit veld is zichtbaar en
   * van de bezoeker, dus we vullen het één keer, alleen als het nog leeg is.
   * Anders zou hij zijn eigen tekst niet kunnen wijzigen: elke aanpassing werd
   * driehonderd milliseconden later teruggedraaid.
   */
  vulEventwens?: boolean;
  /**
   * CSS die in het formulier zelf wordt gezet. HubSpot rendert een formulier in
   * een eigen iframe met zijn eigen opmaak; onze stijlbladen komen daar niet
   * binnen. Dat iframe heeft geen eigen adres — HubSpot schrijft de inhoud er
   * zelf in — dus we mogen erin schrijven.
   *
   * Gebruik `var(--rh-font)` voor het lettertype: dat zetten we hieronder mee
   * naar binnen, met het lettertype van de site erachter.
   */
  stijl?: string;
  /**
   * Wordt één keer aangeroepen zodra HubSpot de bedanktekst neerzet, met wat er
   * op dat moment in de velden stond (op interne veldnaam). Bedoeld om er zelf
   * nog iets mee te doen — bij R@venHack: een bevestiging mailen.
   *
   * Het formulier staat in een venstertje dat HubSpot zelf vult, dus zonder
   * eigen adres; we mogen er daarom bij. Lukt dat toch niet, dan krijgt deze
   * functie een lege verzameling en gebeurt er verder niets.
   */
  bijVerzonden?: (velden: Record<string, string>) => void;
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
 * Het formulier opzoeken, waar HubSpot het ook neerzet.
 *
 * Oudere formulieren komen gewoon in de pagina te staan. Nieuwere (embedType
 * V3, waaronder het R@venHack-formulier) zet HubSpot in een eigen iframe. Dat
 * iframe heeft geen eigen adres — HubSpot schrijft de inhoud er zelf in — dus
 * we mogen erin kijken en kunnen de velden gewoon vullen.
 *
 * De aangeboden `onFormReady` doen we bewust niet: die komt bij een iframe niet
 * altijd door. Zelf kijken werkt in beide gevallen.
 */
function zoekFormulier(targetId: string): HTMLFormElement | null {
  const houder = document.getElementById(targetId);
  if (!houder) return null;
  const direct = houder.querySelector("form");
  if (direct) return direct;
  const iframe = houder.querySelector("iframe");
  try {
    return iframe?.contentDocument?.querySelector("form") ?? null;
  } catch {
    // Zit het formulier toch op een ander domein, dan kunnen we er niet bij.
    return null;
  }
}

/**
 * Het lettertype van de site, zoals de browser het kent. Next zet daar een
 * @font-face voor in de pagina; die regels nemen we mee naar binnen, anders
 * kent het iframe het lettertype niet en valt hij terug op Arial.
 */
function lettertypeRegels(): string {
  const uit: string[] = [];
  for (const blad of Array.from(document.styleSheets)) {
    let regels: CSSRuleList;
    try {
      regels = blad.cssRules;
    } catch {
      continue; // stijlblad van een ander domein; daar mogen we niet in kijken
    }
    for (const regel of Array.from(regels)) {
      if (regel.constructor.name !== "CSSFontFaceRule") continue;
      /*
       * De verwijzing naar het lettertypebestand staat er relatief in, en die
       * telt vanaf het stijlblad — iets als "../media/rajdhani.woff2". In het
       * venstertje van HubSpot geldt het adres van de pagina als beginpunt, en
       * dan wijst diezelfde regel naar een plek die niet bestaat. Het lettertype
       * viel dan stilletjes terug op Arial. Daarom maken we het adres hier
       * volledig.
       */
      const basis = blad.href ?? document.baseURI;
      uit.push(
        regel.cssText.replace(/url\((['"]?)([^'")]+)\1\)/g, (heel, quote, adres) => {
          try {
            return `url("${new URL(adres, basis).href}")`;
          } catch {
            return heel;
          }
        })
      );
    }
  }
  const familie = getComputedStyle(document.body).fontFamily;
  return `:root { --rh-font: ${familie}; }\n${uit.join("\n")}`;
}

/**
 * Zet onze stijl in het venstertje waar HubSpot het formulier in zet, en houdt
 * hem daar. Bewust op het document en niet op het formulier: na het versturen
 * is dat formulier weg en zet HubSpot er een bedanktekst voor in de plaats. Die
 * moet er net zo uitzien.
 */
function zetStijl(targetId: string, css?: string) {
  if (!css) return;
  const houder = document.getElementById(targetId);
  const iframe = houder?.querySelector("iframe");
  let doc: Document | null | undefined;
  try {
    doc = iframe?.contentDocument;
  } catch {
    return; // ander domein; daar kunnen we niet bij
  }
  if (!doc?.head || doc.getElementById("mm-stijl")) return;
  const el = doc.createElement("style");
  el.id = "mm-stijl";
  el.textContent = `${lettertypeRegels()}\n${css}`;
  doc.head.appendChild(el);
}

/**
 * Na het versturen zet HubSpot een bedanktekst in de plaats van het formulier.
 * Dat blok is korter dan het formulier, dus de pagina schuift in elkaar en de
 * tekst komt boven je beeld te staan — je moest omhoog scrollen om te zien dat
 * het gelukt was. Hier springen we er één keer naartoe.
 */
function naarBedanktekst(targetId: string, gezien: { current: boolean }): boolean {
  if (gezien.current) return false;
  const houder = document.getElementById(targetId);
  const iframe = houder?.querySelector("iframe");
  let bedankt: Element | null | undefined;
  try {
    bedankt = iframe?.contentDocument?.querySelector(".submitted-message");
  } catch {
    return false;
  }
  if (!bedankt) return false;
  gezien.current = true;
  houder?.scrollIntoView({ behavior: "smooth", block: "center" });
  return true;
}

/**
 * Waarden in de velden van een HubSpot-formulier zetten.
 *
 * Alleen de waarde aanpassen is niet genoeg: HubSpot houdt zijn eigen
 * administratie bij van wat er is ingevuld, en die luistert naar
 * invoergebeurtenissen. Zonder dat tweede stukje staat de waarde wel op het
 * scherm, maar wordt hij niet meeverstuurd.
 */
function vulVelden(form: HTMLFormElement | null, waarden?: Record<string, string>) {
  if (!form || !waarden) return;
  for (const [naam, waarde] of Object.entries(waarden)) {
    const veld = form.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      `[name="${CSS.escape(naam)}"]`
    );
    if (!veld || veld.value === waarde) continue;
    veld.value = waarde;
    veld.dispatchEvent(new Event("input", { bubbles: true }));
    veld.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

/** Eén veld vullen, mits het er is en nog leeg. Geeft terug of het veld bestond. */
function vulEenmalig(form: HTMLFormElement, naam: string, waarde: string): boolean {
  const veld = form.querySelector<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >(`[name="${naam}"]`);
  if (!veld) return false;
  if (veld.value.trim() !== "") return true; // de bezoeker was ons voor
  veld.value = waarde;
  veld.dispatchEvent(new Event("input", { bubbles: true }));
  veld.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

/**
 * Het formulier één keer vullen met wat we al van de bezoeker weten: waar hij
 * vandaan komt (de keuzelijst "Waarover gaat deze vraag?" en de naam van het
 * format) en wat hij op de events-pagina over zijn bijeenkomst vertelde.
 *
 * Alleen velden die er zijn en nog leeg zijn. Staat er al iets, dan is dat van
 * de bezoeker zelf en blijven we eraf. Lukt het, dan geeft de functie `true`
 * terug en wordt er niet meer naar gekeken.
 */
function vulWens(form: HTMLFormElement | null, wens: Eventwens): boolean {
  if (!form) return false;
  const tekst = wens.tekst.trim();
  /*
   * De naam van het format vooraan: het berichtveld vraagt om het soort event,
   * en dat weten we al. Met een komma erachter, zodat de regel openstaat als
   * uitnodiging om verder te vertellen. Typte de bezoeker eerder zelf iets, dan
   * loopt dat achter die komma door in dezelfde zin.
   */
  const bericht = wens.soort
    ? `${wens.soort}, ${tekst}`
    : tekst;
  let gezien = false;
  if (wens.herkomst) gezien = vulEenmalig(form, "mm_boeking_type", wens.herkomst) || gezien;
  if (bericht) gezien = vulEenmalig(form, "message", bericht) || gezien;
  return gezien;
}

/**
 * Wat er nu in de velden staat, op interne veldnaam. Het wachtwoordachtige
 * spul dat HubSpot zelf toevoegt (velden zonder naam, knoppen) slaan we over.
 */
function leesVelden(form: HTMLFormElement | null): Record<string, string> {
  const uit: Record<string, string> = {};
  if (!form) return uit;
  const velden = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    "input[name], select[name], textarea[name]"
  );
  for (const veld of velden) {
    if (veld instanceof HTMLInputElement && (veld.type === "checkbox" || veld.type === "radio")) {
      if (!veld.checked) continue;
    }
    if (!veld.name || veld.value === "") continue;
    uit[veld.name] = veld.value;
  }
  return uit;
}

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
  prefill,
  vulEventwens = false,
  stijl,
  bijVerzonden,
}: HubSpotFormProps) {
  const reactId = useId();
  // Geldige CSS/DOM-id (useId bevat ":") voor de target-div.
  const targetId = `hs-form-${reactId.replace(/:/g, "")}`;
  const created = useRef(false);
  const doel = useRef<HTMLDivElement>(null);
  /** Het formulier zelf, zodra HubSpot het heeft neergezet. */
  const formulier = useRef<HTMLFormElement | null>(null);
  /** Eén keer naar de bedanktekst springen, niet bij elke controle opnieuw. */
  const bedanktGezien = useRef(false);
  /**
   * Wat er in de velden stond vlak voordat het formulier verdween. Na het
   * versturen haalt HubSpot het formulier weg, dus op dat moment is er niets
   * meer te lezen — vandaar dat we het bij elke ronde bewaren.
   */
  const laatsteVelden = useRef<Record<string, string>>({});
  // In een ref, zodat het effect niet opnieuw draait als de pagina een nieuwe
  // functie doorgeeft bij elke render.
  const melden = useRef(bijVerzonden);
  melden.current = bijVerzonden;
  // In een ref, zodat het effect dat het formulier aanmaakt niet opnieuw draait
  // bij elke wijziging van de voorinvulling.
  const invulling = useRef(prefill);
  invulling.current = prefill;
  /**
   * Wat we van de bezoeker weten, en of het al in het formulier staat. We lezen
   * het één keer bij het opbouwen: haalt de bezoeker het daarna weg, dan komt
   * het niet terug.
   */
  const eventwens = useRef<Eventwens | null | undefined>(undefined);
  const wensGevuld = useRef(false);
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

  /**
   * De voorinvulling. Twee dingen tegelijk: wachten tot HubSpot het formulier
   * heeft neergezet, en daarna blijven bijwerken zolang er nog iets verandert.
   *
   * We kijken elke 300 ms. Dat blijft doorgaan zolang dit blok op het scherm
   * staat, en dat is met opzet: HubSpot bouwt het formulier soms opnieuw op
   * (bijvoorbeeld na het versturen), en dan moeten de verborgen velden opnieuw
   * gevuld worden.
   */
  useEffect(() => {
    if (!prefill && !stijl && !melden.current && !vulEventwens) return;
    if (vulEventwens && eventwens.current === undefined) {
      eventwens.current = leesEventwens();
    }
    const kijk = () => {
      const form = zoekFormulier(targetId);
      if (form) {
        formulier.current = form;
        // Alleen bewaren als er echt iets in stond: bij het versturen maakt
        // HubSpot de velden soms eerst leeg voordat het formulier verdwijnt.
        const gelezen = leesVelden(form);
        if (Object.keys(gelezen).length > 0) laatsteVelden.current = gelezen;
      }
      zetStijl(targetId, stijl);
      vulVelden(formulier.current, prefill);
      if (vulEventwens && !wensGevuld.current && eventwens.current) {
        wensGevuld.current = vulWens(formulier.current, eventwens.current);
      }
      if (naarBedanktekst(targetId, bedanktGezien)) {
        // Verstuurd: de tekst is aangekomen en hoeft niet nog een keer mee.
        if (vulEventwens) wisEventwens();
        melden.current?.(laatsteVelden.current);
      }
    };
    kijk();
    const teller = setInterval(kijk, 300);
    return () => clearInterval(teller);
  }, [prefill, targetId, stijl, vulEventwens]);

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

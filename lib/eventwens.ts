/**
 * Wat een bezoeker op de events-pagina over zijn bijeenkomst vertelt.
 *
 * Op `/nl/events` en `/en/events` staat een open tekstveld: "Kun je wat over
 * deze bijeenkomst vertellen?" Dat is de nuttigste informatie die we kunnen
 * krijgen, want niet iedereen noemt zijn event hetzelfde. Klikt iemand daarna
 * door naar een eventpagina, dan reist die tekst mee, zodat hij al in het
 * berichtveld staat op het moment dat er een formulier in beeld komt
 * (offerte, expert-advies, contact).
 *
 * Bewust in `sessionStorage` en niet in de URL: de tekst kan gaan over een
 * reorganisatie of een fusie, en dan hoort hij niet in de adresbalk en niet in
 * de paden die Google Analytics meekrijgt. De keerzijde: open je de link in een
 * nieuw tabblad, dan is het veld gewoon leeg. Dat is geen fout.
 *
 * Er zit een houdbaarheidsdatum op. Zonder die grens zou iemand die drie uur
 * later met een heel andere vraag op de contactpagina komt, ineens zijn oude
 * beschrijving in het veld zien staan.
 */

const SLEUTEL = "mm-eventwens";

/** Twee uur. Lang genoeg om rond te kijken, kort genoeg om niet te spoken. */
const HOUDBAAR_MS = 2 * 60 * 60 * 1000;

/**
 * De waarden van de keuzelijst "Waarover gaat deze vraag?" in HubSpot, op het
 * offerte- en het boekingsformulier. Een keuzelijst bewaart de wáárde, niet het
 * label, dus dit moet exact overeenkomen met wat er in HubSpot staat:
 * zaaltje ("Online zaaltje"), event ("Event"), ravenhack
 * ("Escape Room R@venHack") en anders.
 */
export type Herkomstsoort = "zaaltje" | "event" | "ravenhack" | "anders";

export type Eventwens = {
  /** Wat de bezoeker zelf typte. Kan leeg zijn: niets is verplicht. */
  tekst: string;
  /** Het gekozen doel, bv. "koers". Alleen voor onze eigen context. */
  doel?: string;
  /** De Nederlandse slug van het gekozen format, bv. "strategiedagen". */
  format?: string;
  /** Waar de bezoeker vandaan komt, in gewone taal: "Online strategiedag". */
  soort?: string;
  /** Dezelfde herkomst, als waarde voor de keuzelijst in HubSpot. */
  herkomst?: Herkomstsoort;
  /** Wanneer het is opgeslagen, in milliseconden. */
  tijd: number;
};

export function bewaarEventwens(wens: Omit<Eventwens, "tijd" | "soort" | "herkomst">) {
  if (typeof window === "undefined") return;
  try {
    // De herkomst komt van de pagina, niet van het keuzeblok; die laten we staan.
    const nu = leesEventwens();
    const herkomst = { soort: nu?.soort, herkomst: nu?.herkomst };
    if (!wens.tekst.trim() && !wens.format && !herkomst.soort) {
      window.sessionStorage.removeItem(SLEUTEL);
      return;
    }
    window.sessionStorage.setItem(
      SLEUTEL,
      JSON.stringify({ ...herkomst, ...wens, tijd: Date.now() })
    );
  } catch {
    // Privémodus of opslag vol. Dan reist de tekst niet mee, verder niets aan de hand.
  }
}

/**
 * Onthouden op wélke pagina de bezoeker was, zodat een formulier verderop niet
 * hoeft te vragen waar het over gaat. Dit raakt de getypte tekst niet aan: die
 * hoort bij de bezoeker, de herkomst hoort bij de pagina.
 */
export function onthoudHerkomst(soort: string, herkomst: Herkomstsoort) {
  if (typeof window === "undefined") return;
  try {
    const nu = leesEventwens();
    if (nu?.soort === soort && nu?.herkomst === herkomst) return;
    window.sessionStorage.setItem(
      SLEUTEL,
      JSON.stringify({ ...(nu ?? { tekst: "" }), soort, herkomst, tijd: Date.now() })
    );
  } catch {
    // Privémodus of opslag vol. Dan weet het formulier het niet, verder niets aan de hand.
  }
}

export function leesEventwens(): Eventwens | null {
  if (typeof window === "undefined") return null;
  try {
    const rauw = window.sessionStorage.getItem(SLEUTEL);
    if (!rauw) return null;
    const wens = JSON.parse(rauw) as Eventwens;
    if (typeof wens?.tekst !== "string" || typeof wens?.tijd !== "number") return null;
    if (Date.now() - wens.tijd > HOUDBAAR_MS) {
      window.sessionStorage.removeItem(SLEUTEL);
      return null;
    }
    return wens;
  } catch {
    return null;
  }
}

export function wisEventwens() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(SLEUTEL);
  } catch {
    // niets aan te doen
  }
}

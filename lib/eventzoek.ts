/**
 * Zoeken over alle events, op basis van wat iemand in eigen woorden over zijn
 * bijeenkomst vertelt.
 *
 * Het keuzeblok op de events-pagina heeft een open tekstveld. Wie daar
 * "kennissessie voor 200 klanten met napraten" typt, hoort meteen te zien
 * welke formats daar het dichtst bij komen, en op welke woorden dat is
 * gebaseerd. Dat laatste is bewust: het maakt de suggestie controleerbaar.
 * "Webinar, past bij: kennissessie, klanten" is iets anders dan een zwarte
 * doos die een knopje toont.
 *
 * ── Hoe het werkt ──
 * Op de server bouwt `bouwEventIndex` (in `lib/eventzoek-index.ts`) per event
 * een lijst van woorden met een gewicht: de titel en de handgeschreven
 * zoekwoorden wegen zwaar, de tagline en doelgroep middel, de lopende tekst
 * licht. Die index gaat als prop mee naar het keuzeblok. In de browser
 * splitst `zoekEvents` de getypte tekst in woorden, laat stopwoorden en losse
 * cijfers weg, en telt per event hoeveel van die woorden er raken en hoe
 * zwaar.
 *
 * Dit bestand heeft met opzet geen imports: het draait in de browser, en de
 * eventteksten zelf horen niet in de bundel die de bezoeker downloadt.
 *
 * Woorden raken elkaar ook als ze niet precies gelijk zijn: "webinars" raakt
 * "webinar", "strategie" raakt "strategiedag", "kerstborrel" raakt "borrel".
 * Daar zit geen echte stemmer achter, alleen een voorvoegsel- en
 * deelwoordregel; voor twintig events met bekende namen is dat genoeg, en het
 * blijft uitlegbaar.
 *
 * ── De handgeschreven zoekwoorden ──
 * `ZOEKWOORDEN` in `lib/eventzoek-index.ts` is het belangrijkste deel. Niet
 * iedereen noemt zijn bijeenkomst zoals wij dat doen: "ledenvergadering" staat
 * nergens in de ALV-tekst, "vrijmibo" niet bij het bedrijfsfeest. Mist er een
 * treffer, dan is dát de plek om een woord toe te voegen.
 */

export type EventIndexItem = {
  /** De Nederlandse slug, ook op de Engelse pagina (voor meten en eventwens). */
  slug: string;
  titel: string;
  href: string;
  /** Elk woord één keer, met het hoogste gewicht waarmee het voorkomt. */
  woorden: Record<string, number>;
};

export type EventTreffer = {
  item: EventIndexItem;
  score: number;
  /** De woorden van de bezoeker die raak waren, in de vorm zoals getypt. */
  woorden: string[];
};

/**
 * Woorden die in bijna elke beschrijving staan en dus niets onderscheiden.
 * "Online", "bijeenkomst" en "deelnemers" horen er ook bij: die raken anders
 * alle twintig events tegelijk.
 */
const STOPWOORDEN = new Set([
  // Nederlands
  "de", "het", "een", "en", "of", "voor", "van", "met", "in", "op", "is", "zijn", "wij", "we", "ik", "je", "jij", "u", "ze", "zij", "hij", "die", "dat", "dit", "deze", "er", "aan", "bij", "om", "te", "naar", "ook", "nog", "wel", "niet", "maar", "dan", "als", "over", "uit", "door", "tot", "hoe", "wat", "wie", "waar", "wanneer", "wil", "willen", "graag", "zou", "zouden", "kunnen", "kan", "moet", "moeten", "hebben", "heeft", "heb", "mensen", "personen", "deelnemers", "online", "bijeenkomst", "meeting", "event", "evenement", "organiseren", "organiseer", "zoek", "zoeken", "ongeveer", "ons", "onze", "mijn", "hun", "iets", "veel", "goed", "echt", "elkaar", "samen", "komen", "komt", "gaat", "gaan", "worden", "wordt", "ben", "was", "waren", "dus", "want", "zo", "al", "nu", "dag", "uur", "keer", "per", "hoeveel", "mee", "meer", "minder", "jullie", "doen", "maken", "geven", "krijgen", "laten", "zien", "heten", "houden", "even", "eens", "ergens", "soort", "manier",
  // Engels
  "the", "a", "an", "and", "or", "for", "of", "with", "on", "are", "i", "you", "they", "he", "she", "it", "this", "that", "these", "there", "at", "to", "by", "about", "how", "what", "who", "where", "when", "want", "would", "could", "can", "should", "have", "has", "people", "participants", "gathering", "organise", "organize", "looking", "our", "my", "their", "some", "much", "really", "each", "other", "together", "come", "get", "be", "been", "will", "so", "as", "now", "day", "hour", "times", "per", "like", "just", "also", "many", "more", "less", "make", "give", "let", "see", "kind", "sort", "way", "something",
]);

export const ZOEK_GEWICHT = { zwaar: 3, middel: 2, licht: 1 } as const;

/** Kleine letters, zonder accenten, en alleen letters en cijfers over. */
function normaliseer(tekst: string): string {
  return tekst
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9&]+/g, " ");
}

/** De woorden uit een tekst die iets zeggen: geen stopwoorden, geen cijfers, minstens drie letters. */
export function woordenVan(tekst: string): string[] {
  return normaliseer(tekst)
    .split(" ")
    .filter((w) => w.length >= 3 && !/^\d+$/.test(w) && !STOPWOORDEN.has(w));
}

/**
 * Hoe goed raakt een getypt woord een woord uit de index? 1 als ze gelijk zijn
 * of hetzelfde begin delen ("strategie" / "strategiedag"), 0,6 als het ene
 * woord ergens middenin het andere zit ("kerstborrel" / "borrel"): dat is wel
 * een aanwijzing, maar minder sterk dan "kerstborrel" / "kerst". 0 als ze
 * elkaar niet raken. De ondergrens van vier letters houdt kleine woorden buiten
 * de deur: "team" mag "teambuilding" raken, maar "les" niet "leslokaal".
 */
function raakt(getypt: string, index: string): number {
  if (getypt === index) return 1;
  const [kort, lang] = getypt.length <= index.length ? [getypt, index] : [index, getypt];
  if (kort.length < 4) return 0;
  if (lang.startsWith(kort)) return 1;
  return kort.length >= 5 && lang.includes(kort) ? 0.6 : 0;
}

/**
 * De best passende events bij een beschrijving. Leeg als er niets raakt of
 * als de tekst nog geen bruikbaar woord bevat.
 *
 * De score is per getypt woord het hoogste gewicht waarmee het ergens raakt,
 * opgeteld. Een woord telt dus één keer per event, hoe vaak het daar ook
 * voorkomt; anders zou een lang FAQ-blok zwaarder wegen dan een raak woord in
 * de titel.
 */
export function zoekEvents(
  index: EventIndexItem[],
  tekst: string,
  max = 4,
): EventTreffer[] {
  const getypt = Array.from(new Set(woordenVan(tekst)));
  if (getypt.length === 0) return [];

  const treffers: EventTreffer[] = [];
  for (const item of index) {
    const indexWoorden = Object.keys(item.woorden);
    let score = 0;
    const raak: string[] = [];
    for (const g of getypt) {
      let beste = 0;
      for (const w of indexWoorden) {
        if (item.woorden[w] <= beste) continue;
        const kracht = item.woorden[w] * raakt(g, w);
        if (kracht > beste) beste = kracht;
      }
      if (beste > 0) {
        score += beste;
        raak.push(g);
      }
    }
    if (score > 0) treffers.push({ item, score, woorden: raak });
  }

  treffers.sort((a, b) => b.score - a.score || a.item.titel.localeCompare(b.item.titel));
  /*
   * Een treffer die alleen op een los woord in de lopende tekst rust, of die
   * ver achter de beste aanloopt, is meer ruis dan hulp. "Webinar" hoort één
   * suggestie te geven, niet ook de townhall omdat het woord daar in een
   * FAQ-antwoord staat.
   */
  const top = treffers[0]?.score ?? 0;
  return treffers
    .filter((t) => t.score >= ZOEK_GEWICHT.middel && t.score >= top * 0.4)
    .slice(0, max);
}

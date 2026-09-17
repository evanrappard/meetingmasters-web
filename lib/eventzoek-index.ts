/**
 * De zoekindex over alle events, gebouwd op de server.
 *
 * Dit is de helft van het zoeken die de eventteksten nodig heeft; de andere
 * helft, het zoeken zelf, staat in `lib/eventzoek.ts` en draait in de browser.
 * De scheiding is bewust: dit bestand trekt alle eventdata mee, en die hoort
 * niet in de bundel die een bezoeker downloadt. De index die hier uitkomt is
 * klein (zo'n 25 kB voor twintig events) en gaat als prop naar het keuzeblok.
 *
 * ── De handgeschreven zoekwoorden ──
 * `ZOEKWOORDEN` is het belangrijkste deel. Niet iedereen noemt zijn
 * bijeenkomst zoals wij dat doen: "ledenvergadering" staat nergens in de
 * ALV-tekst, "vrijmibo" niet bij het bedrijfsfeest. Mist er een treffer, dan
 * is dit de plek om een woord toe te voegen. Beide talen staan hier bij elkaar
 * zodat ze gelijk oplopen.
 */

import { EVENT_DATA, type EventData } from "@/app/nl/events/[slug]/data";
import { EVENT_TEKST_EN, engelseEventSlug } from "@/app/nl/events/[slug]/tekst-en";
import { eventCategories } from "@/app/nl/events/page";
import { OVERZICHT_EN } from "@/app/nl/events/tekst-en";
import { ZOEK_GEWICHT, woordenVan, type EventIndexItem } from "@/lib/eventzoek";
import type { Taal } from "@/lib/talen";

const ZOEKWOORDEN: Record<string, { nl: string[]; en: string[] }> = {
  strategiedagen: {
    nl: ["strategie", "strategiedag", "koers", "richting", "besluit", "besluiten", "beslissen", "visie", "jaarplan", "heidag", "heisessie", "managementdag", "directie", "mt", "bestuur", "offsite", "plannen", "prioriteiten"],
    en: ["strategy", "offsite", "away day", "direction", "decisions", "decide", "vision", "leadership", "management", "board", "planning", "priorities"],
  },
  townhall: {
    nl: ["townhall", "town hall", "medewerkers", "personeel", "organisatie", "update", "directie", "ceo", "reorganisatie", "fusie", "aankondiging", "intern", "kwartaal"],
    en: ["town hall", "staff", "employees", "update", "announcement", "ceo", "reorganisation", "merger", "internal", "quarterly"],
  },
  "all-hands": {
    nl: ["all hands", "allhands", "medewerkers", "personeel", "directie", "vragen", "dialoog", "transparant", "kwartaalupdate", "kwartaal", "leiderschap"],
    en: ["all hands", "staff", "employees", "questions", "dialogue", "transparent", "quarterly", "leadership"],
  },
  alv: {
    nl: ["alv", "ledenvergadering", "jaarvergadering", "vereniging", "leden", "stemmen", "stemming", "statuten", "bestuur", "vve", "coöperatie", "notulen", "jaarrekening", "vergadering"],
    en: ["agm", "general meeting", "members", "association", "vote", "voting", "board", "annual", "cooperative", "minutes"],
  },
  teambuilding: {
    nl: ["teambuilding", "team", "teamdag", "samenwerking", "samenwerken", "vertrouwen", "teamspirit", "afdeling", "collega's", "collega", "verbinding"],
    en: ["team building", "team", "team day", "collaboration", "trust", "colleagues", "department", "connection"],
  },
  "training-workshop": {
    nl: ["training", "workshop", "opleiding", "cursus", "leren", "leertraject", "trainer", "docent", "les", "masterclass", "coaching", "vaardigheden", "l&d", "ontwikkeling"],
    en: ["training", "workshop", "course", "learning", "learn", "trainer", "teacher", "masterclass", "coaching", "skills", "development"],
  },
  brainstormen: {
    nl: ["brainstorm", "brainstormen", "ideeën", "idee", "creatief", "creativiteit", "innovatie", "oplossingen", "design thinking", "sprint", "bedenken"],
    en: ["brainstorm", "ideas", "creative", "creativity", "innovation", "solutions", "design thinking", "sprint"],
  },
  onboardingdag: {
    nl: ["onboarding", "nieuwe medewerkers", "nieuwe collega's", "introductie", "introductiedag", "starters", "welkom", "kennismaking", "inwerken", "instroom"],
    en: ["onboarding", "new hires", "newcomers", "introduction", "welcome", "induction", "starters"],
  },
  bedrijfsfeest: {
    nl: ["bedrijfsfeest", "feest", "borrel", "vrijmibo", "jubileum", "viering", "vieren", "afscheid", "personeelsfeest", "party", "dj", "pubquiz", "quiz", "gezellig"],
    en: ["company party", "party", "celebration", "celebrate", "anniversary", "drinks", "farewell", "quiz", "fun"],
  },
  kerstfeest: {
    nl: ["kerst", "kerstfeest", "kerstborrel", "eindejaar", "eindejaarsfeest", "nieuwjaar", "nieuwjaarsborrel", "december", "feestdagen", "sinterklaas", "jaarafsluiting"],
    en: ["christmas", "xmas", "end of year", "new year", "holiday", "december", "festive", "year end"],
  },
  teamuitje: {
    nl: ["teamuitje", "uitje", "teamdag", "escape room", "escaperoom", "spel", "spelletje", "game", "quiz", "pubquiz", "plezier", "ontspanning", "afdelingsuitje", "borrel", "gezellig"],
    en: ["team outing", "outing", "escape room", "game", "games", "quiz", "fun", "relax", "social"],
  },
  "community-building": {
    nl: ["community", "netwerk", "alumni", "leden", "platform", "gemeenschap", "terugkerend", "ambassadeurs", "klanten", "vaste groep"],
    en: ["community", "network", "alumni", "members", "platform", "recurring", "ambassadors", "customers"],
  },
  bewonersparticipatie: {
    nl: ["bewoners", "participatie", "inspraak", "gemeente", "wijk", "buurt", "burgers", "inwoners", "omwonenden", "bewonersavond", "informatieavond", "draagvlak", "overheid", "provincie", "waterschap"],
    en: ["residents", "participation", "citizens", "municipality", "neighbourhood", "public", "consultation", "government", "local"],
  },
  klankbordgroep: {
    nl: ["klankbord", "klankbordgroep", "adviesraad", "cliëntenraad", "ondernemingsraad", "medezeggenschap", "feedback", "advies", "stakeholders", "patiënten", "belanghebbenden"],
    en: ["sounding board", "advisory", "council", "feedback", "stakeholders", "works council", "patients"],
  },
  focusgroep: {
    nl: ["focusgroep", "onderzoek", "klantonderzoek", "gebruikers", "gebruikersonderzoek", "feedback", "interview", "panel", "doelgroep", "testen", "ux", "inzichten"],
    en: ["focus group", "research", "users", "user research", "feedback", "interview", "panel", "testing", "insights"],
  },
  "world-cafe": {
    nl: ["world café", "world cafe", "gesprek", "gesprekstafels", "dialoog", "tafelgesprek", "uitwisseling", "verdieping", "thema's", "rondes"],
    en: ["world café", "world cafe", "conversation", "tables", "dialogue", "exchange", "rounds", "themes"],
  },
  webinar: {
    nl: ["webinar", "kennis", "kennisdeling", "kennissessie", "presentatie", "lezing", "spreker", "uitzending", "lunchlezing", "lunch & learn", "informeren", "publiek", "leads", "marketing", "klanten", "prospects", "productlancering", "lancering"],
    en: ["webinar", "knowledge", "presentation", "lecture", "speaker", "broadcast", "lunch and learn", "audience", "leads", "marketing", "customers", "prospects", "product launch", "launch"],
  },
  conferentie: {
    nl: ["conferentie", "congres", "symposium", "seminar", "sprekers", "sessies", "programma", "meerdaags", "keynote", "vakgenoten", "internationaal", "dagvoorzitter"],
    en: ["conference", "congress", "symposium", "seminar", "speakers", "sessions", "programme", "multi-day", "keynote", "international", "chair"],
  },
  "open-space": {
    nl: ["open space", "agenda", "zelforganisatie", "vrije agenda", "unconference", "barcamp", "thema's", "eigen onderwerpen"],
    en: ["open space", "unconference", "self-organised", "agenda", "barcamp", "own topics"],
  },
  netwerkevent: {
    nl: ["netwerk", "netwerken", "netwerkborrel", "kennismaken", "ontmoeten", "contacten", "matchmaking", "speeddate", "relaties", "klanten", "partners", "alumni", "borrel"],
    en: ["network", "networking", "drinks", "meet", "contacts", "matchmaking", "speed dating", "relationships", "customers", "partners"],
  },
};

const { zwaar: ZWAAR, middel: MIDDEL, licht: LICHT } = ZOEK_GEWICHT;

/**
 * De index voor één taal. Draait op de server, bij het bouwen van de pagina.
 * Op de Engelse pagina staan alleen events die in het Engels bestaan; de
 * teksten komen dan uit tekst-en.ts, de structuur blijft Nederlands.
 */
export function bouwEventIndex(taal: Taal): EventIndexItem[] {
  const items: EventIndexItem[] = [];
  for (const cat of eventCategories) {
    const catLabel =
      (taal === "en" ? OVERZICHT_EN.categorieen[cat.id] : undefined) ?? cat.label;
    for (const f of cat.formats) {
      const enSlug = engelseEventSlug(f.slug);
      if (taal === "en" && !enSlug) continue;
      const nl = EVENT_DATA[f.slug];
      if (!nl) continue;
      const en: Partial<EventData> = taal === "en" ? EVENT_TEKST_EN[f.slug] ?? {} : {};
      const veld = <K extends keyof EventData>(k: K): EventData[K] =>
        (en[k] as EventData[K] | undefined) ?? nl[k];
      const titel =
        (taal === "en" ? OVERZICHT_EN.formatTeksten[f.slug]?.title : undefined) ?? f.title;

      const woorden: Record<string, number> = {};
      const voeg = (tekst: string | undefined, gewicht: number) => {
        for (const w of woordenVan(tekst ?? "")) {
          woorden[w] = Math.max(woorden[w] ?? 0, gewicht);
        }
      };

      voeg(titel, ZWAAR);
      voeg(f.slug.replace(/-/g, " "), ZWAAR);
      for (const z of ZOEKWOORDEN[f.slug]?.[taal] ?? []) voeg(z, ZWAAR);

      voeg(veld("tagline"), MIDDEL);
      voeg(veld("forWho"), MIDDEL);
      voeg(veld("outcomeSummary"), MIDDEL);
      voeg(catLabel, MIDDEL);

      voeg(veld("intro"), LICHT);
      for (const o of veld("outcomes") ?? []) voeg(`${o.title} ${o.body}`, LICHT);
      voeg(veld("validation")?.headline, LICHT);
      for (const v of veld("validation")?.items ?? []) voeg(v.title, LICHT);
      for (const c of veld("conditions") ?? []) voeg(c.title, LICHT);
      for (const q of veld("faq") ?? []) voeg(q.q, LICHT);

      items.push({
        slug: f.slug,
        titel,
        href: taal === "en" ? `/en/events/${enSlug}` : `/nl/events/${f.slug}`,
        woorden,
      });
    }
  }
  return items;
}

/**
 * De navigatiestructuur van de site — één bron voor het dropdownmenu bovenaan,
 * de kolommen in de footer én de taalschakelaar.
 *
 * Waarom hier en niet in de Navbar: menu en footer liepen uit elkaar. De footer
 * wees nog naar pagina's die niet bestaan (`/nl/remote-office`,
 * `/nl/publicaties`) en naar pagina's die bewust nog niet zichtbaar zijn
 * (Cases, Partners, Kwaliteit & vertrouwelijkheid). Door beide vanaf hier te
 * voeden kan dat niet meer gebeuren: een pagina toevoegen of verbergen doe je
 * op één plek.
 *
 * Een pagina tijdelijk uit de navigatie halen: haal 'm hier weg (of zet het
 * item in commentaar). De route zelf blijft gewoon bestaan en bereikbaar via
 * een directe link — hij staat alleen niet meer in menu en footer.
 *
 * ── Over de twee talen ──
 * Elk item heeft een Engelse tekst (`labelEn`) en, zodra de Engelse pagina
 * bestaat, een Engels adres (`hrefEn`). Zolang `hrefEn` ontbreekt wijst de
 * Engelse navigatie naar de Nederlandse pagina. Dat is een bewuste keuze: een
 * werkende link naar Nederlandse inhoud is beter dan een doodlopende link of
 * een menu waar bijna niets in staat. Bouw je een Engelse pagina, vul dan hier
 * `hrefEn` in — dan verspringt het menu vanzelf mee.
 */

export type Taal = "nl" | "en";

export type NavChild = {
  label: string;
  href: string;
  labelEn: string;
  /** Alleen invullen als de Engelse pagina echt bestaat. */
  hrefEn?: string;
};

export type NavItem = {
  label: string;
  href: string;
  labelEn: string;
  hrefEn?: string;
  /** Het gele kopje boven de dropdown. Zonder dit klapt er niets uit. */
  feature?: { title: string; desc: string; titleEn: string; descEn: string };
  children?: NavChild[];
  /**
   * Alleen in de footer tonen, niet in de balk bovenaan. Voor pagina's die er
   * wel horen te zijn maar de hoofdnavigatie niet hoeven te verlengen.
   */
  alleenFooter?: boolean;
  moreLabel?: string;
  moreLabelEn?: string;
  moreHref?: string;
  moreHrefEn?: string;
  /** Bepaalt onder welke kolom het item in de footer terechtkomt. */
  groep: "diensten" | "organisatie";
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Events",
    labelEn: "Events",
    href: "/nl/events",
    groep: "diensten",
    feature: {
      title: "Bijeenkomsten die écht iets opleveren",
      desc: "Beter contact, meer draagvlak, concrete besluiten – ook in grote groepen.",
      titleEn: "Gatherings that actually deliver",
      descEn: "Better contact, wider support, real decisions — even with large groups.",
    },
    children: [
      { label: "Strategiedag", labelEn: "Strategy day", href: "/nl/events/strategiedagen" },
      { label: "Virtuele kerstborrel", labelEn: "Virtual Christmas party", href: "/nl/events/kerstfeest" },
      { label: "All-hands", labelEn: "All-hands", href: "/nl/events/all-hands" },
      { label: "Community-event", labelEn: "Community event", href: "/nl/events/community-building" },
      { label: "Online teambuilding", labelEn: "Online team building", href: "/nl/events/teambuilding" },
    ],
    moreLabel: "Alle eventformats",
    moreLabelEn: "All event formats",
    moreHref: "/nl/events#formats",
  },
  {
    label: "Virtueel Kantoor",
    labelEn: "Virtual Office",
    href: "/nl/virtual-office",
    groep: "diensten",
    feature: {
      title: "Samen werken als startpunt",
      desc: "Een verbindende plek voor wie niet allemaal op 1 locatie zit.",
      titleEn: "Working together as the starting point",
      descEn: "A place that connects people who are not all in one location.",
    },
    children: [
      { label: "Boek een zaaltje", labelEn: "Book a meeting room", href: "/nl/virtual-office/zaaltje" },
      { label: "Huur een instapklaar kantoor", labelEn: "Rent a ready-made office", href: "/nl/virtual-office/huren" },
      { label: "Kantoor + Cultuur", labelEn: "Office + Culture", href: "/nl/virtual-office/kantoor-cultuur" },
    ],
  },
  {
    label: "Games",
    labelEn: "Games",
    href: "/nl/games-tools",
    groep: "diensten",
    feature: {
      title: "Tools voor meer betrokkenheid",
      desc: "Interactieve formats voor verrassende ervaring en meer verbinding.",
      titleEn: "Tools for more involvement",
      descEn: "Interactive formats for a surprising experience and more connection.",
    },
    children: [
      { label: "Games", labelEn: "Games", href: "/nl/games-tools#games" },
      { label: "Escape Room R@venHack", labelEn: "Escape room R@venHack", href: "/nl/games-tools/ravenhack" },
      { label: "Tools", labelEn: "Tools", href: "/nl/games-tools#tools" },
    ],
  },
  {
    // Landt meteen op de hulppagina: wie hier klikt heeft meestal haast.
    // Oriënteren kan daarna nog, via de tools- en platformpagina's.
    label: "Tech hulp",
    labelEn: "Tech help",
    href: "/nl/technologie/hulp",
    groep: "diensten",
    feature: {
      title: "Vastgelopen? Zo ben je er zo weer in",
      desc: "Directe hulp bij online meetings, in gewone taal.",
      titleEn: "Stuck? Here is how you get back in",
      descEn: "Straight help with online meetings, in plain language.",
    },
    children: [
      { label: "Meeting Platforms", labelEn: "Meeting platforms", href: "/nl/technologie/tools" },
      { label: "SpatialChat", labelEn: "SpatialChat", href: "/nl/technologie/spatialchat" },
    ],
  },
  {
    label: "Downloads",
    labelEn: "Downloads",
    href: "/nl/downloads",
    groep: "diensten",
    alleenFooter: true,
  },
  {
    label: "Over ons",
    labelEn: "About us",
    href: "/nl/about",
    groep: "organisatie",
    feature: {
      title: "Online Meeting Professionals",
      desc: "",
      titleEn: "Online meeting professionals",
      descEn: "",
    },
    children: [
      { label: "Ervaringen van klanten", labelEn: "What clients say", href: "/nl/testimonials" },
    ],
  },
  {
    label: "Blog",
    labelEn: "Blog",
    href: "/nl/blog",
    // De blog is de eerste sectie die wél volledig in het Engels bestaat.
    hrefEn: "/en/blog",
    groep: "organisatie",
  },
];

/**
 * Links die alleen in de footer horen: ze zitten bovenaan al in de gele
 * CTA-knop of zijn te klein voor een eigen menu-item.
 */
export const FOOTER_EXTRA: NavChild[] = [
  { label: "Contact", labelEn: "Contact", href: "/nl/contact" },
  { label: "Plan een gesprek", labelEn: "Book a conversation", href: "/nl/expert-advies" },
  { label: "Nieuwsbrief (aanmelden)", labelEn: "Newsletter (sign up)", href: "/nl/nieuwsbrief" },
];

export const FOOTER_JURIDISCH: NavChild[] = [
  { label: "Privacy Statement", labelEn: "Privacy statement", href: "/nl/privacy-statement" },
  { label: "Cookieverklaring", labelEn: "Cookie statement", href: "/nl/cookieverklaring" },
];

/* ── De twee talen uit elkaar trekken ─────────────────────────────────────── */

/** Label en adres in de gevraagde taal. Zonder Engels adres: het Nederlandse. */
export function kies<T extends { label: string; href: string; labelEn: string; hrefEn?: string }>(
  item: T,
  taal: Taal
): { label: string; href: string } {
  return taal === "en"
    ? { label: item.labelEn, href: item.hrefEn ?? item.href }
    : { label: item.label, href: item.href };
}

/** De navigatie-items van één footerkolom, in de gevraagde taal. */
export const navPerGroep = (groep: NavItem["groep"]) =>
  NAV_ITEMS.filter((item) => item.groep === groep);

/* ── Taalschakelaar ───────────────────────────────────────────────────────── */

/**
 * Welke taal hoort bij dit adres? Alles wat niet met /en begint is Nederlands;
 * de site is immers in het Nederlands begonnen.
 */
export function taalVanPad(pad: string): Taal {
  return pad.startsWith("/en/") || pad === "/en" ? "en" : "nl";
}

/**
 * Blogartikelen hebben in beide talen een eigen adres. Deze koppeling laat de
 * taalschakelaar naar hetzelfde artikel springen in plaats van naar het
 * overzicht. Elf paar korte teksten — verwaarloosbaar voor de bezoeker, en
 * daarmee blijft de zware `posts.ts` buiten de code die de browser laadt.
 */
const BLOG_PAREN: Array<[nl: string, en: string]> = [
  ["terug-naar-kantoor", "back-to-the-office"],
  ["niet-hetzelfde-wel-goed", "not-the-same-still-good"],
  ["heen-en-weer", "back-and-forth"],
  ["online-beheersen", "we-have-online-covered"],
  ["wat-gamers-weten", "what-gamers-know"],
  ["rondjes-versus-vierkantjes", "circles-versus-squares"],
  ["systeemwoede", "system-rage"],
  ["ai-paradox", "the-ai-paradox"],
  ["acht-grens", "the-rule-of-eight"],
  ["stok-om-mee-te-slaan", "a-stick-to-beat-it-with"],
  ["olympiers", "an-online-home-for-olympians"],
];

/**
 * Het adres van de huidige pagina in de andere taal.
 *
 * Voor de blog springen we naar hetzelfde artikel. Voor al het andere bestaat
 * er nog geen Engelse tegenhanger, dus komt de bezoeker op de startpagina van
 * de andere taal uit. Dat is eerlijker dan een link die doodloopt. Zodra er
 * meer pagina's in het Engels bestaan, breidt deze functie mee uit.
 */
export function anderTaalPad(pad: string): string {
  const huidige = taalVanPad(pad);

  if (huidige === "nl") {
    if (pad === "/nl/blog") return "/en/blog";
    const m = pad.match(/^\/nl\/blog\/(.+)$/);
    const paar = m && BLOG_PAREN.find(([nl]) => nl === m[1]);
    if (paar) return `/en/blog/${paar[1]}`;
    return "/en/blog";
  }

  if (pad === "/en/blog") return "/nl/blog";
  const m = pad.match(/^\/en\/blog\/(.+)$/);
  const paar = m && BLOG_PAREN.find(([, en]) => en === m[1]);
  if (paar) return `/nl/blog/${paar[0]}`;
  return "/nl/home";
}

/**
 * De navigatiestructuur van de Nederlandse site — één bron voor het
 * dropdownmenu bovenaan én de kolommen in de footer.
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
 */

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  /** Het gele kopje boven de dropdown. Zonder dit klapt er niets uit. */
  feature?: { title: string; desc: string };
  children?: NavChild[];
  moreLabel?: string;
  moreHref?: string;
  /** Bepaalt onder welke kolom het item in de footer terechtkomt. */
  groep: "diensten" | "organisatie";
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Events",
    href: "/nl/events",
    groep: "diensten",
    feature: {
      title: "Bijeenkomsten die écht iets opleveren",
      desc: "Beter contact, meer draagvlak, concrete besluiten – ook in grote groepen.",
    },
    children: [
      { label: "Strategiedag", href: "/nl/events/strategiedagen" },
      { label: "Virtuele kerstborrel", href: "/nl/events/kerstfeest" },
      { label: "All-hands", href: "/nl/events/all-hands" },
      { label: "Community-event", href: "/nl/events/community-building" },
      { label: "Online teambuilding", href: "/nl/events/teambuilding" },
    ],
    moreLabel: "Alle eventformats",
    moreHref: "/nl/events#formats",
  },
  {
    label: "Virtueel Kantoor",
    href: "/nl/virtual-office",
    groep: "diensten",
    feature: {
      title: "Samen werken als startpunt",
      desc: "Een verbindende plek voor wie niet allemaal op 1 locatie zit.",
    },
    children: [
      { label: "Boek een zaaltje", href: "/nl/virtual-office/zaaltje" },
      { label: "Huur een instapklaar kantoor", href: "/nl/virtual-office/huren" },
      { label: "Kantoor + Cultuur", href: "/nl/virtual-office/kantoor-cultuur" },
    ],
  },
  {
    label: "Games",
    href: "/nl/games-tools",
    groep: "diensten",
    feature: {
      title: "Tools voor meer betrokkenheid",
      desc: "Interactieve formats voor verrassende ervaring en meer verbinding.",
    },
    children: [
      { label: "Games", href: "/nl/games-tools#games" },
      { label: "Escape Room R@venHack", href: "/nl/games-tools/ravenhack" },
      { label: "Tools", href: "/nl/games-tools#tools" },
    ],
  },
  {
    // Landt meteen op de hulppagina: wie hier klikt heeft meestal haast.
    // Oriënteren kan daarna nog, via de tools- en platformpagina's.
    label: "Tech hulp",
    href: "/nl/technologie/hulp",
    groep: "diensten",
    feature: {
      title: "Vastgelopen? Zo ben je er zo weer in",
      desc: "Directe hulp bij online meetings, in gewone taal.",
    },
    children: [
      { label: "Waar wij mee werken", href: "/nl/technologie/tools" },
      { label: "SpatialChat", href: "/nl/technologie/spatialchat" },
    ],
  },
  {
    label: "Over ons",
    href: "/nl/about",
    groep: "organisatie",
    feature: {
      title: "Online Meeting Professionals",
      desc: "",
    },
  },
  { label: "Blog", href: "/nl/blog", groep: "organisatie" },
];

/**
 * Links die alleen in de footer horen: ze zitten bovenaan al in de gele
 * CTA-knop of zijn te klein voor een eigen menu-item.
 */
export const FOOTER_EXTRA: NavChild[] = [
  { label: "Contact", href: "/nl/contact" },
  { label: "Plan een gesprek", href: "/nl/expert-advies" },
  { label: "Nieuwsbrief", href: "/nl/nieuwsbrief" },
];

export const FOOTER_JURIDISCH: NavChild[] = [
  { label: "Privacy Statement", href: "/nl/privacy-statement" },
  { label: "Cookieverklaring", href: "/nl/cookieverklaring" },
];

export const navPerGroep = (groep: NavItem["groep"]) =>
  NAV_ITEMS.filter((item) => item.groep === groep);

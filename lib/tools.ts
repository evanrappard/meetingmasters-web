/**
 * Register van de gratis online tools.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ NIEUWE TOOL? Voeg 'm hier toe en hij verschijnt automatisch in de        │
 * │ "Andere tools"-sectie op alle andere toolpagina's.                       │
 * │                                                                          │
 * │ Alleen tools die je tíjdens een meeting inzet horen hier. Losse          │
 * │ hulpmiddelen zoals de vergaderkosten-calculator horen er NIET in — die   │
 * │ hebben een ander doel en een ander moment.                               │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

export type Tool = {
  /** Sleutel, gelijk aan het laatste deel van de route. */
  key: string;
  label: string;
  labelEn: string;
  href: string;
  hrefEn: string;
  /** Eén regel, gebruikt in overzichten. */
  tagline: string;
  /**
   * Adres van de kale tool, voor de insluitcode en het iframe op de pagina.
   * Eigen domein waar dat kan; een Netlify-adres waar de app daar al draait
   * met zijn eigen configuratie- of hostsysteem.
   */
  embedUrl: string;
};

export const TOOLS: Tool[] = [
  {
    key: "inspiration-cards",
    label: "Inspiratiekaarten",
    labelEn: "Inspiration Cards",
    href: "/nl/games-tools/tools/inspiration-cards",
    hrefEn: "/en/games-tools/tools/inspiration-cards",
    tagline: "Trek een kaart met een thema en een kunstwerk, en het gesprek begint.",
    embedUrl: "/embed/inspiratiekaarten",
  },
  {
    key: "wheel-of-fortune",
    label: "Wheel of Fortune",
    labelEn: "Wheel of Fortune",
    href: "/nl/games-tools/tools/wheel-of-fortune",
    hrefEn: "/en/games-tools/tools/wheel-of-fortune",
    tagline: "Een draaiend rad dat willekeurig een naam, vraag of opdracht kiest.",
    // Draait op Netlify vanwege het configuratiesysteem met GitHub-opslag.
    embedUrl: "https://mm-wheel-of-fortune.netlify.app",
  },
  {
    key: "bingo",
    label: "Bingo",
    labelEn: "Bingo",
    href: "/nl/games-tools/tools/bingo",
    hrefEn: "/en/games-tools/tools/bingo",
    tagline: "Een speelse bingokaart die je meeting of kick-off in een spel verandert.",
    // Staat op ons eigen domein onder public/tools/, met het hostpaneel
    // zonder inlogscherm. De Netlify-versie (nlbingo.netlify.app) blijft
    // ongemoeid bestaan; wijzigingen daar lopen niet mee met deze kopie.
    embedUrl: "/tools/bingo/index.html",
  },
  {
    key: "storytelling",
    label: "Storytelling",
    labelEn: "Storytelling",
    href: "/nl/games-tools/tools/storytelling",
    hrefEn: "/en/games-tools/tools/storytelling",
    tagline: "Bouw samen een verhaal op — verrassend en verbindend.",
    // Statische app, staat op ons eigen domein onder public/tools/.
    // Mét index.html: zonder die naam stuurt Next.js door naar een 404.
    embedUrl: "/tools/storytelling/index.html",
  },
];

export const tool = (key: string) => TOOLS.find((t) => t.key === key)!;

/** Alle tools behalve de huidige, voor de "Andere tools"-sectie. */
export const andereTools = (huidig: string) => TOOLS.filter((t) => t.key !== huidig);

/**
 * Het adres van de kale tool, per taal. Storytelling heeft een Engels thema
 * binnen dezelfde app; bingo heeft een eigen Engelse kopie onder /en/, met
 * eigen hostpaneel en Engelse standaardwoorden. Het rad kiest zijn taal zelf.
 */
export const embedVoor = (key: string, taal: "nl" | "en" = "nl") => {
  const t = tool(key);
  if (taal === "en" && key === "storytelling") {
    return "/tools/storytelling/index.html?theme=default-en&set=happy-mad-sad-en";
  }
  if (taal === "en" && key === "inspiration-cards") return "/embed/inspiratiekaarten?taal=en";
  if (taal === "en" && key === "bingo") return "/tools/bingo/en/index.html";
  // Het rad draait op Netlify en kent zijn taal uit het adres. Zonder deze
  // parameter staat er "Optie 1" op een Engelse pagina.
  if (taal === "en" && key === "wheel-of-fortune") return `${t.embedUrl}?lang=en`;
  return t.embedUrl;
};

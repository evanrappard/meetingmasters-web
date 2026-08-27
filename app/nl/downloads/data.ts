/** Taalloze data en Nederlandse teksten van de Downloads-pagina. */

export type Item = {
  titel: string;
  soort: string;
  /**
   * Publicatiedatum. Staat er bewust bij: een deel van deze stukken is van
   * 2022 en dat lees je eruit, ook al klopt de inhoud nog. Beter dat de lezer
   * dat zelf ziet dan dat hij het gaandeweg ontdekt.
   */
  datum: string;
  /** Voorblad van het document. Gemaakt met Quick Look uit de pdf zelf. */
  beeld?: string;
  body: string;
  href: string;
  actie: string;
  extern?: boolean;
};

export const PUBLICATIES: Item[] = [
  {
    titel: "Het MeetingMasters-manifest",
    soort: "Manifest · pdf",
    datum: "2022",
    body:
      "Waar wij voor staan, in het kort. Over waarom hoe we elkaar ontmoeten ertoe doet, en wat er misgaat als een bijeenkomst een agendapunt wordt in plaats van een moment.",
    beeld: "/images/downloads/manifest-voorblad.webp",
    href: "/downloads/meetingmasters-manifest.pdf",
    actie: "Download het manifest",
  },
  {
    titel: "Checklist online ALV",
    soort: "Checklist · pdf",
    datum: "2024",
    body:
      "Voor een ledenvergadering die online moet kloppen: stemmen, quorum, en een verloop dat formeel standhoudt.",
    beeld: "/images/downloads/checklist-alv-voorblad.webp",
    href: "/downloads/checklist-online-alv.pdf",
    actie: "Download de checklist",
  },
];

export const HANDLEIDINGEN: Item[] = [
  {
    titel: "Deelnemen via SpatialChat",
    soort: "Handleiding · pdf",
    datum: "2026",
    body:
      "Stap voor stap voor deelnemers: binnenkomen, je weg vinden in de ruimte, en beeld en geluid goed zetten. Handig om vooraf mee te sturen.",
    href: "/downloads/spatialchat-instructies-deelnemer-v2.pdf",
    actie: "Download de handleiding",
  },
  {
    titel: "Deelnemen via Zoom",
    soort: "Handleiding · pdf",
    datum: "2026",
    body:
      "Wat een deelnemer moet weten om zonder gedoe binnen te komen en mee te doen. Ook bruikbaar als bijlage bij je uitnodiging.",
    href: "/downloads/zoom-instructies-deelnemer.pdf",
    actie: "Download de handleiding",
  },
];

/** De losse teksten van deze pagina in het Nederlands. */
export const NL = {
  hero: {
    kicker: "Downloads",
    titel: "Meenemen, doorsturen, nalezen.",
    intro:
      "Onze publicaties over online samenkomen, en de handleidingen die je deelnemers vooraf kunt sturen.",
    beeldAlt: "Iemand aan een bureau met een laptop waarop een downloadknop staat",
  },
  direct: {
    kicker: "Direct te downloaden",
    titel:
      "Zonder formulier. Gratis, en bedoeld om door te geven — aan je collega\u2019s, je bestuur of de mensen die je uitnodigt.",
  },
  publicaties: PUBLICATIES,
  vergadermacht: {
    kicker: "Onze publicatie",
    titel: "Vergadermacht",
    onder: "Hoe centrale regie op overleg de waarde van bijeenkomsten vergroot.",
    body: "Over hoe bijeenkomsten werkelijk werken: wie er spreekt, wie er zwijgt, en wat dat doet met wat er wordt besloten. Als vergaderingen de plaats zijn waar strategie en beleid tot leven komen, hoe beleg je die verantwoordelijkheid?",
    slot: "Vul je gegevens in en je ontvangt de publicatie meteen.",
    formulierKop: "Ontvang Vergadermacht",
    beeldAlt: "De publicatie Vergadermacht, over hoe centrale regie op overleg de waarde van bijeenkomsten vergroot",
  },
  kompas: {
    label: "Keuzehulp · 2022",
    titel: "Keuzekompas Meeting Mix",
    body: "Online, hybride, op locatie, alleen audio, asynchroon of helemaal geen bijeenkomst — welke vorm past bij wat je wilt bereiken? Het kompas loopt de afwegingen langs, zodat je die keuze bewust maakt in plaats van uit gewoonte.",
    jaar: "(2022)",
    cta: "Download het keuzekompas →",
    href: "/downloads/keuzekompas-meeting-mix.pdf",
    beeld: "/images/keuzekompas-poster.jpg",
    video: "/videos/keuzekompas.mp4",
    youtube: "https://www.youtube.com/watch?v=2nyK35JZjUE",
    youtubeLabel: "Bekijk hem op YouTube",
    onderschrift: "In veertien seconden uitgelegd. Ook",
    onderschriftLink: "op YouTube ↗",
    geenVideo: "Je browser kan deze video niet tonen.",
  },
  handleidingen: {
    kop: "Handleidingen voor deelnemers",
    onder:
      "Praktisch, in gewone taal. Stuur ze mee met je uitnodiging, dan hoeft niemand op de dag zelf nog iets uit te zoeken.",
    items: HANDLEIDINGEN,
    techHulp: "Tech hulp",
    hulpVoor: "Loop je ergens op vast tijdens een bijeenkomst? Op",
    hulpNa: "staat per probleem wat je kunt doen.",
  },
  cta: {
    kop: "Liever even sparren dan lezen?",
    onder: "In een kort gesprek weten we meestal al welke richting past bij je bijeenkomst.",
    advies: "Vraag advies →",
  },
  links: { advies: "/nl/expert-advies", hulp: "/nl/technologie/hulp" },
};

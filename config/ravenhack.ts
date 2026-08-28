/**
 * Alle regels, prijzen en teksten van de R@venHack-modules op één plek.
 *
 * Verandert er een prijs, een grens of een tekst, dan gebeurt dat hier en
 * nergens anders. De rekenregels zelf staan in lib/ravenhack/prijs.ts.
 */

/*
 * De bovengrens staat op 75, gelijk aan de claim op de rest van de site. Het
 * spel kan technisch tot 150 mensen, maar dat is geen standaardinrichting: daar
 * gaat een gesprek aan vooraf. Alles boven de 75 krijgt daarom geen prijs maar
 * een verwijzing naar contact.
 */

export type VariantSleutel = "experience" | "quick";
export type SpelTaal = "nl" | "en";

export const VARIANTEN = {
  experience: {
    naam: { nl: "R@venHack Experience", en: "R@venHack Experience" },
    ondertitel: {
      nl: "Teamspel | 5 – 75 deelnemers | 90 min",
      en: "Team game | 5 – 75 participants | 90 min",
    },
    duurMinuten: 90,
    basisprijs: 675,
    inbegrepenDeelnemers: 12,
    prijsPerExtraDeelnemer: 25,
    minDeelnemers: 5,
    maxDeelnemers: 75,
    /**
     * Geen tussenstap meer: tot 75 boek je gewoon, daarboven is het maatwerk.
     * Een prijs tonen die we toch moeten omgooien helpt niemand.
     */
    overlegVanaf: null as number | null,
  },
  quick: {
    naam: { nl: "R@venHack Quick", en: "R@venHack Quick" },
    ondertitel: {
      nl: "Vriendenspel | 5 – 30 deelnemers | 60 min",
      en: "Friends game | 5 – 30 participants | 60 min",
    },
    duurMinuten: 60,
    basisprijs: 495,
    inbegrepenDeelnemers: 12,
    prijsPerExtraDeelnemer: 27.5,
    minDeelnemers: 5,
    maxDeelnemers: 30,
    overlegVanaf: null as number | null,
  },
} as const;

export const STANDAARD_VARIANT: VariantSleutel = "experience";
export const STANDAARD_DEELNEMERS = 12;

export const TOESLAG = {
  percentage: 20,
  /** Een sessie die om 19:00 of later begint. */
  avondVanafUur: 19,
  /** Zondag = 0, zaterdag = 6, net als in JavaScript zelf. */
  weekenddagen: [0, 6],
};

export const BTW_PERCENTAGE = 21;
export const BETAALTERMIJN_DAGEN = 14;

/** Boekingsvenster: niet binnen drie werkdagen, niet verder dan een jaar. */
export const MIN_WERKDAGEN_VOORAF = 3;
export const MAX_MAANDEN_VOORUIT = 12;

/** De hele sessie moet om 21:00 klaar zijn. */
export const LAATSTE_EINDTIJD_UUR = 21;
export const VROEGSTE_STARTTIJD_UUR = 9;

/**
 * Het boekingsformulier in HubSpot, aangemaakt met
 * scripts/ravenhack-formulier.mjs. Zolang deze leeg is toont de module de
 * gegevens die zouden worden meegestuurd, zodat je lokaal kunt testen.
 */
export const BOEKINGSFORMULIER = {
  nl: "35531a09-73fe-4f3a-b514-423c52c51122",
  en: "b049c23c-16db-4fba-8458-11c54b490edb",
};

/** De namen van de verborgen velden in dat formulier. */
export const FORMULIERVELDEN = {
  variant: "rh_variant",
  taal: "rh_taal",
  deelnemers: "rh_deelnemers",
  datum: "rh_speeldatum",
  tijd: "rh_starttijd",
  toeslag: "rh_toeslag_toegepast",
  kortingscode: "rh_kortingscode",
  kortingspercentage: "rh_kortingspercentage",
  prijsopbouw: "rh_prijsopbouw",
  totaalExclBtw: "rh_totaal_excl_btw",
} as const;

/** Alle vaste teksten van de drie modules, in beide talen. */
export const TEKST = {
  nl: {
    disclaimer:
      "Aan deze weergave kunnen geen rechten worden ontleend. Uw boeking is definitief zodra u de bevestiging van MeetingMasters heeft ontvangen.",
    toeslagregel: "Toeslag 20% voor avond en weekend.",
    quickTeGroot:
      "Met meer dan 30 deelnemers speelt u R@venHack Experience. Dat spel is gebouwd op grotere groepen.",
    quickOmzetten: "Bereken als Experience",
    teGroot: "Dit kan ook met grotere groepen. Neem contact op over de mogelijkheden.",
    overlegLink: "Neem contact op",
    beschikbaarheid:
      "Wij checken de beschikbaarheid van dit moment en komen zo snel mogelijk bij u terug.",
    onderMinimum: "R@venHack speelt u vanaf 5 deelnemers. De basisprijs blijft gelijk.",

    calculator: {
      kicker: "Wat kost het",
      kop: "Bereken de prijs",
      spel: "Welk spel",
      taal: "Taal van de sessie",
      deelnemers: "Aantal deelnemers",
      datum: "Gewenste datum",
      tijd: "Gewenste starttijd",
      kortingscode: "Kortingscode",
      kortingscodeControleer: "Controleer",
      kortingscodeGeldig: "Code geldig:",
      kortingscodeOngeldig: "Deze code kennen we niet, of hij is verlopen. U kunt gewoon verder.",
      exclBtw: "excl. btw",
      inclBtw: "= {bedrag} incl. 21% btw",
      naarFormulier: "Boek nu",
      terug: "← Terug naar de prijs",
      datumNodig:
        "Kies eerst een gewenste datum en tijd. Die hebben we nodig om uw aanvraag te kunnen inplannen.",
      opbouw: {
        basis: "Basisprijs {variant} (t/m {inbegrepen} deelnemers)",
        extra: "Extra deelnemers: {aantal} × {prijs}",
        toeslag: "Toeslag avond of weekend 20%",
        korting: "Korting {code} ({percentage}%)",
        totaal: "Totaal excl. btw",
      },
    },
    formulier: {
      nogNiet: "Het formulier staat nog niet ingesteld.",
      samenvatting: "Dit sturen we mee",
    },
    voorwaarden: [
      "Wij checken de beschikbaarheid en komen zo spoedig mogelijk terug.",
      "Offerte en factuur betreffen geboekte deelnemers.",
      "Annulering is mogelijk tot 5 werkdagen voor de sessie. Daarna brengen wij 50% in rekening.",
      "Alle bedragen zijn exclusief 21 procent btw.",
    ],
  },
  en: {
    disclaimer:
      "No rights can be derived from this overview. Your booking is confirmed once you receive our confirmation.",
    toeslagregel: "Surcharge of 20% for evenings and weekends.",
    quickTeGroot:
      "With more than 30 participants you play R@venHack Experience, which is built for larger groups.",
    quickOmzetten: "Calculate as Experience",
    teGroot: "This can be done with larger groups too. Get in touch about what is possible.",
    overlegLink: "Get in touch",
    beschikbaarheid:
      "We check whether that slot is free and come back to you as soon as we can.",
    onderMinimum: "R@venHack is played from 5 participants. The base price stays the same.",

    calculator: {
      kicker: "What it costs",
      kop: "Calculate the price",
      spel: "Which game",
      taal: "Language of the session",
      deelnemers: "Number of participants",
      datum: "Preferred date",
      tijd: "Preferred start time",
      kortingscode: "Discount code",
      kortingscodeControleer: "Check",
      kortingscodeGeldig: "Code valid:",
      kortingscodeOngeldig: "We don't know this code, or it has expired. You can carry on.",
      exclBtw: "excl. VAT",
      inclBtw: "= {bedrag} incl. 21% VAT",
      naarFormulier: "Book now",
      terug: "← Back to the price",
      datumNodig:
        "Please choose a preferred date and time first. We need those to be able to schedule your request.",
      opbouw: {
        basis: "Base price {variant} (up to {inbegrepen} participants)",
        extra: "Extra participants: {aantal} × {prijs}",
        toeslag: "Evening or weekend surcharge 20%",
        korting: "Discount {code} ({percentage}%)",
        totaal: "Total excl. VAT",
      },
    },
    formulier: {
      nogNiet: "The form isn't set up yet.",
      samenvatting: "This is what we send along",
    },
    voorwaarden: [
      "We check availability and come back to you as soon as we can.",
      "The quote and the invoice cover the participants booked.",
      "You can cancel up to 5 working days before the session. After that we charge 50%.",
      "All amounts are excluding 21 per cent VAT.",
    ],
  },
} as const;

/** Waar 'even overleggen' heen wijst, per taal van de site. */
export const ADVIES_LINK = { nl: "/nl/expert-advies", en: "/en/expert-advice" };

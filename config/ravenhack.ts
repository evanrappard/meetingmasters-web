/**
 * Alle regels, prijzen en teksten van de R@venHack-modules op één plek.
 *
 * Verandert er een prijs, een grens of een tekst, dan gebeurt dat hier en
 * nergens anders. De rekenregels zelf staan in lib/ravenhack/prijs.ts.
 */

/*
 * LET OP — de boekingstool loopt nog niet gelijk met de site.
 *
 * Sinds 28 augustus 2026 is de claim op de site "5 tot 75 mensen", met een zin
 * dat het ook met grotere groepen kan na overleg. Hieronder staat de
 * Experience nog op 5 – 150. Dat is bewust zo gelaten: Emilie wilde de tool
 * niet in dezelfde ronde omgooien. Bij het finetunen van de tool nog te
 * bepalen: gaat maxDeelnemers naar 75 (en dan verwijst alles daarboven naar
 * een gesprek), of blijft 150 staan met 75 als grens waarboven we eerst
 * overleggen? Ook de ondertitel en de FAQ hangen daaraan.
 */

export type VariantSleutel = "experience" | "quick";
export type SpelTaal = "nl" | "en";

export const VARIANTEN = {
  experience: {
    naam: { nl: "R@venHack Experience", en: "R@venHack Experience" },
    ondertitel: {
      nl: "Teamspel | 5 – 150 deelnemers | 90 min",
      en: "Team game | 5 – 150 participants | 90 min",
    },
    duurMinuten: 90,
    basisprijs: 675,
    inbegrepenDeelnemers: 12,
    prijsPerExtraDeelnemer: 25,
    minDeelnemers: 5,
    maxDeelnemers: 150,
    /** Vanaf hier tonen we de prijs nog wél, met de vraag om even te overleggen. */
    overlegVanaf: 100 as number | null,
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
 * De HubSpot meetings-link met 60 en 90 minuten erin. Leeg zolang die niet in
 * HubSpot is aangemaakt; de module toont dan een nette melding in plaats van
 * een leeg vlak.
 */
export const MEETINGS_EMBED = "";

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
    toeslagregel:
      "Sessies die om 19:00 of later starten en sessies in het weekend zijn mogelijk op aanvraag, met een toeslag van 20 procent.",
    quickTeGroot:
      "Met meer dan 30 deelnemers speelt u R@venHack Experience. Dat spel is gebouwd op grotere groepen.",
    quickOmzetten: "Bereken als Experience",
    overleg:
      "Laten we even overleggen, zodat de experience voor alle deelnemers zo goed mogelijk is.",
    overlegLink: "Plan een gesprek",
    onderMinimum: "R@venHack speelt u vanaf 5 deelnemers. De basisprijs blijft gelijk.",
    zonderToestemming: "De agenda laadt pas nadat u marketingcookies heeft geaccepteerd.",
    zonderToestemmingKnop: "Cookies accepteren",

    beschikbaarheid: {
      kicker: "Beschikbaarheid",
      kop: "Kijk wanneer er ruimte is",
      onder:
        "Hieronder ziet u onze open momenten. U kunt er meteen een reserveren; wij bevestigen daarna de details.",
      nogNiet:
        "De agenda staat nog niet ingesteld. Neem gerust contact op, dan plannen we het samen in.",
      naarCalculator: "Bereken je prijs",
      naarFormulier: "Boek nu",
    },
    calculator: {
      kicker: "Wat kost het",
      kop: "Stel uw sessie samen",
      onder: "De prijs beweegt mee terwijl u kiest. U zit nergens aan vast.",
      spel: "Welk spel",
      taal: "Taal van de sessie",
      deelnemers: "Aantal deelnemers",
      datum: "Gewenste datum",
      tijd: "Gewenste starttijd",
      datumOptioneel: "Optioneel — vult u het in, dan rekenen we een eventuele toeslag mee.",
      kortingscode: "Kortingscode",
      kortingscodeControleer: "Controleer",
      kortingscodeGeldig: "Code geldig:",
      kortingscodeOngeldig: "Deze code kennen we niet, of hij is verlopen. U kunt gewoon verder.",
      exclBtw: "excl. btw",
      inclBtw: "= {bedrag} incl. 21% btw",
      naarFormulier: "Boek nu",
      opbouw: {
        basis: "Basisprijs {variant} (t/m {inbegrepen} deelnemers)",
        extra: "Extra deelnemers: {aantal} × {prijs}",
        toeslag: "Toeslag avond of weekend 20%",
        korting: "Korting {code} ({percentage}%)",
        totaal: "Totaal excl. btw",
      },
    },
    formulier: {
      kicker: "Boeken",
      kop: "Vraag uw sessie aan",
      onder:
        "Uw keuzes hierboven gaan automatisch mee. We bevestigen binnen twee werkdagen; pas dan staat de boeking vast.",
      teGroot:
        "Bij deze groepsgrootte kijken we liever eerst even samen. Plan een gesprek, dan regelen we het van daaruit.",
      nogNiet: "Het formulier staat nog niet ingesteld.",
      samenvatting: "Dit sturen we mee",
    },
    voorwaarden: [
      "Betaling binnen 14 dagen na factuurdatum.",
      "Kosteloos annuleren tot 5 werkdagen voor de sessie; daarna brengen we 50 procent in rekening.",
      "Het geboekte aantal deelnemers is de basis voor de factuur; we rekenen niet na op opkomst.",
      "Alle bedragen zijn exclusief 21 procent btw.",
    ],
  },
  en: {
    disclaimer:
      "No rights can be derived from this overview. Your booking is confirmed once you receive our confirmation.",
    toeslagregel:
      "Sessions starting at 19:00 or later, and sessions at weekends, are available on request with a 20 per cent surcharge.",
    quickTeGroot:
      "With more than 30 participants you play R@venHack Experience, which is built for larger groups.",
    quickOmzetten: "Calculate as Experience",
    overleg: "Let's talk it through, so the experience works for everyone taking part.",
    overlegLink: "Book a conversation",
    onderMinimum: "R@venHack is played from 5 participants. The base price stays the same.",
    zonderToestemming: "The calendar loads once you accept marketing cookies.",
    zonderToestemmingKnop: "Accept cookies",

    beschikbaarheid: {
      kicker: "Availability",
      kop: "See when there is room",
      onder:
        "Below are our open slots. You can reserve one straight away; we confirm the details afterwards.",
      nogNiet:
        "The calendar isn't set up yet. Do get in touch and we'll plan it together.",
      naarCalculator: "Calculate your price",
      naarFormulier: "Book now",
    },
    calculator: {
      kicker: "What it costs",
      kop: "Put your session together",
      onder: "The price moves along as you choose. Nothing here commits you to anything.",
      spel: "Which game",
      taal: "Language of the session",
      deelnemers: "Number of participants",
      datum: "Preferred date",
      tijd: "Preferred start time",
      datumOptioneel: "Optional — fill it in and we'll include any surcharge.",
      kortingscode: "Discount code",
      kortingscodeControleer: "Check",
      kortingscodeGeldig: "Code valid:",
      kortingscodeOngeldig: "We don't know this code, or it has expired. You can carry on.",
      exclBtw: "excl. VAT",
      inclBtw: "= {bedrag} incl. 21% VAT",
      naarFormulier: "Book now",
      opbouw: {
        basis: "Base price {variant} (up to {inbegrepen} participants)",
        extra: "Extra participants: {aantal} × {prijs}",
        toeslag: "Evening or weekend surcharge 20%",
        korting: "Discount {code} ({percentage}%)",
        totaal: "Total excl. VAT",
      },
    },
    formulier: {
      kicker: "Booking",
      kop: "Request your session",
      onder:
        "Your choices above come along automatically. We confirm within two working days; only then is the booking fixed.",
      teGroot:
        "At this group size we'd rather talk it through first. Book a conversation and we'll take it from there.",
      nogNiet: "The form isn't set up yet.",
      samenvatting: "This is what we send along",
    },
    voorwaarden: [
      "Payment within 14 days of the invoice date.",
      "Free cancellation up to 5 working days before the session; after that we charge 50 per cent.",
      "The number of participants booked is the basis for the invoice; we don't recount on turnout.",
      "All amounts are excluding 21 per cent VAT.",
    ],
  },
} as const;

/** Waar 'even overleggen' heen wijst, per taal van de site. */
export const ADVIES_LINK = { nl: "/nl/expert-advies", en: "/en/expert-advice" };

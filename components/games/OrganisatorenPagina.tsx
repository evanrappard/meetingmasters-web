import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";
import VoorbereidingBlok from "@/components/games/VoorbereidingBlok";
import type { Taal } from "@/lib/talen";

/**
 * De pagina voor organisatoren van een R@venHack — de bedrijfskant. Naast de
 * deelnemerspagina, met dezelfde opbouw: hero met de hulpknop en het logo,
 * daarna blokken met beeld ernaast.
 *
 * Buiten het menu en buiten de sitemap: je komt hier via de link die we bij een
 * boeking meesturen. Zie `app/sitemap.ts` (NIET_INDEXEREN) en de `robots`-regel
 * in de paginametadata.
 *
 * De voorbeeldteksten staan als los tekstbestand in `public/downloads/`, per
 * taal. Bewust platte tekst en geen pdf: een organisator moet dit kunnen plakken
 * in een mail of een agenda-afspraak, niet lezen en overtypen.
 *
 * De beelden dragen `-v2` in hun naam. Dat is geen willekeur: Next stuurt
 * geoptimaliseerde beelden mee met een cache van dertig dagen, met het pad als
 * sleutel. Vervang je een beeld onder dezelfde naam, dan blijven browsers de
 * oude versie tonen — ook al staat de nieuwe allang op de server. Een nieuwe
 * naam is de enige zekere manier. Vervang je hier ooit een beeld, hernoem het
 * dan naar -v3.
 */

/** Lichtblauwgrijs, in de kleur van de beelden op deze pagina. */
const BLAUWGRIJS = "#E7EDF2";

/** De zeven teamkleuren. De namen verschillen per taal, de tinten niet. */
const TEAMTINTEN = ["#EEBE3D", "#5C9E5C", "#3E7CB1", "#C2453C", "#D96BA0", "#E2853B", "#7B5EA7"];

const TEKST = {
  nl: {
    hulp: "/nl/technologie/hulp",
    deelnemers: "/nl/games-tools/ravenhack/deelnemers",
    deelnemersLabel: "deelnemerspagina",
    heroAlt:
      "Een hand tikt op een zoekbalk met het adres van EscapeMasters, midden in een blauwe bol van netwerklijnen",
    titel1: "Samen de Escaperoom R@venHack spelen?",
    titel2: "Richtlijnen voor organisatoren.",
    hulpKnop: "Technische problemen tijdens het spel? Check de helpdesk",
    intro:
      "Je organiseert voor je team de online escaperoom R@venHack. Geen standaard videogesprek, maar een interactieve missie vol verborgen aanwijzingen en leermomenten over cyberveilig gedrag. Om dat tot een succes te maken, is goede voorbereiding essentieel. Op deze pagina vind je alles wat je nodig hebt om deelnemers goed voorbereid aan de start te krijgen.",

    teamsAlt: "Vijf silhouetten tegen een achtergrond van binaire code en een verlichte skyline",
    teamsKop: "Je speelt in teams: start nu al met de indeling",
    teams1:
      "R@venHack speel je in teams van maximaal negen deelnemers. Speel je met meer mensen? Verdeel de groep dan vooraf over meerdere teams.",
    teams2:
      "Geef ieder team een eigen kleur. Zorg dat iedere deelnemer vóór het spel weet bij welke kleur die hoort. Dat hebben ze direct bij de start nodig.",
    kleuren: ["Geel", "Groen", "Blauw", "Rood", "Roze", "Oranje", "Paars"],

    uitnodigingAlt:
      "Een donker kantoor met werkplekken, in het midden achterin een scherm met HELPDESK",
    uitnodigingKop: "De uitnodiging",
    uitnodigingIntro: "Stuur alle spelers vooraf een uitnodiging met daarin in ieder geval:",
    uitnodigingPunten: ["de datum en starttijd", "de kleur van hun team", "de aankondiging van R@venHack"],
    uitnodigingLaatstePunt: "de link naar de ",
    uitnodigingKnop: "Download de voorbeeld­uitnodiging",
    uitnodigingBestand: "/downloads/ravenhack-voorbeeld-uitnodiging.txt",

    agendaAlt: "Een staande schaduwfiguur voor een wand vol beeldschermen in rood, paars en blauw",
    agendaKop: "Zet ’m in ieders agenda",
    agendaIntro:
      "Stuur daarnaast een agenda-uitnodiging naar alle deelnemers. Zo staat niet alleen het tijdstip vast, maar hebben deelnemers op het moment zelf ook alle informatie bij de hand. Zet in de afspraak:",
    agendaVoor: ["de link naar R@venHack", "kom op tijd", "het overzicht van de teams en kleuren"],
    agendaLinkPunt: "de link naar de ",
    agendaNa: "de korte technische instructie hieronder",
    agendaInstructie:
      "Kom op je eigen laptop en klik op de meetinglink. Vul je naam in en een korte omschrijving. Geef toestemming voor cookies en voor het gebruik van je camera en microfoon.",
    agendaKnop: "Download de voorbeeld­agendatekst",
    agendaBestand: "/downloads/ravenhack-voorbeeld-agendatekst.txt",

    vragenKop: "Vragen?",
    vragen1:
      "Twijfel je over de teamindeling, de uitnodiging of iets anders in de voorbereiding? Neem vooral contact met ons op. Mail naar ",
    vragen2: ". Heeft het haast? Bel ons dan op ",
    tipsKop: "Nog eenmaal de technische tips voor de beste voorbereiding",
  },
  en: {
    hulp: "/en/help",
    deelnemers: "/en/games-tools/ravenhack/participants",
    deelnemersLabel: "participants page",
    heroAlt:
      "A hand taps a search bar with the EscapeMasters address, inside a blue globe of network lines",
    titel1: "Playing the R@venHack escape room?",
    titel2: "Guidelines for organisers.",
    hulpKnop: "Technical problems during the game? Check the helpdesk",
    intro:
      "You are organising the online escape room R@venHack for your team. Not a standard video call, but an interactive mission full of hidden clues and lessons in safe digital behaviour. To make it a success, good preparation is essential. On this page you will find everything you need to get your people to the start well prepared.",

    teamsAlt: "Five silhouettes against a backdrop of binary code and a lit-up skyline",
    teamsKop: "You play in teams: start on the line-up now",
    teams1:
      "R@venHack is played in teams of up to nine people. Playing with more? Then divide the group into several teams beforehand.",
    teams2:
      "Give every team its own colour. Make sure each participant knows their colour before the game starts. They need it right away.",
    kleuren: ["Yellow", "Green", "Blue", "Red", "Pink", "Orange", "Purple"],

    uitnodigingAlt:
      "A dark office with workstations, and a screen reading HELPDESK in the middle at the back",
    uitnodigingKop: "The invitation",
    uitnodigingIntro: "Send every player an invitation beforehand, containing at least:",
    uitnodigingPunten: ["the date and start time", "the colour of their team", "the announcement of R@venHack"],
    uitnodigingLaatstePunt: "the link to the ",
    uitnodigingKnop: "Download the example invitation",
    uitnodigingBestand: "/downloads/ravenhack-example-invitation.txt",

    agendaAlt: "A standing silhouette in front of a wall of screens in red, purple and blue",
    agendaKop: "Put it in everyone’s calendar",
    agendaIntro:
      "Send a calendar invitation to all participants as well. That way the time is fixed, and everyone has the information at hand when the moment comes. Put in the appointment:",
    agendaVoor: ["the link to R@venHack", "be on time", "the overview of teams and colours"],
    agendaLinkPunt: "the link to the ",
    agendaNa: "the short technical instruction below",
    agendaInstructie:
      "Join on your own laptop and click the meeting link. Enter your name and a short description. Give permission for cookies and for the use of your camera and microphone.",
    agendaKnop: "Download the example calendar text",
    agendaBestand: "/downloads/ravenhack-example-calendar-text.txt",

    vragenKop: "Questions?",
    vragen1:
      "Not sure about the team line-up, the invitation or anything else in the preparation? Do get in touch. Email ",
    vragen2: ". In a hurry? Then call us on ",
    tipsKop: "Once more, the technical tips for the best preparation",
  },
} as const;

/** Eén opsommingsteken, in dezelfde stijl als op de deelnemerspagina. */
function Punt({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden>·</span>
      <span>{children}</span>
    </li>
  );
}

/**
 * Het beeld naast een tekstblok. Twee dingen doet dit anders dan een gewoon
 * `<Image>`:
 *
 * - het vult de hoogte van de rij, dus het beeld is precies zo hoog als de
 *   tekst ernaast — geen los blok dat boven of onder de tekst uitsteekt;
 * - het snijdt bij met `object-cover` en rekt dus nooit op. Wat je ziet is een
 *   uitsnede van de aangeleverde foto, niet een samengeduwde versie.
 *
 * Op een telefoon staat het beeld boven de tekst. Daar krijgt elk beeld zijn
 * eigen verhouding mee (`mobiel`): een liggende foto in een liggend kader, de
 * staande schaduwfiguur in een staand kader. Eén vaste hoogte voor alle drie
 * maakte van die staande figuur een reepje.
 */
function BeeldKolom({
  src,
  alt,
  positie = "center",
  mobiel = "aspect-[16/9]",
  className = "",
}: {
  src: string;
  alt: string;
  /** Welk deel van de foto in beeld blijft bij het bijsnijden. */
  positie?: string;
  /** De verhouding van het kader op een telefoon. */
  mobiel?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${mobiel} lg:aspect-auto lg:h-auto lg:min-h-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: positie }}
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
    </div>
  );
}

/** De knop onder een blok, met het bestand dat je meekrijgt. */
function DownloadKnop({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      download
      className="inline-block mt-7 bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 sm:px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
    >
      {children}
    </a>
  );
}

export default function OrganisatorenPagina({ taal = "nl" }: { taal?: Taal }) {
  const t = TEKST[taal === "en" ? "en" : "nl"];

  const DeelnemersLink = () => (
    <Link href={t.deelnemers} className="text-[#28A8AA] font-semibold hover:underline">
      {t.deelnemersLabel}
    </Link>
  );

  return (
    <div className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────────────
          De tekst staat onderin de band, niet in het midden: de zoekbalk zit
          op halve hoogte in de foto en de kop zou er anders pal bovenop
          vallen. Zie docs/website-visuals.md. */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0B1622" }}>
        {/* De foto staat bovenaan op ware verhouding; de tekst begint eronder,
            gemeten in procenten van de bréédte. Daardoor klopt het op elke
            schermbreedte en in elke taal: hoe de kop ook afbreekt, hij komt
            nooit tegen de zoekbalk aan. Loopt de tekst een keer langer door,
            dan groeit de sectie mee en zie je onderin de donkere ondergrond.

            Twee uitsnedes van dezelfde foto. De brede band werkt niet op een
            telefoon: daar wordt een 2,67:1-beeld zo hard bijgesneden dat de
            zoekbalk aan beide kanten wegvalt. Vandaar een staande uitsnede voor
            smalle schermen, waarin de hele balk, de bol en de klikkende hand
            passen. */}
        <div className="absolute inset-x-0 top-0 aspect-[1460/1670] md:hidden">
          <HeroBeeld
            src="/images/organisatoren-hero-mobiel-v2.webp"
            alt={t.heroAlt}
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-x-0 top-0 aspect-[2560/959] hidden md:block">
          <HeroBeeld
            src="/images/organisatoren-hero-v2.webp"
            alt=""
            aria-hidden
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />

        <div className="relative max-w-content mx-auto px-5 sm:px-6 lg:px-10 text-center pt-[52%] md:pt-[20%] pb-8 sm:pb-10 md:pb-12">
          <h1
            className="text-[1.55rem] leading-[1.2] sm:text-[1.9rem] md:text-[2.05rem] lg:text-[2.45rem] xl:text-[2.9rem] sm:leading-[1.15] font-bold text-white"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}
          >
            {t.titel1}
            <br />
            {t.titel2}
          </h1>

          <Link
            href={t.hulp}
            className="inline-block max-w-full mt-5 sm:mt-7 border border-white/80 bg-white/10 backdrop-blur-[2px] text-white text-[12px] sm:text-sm font-bold tracking-wide sm:tracking-widest uppercase leading-snug px-4 py-3 sm:px-7 sm:py-4 hover:bg-white hover:text-[#2D2D2D] transition-colors"
          >
            {t.hulpKnop}
          </Link>

          <div className="mt-5 sm:mt-8 flex justify-center">
            <Image
              src="/images/logos/escape-masters-wit.webp"
              alt="EscapeMasters"
              width={230}
              height={82}
              className="h-10 sm:h-14 w-auto opacity-95"
            />
          </div>
        </div>
      </section>

      {/* ── WAAR JE AAN TOE BENT ─────────────────────────────────────
          Lichtblauwgrijs vlak, één kolom: dit is de aanhef van de pagina. */}
      <section className="py-12 md:py-18" style={{ backgroundColor: BLAUWGRIJS }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="max-w-[820px] mx-auto text-center text-[#2D2D2D] text-base sm:text-xl leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      {/* ── TEAMS ───────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-14 items-stretch lg:min-h-[340px]">
            <BeeldKolom
              src="/images/organisatoren-teams-v2.webp"
              alt={t.teamsAlt}
              positie="center 38%"
              mobiel="aspect-[16/9]"
            />

            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-[1.45rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-5 sm:mb-6">
                {t.teamsKop}
              </h2>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
                {t.teams1}
              </p>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-6 sm:mb-7">
                {t.teams2}
              </p>

              {/* De zeven kleuren als stipjes: sneller te overzien dan een
                  opsomming, en je ziet meteen dat het er zeven zijn. */}
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {t.kleuren.map((naam, i) => (
                  <li key={naam} className="flex items-center gap-2 text-[#2D2D2D] text-base">
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: TEAMTINTEN[i] }}
                      aria-hidden
                    />
                    {naam}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DE UITNODIGING ──────────────────────────────────────────── */}
      <section className="py-12 md:py-20" style={{ backgroundColor: BLAUWGRIJS }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-14 items-stretch">
            <div className="order-2 lg:order-1">
              <h2 className="text-[1.45rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-5 sm:mb-6">
                {t.uitnodigingKop}
              </h2>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
                {t.uitnodigingIntro}
              </p>
              <ul className="space-y-3 text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
                {t.uitnodigingPunten.map((punt) => (
                  <Punt key={punt}>{punt}</Punt>
                ))}
                <Punt>
                  {t.uitnodigingLaatstePunt}
                  <DeelnemersLink />
                </Punt>
              </ul>

              <DownloadKnop href={t.uitnodigingBestand}>{t.uitnodigingKnop}</DownloadKnop>
            </div>

            <BeeldKolom
              src="/images/organisatoren-uitnodiging-v2.webp"
              alt={t.uitnodigingAlt}
              /* Het bestand is al een liggende band uit de originele foto, op
                 ongeveer de vorm van dit kader. Er wordt hier dus nauwelijks
                 nog bijgesneden en niets uitgerekt. */
              positie="center center"
              mobiel="aspect-[2/1]"
              className="order-1 lg:order-2 lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* ── DE AGENDA-AFSPRAAK ──────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-14 items-stretch">
            <BeeldKolom
              src="/images/organisatoren-agenda-v2.webp"
              alt={t.agendaAlt}
              positie="center center"
              /* Staand kader op de telefoon, want dit is een staande figuur. */
              mobiel="aspect-[4/5]"
            />

            <div className="lg:col-span-2">
              <h2 className="text-[1.45rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-5 sm:mb-6">
                {t.agendaKop}
              </h2>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
                {t.agendaIntro}
              </p>
              <ul className="space-y-3 text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-6 sm:mb-7">
                {t.agendaVoor.map((punt) => (
                  <Punt key={punt}>{punt}</Punt>
                ))}
                <Punt>
                  {t.agendaLinkPunt}
                  <DeelnemersLink />
                </Punt>
                <Punt>{t.agendaNa}</Punt>
              </ul>

              {/* De instructie die deelnemers letterlijk in hun agenda moeten
                  terugvinden; daarom als apart kader en niet als lopende tekst. */}
              <div className="border-l-4 border-[#EEBE3D] bg-[#FFFBEE] px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-[#2D2D2D] text-base leading-relaxed">{t.agendaInstructie}</p>
              </div>

              <DownloadKnop href={t.agendaBestand}>{t.agendaKnop}</DownloadKnop>
            </div>
          </div>
        </div>
      </section>

      {/* ── VRAGEN ──────────────────────────────────────────────────
          Eén kolom, geen beeld: hier hoort niets meer af te leiden. */}
      <section className="py-12 md:py-18" style={{ backgroundColor: BLAUWGRIJS }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-[1.45rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-4 sm:mb-5">
              {t.vragenKop}
            </h2>
            <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
              {t.vragen1}
              {/* break-words: op een smal scherm past het adres anders niet. */}
              <a
                href="mailto:contact@meetingmasters.online"
                className="text-[#28A8AA] font-semibold hover:underline break-words"
              >
                contact@meetingmasters.online
              </a>
              {t.vragen2}
              <a
                href="tel:+31202390313"
                className="text-[#28A8AA] font-semibold hover:underline whitespace-nowrap"
              >
                +31 20 239 03 13
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── DE TECHNISCHE TIPS, NOG EEN KEER ────────────────────────
          Hetzelfde blok als op de deelnemerspagina, uit één bestand. */}
      <VoorbereidingBlok taal={taal} kopBoven={t.tipsKop} />
    </div>
  );
}

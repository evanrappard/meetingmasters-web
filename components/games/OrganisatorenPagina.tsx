import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";
import VoorbereidingBlok from "@/components/games/VoorbereidingBlok";

/**
 * De pagina voor organisatoren van een R@venHack — de bedrijfskant. Naast de
 * deelnemerspagina, met dezelfde opbouw: hero met de hulpknop en het logo,
 * daarna blokken met beeld ernaast.
 *
 * Buiten het menu en buiten de sitemap: je komt hier via de link die we bij een
 * boeking meesturen. Zie `app/sitemap.ts` (NIET_INDEXEREN) en de `robots`-regel
 * in de paginametadata.
 *
 * De twee voorbeeldteksten staan als los tekstbestand in `public/downloads/`.
 * Bewust plat tekst en geen pdf: een organisator moet dit kunnen plakken in een
 * mail of een agenda-afspraak, niet lezen en overtypen.
 */

/**
 * De beelden dragen `-v2` in hun naam. Dat is geen willekeur: Next stuurt
 * geoptimaliseerde beelden mee met een cache van dertig dagen, met het pad als
 * sleutel. Vervang je een beeld onder dezelfde naam, dan blijven browsers de
 * oude versie tonen — ook al staat de nieuwe allang op de server. Een nieuwe
 * naam is de enige zekere manier. Vervang je hier ooit een beeld, hernoem het
 * dan naar -v3.
 */

const HULP = "/nl/technologie/hulp";
const DEELNEMERS = "/nl/games-tools/ravenhack/deelnemers";

/** Lichtblauwgrijs, in de kleur van de beelden op deze pagina. */
const BLAUWGRIJS = "#E7EDF2";

const TEAMKLEUREN = [
  { naam: "Geel", hex: "#EEBE3D" },
  { naam: "Groen", hex: "#5C9E5C" },
  { naam: "Blauw", hex: "#3E7CB1" },
  { naam: "Rood", hex: "#C2453C" },
  { naam: "Roze", hex: "#D96BA0" },
  { naam: "Oranje", hex: "#E2853B" },
  { naam: "Paars", hex: "#7B5EA7" },
];

/** De verwijzing naar de deelnemerspagina; staat in twee opsommingen. */
function DeelnemersLink() {
  return (
    <Link href={DEELNEMERS} className="text-[#28A8AA] font-semibold hover:underline">
      deelnemerspagina
    </Link>
  );
}

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
 * Op een telefoon staat het beeld boven de tekst, in een vaste band.
 */
function BeeldKolom({
  src,
  alt,
  positie = "center",
  className = "",
}: {
  src: string;
  alt: string;
  /** Welk deel van de foto in beeld blijft bij het bijsnijden. */
  positie?: string;
  className?: string;
}) {
  return (
    <div className={`relative h-56 sm:h-72 lg:h-auto lg:min-h-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: positie }}
        sizes="(max-width: 1024px) 100vw, 33vw"
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
      className="inline-block mt-7 bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
    >
      {children}
    </a>
  );
}

export default function OrganisatorenPagina() {
  return (
    <div className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────────────
          Zelfde opzet als bij de deelnemers: gecentreerd, niet beeldvullend
          hoog, met de knop naar de hulp meteen in beeld. */}
      <section className="relative">
        <div className="relative w-full min-h-[500px] sm:min-h-[540px] md:h-[42vw] md:min-h-[520px] md:max-h-[600px]">
          <HeroBeeld
            src="/images/organisatoren-hero-v2.webp"
            alt="Een hand tikt op een zoekbalk met het adres van EscapeMasters, midden in een blauwe bol van netwerklijnen"
            fill
            className="object-cover"
            /* Het bestand is al uitgesneden op de vorm van deze band: de volle
               breedte van de foto, met de vingertop die klikt op 40% — net
               boven het midden. Hier hoeft dus niets meer verschoven te worden;
               wil je het anders, snijd dan het bestand anders uit. */
            style={{ objectPosition: "center center" }}
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/10" />

          <div className="absolute inset-0 flex items-end pb-8 sm:pb-10">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 text-center">
              <h1
                className="text-[1.7rem] leading-[1.15] sm:text-[2.3rem] lg:text-[2.9rem] sm:leading-[1.1] font-bold text-white text-balance"
                style={{ textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}
              >
                Samen de Escaperoom R@venHack spelen?
                <br />
                Richtlijnen voor organisatoren.
              </h1>

              <Link
                href={HULP}
                className="inline-block max-w-full mt-6 sm:mt-7 border border-white/80 bg-white/10 backdrop-blur-[2px] text-white text-[13px] sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase leading-snug px-5 py-3.5 sm:px-7 sm:py-4 hover:bg-white hover:text-[#2D2D2D] transition-colors"
              >
                Technische problemen tijdens het spel? Check de helpdesk
              </Link>

              <div className="mt-6 sm:mt-8 flex justify-center">
                <Image
                  src="/images/logos/escape-masters-wit.webp"
                  alt="EscapeMasters"
                  width={230}
                  height={82}
                  className="h-11 sm:h-14 w-auto opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAAR JE AAN TOE BENT ─────────────────────────────────────
          Lichtblauwgrijs vlak, één kolom: dit is de aanhef van de pagina. */}
      <section className="py-14 md:py-18" style={{ backgroundColor: BLAUWGRIJS }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="max-w-[820px] mx-auto text-center text-[#2D2D2D] text-lg sm:text-xl leading-relaxed">
            Je organiseert voor je team de online escaperoom R@venHack. Geen standaard
            videogesprek, maar een interactieve missie vol verborgen aanwijzingen en
            leermomenten over cyberveilig gedrag. Om dat tot een succes te maken, is goede
            voorbereiding essentieel. Op deze pagina vind je alles wat je nodig hebt om
            deelnemers goed voorbereid aan de start te krijgen.
          </p>
        </div>
      </section>

      {/* ── TEAMS ───────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-stretch lg:min-h-[340px]">
            <BeeldKolom
              src="/images/organisatoren-teams-v2.webp"
              alt="Vijf silhouetten tegen een achtergrond van binaire code en een verlichte skyline"
              positie="center 38%"
            />

            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-[1.6rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-6">
                Je speelt in teams: start nu al met de indeling
              </h2>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-5">
                R@venHack speel je in teams van maximaal negen deelnemers. Speel je met meer
                mensen? Verdeel de groep dan vooraf over meerdere teams.
              </p>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-7">
                Geef ieder team een eigen kleur. Zorg dat iedere deelnemer vóór het spel weet
                bij welke kleur die hoort. Dat hebben ze direct bij de start nodig.
              </p>

              {/* De zeven kleuren als stipjes: sneller te overzien dan een
                  opsomming, en je ziet meteen dat het er zeven zijn. */}
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {TEAMKLEUREN.map((kleur) => (
                  <li key={kleur.naam} className="flex items-center gap-2 text-[#2D2D2D] text-base">
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: kleur.hex }}
                      aria-hidden
                    />
                    {kleur.naam}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DE UITNODIGING ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: BLAUWGRIJS }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-stretch">
            <div className="order-2 lg:order-1">
              <h2 className="text-[1.6rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-6">
                De uitnodiging
              </h2>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-5">
                Stuur alle spelers vooraf een uitnodiging met daarin in ieder geval:
              </p>
              <ul className="space-y-3 text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
                <Punt>de datum en starttijd</Punt>
                <Punt>de kleur van hun team</Punt>
                <Punt>de aankondiging van R@venHack</Punt>
                <Punt>
                  de link naar de <DeelnemersLink />
                </Punt>
              </ul>

              <DownloadKnop href="/downloads/ravenhack-voorbeeld-uitnodiging.txt">
                Download de voorbeeld­uitnodiging
              </DownloadKnop>
            </div>

            <BeeldKolom
              src="/images/organisatoren-uitnodiging-v2.webp"
              alt="Een donker kantoor met werkplekken, in het midden achterin een scherm met HELPDESK"
              /* Het bestand is al een liggende band uit de originele foto, op
                 ongeveer de vorm van dit kader. Er wordt hier dus nauwelijks
                 nog bijgesneden en niets uitgerekt. */
              positie="center center"
              className="order-1 lg:order-2 lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* ── DE AGENDA-AFSPRAAK ──────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-stretch">
            <BeeldKolom
              src="/images/organisatoren-agenda-v2.webp"
              alt="Een staande schaduwfiguur voor een wand vol beeldschermen in rood, paars en blauw"
              positie="center center"
            />

            <div className="lg:col-span-2">
              <h2 className="text-[1.6rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-6">
                Zet &rsquo;m in ieders agenda
              </h2>
              <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-5">
                Stuur daarnaast een agenda-uitnodiging naar alle deelnemers. Zo staat niet
                alleen het tijdstip vast, maar hebben deelnemers op het moment zelf ook alle
                informatie bij de hand. Zet in de afspraak:
              </p>
              <ul className="space-y-3 text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-7">
                <Punt>de link naar R@venHack</Punt>
                <Punt>kom op tijd</Punt>
                <Punt>het overzicht van de teams en kleuren</Punt>
                <Punt>
                  de link naar de <DeelnemersLink />
                </Punt>
                <Punt>de korte technische instructie hieronder</Punt>
              </ul>

              {/* De instructie die deelnemers letterlijk in hun agenda moeten
                  terugvinden; daarom als apart kader en niet als lopende tekst. */}
              <div className="border-l-4 border-[#EEBE3D] bg-[#FFFBEE] px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-[#2D2D2D] text-base leading-relaxed">
                  Kom op je eigen laptop en klik op de meetinglink. Vul je naam in en een korte
                  omschrijving. Geef toestemming voor cookies en voor het gebruik van je camera
                  en microfoon.
                </p>
              </div>

              <DownloadKnop href="/downloads/ravenhack-voorbeeld-agendatekst.txt">
                Download de voorbeeld­agendatekst
              </DownloadKnop>
            </div>
          </div>
        </div>
      </section>

      {/* ── VRAGEN ──────────────────────────────────────────────────
          Eén kolom, geen beeld: hier hoort niets meer af te leiden. */}
      <section className="py-14 md:py-18" style={{ backgroundColor: BLAUWGRIJS }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-[1.6rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-5">Vragen?</h2>
            <p className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
              Twijfel je over de teamindeling, de uitnodiging of iets anders in de
              voorbereiding? Neem vooral contact met ons op. Mail naar{" "}
              <a
                href="mailto:contact@meetingmasters.online"
                className="text-[#28A8AA] font-semibold hover:underline"
              >
                contact@meetingmasters.online
              </a>
              . Heeft het haast? Bel ons dan op{" "}
              <a href="tel:+31202390313" className="text-[#28A8AA] font-semibold hover:underline">
                +31 20 239 03 13
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── DE TECHNISCHE TIPS, NOG EEN KEER ────────────────────────
          Hetzelfde blok als op de deelnemerspagina, uit één bestand. */}
      <VoorbereidingBlok
        taal="nl"
        kopBoven="Nog eenmaal de technische tips voor de beste voorbereiding"
      />
    </div>
  );
}

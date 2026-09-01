import Image from "next/image";
import HeroBeeld from "@/components/ui/HeroBeeld";
import type { Taal } from "@/lib/talen";

/**
 * "1klik" — de losse pagina over digitaal gezond verstand. Nagebouwd van de
 * oude Squarespace-pagina.
 *
 * Net als de deelnemerspagina staat deze buiten het menu en buiten de sitemap:
 * hij gaat mee in een uitnodiging of een nazending bij een spel. Zie
 * `app/sitemap.ts` (NIET_INDEXEREN) en de `robots`-regel in de metadata.
 *
 * Wat afwijkt van de oude pagina:
 * - Het slotbeeld bestond alleen in het Engels mét de rode cirkel, de pijl en
 *   de WORD-blokjes. Voor de Nederlandse pagina zijn die aantekeningen op de
 *   Nederlandse scène gezet; hoe dat is gegaan staat in docs/website-visuals.md.
 * - De teksten staan een maat groter dan op Squarespace. Daar stond de
 *   opsomming op 14px, en dit is een pagina die mensen scannen.
 */

/** Crème van de oude pagina, met de pipet nagemeten. */
const CREME = "#F4F1E7";

/** Zelfde nachtblauw als op de deelnemerspagina; komt uit de beelden zelf. */
const NACHTBLAUW = "#0A1E33";

const TEKST = {
  nl: {
    heroAlt:
      "Iemand werkt aan een laptop; op het scherm een blauw slot tussen regels binaire code",
    titel: "Druk nooit zomaar op een link",
    onder: "7 regels voor digitaal gezond verstand",
    badge: "Speel het spel slim",
    kop: "De meeste digitale aanvallen beginnen met één klik.",
    alinea1:
      "Een ogenschijnlijk onschuldige e-mail of sms leidt naar een schadelijke website of opent de deur voor malware. Criminelen maken slim gebruik van drukte, routine en vertrouwen. Juist daarom is digitale veiligheid ieders verantwoordelijkheid — of je nu in de frontlinie werkt of achter de schermen.",
    alinea2:
      "Goede cybersecurity begint met bewust gedrag. Techniek helpt, maar het zijn de dagelijkse keuzes van medewerkers die bepalen hoe kwetsbaar of weerbaar een organisatie is. Alert blijven op verdachte signalen, zorgvuldig omgaan met informatie en elkaar aanspreken op veilig werken: het zijn kleine handelingen met grote impact.",
    vpnAlt:
      "Een hand houdt een telefoon vast waarop een vpn-verbinding aanstaat, met een laptop op de achtergrond",
    regelsKop: "Basisregels voor veilig digitaal gedrag:",
    regels: [
      "Klik alleen op links van betrouwbare bronnen",
      "Controleer altijd het e-mailadres van de afzender",
      "Gebruik sterke en unieke wachtwoorden",
      "Zet waar mogelijk tweefactorauthenticatie aan",
      "Installeer updates zodra ze beschikbaar zijn",
      "Verstuur geen gevoelige informatie via onbeveiligde kanalen",
      "Meld verdachte berichten of situaties direct bij IT of security",
    ],
    scene: "/images/1klik-scene.webp",
    sceneAlt:
      "Een werkplek met een phishingmail op het scherm, een pop-up met SYSTEM LOCKDOWN en drie ordners ernaast",
    slotVet: "Cyberveiligheid begint met doorkijken, niet doorklikken.",
    slot: "De aanval zit al in het systeem. Graaf dieper.",
  },
  en: {
    heroAlt:
      "Someone working on a laptop; on the screen a blue padlock among lines of binary code",
    titel: "Never just click a link",
    onder: "7 rules for digital common sense",
    badge: "Play the game smart",
    kop: "Most digital attacks begin with a single click.",
    alinea1:
      "A seemingly harmless email or text message leads to a malicious website, or opens the door to malware. Criminals make clever use of busyness, routine and trust. Which is exactly why digital safety is everyone's responsibility — whether you work on the front line or behind the scenes.",
    alinea2:
      "Good cybersecurity starts with conscious behaviour. Technology helps, but it is the daily choices of the people in an organisation that decide how vulnerable or how resilient it is. Staying alert to suspicious signals, handling information carefully and speaking up about safe working: small acts with a large effect.",
    vpnAlt:
      "A hand holding a phone with a vpn connection switched on, a laptop in the background",
    regelsKop: "Ground rules for safe digital behaviour:",
    regels: [
      "Only click links from sources you trust",
      "Always check the sender's email address",
      "Use strong and unique passwords",
      "Switch on two-factor authentication wherever you can",
      "Install updates as soon as they are available",
      "Never send sensitive information through unsecured channels",
      "Report suspicious messages or situations to IT or security straight away",
    ],
    scene: "/images/1klik-scene-en.webp",
    sceneAlt:
      "A workplace with a phishing email on screen, a SYSTEM LOCKDOWN pop-up and three binders beside it",
    slotVet: "Cyber safety starts with looking closely, not clicking through.",
    slot: "The attack is already in the system. Dig deeper.",
  },
} as const;

export default function EenKlikPagina({ taal = "nl" }: { taal?: Taal }) {
  const t = TEKST[taal === "en" ? "en" : "nl"];

  return (
    <div className="bg-white">
      {/* ── HERO ──────────────────────────────────────────────────────
          De foto heeft de laptop links en een rustige, onscherpe rechterhelft.
          Daar staat de tekst, met een donker verloop eronder zodat wit leesbaar
          blijft zonder de foto te verdonkeren. */}
      <section className="relative">
        <div className="relative w-full min-h-[440px] sm:min-h-[480px] md:h-[40vw] md:min-h-[420px] md:max-h-[560px]">
          <HeroBeeld
            src="/images/1klik-hero.webp"
            alt={t.heroAlt}
            fill
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
          {/* Op een telefoon staat de tekst ónder het midden; dan valt hij op
              de rustige onderrand en niet over het laptopscherm. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 md:hidden" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10">
              {/* Smal, gecentreerd en tegen de rechterkant — de vlakverdeling
                  van de oude pagina. Daar staat de kop niet links uitgelijnd
                  maar gecentreerd, met het midden op ~74% van de breedte, zodat
                  alles in het donkere deel van de foto valt. */}
              <div className="md:ml-auto md:w-[46%] md:max-w-[480px] text-center">
                <h1
                  className="text-[2rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.08] font-bold text-white mb-4 sm:mb-5 text-balance"
                  style={{ textShadow: "0 2px 18px rgba(0,0,0,0.65)" }}
                >
                  {t.titel}
                </h1>
                <p
                  className="text-white text-base sm:text-xl leading-relaxed mb-7 sm:mb-9"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
                >
                  {t.onder}
                </p>

                {/* Het witte blokje met "speel het spel slim" en het logo, zoals
                    op de oude pagina. */}
                <div className="inline-flex items-center gap-4 sm:gap-5 bg-white pl-5 pr-4 py-3 sm:pl-7 sm:pr-5 sm:py-4">
                  <span className="text-[#2D2D2D] text-xs sm:text-[13px] font-bold tracking-widest uppercase">
                    {t.badge}
                  </span>
                  <Image
                    src="/images/logos/escape-masters.webp"
                    alt="EscapeMasters"
                    width={230}
                    height={82}
                    className="h-9 sm:h-11 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAAROM DIT ERTOE DOET ────────────────────────────────────
          Kop links, uitleg rechts, zoals op de oude pagina. */}
      <section className="py-14 md:py-20" style={{ backgroundColor: CREME }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <h2 className="text-[1.9rem] sm:text-4xl lg:text-[2.7rem] font-normal text-[#2D2D2D] leading-[1.15] text-balance">
              {t.kop}
            </h2>
            <div className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
              <p className="mb-6">{t.alinea1}</p>
              <p>{t.alinea2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DE BASISREGELS ────────────────────────────────────────────
          De zeven regels staan dichter op elkaar dan de rest van de pagina, en
          de sectie heeft minder lucht boven en onder. Zo is het tekstblok
          ongeveer even hoog als het beeld ernaast en staan ze samen als één
          geheel, in plaats van een korte lijst naast een groot beeld. */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Image
              src="/images/1klik-vpn.webp"
              alt={t.vpnAlt}
              width={1800}
              height={1013}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div>
              <h2 className="text-xl sm:text-2xl text-[#2D2D2D] leading-snug mb-5 sm:mb-6">
                {t.regelsKop}
              </h2>
              <ol className="space-y-2 sm:space-y-2.5 text-[#2D2D2D] text-base sm:text-lg leading-snug">
                {t.regels.map((regel, i) => (
                  <li key={regel} className="flex gap-3">
                    <span className="tabular-nums" aria-hidden>
                      {i + 1}.
                    </span>
                    <span>{regel}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRAAF DIEPER ─────────────────────────────────────────────
          De scène staat er in haar geheel: er valt iets te zoeken in dat beeld
          (de rode cirkel, de pijl, de WORD-blokjes, het toetsenbord), dus er
          mag niets af. Het beeld is daarom niet bijgesneden maar op ware
          verhouding, en de sectie is precies zo hoog als het beeld.

          De kop stond eerst óver het beeldscherm en was daar slecht leesbaar.
          Nu staat hij in de donkere strook bóven het scherm, met ruimte eronder.
          Op een telefoon is die strook te smal voor twee regels tekst; daar
          staat de kop boven het beeld, op de achtergrond van de sectie. */}
      <section style={{ backgroundColor: NACHTBLAUW }}>
        {/* Telefoon: kop boven het beeld. */}
        <div className="md:hidden max-w-content mx-auto px-6 pt-10 pb-6">
          <p className="text-white text-lg font-bold leading-snug text-balance">{t.slotVet}</p>
          <p className="text-white/85 text-base leading-snug mt-1.5">{t.slot}</p>
        </div>

        <div className="relative">
          <Image
            src={t.scene}
            alt={t.sceneAlt}
            width={2560}
            height={1440}
            className="w-full h-auto"
            quality={75}
            sizes="100vw"
          />

          {/* Breed scherm: kop in de donkere strook boven het beeldscherm. */}
          <div className="hidden md:block absolute inset-x-0 top-0">
            <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black/75 via-black/45 to-transparent" />
            <div className="relative max-w-content mx-auto px-6 lg:px-10 pt-5 lg:pt-7">
              <p
                className="text-white text-xl lg:text-2xl font-bold leading-snug text-balance"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
              >
                {t.slotVet}
              </p>
              <p
                className="text-white text-lg lg:text-xl leading-snug mt-1"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
              >
                {t.slot}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

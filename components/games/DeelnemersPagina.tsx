import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";
import VoorbereidingBlok from "@/components/games/VoorbereidingBlok";
import type { Taal } from "@/lib/talen";

/**
 * De pagina die deelnemers vóór een R@venHack te zien krijgen. Nagebouwd van de
 * oude Squarespace-pagina, met dezelfde teksten en dezelfde opbouw.
 *
 * Deze pagina staat bewust niet in het menu en niet in de sitemap: je komt hier
 * via de link in de uitnodiging, vlak voor het spel. Zie `app/sitemap.ts`
 * (NIET_INDEXEREN) en de `robots`-regel in de paginametadata.
 *
 * Twee dingen zijn anders dan op Squarespace:
 * - Het EscapeMasters-logo stond ingebakken in de hero-foto, in een verwassen
 *   grijs. Nu ligt het er als los beeld overheen, in de goede versie met witte
 *   letters, en gebruiken we de schone foto zonder logo.
 * - De FAQ-links wijzen naar onze eigen technische hulppagina in plaats van
 *   naar de oude Squarespace-FAQ.
 *
 * Eén ding over de tekstgrootte: dit is geen wervende pagina maar een
 * instructie, vlak voor een spel, vaak vluchtig gelezen. De teksten staan
 * daarom een maat groter dan op de oude pagina.
 */

/**
 * Het nachtblauw van de sectie "Dit is geen gewone escape" komt uit de beelden
 * zelf: de donkere tinten in de hero zitten rond rgb(13, 44, 72). Deze is een
 * slag donkerder, zodat het spelbeeld — dat een zwarte achtergrond heeft — er
 * niet als een los blok op ligt.
 */
const NACHTBLAUW = "#0A1E33";

const TEKST = {
  nl: {
    hulp: "/nl/technologie/hulp",
    heroAlt:
      "Silhouetten van vijf mensen tegen een achtergrond van binaire code en een verlichte skyline",
    titel: "Zodra het startsein klinkt, tikt de klok.",
    onder: "Zo bereid je je voor op je online escape…",
    knop: "Technische problemen tijdens het spel? Check de FAQ",
    intro:
      "Je doet binnenkort mee aan een online escape room van EscapeMasters. Geen standaard videogesprek, maar een interactieve missie vol verborgen aanwijzingen, keuzes onder tijdsdruk en teamwork. Om goed mee te kunnen doen, is voorbereiding essentieel.",
    spelAlt:
      "Beeld uit het spel: de High Security Zone met de R@VEN-bol en de deelnemers eromheen",
    kicker: "Dit is geen gewone escape…",
    kop: "Vanaf het moment van binnenkomst tot de afsluitende borrel in de virtuele bar: dit is geen doorsnee online sessie. Dit is een beleving.",
    alinea1:
      "Je speelt in een volledig interactieve omgeving. Je beweegt je vrij rond. Je praat met wie dichtbij je staat. Je zoomt in op de kleinste details, zoekt aanwijzingen en overlegt alsof je fysiek samen bent.",
    alinea2:
      "Het spel wordt live begeleid door een EscapeMaster. Die helpt als je vastloopt, houdt het tempo erin en zorgt dat iedereen meedoet.",
  },
  en: {
    hulp: "/en/help",
    heroAlt:
      "Silhouettes of five people against a backdrop of binary code and a lit-up skyline",
    titel: "Once the starting signal sounds, the clock is ticking.",
    onder: "This is how you get ready for your online escape…",
    knop: "Technical problems during the game? Check the FAQ",
    intro:
      "You are about to take part in an online escape room by EscapeMasters. Not a standard video call, but an interactive mission full of hidden clues, choices under time pressure and teamwork. To join in properly, preparation is essential.",
    spelAlt:
      "A scene from the game: the High Security Zone with the R@VEN orb and the players around it",
    kicker: "This is no ordinary escape…",
    kop: "From the moment you walk in to the closing drinks in the virtual bar: this is no ordinary online session. This is an experience.",
    alinea1:
      "You play in a fully interactive environment. You move around freely. You talk to whoever is standing near you. You zoom in on the smallest details, look for clues and confer as if you were in the same room.",
    alinea2:
      "The game is hosted live by an EscapeMaster. They help you when you get stuck, keep up the pace and make sure everyone joins in.",
  },
} as const;

export default function DeelnemersPagina({ taal = "nl" }: { taal?: Taal }) {
  const t = TEKST[taal === "en" ? "en" : "nl"];

  return (
    <div className="bg-white">
      {/* ── HERO ────────────────────────────────────────────────────────
          Beeldvullend, tekst gecentreerd, maar bewust niet beeldvullend hoog:
          wie hier komt heeft over een paar minuten een spel en moet de knop
          naar de hulp meteen zien staan, zonder te scrollen. */}
      <section className="relative">
        <div className="relative w-full min-h-[430px] sm:min-h-[470px] md:h-[38vw] md:min-h-[400px] md:max-h-[520px]">
          <HeroBeeld
            src="/images/deelnemers-hero.webp"
            alt={t.heroAlt}
            fill
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            priority
            /* 75, niet 90: binaire code comprimeert slecht. Op 75 haalt de
               browser 202 kB binnen op een gewoon scherm, op 90 was dat 344 kB
               zonder zichtbaar verschil. `qualities` in next.config laat
               trouwens alleen 75 en 90 toe. */
            quality={75}
            sizes="100vw"
          />
          {/* Licht schermpje: de foto is bovenin bleek en de witte kop viel
              daar weg. Zo blijft de foto helder en de tekst leesbaar. */}
          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 text-center">
              <h1
                className="text-[1.7rem] leading-[1.15] sm:text-[2.4rem] lg:text-[3rem] sm:leading-[1.1] font-bold text-white mb-4 sm:mb-5 text-balance"
                style={{ textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}
              >
                {t.titel}
              </h1>
              <p
                className="text-white text-base sm:text-xl font-bold mb-7 sm:mb-8"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
              >
                {t.onder}
              </p>

              <Link
                href={t.hulp}
                className="inline-block max-w-full border border-white/80 bg-white/10 backdrop-blur-[2px] text-white text-[13px] sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase leading-snug px-5 py-3.5 sm:px-7 sm:py-4 hover:bg-white hover:text-[#2D2D2D] transition-colors"
              >
                {t.knop}
              </Link>

              <div className="mt-8 sm:mt-10 flex justify-center">
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

      {/* ── WAT JE TE WACHTEN STAAT ──────────────────────────────────
          Eigen sectie, in zwart. Dit is de aanhef onder de hero: één alinea,
          die alle ruimte krijgt. */}
      <section className="bg-black py-14 md:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="max-w-[820px] mx-auto text-center text-white text-lg sm:text-xl leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      {/* ── DIT IS GEEN GEWONE ESCAPE ────────────────────────────────
          Nachtblauw, zodat het zwart hierboven de aanhef blijft en dit blok er
          los van staat. De kleur komt uit de beelden zelf; zie NACHTBLAUW. */}
      <section className="py-14 md:py-20" style={{ backgroundColor: NACHTBLAUW }}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Bijgesneden uit ravenhack-hero.webp: op de oude pagina stond
                niet de hele brede schermafdruk, maar het vierkante stuk met de
                R@VEN-bol. */}
            <Image
              src="/images/deelnemers-spel.webp"
              alt={t.spelAlt}
              width={632}
              height={606}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div>
              <p className="text-white/70 text-base mb-5 sm:mb-6">{t.kicker}</p>
              <h2 className="text-[1.6rem] sm:text-3xl text-white leading-snug mb-6 sm:mb-7">
                {t.kop}
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-5">
                {t.alinea1}
              </p>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed">{t.alinea2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Het blok met de technische tips staat ook op de organisatorenpagina;
          daarom leeft het in één bestand. */}
      <VoorbereidingBlok taal={taal} />
    </div>
  );
}

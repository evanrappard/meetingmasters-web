import Image from "next/image";
import CTABlock from "@/components/ui/CTABlock";
import HeroBeeld from "@/components/ui/HeroBeeld";
import { ERVARINGEN } from "@/lib/ervaringen";
import type { Taal } from "@/lib/talen";

/**
 * De pagina met klantervaringen, in beide talen.
 *
 * Nagebouwd van de oude Squarespace-pagina (17 september 2026), die Emilie
 * mooier vond dan het platte lijstje dat de nieuwe site had: een hero zoals
 * op de andere pagina's, en daaronder twaalf kaarten in vier kolommen, elk met het logo in
 * een witte cirkel, de naam van de opdrachtgever en de volledige tekst. De
 * kaarten zijn licht beige, zodat elke ervaring een eigen vlak heeft zonder
 * dat de pagina zwaar wordt (zie [[mm-design-light-overlays]] in het
 * geheugen: licht houden).
 *
 * De teksten en logo's staan in `lib/ervaringen.ts`.
 */

const TEKST = {
  nl: {
    kicker: "Ervaringen",
    titel: "Wat klanten over ons zeggen",
    intro: "Van gemeente tot goed doel, van kliniek tot Olympiërs: dit is wat opdrachtgevers overhielden aan de samenwerking.",
    beeldAlt: "Vrouw achter haar laptop, lachend en met haar handen in de lucht tijdens een online gesprek",
    logoAlt: "Logo van %s",
  },
  en: {
    kicker: "Testimonials",
    titel: "What clients say",
    intro: "From municipalities to charities, from clinics to Olympians: this is what clients took away from working with us.",
    beeldAlt: "Woman at her laptop, smiling with her hands in the air during an online conversation",
    logoAlt: "Logo of %s",
  },
};

export default function ErvaringenOverzicht({ taal = "nl" }: { taal?: Taal }) {
  const t = TEKST[taal];
  return (
    <div className="bg-white">
      {/* ── HERO ──
          Dezelfde opzet als de andere pagina's (kop links onderin, lichte laag
          links), maar lager: 34vw in plaats van 44vw. Emilie vond de volle
          hoogte hier te zwaar; de ervaringen zelf zijn de pagina. */}
      <section>
        <div className="relative w-full overflow-hidden md:h-[34vw] md:min-h-[280px] md:max-h-[460px]">
          {/* De vrouw en haar laptop staan in het midden en onderin het beeld.
              De uitsnede zit daarom laag (80%): zo blijven haar gezicht én de
              laptop in beeld, met alleen een randje haar en de onderkant van
              de laptop eraf. Het vlak is iets hoger dan bij de vorige versie
              (34vw), anders past dat niet in de breedte van een hero. */}
          <div className="absolute inset-0">
            <HeroBeeld
              src="/images/ervaringen-hero-v3.webp"
              alt={t.beeldAlt}
              fill
              priority
              quality={90}
              className="object-cover object-[center_80%]"
              sizes="100vw"
            />
          </div>
          {/* Het beeld is licht; de laag links is er alleen voor de witte kop. */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-10 md:pt-0 md:pb-12">
              <div className="max-w-[520px]">
                <p
                  className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
                >
                  {t.kicker}
                </p>
                <h1
                  className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
                >
                  {t.titel}
                </h1>
                <p
                  className="text-white text-base sm:text-lg leading-relaxed"
                  style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}
                >
                  {t.intro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DE KAARTEN ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          {/* Bewust geen ul/li: `main li` krijgt in globals.css een leesbreedte
              mee, en dan lopen de kaarten niet meer gelijk op. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {ERVARINGEN.map((e) => {
              const naam = taal === "en" ? (e.bedrijfEn ?? e.bedrijf) : e.bedrijf;
              const quote = taal === "en" ? e.quoteEn : e.quote;
              return (
                <article
                  key={e.bedrijf}
                  className="flex flex-col items-center text-center rounded-2xl bg-[#F5F2EC] px-5 pt-7 pb-8"
                >
                  {/* Het logo in een witte cirkel, met ruimte eromheen zodat
                      geen enkel logo tegen de rand aan zit. */}
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white overflow-hidden mb-5 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                    <Image
                      src={e.logo}
                      alt={t.logoAlt.replace("%s", naam)}
                      fill
                      sizes="176px"
                      className="object-contain p-4"
                    />
                  </div>
                  <h2 className="font-bold text-[#2D2D2D] text-base leading-snug mb-3">
                    {naam}
                  </h2>
                  <p className="text-sm text-[#434343] leading-relaxed">
                    &lsquo;{quote}&rsquo;
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABlock taal={taal} />
    </div>
  );
}

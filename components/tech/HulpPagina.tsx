import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import TechHulp from "@/components/ui/TechHulp";
import { CATEGORIEEN, TOOLS, VRAGEN } from "@/app/nl/technologie/hulp/vragen";
import { CATEGORIEEN_EN, TOOLS_EN, VRAGEN_EN } from "@/app/nl/technologie/hulp/vragen-en";
import { HULP_EN } from "@/app/nl/technologie/hulp/tekst-en";
import { KLEUREN, HANDLEIDINGEN, ALGEMENE_FAQ, DEVICE_FAQ, SUPPORT_FAQ, IT_PLATFORMS, NL_TEKST } from "@/app/nl/technologie/hulp/data";
import type { Taal } from "@/lib/talen";
import HeroAchtergrond from "@/components/ui/HeroAchtergrond";

/**
 * De hulppagina, in beide talen. De kleuren, iconen en indeling zijn taalloos
 * en staan in data.ts; de Engelse teksten in tekst-en.ts en vragen-en.ts.
 *
 * Bij helpteksten letten we op één ding extra: de knoppen en menupaden die we
 * noemen moeten de échte labels van het platform zijn. Een letterlijk vertaalde
 * instructie stuurt een Engelse deelnemer naar een knop die niet bestaat.
 */

export default function HulpPagina({ taal = "nl" }: { taal?: Taal }) {
  const t = taal === "en" ? HULP_EN : NL_TEKST;
  const handleidingen = taal === "en" ? HULP_EN.handleidingen.items : HANDLEIDINGEN;
  const algemeen = taal === "en" ? HULP_EN.algemeneFaq : ALGEMENE_FAQ;
  const device = taal === "en" ? HULP_EN.deviceFaq : DEVICE_FAQ;
  const support = taal === "en" ? HULP_EN.supportFaq : SUPPORT_FAQ;
  const platforms = taal === "en" ? HULP_EN.it.platforms : IT_PLATFORMS;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...algemeen, ...device, ...support].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ──────────────────────────────────────────────────────
          Het laptopscherm in de foto is licht; de vier vlakken staan daar
          bovenop. Beeld is 2000×1125, het scherm zit op ~48%–90% breed en
          ~15%–60% hoog. Onder lg vervalt de overlay en nemen de blokken in
          de sectie hieronder het over. */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        {/* Achtergrondvideo: geluidloos, herhaalt zichzelf, start meteen.
            playsInline houdt hem op iOS in de pagina in plaats van fullscreen. */}
        <HeroAchtergrond
          poster="/images/tech-hulp-hero-poster.jpg"
          posterMobiel="/images/tech-hulp-hero-poster-mobiel.webp"
          posterDesktop="/images/tech-hulp-hero-poster-desktop.webp"
          bronnen={[
            { src: "/videos/tech-hulp-hero.webm", type: "video/webm" },
            { src: "/videos/tech-hulp-hero.mp4", type: "video/mp4" },
          ]}
          /* De band is smal, dus de uitsnede is precisiewerk. Op 88% zag je
              alleen een bureau, op 35% een heel gezicht. Bij deze bandhoogte
              (232px) valt op 68% de kin bovenin, daaronder de witte bloes, en
              onderaan de bovenrand van de laptop. Verander je de hoogte van de
              band, dan verschuift dit percentage mee. */
          style={{ objectPosition: "center 68%" }}
        />
        {/* Links donker genoeg om witte tekst te dragen, rechts licht genoeg om
            het gezicht te laten zien. De onderregel stond op 80% wit en viel
            weg tegen de lichte muur; die is nu vol wit met een verloop dat
            links steviger is. */}
        {/* Het verloop staat hier als inline-stijl en niet als Tailwind-klasse.
            Reden: `from-[#2D2D2D]/85` werd door Tailwind niet aangemaakt — een
            doorzichtigheid op een losse hexkleur in een verloop levert hier geen
            CSS op. De klasse stond er dus wel, maar deed niets, en daardoor
            stond de witte tekst al die tijd op een veel te lichte achtergrond.
            Links donker genoeg om tekst te dragen, rechts licht genoeg om het
            gezicht te laten zien. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(30,30,30,0.92) 0%, rgba(30,30,30,0.80) 34%, rgba(30,30,30,0.45) 62%, rgba(30,30,30,0.15) 100%)",
          }}
        />

        {/* Bewust veel lager dan onze andere hero's. Wie hier komt heeft haast,
            zit vaak al in een meeting, en moet de vier blokken én de zoekbalk
            meteen zien staan zonder te scrollen. Alles wat deze hero hoger
            maakt, duwt dat uit beeld. */}
        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-7 md:py-9 min-h-[210px] md:min-h-[232px] flex items-center">
          <div className="max-w-[620px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">{t.hero.kicker}</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-3"
              style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.3rem)" }}
            >
              {t.hero.titel}
            </h1>
            <p
              className="text-white text-base leading-relaxed"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
            >
              {t.hero.intro1}
              <br />
              {t.hero.intro2}
            </p>
          </div>
        </div>
      </section>

      {/* ── WAT IS JE PROBLEEM? ──────────────────────────────────────── */}
      <section id="hulp" className="bg-white py-8 md:py-10 scroll-mt-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[880px]">
            <TechHulp
              categorieen={taal === "en" ? CATEGORIEEN_EN : CATEGORIEEN}
              tools={taal === "en" ? TOOLS_EN : TOOLS}
              vragen={taal === "en" ? VRAGEN_EN : VRAGEN}
              kleuren={KLEUREN}
              taal={taal}
            />
          </div>
        </div>
      </section>

      {/* ── HANDLEIDINGEN ────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.handleidingen.kop}
            </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.handleidingen.onder}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {handleidingen.map((h) => (
              <a
                key={h.logo}
                href={h.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-[#EBEBEB] bg-white p-6 hover:border-[#28A8AA] transition-colors"
              >
                <img
                  src={`/images/logos/tools/${h.logo}.webp`}
                  alt={h.naam}
                  width={440}
                  height={176}
                  loading="lazy"
                  className="h-11 w-auto max-w-full object-contain object-left"
                />
                <p className="text-[#434343] text-sm mt-6">{h.soort}</p>
                <span className="inline-block mt-2 text-[#28A8AA] text-sm font-bold group-hover:underline">
                  {h.actie} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEELGESTELDE VRAGEN ──────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.faq.kop}
            </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.faq.onder}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 max-w-[1040px]">
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{t.faq.groepen.algemeen}</h3>
              <FaqLijst items={algemeen} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{t.faq.groepen.device}</h3>
              <FaqLijst items={device} />
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{t.faq.groepen.support}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                <FaqLijst items={support.slice(0, 3)} />
                <FaqLijst items={support.slice(3)} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── INSTELLINGEN, VOOR ORGANISATIES ──────────────────────────── */}
      <section className="bg-[#E8EDE4] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[980px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
              {t.it.kop}
            </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.it.onder}
            </p>
          </div>

          {/* items-start: anders groeit de hele rij mee zodra er één opengaat. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4">
            {platforms.map((p) => (
              <details key={p.logo} className="group rounded-lg bg-white border border-[#D8DFD2] open:shadow-sm">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5">
                  <img
                    src={`/images/logos/tools/${p.logo}.webp`}
                    alt={p.naam}
                    width={440}
                    height={176}
                    loading="lazy"
                    className="h-9 w-auto max-w-full object-contain object-left"
                  />
                  <span
                    className="text-[#28A8AA] font-bold text-lg leading-none group-open:rotate-45 transition-transform shrink-0"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6">
                  <p className="text-[15px] text-[#2D2D2D] font-semibold leading-snug mb-4">{p.kern}</p>
                  <ul className="space-y-2.5">
                    {p.punten.map((punt) => (
                      <li key={punt} className="flex gap-2.5 items-start text-sm text-[#434343] leading-relaxed">
                        <span className="text-[#28A8AA] shrink-0 mt-0.5" aria-hidden>✓</span>
                        {punt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-[#EFEFED] grid gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#28A8AA] text-sm font-bold hover:underline"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[#D8DFD2]">
            <p className="text-[#434343] leading-relaxed max-w-[720px]">
              {t.it.platformsIntro}{" "}
              <Link
                href={taal === "en" ? "/en/platforms" : "/nl/technologie/tools"}
                className="text-[#28A8AA] font-semibold hover:underline"
              >
                {t.it.platformsKnop}
              </Link>
              {t.it.platformsStaart}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/** Uitklapbare vraag-en-antwoordlijst. */
function FaqLijst({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[#EDEDEA]">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-[#EDEDEA] py-4">
          <summary className="flex justify-between items-start gap-4 list-none cursor-pointer">
            <span className="font-semibold text-[#2D2D2D] text-[15px] leading-snug">{f.q}</span>
            <span className="text-[#28A8AA] font-bold text-lg leading-none group-open:rotate-45 transition-transform shrink-0" aria-hidden>+</span>
          </summary>
          <p className="text-sm text-[#444444] leading-relaxed mt-3">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

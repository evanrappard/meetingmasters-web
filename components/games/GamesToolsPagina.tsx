import Image from "next/image";
import HeroAchtergrond from "@/components/ui/HeroAchtergrond";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { games, tools, faq, NL } from "@/app/nl/games-tools/data";
import { GAMES_EN } from "@/app/nl/games-tools/tekst-en";
import type { Taal } from "@/lib/talen";

/** Games & Tools, in beide talen. Beelden en volgorde zijn taalloos. */

export default function GamesToolsPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? GAMES_EN : NL;
  const spellen = engels
    ? games.map((g, i) => ({ ...g, ...GAMES_EN.games.items[i], href: GAMES_EN.links.games[i] }))
    : games;
  const hulpmiddelen = engels
    ? tools.map((x, i) => ({ ...x, ...GAMES_EN.tools.items[i], href: GAMES_EN.links.tools[i] }))
    : tools;
  const faqs = engels ? [...GAMES_EN.faq, ...GAMES_EN.faqMore] : faq;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px] overflow-hidden">
          <HeroAchtergrond
            poster="/images/games-hero-v5.jpg"
            posterMobiel="/images/games-hero-v5-mobiel.webp"
            posterDesktop="/images/games-hero-v5-desktop.webp"
            bronnen={[
              { src: "/videos/games-hero-v5.webm", type: "video/webm" },
              { src: "/videos/games-hero-v5.mp4", type: "video/mp4" },
            ]}
            alt="Games & Tools van MeetingMasters — een interactief online spel met deelnemers in beeld"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[600px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>{t.hero.kicker}</p>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {t.hero.titel}
                 </h1>
                <p className="text-white text-lg font-medium leading-relaxed mb-8" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)" }}>
                  {t.hero.intro}
                 </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={t.links.boeken} className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    {t.hero.cta}
                   </Link>
                  <Link href="#games" className="text-white/85 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors">
                    {t.hero.meer}
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GAMES + TOOLS (sub-sectie onder de hero) ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          {/* Eén zin die deze pagina aan de rest van het verhaal knoopt, zodat
              hij niet als losse catalogus leest. */}
          <p className="max-w-[760px] text-lg text-[#2D2D2D] leading-relaxed mb-10">
            {t.intro.verbinding}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Games</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.intro.gamesTitel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#434343] leading-relaxed mb-5">
                {t.intro.gamesBody}
               </p>
              <Link href="#games" className="text-[#28A8AA] text-sm font-bold hover:underline">
                {t.intro.gamesCta}
               </Link>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Tools</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.intro.toolsTitel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#434343] leading-relaxed mb-5">
                {t.intro.toolsBody}
               </p>
              <Link href="#tools" className="text-[#28A8AA] text-sm font-bold hover:underline">
                {t.intro.toolsCta}
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GAMES ── */}
      <section id="games" className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Games</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.games.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.games.onder}
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {spellen.map((g) => (
              <div key={g.title} className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col">
                <div className="relative h-44">
                  <Image src={g.img} alt={g.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-1.5 leading-snug">{g.title}</h3>
                  <p className="text-sm text-[#434343] leading-relaxed mb-3">{g.desc}</p>
                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-[#2D2D2D] mb-2">{g.detail}</p>
                    <Link href={g.href} className="text-[#28A8AA] text-sm font-bold hover:underline self-start">
                      {g.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── R@VENHACK UITGELICHT ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <YouTubeFacade
              videoId={engels ? "hE8qs_akrxM" : "5g3Vv51_hR0"}
              poster={engels ? "/images/ravenhack-trailer-poster-en.webp" : "/images/ravenhack-video-poster.jpg"}
              title={engels ? "R@venHack trailer" : "R@venHack trailer"}
            />
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.ravenhack.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.ravenhack.titel}
               </h2>
              <p className="text-[#434343] leading-relaxed mb-4">
                {t.ravenhack.body1}
               </p>
              <p className="text-[#434343] leading-relaxed mb-4">
                {t.ravenhack.body2}
               </p>
              <Link href={t.links.ravenhack} className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                {t.ravenhack.cta}
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Tools</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.tools.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.tools.onder}
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hulpmiddelen.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all"
              >
                <div className="relative w-full overflow-hidden aspect-[5/6]">
                  <Image src={tool.img} alt={tool.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-1.5 leading-snug group-hover:text-[#EEBE3D] transition-colors">{tool.title}</h3>
                  <p className="text-sm text-[#434343] leading-relaxed mb-5">{tool.desc}</p>
                  <span className="mt-auto text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide self-start">
                    {t.tools.open}
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── VOOR JE BEGINT ──
          Deze tools gebruik je vóór de bijeenkomst, niet erin. Daarom een eigen
          blok en niet een vijfde tegel bij de tools hierboven: ander moment,
          andere gebruiker. */}
      <section id="voor-je-begint" className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.voorJeBegint.kicker}
             </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.voorJeBegint.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.voorJeBegint.body}
             </p>
          </div>

          <Link
            href={t.links.calculator}
            className="group block rounded border border-[#EBEBEB] bg-[#F7F7F5] p-7 sm:p-9 hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all max-w-[760px]"
          >
            <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug group-hover:text-[#EEBE3D] transition-colors">
              {t.voorJeBegint.calculatorTitel}
             </h3>
            <p className="text-[#434343] leading-relaxed mb-5">
              {t.voorJeBegint.calculatorBody}
             </p>
            <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">
              {t.voorJeBegint.calculatorCta}
             </span>
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.faqKop}
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.slice(0, 4).map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#434343] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">{t.meerAntwoorden}</span>
              <span className="hidden group-open:inline">{t.minderAntwoorden}</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {faqs.slice(4).map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#434343] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock taal={taal} />
    </div>
  );
}

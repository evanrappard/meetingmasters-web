import Image from "next/image";
import PaginaLink from "@/components/ui/PaginaLink";
import CTABlock from "@/components/ui/CTABlock";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import { JsonLd } from "@/components/ui/JsonLd";
import VersieKeuze from "@/components/games/VersieKeuze";
import GrotereGroepen from "@/components/games/GrotereGroepen";
import RavenHackModules from "@/components/ravenhack/RavenHackModules";
import { versies, stappen, faq, NL } from "@/app/nl/games-tools/ravenhack/data";
import { RAVENHACK_EN } from "@/app/nl/games-tools/ravenhack/tekst-en";
import type { Taal } from "@/lib/talen";
import HeroBeeld from "@/components/ui/HeroBeeld";

/** R@venHack, in beide talen. Beelden en volgorde zijn taalloos. */

/**
 * De drie modules (beschikbaarheid, prijs, boeken) staan achter een schakelaar,
 * zodat ze lokaal te bekijken zijn zonder dat ze meteen op de live site staan.
 * Aanzetten met NEXT_PUBLIC_RAVENHACK_MODULES=aan in .env.local.
 */
const MODULES_AAN = process.env.NEXT_PUBLIC_RAVENHACK_MODULES === "aan";

export default function RavenHackPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? RAVENHACK_EN : NL;
  const fasen = engels ? stappen.map((s, i) => ({ ...s, ...RAVENHACK_EN.hoe.stappen[i] })) : stappen;
  const varianten = engels ? versies.map((v, i) => ({ ...v, ...RAVENHACK_EN.versies.items[i] })) : versies;
  const faqs = engels ? RAVENHACK_EN.faq : faq;
  // Staan de modules op de pagina, dan blijven de knoppen op de pagina zelf:
  // "Check kosten" opent de calculator, "Boek nu" opent daar meteen de tweede
  // stap. Staan ze uit, dan gaan ze naar de losse formulierpagina's.
  const naarKosten = MODULES_AAN ? "#rh-prijs" : t.links.offerte;
  const naarBoeken = MODULES_AAN ? "#rh-boeken" : t.links.boeken;
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

      {/* ── HERO ── */}
      <section>
        {/* Het beeld is bijgesneden op de band die je hier ook echt ziet: van
            2560×1440 naar 2560×1152. De egale gloed bovenaan viel toch weg, en
            zo download niemand pixels die hij nooit te zien krijgt. */}
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px]">
          <HeroBeeld
            src="/images/ravenhack-hero-v8.webp"
            alt={t.hero.beeldAlt}
            fill
            className="object-cover"
            /* Iets onder het midden: dan valt de egale gloed bovenaan weg en
               houden de hint-knop en de onderste gezichten ruimte onder zich. */
            style={{ objectPosition: "center 55%" }}
            priority
            /*
             * Bewust 75 en niet de 90 van onze andere hero's. Dit beeld is een
             * wand met honderden kleine schermpjes: het slechtst denkbare
             * materiaal om te comprimeren. Op kwaliteit 90 was het 451 kB op een
             * gewoon scherm en 722 kB op een retina-scherm — vier tot zeven keer
             * zwaarder dan elke andere hero op de site, en dat zag je: de hero
             * kwam zichtbaar later dan de pagina eromheen.
             *
             * Op ware grootte naast elkaar gelegd is 75 niet van 90 te
             * onderscheiden, ook niet op de gezichten. Bij een beeld met zoveel
             * ruis gaat de extra kwaliteit op aan detail dat niemand ziet.
             */
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[600px]">
                <p className="inline-block bg-black/35 rounded px-2.5 py-1 text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                  {t.hero.kicker}
                 </p>
                <h1
                  className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
                >
                  {t.hero.titel1}
                  <br />
                  {t.hero.titel2}
                </h1>
                <p
                  className="text-white text-lg font-medium leading-relaxed mb-8"
                  style={{
                    textShadow:
                      "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  {t.hero.intro}
                 </p>
                <div className="flex flex-wrap gap-3">
                  <PaginaLink
                    href={naarKosten}
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    {t.hero.ctaKosten}
                   </PaginaLink>
                  <PaginaLink
                    href={naarBoeken}
                    className="text-white text-sm font-semibold px-5 py-3 border border-white/40 rounded hover:border-white/80 hover:bg-white/10 transition-colors"
                  >
                    {t.hero.cta}
                   </PaginaLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS + VOOR WIE ── */}
      <section className="bg-white pt-16 pb-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.wat.kicker}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.wat.titel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#434343] leading-relaxed">
                {t.wat.body}
               </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.voorWie.kicker}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.voorWie.titel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#434343] leading-relaxed">
                {t.voorWie.body}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOE HET WERKT ── */}
      <section className="bg-[#F4F7F9] pt-10 pb-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.hoe.kicker}
             </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.hoe.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.hoe.onder}
             </p>
          </div>
          {/* Eén verhaal in drie stappen, niet drie losse voorbeelden: een gele
              lijn met genummerde bolletjes verbindt ze. Op de telefoon staat de
              lijn rechtop tussen de kaarten. */}
          <div className="relative">
            <span
              aria-hidden
              className="hidden md:block absolute top-[13px] left-[16.6%] right-[16.6%] h-[2px] bg-[#EEBE3D]/50"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-5">
              {fasen.map((s, i) => (
                <div key={s.title} className="relative flex flex-col">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="md:hidden absolute -top-9 left-1/2 -translate-x-1/2 h-9 w-[2px] bg-[#EEBE3D]/50"
                    />
                  )}
                  <span className="relative z-10 mx-auto mb-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#EEBE3D] text-[13px] font-bold text-[#2D2D2D]">
                    {s.stap ?? i + 1}
                  </span>
                  <div className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col flex-1">
                    <div className="relative h-40">
                      <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-4">
                        {s.tag}
                      </span>
                      <h3 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#434343] leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TWEE VERSIES ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.versies.kicker}
             </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.versies.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.versies.onder}
             </p>
          </div>
          <VersieKeuze
            versies={varianten}
            ctaLabel={t.versies.cta}
            kostenLabel={t.versies.kosten}
            ctaHref={naarKosten}
            kostenHref={naarBoeken}
          />
          {/* In een eigen div: de sitebrede regel `main [class*="mx-auto"] > p`
              centreert anders elke alinea die rechtstreeks in deze kolom staat. */}
          <div className="mt-8">
            <GrotereGroepen taal={taal} className="max-w-[760px]" />
          </div>
        </div>
      </section>

      {/* ── BEELD + PRAKTIJK ── */}
      <section className="bg-[#FAFAFA] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.praktijk.kicker}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.praktijk.titel}
               </h2>
              <p className="text-[#2D2D2D] font-semibold text-lg leading-relaxed mb-4">
                {t.praktijk.lead}
               </p>
              <p className="text-[#434343] leading-relaxed mb-4">
                {t.praktijk.body}
               </p>
              <p className="text-[#434343] leading-relaxed">
                {t.praktijk.duur}
               </p>
            </div>
            <YouTubeFacade
              videoId={engels ? "_y8yi-YgEhk" : "k8fXvDLmXtg"}
              poster={engels ? "/images/ravenhack-video-poster-en.webp" : "/images/ravenhack-video-poster-nl.webp"}
              title={engels ? "What is R@venHack" : "Wat is R@venHack"}
            />
          </div>
        </div>
      </section>

      {/* ── BESCHIKBAARHEID · PRIJS · BOEKEN ── */}
      {MODULES_AAN && <RavenHackModules taal={taal} />}

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            {t.faqKop}
           </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-[#434343] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock taal={taal} />
    </div>
  );
}

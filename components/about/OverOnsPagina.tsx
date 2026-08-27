import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { JsonLd } from "@/components/ui/JsonLd";
import { klantLogos, rolesVooraf, rolesTijdens, aboutFaq, aboutFaqMore, NL } from "@/app/nl/about/data";
import { ABOUT_EN } from "@/app/nl/about/tekst-en";
import type { Taal } from "@/lib/talen";

/** Over ons, in beide talen. Logo's en volgorde zijn taalloos. */

export default function OverOnsPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? ABOUT_EN : NL;
  const vooraf = engels ? ABOUT_EN.rollen.voorafItems : rolesVooraf;
  const tijdens = engels ? ABOUT_EN.rollen.tijdensItems : rolesTijdens;
  const faqs = engels ? ABOUT_EN.faq : aboutFaq;
  const faqsMeer = engels ? ABOUT_EN.faqMore : aboutFaqMore;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...faqs, ...faqsMeer].map((item) => ({
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
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px] overflow-hidden">
          <Image
            src="/images/about-hero.webp"
            alt="Iemand in een online bijeenkomst van MeetingMasters — verbinding maken, waar je ook bent"
            fill priority quality={90}
            className="object-cover"
            style={{ objectPosition: "62% 58%", transform: "scale(1.16)", transformOrigin: "64% 60%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[620px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>{t.hero.kicker}</p>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {t.hero.titel}
                 </h1>
                <p className="text-white text-lg leading-relaxed" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  {t.hero.regel1}
                  <br />
                  {t.hero.regel2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIE WE ZIJN + WAT ONS DRIJFT ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.wieWeZijn.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.wieWeZijn.titel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#434343] leading-relaxed">
                {t.wieWeZijn.body}
               </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.drijft.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.drijft.titel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#434343] leading-relaxed">
                {t.drijft.body}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONS MANIFEST ── */}
      <section className="bg-[#2D2D2D] py-20">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#EEBE3D] text-xs font-bold tracking-widest uppercase mb-4">{t.manifest.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-5">
                {t.manifest.titel}
               </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-7">
                {t.manifest.body}
               </p>
              <blockquote className="border-l-2 border-[#EEBE3D] pl-5 mb-8">
                <p className="text-white text-xl leading-relaxed italic">
                  &ldquo;{t.manifest.citaat}&rdquo;
                </p>
              </blockquote>
              <a
                href={t.manifest.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#EEBE3D] text-sm font-bold hover:text-[#F5C93D] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
                {t.manifest.knop}
               </a>
            </div>
            <div>
              <YouTubeEmbed
                videoId={t.manifest.videoId}
                title={t.manifest.videoTitel}
                poster={t.manifest.videoBeeld}
                posterAlt={t.manifest.videoBeeldAlt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DE MENSEN ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-12 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.mensen.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              {t.mensen.titel}
             </h2>
            <p className="text-[#434343] text-lg leading-relaxed">
              {t.mensen.body}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Oprichter */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-5">
                <Image src="/images/emilie-ad-v2.webp" alt="Emilie van Rappard, oprichter van MeetingMasters, tijdens een online sessie" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 560px" />
              </div>
              <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">{t.mensen.oprichter}</p>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Emilie van Rappard</h3>
              <p className="text-[#434343] leading-relaxed mb-4">
                {t.mensen.oprichterBody}
               </p>
              <a
                href="https://www.linkedin.com/in/emilievanrappard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28A8AA] text-sm font-bold hover:underline"
              >
                {t.mensen.linkedin}
               </a>
            </div>

            {/* Team */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-5">
                <Image src="/images/team-mm.webp" alt="Het team van MeetingMasters — de Meeting Masters" fill className="object-cover" sizes="(max-width: 768px) 100vw, 560px" />
              </div>
              <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">{t.mensen.team}</p>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{t.mensen.teamNaam}</h3>
              <p className="text-[#434343] leading-relaxed">
                {t.mensen.teamBody}
               </p>
              <a
                href="https://www.linkedin.com/company/meetingmastersonline"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#28A8AA] text-sm font-bold hover:underline"
              >
                {t.mensen.teamLinkedin}
               </a>
            </div>
          </div>

          {/* Uitnodiging — de enige twee knoppen hierboven wijzen naar LinkedIn */}
          <div className="mt-12 rounded-lg bg-[#F7F7F5] border border-[#EBEBEB] px-6 py-7 sm:px-8 sm:py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <div className="md:flex-1">
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{t.mensen.uitnodigingKop}</h3>
              <p className="text-[#434343] leading-relaxed">{t.mensen.uitnodigingBody}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 shrink-0">
              <Link
                href={t.links.advies}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded text-center whitespace-nowrap hover:bg-[#D4A835] transition-colors"
              >
                {t.mensen.uitnodigingKnop}
              </Link>
              <Link
                href={t.links.testimonials}
                className="border border-[#D8D8D8] text-[#434343] text-sm font-bold px-5 py-2.5 rounded text-center whitespace-nowrap hover:border-[#28A8AA] hover:text-[#28A8AA] transition-colors"
              >
                {t.mensen.uitnodigingTweede}
              </Link>
            </div>
          </div>

          {/* Rollen — vooraf en op de dag zelf */}
          <div className="mt-14 pt-12 border-t border-[#EBEBEB]">
            <div className="max-w-[760px] mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.rollen.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.rollen.titel}
               </h2>
              <p className="text-[#434343] text-lg leading-relaxed">
                {t.rollen.intro}
               </p>
            </div>

            {/* Voor de bijeenkomst */}
            <div className="mb-12">
              <div className="max-w-[760px] mb-6">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-1.5">{t.rollen.vooraf}</h3>
                <p className="text-[#434343] leading-relaxed">
                  {t.rollen.voorafOnder}
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {vooraf.map((r) => (
                  <div key={r.name}>
                    <span className="block h-[3px] w-8 bg-[#EEBE3D] rounded-full mb-3" />
                    <h4 className="text-base font-bold text-[#2D2D2D] mb-1.5">{r.name}</h4>
                    <p className="text-sm text-[#434343] leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tijdens de bijeenkomst */}
            <div>
              <div className="max-w-[760px] mb-6">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-1.5">{t.rollen.tijdens}</h3>
                <p className="text-[#434343] leading-relaxed">
                  {t.rollen.tijdensOnder}
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {tijdens.map((r) => (
                  <div key={r.name}>
                    <span className="block h-[3px] w-8 bg-[#EEBE3D] rounded-full mb-3" />
                    <h4 className="text-base font-bold text-[#2D2D2D] mb-1.5">{r.name}</h4>
                    <p className="text-sm text-[#434343] leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              {/* Afsluiter: bindt de twee groepen aan elkaar en wijst vooruit. */}
              <p className="max-w-[760px] mt-10 text-[#434343] leading-relaxed">
                {t.rollen.na}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOBAND ── */}
      <section className="bg-[#F9F9F8] py-14 border-t border-[#EBEBEB] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-10 mb-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="text-[#28A8AA] text-base font-bold">{t.klanten}</p>
            <Link href={t.links.testimonials} className="text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              {t.klantenLink}
            </Link>
          </div>
        </div>
        <div
          className="overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)" }}
        >
          <div className="logo-marquee flex items-center gap-6" style={{ width: "max-content" }}>
            {[...klantLogos, ...klantLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-white border border-[#EBEBEB] rounded">
                <Image src={logo.src} alt={logo.alt} width={160} height={48} className="h-12 max-w-[150px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-14 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            {t.faqKop}
           </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((item) => (
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
              {faqsMeer.map((item) => (
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

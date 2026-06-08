import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { getHomepageContent, getLogos, getHomepageCases } from "@/sanity/queries";

const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MeetingMasters",
  "alternateName": "MeetingMasters Online",
  "url": "https://www.meetingmasters.online",
  "logo": { "@type": "ImageObject", "url": "https://www.meetingmasters.online/images/logo.webp" },
  "description": "MeetingMasters ontwerpt en begeleidt online bijeenkomsten voor 50 tot 500 mensen — events, virtual offices en interactieve formats. Gevestigd in Amsterdam, actief sinds 2020.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schellingwouderdijk 157",
    "postalCode": "1023NC",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL",
  },
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+31-20-239-03-13", "contactType": "customer service", "availableLanguage": ["Dutch", "English"] },
    { "@type": "ContactPoint", "email": "contact@meetingmasters.online", "contactType": "customer service" },
  ],
  "sameAs": ["https://www.linkedin.com/company/meetingmasters-online"],
  "areaServed": { "@type": "Country", "name": "Netherlands" },
};

const SCHEMA_SERVICES = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Spatial Events",
    "provider": { "@type": "Organization", "name": "MeetingMasters", "url": "https://www.meetingmasters.online" },
    "description": "Online strategiedagen, all-hands meetings, kick-offs en community events voor 50 tot 500 deelnemers. Concept, facilitatie en live productie.",
    "serviceType": "Online Event Organisation",
    "areaServed": { "@type": "Country", "name": "Netherlands" },
    "url": "https://www.meetingmasters.online/nl/events",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Virtual Office",
    "provider": { "@type": "Organization", "name": "MeetingMasters", "url": "https://www.meetingmasters.online" },
    "description": "Virtueel kantoor voor hybride en internationale teams. De digitale thuisbasis voor uw organisatie — voor vergaderingen én de informele momenten daartussen.",
    "serviceType": "Virtual Office Service",
    "areaServed": { "@type": "Country", "name": "Netherlands" },
    "url": "https://www.meetingmasters.online/nl/remote-office",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Games & Tools",
    "provider": { "@type": "Organization", "name": "MeetingMasters", "url": "https://www.meetingmasters.online" },
    "description": "Online escape rooms, onboarding games en interactieve tools voor meer betrokkenheid. Inclusief EscapeMasters en RavenHack cybersecurity escape room.",
    "serviceType": "Interactive Online Experience",
    "areaServed": { "@type": "Country", "name": "Netherlands" },
    "url": "https://www.meetingmasters.online/nl/games-tools",
  },
];

const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat doet MeetingMasters precies?",
      "acceptedAnswer": { "@type": "Answer", "text": "MeetingMasters ontwerpt en begeleidt online bijeenkomsten — van strategiedagen en all-hands tot virtual offices en escape rooms. Wij verzorgen concept, facilitatie en live productie." },
    },
    {
      "@type": "Question",
      "name": "Voor welke organisaties werkt MeetingMasters?",
      "acceptedAnswer": { "@type": "Answer", "text": "Wij werken voor organisaties die online bijeenkomsten organiseren voor 50 tot 500 mensen — profit, non-profit, overheid en internationaal." },
    },
    {
      "@type": "Question",
      "name": "Wat is SpatialChat en waarom gebruiken jullie dat?",
      "acceptedAnswer": { "@type": "Answer", "text": "SpatialChat is een virtueel platform waarbij deelnemers vrij door de ruimte bewegen en spontaan gesprekken aangaan. Wij gebruiken het omdat het gedrag mogelijk maakt dat in andere tools niet vanzelf ontstaat." },
    },
    {
      "@type": "Question",
      "name": "Wat kost een online event met MeetingMasters?",
      "acceptedAnswer": { "@type": "Answer", "text": "De kosten hangen af van type event, aantal deelnemers en gewenste ondersteuning. Neem contact op voor een eerste inschatting via contact@meetingmasters.online of +31 20 239 03 13." },
    },
  ],
};

export const metadata: Metadata = {
  title: "MeetingMasters | Online events & remote work specialisten",
  description:
    "Wij ontwerpen online bijeenkomsten voor 50 tot 500 mensen — events, virtual offices en interactieve formats. 250+ events begeleid, 94% tevredenheid.",
};

// Fallback data — actief zolang er geen Sanity-content is
const DEFAULT_STATS = [
  { number: "Sinds 2020", label: "online meeting professionals" },
  { number: "250+", label: "events begeleid" },
  { number: "94%", label: "tevredenheid na afloop" },
  { number: "47%", label: "meer betrokkenheid*" },
  { number: "66%", label: "hogere opkomst*" },
];

const DEFAULT_LOGOS = [
  { src: "/images/logos/belastingdienst.webp", alt: "Belastingdienst — klant van MeetingMasters Online" },
  { src: "/images/logos/ing.webp", alt: "ING — klant van MeetingMasters Online" },
  { src: "/images/logos/bergman-clinics.webp", alt: "Bergman Clinics — klant van MeetingMasters Online" },
  { src: "/images/logos/pbcf.webp", alt: "Prins Bernhard Cultuurfonds — klant van MeetingMasters Online" },
  { src: "/images/logos/amsterdam.webp", alt: "Gemeente Amsterdam — klant van MeetingMasters Online" },
  { src: "/images/logos/gemeente-utrecht.webp", alt: "Gemeente Utrecht — klant van MeetingMasters Online" },
  { src: "/images/logos/provincie-utrecht.webp", alt: "Provincie Utrecht — klant van MeetingMasters Online" },
  { src: "/images/logos/energie-nederland.webp", alt: "Energie Nederland — klant van MeetingMasters Online" },
  { src: "/images/logos/vitens.webp", alt: "Vitens — klant van MeetingMasters Online" },
  { src: "/images/logos/betaalvereniging.webp", alt: "Betaalvereniging Nederland — klant van MeetingMasters Online" },
  { src: "/images/logos/roc-nijmegen.webp", alt: "ROC Nijmegen — klant van MeetingMasters Online" },
  { src: "/images/logos/roosendaal.webp", alt: "Gemeente Roosendaal — klant van MeetingMasters Online" },
  { src: "/images/logos/pharmaccess.webp", alt: "PharmAccess — klant van MeetingMasters Online" },
  { src: "/images/logos/aberkyn.webp", alt: "Aberkyn — klant van MeetingMasters Online" },
  { src: "/images/logos/pcc.webp", alt: "PCC — klant van MeetingMasters Online" },
  { src: "/images/logos/nmq.webp", alt: "NMQ — klant van MeetingMasters Online" },
];

const DEFAULT_INSPIRATIE = [
  {
    label: "Event",
    title: "Online strategiedag voor 200 medewerkers.",
    body: "Plenaire sessies, breakouts en napraten achteraf. Deelnemers gaven een 8,4.",
    img: "/images/hero-1.webp",
    imgAlt: "Online strategiedag voor 200 medewerkers — plenaire sessies en breakouts begeleid door MeetingMasters",
  },
  {
    label: "Virtual Office",
    title: "Virtueel clubhuis voor Olympiërs wereldwijd.",
    body: "World Olympians Association — actief tijdens de Spelen van Parijs en Milaan.",
    img: "/images/inspiratie-olyhouse.webp",
    imgAlt: "e-OLYHouse 2026 in SpatialChat — een virtueel clubhuis voor de World Olympians Association op een alpine locatie",
  },
  {
    label: "Games & Tools",
    title: "Cybersecurity escape room voor 80 man.",
    body: "R@venHack — laagdrempelig instappen, hoge betrokkenheid.",
    img: "/images/inspiratie-escape.webp",
    imgAlt: "RavenHack cybersecurity escape room — deelnemers in een digitale wereld, MeetingMasters Games & Tools",
  },
];

const solutions = [
  {
    id: "events",
    num: "01",
    label: "Events",
    headline: "Bijzondere bijeenkomsten voor grote groepen.",
    bullets: ["Strategiedag", "All-hands & kick-off", "Leiderschapsdag", "Community event"],
    cta: "Meer over Events",
    href: "/nl/events",
    img: "/images/events-bijeenkomst.webp",
    imgAlt: "Sfeervolle online bijeenkomst in een virtuele rooftopomgeving — deelnemers verbonden via MeetingMasters",
    bg: "bg-[#E8EDE4]",
    imgStyle: { transform: "scale(1.3) translateY(4%)", transformOrigin: "center center" } as React.CSSProperties,
  },
  {
    id: "remote-office",
    num: "02",
    label: "Remote Office",
    headline: "Een virtueel kantoor dat afstanden overbrugt.",
    bullets: ["Internationale organisaties", "Hybride teams", "Projectgroepen", "Samenwerkingsverbanden"],
    cta: "Meer over Remote Office",
    href: "/nl/remote-office",
    img: "/images/remote-office-virtual.webp",
    imgAlt: "Virtueel kantoor in SpatialChat voor hybride teams — meerdere ruimtes, live samenwerking en informeel contact",
    bg: "bg-[#E8EDE4]",
    imgStyle: { objectPosition: "left center", transform: "scale(1.6)", transformOrigin: "left center" } as React.CSSProperties,
  },
  {
    id: "games-tools",
    num: "03",
    label: "Games & Tools",
    headline: "Verrassende formats voor meer betrokkenheid.",
    bullets: ["Interactie tools", "Online escape rooms", "Onboarding games", "Maatwerk gamification"],
    cta: "Meer over Games & Tools",
    href: "/nl/games-tools",
    img: "/images/format-escape.webp",
    imgAlt: "Deelnemers spelen een online escape room als interactieve teambuilding activiteit — MeetingMasters Games & Tools",
    bg: "bg-[#E8EDE4]",
    imgStyle: {} as React.CSSProperties,
  },
];


export default async function HomePage() {
  // Haal live data op — bij lege of mislukte fetch wordt fallback gebruikt
  const [cmsContent, cmsLogos, cmsCases] = await Promise.all([
    getHomepageContent().catch(() => null),
    getLogos().catch(() => []),
    getHomepageCases().catch(() => []),
  ]);

  const stats = cmsContent?.stats?.length
    ? cmsContent.stats.map((s) => ({ number: s.value, label: s.label }))
    : DEFAULT_STATS;

  const logos = cmsLogos?.length
    ? cmsLogos.map((l) => ({ src: l.logo.asset.url, alt: `${l.name} — klant van MeetingMasters Online` }))
    : DEFAULT_LOGOS;

  const INSPIRATIE_ORDER = ["Event", "Virtual Office", "Games & Tools"];
  const normalizeLabel = (l: string) => l === "Remote Office" ? "Virtual Office" : l;

  const inspiratie = cmsCases?.length
    ? cmsCases
        .map((c) => ({
          label: normalizeLabel(c.label),
          title: c.title,
          body: c.summary ?? "",
          img: c.image?.asset?.url ?? "/images/hero-1.webp",
          imgAlt: c.title,
        }))
        .sort((a, b) => {
          const ai = INSPIRATIE_ORDER.indexOf(a.label);
          const bi = INSPIRATIE_ORDER.indexOf(b.label);
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        })
    : DEFAULT_INSPIRATIE;

  const heroHeadline = cmsContent?.heroHeadline ?? "Een vergadering heb je.\nEen ontmoeting maak je.";
  const heroSubline = cmsContent?.heroSubline ?? "Wij ontwerpen online bijeenkomsten die er écht toe doen.\nMeer betrokkenheid — met 5, 50 of 500 mensen.";

  return (
    <>
      <JsonLd data={SCHEMA_ORGANIZATION} />
      {SCHEMA_SERVICES.map((s) => <JsonLd key={s.name} data={s} />)}
      <JsonLd data={SCHEMA_FAQ} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section>
        <h1 className="sr-only">MeetingMasters — online events en virtual office specialist op SpatialChat</h1>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <Image
            src="/images/hero-lobby.webp"
            alt="Lichte, ruime ontvangsthal met uitzicht op de skyline — uw bijeenkomst begint hier, MeetingMasters Online"
            fill
            priority
            className="object-cover object-center"
            style={{
              filter: "contrast(1.04) saturate(1.06)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1E1E]/75 via-[#2D2D2D]/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.05] mb-5">
                  {heroHeadline.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < heroHeadline.split("\n").length - 1 && <br />}</span>
                  ))}
                </h1>
                <p className="text-white text-lg leading-relaxed mb-8" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}>
                  {heroSubline.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < heroSubline.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/contact"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    Ervaar het zelf →
                  </Link>
                  <a
                    href="#inspiratie"
                    className="text-white text-sm font-semibold px-4 py-3 border border-white/30 rounded hover:border-white/70 transition-colors"
                  >
                    Bekijk voorbeelden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3-col overview card */}
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="md:-mt-12 bg-white shadow-lg rounded grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EBEBEB]">
            {[
              { href: "/nl/events", label: "Events", title: "Bijzondere online bijeenkomsten", desc: "Als de standaard niet volstaat: van strategiedagen tot all-hands en community events." },
              { href: "/nl/remote-office", label: "Remote Office", title: "Een virtual office dat werkt", desc: "De plek voor uw team om samen te komen — ook als niemand in vergadering zit." },
              { href: "/nl/games-tools", label: "Games & Tools", title: "Interactieve formats", desc: "Online escape rooms, onboarding games en slimme tools voor meer betrokkenheid." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-7 sm:p-8 group hover:bg-[#FFFBEE] transition-colors"
              >
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                <h3 className="text-base font-bold text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#EEBE3D] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#898989] leading-relaxed mb-3">{item.desc}</p>
                <span className="text-[#EEBE3D] text-xs font-bold transition-all group-hover:text-[#D4A835] group-hover:text-sm group-hover:tracking-wide">Meer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEWIJS ───────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-14 pb-10 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-2">
            {stats.map((s) => (
              <div key={s.number} className="bg-white rounded shadow-sm px-4 py-6 text-center">
                <p className={`font-bold text-[#EEBE3D] mb-1.5 leading-none ${s.number.length > 5 ? "text-xl lg:text-2xl" : "text-3xl lg:text-4xl"}`}>
                  {s.number}
                </p>
                <p className="text-xs text-[#545454] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[#BBBBBB] text-xs text-right">* SpatialChat platformdata 2024–2025</p>
        </div>
      </section>

      {/* ── OPLOSSINGEN ──────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Onze oplossingen
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Wij zijn ontwerpers van bijzondere online momenten.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.id} className="rounded shadow-md overflow-hidden flex flex-col">
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <Image src={s.img} alt={s.imgAlt} fill className="object-cover" style={s.imgStyle} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#2D2D2D] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded">
                      {s.num} · {s.label}
                    </span>
                  </div>
                </div>
                <div className={`${s.bg} flex-1 flex flex-col p-7`}>
                  <h3 className="text-[#2D2D2D] font-bold text-lg mb-4 leading-snug">{s.headline}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#545454]">
                        <span className="text-[#2D2D2D] font-bold mt-0.5 flex-shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className="bg-white text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#F5F5F5] transition-colors text-center"
                  >
                    {s.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LOGO CARROUSEL ───────────────────────────────────────────── */}
      <section className="bg-[#F9F9F8] pt-14 pb-10 border-t border-[#EBEBEB] overflow-hidden">
        <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-6 max-w-content mx-auto px-6 lg:px-10">Klanten</p>
        <div
          className="overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)" }}
        >
          <div className="logo-marquee flex items-center gap-6" style={{ width: "max-content" }}>
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-24 px-8 bg-white border border-[#EBEBEB] rounded">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={56}
                  className="h-14 max-w-[160px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPATIALCHAT ──────────────────────────────────────────────── */}
      <section className="bg-[#F0F0EA] py-14 border-t border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                SpatialChat: ons voorkeursplatform
              </p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-2">
                Waarom wij werken met SpatialChat
              </h2>
              <p className="text-[#545454] mb-6">Een videoplatform. Een ontmoetingsplaats.</p>
              <ul className="space-y-4 mb-8">
                {[
                  { kop: "Mensen bewegen zelf.", desc: "Deelnemers navigeren en kiezen met wie ze in gesprek gaan." },
                  { kop: "Nabijheid bepaalt interactie.", desc: "Gesprekken ontstaan spontaan — zoals in het echte leven." },
                  { kop: "Van intiem overleg tot een grote all-hands.", desc: "Designs die passen bij de context van het samenzijn." },
                ].map((p) => (
                  <li key={p.kop} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#545454] leading-relaxed">
                      <strong className="text-[#2D2D2D] font-bold">{p.kop}</strong>{" "}{p.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/nl/contact"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
              >
                Plan een demo →
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/spatial-entree.webp"
                alt="Inlogscherm van een op maat gemaakt SpatialChat-omgeving met MeetingMasters-branding voor een grote organisatie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSPIRATIE ───────────────────────────────────────────────── */}
      <section id="inspiratie" className="bg-white py-14">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Inspiratie
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-3">
              Drie voorbeelden. 1000 idee&#xEB;n.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inspiratie.map((item) => (
              <Link
                key={item.label}
                href="/nl/inspiratie"
                className="group rounded shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.imgAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="bg-white px-7 pb-7 pt-5 flex flex-col flex-1 border-t border-[#EBEBEB]">
                  <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                  <h3 className="text-base font-bold text-[#2D2D2D] mb-3 leading-snug flex-1">{item.title}</h3>
                  <p
                    className="text-sm text-[#545454] leading-relaxed"
                    {...(item.body.includes('R@venHack') && { 'aria-label': item.body.replace('R@venHack', 'RavenHack') })}
                  >{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/nl/inspiratie"
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
            >
              Meer voorbeelden bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTABlock />

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Wat doet MeetingMasters precies?",
                a: "MeetingMasters ontwerpt en begeleidt online bijeenkomsten — van strategiedagen en all-hands tot virtual offices en escape rooms. Wij verzorgen concept, facilitatie en live productie.",
              },
              {
                q: "Voor welke organisaties werkt MeetingMasters?",
                a: "Wij werken voor organisaties die online bijeenkomsten organiseren voor 50 tot 500 mensen — profit, non-profit, overheid en internationaal.",
              },
              {
                q: "Wat is SpatialChat en waarom gebruiken jullie dat?",
                a: "SpatialChat is een virtueel platform waarbij deelnemers vrij door de ruimte bewegen en spontaan gesprekken aangaan. Wij gebruiken het omdat het gedrag mogelijk maakt dat in andere tools niet vanzelf ontstaat.",
              },
              {
                q: "Wat kost een online event met MeetingMasters?",
                a: "De kosten hangen af van type event, aantal deelnemers en gewenste ondersteuning. Neem contact op voor een eerste inschatting via het formulier of contact@meetingmasters.online.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import HeroAchtergrond from "@/components/ui/HeroAchtergrond";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import { JsonLd } from "@/components/ui/JsonLd";
import { getHomepageContent, getLogos, getHomepageCases } from "@/sanity/queries";
import {
  SCHEMA_ORGANIZATION, SCHEMA_SERVICES, NL_FAQ,
  DEFAULT_STATS, DEFAULT_LOGOS, DEFAULT_INSPIRATIE,
  CATEGORY_HREF, solutions, NL_TEKST,
} from "@/app/nl/home/data";
import { HOME_EN } from "@/app/nl/home/tekst-en";
import { type Taal, engelsPad } from "@/lib/talen";

/**
 * De homepage, in beide talen.
 *
 * De Engelse versie praat niet met Sanity: de inhoud daar is Nederlands. Die
 * gebruikt dus altijd de teksten uit tekst-en.ts. Zodra er Engelse content in
 * het CMS staat, kan dat hier worden aangesloten.
 */

export default async function HomePagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? HOME_EN : NL_TEKST;

  // De Engelse pagina haalt niets uit Sanity: de inhoud daar is Nederlands.
  const [cmsContent, cmsLogos, cmsCases] = engels
    ? [null, [], []]
    : await Promise.all([
        getHomepageContent().catch(() => null),
        getLogos().catch(() => []),
        getHomepageCases().catch(() => []),
      ]);

  const stats = engels
    ? HOME_EN.stats
    : cmsContent?.stats?.length
      ? cmsContent.stats.map((s) => ({ number: s.value, label: s.label }))
      : DEFAULT_STATS;

  // Een logo-item uit het CMS kan (nog) zonder afbeelding zijn opgeslagen; die
  // slaan we over in plaats van de hele pagina te laten struikelen.
  const cmsLogosMetBeeld = (cmsLogos ?? []).filter((l) => l.logo?.asset?.url);
  const logos = cmsLogosMetBeeld.length
    ? cmsLogosMetBeeld.map((l) => ({
        src: l.logo!.asset.url,
        alt: `${l.name} — klant van MeetingMasters Online`,
      }))
    : DEFAULT_LOGOS;

  const INSPIRATIE_ORDER = ["Event", "Virtual Office", "Games & Tools"];
  const normalizeLabel = (l: string) => l === "Remote Office" ? "Virtual Office" : l;

  // Beelden worden voorlopig lokaal beheerd (zie docs/website-visuals.md).
  // Deze override plaatst lokale beelden vóór de CMS-afbeelding; de teksten
  // blijven uit de CMS komen. Bij een latere migratie naar CMS vervalt dit.
  const LOCAL_INSPIRATIE_IMG: Record<string, string> = {
    "Event": "/images/home-inspiratie-strategiedag.webp",
    "Virtual Office": "/images/home-inspiratie-virtualoffice.webp",
  };

  const inspiratie = cmsCases?.length
    ? cmsCases
        .map((c) => ({
          label: normalizeLabel(c.label),
          title: c.title,
          body: c.summary ?? "",
          img: LOCAL_INSPIRATIE_IMG[normalizeLabel(c.label)] ?? c.image?.asset?.url ?? "/images/hero-1.webp",
          imgAlt: c.title,
          href: undefined as string | undefined,
        }))
        .sort((a, b) => {
          const ai = INSPIRATIE_ORDER.indexOf(a.label);
          const bi = INSPIRATIE_ORDER.indexOf(b.label);
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
        })
    : engels
      ? DEFAULT_INSPIRATIE.map((d, i) => ({ ...d, ...HOME_EN.inspiratie.items[i] }))
      : DEFAULT_INSPIRATIE;

  /** Het Engelse adres als die pagina bestaat, anders het Nederlandse. */
  const enHref = (nl: string) => (engels ? engelsPad(nl) ?? nl : nl);

  const overzichtKaarten = engels
    ? [
        { href: enHref("/nl/events"), ...HOME_EN.oplossingen.items.events, title: HOME_EN.oplossingen.items.events.headline, desc: HOME_EN.oplossingen.items.events.sub },
        { href: enHref("/nl/virtual-office"), ...HOME_EN.oplossingen.items["remote-office"], title: "A virtual office that works", desc: HOME_EN.oplossingen.items["remote-office"].sub },
        { href: enHref("/nl/games-tools"), ...HOME_EN.oplossingen.items["games-tools"], title: "Tools for more active participation", desc: HOME_EN.oplossingen.items["games-tools"].sub },
      ]
    : [
        { href: "/nl/events", label: "Events", title: "Bijzondere online bijeenkomsten", desc: "Als de standaard niet volstaat: van strategiedagen tot all-hands en community events." },
        { href: "/nl/virtual-office", label: "Virtueel Kantoor", title: "Een virtual office dat werkt", desc: "De plek voor je team om samen te komen — ook als niemand in vergadering zit." },
        { href: "/nl/games-tools", label: "Games & Tools", title: "Tools voor actievere deelname", desc: "Online escape rooms, onboarding games en slimme apps voor meer betrokkenheid." },
      ];

  // De zes regels staan als platte lijst in het taalblok: kop en toelichting
  // om en om. Zo hoeft er geen tweede structuur bijgehouden te worden.
  const spatialPunten = [0, 2, 4].map((i) => ({
    kop: t.spatialchat.punten[i],
    desc: t.spatialchat.punten[i + 1],
  }));

  // De zichtbare vragen en het schema komen uit dezelfde bron, zodat ze niet
  // uit elkaar kunnen lopen.
  const faqs = engels
    ? HOME_EN.faq
    : NL_FAQ;

  const heroHeadline = cmsContent?.heroHeadline ?? t.hero.headline;
  const heroSubline = cmsContent?.heroSubline ?? t.hero.subline;

  return (
    <>
      <JsonLd data={SCHEMA_ORGANIZATION} />
      {SCHEMA_SERVICES.map((s) => <JsonLd key={s.name} data={s} />)}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section>
        {/* Mobiel: geen vaste hoogte — de container groeit mee met de tekst,
            anders loopt de H1 bovenlangs het beeld uit. Vanaf sm het
            oorspronkelijke, vaste beeldformaat. */}
        <div className="relative w-full md:h-[44vw] md:min-h-[340px] md:max-h-[560px]">
          <HeroAchtergrond
            poster="/images/home-hero-poster.jpg"
            posterMobiel="/images/home-hero-poster-mobiel.webp"
            posterDesktop="/images/home-hero-poster-desktop.webp"
            bronnen={[{ src: "/videos/hero-boomerang.mp4", type: "video/mp4" }]}
            alt="MeetingMasters — online events en virtual office op SpatialChat"
            style={{ objectPosition: "center 82%", filter: "contrast(1.04) saturate(1.06)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1E1E]/75 via-[#2D2D2D]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[600px]">
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-5">
                  {heroHeadline.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < heroHeadline.split("\n").length - 1 && <br />}</span>
                  ))}
                </h1>
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed mb-7 sm:mb-8" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}>
                  {heroSubline.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < heroSubline.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={t.links.demo}
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    {t.hero.cta}
                  </Link>
                  <a
                    href="#inspiratie"
                    className="text-white text-sm font-semibold px-4 py-3 border border-white/30 rounded hover:border-white/70 transition-colors"
                  >
                    {t.hero.voorbeelden}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3-col overview card */}
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="md:-mt-12 bg-white shadow-lg rounded grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EBEBEB]">
            {overzichtKaarten.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-7 sm:p-8 group hover:bg-[#FFFBEE] transition-colors"
              >
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                <h3 className="text-base font-bold text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#EEBE3D] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#6E6E6E] leading-relaxed mb-3">{item.desc}</p>
                <span className="text-[#EEBE3D] text-xs font-bold transition-all group-hover:text-[#D4A835] group-hover:text-sm group-hover:tracking-wide">{t.oplossingen.meer}</span>
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
                <p className="text-xs text-[#434343] leading-snug">{s.label}</p>
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
              {t.oplossingen.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.oplossingen.titel}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s) => {
              // Tekst in de juiste taal; beeld, kleur en volgorde blijven gelijk.
              const en = engels ? HOME_EN.oplossingen.items[s.id] : undefined;
              const label = en?.label ?? s.label;
              const headline = en?.headline ?? s.headline;
              const bullets = en?.bullets ?? s.bullets;
              const cta = en?.cta ?? s.cta;
              const href = engels ? enHref(s.href) : s.href;
              return (
              <div key={s.id} className="rounded shadow-md overflow-hidden flex flex-col">
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <Image src={s.img} alt={s.imgAlt} fill className="object-cover" style={s.imgStyle} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#2D2D2D] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded">
                      {s.num} · {label}
                    </span>
                  </div>
                </div>
                <div className={`${s.bg} flex-1 flex flex-col p-7`}>
                  <h3 className="text-[#2D2D2D] font-bold text-lg mb-4 leading-snug">{headline}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#434343]">
                        <span className="text-[#2D2D2D] font-bold mt-0.5 flex-shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="bg-white text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#F5F5F5] transition-colors text-center"
                  >
                    {cta} →
                  </Link>
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── LOGO CARROUSEL ───────────────────────────────────────────── */}
      <section className="bg-[#F9F9F8] pt-14 pb-10 border-t border-[#EBEBEB] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-10 mb-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase">{t.klanten}</p>
            <Link href={t.klantenHref} className="text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              {t.klantenLink}
            </Link>
          </div>
        </div>
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

      {/* ── ESSENTIE ─────────────────────────────────────────────────── */}
      <section className="bg-white py-14 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/home-essentie.webp"
                alt="Vrouw achter een laptop in een MeetingMasters SpatialChat-sessie — collega's als kring rond 'Making more of Meetings'"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                {t.essentie.kicker}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.essentie.kop}
              </h2>
              <p className="text-[#434343] leading-relaxed mb-4">{t.essentie.alinea1}</p>
              <p className="text-[#434343] leading-relaxed mb-4">{t.essentie.alinea2}</p>
              <p className="text-[#2D2D2D] font-bold leading-relaxed mb-8">
                {t.essentie.quote}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={t.essentie.manifestHref}
                  download
                  className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
                >
                  {t.essentie.manifest}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPATIALCHAT ──────────────────────────────────────────────── */}
      <section className="bg-[#F0F0EA] py-14 border-t border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                {t.spatialchat.kicker}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-2">
                {t.spatialchat.kop}
              </h2>
              <p className="text-[#434343] mb-6">{t.spatialchat.onder}</p>
              <ul className="space-y-4 mb-8">
                {spatialPunten.map((p) => (
                  <li key={p.kop} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#434343] leading-relaxed">
                      <strong className="text-[#2D2D2D] font-bold">{p.kop}</strong>{" "}{p.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href={t.links.demo}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
              >
                {t.spatialchat.demo}
              </Link>
            </div>

            <YouTubeFacade
              videoId="kBHFSnQDhX4"
              poster="/images/spatialchat-video-poster.jpg"
              title="SpatialChat bij MeetingMasters"
            />
          </div>
        </div>
      </section>

      {/* ── INSPIRATIE ───────────────────────────────────────────────── */}
      <section id="inspiratie" className="bg-white py-14">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.inspiratie.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-3">
              {t.inspiratie.kop}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inspiratie.map((item) => (
              <Link
                key={item.label}
                href={item.href ?? enHref(CATEGORY_HREF[item.label] ?? "/nl/events")}
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
                    className="text-sm text-[#434343] leading-relaxed"
                    {...(item.body.includes('R@venHack') && { 'aria-label': item.body.replace('R@venHack', 'RavenHack') })}
                  >{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTABlock taal={taal} />

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
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
        </div>
      </section>
    </>
  );
}

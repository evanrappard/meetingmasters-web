import Link from "next/link";
import { SPATIALCHAT_EN } from "@/app/nl/technologie/spatialchat/tekst-en";
import type { Taal } from "@/lib/talen";
import HeroBeeld from "@/components/ui/HeroBeeld";

/**
 * De SpatialChat-pagina, in beide talen. Merknamen en certificeringen blijven
 * ongewijzigd; de ruimtetypen houden de namen die het platform er zelf aan
 * geeft, zodat een Engelse bezoeker ze terugvindt.
 */

const stats = [
  { value: "47%", label: "meer engagement dan videobellen" },
  { value: "66%", label: "hogere opkomst bij events" },
  { value: "94%", label: "tevredenheidscore deelnemers" },
  { value: "6M+", label: "gebruikers wereldwijd" },
];

const features = [
  {
    icon: "◎",
    title: "Ruimtelijk geluid",
    body: "Je hoort mensen die dichtbij zijn helder, en mensen die ver weg staan zachter — precies zoals in een echte zaal. Gesprekken overlappen niet.",
  },
  {
    icon: "⬡",
    title: "Vrije beweging",
    body: "Deelnemers lopen zelf naar elkaar toe. Geen breakout-rooms die door een host worden ingesteld — iedereen kiest zijn eigen gesprekspartner.",
  },
  {
    icon: "◻",
    title: "Custom ruimtes",
    body: "Elke ruimte heeft eigen afmetingen, achtergrond en functie. Van receptiehal tot breakout-lounge — ingericht op maat van het event.",
  },
  {
    icon: "⬜",
    title: "Huisstijl",
    body: "Achtergronden, logo's en kleuren volledig aanpasbaar. Deelnemers landen meteen in de visuele wereld van jouw organisatie.",
  },
  {
    icon: "◈",
    title: "Scherm delen & whiteboard",
    body: "Meerdere deelnemers kunnen tegelijk hun scherm delen. Geïntegreerde whiteboard voor live samenwerking.",
  },
  {
    icon: "⬛",
    title: "iFrame-integraties",
    body: "Miro, Google Docs, Kahoot, YouTube — live ingebouwd in de ruimte. Geen tabbladen wisselen, alles staat klaar.",
  },
];

const roomTypes = [
  {
    name: "Breakout-lounge",
    capacity: "≤ 50 personen",
    use: "Kleine groepsgesprekken, borrelsfeer, spontaan netwerken",
    color: "bg-[#EEBE3D]/10 border-[#EEBE3D]/30",
  },
  {
    name: "Webinar / filmzaal",
    capacity: "≤ 10.000 personen",
    use: "Grote plenaire sessies, keynotes, all-hands meetings",
    color: "bg-[#28A8AA]/10 border-[#28A8AA]/30",
  },
  {
    name: "Stage met iFrame",
    capacity: "≤ 50 personen",
    use: "Interactieve presentaties met live content (Miro, slides, video)",
    color: "bg-[#2D2D2D]/5 border-[#E0E0E0]",
  },
  {
    name: "Workspace",
    capacity: "≤ 12 personen",
    use: "Focusmodus, grid-view — voor overleggen zonder afleiding",
    color: "bg-[#2D2D2D]/5 border-[#E0E0E0]",
  },
];

const trustedBy = ["Stanford University", "Google", "McDonald's", "Accenture", "1.500+ organisaties"];

const NL = {
  hero: {
    kicker: "Technologie → SpatialChat",
    titel: "Videobellen dat voelt als echt ontmoeten.",
    intro:
      "SpatialChat is ons platform van keuze — omdat het als enige platform de dynamiek nabootst van een echte bijeenkomst. Je beweegt vrij, zoekt het gesprek zelf op en ervaart ruimte.",
    cta: "Plan een gesprek",
    hulp: "Hulp bij SpatialChat →",
    beeldAlt:
      "Deelnemer aan een SpatialChat-bijeenkomst logt in op een groot scherm en ziet de virtuele ruimte al voor zich",
  },
  waarom: {
    kicker: "Waarom SpatialChat",
    titel: "Niet een betere vergadering. Een andere ervaring.",
    alinea1:
      "Bij Zoom, Teams en Google Meet zit iedereen in een grid. Je krijgt één gesprek tegelijk, één scherm, één moderator. De vergadering bepaalt wie spreekt.",
    alinea2:
      "Bij SpatialChat bewegen deelnemers vrij door een digitale ruimte. Je loopt naar iemand toe — letterlijk. De afstand tussen avatars bepaalt wie je hoort. Gesprekken ontstaan vanzelf, net als bij een borrel of in een kantoor.",
    alinea3:
      "Dat verschil is niet cosmetisch. Het verandert de sociale dynamiek: minder formeel, meer spontaan, hogere betrokkenheid. Deelnemers nemen zelf initiatief in plaats van te wachten tot ze het woord krijgen.",
    traditioneel: "Traditionele videoconferentie",
    traditioneelPunten: [
      "— Vaste posities, geen beweging",
      "— Één spreker tegelijk",
      "— Host bepaalt de structuur",
    ],
    spatialPunten: [
      "+ Vrije beweging, zelf keuzes maken",
      "+ Meerdere gesprekken tegelijk",
      "+ Deelnemers bepalen hun eigen flow",
    ],
  },
  functies: { kicker: "Functionaliteiten", titel: "Alles wat een live bijeenkomst nodig heeft.", items: features },
  ruimtes: {
    kicker: "Ruimtetypen",
    titel: "Eén platform, meerdere formats.",
    onder:
      "SpatialChat heeft vier ruimtetypen — elk met een eigen logica en capaciteit. Binnen één event schakel je naadloos tussen plenair en breakout.",
    items: roomTypes,
  },
  partner: {
    kicker: "Officieel Channel Partner",
    titel: "Wij zijn de Nederlandse partner van SpatialChat.",
    body:
      "Sinds 2021 zijn wij officieel Channel Partner van SpatialChat voor Nederland. Dat betekent directe toegang tot de ontwikkelaars, vroeg inzicht in nieuwe functionaliteiten, en een team dat het platform door en door kent — niet vanuit een handleiding, maar vanuit honderden events.",
    trustedBy: trustedBy,
    certificering: "Certificering",
    soc: "SOC 2 Type II",
    privacy: "Databescherming & privacy",
  },
  cta: {
    titel: "Zelf ervaren wat SpatialChat doet met een groep?",
    onder: "Een pilotbijeenkomst laat in één uur zien waarom dit platform andere uitkomsten geeft.",
    knop: "Plan een gesprek",
    hulp: "Hulp bij SpatialChat →",
  },
  cijferBron: "Bron: SpatialChat platformdata 2024–2025",
  links: { advies: "/nl/expert-advies", hulp: "/nl/technologie/hulp", technologie: "/nl/technologie/tools" },
  terug: "← Terug naar Technologie",
};

export default function SpatialChatPagina({ taal = "nl" }: { taal?: Taal }) {
  const t = taal === "en" ? SPATIALCHAT_EN : NL;
  const cijfers = taal === "en" ? SPATIALCHAT_EN.stats : stats;
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <HeroBeeld
            src="/images/spatialchat-hero-v3.webp"
            alt={t.hero.beeldAlt}
            fill priority quality={90}
            className="object-cover object-right"
          />
          {/* De tekst staat links, het scherm rechts. De verloop naar rechts
              houdt de kop leesbaar zonder het beeld dicht te smeren. */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/75 lg:via-[#2D2D2D]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/85 to-transparent lg:hidden" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28">
          <div className="max-w-[560px]">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              {t.hero.kicker}
            </p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-6"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)" }}
            >
              {t.hero.titel}
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-[520px] mb-8">
              {t.hero.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={t.links.advies}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                {t.hero.cta}
              </Link>
              <Link
                href={t.links.hulp}
                className="border border-white/20 text-white/70 text-sm font-medium px-6 py-3 rounded hover:border-white/40 hover:text-white transition-colors"
              >
                {t.hero.hulp}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFDF5] border-b border-[#EBEBEB] py-12">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {cijfers.map((s) => (
              <div key={s.value} className="text-center md:text-left">
                <p
                  className="font-bold text-[#2D2D2D] tabular-nums leading-none mb-1"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                >
                  {s.value}
                </p>
                <p className="text-[#6E6E6E] text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[#8A857B] text-xs text-right mt-4">{t.cijferBron}</p>
        </div>
      </section>

      {/* ── WAAROM SPATIALCHAT ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                {t.waarom.kicker}
              </p>
              <h2
                className="font-bold text-[#2D2D2D] leading-tight text-balance mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
              >
                {t.waarom.titel}
              </h2>
              <div className="space-y-4 text-[#434343] text-[15px] leading-relaxed">
                <p>{t.waarom.alinea1}</p>
                <p>{t.waarom.alinea2}</p>
                <p>{t.waarom.alinea3}</p>
              </div>
            </div>

            {/* Visual comparison */}
            <div className="space-y-4">
              <div className="bg-[#F8F8F8] rounded-lg p-6 border border-[#EBEBEB]">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#BBBBBB] mb-4">
                  {t.waarom.traditioneel}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Array(9).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-[#DDDDDD] flex items-center justify-center"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#BBBBBB]" />
                    </div>
                  ))}
                </div>
                <ul className="text-[13px] text-[#6E6E6E] space-y-1">
                  {t.waarom.traditioneelPunten.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FFFBEE] rounded-lg p-6 border border-[#EEBE3D]/30">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#C9A030] mb-4">
                  SpatialChat
                </p>
                <div className="relative h-24 mb-4">
                  {[
                    { top: "10%", left: "15%", size: 28 },
                    { top: "30%", left: "35%", size: 32 },
                    { top: "55%", left: "22%", size: 26 },
                    { top: "15%", left: "62%", size: 30 },
                    { top: "50%", left: "55%", size: 28 },
                    { top: "65%", left: "78%", size: 24 },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-[#EEBE3D]"
                      style={{
                        top: c.top,
                        left: c.left,
                        width: c.size,
                        height: c.size,
                        opacity: 0.55 + i * 0.07,
                      }}
                    />
                  ))}
                  {/* Connection line suggestion */}
                  <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                    <line x1="21%" y1="26%" x2="37%" y2="46%" stroke="#EEBE3D" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3" />
                    <line x1="37%" y1="46%" x2="24%" y2="68%" stroke="#EEBE3D" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3" />
                  </svg>
                </div>
                <ul className="text-[13px] text-[#7A6B20] space-y-1">
                  {t.waarom.spatialPunten.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAFA] border-y border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[520px] mb-12">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              {t.functies.kicker}
            </p>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
            >
              {t.functies.titel}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Het icoon is taalloos en komt daarom altijd uit de Nederlandse
                lijst, op volgorde. */}
            {t.functies.items.map((f, i) => (
              <div key={f.title} className="bg-white rounded-lg p-6 border border-[#EBEBEB]">
                <span className="text-2xl text-[#EEBE3D] mb-4 block">{features[i]?.icon}</span>
                <h3 className="font-bold text-[#2D2D2D] text-[15px] mb-2">{f.title}</h3>
                <p className="text-[#6E6E6E] text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RUIMTETYPEN ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[520px] mb-12">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              {t.ruimtes.kicker}
            </p>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
            >
              {t.ruimtes.titel}
            </h2>
            <p className="text-[#434343] text-[15px] leading-relaxed mt-4">
              {t.ruimtes.onder}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {t.ruimtes.items.map((r) => (
              <div key={r.name} className={`rounded-lg p-6 border ${r.color}`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-[#2D2D2D] text-[16px]">{r.name}</h3>
                  <span className="text-[12px] font-medium text-[#6E6E6E] whitespace-nowrap pt-0.5">
                    {r.capacity}
                  </span>
                </div>
                <p className="text-[#434343] text-sm leading-relaxed">{r.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL PARTNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                {t.partner.kicker}
              </p>
              <h2
                className="font-bold text-white leading-tight text-balance mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
              >
                {t.partner.titel}
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-[520px] mb-6">
                {t.partner.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.partner.trustedBy.map((org) => (
                  <span
                    key={org}
                    className="bg-white/10 text-white/60 text-[12px] px-3 py-1 rounded-full"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:text-right">
              <div className="inline-block bg-[#EEBE3D]/10 border border-[#EEBE3D]/30 rounded-lg px-6 py-5 text-center">
                <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{t.partner.certificering}</p>
                <p className="text-white font-bold text-[15px]">{t.partner.soc}</p>
                <p className="text-white/50 text-[12px] mt-1">{t.partner.privacy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FFFDF5] border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2
                className="font-bold text-[#2D2D2D] leading-tight text-balance mb-3"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
              >
                {t.cta.titel}
              </h2>
              <p className="text-[#434343] text-[15px] leading-relaxed max-w-[480px]">
                {t.cta.onder}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link
                href={t.links.advies}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3.5 rounded hover:bg-[#D4A835] transition-colors text-center"
              >
                {t.hero.cta}
              </Link>
              <Link
                href={t.links.hulp}
                className="border border-[#EBEBEB] text-[#434343] text-sm font-medium px-7 py-3.5 rounded hover:border-[#CCCCCC] transition-colors text-center"
              >
                {t.hero.hulp}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK NAV ─────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-[#EBEBEB] py-4">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link
            href={t.links.technologie}
            className="text-[13px] text-[#6E6E6E] hover:text-[#434343] transition-colors"
          >
            {t.terug}
          </Link>
        </div>
      </div>
    </>
  );
}

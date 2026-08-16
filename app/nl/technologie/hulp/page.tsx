import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TechHulp from "@/components/ui/TechHulp";
import { JsonLd } from "@/components/ui/JsonLd";
import { CATEGORIEEN, TOOLS, VRAGEN } from "./vragen";

export const metadata: Metadata = {
  title: "Directe support voor je online meeting | MeetingMasters",
  description:
    "Technische problemen vlak voor een online bijeenkomst? Los het hier stap voor stap op — voor SpatialChat, Zoom, Zoom Events en Microsoft Teams. Met handleidingen en instellingen voor IT-afdelingen.",
};

const SUPPORT_NUMMER = "+31 6 33 03 47 07";

/**
 * De vier kleuren komen letterlijk uit de illustraties: geel #EEBE3D,
 * aqua #28A8AA, pistache #C4DED5 en rose #C74B60. Het vlak binnen de rand is
 * een lichte tint daarvan, zodat kaart en beeld één geheel vormen.
 */
const KLEUREN: Record<
  string,
  { rand: string; vlak: string; randHex: string; vlakHex: string; beeld: string }
> = {
  link: { rand: "border-[#EEBE3D]", vlak: "bg-[#FDF6E3]", randHex: "#EEBE3D", vlakHex: "#FDF6E3", beeld: "/images/hulp-link.webp" },
  audio: { rand: "border-[#28A8AA]", vlak: "bg-[#E7F5F5]", randHex: "#28A8AA", vlakHex: "#E7F5F5", beeld: "/images/hulp-audio.webp" },
  video: { rand: "border-[#A9CFC2]", vlak: "bg-[#EEF7F2]", randHex: "#A9CFC2", vlakHex: "#EEF7F2", beeld: "/images/hulp-video.webp" },
  overig: { rand: "border-[#C74B60]", vlak: "bg-[#FAEBEE]", randHex: "#C74B60", vlakHex: "#FAEBEE", beeld: "/images/hulp-overig.webp" },
};

const HANDLEIDINGEN = [
  {
    naam: "SpatialChat",
    logo: "spatialchat",
    href: "/downloads/spatialchat-instructies-deelnemer.pdf",
    soort: "Handleiding voor deelnemers (pdf)",
    actie: "Download",
  },
  {
    naam: "Zoom",
    logo: "zoom",
    href: "/downloads/zoom-instructies-deelnemer.pdf",
    soort: "Handleiding voor deelnemers (pdf)",
    actie: "Download",
  },
  {
    naam: "Microsoft Teams",
    logo: "teams",
    href: "https://support.microsoft.com/en-us/teams/platform/troubleshoot-in-microsoft-teams",
    soort: "Hulp van Microsoft zelf",
    actie: "Naar de hulppagina",
  },
];

const ALGEMENE_FAQ = [
  {
    q: "Het lukt niet en de bijeenkomst begint zo. Wat doe ik als eerste?",
    a: "Sluit de meeting helemaal af en klik opnieuw op de link uit je uitnodiging. Dat lost het merendeel op. Werkt dat niet, open de link dan in Google Chrome; die werkt met alle platforms waarmee wij werken. Helpt ook dat niet, herstart dan je computer — vervelend vlak voor een sessie, maar vaak sneller dan blijven proberen.",
  },
  {
    q: "Moet ik iets installeren om mee te doen?",
    a: "Voor SpatialChat niet: dat draait volledig in je browser. Voor Zoom en Teams kun je meestal ook via de browser meedoen, al werkt de app daar wat prettiger. Vraagt je organisatie om een installatie die niet lukt, dan zit er meestal een blokkade op beheerdersrechten — dan is je eigen IT-afdeling het snelste adres.",
  },
  {
    q: "Welke browser kan ik het beste gebruiken?",
    a: "Google Chrome. Edge en Firefox werken meestal ook. Safari geeft vaker problemen met microfoon en camera. Werk je op een computer van je organisatie, dan staat Chrome er vaak al op.",
  },
  {
    q: "Mijn verbinding hapert. Wat kan ik doen?",
    a: "Zet je camera even uit; beeld kost veruit de meeste bandbreedte en het geluid blijft dan meestal gewoon goed. Sluit programma's die je niet nodig hebt, zeker als er iets op de achtergrond synchroniseert. Zit je op wifi en kan het, ga dan dichter bij het punt zitten of gebruik een kabel.",
  },
  {
    q: "Ik zit op een computer van mijn werk en er wordt van alles geblokkeerd.",
    a: "Dat komt vaker voor dan je denkt: veel organisaties blokkeren onbekende domeinen of het gebruik van camera en microfoon in de browser. Dit kunnen wij niet voor je oplossen. Onderaan deze pagina staat per platform welke instellingen een IT-afdeling nodig heeft — die informatie kun je doorsturen.",
  },
];

const DEVICE_FAQ = [
  {
    q: "De browser vraagt niet om toestemming voor mijn microfoon of camera.",
    a: "Klik in je browser op het slotje of het icoontje links in de adresbalk. Daar staat per site of camera en microfoon toegestaan zijn. Zet ze op toestaan en ververs daarna de pagina.",
  },
  {
    q: "Ik heb toestemming gegeven, maar het werkt nog steeds niet.",
    a: "Dan blokkeert je besturingssysteem het waarschijnlijk nog. Op een Mac staat dat onder Systeeminstellingen → Privacy en beveiliging → Microfoon en Camera; je browser moet daar aangevinkt staan. Op Windows staat het onder Instellingen → Privacy en beveiliging → Microfoon en Camera.",
  },
  {
    q: "Mijn geluid komt uit de verkeerde speaker of microfoon.",
    a: "Kies in de instellingen van de meeting bewust het juiste apparaat, en doe dat ook in de geluidsinstellingen van je computer zelf. Draag je oortjes of een headset? Haal ze er even uit en stop ze opnieuw in; dan wordt het apparaat opnieuw herkend.",
  },
  {
    q: "Een andere toepassing gebruikt mijn camera al.",
    a: "Camera's kunnen maar door één programma tegelijk gebruikt worden. Sluit andere meetingprogramma's volledig af — ook wanneer ze alleen nog op de achtergrond draaien — en ververs daarna de pagina.",
  },
];

const SUPPORT_FAQ = [
  {
    q: "Is er tijdens de bijeenkomst iemand bereikbaar?",
    a: `Ja, bij bijeenkomsten die wij hosten. Vanaf een half uur voor aanvang en tijdens de hele sessie staat er een servicenummer open: ${SUPPORT_NUMMER}. Loop je vast, bel dan gerust — je stoort niet, daar zijn we voor.`,
  },
  {
    q: "Wat doet een tech host precies?",
    a: "Die bestuurt de techniek terwijl de bijeenkomst loopt: het platform, schermdelen, breakouts, beeld en geluid. Loopt een deelnemer vast, dan wordt die direct geholpen zonder dat de rest van de groep hoeft te wachten.",
  },
  {
    q: "Kunnen deelnemers vooraf oefenen?",
    a: "Ja. Bij een begeleide bijeenkomst plannen we een testmoment waarop deelnemers hun beeld en geluid kunnen controleren en even door de ruimte kunnen lopen. Dat scheelt de meeste problemen op de dag zelf.",
  },
  {
    q: "Mijn bijeenkomst wordt niet door MeetingMasters gehost. Kunnen jullie helpen?",
    a: "Dan helpen we je hier op weg met de stappen op deze pagina en met de handleidingen hierboven. Voor persoonlijke ondersteuning tijdens een sessie moet je bij de organisator van die bijeenkomst zijn.",
  },
];

/**
 * Alles hieronder staat op de documentatie van de leveranciers zelf, en is
 * daar gecontroleerd. Geen losse blogs of forums: een beheerder moet het
 * kunnen verifiëren, en de bron moet meebewegen als er iets verandert.
 */
const IT_PLATFORMS = [
  {
    naam: "SpatialChat",
    logo: "spatialchat",
    kern: "Draait volledig in de browser; deelnemers installeren niets. Data staat bij AWS in Dublin.",
    punten: [
      "Versleuteld: TLS 1.2 onderweg, AES-256 in opslag.",
      "Op de allowlist: spatial.chat en *.spatial.chat, plus de media-endpoints van LiveKit en Agora (TCP 443, UDP 3478 en 50000–60000).",
      "GDPR-conform, met een verwerkersovereenkomst die getekend kan worden.",
    ],
    links: [
      { label: "Instellingen voor bedrijfsnetwerken", href: "https://how.spatial.chat/help/control-and-management/settings-for-corporate-network/" },
      { label: "Security en privacy", href: "https://how.spatial.chat/help/control-and-management/security-and-privacy/" },
    ],
  },
  {
    naam: "Zoom",
    logo: "zoom",
    kern: "Zoom publiceert de complete firewall- en proxyconfiguratie, inclusief IP-reeksen per dienst.",
    punten: [
      "Firewallregels per dienst, met IP-reeksen in IPv4 en IPv6, als downloadbare lijst.",
      "Protocollen en poorten per onderdeel, plus uitleg bij de melding “Network error, please try again”.",
      "Certificeringen en attestaties staan gebundeld in het Trust Center.",
    ],
    links: [
      { label: "Netwerkfirewall- en proxyinstellingen", href: "https://support.zoom.com/hc/nl/article?id=zm_kb&sysparm_article=KB0060549" },
      { label: "Zoom Trust Center", href: "https://www.zoom.com/en/trust/" },
    ],
  },
  {
    naam: "Microsoft Teams",
    logo: "teams",
    kern: "Draait op je bestaande Microsoft 365-omgeving; is die al ingericht, dan is Teams meestal ook geregeld.",
    punten: [
      "Open de TCP-poorten en IP-adressen uit de Microsoft 365-lijst met URL's en IP-reeksen.",
      "Microsoft adviseert split-tunnel VPN: Teams-verkeer buiten de VPN om, dat scheelt merkbaar in kwaliteit.",
      "WebSocket-verkeer toestaan, anders valt Teams terug op langzamer polling-verkeer.",
    ],
    links: [
      { label: "Netwerk voorbereiden op Teams", href: "https://learn.microsoft.com/en-us/microsoftteams/prepare-network" },
      { label: "Problemen oplossen in Teams", href: "https://support.microsoft.com/en-us/teams/platform/troubleshoot-in-microsoft-teams" },
    ],
  },
];

const alleFaq = [...ALGEMENE_FAQ, ...DEVICE_FAQ, ...SUPPORT_FAQ];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: alleFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqLijst({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[#EDEDEA]">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-[#EDEDEA] py-4">
          <summary className="flex justify-between items-start gap-4 list-none cursor-pointer">
            <span className="font-semibold text-[#2D2D2D] text-[15px] leading-snug">{f.q}</span>
            <span className="text-[#28A8AA] font-bold text-lg leading-none group-open:rotate-45 transition-transform shrink-0" aria-hidden>+</span>
          </summary>
          <p className="text-sm text-[#555555] leading-relaxed mt-3">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function HulpPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ──────────────────────────────────────────────────────
          Het laptopscherm in de foto is licht; de vier vlakken staan daar
          bovenop. Beeld is 2000×1125, het scherm zit op ~48%–90% breed en
          ~15%–60% hoog. Onder lg vervalt de overlay en nemen de blokken in
          de sectie hieronder het over. */}
      <section className="relative bg-[#F3EFE7] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tech-hulp-hero-v2.webp"
            alt="Deelnemer achter een laptop, klaar voor een online bijeenkomst"
            fill priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 lg:via-white/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent lg:hidden" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-14 md:py-20 lg:py-0 lg:aspect-[16/9] lg:max-h-[600px] lg:flex lg:items-center">
          <div className="max-w-[540px] lg:max-w-[390px]">
            <h1
              className="font-bold text-[#2D2D2D] leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 2.9rem)" }}
            >
              Directe support voor je online meeting.
            </h1>
            <p className="text-[#545454] text-base leading-relaxed mb-7">
              Technische problemen en je moet een online bijeenkomst in? Volg deze stappen.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#hulp"
                className="bg-[#D4A835] text-white text-sm font-bold px-7 py-3 rounded hover:bg-[#BE9429] transition-colors"
              >
                Support
              </a>
              <Link
                href="/nl/technologie/tools"
                className="text-[#2D2D2D] text-sm font-semibold px-6 py-3 border border-[#C9C9C4] rounded hover:border-[#2D2D2D] transition-colors"
              >
                Meer weten per tool
              </Link>
            </div>
          </div>

          {/* De vier vlakken, in het lichte laptopscherm. */}
          <div className="hidden lg:block absolute left-[50%] top-[17%] w-[38%] h-[42%]">
            <div className="h-full flex flex-col justify-center gap-2">
              <p className="text-[#6B6455] text-[13px] font-bold mb-1">Hulp nodig? Klik hieronder.</p>
              {CATEGORIEEN.map((c) => {
                const k = KLEUREN[c.id];
                return (
                  <a
                    key={c.id}
                    href="#hulp"
                    className="group block rounded-md border-2 px-3.5 py-2 transition-transform hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2D2D]/30"
                    style={{ borderColor: k.randHex, background: k.vlakHex }}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[#2D2D2D] text-[14px] font-bold leading-tight">{c.label}</span>
                      <span className="text-[#2D2D2D]/40 group-hover:text-[#2D2D2D] transition-colors text-sm" aria-hidden>→</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT IS JE PROBLEEM? ──────────────────────────────────────── */}
      <section id="hulp" className="bg-white py-12 md:py-16 scroll-mt-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[880px]">
            <TechHulp categorieen={CATEGORIEEN} tools={TOOLS} vragen={VRAGEN} kleuren={KLEUREN} />
          </div>
        </div>
      </section>

      {/* ── HANDLEIDINGEN ────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Handleiding stap-voor-stap
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Rustig doornemen vóór je bijeenkomst, of doorsturen naar je deelnemers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {HANDLEIDINGEN.map((h) => (
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
                <p className="text-[#545454] text-sm mt-6">{h.soort}</p>
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
              Veelgestelde vragen
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Wat we het vaakst horen, in drie groepen: het algemene gedoe, de instellingen op je eigen
              apparaat, en de hulp die er tijdens een bijeenkomst is.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 max-w-[1040px]">
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">Technische problemen in het algemeen</h3>
              <FaqLijst items={ALGEMENE_FAQ} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">Instellingen op je eigen apparaat</h3>
              <FaqLijst items={DEVICE_FAQ} />
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">Hulp tijdens de bijeenkomst</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                <FaqLijst items={SUPPORT_FAQ.slice(0, 2)} />
                <FaqLijst items={SUPPORT_FAQ.slice(2)} />
              </div>

              <div className="mt-7 rounded-lg bg-[#FDF6E3] border border-[#EEBE3D] px-6 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div>
                  <p className="text-[10px] font-bold text-[#8A7328] uppercase tracking-wide mb-1">
                    Tijdens bijeenkomsten die wij hosten
                  </p>
                  <a
                    href={`tel:${SUPPORT_NUMMER.replace(/\s/g, "")}`}
                    className="text-[#2D2D2D] text-xl font-bold hover:underline"
                  >
                    {SUPPORT_NUMMER}
                  </a>
                </div>
                <p className="text-sm text-[#6B5A28] leading-relaxed flex-1 min-w-[240px]">
                  Bereikbaar vanaf een half uur voor aanvang en tijdens de hele sessie. Je stoort niet —
                  daar zijn we voor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTELLINGEN, VOOR ORGANISATIES ──────────────────────────── */}
      <section className="bg-[#28A8AA] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-9">
            <p className="text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Voor organisaties</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">Instellingen</h2>
            <p className="text-white/85 leading-relaxed mb-3">
              De benodigde instellingen voor deelname aan een online meeting verschillen per platform, per
              organisatie en per device.
            </p>
            <p className="text-white/85 leading-relaxed">
              Loopt een deelnemer vast op het bedrijfsnetwerk, dan is dat vrijwel altijd op te lossen door de
              IT-afdeling — maar die heeft wel de juiste gegevens nodig. Hieronder staat per platform waar die
              officieel te vinden zijn. Alles verwijst naar de documentatie van de leverancier zelf, zodat je
              beheerder het kan verifiëren en het meebeweegt als er iets verandert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {IT_PLATFORMS.map((p) => (
              <article key={p.logo} className="rounded-lg bg-white p-6 flex flex-col">
                <img
                  src={`/images/logos/tools/${p.logo}.webp`}
                  alt={p.naam}
                  width={440}
                  height={176}
                  loading="lazy"
                  className="h-10 w-auto max-w-full object-contain object-left"
                />
                <p className="text-[15px] text-[#2D2D2D] font-semibold leading-snug mt-5 mb-4">{p.kern}</p>
                <ul className="space-y-2.5 flex-1">
                  {p.punten.map((t) => (
                    <li key={t} className="flex gap-2.5 items-start text-sm text-[#545454] leading-relaxed">
                      <span className="text-[#28A8AA] shrink-0 mt-0.5" aria-hidden>✓</span>
                      {t}
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
              </article>
            ))}
          </div>

          <p className="text-white/70 text-[13px] leading-relaxed mt-8 max-w-[780px]">
            Dit zijn onze eigen inzichten, opgedaan in de praktijk. Of iets werkt, hangt daarnaast af van je
            apparaat en van de instellingen binnen je organisatie — dat kunnen wij niet overzien, en niet
            alles kunnen wij dus oplossen. Vragen over een platform zelf beantwoordt de leverancier het best;
            ligt het aan je telefoon, laptop of computer, dan helpt je eigen IT-servicedesk je verder.
          </p>
        </div>
      </section>
    </>
  );
}

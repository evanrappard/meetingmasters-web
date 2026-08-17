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
  audio: { rand: "border-[#28A8AA]", vlak: "bg-[#D3EDED]", randHex: "#28A8AA", vlakHex: "#D3EDED", beeld: "/images/hulp-audio.webp" },
  video: { rand: "border-[#8FBFA6]", vlak: "bg-[#DCEEE2]", randHex: "#8FBFA6", vlakHex: "#DCEEE2", beeld: "/images/hulp-video.webp" },
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
    a: "Ja, bij bijeenkomsten die wij hosten. Vanaf een half uur voor aanvang en tijdens de hele sessie staat er iemand klaar. Hoe je die bereikt, staat in je uitnodiging.",
  },
  {
    q: "Wat doet een tech host?",
    a: "De tech host bestuurt de techniek: het platform, schermdelen, breakouts, beeld en geluid. Die zorgt dat alles blijft werken, ook als er onderweg iets misgaat.",
  },
  {
    q: "En wat doet een Meeting Master?",
    a: "De Meeting Master richt zich op de mensen in plaats van op de techniek. Die ontvangt deelnemers, helpt wie vastloopt en houdt de ruimte gastvrij — zodat niemand hoeft te bedenken hoe het ook alweer werkt.",
  },
  {
    q: "Loop ik de bijeenkomst mis als ik hulp nodig heb?",
    a: "Nee. Je wordt apart geholpen terwijl de rest doorgaat, en daarna weer teruggezet in de sessie. De groep merkt er niets van.",
  },
  {
    q: "Kan er iemand meekijken als het bij mij niet lukt?",
    a: "Tijdens een begeleide bijeenkomst wel. We kijken mee met wat jij ziet en lopen samen de stappen door. Dat gaat meestal sneller dan zelf blijven zoeken.",
  },
  {
    q: "Wat gebeurt er als het platform zelf uitvalt?",
    a: "Dan schakelen we. Bij bijeenkomsten die wij begeleiden ligt er een terugvalscenario klaar, en deelnemers krijgen bericht via het kanaal waarop ze zijn uitgenodigd.",
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
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        {/* Achtergrondvideo: geluidloos, herhaalt zichzelf, start meteen.
            playsInline houdt hem op iOS in de pagina in plaats van fullscreen. */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 88%" }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/tech-hulp-hero-poster.jpg"
          aria-hidden
        >
          <source src="/videos/tech-hulp-hero.webm" type="video/webm" />
          <source src="/videos/tech-hulp-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/85 via-[#2D2D2D]/45 to-[#2D2D2D]/15" />

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-20 md:py-28 lg:py-32 min-h-[430px] md:min-h-[520px] flex items-center">
          <div className="max-w-[620px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Helpdesk</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 2.9rem)" }}
            >
              Directe support voor je online meeting.
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              Technische problemen en je moet een online bijeenkomst in?
              <br />
              Hieronder helpen we je stap voor stap verder.
            </p>
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
                <FaqLijst items={SUPPORT_FAQ.slice(0, 3)} />
                <FaqLijst items={SUPPORT_FAQ.slice(3)} />
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
              Instellingen voor organisaties
            </h2>
            <p className="text-[#545454] leading-relaxed">
              De benodigde instellingen voor deelname aan een online meeting verschillen per platform, per organisatie en per device.
            </p>
          </div>

          {/* items-start: anders groeit de hele rij mee zodra er één opengaat. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4">
            {IT_PLATFORMS.map((p) => (
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
                      <li key={punt} className="flex gap-2.5 items-start text-sm text-[#545454] leading-relaxed">
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
            <p className="text-[#545454] leading-relaxed max-w-[720px]">
              Wil je weten waarmee we werken en waarom?{" "}
              <Link href="/nl/technologie/tools" className="text-[#28A8AA] font-semibold hover:underline">
                Bekijk de meeting platforms
              </Link>{" "}
              — met per platform waar het sterk in is, en de tools die we ermee combineren.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

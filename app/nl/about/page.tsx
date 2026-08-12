import type { Metadata } from "next";
import Image from "next/image";
import CTABlock from "@/components/ui/CTABlock";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Over ons | MeetingMasters",
  description:
    "Sinds 2020 brengen wij oprecht contact terug in online bijeenkomsten — op de menselijke maat, gericht op verbinding. Lees ons manifest. Want hoe we elkaar ontmoeten, maakt uit.",
};

const klantLogos = [
  { src: "/images/logos/belastingdienst.webp", alt: "Belastingdienst" },
  { src: "/images/logos/ing.webp", alt: "ING" },
  { src: "/images/logos/bergman-clinics.webp", alt: "Bergman Clinics" },
  { src: "/images/logos/pbcf.webp", alt: "Prins Bernhard Cultuurfonds" },
  { src: "/images/logos/amsterdam.webp", alt: "Gemeente Amsterdam" },
  { src: "/images/logos/gemeente-utrecht.webp", alt: "Gemeente Utrecht" },
  { src: "/images/logos/vitens.webp", alt: "Vitens" },
  { src: "/images/logos/energie-nederland.webp", alt: "Energie Nederland" },
  { src: "/images/logos/pharmaccess.webp", alt: "PharmAccess" },
  { src: "/images/logos/provincie-utrecht.webp", alt: "Provincie Utrecht" },
];

// Vooraf: een keten die van vraag naar afgebouwde ruimte loopt.
const rolesVooraf = [
  { name: "Strategie", desc: "Wat is de context van de bijeenkomst, en wat moet die opleveren — op inhoud én op relatie? Daar denken we vanaf het begin in mee." },
  { name: "Concept", desc: "Hoe verrassend mag het worden? We adviseren over opzet, formats en platformkeuze, en bedenken concepten die interactie uitlokken en ideeën richting geven." },
  { name: "Vorm", desc: "De vorm bepaalt de sfeer, en daarmee de interactie. Daarom ontwerpen we ook hoe een bijeenkomst eruitziet — in SpatialChat is dat zelfs doorslaggevend." },
  { name: "Bouw", desc: "Van wachtkamer tot uitgang bouwen we de hele ruimte, zodat deelnemers vanzelf hun weg door het programma vinden." },
  { name: "Projectmanagement", desc: "Van intake tot evaluatie. Binnen de tijd, binnen het budget en — net zo belangrijk — binnen de comfortzone van iedereen die meedoet." },
];

// Op de dag zelf: rollen die naast elkaar staan, per bijeenkomst samengesteld.
const rolesTijdens = [
  { name: "Facilitator", desc: "Begeleidt het programma en de werkvormen, voor goede interactie en een soepel verloop." },
  { name: "Moderator", desc: "Leidt het gesprek in goede banen, bewaakt de tijd en geeft het woord." },
  { name: "Online host", desc: "Ontvangt en verwelkomt deelnemers en houdt de digitale ruimte gastvrij." },
  { name: "Live host", desc: "Presenteert en houdt tempo en energie in de uitzending." },
  { name: "Tech host", desc: "Bestuurt de techniek: platform, schermdeling, breakouts, beeld en geluid." },
  { name: "In-meeting support", desc: "Vangt vragen en haperingen van deelnemers direct op, zodat niemand vastloopt." },
];

const aboutFaq = [
  { q: "Wat doet MeetingMasters?", a: "MeetingMasters is een full-service bureau van online meeting professionals. Sinds 2020 ontwerpen en begeleiden wij online, hybride en fysieke bijeenkomsten — van meetings en events tot virtuele kantoren — waarin echte interactie en oprecht contact centraal staan." },
  { q: "Wat zijn online meeting professionals?", a: "Online meeting professionals ontwerpen, organiseren en begeleiden online bijeenkomsten. Bij MeetingMasters beginnen we niet bij de techniek, maar bij het doel en de deelnemers. Pas daarna kiezen we de juiste werkvorm, begeleiding en het platform." },
  { q: "Sinds wanneer bestaat MeetingMasters?", a: "MeetingMasters Online is opgericht in 2020 en is gebouwd op ruim twintig jaar ervaring in strategie en participatie." },
  { q: "Wat maakt MeetingMasters anders?", a: "Mensgericht by design: we ontwerpen vanuit wat mensen moeten ervaren, leren, bespreken of besluiten. Strategie én uitvoering onder één dak, en altijd de mens centraal — techniek is voor ons een middel, geen doel." },
  { q: "Kunnen ook grote en complexe bijeenkomsten interactief zijn?", a: "Ja. Meetings zijn vooral een menselijke uitdaging. Wij ontwerpen op interactie. Vertrouw op de kennis, de professionele begeleiding en de technische ondersteuning van de Meeting Masters. Juist bij dit soort bijeenkomsten maakt goede voorbereiding en live ondersteuning het verschil." },
  { q: "Hoe bereiden jullie een online bijeenkomst voor?", a: "Een goede voorbereiding is cruciaal. Wij plannen en specificeren alles tot op de minuut, want wie werkelijk goed voorbereid is, kan veel flexibeler afwijken als dat nodig is." },
];

const aboutFaqMore = [
  { q: "Gaan goede online meetings over technologie?", a: "Nee. Digitaal of hybride: goede meetings gaan niet over technologie, maar over contact en betrokkenheid. En dat start al bij het design en het concept van de bijeenkomst, niet pas bij de uitvoering." },
  { q: "Wat gebeurt er als een bijeenkomst toch anders loopt?", a: "Als de zaken even anders lopen, komt het aan op goed inzicht in de doelstellingen, kennis van videoplatforms en slim en snel schakelen. Onze Meeting Masters zijn opgeleid om gedurende het hele proces — gepland én ongepland — deelnemers en organisatoren te begeleiden en te ontzorgen. Dat geeft rust, focus en een veel prettigere sfeer." },
  { q: "Met welke platforms werken jullie?", a: "Onder andere Zoom, Zoom Events, Microsoft Teams en SpatialChat (ons voorkeursplatform). Welk platform het beste past, volgt uit het doel van de bijeenkomst en de gewenste ervaring voor deelnemers." },
  { q: "Wie is de oprichter van MeetingMasters?", a: "Emilie van Rappard, een ervaren merk- en participatiestrateeg. Ze werkte lang bij KLM, daarna zelfstandig via adviesbureau ismu en richtte MeetingMasters Online op in 2020." },
  { q: "Wie zijn de Meeting Masters?", a: "De Meeting Masters zijn studenten, geselecteerd op initiatief, klantvriendelijkheid en interesse in het digitale domein. Ze zijn communicatief en analytisch, kunnen goed uitleggen en spreken verschillende talen. Iedere Meeting Master wordt getraind aan de MeetingMasters Academy." },
  { q: "Hoe begin ik met MeetingMasters?", a: "Elk traject start met een intake waarin het doel en de context van een bijeenkomst worden doorgenomen. We maken altijd een voorstel op maat — vraag vrijblijvend advies aan en we denken graag mee." },
];

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...aboutFaq, ...aboutFaqMore].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <JsonLd data={aboutFaqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px] overflow-hidden">
          <Image
            src="/images/about-hero.webp"
            alt="Iemand in een online bijeenkomst van MeetingMasters — verbinding maken, waar je ook bent"
            fill priority
            className="object-cover"
            style={{ objectPosition: "62% 58%", transform: "scale(1.16)", transformOrigin: "64% 60%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[620px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Over ons</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Als mensen samenkomen, ontstaat iets moois.
                </h1>
                <p className="text-white text-lg leading-relaxed" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  We leren van elkaar. We versterken elkaar. We ontwikkelen.
                  <br />
                  Maar dat gaat niet vanzelf.
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
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wie we zijn</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Meesters in online samenkomen.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                MeetingMasters is een full-service bureau voor bijzondere online bijeenkomsten.
                Sinds 2020 brengen we vernieuwing in meetings, events en thuiswerken — een jong,
                gespecialiseerd bureau, gebouwd op twintig jaar ervaring in strategie en
                participatie.
              </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wat ons drijft</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Alles draait om verbinding.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                Wij geloven dat menselijk contact de basis vormt van alle groei en ontwikkeling.
                Vanuit dit perspectief zetten wij ons in om organisaties veerkrachtiger te maken en
                de verbindende cultuur te verrijken.
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
              <p className="text-[#EEBE3D] text-xs font-bold tracking-widest uppercase mb-4">Ons manifest</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-5">
                Hier staan we voor.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-7">
                Ons manifest is in 2021 met en door MeetingMasters gemaakt: onze overtuiging over
                waarom samenkomen ertoe doet. En die houdt nog steeds.
              </p>
              <blockquote className="border-l-2 border-[#EEBE3D] pl-5 mb-8">
                <p className="text-white text-xl leading-relaxed italic">
                  &ldquo;Wij zijn bewaarders van het menselijk perspectief: bewakers van
                  betrokkenheid, laagdrempeligheid en oprecht contact.&rdquo;
                </p>
              </blockquote>
              <a
                href="/manifest-meetingmasters.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#EEBE3D] text-sm font-bold hover:text-[#F5C93D] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                </svg>
                Download het manifest (PDF)
              </a>
            </div>
            <div>
              <YouTubeEmbed videoId="Cling07_Kas" title="Het MeetingMasters Manifest" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DE MENSEN ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-12 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">De mensen</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              Mensen maken meetings.
            </h2>
            <p className="text-[#545454] text-lg leading-relaxed">
              MeetingMasters heeft een kleine, ervaren backoffice, een ruim netwerk van partners en
              een stevige pool met hoogopgeleide Masters. We zijn continu in ontwikkeling. Samen
              maken we meer van meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Oprichter */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-5">
                <Image src="/images/emilie-ad-v2.webp" alt="Emilie van Rappard, oprichter van MeetingMasters, tijdens een online sessie" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 560px" />
              </div>
              <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">Oprichter</p>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Emilie van Rappard</h3>
              <p className="text-[#545454] leading-relaxed mb-4">
                Als ervaren merk- en participatiestrateeg begeleidt Emilie van Rappard nationaal en
                internationaal groepen om samen tot nieuwe richtingen te komen. Vanuit de principes
                van Genuine Contact en de methodologie van Liberating Structures zoekt ze naar de
                verbinding tussen mensen en organisaties. Onsite en online. In 2020 richtte ze
                MeetingMasters Online op.
              </p>
              <a
                href="https://www.linkedin.com/in/emilievanrappard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#28A8AA] text-sm font-bold hover:underline"
              >
                Connect op LinkedIn →
              </a>
            </div>

            {/* Team */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-5">
                <Image src="/images/team-mm.webp" alt="Het team van MeetingMasters — de Meeting Masters" fill className="object-cover" sizes="(max-width: 768px) 100vw, 560px" />
              </div>
              <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">Het team</p>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">De Meeting Masters</h3>
              <p className="text-[#545454] leading-relaxed">
                Meeting Masters zijn gericht op het faciliteren van contact. De Meeting Masters zijn
                student, geselecteerd op initiatief, klantvriendelijkheid en interesse in het
                digitale domein. Ze zijn communicatief, analytisch, kunnen goed uitleggen en spreken
                verschillende talen. Iedere Meeting Master wordt getraind aan de MeetingMasters
                Academy.
              </p>
              <a
                href="https://nl.linkedin.com/company/meetingmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#28A8AA] text-sm font-bold hover:underline"
              >
                Volg ons op LinkedIn →
              </a>
            </div>
          </div>

          {/* Rollen — vooraf en op de dag zelf */}
          <div className="mt-14 pt-12 border-t border-[#EBEBEB]">
            <div className="max-w-[760px] mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Onze rollen</p>
              <h3 className="text-2xl font-bold text-[#2D2D2D] leading-snug mb-3">
                Wat wij doen — vooraf en op de dag zelf.
              </h3>
              <p className="text-[#545454] leading-relaxed">
                Van strategie tot concept. Van online meeting support tot evaluatie en
                vervolgstappen. Wij zoeken altijd naar maximale betrokkenheid om tot de
                beste resultaten te komen, en zetten scherp in op optimale inzet van
                íeders energie, tijd en budget.
              </p>
            </div>

            {/* Voor de bijeenkomst */}
            <div className="mb-12">
              <div className="max-w-[760px] mb-6">
                <h4 className="text-lg font-bold text-[#2D2D2D] mb-1.5">Voor de bijeenkomst</h4>
                <p className="text-[#545454] leading-relaxed">
                  Van de vraag achter de vraag tot een ruimte die klaarstaat.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {rolesVooraf.map((r) => (
                  <div key={r.name}>
                    <span className="block h-[3px] w-8 bg-[#EEBE3D] rounded-full mb-3" />
                    <h5 className="text-base font-bold text-[#2D2D2D] mb-1.5">{r.name}</h5>
                    <p className="text-sm text-[#545454] leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tijdens de bijeenkomst */}
            <div>
              <div className="max-w-[760px] mb-6">
                <h4 className="text-lg font-bold text-[#2D2D2D] mb-1.5">Tijdens de bijeenkomst</h4>
                <p className="text-[#545454] leading-relaxed">
                  Afhankelijk van de bijeenkomst zetten we de juiste rollen in — voor een soepel
                  verloop, echte interactie en deelnemers die zich op hun gemak voelen.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {rolesTijdens.map((r) => (
                  <div key={r.name}>
                    <span className="block h-[3px] w-8 bg-[#EEBE3D] rounded-full mb-3" />
                    <h5 className="text-base font-bold text-[#2D2D2D] mb-1.5">{r.name}</h5>
                    <p className="text-sm text-[#545454] leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              {/* Afsluiter: bindt de twee groepen aan elkaar en wijst vooruit. */}
              <p className="max-w-[760px] mt-10 text-[#545454] leading-relaxed">
                De kracht van een bijeenkomst zit in het vervolg: vooraf bedacht, tijdens
                besproken, na afloop opgevolgd — met opnames, verslagen en een gesprek over
                hoe nu verder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOBAND ── */}
      <section className="bg-[#F9F9F8] py-14 border-t border-[#EBEBEB] overflow-hidden">
        <p className="text-[#28A8AA] text-base font-bold mb-7 max-w-content mx-auto px-6 lg:px-10">
          Wij maken ontmoetingen — samen met onze klanten
        </p>
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
            Veelgestelde vragen over MeetingMasters
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutFaq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">Meer antwoorden?</span>
              <span className="hidden group-open:inline">Minder antwoorden</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {aboutFaqMore.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />
    </div>
  );
}

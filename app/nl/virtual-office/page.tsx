import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Virtueel kantoor voor teams (Virtual Office) | MeetingMasters",
  description:
    "Een virtueel kantoor is de online plek waar je team elkaar weer tegenkomt — ook buiten meetings. Drie manieren om binnen te komen: boek een zaaltje, huur een instapklaar kantoor of bouw er een vanuit je fundament.",
};

const benefits = [
  { kpi: "Minder verloop", body: "Mensen die zich gezien en verbonden voelen, blijven langer. Een virtueel kantoor brengt het informele contact en het gevoel van erbij horen terug — juist voor wie veel thuiswerkt." },
  { kpi: "Minder m² kantoor", body: "Met een online thuisbasis hoef je geen fysiek kantoor op volle sterkte aan te houden. Bespaar op vierkante meters en reistijd, en groei flexibel mee." },
  { kpi: "Meer samenhang & effectiviteit", body: "Kortere lijnen, sneller schakelen en alle mensen, kennis en informatie op één plek. Minder afstemmingsverlies, meer gedaan." },
];

// Beelden zijn voorlopig placeholders — worden vervangen door eigen visuals.
const scenarios = [
  { title: "Online clubhuis", body: "Een informele thuisbasis waar collega's elkaar tegenkomen — de digitale variant van de koffiehoek.", img: "/images/vo-clubhuis.webp" },
  { title: "Online museum", body: "Kennis, projecten of je organisatieverhaal centraal en overzichtelijk, om doorheen te lopen.", img: "/images/vo-museum.webp" },
  { title: "Thuisbasis hybride team", body: "Voor teams die deels thuis, deels op kantoor werken en elkaar zelden allemaal zien.", img: "/images/vo-thuisbasis.webp" },
  { title: "Internationale hub", body: "Eén plek voor mensen in verschillende landen en tijdzones, zonder reizen.", img: "/images/vo-hub.webp" },
  { title: "Community-ruimte", body: "Een vaste ontmoetingsplek voor leden, een netwerk of een samenwerkingsverband.", img: "/images/vo-community.webp" },
  { title: "Project- of programmaruimte", body: "Een gezamenlijke basis waar een project- of programmagroep samenkomt en alles bij elkaar staat.", img: "/images/vo-project.webp" },
];

const ingangen = [
  {
    tag: "Even uitproberen",
    title: "Boek een zaaltje",
    desc: "Een leuke, andersoortige meeting met een kleine groep — zonder heel kantoor of project. Laagdrempelig, niet duur, wel verrassend.",
    href: "/nl/virtual-office/zaaltje",
  },
  {
    tag: "Instapklaar",
    title: "Huur een kantoor",
    desc: "Je mist de plek waar je elkaar zomaar tegenkomt. Huur een ingericht, levend kantoor en trek er meteen in.",
    href: "/nl/virtual-office/huren",
  },
  {
    tag: "Als het ertoe doet",
    title: "Bouw vanuit het fundament",
    desc: "Soms gaat het niet om het kantoor, maar om hoe je wilt samenwerken. Je bouwt vanuit je waarden — het kantoor is de uitkomst.",
    href: "/nl/virtual-office/fundament",
  },
];

const faq = [
  { q: "Wat is een virtueel kantoor?", a: "Een virtueel kantoor is een vaste online plek waar je team aanwezig is — ook als er geen vergadering gepland staat. Je loopt binnen, ziet wie er is en stapt op iemand af; vanzelf start er een gesprek. Geen agenda, geen link. Het is niet zomaar een plek, maar een manier om elkaar weer tegen te komen." },
  { q: "Voor wie is een virtueel kantoor geschikt?", a: "Voor organisaties en groepen die deels thuis en deels op kantoor werken en elkaar daardoor zelden allemaal zien: hybride teams, internationale teams, remote-first bedrijven, communities, lokale samenwerkingsverbanden en project- of programmagroepen die een gezamenlijke basis zoeken." },
  { q: "Op welk platform bouwen jullie een virtueel kantoor?", a: "Wij bouwen virtuele kantoren in SpatialChat. Er zijn meer mogelijkheden, maar wij kiezen voor SpatialChat omdat het laagdrempelig is en maximaal persoonlijk te maken en te houden — het benadert de echte interacties van een fysiek kantoor het dichtst." },
  { q: "Hoe kom ik binnen — wat zijn de mogelijkheden?", a: "Er zijn drie manieren. Boek een zaaltje voor een eenmalige bijeenkomst met een kleine groep. Huur een instapklaar kantoor en trek er meteen in. Of bouw je kantoor vanuit het fundament, samen met onze specialisten, als het echt om de samenwerking gaat." },
  { q: "Wat kost een virtueel kantoor?", a: "Dat hangt af van de manier waarop je binnenkomt, de grootte en de inrichting. Daarom werken we met een voorstel op maat. In een rondleiding kijken we samen wat past." },
  { q: "Wat is het verschil met Zoom of Teams?", a: "Zoom en Teams zijn gemaakt voor geplande vergaderingen. Een virtueel kantoor is een doorlopende plek waar je gewoon aanwezig bent, elkaar spontaan tegenkomt en informeel contact hebt — zonder dat iemand een link hoeft te sturen." },
];

const faqMore = [
  { q: "Moeten medewerkers iets installeren?", a: "Nee. Een virtueel kantoor in SpatialChat draait gewoon in de browser. Deelnemers openen een link en lopen binnen — zonder installatie of account-gedoe." },
  { q: "Werkt het voor internationale teams en verschillende tijdzones?", a: "Ja. Juist voor internationale en verspreide teams is een virtueel kantoor waardevol: iedereen heeft dezelfde thuisbasis, ongeacht land of tijdzone, en kan binnenlopen wanneer het uitkomt." },
  { q: "Kunnen we onze eigen huisstijl gebruiken?", a: "Ja. We stemmen de inrichting, achtergronden, kleuren en sfeer af op je organisatie. Het wordt jouw kantoor, met jouw identiteit." },
  { q: "Hoe zit het met privacy en veiligheid?", a: "De omgeving is afgeschermd: alleen mensen met toegang komen binnen, en SpatialChat voldoet aan enterprise-grade beveiligings- en privacystandaarden. We denken mee over de toegang en rechten die bij jouw organisatie passen." },
  { q: "Hoe snel staat een virtueel kantoor live?", a: "Een zaaltje of instapklaar kantoor kan snel. Een traject vanuit het fundament vraagt meer voorbereiding. In een rondleiding schetsen we een realistische planning." },
  { q: "Vervangt een virtueel kantoor ons fysieke kantoor?", a: "Dat hoeft niet. Voor veel organisaties is het een aanvulling die het toevallige contact terugbrengt; voor andere maakt het een fysiek kantoor op volle sterkte overbodig. Beide kan — we kijken naar wat bij jullie past." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...faq, ...faqMore].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function VirtualOfficePage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <h1 className="sr-only">Virtueel kantoor (Virtual Office) voor hybride en internationale teams</h1>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <video
            src="/videos/vo-hero-v3.mp4"
            poster="/images/vo-hero-start.jpg"
            aria-label="Virtueel kantoor in SpatialChat — een online thuisbasis met meerdere ruimtes voor hybride teams"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Virtual Office</p>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Een plek waar je elkaar
                  <br />
                  weer tegenkomt.
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  Je hebt tools genoeg. Wat je mist is een plek om gewoon samen te zijn.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/nl/expert-advies" className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    Plan een rondleiding →
                  </Link>
                  <Link href="/nl/inspiratie" className="text-white/80 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors">
                    Bekijk voorbeelden
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS + VOOR WIE ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wat het is</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Een verbindende samenwerkplek.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                Je kunt vergaderen en chatten, maar zonder ontmoetingen tussendoor wordt contact
                transactioneel. Het virtuele kantoor is een vaste online plek waar je team elkaar
                tegenkomt, samenwerkt en samen is — ook als er geen agenda is. Geen tool erbij, maar
                een omgeving.
              </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Voor wie</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Voor groepen die zelden samen zitten.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                Je team zit deels thuis, deels op kantoor, soms verspreid over landen en tijdzones.
                Hybride of remote-first, communities en samenwerkingsverbanden: samenhang heeft soms
                een zetje nodig. Een gezamenlijke basis helpt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET OPLEVERT (KPI) ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wat het oplevert</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Een virtueel kantoor maakt meetbaar verschil.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.kpi} className="bg-white rounded p-7 shadow-sm border border-[#EBEBEB]">
                <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
                <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug">{b.kpi}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOE ZIET HET ERUIT (TOEPASSINGEN) ── */}
      <section className="bg-[#F0F0EB] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Hoe ziet het eruit</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Een virtual office kan veel vormen hebben. Wat past bij jullie?
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Geen twee kantoren zijn hetzelfde. Wat het wordt, hangt af van wat je team nodig
              heeft — van een informele thuisbasis tot een overzichtelijke kennisplek.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col">
                <div className="relative h-44">
                  <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-1.5 leading-snug">{s.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DRIE INGANGEN ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Drie manieren om binnen te komen</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Hoe ver wil je gaan?
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Van een zaaltje dat je gewoon even boekt tot een kantoor dat je vanuit je fundament
              opbouwt. Je kiest je eigen ingang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ingangen.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group bg-white rounded p-7 shadow-sm border border-[#EBEBEB] flex flex-col hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-4">{p.tag}</span>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug group-hover:text-[#EEBE3D] transition-colors">{p.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed flex-1 mb-6">{p.desc}</p>
                <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide self-start">
                  {p.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEWIJS ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">In de praktijk</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Het Online Clubhuis voor Olympiërs wereldwijd.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                MeetingMasters werkt zelf al jaren vanuit een eigen virtueel kantoor, en helpt
                organisaties ruim vijf jaar met online samenwerken in SpatialChat.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Voor de World Olympians Association bouwden we een online clubhuis, zowel voor Parijs
                2024 als voor Milano Cortina 2026. 24/7 open, een echte plek waar leden uit de hele
                wereld binnen konden lopen om herinneringen op te halen en verder te praten.
              </p>
            </div>
            <div className="relative aspect-video rounded overflow-hidden shadow-md">
              <Image
                src="/images/oly-clubhouse.webp"
                alt="Online clubhuis voor de World Olympians Association in SpatialChat — leden ontmoeten elkaar op een virtueel bergterras"
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over een virtueel kantoor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item) => (
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
              {faqMore.map((item) => (
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

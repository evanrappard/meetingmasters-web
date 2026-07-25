import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Virtueel kantoor huren | MeetingMasters",
  description:
    "Huur een ingericht, levend virtueel kantoor en trek er meteen in — per maand of per jaar. Inclusief technische ondersteuning en onboarding, zodat je team het ook echt gebruikt. Gebouwd in SpatialChat.",
};

const inbegrepen = [
  { title: "Inrichting & ontwerp", desc: "Een omgeving afgestemd op hoe je team werkt — teamkamers, focuszones, koffiehoek, centraal podium." },
  { title: "Eigen huisstijl", desc: "Achtergronden, kleuren en sfeer afgestemd op je organisatie. Jouw kantoor, jouw identiteit." },
  { title: "Verbindende elementen", desc: "Kleine gimmicks en activiteiten die informeel contact stimuleren — zonder dat iemand er iets voor hoeft te doen." },
  { title: "Technische ondersteuning", desc: "Installatie, onboarding van je team en doorlopende technische ondersteuning." },
  { title: "Onboarding van je team", desc: "We zorgen dat iedereen weet hoe het werkt en het ook echt gaat gebruiken — geen lege ruimte." },
  { title: "Beheer & updates", desc: "We houden de omgeving actueel, passen aan waar nodig en denken mee als de organisatie verandert." },
];

const faq = [
  { q: "Wat houdt een virtueel kantoor huren in?", a: "Je huurt een ingericht, levend online kantoor in SpatialChat en trekt er meteen in — per maand of per jaar. Wij bouwen, richten in en beheren; jij opent de deur. Inclusief technische ondersteuning en onboarding zodat je team het ook echt gebruikt." },
  { q: "Voor wie is huren bedoeld?", a: "Voor een team of groep changemakers dat snel een vaste online plek wil, zonder te wachten op een lang traject of zelf te gaan bouwen." },
  { q: "Per maand of per jaar?", a: "Allebei kan. Huren is een doorlopende dienst; je kiest de termijn die past. In een rondleiding bespreken we de mogelijkheden en maken we een voorstel op maat." },
  { q: "Wat kost het om een virtueel kantoor te huren?", a: "Dat hangt af van de grootte, de inrichting en de gewenste ondersteuning. Daarom werken we met een voorstel op maat. Vraag gerust een offerte aan." },
  { q: "Houden jullie het kantoor ook levend?", a: "Optioneel, ja. Geen enkele community floreert vanzelf. Met Facility Services brengen we energie en beweging: verrassende interacties en op feestdagen iets extra's. De intensiteit bepaal je zelf." },
  { q: "Is een gehuurd kantoor veilig?", a: "De omgeving is afgeschermd en SpatialChat voldoet aan enterprise-grade beveiligings- en privacystandaarden. We richten toegang en rechten in zoals dat bij jouw organisatie past." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HurenPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[42vw] min-h-[300px] max-h-[520px]">
          <Image
            src="/images/vo-huren.webp"
            alt="Een licht, instapklaar virtueel kantoor in SpatialChat met werkplekken en uitzicht over de stad"
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.03) saturate(1.06)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-12 sm:pb-16">
              <div className="max-w-[600px]">
                <Link href="/nl/virtual-office" className="text-[#28A8AA]/90 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>
                  ← Virtueel kantoor
                </Link>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Huur een instapklaar kantoor.
                </h1>
                <p className="text-white text-lg leading-relaxed mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  De plek waar je elkaar zomaar weer tegenkomt — meteen klaar voor gebruik.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/nl/expert-advies" className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    Plan een rondleiding →
                  </Link>
                  <Link href="/nl/expert-advies" className="text-white/80 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors">
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Instapklaar</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              Trek meteen in. Wij regelen de rest.
            </h2>
            <p className="text-[#545454] leading-relaxed mb-4">
              Je team werkt verspreid en je mist de plek waar je elkaar zomaar tegenkomt, even
              binnenloopt, samen koffie drinkt. Je wilt dat terug — maar niet wachten op een lang
              traject of zelf gaan bouwen.
            </p>
            <p className="text-[#545454] leading-relaxed">
              Huur een ingericht, levend online kantoor en trek er meteen in. Per maand of per jaar,
              inclusief technische ondersteuning en een onboarding zodat je team het ook echt
              gebruikt. Een instapklaar kantoor — als het ertoe doet, doe je dit niet zelf.
            </p>
          </div>
        </div>
      </section>

      {/* ── INBEGREPEN ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Inbegrepen</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Alles wat je kantoor nodig heeft.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {inbegrepen.map((item) => (
              <div key={item.title} className="bg-white rounded p-6 shadow-sm border border-[#EBEBEB]">
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Facility Services — bijkoop */}
          <div className="mt-6 bg-white rounded p-6 shadow-sm border border-[#EBEBEB] border-l-4 border-l-[#EEBE3D]">
            <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">Optioneel — Facility Services</p>
            <p className="text-sm text-[#545454] leading-relaxed">
              Geen enkele community floreert vanzelf. Daarom houden we het kantoor desgewenst
              levend: verrassende interacties, energie en bewegelijkheid, en op feestdagen iets
              extra's. De intensiteit bepaal je zelf.
            </p>
          </div>
        </div>
      </section>

      {/* ── BEWIJS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">In de praktijk</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Een levende plek, dag in dag uit.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                Het Online Clubhuis dat we voor de World Olympians Association bouwden, laat zien
                wat een gehuurd kantoor kan zijn: 24/7 open, een echte plek waar mensen uit de hele
                wereld binnenlopen wanneer ze willen.
              </p>
              <p className="text-[#545454] leading-relaxed">
                De omgeving voldoet aan enterprise-grade beveiligings- en privacystandaarden, zodat
                je er met een gerust hart je organisatie in laat.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
              <Image
                src="/images/inspiratie-olyhouse.webp"
                alt="Online clubhuis voor de World Olympians Association — een levend virtueel kantoor"
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
            Veelgestelde vragen over een kantoor huren
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />
    </div>
  );
}

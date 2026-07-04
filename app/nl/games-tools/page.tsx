import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Games & Tools | MeetingMasters",
  description:
    "EscapeMasters, R@venHack en interactieve formats op maat. Online escape rooms, onboardinggames en security awareness-ervaringen — speelklaar of volledig op maat gemaakt.",
};

const readyToPlay = [
  {
    id: "escape-masters",
    title: "EscapeMasters",
    subtitle: "De kenmerkende online escape room",
    desc: "Teams werken samen om puzzels op te lossen, aanwijzingen te ontcijferen en samen te ontsnappen. Echt teambuilding — ontworpen om energie, plezier en verbinding aan te wakkeren. Geschikt voor 10 tot 200 deelnemers.",
    href: "/nl/games-tools/escape-masters",
    image: "/images/format-escape.png",
    imageAlt: "EscapeMasters escape room",
    tag: "Speelklaar",
  },
  {
    id: "ravenhack",
    title: "R@venHack: Cyber Security",
    subtitle: "Een cybersecurity awareness-ervaring",
    desc: "Teams gaan de race aan om een cyberaanval te stoppen. Deelnemers leren op de meest boeiende manier over digitale veiligheid — door het zelf te doen. Ideaal voor organisaties die security awareness willen vergroten zonder een saaie training.",
    href: "/nl/games-tools/ravenhack",
    image: "/images/format-2.png",
    imageAlt: "R@venHack cyber security game",
    tag: "Speelklaar",
  },
];

const customOptions = [
  {
    title: "Escape room op maat",
    desc: "Uw content, uw merk, uw verhaal — in een escape room-format. We bouwen het vanaf nul: puzzels, verhaallijn, platform en live begeleiding.",
  },
  {
    title: "Onboardinggame",
    desc: "Een interactieve kennismaking met uw organisatie, cultuur en collega's — vormgegeven als een game. Nieuwe medewerkers ontdekken, verkennen en verbinden vanaf dag één.",
  },
  {
    title: "Security awareness-game",
    desc: "Meer dan een phishingtest. Een speelse teamervaring die echt inzicht geeft in digitale risico's — en die blijft hangen.",
  },
  {
    title: "Iets specifieks",
    desc: "Heeft u een idee dat niet in het bovenstaande past? Laat het ons weten. We hebben interactieve formats gebouwd voor onboarding, compliance, verandermanagement en meer.",
  },
];

export default function GamesToolsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <video
            poster="/images/games-hero.jpg"
            aria-label="Games &amp; Tools van MeetingMasters — een interactief online spel met deelnemers in beeld"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          >
            <source src="/videos/games-hero.webm" type="video/webm" />
            <source src="/videos/games-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Games &amp; Tools</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Samen spelen. Iets leren.
                </h1>
                <p className="text-white text-lg font-medium leading-relaxed" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)" }}>
                  Speelklare online formats en interactieve ervaringen op maat. Van escape
                  rooms tot onboardinggames — gemaakt voor groepen, ontworpen voor betrokkenheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-to-play formats */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-3 text-center">
            Speelklaar
          </h2>
          <p className="text-[#666666] text-center mb-12 max-w-xl mx-auto">
            Twee formats die direct te spelen zijn — voeg alleen uw team toe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {readyToPlay.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent hover:shadow-sm transition-all"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white bg-accent rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-accent transition-colors inline-block"
                  >
                    Meer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made to measure */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Op maat gemaakt
            </h2>
            <p className="text-[#666666] max-w-xl mx-auto">
              Als een kant-en-klaar format niet helemaal past, bouwen we iets
              specifieks. Content op maat, uw branding, uw doelen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:border-accent transition-colors"
              >
                <h3 className="font-bold text-[#333333] text-base mb-3">
                  {opt.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/nl/contact"
              className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Vertel ons over uw idee
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-xl italic text-[#555555] leading-relaxed mb-6">
            &ldquo;Onze Olympiërs verwachten altijd topkwaliteit, en met Meeting
            Masters is dat simpelweg de standaard. Misschien zit de sleutel wel
            in het feit dat het gewoon zo'n plezier is om met hen samen te
            werken.&rdquo;
          </blockquote>
          <p className="font-bold text-[#333333] text-sm">
            World Olympians Association
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Wilt u een format in actie zien?
          </h2>
          <p className="text-white/70 mb-8">
            We kunnen EscapeMasters of R@venHack live demonstreren. Of we nemen
            een concept op maat voor uw organisatie met u door.
          </p>
          <Link
            href="/nl/contact"
            className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Plan een demo
          </Link>
        </div>
      </section>
    </div>
  );
}

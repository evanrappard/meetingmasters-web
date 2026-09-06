import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";

export const metadata: Metadata = {
  alternates: taalAlternates("/planning-support"),
  // Nog niet af of vervangen: wel bereikbaar via een directe link, maar niet
  // in de zoekresultaten. Staat ook in NIET_INDEXEREN in app/sitemap.ts.
  robots: { index: false, follow: true },
  title: "Planning & Support | MeetingMasters",
  description:
    "Deskundige planning, design en live ondersteuning voor je online meetings — voor, tijdens en na afloop.",
};

const phases = [
  {
    img: "/images/planning-3.webp",
    title: "Voor je meeting",
    alt: "Voorbereiding van een online meeting — MeetingMasters ontwerpt het meetingdesign en de briefing",
    body: "Een heldere intentie en een sterk plan maken meetings interessanter en effectiever. Wij zijn specialisten in het ontwerpen van inspirerende meetingdesigns en vertalen je wensen naar een briefing met duidelijke rollen en taken.",
    services: [
      "Meetingdesign",
      "Platformdesign",
      "Presentatiedesign",
      "Sprekersbriefing",
      "Communicatieondersteuning",
      "Handleidingen & instructie",
      "Testmeeting",
      "Instapworkshop",
      "Generale repetitie",
    ],
  },
  {
    img: "/images/planning-4.webp",
    title: "Tijdens je meeting",
    alt: "Live begeleiding tijdens een online meeting door de Meeting Masters — ondersteuning en co-facilitatie",
    body: "Meeting Masters ondersteunen de voorzitter en zorgen ervoor dat deelnemers zich geholpen voelen — van gastenontvangst en technische assistentie tot co-facilitatie, interactiebewaking en begeleiding van break-outs.",
    services: [
      "Onboarding van deelnemers",
      "Telefonische & online ondersteuning",
      "Schermdeling",
      "Interactiebewaking",
      "Online stemmen",
      "Online whiteboarden",
      "Begeleiding van break-outs",
      "Co-host & social host",
      "Facilitator",
      "Opname & screenshots",
    ],
  },
  {
    img: "/images/planning-1.webp",
    title: "Na je meeting",
    alt: "Na afloop van een online meeting — MeetingMasters verzorgt evaluatie, verslag en opvolging",
    body: "De afsluitende sessie is het einde van de meeting — vaak is het pas het begin van meer contact in de toekomst. MeetingMasters ondersteunt met gestructureerd advies, rapportages en deelnemersevaluaties.",
    services: [
      "Deelnemersevaluatie",
      "Inhoudelijk verslag",
      "Technisch verslag",
      "Verbeteradvies",
    ],
  },
];

export default function PlanningSupportPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <HeroBeeld
          src="/images/planning-2.webp"
          alt="Planning en ondersteuning"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Planning & support: de essentie van online meetings
            </h1>
            <p className="text-base md:text-lg text-white/85">
              Wil je dat grote, complexe of zeer interactieve meetings soepel
              verlopen? Vertrouw op onze kennis, professionele begeleiding en
              technische ondersteuning.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#525252] text-lg leading-relaxed">
            Digitaal of hybride: goede meetings draaien niet om technologie. Ze
            draaien om contact en betrokkenheid, en dat begint met een
            mensgericht ontwerp en een gedegen set-up. Onze Meeting Masters zijn
            getraind om deelnemers en organisatoren zoveel mogelijk te begeleiden
            en te ontzorgen — gepland en ongepland. Dat geeft rust, focus en een
            veel prettigere sfeer.
          </p>
        </div>
      </section>

      {/* 3 phases */}
      <section className="bg-white pb-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">
            Haal meer uit meetings:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {phases.map((phase) => (
              <div key={phase.title}>
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded">
                  <Image
                    src={phase.img}
                    alt={phase.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[#333333] text-lg mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-4">
                  {phase.body}
                </p>
                <ul className="space-y-1">
                  {phase.services.map((s) => (
                    <li key={s} className="text-sm text-[#444444] flex gap-2">
                      <span className="text-accent">►</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14 text-center">
        <p className="text-[#525252] mb-2">
          Nieuwsgierig? Meer informatie nodig? Wil je een indruk van de kosten?
        </p>
        <div className="mt-6">
          <Link
            href="/nl/contact"
            className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}

/**
 * LAYOUT D — "Matching homepage"
 * Hero → Visie → Subproducten → CTABlock
 * Structuur: zelfde taal en ritme als de homepage.
 * Preview: localhost:3001/preview/product-d
 */

import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";

/* ─── DATA (tijdelijk — teksten worden later bijgewerkt) ─── */

const differentiators = [
  {
    heading: "Wij ontwerpen, faciliteren en produceren",
    body: "U hoeft niet zelf te puzzelen met platforms, agenda's en techniek. Wij leveren het complete pakket — van eerste gesprek tot live dag.",
  },
  {
    heading: "Deelnemers zijn er echt bij",
    body: "Geen passieve kijkers. Wij bouwen in echte interactie: keuzemomenten, breakouts, stemrondes en beweging door de ruimte.",
  },
  {
    heading: "Ervaring met 250+ events",
    body: "We weten wat werkt voor een strategiedag van 80 mensen, en wat anders moet bij een all-hands van 400. Dat verschil zit in elk ontwerp.",
  },
];

const formats = [
  {
    num: "01",
    title: "Strategiedag",
    tag: "Meest gevraagd",
    desc: "Een dag die leidt tot besluiten, niet alleen presentaties. Wij ontwerpen voor echte dialoog en heldere uitkomsten.",
  },
  {
    num: "02",
    title: "Kerstborrel",
    tag: "Favoriet",
    desc: "Een avond die mensen écht leuk vinden — online. Games, live muziek, escape rooms en sociale ruimtes.",
  },
  {
    num: "03",
    title: "Kick-off",
    tag: null,
    desc: "De juiste energie aan het begin van een jaar, project of nieuw hoofdstuk. Hoge energie, heldere richting, verbonden team.",
  },
  {
    num: "04",
    title: "All-hands meeting",
    tag: null,
    desc: "Town halls voor 100 tot 500 mensen — mét echte interactie. Geen passieve uitzending.",
  },
  {
    num: "05",
    title: "Community event",
    tag: null,
    desc: "Voor verenigingen, alumninetwerken of professionele communities. Een terugkerende bijeenkomst waar mensen naar uitkijken.",
  },
  {
    num: "06",
    title: "Onboardingevent",
    tag: null,
    desc: "Eerste indrukken blijven hangen. Kennismaking met cultuur, collega's en werkwijzen op een dag die mensen bijblijft.",
  },
  {
    num: "07",
    title: "Ledenvergadering",
    tag: null,
    desc: "Statutair correct, goed gestructureerd en toch levendig. Wij regelen de techniek, u beheert de agenda.",
  },
  {
    num: "08",
    title: "Iets anders",
    tag: null,
    desc: "Elk event is anders. Vertel ons wat u nodig heeft.",
  },
];

/* ─── PAGE ─── */

export default function ProductLayoutD() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[580px]">
          <Image
            src="/images/events-bijeenkomst.webp"
            alt="Online bijeenkomst voor grote groepen — MeetingMasters Events"
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.05) saturate(1.1) brightness(0.85)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#2D2D2D]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Events</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5">
                  Online bijeenkomsten waar mensen echt aanwezig zijn.
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Van strategiedag tot kerstborrel — voor groepen van 50 tot 500 mensen.
                  Wij regelen concept, facilitatie en live productie.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/contact"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
                  >
                    Ervaar het zelf →
                  </Link>
                  <a
                    href="#formats"
                    className="text-white/70 text-sm font-semibold px-5 py-3 border border-white/25 rounded hover:border-white/55 transition-colors inline-block"
                  >
                    Bekijk formats
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats — zelfde patroon als homepage */}
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="md:-mt-12 bg-white shadow-lg rounded grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EBEBEB]">
            {[
              { label: "250+", title: "Events begeleid", desc: "Vanaf 2020, voor organisaties van 50 tot 500 mensen." },
              { label: "94%", title: "Tevredenheid na afloop", desc: "Gemeten over alle events op basis van deelnemersfeedback." },
              { label: "8,4", title: "Gemiddeld rapportcijfer", desc: "Gegeven door deelnemers na afloop van onze bijeenkomsten." },
            ].map((item) => (
              <div key={item.label} className="p-7 sm:p-8">
                <p className="text-[#EEBE3D] text-3xl font-bold mb-1">{item.label}</p>
                <p className="text-[#2D2D2D] text-sm font-bold mb-1">{item.title}</p>
                <p className="text-[#898989] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIE: WAT ONS ONDERSCHEIDT ── */}
      <section className="py-20 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Linker kolom: tekst */}
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Waarom het werkt</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-8">
                Een online bijeenkomst is geen Zoom-call.
              </h2>
              <div className="space-y-6">
                {differentiators.map((d) => (
                  <div key={d.heading} className="flex gap-4">
                    <div className="w-1 flex-shrink-0 bg-[#EEBE3D] rounded-full mt-1" />
                    <div>
                      <p className="font-bold text-[#2D2D2D] text-sm mb-1">{d.heading}</p>
                      <p className="text-sm text-[#545454] leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rechter kolom: afbeelding + quote */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
                <Image
                  src="/images/inspiratie-olyhouse.webp"
                  alt="Online strategiedag — MeetingMasters"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#E8EDE4] rounded p-6">
                <p className="text-[#2D2D2D] font-bold text-base leading-snug mb-3">
                  "Een event waarbij mensen écht naar elkaar konden luisteren en van elkaar konden leren."
                </p>
                <p className="text-xs text-[#545454] font-semibold">Rode Kruis Nederland</p>
                <p className="text-xs text-[#898989]">Online strategiedag voor 120 medewerkers</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FORMATS / SUBPRODUCTEN ── */}
      <section id="formats" className="py-16">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Formats</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Welk event organiseert u?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formats.map((f) => (
              <Link
                key={f.num}
                href="/nl/contact"
                className="group border border-[#EBEBEB] rounded p-6 hover:border-[#EEBE3D] hover:shadow-sm transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="text-[#EBEBEB] text-2xl font-bold leading-none">{f.num}</p>
                  {f.tag && (
                    <span className="text-[10px] font-bold text-[#28A8AA] bg-[#28A8AA]/10 rounded-full px-2 py-0.5">
                      {f.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2 group-hover:text-[#EEBE3D] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-[#545454] leading-relaxed flex-1">{f.desc}</p>
                <p className="mt-4 text-xs text-[#EEBE3D] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Meer →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}

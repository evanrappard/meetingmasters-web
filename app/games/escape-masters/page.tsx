import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EscapeMasters — Online Escape Room | MeetingMasters",
  description:
    "De online escape room die echt werkt. Teams van 3 tot 6 personen lossen samen puzzels op en ontsnappen uit een digitale wereld. Voor 10 tot 200 deelnemers, 60 tot 90 minuten.",
};

const forWho = [
  { title: "Teambuilding", desc: "Laat uw team echt samenwerken — niet in een vergadering, maar op een missie." },
  { title: "Kick-off of afsluiting", desc: "De perfecte opening of afsluiting van een groter event. Energie en verbinding in één." },
  { title: "Onboarding", desc: "Nieuwe medewerkers leren hun collega's kennen op een manier die ze niet snel vergeten." },
  { title: "Borrel of vrije tijd", desc: "Online samenzijn dat mensen écht leuk vinden. Niet verplicht, maar vrijwillig bijblijven." },
];

const howItWorks = [
  { n: "01", title: "Teams worden gevormd", body: "Deelnemers worden ingedeeld in teams van 3 tot 6 personen. Elk team krijgt een eigen virtuele ruimte." },
  { n: "02", title: "De missie begint", body: "Een gamemaster legt de situatie uit en zet de klok in beweging. Spanning gegarandeerd." },
  { n: "03", title: "Samenwerken of verliezen", body: "Teams werken samen om aanwijzingen te vinden, codes te kraken en het slot te vinden. Wie ontsnapt het eerst?" },
  { n: "04", title: "Nabespreking en winnaars", body: "Na afloop debrief, uitslag en ruimte voor informeel napraten — in de social ruimte." },
];

export default function EscapeMastersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] relative overflow-hidden" style={{ minHeight: "clamp(380px, 44vw, 520px)" }}>
        <Image
          src="/images/format-escape.webp"
          alt="EscapeMasters online escape room — teams werken samen aan puzzels in een digitale omgeving"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 pb-12 md:pb-16 w-full">
            <div className="max-w-[620px]">
              <Link href="/games" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-6 inline-block">
                ← Games & Tools
              </Link>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">De online escape room</p>
              <h1
                className="font-bold text-white leading-[1.05] text-balance mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                EscapeMasters — speel samen, ontsnapte samen.
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-[500px]">
                Teams van 3 tot 6 personen werken samen om puzzels op te lossen, codes te kraken en
                te ontsnappen uit een digitale wereld vol verrassingen. Spanning, lachen en verbinding —
                voor 10 tot 200 deelnemers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3.5 rounded hover:bg-[#F5C93D] transition-colors"
                >
                  Plan een demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-block text-white text-sm font-semibold px-6 py-3.5 border border-white/25 rounded hover:border-white/60 transition-colors"
                >
                  Vraag een offerte aan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS ────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-8">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {[
              { label: "Deelnemers", value: "10 tot 200" },
              { label: "Duur", value: "60 tot 90 minuten" },
              { label: "Teamgrootte", value: "3 tot 6 personen" },
              { label: "Taal", value: "Nederlands" },
              { label: "Format", value: "Kant-en-klaar" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[#2D2D2D]/50 text-[10px] font-bold tracking-widest uppercase">{s.label}</p>
                <p className="font-bold text-[#2D2D2D] text-sm mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12 md:mb-16">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hoe het werkt</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Van inloggen tot ontkomen.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {howItWorks.map((s) => (
              <div key={s.n}>
                <p className="text-[#EEBE3D] font-bold tabular-nums mb-4" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                  {s.n}
                </p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{s.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHO ──────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Geschikt voor</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Wanneer werkt EscapeMasters?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {forWho.map((f) => (
              <div key={f.title} className="bg-white border border-[#E8E8E8] rounded-lg p-7">
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{f.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              EscapeMasters in actie zien?
            </h2>
            <p className="text-[#2D2D2D]/65 text-base max-w-[440px]">
              We demonstreren het format live, met uw eigen team. Dan voelt u zelf wat het doet.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-4 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Plan een demo →
          </Link>
        </div>
      </section>
    </>
  );
}

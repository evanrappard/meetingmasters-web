import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kantoor als Cultuurmoment | MeetingMasters Virtual Office",
  description:
    "Gebruik de inrichting van uw virtual office als startpunt voor een breder gesprek over samenwerking en cultuur. Van cultuurdiagnose tot kantoorontwerp.",
};

const steps = [
  {
    n: "01",
    title: "Cultuurdiagnose",
    body: "We starten met een assessment: hoe werkt uw team nu samen? Welke patronen zijn behulpzaam, welke niet? Wat willen mensen koesteren, wat mag verdwijnen? Dit levert een helder beeld op van de huidige en gewenste cultuur.",
  },
  {
    n: "02",
    title: "Cultuurdialoog",
    body: "In een of meerdere begeleide sessies gaan team en organisatie het gesprek aan. Over gedrag, over verwachtingen, over wat samenwerking op afstand betekent voor iedereen. MeetingMasters begeleidt dit proces.",
  },
  {
    n: "03",
    title: "Van inzicht naar inrichting",
    body: "De uitkomsten van de dialoog worden vertaald naar het ontwerp van uw virtual office. Welke ruimtes zijn nodig? Wat moet de omgeving faciliteren? De inrichting weerspiegelt wat de organisatie wil zijn.",
  },
  {
    n: "04",
    title: "Lancering & borging",
    body: "Het kantoor gaat open. Maar het gesprek stopt niet. Wij helpen u de cultuurverandering te borgen — met terugkomsessies, aanpassingen op basis van gebruik en doorlopende begeleiding.",
  },
];

export default function CultuurPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/virtual-office" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Virtual Office
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Cultuur & verbinding</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "20ch" }}
          >
            Kantoor als cultuurmoment.
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[520px] mb-8">
            De inrichting van een virtual office vraagt keuzes: welke ruimtes, welke sfeer, welk
            gedrag willen we stimuleren? Die vragen zijn niet technisch — ze zijn organisatorisch.
            MeetingMasters begeleidt het traject van cultuurdiagnose tot kantoorontwerp.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3.5 rounded hover:bg-[#F5C93D] transition-colors"
            >
              Plan een gesprek
            </Link>
            <Link
              href="/contact"
              className="inline-block text-white text-sm font-semibold px-6 py-3.5 border border-white/25 rounded hover:border-white/60 transition-colors"
            >
              Vraag meer informatie
            </Link>
          </div>
        </div>
      </section>

      {/* ── WAAROM ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Waarom dit traject</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Een kantoor inrichten is een cultuurkeuze.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Organisaties die een virtual office inrichten, staan voor dezelfde vragen die
                ze ooit stelden bij een nieuw fysiek kantoor: wat willen we hier doen, wie zijn
                we, hoe willen we samenwerken? Maar die vragen worden zelden hardop gesteld.
              </p>
              <p className="text-[#545454] leading-relaxed mb-5">
                MeetingMasters gebruikt de inrichting van het virtual office als aanleiding om
                dat gesprek wél te voeren. Over oud gedrag dat gesleten is. Over wensen die
                mensen al lang hadden maar nooit de ruimte kregen. Over hoe de omgeving kan
                helpen om te worden wat de organisatie wil zijn.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Het resultaat is een kantoor dat niet alleen functioneert — maar dat klopt.
              </p>
            </div>

            {/* Citaat / inzicht */}
            <div className="bg-[#FFFDF5] border border-[#EEE8D0] rounded-lg p-8 mt-4 lg:mt-12">
              <p className="text-[#AAAAAA] text-xs font-bold tracking-widest uppercase mb-5">Dit traject past als</p>
              <div className="space-y-4">
                {[
                  "Uw organisatie hybride werkt en merkt dat de samenwerking stroever loopt.",
                  "Er patronen zijn in hoe vergaderd of gecommuniceerd wordt die u wilt doorbreken.",
                  "U een nieuw kantoor of nieuwe werkplek wil als aanleiding voor een bredere cultuurverandering.",
                  "U wil dat het virtual office meer is dan een tool — maar een weerspiegeling van hoe u samen wil zijn.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[#EEBE3D] font-bold shrink-0 mt-0.5">→</span>
                    <p className="text-sm text-[#2D2D2D] leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOE HET WERKT ────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Het traject</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Van diagnose tot inrichting.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {steps.map((s) => (
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

      {/* ── WAT HET OPLEVERT ─────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Wat het oplevert</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance mb-8"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Meer dan een kantoor.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Gedeeld begrip", desc: "Het team weet waarom het kantoor er zo uitziet — en wat dat over hen zegt als organisatie." },
                { title: "Gedragsverandering", desc: "De dialoog over oud gedrag en nieuwe wensen levert inzichten die verder reiken dan de inrichting." },
                { title: "Draagvlak", desc: "Omdat het team mee heeft gedacht, is het kantoor van hen. Dat verhoogt adoptie en gebruik." },
                { title: "Een startpunt", desc: "Het traject eindigt niet bij de lancering. Het is het begin van een andere manier van samenwerken." },
              ].map((item) => (
                <div key={item.title} className="border border-[#E8E8E8] rounded-lg p-6 hover:border-[#EEBE3D] transition-colors">
                  <h3 className="font-bold text-[#2D2D2D] text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-[#777777] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANDERE OPTIES ────────────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#BBBBBB] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Andere opties</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Huur een kantoor", href: "/virtual-office/huur" },
              { label: "Bouw je eigen kantoor", href: "/virtual-office/bouw" },
            ].map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="text-sm font-medium text-[#545454] border border-[#E8E8E8] rounded px-4 py-2 hover:border-[#28A8AA] hover:text-[#28A8AA] transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-bold text-[#2D2D2D] text-lg max-w-[360px]">Benieuwd of dit traject bij uw organisatie past?</p>
          <Link
            href="/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-3.5 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Neem contact op →
          </Link>
        </div>
      </section>
    </>
  );
}

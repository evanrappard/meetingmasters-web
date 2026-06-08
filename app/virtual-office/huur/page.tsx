import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Huur een Virtual Office | MeetingMasters",
  description:
    "MeetingMasters bouwt, richt in en beheert uw virtual office. Volledig ontzorgd — van technische setup tot sfeervolle elementen die verbinding stimuleren.",
};

const includes = [
  { icon: "🏗️", title: "Inrichting & ontwerp", desc: "Wij ontwerpen de omgeving op basis van hoe uw team werkt — teamkamers, focuszones, koffiehoek, centraal podium." },
  { icon: "🎨", title: "Eigen huisstijl", desc: "Achtergronden, kleurgebruik en sfeer afgestemd op uw organisatie. Uw kantoor, uw identiteit." },
  { icon: "🕹️", title: "Verbindende elementen", desc: "Kleine gimmicks en activiteiten die de informele verbinding stimuleren — zonder dat iemand er iets voor hoeft te doen." },
  { icon: "🛠️", title: "Technische support", desc: "Installatie, onboarding van uw team en doorlopende technische ondersteuning." },
  { icon: "👤", title: "Facilitatie op aanvraag", desc: "Voor bijeenkomsten die meer structuur vragen, sluit een MeetingMaster aan als begeleider." },
  { icon: "🔄", title: "Beheer & updates", desc: "Wij houden de omgeving actueel, passen aan waar nodig en denken mee als de organisatie verandert." },
];

export default function HuurPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/virtual-office" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Virtual Office
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Volledig ontzorgd</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "20ch" }}
          >
            Huur een kantoor.
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px] mb-8">
            U opent de deur — wij regelen de rest. MeetingMasters bouwt uw virtual office,
            richt hem in en zorgt dat hij werkt. Technisch, visueel en menselijk.
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
              Vraag meer informatie
            </Link>
          </div>
        </div>
      </section>

      {/* ── WAT KRIJGT U ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Wat u krijgt</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Een kant-en-klaar kantoor dat bij uw team past.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Wij nemen het volledige traject uit handen. Van het eerste gesprek over hoe uw
                team werkt tot de dag dat iedereen voor het eerst binnenloopt. En daarna.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Uw kantoor in SpatialChat — ingericht met teamkamers, werkplekken, informele hoeken
                en centrale ruimtes — is klaar voor gebruik. Wij zorgen dat uw team weet hoe het
                werkt, dat de techniek klopt en dat de sfeer klopt.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden" style={{ minHeight: "clamp(240px, 26vw, 360px)" }}>
              <Image
                src="/images/spatial-entree.webp"
                alt="SpatialChat virtual office inrichting — MeetingMasters verzorgt alles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT INBEGREPEN ───────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Inbegrepen</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Alles wat uw kantoor nodig heeft.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map((item) => (
              <div key={item.title} className="bg-white border border-[#E8E8E8] rounded-lg p-6 hover:border-[#EEBE3D] transition-colors">
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-[#2D2D2D] text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-[#777777] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOOR WIE ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Voor wie</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance mb-6"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Wanneer past Rent an Office?
            </h2>
            <div className="space-y-4">
              {[
                { label: "U wilt het goed doen, maar heeft geen tijd om het zelf te bouwen." },
                { label: "Uw team is verspreid — hybride, internationaal of volledig remote." },
                { label: "U wilt een structurele online aanwezigheid, geen losse videocalls." },
                { label: "De ervaring moet kloppen: sfeer, identiteit en gemak in één." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 shrink-0" />
                  <p className="text-sm text-[#545454] leading-relaxed">{item.label}</p>
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
              { label: "Bouw je eigen kantoor", href: "/virtual-office/bouw" },
              { label: "Kantoor als cultuurmoment", href: "/virtual-office/cultuur" },
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
          <p className="font-bold text-[#2D2D2D] text-lg">Uw virtual office laten bouwen?</p>
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

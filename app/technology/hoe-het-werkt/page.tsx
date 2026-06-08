import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hoe het werkt | MeetingMasters Techniek",
  description:
    "Stap-voor-stap instructies voor deelnemers en organisatoren in SpatialChat. Hoe kom je binnen, wat heeft u nodig en hoe werkt de omgeving?",
};

const deelnemerSteps = [
  { n: "01", title: "Klik op de link", body: "U ontvangt een persoonlijke link via e-mail of chat. Klik erop — er wordt niets gedownload. SpatialChat werkt volledig in de browser." },
  { n: "02", title: "Kies uw browser", body: "Gebruik bij voorkeur Google Chrome of Microsoft Edge. Firefox werkt ook. Safari heeft beperkingen — liever vermijden." },
  { n: "03", title: "Voer uw naam in", body: "Bij binnenkomst vraagt SpatialChat om uw naam en eventueel een korte omschrijving. Dit zien de andere deelnemers." },
  { n: "04", title: "Geef toegang tot camera en microfoon", body: "De browser vraagt toestemming. Klik op 'Toestaan'. Zonder deze stap kunt u niet deelnemen." },
  { n: "05", title: "Beweeg door de ruimte", body: "Gebruik uw muis of de pijltjestoetsen om te bewegen. Hoe dichter u bij iemand bent, hoe meer u elkaar hoort en ziet." },
  { n: "06", title: "Praten doe je door te bewegen", body: "Loop naar iemand toe en het gesprek begint vanzelf. Loop weg en het contact vervaagt. Net als in het echte leven." },
];

const requirements = [
  { icon: "💻", title: "Apparaat", body: "Laptop of desktop — bij voorkeur geen tablet of telefoon. SpatialChat is optimaal op een computerscherm." },
  { icon: "🌐", title: "Browser", body: "Google Chrome of Microsoft Edge (aanbevolen). Firefox werkt ook. Safari: beperkt." },
  { icon: "📷", title: "Camera & microfoon", body: "Ingebouwd of extern — beide werken. Controleer vooraf of de browser toegang heeft." },
  { icon: "🌍", title: "Internetverbinding", body: "Minimaal 5 Mbps upload en download. Een stabiele bedrade verbinding werkt beter dan WiFi." },
  { icon: "🎧", title: "Hoofdtelefoon (aanbevolen)", body: "Headset of oortjes voorkomen echo. Bij meerdere mensen in dezelfde ruimte: altijd headset gebruiken." },
  { icon: "🔒", title: "Bedrijfsfirewall", body: "Werkt u vanuit een kantoornetwerk? IT kan poorten moeten openzetten. Stuur uw IT-afdeling onze technische specificaties." },
];

const roomTypes = [
  { name: "Break-out ruimte", desc: "Proximity-based gesprekken voor groepen tot 50 personen. Ideaal voor workshops, netwerkmomenten en informeel overleg.", icon: "🔵" },
  { name: "Webinar / filmruimte", desc: "Presentatiemodus voor grote groepen (tot 10.000 personen). Deelnemers reageren via chat en reacties.", icon: "🎤" },
  { name: "Stage", desc: "Avatars zijn vastgepind rond een gedeeld werkbord met Miro, Google Slides of andere iFrame-integraties. Tot 50 personen.", icon: "🎯" },
  { name: "Workspace", desc: "Stille werkplek met grid-indeling — voor wie geen afleiding wil. Tot 12 personen. Goed voor focusmomenten.", icon: "🔲" },
];

export default function HoeHetWerktPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/technology" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Techniek
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Instructies</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "22ch" }}
          >
            Hoe SpatialChat werkt.
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px]">
            Geen download, geen ingewikkelde setup. Dit zijn de stappen voor deelnemers — en
            wat u technisch nodig heeft voor een soepele ervaring.
          </p>
        </div>
      </section>

      {/* ── STAPPEN VOOR DEELNEMERS ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Voor deelnemers</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Zes stappen van link naar gesprek.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {deelnemerSteps.map((s) => (
              <div key={s.n}>
                <p className="text-[#EEBE3D] font-bold tabular-nums mb-4" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                  {s.n}
                </p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{s.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Uitnodigingstekst: copy-paste */}
          <div className="mt-14 bg-[#F5F5F2] border border-[#E8E8E4] rounded-lg p-7">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Klaar om te kopiëren</p>
            <p className="text-sm font-bold text-[#2D2D2D] mb-3">Uitnodigingstekst voor deelnemers</p>
            <div className="bg-white border border-[#E8E8E8] rounded p-5 text-sm text-[#545454] leading-relaxed font-mono">
              <p>Welkom bij onze bijeenkomst in SpatialChat!</p>
              <br />
              <p>Klik op de link hieronder om deel te nemen. U hoeft niets te downloaden — de omgeving opent direct in uw browser.</p>
              <br />
              <p>✓ Gebruik bij voorkeur Chrome of Edge (niet Safari)</p>
              <p>✓ Open de link op een laptop of computer (geen telefoon)</p>
              <p>✓ Zorg dat uw camera en microfoon werken en toegankelijk zijn</p>
              <p>✓ Gebruik een headset of oortjes als u in een kantoor zit</p>
              <br />
              <p>Bij binnenkomst vraagt de tool om uw naam — voer die in en u bent er.</p>
              <br />
              <p>Vragen? Bel of mail ons gerust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNISCHE VEREISTEN ─────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Technische vereisten</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Wat u nodig heeft.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map((r) => (
              <div key={r.title} className="bg-white border border-[#E8E8E8] rounded-lg p-6">
                <span className="text-2xl mb-4 block">{r.icon}</span>
                <h3 className="font-bold text-[#2D2D2D] text-sm mb-2">{r.title}</h3>
                <p className="text-xs text-[#777777] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RUIMTETYPEN ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">In SpatialChat</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Vier soorten ruimtes.
            </h2>
            <p className="text-[#777777] text-sm mt-3 max-w-[460px]">
              SpatialChat heeft verschillende ruimtetypen voor verschillende doelen. MeetingMasters
              bepaalt welk type wanneer past — u als deelnemer beweegt er gewoon doorheen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {roomTypes.map((r) => (
              <div key={r.name} className="border border-[#E8E8E8] rounded-lg p-6 flex gap-4">
                <span className="text-2xl shrink-0">{r.icon}</span>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] text-sm mb-1">{r.name}</h3>
                  <p className="text-xs text-[#777777] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANDERE SECTIES ───────────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#BBBBBB] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Meer techniek</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Platform vergelijking", href: "/technology/platforms" },
              { label: "FAQ", href: "/technology/faq" },
              { label: "Helpdesk", href: "/technology/helpdesk" },
            ].map((t) => (
              <Link key={t.label} href={t.href}
                className="text-sm font-medium text-[#545454] border border-[#E8E8E8] rounded px-4 py-2 hover:border-[#28A8AA] hover:text-[#28A8AA] transition-colors">
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

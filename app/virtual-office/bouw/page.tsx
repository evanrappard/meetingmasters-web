import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bouw je eigen Virtual Office | MeetingMasters",
  description:
    "Bouw uw eigen virtual office in SpatialChat — met coaching en begeleiding van MeetingMasters. Wij denken mee, u behoudt de regie.",
};

const steps = [
  { n: "01", title: "Intake & ontwerpsessie", body: "We brengen in kaart hoe uw team werkt, welke ruimtes u nodig heeft en wat de ambities zijn. Dit gesprek vormt de basis voor het ontwerp." },
  { n: "02", title: "Bouwen", body: "U bouwt uw virtual office — met onze begeleiding. Wij geven structuur, feedback en antwoord op vragen. U leert de tool kennen terwijl u het kantoor inricht." },
  { n: "03", title: "Onboarding van uw team", body: "Wij zorgen dat uw team weet hoe het kantoor werkt en hoe ze er het meeste uithalen. Met een live sessie of handleiding op maat." },
  { n: "04", title: "Nazorg & doorontwikkeling", body: "Na de lancering zijn wij beschikbaar voor vragen en doorontwikkeling. U bent zelfredzaam — maar nooit alleen." },
];

export default function BouwPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/virtual-office" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Virtual Office
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Zelf bouwen</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "20ch" }}
          >
            Bouw je eigen kantoor.
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px] mb-8">
            U bouwt uw virtual office zelf — met coaching van MeetingMasters. Wij begeleiden
            het proces, denken mee over inrichting en geven uw team de kennis om er duurzaam
            en zelfstandig mee te werken.
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

      {/* ── VOOR WIE ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">De aanpak</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Regie bij u. Kennis bij ons.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Build your Own is voor organisaties die graag zelf de handen uit de mouwen
                steken — maar niet van nul willen beginnen. Wij brengen de kennis over
                SpatialChat, over het ontwerp van online ruimtes en over hoe teams dit soort
                omgevingen adopteren.
              </p>
              <p className="text-[#545454] leading-relaxed">
                U bouwt. Wij coachen. Het resultaat is een kantoor dat uw team kent, begrijpt
                en zelf kan doorontwikkelen — ook als wij er niet meer bij zijn.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Wanneer past dit?</p>
              {[
                { label: "U wilt zelfredzaamheid: uw team leert de tool écht kennen." },
                { label: "U heeft intern iemand die verantwoordelijkheid wil dragen voor de omgeving." },
                { label: "Budget vraagt om een lichtere variant, zonder concessies aan kwaliteit." },
                { label: "U wilt stap voor stap opbouwen, niet alles in één keer." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start border-b border-[#F0F0F0] pb-4 last:border-0 last:pb-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 shrink-0" />
                  <p className="text-sm text-[#545454] leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOE HET WERKT ────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hoe het werkt</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Vier stappen naar uw eigen kantoor.
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

      {/* ── ANDERE OPTIES ────────────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#BBBBBB] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Andere opties</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Huur een kantoor", href: "/virtual-office/huur" },
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
          <p className="font-bold text-[#2D2D2D] text-lg">Zelf bouwen met begeleiding?</p>
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

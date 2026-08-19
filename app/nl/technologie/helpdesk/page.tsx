import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helpdesk | MeetingMasters Techniek",
  description:
    "Technisch probleem tijdens je meeting? Hier vind je directe oplossingen voor de meest voorkomende problemen in SpatialChat.",
};

const problems = [
  {
    category: "Geluid",
    icon: "🔇",
    issues: [
      {
        problem: "Ik hoor niemand",
        steps: [
          "Controleer of je computer niet gedempt is (volumeknop of systeemgeluid).",
          "Klik in SpatialChat rechtsonder op het geluidsicoontje — staat het op mute?",
          "Controleer of je dicht genoeg bij andere deelnemers staat. Geluid werkt op basis van nabijheid.",
          "Ververs de pagina (F5 of Cmd+R) en kom opnieuw binnen via dezelfde link.",
          "Probeer een andere browser (Chrome of Edge bij voorkeur).",
        ],
      },
      {
        problem: "Anderen horen mij niet",
        steps: [
          "Staat je microfoon op mute? Klik op het microfoonicoon in SpatialChat (linksonder).",
          "Controleer of de browser toegang heeft tot je microfoon: adresbalk → slotje → Microfoon → Toestaan.",
          "Heb je een externe microfoon of headset? Controleer of die geselecteerd is in de SpatialChat-instellingen (tandwiel rechtsboven).",
          "Sluit andere apps die je microfoon kunnen bezetten (Zoom, Teams, FaceTime).",
          "Ververs de pagina en probeer opnieuw.",
        ],
      },
      {
        problem: "Ik hoor mijzelf terug (echo)",
        steps: [
          "Gebruik een headset of oortjes in plaats van de ingebouwde luidsprekers.",
          "Demp je microfoon als je niet spreekt.",
          "Zit je in dezelfde fysieke ruimte als iemand anders? Dan kan echo ontstaan door twee open microfoons.",
        ],
      },
    ],
  },
  {
    category: "Beeld",
    icon: "📷",
    issues: [
      {
        problem: "Mijn camera doet het niet",
        steps: [
          "Controleer of de browser toegang heeft tot je camera: adresbalk → slotje → Camera → Toestaan.",
          "Staat er een extern cameradeksel over de lens? Verwijder dat.",
          "Sluit andere apps die je camera gebruiken (Teams, Zoom, FaceTime).",
          "Controleer in de SpatialChat-instellingen (tandwiel rechtsboven) welke camera geselecteerd is.",
          "Start de browser opnieuw op.",
        ],
      },
      {
        problem: "Mijn beeld is wazig of schokkerig",
        steps: [
          "Controleer je internetverbinding. Een bedrade verbinding werkt stabieler dan WiFi.",
          "Sluit andere tabbladen en zware programma's (videostreaming, grote downloads).",
          "In de SpatialChat-instellingen: verlaag de videokwaliteit naar 'Medium' of 'Low'.",
          "Zorg voor voldoende belichting — een donkere ruimte maakt je camera harder werken.",
        ],
      },
    ],
  },
  {
    category: "Verbinding",
    icon: "🌐",
    issues: [
      {
        problem: "Ik kan SpatialChat niet openen",
        steps: [
          "Controleer je internetverbinding — open een andere website ter test.",
          "Gebruik Chrome of Edge, niet Safari.",
          "Werk je vanuit een bedrijfsnetwerk? Je IT-afdeling kan SpatialChat geblokkeerd hebben. Probeer via je mobiele hotspot.",
          "Wis de browsercache: Ctrl+Shift+Delete (Windows) of Cmd+Shift+Delete (Mac) → Cache wissen.",
          "Probeer de incognito-modus (Ctrl+Shift+N / Cmd+Shift+N).",
        ],
      },
      {
        problem: "Ik val steeds uit de verbinding",
        steps: [
          "Schakel over op een bedrade ethernet-verbinding als je nu op WiFi zit.",
          "Ga dichter bij je router zitten.",
          "Sluit onnodige tabbladen, video-apps en zware software.",
          "Vraag anderen in huis om zware downloads of streams even te pauzeren.",
          "Ververs de pagina (F5) en kom opnieuw de ruimte in.",
        ],
      },
      {
        problem: "Ik zie de foutmelding 'This browser doesn't support…'",
        steps: [
          "Je gebruikt waarschijnlijk Safari of een verouderde browser.",
          "Download Google Chrome via google.com/chrome en open de link daarin.",
          "Zorg dat je browser up-to-date is.",
        ],
      },
    ],
  },
  {
    category: "Navigatie in SpatialChat",
    icon: "🧭",
    issues: [
      {
        problem: "Ik weet niet hoe ik moet bewegen",
        steps: [
          "Klik ergens op het scherm om daarheen te bewegen — je avatar volgt je muis.",
          "Of gebruik de pijltjestoetsen op je toetsenbord.",
          "Hoe dichter je bij iemand staat, hoe meer je elkaar ziet en hoort.",
          "Beweeg weg van iemand om het gesprek af te ronden.",
        ],
      },
      {
        problem: "Ik zie andere deelnemers niet",
        steps: [
          "Scroll uit op het scherm — deelnemers kunnen ver weg zijn in de ruimte.",
          "Gebruik de mini-map (rechtsonder) om te zien waar iedereen is.",
          "Vraag de organisator of er meerdere kamers zijn en in welke je moet zijn.",
        ],
      },
    ],
  },
];

export default function HelpdeskPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Techniek
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Helpdesk</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "22ch" }}
          >
            Iets werkt niet?
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px] mb-8">
            Hier vind je stap-voor-stap oplossingen voor de meest voorkomende technische problemen
            tijdens een meeting in SpatialChat. Zoek je probleem op en volg de stappen.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Geluid", "Beeld", "Verbinding", "Navigatie"].map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className="bg-white/10 text-white/70 border border-white/15 rounded px-4 py-2 hover:bg-white/20 hover:text-white transition-colors"
              >
                {cat} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SNELLE CHECK ─────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 py-8">
          <p className="text-[#2D2D2D] font-bold text-sm mb-3">Doe eerst deze drie checks:</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#2D2D2D]/70">
            <span>✓ Gebruik je Chrome of Edge (niet Safari)?</span>
            <span>✓ Heeft de browser toegang tot camera én microfoon?</span>
            <span>✓ Zijn andere video-apps gesloten (Zoom, Teams, FaceTime)?</span>
          </div>
        </div>
      </section>

      {/* ── PROBLEMEN PER CATEGORIE ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="space-y-16">
            {problems.map((cat) => (
              <div key={cat.category} id={cat.category.toLowerCase()}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">{cat.category}</span>
                  <div className="flex-1 h-px bg-[#EBEBEB]" />
                </div>
                <div className="space-y-6">
                  {cat.issues.map((issue) => (
                    <details key={issue.problem} className="group border border-[#E8E8E8] rounded-lg overflow-hidden">
                      <summary className="flex justify-between items-center gap-4 p-6 cursor-pointer list-none bg-white hover:bg-[#FAFAFA] transition-colors">
                        <span className="font-semibold text-[#2D2D2D] text-sm">{issue.problem}</span>
                        <span className="text-[#EEBE3D] font-bold shrink-0 group-open:rotate-45 transition-transform inline-block text-lg leading-none">+</span>
                      </summary>
                      <div className="px-6 pb-6 border-t border-[#F0F0F0] pt-5 bg-[#FAFAFA]">
                        <ol className="space-y-3">
                          {issue.steps.map((step, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-[#434343]">
                              <span className="font-bold text-[#EEBE3D] shrink-0 tabular-nums w-5 text-right">{i + 1}.</span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT PLACEHOLDER ────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[560px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Binnenkort beschikbaar</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Live hulp via onze digitale assistent.
            </h2>
            <p className="text-[#5F5F5F] text-sm leading-relaxed mb-6">
              Binnenkort staat hier een assistent die je direct kan helpen bij technische vragen —
              ook midden in een meeting. Stel je vraag en krijg je een directe, persoonlijke
              oplossing.
            </p>
            <div className="border-2 border-dashed border-[#DDDDDD] rounded-lg p-8 text-center">
              <p className="text-[#CCCCCC] text-sm font-medium">Assistent wordt hier geladen</p>
              <p className="text-[#DDDDDD] text-xs mt-1">— beschikbaar in een volgende versie —</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-[#2D2D2D] text-lg mb-1">Probleem nog niet opgelost?</p>
            <p className="text-[#2D2D2D]/65 text-sm">Neem direct contact op — bij een lopend event bellen wij je meteen terug.</p>
          </div>
          <Link
            href="/nl/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-3.5 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Neem contact op →
          </Link>
        </div>
      </section>
    </>
  );
}

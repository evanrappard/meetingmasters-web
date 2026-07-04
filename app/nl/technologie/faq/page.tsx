import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | MeetingMasters Techniek",
  description:
    "Veelgestelde vragen over SpatialChat, online events en de werkwijze van MeetingMasters. Snel antwoord op de meest gestelde vragen.",
};

const faqGroups = [
  {
    title: "Over SpatialChat",
    color: "text-[#EEBE3D]",
    items: [
      {
        q: "Moet ik iets downloaden om SpatialChat te gebruiken?",
        a: "Nee. SpatialChat werkt volledig in de browser. U klikt op de link, voert uw naam in en u bent er. Geen installatie, geen account aanmaken.",
      },
      {
        q: "Welke browser werkt het beste?",
        a: "Google Chrome of Microsoft Edge. Firefox werkt ook goed. Safari heeft technische beperkingen — gebruik Safari alleen als er geen alternatief is.",
      },
      {
        q: "Kan ik SpatialChat gebruiken op mijn telefoon of tablet?",
        a: "Technisch gezien wel, maar het is niet ideaal. SpatialChat is ontworpen voor gebruik op een laptop of desktop. Op een telefoon is de navigatie beperkt en mist u een groot deel van de ervaring.",
      },
      {
        q: "Is SpatialChat veilig voor gevoelige informatie?",
        a: "Ja. SpatialChat is SOC 2 Type II gecertificeerd, heeft end-to-end encryptie en slaat geen data op buiten de sessie om. Uw data is van u.",
      },
      {
        q: "Hoeveel mensen kunnen er tegelijk in één SpatialChat-ruimte?",
        a: "Dat hangt af van het ruimtetype. Break-out ruimtes werken optimaal tot 50 personen. Webinar-ruimtes kunnen tot 10.000 deelnemers aan.",
      },
      {
        q: "Hoe verschilt SpatialChat van Zoom of Teams?",
        a: "In Zoom en Teams zit iedereen in een grid — passief, op afstand, wachtend op hun beurt. In SpatialChat beweegt u vrij door een ruimte. U hoort en ziet mensen naarmate u dichter bij ze staat. Dat verandert fundamenteel hoe mensen zich gedragen in een online omgeving.",
      },
    ],
  },
  {
    title: "Over MeetingMasters events",
    color: "text-[#28A8AA]",
    items: [
      {
        q: "Wat doet MeetingMasters precies tijdens een event?",
        a: "Wij ontwerpen de sessie, bouwen de omgeving in SpatialChat, begeleiden het programma live en zorgen voor technische ondersteuning tijdens het event. Van voorbereiding tot afronding.",
      },
      {
        q: "Hoeveel deelnemers kan MeetingMasters aan?",
        a: "Wij werken voor groepen van 30 tot 600 personen. Daarboven — bij grote publieksevenementen of webinars zonder interactie — zijn andere partijen beter geschikt.",
      },
      {
        q: "Hoe ver van tevoren moet ik boeken?",
        a: "Voor een standaard event rekenen we twee tot vier weken voorbereiding. Voor complexere opdrachten of volledig maatwerk meer. Neem contact op voor een inschatting.",
      },
      {
        q: "Kan MeetingMasters ook fysieke of hybride events begeleiden?",
        a: "Onze specialiteit is online. Wij werken ook mee aan hybride settings waarbij een deel van de deelnemers op locatie is, maar dan is de technische setup complexer. Bespreek dit vooraf met ons.",
      },
      {
        q: "Wat als deelnemers nog nooit met SpatialChat hebben gewerkt?",
        a: "Dat is de norm. Wij ontwerpen elk event zo dat deelnemers zonder voorbereiding kunnen instappen. Onboarding duurt gemiddeld drie minuten.",
      },
    ],
  },
  {
    title: "Over virtual offices",
    color: "text-[#EEBE3D]",
    items: [
      {
        q: "Wat is een virtual office precies?",
        a: "Een altijd-aan online omgeving in SpatialChat waar uw team aanwezig is, ook buiten geplande vergaderingen. Met teamkamers, een koffiehoek, centrale ruimtes en focusplekken. U loopt naar iemand toe — en het gesprek begint.",
      },
      {
        q: "Hoe verschilt een virtual office van een Teams-kanaal of Slack?",
        a: "Teams en Slack zijn asynchrone communicatietools — u stuurt berichten die iemand later leest. Een virtual office is een synchrone ruimte — u ziet wie er is en maakt spontaan contact, net als op een fysiek kantoor.",
      },
      {
        q: "Moeten medewerkers de hele dag 'aanwezig' zijn in het virtual office?",
        a: "Nee. Hoe u de omgeving gebruikt, bepaalt u zelf. Sommige teams lopen er de hele dag in, anderen alleen tijdens gezamenlijke momenten. Wij adviseren over wat werkt voor uw situatie.",
      },
      {
        q: "Wat kost een virtual office?",
        a: "De kosten hangen af van de gekozen propositie (huur, bouw of cultuurtraject) en de omvang van uw organisatie. Plan een gesprek voor een offerte op maat.",
      },
    ],
  },
  {
    title: "Praktisch & technisch",
    color: "text-[#28A8AA]",
    items: [
      {
        q: "Mijn IT-afdeling wil SpatialChat niet toestaan. Wat nu?",
        a: "Dit is een veelvoorkomend obstakel. SpatialChat is SOC 2 Type II gecertificeerd en voldoet aan enterprise-beveiligingseisen. Wij kunnen uw IT-afdeling voorzien van technische documentatie en beveiligingsspecificaties.",
      },
      {
        q: "Welke poorten moet IT openzetten?",
        a: "SpatialChat gebruikt HTTPS (443) en WebRTC. Controleer of UDP-verkeer op poort 3478 en 5349 (STUN/TURN) toegestaan is. Neem contact op voor een volledige technische specificatiesheet.",
      },
      {
        q: "Kan ik SpatialChat ook gebruiken zonder MeetingMasters?",
        a: "Ja. U kunt zelf een SpatialChat-account aanmaken en de tool gebruiken. Wij voegen de laag toe van ontwerp, facilitatie, ondersteuning en ervaring die het verschil maakt.",
      },
      {
        q: "Hoe zit het met de privacy van deelnemers?",
        a: "SpatialChat slaat sessiedata niet op na afloop. Er wordt geen video of audio opgenomen tenzij u dat expliciet inschakelt. Deelnemers zijn anoniem tenzij ze zelf hun naam invullen.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Techniek
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">FAQ</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "22ch" }}
          >
            Veelgestelde vragen.
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[480px]">
            Over SpatialChat, over onze events, over virtual offices en over de praktische kant.
            Staat uw vraag er niet bij? Neem contact op.
          </p>
        </div>
      </section>

      {/* ── FAQ GROEPEN ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="space-y-16">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${group.color}`}>{group.title}</span>
                  <div className="flex-1 h-px bg-[#EBEBEB]" />
                </div>
                <div className="space-y-0">
                  {group.items.map((item, idx) => (
                    <details
                      key={idx}
                      className="group border-b border-[#F0F0F0] py-5 cursor-pointer"
                    >
                      <summary className="flex justify-between items-start gap-4 list-none">
                        <span className="font-semibold text-[#2D2D2D] text-sm leading-snug pr-4">{item.q}</span>
                        <span className="text-[#EEBE3D] font-bold shrink-0 mt-0.5 group-open:rotate-45 transition-transform inline-block">+</span>
                      </summary>
                      <p className="text-sm text-[#777777] leading-relaxed mt-4 pr-8">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIET GEVONDEN ────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-[#2D2D2D] text-base mb-1">Staat uw vraag er niet bij?</p>
            <p className="text-[#777777] text-sm">Neem contact op — wij antwoorden altijd persoonlijk.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/nl/contact"
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#D4A835] transition-colors">
              Stel uw vraag →
            </Link>
            <Link href="/nl/technologie/helpdesk"
              className="border border-[#E8E8E8] text-[#545454] text-sm font-medium px-6 py-3 rounded hover:border-[#28A8AA] hover:text-[#28A8AA] transition-colors">
              Technisch probleem?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

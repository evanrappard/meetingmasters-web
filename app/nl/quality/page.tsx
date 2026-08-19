import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";

export const metadata: Metadata = {
  alternates: taalAlternates("/quality"),
  // Nog niet af of vervangen: wel bereikbaar via een directe link, maar niet
  // in de zoekresultaten. Staat ook in NIET_INDEXEREN in app/sitemap.ts.
  robots: { index: false, follow: true },
  title: "Kwaliteit & Vertrouwelijkheid | MeetingMasters",
  description:
    "Onze toewijding aan kwaliteit, vertrouwelijkheid en professionele standaarden bij elke vergadering die wij ondersteunen.",
};

export default function QualityPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
          Kwaliteit &amp; Vertrouwelijkheid
        </h1>
        <p className="text-[#525252] text-lg max-w-xl mx-auto">
          Je vertrouwen in ons staat voorop, en wij streven ernaar om je
          verwachtingen bij elke gelegenheid te overtreffen.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Echt contact vraagt om echte vertrouwelijkheid
          </h2>
          <p className="text-[#525252] leading-relaxed">
            In ons vak zien wij veel, en horen wij veel. Wees gerust: wij zetten
            ons in om de hoogste standaarden op het gebied van privacy en
            vertrouwelijkheid te leveren. Elke Meeting Master heeft een
            geheimhoudingsverklaring ondertekend, en vertrouwelijkheid is een
            regelmatig terugkerend onderwerp in onze trainingen.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Kwaliteit is een mentaliteit die ons werk stuurt
          </h2>
          <p className="text-[#525252] leading-relaxed mb-4">
            Met MeetingMasters kun je erop vertrouwen dat elk aspect van je
            vergaderingen met de grootste zorg en professionaliteit wordt
            behandeld. Hoewel wij graag gebruikmaken van technologie, is ons vak
            in de eerste plaats mensenwerk en is online gastvrijheid onze
            belangrijkste dienst.
          </p>
          <p className="text-[#525252] leading-relaxed">
            Meeting Masters volgen een uitgebreide training over
            vergaderprotocollen, online etiquette, toegankelijke ondersteuning en
            noodprocedures — met op maat gemaakte briefings en proefsessies voor
            elke vergadering. Wanneer zich onverwachte uitdagingen voordoen, is
            het goed om te weten dat je ervaren professionals aan je zijde hebt.
          </p>
        </div>

        <div className="border-l-4 border-accent pl-6 py-2">
          <p className="text-[#444444] italic text-lg">
            &ldquo;Wij brengen inspiratie, innovatie en een menselijke touch naar
            het domein van online vergaderingen, virtuele evenementen en
            thuiswerken. Wij maken samenwerking mogelijk die technologiegedreven
            is, maar die altijd de mens vooropstelt. Want goede vergaderingen zijn
            in de eerste plaats een menselijke uitdaging.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

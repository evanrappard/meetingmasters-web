import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: taalAlternates("/team"),
  // Nog niet af of vervangen: wel bereikbaar via een directe link, maar niet
  // in de zoekresultaten. Staat ook in NIET_INDEXEREN in app/sitemap.ts.
  robots: { index: false, follow: true },
  title: "Ons team | MeetingMasters",
  description:
    "Maak kennis met Emilie van Rappard en het team van MeetingMasters — ervaren professionals in online vergaderingen.",
};

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Ons team</h1>
        <p className="text-[#666666] text-lg">
          Een heldere visie en jarenlange gedegen ervaring.
        </p>
      </div>

      {/* Founder */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/team-emilie.jpg"
              alt="Emilie van Rappard"
              fill
              priority
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-primary mb-1">
              Emilie van Rappard
            </h2>
            <p className="italic text-[#666666] text-base mb-6">Oprichter</p>
            <p className="text-[#555555] leading-relaxed mb-4">
              Als adviseur op het gebied van merk- en participatieve strategie
              begeleidt Emilie nationale en internationale groepen bij het
              verkennen van nieuwe richtingen en het in gang zetten van
              verandering. Vanuit de principes van Genuine Contact en Liberating
              Structures is zij op zoek naar wat mensen en organisaties verbindt —
              zowel op locatie als online.
            </p>
            <p className="text-[#555555] leading-relaxed">
              Emilie is de oprichter van MeetingMasters Online. Met een passie
              voor oprechte menselijke verbinding en een diepgaand begrip van
              digitale omgevingen heeft zij een team en een werkwijze opgebouwd
              die keer op keer waardevolle online bijeenkomsten opleveren.
            </p>
          </div>
        </div>
      </section>

      {/* Our Masters */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-2">
            Over onze Meeting Masters
          </h2>
          <p className="text-[#666666] mb-8">
            Met een compacte backoffice, een uitgebreid partnernetwerk en een
            sterk team van hoogopgeleide Meeting Masters werken we elke dag aan
            het beter maken van je vergaderingen, summits en events.
          </p>
          <div className="relative w-full aspect-[16/7] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/team-group.jpg"
              alt="Het team van MeetingMasters"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-[#555555] leading-relaxed max-w-3xl">
            Onze Masters zijn studenten, geselecteerd op hun initiatief,
            klantgerichtheid en digitale interesse. Het zijn probleemoplossers
            die goed communiceren, in verschillende talen. Elke Meeting Master is
            opgeleid bij de MeetingMasters Academy. Om kennis en vaardigheden
            actueel te houden, organiseren we regelmatig opfrisbijeenkomsten en
            techtesten. Samen faciliteren zij oprecht contact.
          </p>
        </div>
      </section>
    </div>
  );
}

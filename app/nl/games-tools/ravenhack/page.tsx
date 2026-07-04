import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R@venHack: Cybersecurity | MeetingMasters",
  description:
    "Een escape game rond cybersecurity die leert én spanning geeft. Teams stoppen samen een cyberaanval terwijl ze op de meest boeiende manier leren over digitale veiligheid.",
};

export default function RavenHackPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Games &amp; Tools
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          R@venHack: Cybersecurity
        </h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Een bewustwordingservaring rond cybersecurity in escaperoom-vorm.
          Teams werken samen om een cyberaanval te stoppen — en begrijpen
          werkelijk waarom het ertoe doet.
        </p>
      </div>

      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/format-2.png"
                alt="R@venHack cybersecurity game"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                Verder dan de phishingtest.
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                R@venHack is een online teamgame waarin deelnemers een fictieve
                cyberaanval moeten stoppen. De klok tikt door. De aanwijzingen
                zijn echt. En de lessen beklijven — omdat ze onder druk en
                samen ontdekt zijn.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                Ontworpen voor organisaties die het bewustzijn rond digitale
                veiligheid verder willen brengen dan een verplichte e-learning.
                R@venHack maakt het abstracte concreet, het saaie boeiend en de
                individuele les een gedeelde teamervaring.
              </p>
              <p className="text-[#666666] leading-relaxed mb-6">
                Duur: 60–90 minuten. Geschikt voor 10 tot 150 deelnemers.
                Scenario's op maat op aanvraag beschikbaar.
              </p>
              <Link
                href="/nl/contact"
                className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
              >
                Boek R@venHack
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 text-center border-y border-gray-200">
        <h2 className="text-xl font-bold text-primary mb-4">
          Een demo aanvragen?
        </h2>
        <p className="text-[#666666] mb-6 max-w-md mx-auto">
          We nemen u graag mee door R@venHack en bespreken of een scenario op
          maat beter bij uw organisatie past.
        </p>
        <Link
          href="/nl/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Vraag een demo aan
        </Link>
      </section>
    </div>
  );
}

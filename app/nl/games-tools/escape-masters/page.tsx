import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EscapeMasters | Online Escape Room | MeetingMasters",
  description:
    "EscapeMasters is onze kenmerkende online escape room — ontworpen voor teams van 10 tot 200 personen. Echt teambuilding, en echt leuk.",
};

export default function EscapeMastersPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Games &amp; Tools
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">EscapeMasters</h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Onze kenmerkende online escape room. Teams werken samen om puzzels op
          te lossen, aanwijzingen te ontcijferen en samen te ontsnappen.
          Ontworpen om energie, gelach en echte verbinding op te wekken.
        </p>
      </div>

      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                Wat het is
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                EscapeMasters is een volledig online escape room-ervaring — geen
                fysieke ruimte nodig. Deelnemers werken samen in kleine teams en
                lossen binnen een tijdslimiet een reeks puzzels op. Een Meeting
                Master presenteert en begeleidt de hele sessie live.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                Geschikt voor 10 tot 200 deelnemers. We verdelen grote groepen
                in teams die het tegen elkaar opnemen en houden een gezamenlijk
                scorebord bij. Precies de juiste dosis adrenaline voor een
                kick-off, een bedrijfsfeest of een teamdag.
              </p>
              <p className="text-[#666666] leading-relaxed mb-6">
                Duur: 60–90 minuten. Platform: browsergebaseerd, geen downloads
                nodig.
              </p>
              <Link
                href="/nl/contact"
                className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
              >
                Boek EscapeMasters
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/format-escape.png"
                alt="EscapeMasters online escape room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 text-center border-y border-gray-200">
        <h2 className="text-xl font-bold text-primary mb-4">
          Wilt u het in actie zien?
        </h2>
        <p className="text-[#666666] mb-6 max-w-md mx-auto">
          We kunnen een korte demoversie van EscapeMasters draaien — zodat u het
          kunt ervaren voordat u boekt.
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

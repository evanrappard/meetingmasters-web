import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online escape rooms | MeetingMasters",
  description:
    "Spannende, teambuildende online escape room-ervaringen — EscapeMasters en R@venHack Cyber Security.",
};

export default function EscapeRoomsPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-2 tracking-widest uppercase">
          🆕 Nieuw
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Online escape rooms
        </h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Spannende, teambuildende escape-ervaringen. Online. Ideaal voor
          teamevents, onboarding en congressen.
        </p>
      </div>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* EscapeMasters */}
          <div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                src="/images/format-escape.png"
                alt="EscapeMasters online escape room"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              EscapeMasters
            </h2>
            <p className="text-[#666666] leading-relaxed mb-6">
              Onze kenmerkende online escape room-ervaring — meeslepend, leuk en
              echt teambuildend. Deelnemers werken samen om puzzels op te lossen,
              aanwijzingen te ontcijferen en samen te ontsnappen. Ontworpen om
              energie, plezier en verbinding in je team te brengen.
            </p>
            <Link
              href="/nl/boeken"
              className="bg-accent text-white px-6 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Boek EscapeMasters
            </Link>
          </div>

          {/* R@venHack */}
          <div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                src="/images/format-2.png"
                alt="R@venHack cyber security escape room"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              R@venHack: Cyber Security
            </h2>
            <p className="text-[#666666] leading-relaxed mb-6">
              Een escape game met cybersecurity-thema die leert én spanning geeft.
              Teams werken samen om een cyberaanval te stoppen en leren op de meest
              boeiende manier over digitale veiligheid. Ideaal voor organisaties die
              op een leuke manier het securitybewustzijn willen vergroten.
            </p>
            <Link
              href="/nl/boeken"
              className="bg-accent text-white px-6 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Boek R@venHack
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Meer weten of een offerte aanvragen?
        </h2>
        <Link
          href="/nl/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Neem contact op
        </Link>
      </section>
    </div>
  );
}

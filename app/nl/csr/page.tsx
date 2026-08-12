import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maatschappelijk verantwoord ondernemen (MVO) | MeetingMasters",
  description:
    "MeetingMasters zet zich in voor duurzaamheid, inclusiviteit en maatschappelijke verantwoordelijkheid in alles wat we doen.",
};

export default function CSRPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Maatschappelijk verantwoord ondernemen (MVO)
        </h1>
        <p className="text-accent text-xl font-medium max-w-2xl mx-auto">
          Wanneer digitale ontmoetingskanalen toegankelijker zijn, hoeven minder
          mensen zich eenzaam te voelen. Meer mensen verbinden. Meer contact.
          Daar zetten wij ons voor in.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div>
          <p className="text-[#555555] text-lg font-medium mb-4">
            We delen een passie om goed te doen. Ngo&apos;s en
            hulporganisaties kunnen rekenen op gereduceerde tarieven.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-4">
            Duurzaamheid heeft voor ons de hoogste prioriteit
          </h2>
          <p className="text-[#666666] leading-relaxed mb-4">
            Online vergaderingen zijn uiteraard beter voor het milieu dan
            bijeenkomsten op locatie. Deelnemers hoeven niet te reizen, wat niet
            alleen tijd en geld bespaart, maar ook brandstof. Als iedereen in
            Nederland slechts één dag per week thuis zou werken, zou dat leiden
            tot een aanzienlijke vermindering van de CO₂-uitstoot. Daarom leiden
            we mensen op om online vergaderingen om te zetten in echte
            interacties.
          </p>
          <p className="text-[#666666] leading-relaxed">
            Daarnaast zetten we ons op andere manieren in voor duurzaamheid. We
            pleiten voor de duurzame inzetbaarheid van mensen. We trainen
            organisaties om online ontmoetingen een natuurlijk onderdeel van hun
            cultuur te maken, zodat interacties meer zijn dan alleen zakelijke
            contactmomenten. Dit bevordert de samenhang binnen de organisatie en
            zorgt voor energiekere, gelukkigere medewerkers.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">
            Werk je met ngo&apos;s of hulporganisaties?
          </h3>
          <p className="text-[#666666] mb-6">
            We bieden gereduceerde tarieven voor non-profitorganisaties. Neem
            contact met ons op om de mogelijkheden te bespreken.
          </p>
          <Link
            href="/nl/contact"
            className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  );
}

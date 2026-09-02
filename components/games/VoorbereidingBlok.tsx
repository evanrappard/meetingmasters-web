import Image from "next/image";
import Link from "next/link";
import type { Taal } from "@/lib/talen";

/**
 * "Dit heb je nodig voor de beste ervaring" — het blok met de technische tips.
 *
 * Staat op twee pagina's: die voor deelnemers en die voor organisatoren. Eén
 * bestand dus, want anders lopen de twee lijstjes vroeg of laat uiteen en
 * krijgen deelnemers andere instructies dan hun organisator.
 *
 * De crème en het goud komen van de oude Squarespace-pagina, met de pipet
 * nagemeten.
 */

export const CREME = "#F4F1E7";
export const GOUD = "#D69322";

const TEKST = {
  nl: {
    hulp: "/nl/technologie/hulp",
    kop: "Dit heb je nodig voor de beste ervaring:",
    punten: [
      { voor: "Gebruik een ", vet: "laptop of computer", na: " – maar houd je mobiel wel bij de hand" },
      { voor: "Log in via ", vet: "Chrome, Firefox of Edge", na: " (Safari werkt minder goed)" },
      { voor: "Zorg dat je ", vet: "camera en microfoon", na: " niet meer aanstaan op een ander platform" },
      {
        voor: "Lukt het niet om je camera of microfoon aan te zetten? Probeer het dan buiten je bedrijfsomgeving.",
        vet: "",
        na: "",
      },
    ],
    faqVoor: "Andere technische issues? Check de ",
    faqLabel: "FAQ",
    opTijdVet: "Kom op tijd",
    opTijd: " – we starten exact op het aangegeven tijdstip",
    beeldAlt:
      "Een hand houdt een telefoon boven een verlichte stad, met slotjes die de verbindingen markeren",
  },
  en: {
    hulp: "/en/help",
    kop: "This is what you need for the best experience:",
    punten: [
      { voor: "Use a ", vet: "laptop or computer", na: " – but keep your phone within reach" },
      { voor: "Log in with ", vet: "Chrome, Firefox or Edge", na: " (Safari works less well)" },
      { voor: "Make sure your ", vet: "camera and microphone", na: " are no longer switched on in another platform" },
      {
        voor: "Cannot get your camera or microphone to work? Try it outside your company network.",
        vet: "",
        na: "",
      },
    ],
    faqVoor: "Other technical issues? Check the ",
    faqLabel: "FAQ",
    opTijdVet: "Be on time",
    opTijd: " – we start exactly at the time stated",
    beeldAlt:
      "A hand holds a phone above a lit-up city, with padlocks marking the connections",
  },
} as const;

export default function VoorbereidingBlok({
  taal = "nl",
  kopBoven,
}: {
  taal?: Taal;
  /** Extra regel bóven de kop. De organisatorenpagina herhaalt dit blok. */
  kopBoven?: string;
}) {
  const t = TEKST[taal === "en" ? "en" : "nl"];

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: CREME }}>
      <div className="max-w-content mx-auto px-6 lg:px-10">
        {kopBoven ? (
          <h2 className="text-[1.6rem] sm:text-3xl text-[#2D2D2D] leading-snug mb-8 sm:mb-10 max-w-[720px]">
            {kopBoven}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-16 items-start">
          <div className="lg:pt-2 order-2 lg:order-1">
            <p className="font-bold text-lg mb-7 sm:mb-8" style={{ color: GOUD }}>
              {t.kop}
            </p>

            <ul className="space-y-4 text-[#2D2D2D] text-base sm:text-lg leading-relaxed">
              {t.punten.map((punt) => (
                <li key={punt.voor} className="flex gap-3">
                  <span aria-hidden>·</span>
                  <span>
                    {punt.voor}
                    {punt.vet ? <strong>{punt.vet}</strong> : null}
                    {punt.na}
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <span aria-hidden>·</span>
                <span>
                  {t.faqVoor}
                  <Link href={t.hulp} className="underline hover:no-underline" style={{ color: GOUD }}>
                    {t.faqLabel}
                  </Link>
                </span>
              </li>
            </ul>

            <p className="mt-9 sm:mt-10 text-base sm:text-lg" style={{ color: GOUD }}>
              <strong>{t.opTijdVet}</strong>
              {t.opTijd}
            </p>
          </div>

          {/* Op een telefoon eerst het beeld, dan de lijst: zo zie je meteen
              waar de sectie over gaat zonder eerst langs vijf punten te
              scrollen. Op een breed scherm staat het beeld weer rechts. */}
          <Image
            src="/images/deelnemers-veilig.webp"
            alt={t.beeldAlt}
            width={1450}
            height={1200}
            className="w-full h-auto order-1 lg:order-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

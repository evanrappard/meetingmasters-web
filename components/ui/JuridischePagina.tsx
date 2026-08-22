import { JURIDISCH_BIJGEWERKT } from "@/lib/bijgewerkt";

type JuridischePaginaProps = {
  titel: string;
  intro: string;
  children: React.ReactNode;
  /** Afwijkende datum; standaard de datum uit lib/bijgewerkt.ts */
  bijgewerkt?: string;
  taal?: "nl" | "en";
};

/**
 * Gedeelde opzet voor de juridische pagina's (privacy, cookies). Zelfde kop en
 * leesbreedte als de andere tekstpagina's, zodat ze niet als losse bijlage
 * aanvoelen maar gewoon bij de site horen.
 */
export default function JuridischePagina({
  titel,
  intro,
  children,
  bijgewerkt,
  taal = "nl",
}: JuridischePaginaProps) {
  const datum = bijgewerkt ?? JURIDISCH_BIJGEWERKT[taal];
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">{titel}</h1>
        <p className="text-[#525252] text-lg max-w-2xl mx-auto px-4">{intro}</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        {children}

        <p className="text-[#6D6D6D] text-sm pt-6 border-t border-gray-200">
          {taal === "en" ? "Last updated" : "Laatst bijgewerkt"}: {datum}.
        </p>
      </div>
    </div>
  );
}

/** Tekstblok met kop — houdt de opmaak van beide pagina's gelijk. */
export function Blok({
  kop,
  children,
}: {
  kop: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-4">{kop}</h2>
      <div className="text-[#525252] leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

/** Opsomming in dezelfde grijstint als de lopende tekst. */
export function Lijst({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-accent">{children}</ul>
  );
}

/**
 * Cookietabel. Naam, plaatser, doel en bewaartermijn per regel — categorieën
 * alleen volstaan niet (HvJ EU, Planet49). Op een smal scherm schuift de tabel
 * horizontaal in haar eigen kader, zodat de pagina zelf niet meebeweegt.
 */
export function CookieTabel({
  koppen,
  rijen,
}: {
  koppen: [string, string, string, string];
  rijen: { naam: string; plaatser: string; doel: string; termijn: string }[];
}) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[560px] text-sm text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            {koppen.map((k) => (
              <th key={k} className="py-2 pr-4 font-bold text-dark-grey align-bottom">
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rijen.map((r) => (
            <tr key={r.naam} className="border-b border-gray-200 align-top">
              <td className="py-2 pr-4">
                <code className="text-[13px] text-dark-grey">{r.naam}</code>
              </td>
              <td className="py-2 pr-4">{r.plaatser}</td>
              <td className="py-2 pr-4">{r.doel}</td>
              <td className="py-2 whitespace-nowrap">{r.termijn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

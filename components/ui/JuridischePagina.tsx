import { JURIDISCH_BIJGEWERKT } from "@/lib/bedrijfsgegevens";

type JuridischePaginaProps = {
  titel: string;
  intro: string;
  children: React.ReactNode;
  /** Afwijkende datum; standaard de datum uit lib/bedrijfsgegevens.ts */
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
  bijgewerkt = JURIDISCH_BIJGEWERKT,
  taal = "nl",
}: JuridischePaginaProps) {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">{titel}</h1>
        <p className="text-[#666666] text-lg max-w-2xl mx-auto px-4">{intro}</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        {children}

        <p className="text-[#888888] text-sm pt-6 border-t border-gray-200">
          {taal === "en" ? "Last updated" : "Laatst bijgewerkt"}: {bijgewerkt}.
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
      <div className="text-[#666666] leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

/** Opsomming in dezelfde grijstint als de lopende tekst. */
export function Lijst({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-accent">{children}</ul>
  );
}

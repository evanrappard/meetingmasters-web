type LastUpdatedProps = {
  /** Weergavedatum, bv. "15 juni 2026". */
  date?: string;
  /** Taal van het label ervoor. De datum zelf geef je zelf mee. */
  taal?: "nl" | "en";
  className?: string;
};

/**
 * Zichtbare "laatst bijgewerkt"-datum — een recency-signaal voor zoekmachines
 * en AI-tools (GEO). Geef per pagina de datum mee waarop de inhoud is bijgewerkt.
 */
export default function LastUpdated({
  date = "15 juni 2026",
  taal = "nl",
  className = "",
}: LastUpdatedProps) {
  return (
    <p className={`text-xs ${className}`}>
      {taal === "en" ? "Last updated" : "Laatst bijgewerkt"}: {date}
    </p>
  );
}

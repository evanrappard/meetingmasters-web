type LastUpdatedProps = {
  /** Weergavedatum, bv. "15 juni 2026". */
  date?: string;
  className?: string;
};

/**
 * Zichtbare "laatst bijgewerkt"-datum — een recency-signaal voor zoekmachines
 * en AI-tools (GEO). Geef per pagina de datum mee waarop de inhoud is bijgewerkt.
 */
export default function LastUpdated({ date = "15 juni 2026", className = "" }: LastUpdatedProps) {
  return (
    <p className={`text-xs text-[#999999] ${className}`}>
      Laatst bijgewerkt: {date}
    </p>
  );
}

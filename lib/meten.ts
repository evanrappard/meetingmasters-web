/**
 * Eén plek voor de gebeurtenissen die we naar Google Analytics sturen.
 *
 * `gtag` bestaat alleen als de bezoeker "Alles accepteren" heeft gekozen: het
 * script wordt anders niet ingeladen (zie `components/ui/Analytics.tsx`). Deze
 * functie hoeft de toestemming dus niet zelf te controleren. Staat er geen
 * `gtag`, dan gebeurt er stil niets, en dat is precies goed.
 *
 * Gebruik:
 *   import { meet } from "@/lib/meten";
 *   meet("events_view_all");
 *   meet("events_goal_select", { doel: "koers", format: "strategiedagen" });
 */

export type MeetWaarden = Record<string, string | number | boolean>;

export function meet(naam: string, waarden: MeetWaarden = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", naam, waarden);
}

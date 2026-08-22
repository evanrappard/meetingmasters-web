"use client";

/**
 * HubSpot-tracking staat standaard uit en gaat pas aan met toestemming.
 *
 * Wat er op deze site gebeurt (gemeten met `node scripts/cookie-inventaris.mjs`):
 *
 * - De **formulieren** laden alleen het embed-script van HubSpot. Dat zet geen
 *   trackingcookies; het enige wat verschijnt is `__cf_bm` op HubSpots eigen
 *   domeinen — de botfilter van hun CDN, dertig minuten geldig.
 * - De **agenda** (`HubSpotAgenda`) is een ander verhaal: de meetings-embed
 *   trekt HubSpots hele analytics-stack mee (`hs-analytics.net`,
 *   `hs-banner.com`, `track-eu1.hubspot.com`). Dáár is deze schakelaar voor.
 *
 * `_hsq` is de wachtrij die HubSpots trackingcode uitleest zodra hij binnen is.
 * Door er vóór het laden `doNotTrack` in te zetten, verstuurt die code niets —
 * het formulier en de agenda blijven gewoon werken. Bij "Alles accepteren"
 * zetten we hem om; bij intrekken weer terug én ruimen we op wat er staat.
 *
 * Voegt iemand later alsnog het algemene trackingscript toe
 * (`js.hs-scripts.com/<portalId>.js`), dan is de toestemming daarmee al goed
 * geregeld. Roep dit dus áltijd aan vóór je een HubSpot-script laadt.
 */

type HsQueue = { push: (arg: unknown[]) => void };

function queue(): HsQueue {
  const w = window as unknown as { _hsq?: unknown[] };
  w._hsq = w._hsq || [];
  return w._hsq as unknown as HsQueue;
}

/** Trackingcookies van HubSpot. De consent-cookies (`__hs_do_not_track`,
 *  `__hs_opt_out`, `__hs_cookie_cat_pref`) blijven juist staan — die leggen
 *  vast dát er niet gevolgd mag worden. */
const TRACKINGCOOKIES = ["hubspotutk", "__hstc", "__hssc", "__hssrc"];

function wisTrackingCookies() {
  for (const naam of TRACKINGCOOKIES) {
    for (const domein of ["", `; domain=${location.hostname}`, `; domain=.${location.hostname}`]) {
      document.cookie = `${naam}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domein}`;
    }
  }
}

/**
 * Zet HubSpot-tracking aan of uit. Veilig om vaak aan te roepen, en veilig om
 * aan te roepen vóórdat er een HubSpot-script geladen is: de wachtrij wordt dan
 * later alsnog uitgelezen.
 */
export function zetHubSpotTracking(toegestaan: boolean) {
  if (typeof window === "undefined") return;
  try {
    if (toegestaan) {
      queue().push(["doNotTrack", { track: true }]);
    } else {
      queue().push(["doNotTrack"]);
      wisTrackingCookies();
    }
  } catch {
    // Als dit niet lukt is er geen HubSpot-script actief; dan valt er ook
    // niets te volgen.
  }
}

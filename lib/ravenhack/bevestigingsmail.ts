/**
 * De bevestigingsmail bij een R@venHack-aanvraag.
 *
 * Dezelfde inhoud als het gele blok op het scherm, maar dan in de mailbox: wat
 * er gekozen is, hoe de prijs is opgebouwd, en hoe het verdergaat. Het is een
 * ontvangstbevestiging, geen boeking — die staat pas vast na ons antwoord.
 *
 * Alles wat hier binnenkomt is al door de route gecontroleerd en de prijs is
 * daar opnieuw uitgerekend. Deze module maakt er alleen tekst van.
 */

import { TEKST, VARIANTEN, type SpelTaal, type VariantSleutel } from "@/config/ravenhack";
import { bedrag, prijsopbouwRegels, type Prijs } from "@/lib/ravenhack/prijs";
import type { Taal } from "@/lib/talen";

export type Bevestiging = {
  taal: Taal;
  voornaam: string;
  variant: VariantSleutel;
  spelTaal: SpelTaal;
  deelnemers: number;
  datum: string;
  tijd: string;
  kortingscode: string;
  poNummer: string;
  prijs: Prijs;
};

const CONTACT = { telefoon: "+31 6 4575 2819", email: "contact@meetingmasters.online" };

/**
 * Het logo bovenaan de mail.
 *
 * Een mailprogramma haalt beeld op bij een adres op internet; het kan niets met
 * een bestand uit deze map. Daarom het volledige adres van de live site, mét
 * `www.`: zonder dat verwijst de site door, en niet elk mailprogramma volgt zo'n
 * doorverwijzing voor een plaatje. PNG en niet WebP, want Outlook en een aantal
 * andere programma's kennen WebP niet.
 *
 * Het bronbestand is 1500 × 547; we tonen het op 180 breed, dus ook op een
 * scherm met dubbele puntdichtheid blijft het scherp. Veel mensen hebben beeld
 * standaard uit staan — dan valt de alt-tekst in, en die is daarom opgemaakt
 * zoals de naam er anders zou staan.
 */
const LOGO = {
  adres: "https://www.meetingmasters.online/images/logo.png",
  breedte: 180,
  hoogte: 66,
  site: { nl: "https://www.meetingmasters.online/nl", en: "https://www.meetingmasters.online/en" },
};

const WOORDEN = {
  nl: {
    onderwerp: "Je aanvraag voor R@venHack is binnen.",
    aanhef: (naam: string) => (naam ? `Hoi ${naam},` : "Hoi,"),
    inleiding:
      "Dank je wel. Je aanvraag voor R@venHack is bij ons binnen. Hieronder staat wat je hebt doorgegeven, zodat je het bij de hand hebt.",
    gekozen: "Wat je hebt gekozen",
    opbouw: "Prijsopbouw",
    verder: "Hoe het verdergaat",
    verderTekst:
      "Wij checken de beschikbaarheid van je datum en tijd en komen zo snel mogelijk bij je terug, uiterlijk binnen twee werkdagen. Pas na onze bevestiging staat de boeking vast.",
    // Kort: dat de boeking pas na onze bevestiging vaststaat, zegt de alinea
    // hierboven al. Twee keer dezelfde mededeling maakt geen van beide sterker.
    voorbehoud: "Aan dit overzicht kun je geen rechten ontlenen.",
    goedOmTeWeten: "Goed om te weten",
    haast: "Iets met haast? Bel of mail ons:",
    groet: "Hartelijke groet,",
    ondertekening: "Emilie van Rappard\nMeetingMasters Online",
    labels: {
      spel: "Spel",
      spelTaal: "Taal van de sessie",
      deelnemers: "Aantal deelnemers",
      datum: "Gewenste datum",
      tijd: "Gewenste starttijd",
      po: "PO- of referentienummer",
    },
    talen: { nl: "Nederlands", en: "Engels" },
    voetnoot:
      "Je krijgt deze e-mail omdat je op meetingmasters.online een R@venHack-sessie hebt aangevraagd.",
  },
  en: {
    onderwerp: "We've received your R@venHack request.",
    aanhef: (naam: string) => (naam ? `Hi ${naam},` : "Hi,"),
    inleiding:
      "Thank you. Your R@venHack request has reached us. Below is what you sent through, so you have it to hand.",
    gekozen: "What you chose",
    opbouw: "Price breakdown",
    verder: "What happens next",
    verderTekst:
      "We check whether your date and time are available and get back to you as soon as we can, within two working days at the latest. Your booking is confirmed once you receive our confirmation.",
    voorbehoud: "No rights can be derived from this overview.",
    goedOmTeWeten: "Good to know",
    haast: "In a hurry? Call or email us:",
    groet: "Kind regards,",
    ondertekening: "Emilie van Rappard\nMeetingMasters Online",
    labels: {
      spel: "Game",
      spelTaal: "Language of the session",
      deelnemers: "Number of participants",
      datum: "Preferred date",
      tijd: "Preferred start time",
      po: "PO or reference number",
    },
    talen: { nl: "Dutch", en: "English" },
    voetnoot:
      "You are receiving this email because you requested a R@venHack session on meetingmasters.online.",
  },
} as const;

/** "2026-09-12" wordt "zaterdag 12 september 2026". Onbekend blijft onbekend. */
function alsDatum(datum: string, taal: Taal): string {
  const d = new Date(`${datum}T12:00:00`);
  if (Number.isNaN(d.getTime())) return datum;
  return new Intl.DateTimeFormat(taal === "nl" ? "nl-NL" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/** Alles wat een bezoeker zelf heeft ingetypt gaat hier langs voordat het in HTML komt. */
function veilig(waarde: string): string {
  return waarde
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** De regels van "Wat je hebt gekozen", zonder de lege. */
function gekozenRegels(b: Bevestiging): { label: string; waarde: string }[] {
  const w = WOORDEN[b.taal];
  const regels = [
    { label: w.labels.spel, waarde: VARIANTEN[b.variant].naam[b.taal] },
    { label: w.labels.spelTaal, waarde: w.talen[b.spelTaal] },
    { label: w.labels.deelnemers, waarde: String(b.deelnemers) },
    { label: w.labels.datum, waarde: b.datum ? alsDatum(b.datum, b.taal) : "" },
    { label: w.labels.tijd, waarde: b.tijd },
    { label: w.labels.po, waarde: b.poNummer },
  ];
  return regels.filter((r) => r.waarde.trim() !== "");
}

/**
 * De voorwaarden zoals ze op de site staan, zonder de eerste. Die eerste gaat
 * over het checken van de beschikbaarheid, en dat staat in deze mail al onder
 * "Hoe het verdergaat" — twee keer hetzelfde leest als een slordigheid.
 */
function voorwaarden(b: Bevestiging): readonly string[] {
  return TEKST[b.taal].voorwaarden.slice(1);
}

function opbouwRegels(b: Bevestiging) {
  return prijsopbouwRegels(
    b.prijs,
    {
      variant: b.variant,
      deelnemers: b.deelnemers,
      datum: b.datum,
      tijd: b.tijd,
      kortingscode: b.kortingscode,
      kortingspercentage: b.prijs.kortingspercentage,
    },
    // De taal van de mail, niet die van de sessie. Die twee kunnen verschillen:
    // een Nederlandse aanvraag voor een Engelstalige sessie is heel gewoon. Het
    // is de lézer die bepaalt of er "€ 675,00" of "€ 675.00" hoort te staan, en
    // stond hier eerst de speltaal, dan kreeg een Nederlandse mail Engelse
    // getallen. De naam van de variant is in beide talen gelijk, dus daar
    // verandert niets aan.
    b.taal,
    TEKST[b.taal].calculator.opbouw
  );
}

export function bouwTekst(b: Bevestiging): string {
  const w = WOORDEN[b.taal];
  const delen = [
    w.aanhef(b.voornaam),
    "",
    w.inleiding,
    "",
    w.gekozen.toUpperCase(),
    ...gekozenRegels(b).map((r) => `${r.label}: ${r.waarde}`),
  ];

  if (b.prijs.toonPrijs) {
    delen.push(
      "",
      w.opbouw.toUpperCase(),
      ...opbouwRegels(b).map((r) => `${r.label}${r.gelijkteken ? " =" : ":"} ${r.waarde}`)
    );
  }

  delen.push(
    "",
    w.verder.toUpperCase(),
    w.verderTekst,
    w.voorbehoud,
    "",
    w.goedOmTeWeten.toUpperCase(),
    ...voorwaarden(b).map((v) => `- ${v}`),
    "",
    `${w.haast} ${CONTACT.telefoon} | ${CONTACT.email}`,
    "",
    w.groet,
    w.ondertekening,
    "",
    w.voetnoot
  );

  return delen.join("\n");
}

export function bouwHtml(b: Bevestiging): string {
  const w = WOORDEN[b.taal];
  const grijs = "#5F5F5F";
  const donker = "#2D2D2D";

  const kop = (tekst: string) =>
    `<p style="margin:32px 0 12px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${grijs}">${veilig(tekst)}</p>`;

  const rij = (label: string, waarde: string, opvallend = false) => {
    const rand = opvallend ? "border-top:1px solid #E7DFC4;" : "";
    const marge = opvallend ? "12px" : "7px";
    return `<tr>
      <td style="${rand}padding:${marge} 16px ${marge} 0;font-size:15px;font-weight:${opvallend ? 700 : 400};color:${opvallend ? donker : grijs};vertical-align:top">${veilig(label)}</td>
      <td style="${rand}padding:${marge} 0;font-size:15px;color:${donker};font-weight:${opvallend ? 700 : 400};text-align:right;vertical-align:top">${veilig(waarde)}</td>
    </tr>`;
  };

  const tabel = (rijen: string) =>
    `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">${rijen}</table>`;

  const opbouw = b.prijs.toonPrijs
    ? kop(w.opbouw) +
      `<div style="border-left:4px solid #EEBE3D;background:#FFFBEE;border-radius:8px;padding:16px 20px">` +
      // De laatste regel is altijd het totaal; die krijgt de nadruk.
      tabel(
        opbouwRegels(b)
          .map((r, i, alle) => rij(r.label, r.waarde, i === alle.length - 1))
          .join("")
      ) +
      `</div>`
    : "";

  return `<!doctype html>
<html lang="${b.taal}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${veilig(w.onderwerp)}</title></head>
<body style="margin:0;padding:0;background:#FAFAF9">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${veilig(w.inleiding)}</div>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#FAFAF9">
<tr><td align="center" style="padding:32px 16px">
<table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid #E7E7E3;border-radius:12px">
<tr><td style="padding:36px 36px 40px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:${donker}">

  <p style="margin:0 0 28px">
    <a href="${LOGO.site[b.taal]}" style="text-decoration:none">
      <img src="${LOGO.adres}" alt="MeetingMasters Online" width="${LOGO.breedte}" height="${LOGO.hoogte}"
           style="display:block;width:${LOGO.breedte}px;height:auto;border:0;outline:none;font-size:15px;font-weight:700;letter-spacing:.08em;color:#EEBE3D">
    </a>
  </p>

  <h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;font-weight:700;color:${donker}">${veilig(w.onderwerp)}</h1>

  <p style="margin:0 0 8px;font-size:16px;line-height:1.6;color:${donker}">${veilig(w.aanhef(b.voornaam))}</p>
  <p style="margin:0;font-size:16px;line-height:1.6;color:#434343">${veilig(w.inleiding)}</p>

  ${kop(w.gekozen)}
  ${tabel(gekozenRegels(b).map((r) => rij(r.label, r.waarde)).join(""))}

  ${opbouw}

  ${kop(w.verder)}
  <p style="margin:0 0 10px;font-size:16px;line-height:1.6;color:#434343">${veilig(w.verderTekst)}</p>
  <p style="margin:0;font-size:14px;line-height:1.6;color:${grijs}">${veilig(w.voorbehoud)}</p>

  ${kop(w.goedOmTeWeten)}
  <ul style="margin:0;padding-left:20px;font-size:15px;line-height:1.7;color:#434343">
    ${voorwaarden(b).map((v) => `<li>${veilig(v)}</li>`).join("")}
  </ul>

  <p style="margin:32px 0 0;font-size:15px;line-height:1.6;color:#434343">
    ${veilig(w.haast)}
    <a href="tel:${CONTACT.telefoon.replace(/\s/g, "")}" style="color:${donker}">${veilig(CONTACT.telefoon)}</a> |
    <a href="mailto:${CONTACT.email}" style="color:${donker}">${veilig(CONTACT.email)}</a>
  </p>

  <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:${donker}">
    ${veilig(w.groet)}<br>${veilig(w.ondertekening).replace(/\n/g, "<br>")}
  </p>

</td></tr>
</table>
<p style="max-width:600px;margin:16px auto 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;font-size:12px;line-height:1.6;color:#8A8A85;text-align:center">${veilig(w.voetnoot)}</p>
</td></tr>
</table>
</body>
</html>`;
}

export function bouwBevestiging(b: Bevestiging) {
  return {
    onderwerp: WOORDEN[b.taal].onderwerp,
    html: bouwHtml(b),
    tekst: bouwTekst(b),
  };
}

/** Wat wij zelf willen zien in de melding: het bedrag zonder opsmuk. */
export function totaalTekst(prijs: Prijs, taal: SpelTaal = "nl"): string {
  return prijs.toonPrijs ? bedrag(prijs.totaalExclBtw, taal) : "—";
}

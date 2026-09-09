/**
 * Eén plek waar de site zelf e-mail de deur uit doet.
 *
 * Waarom niet via HubSpot? Een e-mail uit HubSpot is een *marketing*bericht: hij
 * gaat alleen naar marketingcontacten die zich voor een abonnementstype hebben
 * aangemeld. Een boekingsbevestiging is geen marketing maar een transactioneel
 * bericht — nodig om de afspraak uit te voeren — en hoort dus bij iedereen aan
 * te komen, ook bij wie het nieuwsbriefvinkje heeft laten staan. HubSpot lost
 * dat alleen op met de losse Transactional Email add-on; te duur voor dit doel.
 *
 * Er zit met opzet geen npm-pakket onder: Resend heeft een gewone REST-API en
 * `fetch` is genoeg. Eén afhankelijkheid minder om bij te houden.
 *
 * Instellen gebeurt met twee omgevingsvariabelen, in `.env.local` én in Vercel:
 *
 *   RESEND_API_KEY   de sleutel uit het Resend-dashboard
 *   MAIL_AFZENDER    bv. `MeetingMasters <contact@meetingmasters.online>`
 *
 * Staat er één van de twee niet, dan verstuurt de site niets en meldt dat
 * netjes. De site blijft dus gewoon werken zolang dit nog niet is ingesteld.
 */

export type Mail = {
  naar: string;
  onderwerp: string;
  /** De opgemaakte versie. */
  html: string;
  /** Dezelfde inhoud als platte tekst, voor wie geen HTML ziet. */
  tekst: string;
  /** Waar een antwoord heen moet, als dat een ander adres is dan de afzender. */
  antwoordNaar?: string;
};

export type Verzendstand =
  | { klaar: true }
  | { klaar: false; reden: "geen-sleutel" | "geen-afzender" };

export function verzendstand(): Verzendstand {
  if (!process.env.RESEND_API_KEY) return { klaar: false, reden: "geen-sleutel" };
  if (!process.env.MAIL_AFZENDER) return { klaar: false, reden: "geen-afzender" };
  return { klaar: true };
}

/**
 * Verstuurt één e-mail. Gooit een fout als het niet lukt; de aanroeper bepaalt
 * wat er dan gebeurt — bij een bevestiging is dat: stil laten en verder gaan,
 * want de aanvraag zelf staat allang in HubSpot.
 */
export async function verstuurMail(mail: Mail): Promise<void> {
  const stand = verzendstand();
  if (!stand.klaar) throw new Error(`verzenden staat niet aan: ${stand.reden}`);

  const antwoord = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.MAIL_AFZENDER,
      to: [mail.naar],
      subject: mail.onderwerp,
      html: mail.html,
      text: mail.tekst,
      ...(mail.antwoordNaar ? { reply_to: mail.antwoordNaar } : {}),
    }),
  });

  if (!antwoord.ok) {
    const tekst = await antwoord.text().catch(() => "");
    throw new Error(`Resend gaf ${antwoord.status}: ${tekst.slice(0, 300)}`);
  }
}

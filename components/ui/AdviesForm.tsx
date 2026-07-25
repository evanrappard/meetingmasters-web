"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contact@meetingmasters.online";

/**
 * Vrijblijvend-advies-formulier. Er is (nog) geen server-side verwerking,
 * dus de inzending wordt via een mailto-link in de eigen mailclient geopend.
 * Wil je later server-side afhandeling (opslaan + notificatie), dan kan hier
 * een API-route / Supabase-insert achter.
 */
export default function AdviesForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [bericht, setBericht] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Vrijblijvend advies — aanvraag van ${naam || "website"}`;
    const body = [
      `Naam: ${naam}`,
      `E-mail: ${email}`,
      telefoon ? `Telefoon: ${telefoon}` : null,
      "",
      bericht,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "w-full rounded border border-[#DCDCDC] bg-white px-4 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#AAAAAA] focus:border-[#28A8AA] focus:outline-none focus:ring-1 focus:ring-[#28A8AA] transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="naam" className="block text-xs font-bold text-[#545454] mb-1.5">
            Naam
          </label>
          <input
            id="naam"
            type="text"
            required
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Je naam"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#545454] mb-1.5">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="naam@bedrijf.nl"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="telefoon" className="block text-xs font-bold text-[#545454] mb-1.5">
          Telefoon <span className="font-normal text-[#AAAAAA]">(optioneel)</span>
        </label>
        <input
          id="telefoon"
          type="tel"
          value={telefoon}
          onChange={(e) => setTelefoon(e.target.value)}
          placeholder="06 12 34 56 78"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="bericht" className="block text-xs font-bold text-[#545454] mb-1.5">
          Je vraag of idee
        </label>
        <textarea
          id="bericht"
          required
          rows={5}
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          placeholder="Vertel kort waar je over wilt sparren — een idee, een bestaand ontwerp of een opzet die je voor ogen hebt."
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
      >
        Verstuur aanvraag →
      </button>
      <p className="text-xs text-[#898989] leading-relaxed">
        Na versturen opent je eigen mailprogramma met de ingevulde gegevens. Liever
        direct mailen of bellen? Gebruik de opties hiernaast.
      </p>
    </form>
  );
}

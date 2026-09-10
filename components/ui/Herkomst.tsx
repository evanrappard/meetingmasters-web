"use client";

import { useEffect } from "react";
import { onthoudHerkomst, type Herkomstsoort } from "@/lib/eventwens";

/**
 * Onthoudt op welke pagina de bezoeker was, zodat een formulier verderop al
 * weet waar het over gaat.
 *
 * Waarom dit bestaat: op een eventpagina staat "Vrijblijvende offerte" in de
 * header, en dat formulier begint met de vraag "Waarover gaat deze vraag?".
 * Die vraag is op dat moment al beantwoord. Wie van de strategiedag-pagina
 * komt, hoeft niet opnieuw te vertellen dat het over een event gaat, en de
 * naam van het format komt in het berichtveld te staan.
 *
 * Dit component toont niets. Het schrijft alleen naar `lib/eventwens.ts`, in
 * `sessionStorage`, en laat de tekst die iemand eerder zelf typte staan. Zonder
 * JavaScript gebeurt er niets en staat het formulier er gewoon leeg bij.
 */
export default function Herkomst({
  soort,
  herkomst,
}: {
  /** In gewone taal, zoals het in het berichtveld mag komen: "Online strategiedag". */
  soort: string;
  /** De waarde voor de keuzelijst in HubSpot. */
  herkomst: Herkomstsoort;
}) {
  useEffect(() => {
    onthoudHerkomst(soort, herkomst);
  }, [soort, herkomst]);
  return null;
}

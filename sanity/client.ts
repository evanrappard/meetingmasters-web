import { createClient } from "next-sanity";

/**
 * De Sanity-client, maar alleen als hij ook geconfigureerd is.
 *
 * `createClient` gooit een fout zodra `projectId` ontbreekt, en dat gebeurt
 * tijdens het laden van de module — dus vóórdat de `.catch()` in de pagina's
 * zijn werk kan doen. Zonder de omgevingsvariabelen liep de hele bouw daarop
 * stuk, met "Configuration must contain `projectId`".
 *
 * Dat hoort niet: het CMS vult alleen de cijfers, logo's en cases op de
 * homepage, en daar staan vaste terugvalwaarden voor klaar. Ontbreekt Sanity,
 * dan is `client` nu `null` en gebruiken die pagina's gewoon de vaste tekst.
 *
 * Praktisch gevolg: de site bouwt op Vercel ook als de variabelen er nog niet
 * staan, en preview-omgevingen werken zonder CMS-toegang.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const sanityIngesteld = Boolean(projectId);

export const client = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

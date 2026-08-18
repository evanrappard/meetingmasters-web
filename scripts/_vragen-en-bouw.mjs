// Bouwt app/nl/technologie/hulp/vragen-en.ts uit de losse vertaalbestanden.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
const MAP = "/private/tmp/claude-501/-Users-emilievanrappard/4da308e1-f28d-4ad3-a632-d535c7e29365/scratchpad/";
const alles = {};
for (const f of readdirSync(MAP).filter((f) => /^vr-\d+\.json$/.test(f)).sort())
  Object.assign(alles, JSON.parse(readFileSync(MAP + f, "utf8")));

const nl = JSON.parse(readFileSync(MAP + "vragen-nl.json", "utf8"));
// controle: evenveel vragen per tool en categorie als in het Nederlands
for (const [tool, blok] of Object.entries(nl))
  for (const [cat, v] of Object.entries(blok)) {
    const n = alles[tool]?.[cat]?.length ?? 0;
    if (n !== v.length) console.log(`LET OP ${tool}/${cat}: ${n} vertaald, ${v.length} in het Nederlands`);
  }

const uit = `import type { Vraag, Categorie } from "./vragen";

/**
 * De Engelse versie van de hulpvragen.
 *
 * De knoppen en menupaden die hier genoemd worden zijn de échte Engelse
 * labels van de platforms — "Join from your browser", "Start Video",
 * "System Settings → Privacy & Security → Screen Recording". Een letterlijke
 * vertaling van de Nederlandse instructie zou een Engelse deelnemer naar een
 * knop sturen die niet bestaat.
 *
 * Dit bestand wordt gegenereerd met scripts/_vragen-en-bouw.mjs.
 */

export const CATEGORIEEN_EN: Categorie[] = [
  { id: "link", label: "I cannot get in", icoon: "🔑", intro: "Link lost, or nothing happens when you click it." },
  { id: "audio", label: "My audio is not working", icoon: "🔊", intro: "I cannot hear anyone, or nobody can hear me." },
  { id: "video", label: "My video is not working", icoon: "📷", intro: "Camera black or frozen, or you cannot see the others." },
  { id: "overig", label: "Something else is wrong", icoon: "🛟", intro: "Stuttering, screen sharing, breakout rooms or anything else." },
];

/** De toolnamen zijn merknamen en dus in beide talen gelijk, op "Algemeen" na. */
export const TOOLS_EN = ["General", "SpatialChat", "Zoom Events", "Zoom", "Microsoft Teams"];

type QA = { q: string; a?: string; stappen?: string[] };
type ToolBlock = { link: QA[]; audio: QA[]; video: QA[]; overig: QA[] };

const DATA_EN: Record<string, ToolBlock> = ${JSON.stringify(alles, null, 2)};

const CAT_IDS: (keyof ToolBlock)[] = ["link", "audio", "video", "overig"];

/**
 * De id's blijven gelijk aan de Nederlandse, zodat een link naar een vraag in
 * beide talen op hetzelfde antwoord uitkomt. De tool heet in het Engels
 * "General" maar houdt intern de sleutel "Algemeen".
 */
const TOOL_SLEUTELS = ["Algemeen", "SpatialChat", "Zoom Events", "Zoom", "Microsoft Teams"];

export const VRAGEN_EN: Vraag[] = TOOL_SLEUTELS.flatMap((sleutel, t) =>
  CAT_IDS.flatMap((cat) =>
    (DATA_EN[sleutel]?.[cat] ?? []).map((qa, i) => ({
      id: \`\${sleutel}-\${cat}-\${i}\`.replace(/\\s+/g, "-").toLowerCase(),
      categorie: cat,
      tool: TOOLS_EN[t],
      vraag: qa.q,
      antwoord: qa.a ?? (qa.stappen ?? []).join(" "),
      stappen: qa.stappen,
    }))
  )
);
`;
writeFileSync("app/nl/technologie/hulp/vragen-en.ts", uit);
let n = 0;
for (const blok of Object.values(alles)) for (const v of Object.values(blok)) n += v.length;
console.log(n, "Engelse vragen weggeschreven");

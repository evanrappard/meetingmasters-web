import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    /**
     * Mappen die de codecontrole moet overslaan. Zonder deze regel loopt hij
     * ook over node_modules (de code van anderen) en de bouwmap, en komt hij
     * met tienduizenden meldingen terug. Dan kijkt niemand er meer naar en
     * gaan echte fouten verloren in de ruis.
     */
    ignores: ["node_modules/**", ".next/**", "out/**", "public/tools/**", "sanity/**", ".agents/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    /**
     * Hier staat bewust een gewone <img> in plaats van next/image. Het gaat om
     * logo's die al op maat als WebP klaarstaan en om de startafbeelding van de
     * video-hero, die we zelf moeten kunnen aansturen. Next/image zou er niets
     * aan verbeteren en de waarschuwing verbergt de meldingen die er wél toe
     * doen. Komt er een nieuw bestand bij met een gewone <img>, kijk dan eerst
     * of next/image niet gewoon beter is voordat je het hier toevoegt.
     */
    files: [
      "app/nl/technologie/hulp/page.tsx",
      "app/nl/technologie/tools/page.tsx",
      "components/ui/HeroVideo.tsx",
      "components/ui/PlatformKeuze.tsx",
      "components/ui/TechHulp.tsx",
    ],
    rules: { "@next/next/no-img-element": "off" },
  },
];

export default eslintConfig;

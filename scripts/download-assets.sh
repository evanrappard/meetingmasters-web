#!/bin/bash
set -e
OUT="$(dirname "$0")/../public/images"
mkdir -p "$OUT"

download() {
  local name="$1"
  local url="$2"
  local dest="$OUT/$name"
  if [ -f "$dest" ]; then
    echo "  ✓ $name (exists)"
  else
    echo "  ↓ $name"
    curl -sL --max-time 30 "$url" -o "$dest" && echo "    saved" || echo "    FAILED"
  fi
}

download "logo.png"        "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/1598439592089-UKNEQ5ZTIV9LG1LCUZBY/LogoMM.png?format=1500w"
download "hero-1.jpg"      "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/679a41a0-b62d-48b9-b8f8-13b64491e17f/MM+Website+afbeeldingen+%2817%29.jpg"
download "hero-2.jpg"      "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/bb9b9bf8-111f-42b3-8913-8c8e8100fb01/85.jpg"
download "hero-3.jpg"      "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/239fbc5d-47fc-45ee-abfd-c46b82738ee8/65.jpg"
download "hero-4.jpg"      "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/2ccc86c6-3fff-43d2-855d-ac0679ace8f0/MM+Website+afbeeldingen+%2822%29.jpg"
download "format-party.png" "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/43d4d57c-809a-43dd-b8bb-5d09305dde4a/Kerst+%26+magical+moments.png"
download "strategy-banner.jpg" "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/42f15b84-3111-4f3b-9c29-9c2475f64d23/Banner%2Bplanning%2B%2526%2Bdesign.jpg"
download "strategy-1.png"  "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/ed0c999b-65fb-4cce-b4a9-9b3b9873fe75/Meetingstrategie.png"
download "planning-1.png"  "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/0f163dd5-a87f-4428-ba0e-89ab3423408b/MM+Website+afbeeldingen+%2815%29.png"
download "planning-2.jpg"  "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/1598548634173-K3JHAPCKEKWSGATMH0OP/allie-gouPqaau9Qo-unsplash.jpg"
download "planning-3.jpg"  "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/1598468204385-QVMPH5C9HBDTK6K4OVS4/homepage.jpg"
download "planning-4.jpg"  "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/1598467682557-Z0QSO31JN49621FDUQDX/Depositphotos_210469976_l-2015.jpg"
download "team-emilie.jpg" "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/8a55662f-7742-4060-9830-60579039af32/231110_KC_Emilie_016HRKL.jpg"
download "team-group.jpg"  "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/546ce544-08f3-40fd-9fd9-5ef876f6d247/Screenshot+MMM+jan+2022+LEUK.jpg"
download "format-escape.png" "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/884d96d2-1e3a-46fb-aec0-f809c00efe6e/Designs+New+Product+-+Escape+%2851%29.png"
download "format-1.jpg"    "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/ac2f59e1-1733-489e-920f-d16eb3f8e029/MM+Website+afbeeldingen+%2814%29.jpg"
download "format-2.png"    "https://images.squarespace-cdn.com/content/v1/5f462068ae4b0e51ca6936c4/f0c32ecb-ada6-482b-89ed-ada19a1ac273/MM+Website+afbeeldingen+%282%29.png"

echo ""
echo "Done. Files saved:"
ls -lh "$OUT"

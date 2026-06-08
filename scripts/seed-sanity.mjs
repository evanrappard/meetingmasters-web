import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: "u17ha8px",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "sk9Yzao86s1EKy639dUBKlevFJp1kABw83hkTTQ68v30exMIWjKKwQnExnEmo1Q41DnWNfo6UaLObmdtsYz7rhjGNcdIvkIC4bTkq0ws7pG4xlblAOLeExPI76eYITP6KjSauNrLJN60GvBtCdCItyQVfMGoTPMgDV9PjkAp9CpBNFsYmT1q",
  useCdn: false,
});

// ── Helper: upload a local image file as a Sanity asset ──────────────────────
async function uploadImage(relPath) {
  const absPath = resolve(__dirname, "../public", relPath.replace(/^\//, ""));
  let buffer;
  try {
    buffer = readFileSync(absPath);
  } catch {
    console.warn(`  ⚠ Afbeelding niet gevonden: ${absPath} — overgeslagen`);
    return null;
  }
  const ext = absPath.split(".").pop();
  const asset = await client.assets.upload("image", buffer, { filename: absPath.split("/").pop(), contentType: `image/${ext}` });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

// ── 1. Homepage teksten + statistieken ──────────────────────────────────────
async function seedHomepageContent() {
  console.log("\n→ Homepage teksten...");
  const existing = await client.fetch(`*[_type == "homepageContent"][0]._id`);
  if (existing) {
    console.log("  Al aanwezig — overgeslagen");
    return;
  }
  await client.create({
    _type: "homepageContent",
    heroHeadline: "Een vergadering heb je.\nEen ontmoeting maak je.",
    heroSubline: "Wij ontwerpen online bijeenkomsten die er écht toe doen.\nMeer betrokkenheid — met 5, 50 of 500 mensen.",
    heroCta: "Plan een gesprek →",
    stats: [
      { _key: "s1", value: "Sinds 2020", label: "online meeting professionals" },
      { _key: "s2", value: "250+",       label: "events begeleid" },
      { _key: "s3", value: "94%",        label: "tevredenheid na afloop" },
      { _key: "s4", value: "47%",        label: "meer betrokkenheid*" },
      { _key: "s5", value: "66%",        label: "hogere opkomst*" },
    ],
  });
  console.log("  ✓ Aangemaakt");
}

// ── 2. Services ──────────────────────────────────────────────────────────────
async function seedServices() {
  console.log("\n→ Services...");
  const services = [
    {
      title: "Events",
      label: "Events",
      tagline: "Bijzondere bijeenkomsten voor grote groepen.",
      description: "Van strategiedagen en all-hands tot community events en kick-offs. Wij ontwerpen het concept, begeleiden de facilitatie en zorgen voor de live productie.",
      href: "/nl/events",
      order: 1,
      imgPath: "/images/events-bijeenkomst.webp",
    },
    {
      title: "Remote Office",
      label: "Remote Office",
      tagline: "Een virtueel kantoor dat afstanden overbrugt.",
      description: "Een permanente digitale thuisbasis voor internationale organisaties, hybride teams en samenwerkingsverbanden. Altijd open, altijd herkenbaar.",
      href: "/nl/remote-office",
      order: 2,
      imgPath: "/images/remote-office-virtual.webp",
    },
    {
      title: "Games & Tools",
      label: "Games & Tools",
      tagline: "Verrassende formats voor meer betrokkenheid.",
      description: "Interactie tools, online escape rooms, onboarding games en maatwerk gamification. Laagdrempelig instappen, hoge betrokkenheid.",
      href: "/nl/games-tools",
      order: 3,
      imgPath: "/images/format-escape.webp",
    },
  ];

  for (const s of services) {
    const slug = s.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const existing = await client.fetch(`*[_type == "service" && slug.current == $slug][0]._id`, { slug });
    if (existing) { console.log(`  Al aanwezig: ${s.title}`); continue; }

    const image = await uploadImage(s.imgPath);
    const doc = { _type: "service", title: s.title, slug: { _type: "slug", current: slug }, label: s.label, tagline: s.tagline, description: s.description, href: s.href, order: s.order };
    if (image) doc.image = image;
    await client.create(doc);
    console.log(`  ✓ ${s.title}`);
  }
}

// ── 3. Cases / Inspiratie ────────────────────────────────────────────────────
async function seedCases() {
  console.log("\n→ Cases...");
  const cases = [
    {
      title: "Online strategiedag voor 200 medewerkers",
      client: "Event",
      summary: "Plenaire sessies, breakouts en napraten achteraf. Deelnemers gaven een 8,4.",
      imgPath: "/images/hero-1.webp",
    },
    {
      title: "Virtueel clubhuis voor Olympiërs wereldwijd",
      client: "Remote Office",
      summary: "World Olympians Association — actief tijdens de Spelen van Parijs en Milaan.",
      imgPath: "/images/inspiratie-olyhouse.webp",
    },
    {
      title: "Cybersecurity escape room voor 80 medewerkers",
      client: "Games & Tools",
      summary: "R@venHack — laagdrempelig instappen, hoge betrokkenheid.",
      imgPath: "/images/inspiratie-escape.webp",
    },
  ];

  for (const c of cases) {
    const slug = c.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 60);
    const existing = await client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]._id`, { slug });
    if (existing) { console.log(`  Al aanwezig: ${c.title}`); continue; }

    const image = await uploadImage(c.imgPath);
    const doc = { _type: "caseStudy", title: c.title, slug: { _type: "slug", current: slug }, client: c.client, summary: c.summary, publishedAt: new Date().toISOString() };
    if (image) doc.image = image;
    await client.create(doc);
    console.log(`  ✓ ${c.title}`);
  }
}

// ── 4. Klantlogo's ───────────────────────────────────────────────────────────
async function seedLogos() {
  console.log("\n→ Klantlogo's...");
  const logos = [
    { name: "Belastingdienst",              path: "/images/logos/belastingdienst.webp" },
    { name: "ING",                          path: "/images/logos/ing.webp" },
    { name: "Bergman Clinics",              path: "/images/logos/bergman-clinics.webp" },
    { name: "Prins Bernhard Cultuurfonds",  path: "/images/logos/pbcf.webp" },
    { name: "Gemeente Amsterdam",           path: "/images/logos/amsterdam.webp" },
    { name: "Gemeente Utrecht",             path: "/images/logos/gemeente-utrecht.webp" },
    { name: "Provincie Utrecht",            path: "/images/logos/provincie-utrecht.webp" },
    { name: "Energie Nederland",            path: "/images/logos/energie-nederland.webp" },
    { name: "Vitens",                       path: "/images/logos/vitens.webp" },
    { name: "Betaalvereniging Nederland",   path: "/images/logos/betaalvereniging.webp" },
    { name: "ROC Nijmegen",                 path: "/images/logos/roc-nijmegen.webp" },
    { name: "Gemeente Roosendaal",          path: "/images/logos/roosendaal.webp" },
    { name: "PharmAccess",                  path: "/images/logos/pharmaccess.webp" },
    { name: "Aberkyn",                      path: "/images/logos/aberkyn.webp" },
    { name: "PCC",                          path: "/images/logos/pcc.webp" },
    { name: "NMQ",                          path: "/images/logos/nmq.webp" },
  ];

  for (let i = 0; i < logos.length; i++) {
    const l = logos[i];
    const existing = await client.fetch(`*[_type == "logo" && name == $name][0]._id`, { name: l.name });
    if (existing) { console.log(`  Al aanwezig: ${l.name}`); continue; }

    const image = await uploadImage(l.path);
    const doc = { _type: "logo", name: l.name, order: i + 1 };
    if (image) doc.logo = image;
    await client.create(doc);
    console.log(`  ✓ ${l.name}`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 MeetingMasters — Sanity seed script");
  console.log("Project: u17ha8px | Dataset: production\n");

  await seedHomepageContent();
  await seedServices();
  await seedCases();
  await seedLogos();

  console.log("\n✅ Klaar! Open localhost:3001/studio om de content te bekijken.");
}

main().catch((err) => { console.error("❌ Fout:", err.message); process.exit(1); });

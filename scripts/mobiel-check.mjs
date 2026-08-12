/**
 * Mobiele controle: opent elke pagina op smalle schermen en meet wat er
 * buiten beeld valt. Geen giswerk — dit rapporteert het concrete element,
 * met selector en het aantal pixels dat het te ver steekt.
 *
 * Gebruikt de Chrome die al op deze Mac staat (geen eigen browser-download).
 *
 *   node scripts/mobiel-check.mjs                 # alle routes, 320/375/414
 *   node scripts/mobiel-check.mjs --shots         # + volledige schermafdrukken
 *   node scripts/mobiel-check.mjs /nl/home        # alleen deze route(s)
 *
 * Uitvoer: regels per probleem + JSON in docs/mobiel/rapport.json
 */
import { chromium } from "playwright-core";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { standaardBasis } from "./mobiel-basis.mjs";

const BASIS = process.env.BASIS ?? standaardBasis();
const BREEDTES = [320, 375, 414];
const UIT = "docs/mobiel";

const argumenten = process.argv.slice(2);
const maakShots = argumenten.includes("--shots");
const gevraagd = argumenten.filter((a) => a.startsWith("/"));

const routes = gevraagd.length
  ? gevraagd
  : readFileSync("scripts/mobiel-routes.txt", "utf8")
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);

/**
 * Zoekt elementen die buiten de schermbreedte steken. Alles wat binnen een
 * eigen scrollbaar of afgeknipt kader zit (tabellen, logo-carrousel) telt niet
 * mee: dat is opzet, geen fout.
 */
function metenInPagina() {
  const vw = document.documentElement.clientWidth;
  const overtreders = [];

  const beschrijf = (el) => {
    const klas = (el.getAttribute("class") ?? "").split(/\s+/).slice(0, 6).join(" ");
    return `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${klas ? "." + klas.replace(/\s+/g, ".") : ""}`;
  };

  const inEigenKader = (el) => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const s = getComputedStyle(p);
      if (s.overflowX !== "visible") return true;
    }
    return false;
  };

  const alle = [...document.querySelectorAll("body *")];
  const stuk = new Set();

  for (const el of alle) {
    // Next.js dev-overlay hoort niet bij de site
    if (el.closest("nextjs-portal")) continue;
    const s = getComputedStyle(el);
    if (s.display === "none" || s.visibility === "hidden" || s.position === "fixed") continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    if (r.right <= vw + 1 && r.left >= -1) continue;
    if (inEigenKader(el)) continue;
    stuk.add(el);
  }

  // Alleen het buitenste element per nest melden — anders krijg je dezelfde
  // fout tien keer, één keer per kind.
  for (const el of stuk) {
    let ouderOokStuk = false;
    for (let p = el.parentElement; p; p = p.parentElement) {
      if (stuk.has(p)) { ouderOokStuk = true; break; }
    }
    if (ouderOokStuk) continue;
    const r = el.getBoundingClientRect();
    overtreders.push({
      selector: beschrijf(el),
      tekst: (el.textContent ?? "").trim().slice(0, 60),
      teVerRechts: Math.round(Math.max(0, r.right - vw)),
      teVerLinks: Math.round(Math.max(0, -r.left)),
      breedte: Math.round(r.width),
    });
  }

  // Buiten het eigen kader steken. Dit is de fout van de event-bollen: die
  // vielen niet buiten het scherm, maar wél buiten hun kolom — en dus over
  // elkaar heen. Zonder deze check zie je dat niet.
  const buitenOuder = [];
  for (const el of alle) {
    if (el.closest("nextjs-portal")) continue;
    const s = getComputedStyle(el);
    if (s.display === "none" || s.visibility === "hidden") continue;
    if (s.position === "absolute" || s.position === "fixed") continue;
    const ouder = el.parentElement;
    if (!ouder || ouder === document.body) continue;
    const os = getComputedStyle(ouder);
    if (os.overflowX !== "visible") continue;
    // Negatieve marges zijn een bewuste techniek (randloze balken); die
    // steken links én rechts even ver uit en tellen niet als fout.
    if (parseFloat(s.marginLeft) < 0 || parseFloat(s.marginRight) < 0) continue;
    const r = el.getBoundingClientRect();
    const p = ouder.getBoundingClientRect();
    if (r.width < 1 || r.height < 1 || p.width < 1) continue;
    const over = Math.max(r.right - p.right, p.left - r.left);
    if (over > 1) {
      buitenOuder.push({ selector: beschrijf(el), in: beschrijf(ouder), over: Math.round(over) });
    }
  }

  // Broertjes die elkaar overlappen binnen een raster of rij.
  const overlappen = [];
  for (const houder of document.querySelectorAll("body *")) {
    if (houder.closest("nextjs-portal")) continue;
    const hs = getComputedStyle(houder);
    if (!/grid|flex/.test(hs.display)) continue;
    const kinderen = [...houder.children].filter((k) => {
      const ks = getComputedStyle(k);
      return ks.position !== "absolute" && ks.position !== "fixed" &&
             ks.display !== "none" && ks.visibility !== "hidden";
    });
    for (let i = 0; i < kinderen.length; i++) {
      for (let j = i + 1; j < kinderen.length; j++) {
        const a = kinderen[i].getBoundingClientRect();
        const b = kinderen[j].getBoundingClientRect();
        if (a.width < 1 || b.width < 1) continue;
        const dx = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const dy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (dx > 2 && dy > 2) {
          overlappen.push({
            a: beschrijf(kinderen[i]), b: beschrijf(kinderen[j]),
            overlapX: Math.round(dx), overlapY: Math.round(dy),
          });
        }
      }
    }
  }

  const se = document.scrollingElement;
  return {
    paginaSchuift: se.scrollWidth > se.clientWidth + 1,
    paginaBreedte: se.scrollWidth,
    schermBreedte: vw,
    overtreders: overtreders.sort((a, b) => (b.teVerRechts + b.teVerLinks) - (a.teVerRechts + a.teVerLinks)).slice(0, 8),
    buitenOuder: buitenOuder.slice(0, 8),
    overlappen: overlappen.slice(0, 8),
  };
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
mkdirSync(UIT, { recursive: true });

const rapport = [];
let problemen = 0;

for (const route of routes) {
  for (const breedte of BREEDTES) {
    const context = await browser.newContext({
      viewport: { width: breedte, height: 720 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    // Cookiekeuze vooraf zetten: de banner zelf testen we apart.
    await context.addInitScript(() => {
      try {
        localStorage.setItem(
          "mm-cookie-keuze",
          JSON.stringify({ keuze: "alles", datum: new Date().toISOString() })
        );
      } catch {}
    });
    const page = await context.newPage();
    try {
      await page.goto(BASIS + route, { waitUntil: "load", timeout: 45000 });
      await page.waitForTimeout(600);
      const uitslag = await page.evaluate(metenInPagina);
      const iets = uitslag.paginaSchuift || uitslag.overtreders.length ||
                   uitslag.buitenOuder.length || uitslag.overlappen.length;
      if (iets) {
        problemen++;
        console.log(`\n✗ ${route}  @${breedte}px  (pagina ${uitslag.paginaBreedte}px breed)`);
        for (const o of uitslag.overtreders) {
          const richting = o.teVerRechts ? `${o.teVerRechts}px rechts buiten beeld` : `${o.teVerLinks}px links buiten beeld`;
          console.log(`    ${richting}  ${o.selector}`);
          if (o.tekst) console.log(`        "${o.tekst}"`);
        }
        for (const o of uitslag.buitenOuder) {
          console.log(`    ${o.over}px buiten eigen kader  ${o.selector}`);
          console.log(`        in: ${o.in}`);
        }
        for (const o of uitslag.overlappen) {
          console.log(`    overlap ${o.overlapX}×${o.overlapY}px  ${o.a}`);
          console.log(`        met: ${o.b}`);
        }
      }
      rapport.push({ route, breedte, ...uitslag });
      if (maakShots && breedte === 375) {
        const naam = route.replace(/^\//, "").replace(/\//g, "_") || "root";
        await page.screenshot({ path: join(UIT, `${naam}.png`), fullPage: true });
      }
    } catch (e) {
      console.log(`\n! ${route} @${breedte}px — ${e.message.split("\n")[0]}`);
      rapport.push({ route, breedte, fout: e.message.split("\n")[0] });
    }
    await context.close();
  }
}

await browser.close();
writeFileSync(join(UIT, "rapport.json"), JSON.stringify(rapport, null, 2));
console.log(`\n────────\n${routes.length} routes × ${BREEDTES.length} breedtes — ${problemen} met problemen`);

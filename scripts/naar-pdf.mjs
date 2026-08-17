// Zet een HTML-bestand om naar pdf met de Chrome die op deze Mac staat.
// Gebruikt voor documenten die we zelf opmaken, zoals de Engelse checklist.
import { chromium } from "playwright-core";

const [bron, doel] = process.argv.slice(2);
const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const pagina = await browser.newPage();
await pagina.goto("file://" + bron, { waitUntil: "networkidle" });
await pagina.pdf({ path: doel, format: "A4", printBackground: true });
await browser.close();
console.log("geschreven:", doel);

/**
 * Bingo-sessies in de link.
 *
 * Een host stelt een bingo in en klikt op "Activeer". De hele instelling —
 * woorden, kleuren, logo, naam — wordt ingepakt in de link zelf. Er is dus geen
 * database en geen bestand om te uploaden: wie de link heeft, heeft de bingo.
 *
 * Daardoor kunnen meerdere klanten tegelijk hun eigen bingo draaien, elk met
 * een eigen link, zonder dat ze elkaar in de weg zitten. Bewaar de link in je
 * agenda-afspraak of draaiboek en je sessie staat klaar.
 *
 * De inhoud wordt gecomprimeerd (deflate) en daarna omgezet naar tekst die
 * veilig in een adresbalk past.
 */

const BingoSessie = (() => {
  const PARAM = "s";

  const naarBase64Url = (bytes) => {
    let ruw = "";
    for (const b of bytes) ruw += String.fromCharCode(b);
    return btoa(ruw).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };

  const vanBase64Url = (tekst) => {
    const opgevuld = tekst.replace(/-/g, "+").replace(/_/g, "/");
    const ruw = atob(opgevuld + "=".repeat((4 - (opgevuld.length % 4)) % 4));
    return Uint8Array.from(ruw, (c) => c.charCodeAt(0));
  };

  const kanComprimeren = typeof CompressionStream !== "undefined";

  async function comprimeer(tekst) {
    const invoer = new TextEncoder().encode(tekst);
    if (!kanComprimeren) return { bytes: invoer, gecomprimeerd: false };
    const stroom = new Blob([invoer]).stream().pipeThrough(new CompressionStream("deflate-raw"));
    const bytes = new Uint8Array(await new Response(stroom).arrayBuffer());
    return { bytes, gecomprimeerd: true };
  }

  async function decomprimeer(bytes) {
    const stroom = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return new Response(stroom).text();
  }

  /** Alleen bewaren wat een speler nodig heeft — scheelt lengte in de link. */
  function pakUit(config) {
    return {
      n: config.eventName,
      c: config.colors,
      t: config.contentType,
      w: config.words,
      i: config.images,
      l: config.logo,
      k: config.totalCards,
    };
  }

  function pakIn(kort) {
    return {
      eventName: kort.n,
      colors: kort.c,
      contentType: kort.t,
      words: kort.w,
      images: kort.i,
      logo: kort.l,
      totalCards: kort.k,
    };
  }

  /** Maakt de code die achter ?s= in de link komt. */
  async function maakCode(config) {
    const json = JSON.stringify(pakUit(config));
    const { bytes, gecomprimeerd } = await comprimeer(json);
    return (gecomprimeerd ? "1" : "0") + naarBase64Url(bytes);
  }

  /** Leest de code terug; geeft null als er niets bruikbaars in staat. */
  async function leesCode(code) {
    try {
      const bytes = vanBase64Url(code.slice(1));
      const json = code[0] === "1" ? await decomprimeer(bytes) : new TextDecoder().decode(bytes);
      return pakIn(JSON.parse(json));
    } catch (e) {
      console.warn("Bingo-sessie in de link is onleesbaar:", e);
      return null;
    }
  }

  /** Zet de instelling uit de link over op BingoConfig. Geeft true als dat lukte. */
  async function pasSessieToe(doelConfig) {
    const code = new URLSearchParams(window.location.search).get(PARAM);
    if (!code) return false;
    const sessie = await leesCode(code);
    if (!sessie) return false;
    for (const [sleutel, waarde] of Object.entries(sessie)) {
      if (waarde === undefined || waarde === null) continue;
      if (sleutel === "colors") Object.assign(doelConfig.colors, waarde);
      else doelConfig[sleutel] = waarde;
    }
    return true;
  }

  const basisAdres = () => {
    const pad = window.location.pathname.replace(/[^/]*$/, "");
    return window.location.origin + pad;
  };

  async function maakLinks(config) {
    const code = await maakCode(config);
    return {
      speler: `${basisAdres()}index.html?${PARAM}=${code}`,
      host: `${basisAdres()}host.html?${PARAM}=${code}`,
      code,
    };
  }

  return { maakCode, leesCode, pasSessieToe, maakLinks, PARAM };
})();

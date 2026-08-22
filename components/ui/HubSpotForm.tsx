"use client";

import { useEffect, useId, useRef, useState } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

/**
 * HubSpot serveert per datacenter een eigen embed-script. Voor een EU-account
 * (region eu1) is dat js-eu1.hsforms.net; het algemene adres werkt daar niet
 * altijd betrouwbaar mee.
 */
const scriptAdres = (region: string) =>
  region && region !== "na1"
    ? `https://js-${region}.hsforms.net/forms/embed/v2.js`
    : "https://js.hsforms.net/forms/embed/v2.js";

type HubSpotFormProps = {
  portalId: string;
  formId: string;
  /** HubSpot-datacenter van het account, bv. "eu1" of "na1". */
  region?: string;
  className?: string;
};

/**
 * Herbruikbaar component voor het embedden van een HubSpot-formulier.
 * Laadt het HubSpot embed-script eenmalig en rendert het opgegeven formulier
 * in een eigen target-div. Gebruik:
 *   <HubSpotForm portalId="123456" formId="abcd-..." region="eu1" />
 */
export default function HubSpotForm({
  portalId,
  formId,
  region = "eu1",
  className,
}: HubSpotFormProps) {
  const reactId = useId();
  // Geldige CSS/DOM-id (useId bevat ":") voor de target-div.
  const targetId = `hs-form-${reactId.replace(/:/g, "")}`;
  const created = useRef(false);
  const doel = useRef<HTMLDivElement>(null);
  const [inZicht, setInZicht] = useState(false);

  /**
   * Het HubSpot-script trekt reCAPTCHA mee: ruim 300 kB, en dat werd op elke
   * formulierpagina meteen bij het openen geladen — ook als het formulier pas
   * na drie schermen in beeld komt. We wachten daarom tot het formulier in de
   * buurt is. De marge van 600px zorgt dat het al klaarstaat tegen de tijd dat
   * de bezoeker er is; hij merkt er dus niets van.
   *
   * Zonder IntersectionObserver (heel oude browsers) laden we gewoon meteen.
   */
  useEffect(() => {
    const el = doel.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInZicht(true);
      return;
    }
    const kijker = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInZicht(true);
          kijker.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    kijker.observe(el);
    return () => kijker.disconnect();
  }, []);

  useEffect(() => {
    if (!inZicht || created.current) return;

    const create = () => {
      if (created.current || !window.hbspt) return;
      created.current = true;
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${targetId}`,
      });
    };

    if (window.hbspt) {
      create();
      return;
    }

    // Script eenmalig laden; meerdere formulieren delen hetzelfde script.
    const bron = scriptAdres(region);
    let script = document.querySelector<HTMLScriptElement>(`script[src="${bron}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = bron;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", create);
    return () => script?.removeEventListener("load", create);
  }, [inZicht, portalId, formId, region, targetId]);

  return <div ref={doel} id={targetId} className={className} />;
}

"use client";

import { useEffect, useId, useRef } from "react";

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

const HS_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";

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

  useEffect(() => {
    if (created.current) return;

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
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${HS_SCRIPT_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = HS_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", create);
    return () => script?.removeEventListener("load", create);
  }, [portalId, formId, region, targetId]);

  return <div id={targetId} className={className} />;
}

/**
 * De opmaak die we in een HubSpot-formulier zetten.
 *
 * HubSpot rendert een formulier in een eigen venstertje binnen de pagina, met
 * zijn eigen opmaak; onze stijlbladen komen daar niet binnen. Dat venstertje
 * heeft geen eigen adres — HubSpot schrijft de inhoud er zelf in — dus we mogen
 * er wél in schrijven. `HubSpotForm` doet dat via de eigenschap `stijl`, en
 * neemt de lettertypen van de pagina mee naar binnen.
 *
 * Gebruik `var(--rh-font)`: dat zet `HubSpotForm` klaar met het lettertype van
 * de site erachter.
 */
export const FORMULIERVORM = `
  /* Alles in dit venstertje erft van body. Zo pakt ook de bedanktekst die
     HubSpot ná het versturen neerzet ons lettertype, en niet Times of Arial. */
  html, body {
    font-family: var(--rh-font), "Helvetica Neue", Arial, sans-serif;
    color: #434343;
    background: transparent;
  }
  body * { font-family: inherit !important; }
  .hs-form-field { margin-bottom: 1.25rem; }
  .hs-form-field > label { margin-bottom: .5rem; display: block; }
  input[type=text], input[type=email], input[type=tel], input[type=number], select, textarea {
    width: 100% !important;
    box-sizing: border-box;
    border: 1px solid #E2E2DE !important;
    border-radius: .5rem !important;
    background: #fff !important;
    padding: .75rem 1rem !important;
    font-size: 16px !important;
    color: #2D2D2D !important;
  }
  input:focus, select:focus, textarea:focus {
    outline: none !important;
    border-color: #28A8AA !important;
    box-shadow: 0 0 0 2px rgba(40,168,170,.25) !important;
  }
  .hs-button {
    border: 0 !important;
    border-radius: .25rem !important;
    padding: .85rem 1.75rem !important;
    font-weight: 700 !important;
    cursor: pointer;
  }
  .hs-button:hover { background: #D4A835 !important; }
  .hs-error-msg, .hs-error-msgs label { color: #C64A60 !important; font-size: 14px !important; }
  .legal-consent-container { margin-top: 1.25rem; }

  /* De bedanktekst na het versturen. Zonder dit is het een kale regel op een
     wit vlak, in het lettertype van HubSpot. */
  .submitted-message {
    border: 1px solid #E7E7E3;
    border-left: 4px solid #EEBE3D;
    border-radius: .75rem;
    background: #FFFBEE;
    padding: 1.5rem 1.75rem;
    font-size: 17px;
    line-height: 1.6;
    color: #2D2D2D;
  }
  .submitted-message p { margin: 0; }
`;

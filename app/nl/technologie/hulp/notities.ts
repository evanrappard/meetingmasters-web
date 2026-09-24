/**
 * De mobiele aanvullingen bij de hulpvragen: wat er op een telefoon anders
 * gaat dan op een laptop.
 *
 * Aanleiding (24 september 2026, Emilie): de antwoorden op
 * /nl/technologie/hulp gingen allemaal uit van een laptop of computer. Wie op
 * zijn telefoon meedoet, leest instructies die daar niet bestaan — een
 * adresbalk met een slotje, een pijltje naast het microfoon-icoon, "deelnemen
 * via de browser". Dat laatste kán zelfs niet: Zoom en Teams hebben op een
 * telefoon hun app nodig.
 *
 * Per vraag kunnen drie korte regels staan, die samen in één blokje met een
 * 📱 onder de stappen komen:
 *
 * - `mobiel` — de regel achter "Mobiel:". Kort houden; het is een aanvulling,
 *   geen tweede antwoord. Alleen invullen als het op een telefoon of tablet
 *   echt anders gaat.
 * - `iphone` en `android` — alleen waar die twee van elkaar verschillen,
 *   meestal een menupad. Staan als losse regels onder de mobiel-regel.
 *
 * **Windows en Mac staan hier niet.** Dat verschil hoort tussen de stappen
 * zelf, in `vragen.ts` en `vragen-en.ts`, met de naam vooraan in de zin:
 * "Mac: Systeeminstellingen → …". Het is onderdeel van de oplossing, geen
 * kanttekening ernaast (Emilie, 24 september 2026).
 *
 * De notities staan met opzet apart van de vragen: zo lopen de twee talen
 * gelijk op — je ziet in één oogopslag of de Engelse regel er ook is. De
 * sleutel is het id uit `vragen.ts`: `<tool>-<categorie>-<nummer>`, waarbij
 * het nummer de volgorde binnen die categorie is. Verschuift een vraag van
 * plek, dan verschuift de notitie mee; `npm run hulpcheck` vangt dat.
 */

export type Notitie = {
  /** Wat er op een telefoon of tablet anders gaat. Kort. */
  mobiel?: string;
  /** Alleen bij een verschil tussen de twee, meestal een menupad. */
  iphone?: string;
  android?: string;
};

export const NOTITIES: Record<string, { nl: Notitie; en: Notitie }> = {
  // ── Algemeen ───────────────────────────────────────────────────────
  "algemeen-link-0": {
    nl: {
      mobiel:
        "Open de link niet in Outlook, Gmail of LinkedIn zelf. Houd hem ingedrukt en kies “Openen in Safari” of “Openen in Chrome”; in het ingebouwde venster werken camera en microfoon vaak niet.",
    },
    en: {
      mobiel:
        "Don't open the link inside Outlook, Gmail or LinkedIn. Press and hold it and choose “Open in Safari” or “Open in Chrome”; in the built-in window the camera and microphone often don't work.",
    },
  },
  "algemeen-link-1": {
    nl: {
      mobiel:
        "Opende hij in Outlook, Gmail of LinkedIn? Tik op de drie puntjes en kies “Openen in Safari” of “Openen in Chrome”. Stuurt hij je naar de appwinkel: Zoom en Teams hebben op een telefoon hun app nodig, SpatialChat niet.",
    },
    en: {
      mobiel:
        "Did it open inside Outlook, Gmail or LinkedIn? Tap the three dots and choose “Open in Safari” or “Open in Chrome”. If it sends you to the app store: on a phone Zoom and Teams need their app, SpatialChat doesn't.",
    },
  },
  "algemeen-link-3": {
    nl: {
      mobiel:
        "Zoom en Teams vragen eerst om hun app. Log in met het adres uit de uitnodiging, of kies “deelnemen als gast”.",
    },
    en: {
      mobiel:
        "Zoom and Teams will ask for their app first. Sign in with the address from the invitation, or choose “join as a guest”.",
    },
  },
  "algemeen-link-4": {
    nl: {
      mobiel:
        "Je staat vaak in de lijst als “iPhone van…”. Pas je naam aan zodra je binnen bent; de organisator zoekt op je echte naam.",
    },
    en: {
      mobiel:
        "You often appear in the list as “iPhone of…”. Change your name as soon as you are in; the organiser is looking for your real name.",
    },
  },
  "algemeen-audio-0": {
    nl: {
      mobiel:
        "Zet het volume harder terwijl het gesprek loopt; dat staat los van je belvolume. Stille stand uit.",
    },
    en: {
      mobiel:
        "Turn the volume up while the call is running; that is separate from your ringer volume. Switch silent mode off.",
    },
  },
  "algemeen-audio-1": {
    nl: {
      mobiel: "Toestemming geef je per app, niet in de adresbalk.",
      iphone: "Instellingen → Safari (of Chrome, Zoom, Teams) → Microfoon.",
      android: "Instellingen → Apps → de app → Machtigingen → Microfoon.",
    },
    en: {
      mobiel: "You grant permission per app, not in the address bar.",
      iphone: "Settings → Safari (or Chrome, Zoom, Teams) → Microphone.",
      android: "Settings → Apps → the app → Permissions → Microphone.",
    },
  },
  "algemeen-audio-2": {
    nl: {
      mobiel:
        "Met de luidspreker-knop ga je van het oorspeakertje naar de luidspreker. Oortjes stil? Vaak hangen ze nog aan je laptop of je auto.",
    },
    en: {
      mobiel:
        "The speaker button switches from the earpiece to the loudspeaker. Earbuds silent? They are often still connected to your laptop or your car.",
    },
  },
  "algemeen-audio-3": {
    nl: {
      mobiel:
        "Kijk je “even mee” op je telefoon terwijl je laptop ook aanstaat? Dat is de echo. Zet er één stil.",
    },
    en: {
      mobiel:
        "Following along on your phone while your laptop is on too? That's the echo. Mute one of them.",
    },
  },
  "algemeen-audio-4": {
    nl: {
      mobiel:
        "Wissel tussen wifi en 4G/5G. En blijf zitten: loop je rond, dan springt je telefoon naar een ander wifi-punt.",
    },
    en: {
      mobiel:
        "Switch between Wi-Fi and 4G/5G. And stay put: if you walk around, your phone jumps to another Wi-Fi point.",
    },
  },
  "algemeen-video-0": {
    nl: {
      mobiel:
        "Toestemming staat per app. Sluit daarna andere apps die de camera gebruiken helemaal af; er kan er maar één tegelijk bij.",
      iphone: "Instellingen → Safari (of de app) → Camera.",
      android: "Instellingen → Apps → de app → Machtigingen → Camera.",
    },
    en: {
      mobiel:
        "Permission is per app. Then close any other app using the camera completely; only one can have it at a time.",
      iphone: "Settings → Safari (or the app) → Camera.",
      android: "Settings → Apps → the app → Permissions → Camera.",
    },
  },
  "algemeen-video-1": {
    nl: {
      mobiel:
        "Je ziet vaak maar één persoon tegelijk. Veeg opzij of zoek de galerij-weergave, en draai je telefoon dwars.",
    },
    en: {
      mobiel:
        "You often see only one person at a time. Swipe sideways or look for gallery view, and turn your phone sideways.",
    },
  },
  "algemeen-video-2": {
    nl: {
      mobiel:
        "Een warme telefoon knijpt zichzelf af. Haal hem van de oplader en zet je camera even uit.",
    },
    en: {
      mobiel:
        "A hot phone throttles itself. Take it off the charger and turn your camera off for a while.",
    },
  },
  "algemeen-overig-0": {
    nl: {
      mobiel:
        "Delen vanuit de browser kan niet op een telefoon of tablet. In de Zoom- en Teams-app lukt het wel.",
      iphone: "In de app: “Start uitzending”.",
      android: "In de app: de knop, en dan de waarschuwing bevestigen.",
    },
    en: {
      mobiel:
        "Sharing from the browser is not possible on a phone or tablet. In the Zoom and Teams apps it does work.",
      iphone: "In the app: “Start Broadcast”.",
      android: "In the app: the button, then confirm the warning.",
    },
  },
  "algemeen-overig-1": {
    nl: {
      mobiel: "De knoppen zitten onder “Meer” of de drie puntjes. Tik eerst op je scherm.",
    },
    en: {
      mobiel: "The buttons are under “More” or the three dots. Tap your screen first.",
    },
  },
  "algemeen-overig-2": {
    nl: {
      mobiel: "Zet je camera uit en schakel over op 4G/5G als de wifi hapert.",
    },
    en: {
      mobiel: "Turn your camera off and switch to 4G/5G if the Wi-Fi is struggling.",
    },
  },
  "algemeen-overig-5": {
    nl: {
      mobiel: "Tik eerst op je scherm; het handje zit onder “Meer” of “Reacties”.",
    },
    en: {
      mobiel: "Tap your screen first; the hand is under “More” or “Reactions”.",
    },
  },
  "algemeen-overig-6": {
    nl: {
      mobiel: "Draai je telefoon dwars; anders dekt de ondertiteling het beeld af.",
    },
    en: {
      mobiel: "Turn your phone sideways, otherwise the subtitles cover the picture.",
    },
  },

  // ── SpatialChat ────────────────────────────────────────────────────
  "spatialchat-link-1": {
    nl: {
      mobiel:
        "Alleen in Safari of Chrome zelf. Opent hij in Outlook, Gmail of LinkedIn: drie puntjes → “Openen in Safari” of “Openen in Chrome”.",
    },
    en: {
      mobiel:
        "Only in Safari or Chrome itself. If it opens inside Outlook, Gmail or LinkedIn: three dots → “Open in Safari” or “Open in Chrome”.",
    },
  },
  "spatialchat-link-2": {
    nl: {
      mobiel:
        "Ook hier hoef je niets te installeren. Je ziet wel maar een deel van de ruimte, en schermdelen lukt niet.",
    },
    en: {
      mobiel:
        "Here too you don't have to install anything. You do see only part of the space, and screen sharing won't work.",
    },
  },
  "spatialchat-link-3": {
    nl: {
      mobiel: "Je open tabbladen vind je zo:",
      iphone: "Safari: het vierkantje rechtsonder.",
      android: "Chrome: het getal rechtsboven.",
    },
    en: {
      mobiel: "You find your open tabs like this:",
      iphone: "Safari: the squares icon at the bottom right.",
      android: "Chrome: the number at the top right.",
    },
  },
  "spatialchat-audio-0": {
    nl: {
      mobiel: "De adresbalk met het slotje bestaat hier niet; zet het aan bij je browser.",
      iphone: "Instellingen → Safari → Microfoon.",
      android: "Instellingen → Apps → Chrome → Machtigingen → Microfoon.",
    },
    en: {
      mobiel: "The address bar with the padlock doesn't exist here; switch it on for your browser.",
      iphone: "Settings → Safari → Microphone.",
      android: "Settings → Apps → Chrome → Permissions → Microphone.",
    },
  },
  "spatialchat-audio-1": {
    nl: {
      mobiel: "Slepen doe je met je vinger, in- en uitzoomen met twee vingers.",
    },
    en: {
      mobiel: "You drag with your finger and zoom with two fingers.",
    },
  },
  "spatialchat-audio-2": {
    nl: {
      mobiel:
        "Het tandwiel zit achter het menu-icoon. Oortjes moeten met je telefoon verbonden zijn, niet nog met je laptop.",
    },
    en: {
      mobiel:
        "The cog sits behind the menu icon. Earbuds have to be connected to your phone, not still to your laptop.",
    },
  },
  "spatialchat-video-0": {
    nl: {
      mobiel: "Zet het aan bij je browser, niet in de adresbalk.",
      iphone: "Instellingen → Safari → Camera.",
      android: "Instellingen → Apps → Chrome → Machtigingen → Camera.",
    },
    en: {
      mobiel: "Switch it on for your browser, not in the address bar.",
      iphone: "Settings → Safari → Camera.",
      android: "Settings → Apps → Chrome → Permissions → Camera.",
    },
  },
  "spatialchat-overig-0": {
    nl: {
      mobiel:
        "Het werkt, maar je ziet een deel van de ruimte en schermdelen lukt niet. Draai je telefoon dwars.",
    },
    en: {
      mobiel:
        "It works, but you see part of the space and screen sharing won't work. Turn your phone sideways.",
    },
  },
  "spatialchat-overig-1": {
    nl: {
      mobiel:
        "Slepen met je vinger, zoomen met twee vingers. De kamers zitten achter het menu-icoon.",
    },
    en: {
      mobiel:
        "Drag with your finger, zoom with two fingers. The rooms sit behind the menu icon.",
    },
  },
  "spatialchat-overig-2": {
    nl: {
      mobiel: "Kan niet vanaf een telefoon of tablet, ook niet vanaf een iPad. Pak een laptop.",
    },
    en: {
      mobiel: "Not possible from a phone or tablet, an iPad included. Use a laptop.",
    },
  },
  "spatialchat-overig-3": {
    nl: {
      mobiel: "De hotspot van je telefoon loopt niet langs de firewall van je werk.",
    },
    en: {
      mobiel: "Your phone's hotspot doesn't run through your work firewall.",
    },
  },

  // ── Zoom Events ────────────────────────────────────────────────────
  "zoom-events-link-2": {
    nl: {
      mobiel:
        "Je komt binnen via de Zoom-app, niet via de browser. Log daar in met het adres van je registratie.",
    },
    en: {
      mobiel:
        "You get in through the Zoom app, not the browser. Sign in there with the address you registered with.",
    },
  },
  "zoom-events-audio-0": {
    nl: {
      mobiel:
        "Tik linksonder op “Deelnemen aan audio” en kies “Wifi of mobiele data”. Anders blijft het stil.",
    },
    en: {
      mobiel:
        "Tap “Join Audio” at the bottom left and choose “Wi-Fi or Cellular Data”. Otherwise it stays silent.",
    },
  },
  "zoom-events-audio-1": {
    nl: {
      mobiel: "Toestemming staat per app.",
      iphone: "Instellingen → Zoom → Microfoon.",
      android: "Instellingen → Apps → Zoom → Machtigingen → Microfoon.",
    },
    en: {
      mobiel: "Permission is per app.",
      iphone: "Settings → Zoom → Microphone.",
      android: "Settings → Apps → Zoom → Permissions → Microphone.",
    },
  },
  "zoom-events-video-0": {
    nl: {
      mobiel:
        "Tik op je scherm voor de balk en dan op “Video starten”. Met “Wissel camera” ga je naar de andere camera.",
      iphone: "Instellingen → Zoom → Camera.",
      android: "Instellingen → Apps → Zoom → Machtigingen → Camera.",
    },
    en: {
      mobiel:
        "Tap your screen for the bar and then “Start Video”. “Switch Camera” flips to the other camera.",
      iphone: "Settings → Zoom → Camera.",
      android: "Settings → Apps → Zoom → Permissions → Camera.",
    },
  },
  "zoom-events-overig-2": {
    nl: {
      mobiel: "De Expo-ruimtes zijn lastig te bedienen. Doe dit deel liever op een laptop.",
    },
    en: {
      mobiel: "The Expo rooms are awkward to navigate. Use a laptop for this part.",
    },
  },
  "zoom-events-overig-3": {
    nl: {
      mobiel:
        "Alleen de Zoom-app werkt, niet de browser. Installeer hem vóór het event en log in met het adres van je registratie.",
    },
    en: {
      mobiel:
        "Only the Zoom app works, not the browser. Install it before the event and sign in with the address you registered with.",
    },
  },

  // ── Zoom ───────────────────────────────────────────────────────────
  "zoom-link-2": {
    nl: {
      mobiel:
        "Hier kom je er niet omheen: op een telefoon werkt Zoom alleen via de app. Installeer hem vooraf, dan vul je straks alleen je naam nog in.",
    },
    en: {
      mobiel:
        "Here there is no way around it: on a phone Zoom only works through the app. Install it beforehand and all you fill in later is your name.",
    },
  },
  "zoom-audio-0": {
    nl: {
      mobiel:
        "Tik linksonder op “Deelnemen aan audio” en kies “Wifi of mobiele data”. De speaker kies je met de luidspreker-knop in beeld.",
    },
    en: {
      mobiel:
        "Tap “Join Audio” at the bottom left and choose “Wi-Fi or Cellular Data”. You pick the speaker with the speaker button on screen.",
    },
  },
  "zoom-audio-1": {
    nl: {
      mobiel: "Het pijltje naast de microfoon bestaat hier niet; toestemming staat per app.",
      iphone: "Instellingen → Zoom → Microfoon.",
      android: "Instellingen → Apps → Zoom → Machtigingen → Microfoon.",
    },
    en: {
      mobiel: "The arrow next to the microphone doesn't exist here; permission is per app.",
      iphone: "Settings → Zoom → Microphone.",
      android: "Settings → Apps → Zoom → Permissions → Microphone.",
    },
  },
  "zoom-video-0": {
    nl: {
      mobiel:
        "Tik op je scherm zodat de balk verschijnt. Met “Wissel camera” rechtsboven ga je naar de andere camera.",
    },
    en: {
      mobiel:
        "Tap your screen so the bar appears. “Switch Camera” at the top right flips to the other camera.",
    },
  },
  "zoom-video-1": {
    nl: {
      mobiel: "Toestemming staat per app.",
      iphone: "Instellingen → Zoom → Camera.",
      android: "Instellingen → Apps → Zoom → Machtigingen → Camera.",
    },
    en: {
      mobiel: "Permission is per app.",
      iphone: "Settings → Zoom → Camera.",
      android: "Settings → Apps → Zoom → Permissions → Camera.",
    },
  },
  "zoom-overig-0": {
    nl: {
      mobiel:
        "Tik op “Deelnemers”, dan op je eigen naam en op “Naam wijzigen”. Doe het vóór aanvang, dan zoekt niemand naar “iPhone van…”.",
    },
    en: {
      mobiel:
        "Tap “Participants”, then your own name, then “Rename”. Do it before the start, so nobody is looking for “iPhone of…”.",
    },
  },
  "zoom-overig-1": {
    nl: {
      mobiel:
        "In de app: “Delen” → “Scherm”. Alles wat daarna op je scherm staat is zichtbaar, dus zet je meldingen uit.",
      iphone: "Daarna “Start uitzending”.",
      android: "Daarna de waarschuwing bevestigen.",
    },
    en: {
      mobiel:
        "In the app: “Share” → “Screen”. Everything on your screen after that is visible, so turn your notifications off.",
      iphone: "Then “Start Broadcast”.",
      android: "Then confirm the warning.",
    },
  },
  "zoom-overig-2": {
    nl: {
      mobiel: "“Vraag om hulp” zit onder de drie puntjes rechtsonder.",
    },
    en: {
      mobiel: "“Ask for Help” sits under the three dots at the bottom right.",
    },
  },
  "zoom-overig-3": {
    nl: {
      mobiel: "Een inkomend telefoontje kan je eruit gooien. Klik gewoon opnieuw op de link.",
    },
    en: {
      mobiel: "An incoming call can throw you out. Just click the link again.",
    },
  },

  // ── Microsoft Teams ────────────────────────────────────────────────
  "microsoft-teams-link-1": {
    nl: {
      mobiel:
        "Hier heeft Teams de app echt nodig; “doorgaan in deze browser” bestaat niet op een telefoon. Installeer hem en tik opnieuw op de link.",
    },
    en: {
      mobiel:
        "Here Teams really does need the app; “continue in this browser” doesn't exist on a phone. Install it and tap the link again.",
    },
  },
  "microsoft-teams-link-2": {
    nl: {
      mobiel:
        "In de app kies je onderaan “Deelnemen als gast”. Een Microsoft-account is niet nodig.",
    },
    en: {
      mobiel: "In the app you choose “Join as a guest” at the bottom. No Microsoft account needed.",
    },
  },
  "microsoft-teams-audio-0": {
    nl: {
      mobiel: "Tik op het luidspreker-icoon; anders klinkt het als een gewoon telefoontje.",
    },
    en: {
      mobiel: "Tap the speaker icon; otherwise it sounds like an ordinary phone call.",
    },
  },
  "microsoft-teams-audio-1": {
    nl: {
      mobiel:
        "Apparaatinstellingen onder de drie puntjes bestaan hier niet; toestemming staat per app.",
      iphone: "Instellingen → Teams → Microfoon.",
      android: "Instellingen → Apps → Teams → Machtigingen → Microfoon.",
    },
    en: {
      mobiel: "Device settings under the three dots don't exist here; permission is per app.",
      iphone: "Settings → Teams → Microphone.",
      android: "Settings → Apps → Teams → Permissions → Microphone.",
    },
  },
  "microsoft-teams-video-0": {
    nl: {
      mobiel: "Tik op je scherm voor de balk; met het draai-icoon wissel je van camera.",
    },
    en: {
      mobiel: "Tap your screen for the bar; the flip icon switches between cameras.",
    },
  },
  "microsoft-teams-video-1": {
    nl: {
      mobiel: "Toestemming staat per app.",
      iphone: "Instellingen → Teams → Camera.",
      android: "Instellingen → Apps → Teams → Machtigingen → Camera.",
    },
    en: {
      mobiel: "Permission is per app.",
      iphone: "Settings → Teams → Camera.",
      android: "Settings → Apps → Teams → Permissions → Camera.",
    },
  },
  "microsoft-teams-video-2": {
    nl: {
      mobiel:
        "Zet de achtergrondfilters uit via de drie puntjes; ze kosten veel accu en bandbreedte.",
    },
    en: {
      mobiel:
        "Turn background effects off via the three dots; they cost a lot of battery and bandwidth.",
    },
  },
  "microsoft-teams-overig-0": {
    nl: {
      mobiel: "Alleen via de app: installeer Teams, tik op de link en kies “Deelnemen als gast”.",
    },
    en: {
      mobiel: "Only through the app: install Teams, tap the link and choose “Join as a guest”.",
    },
  },
  "microsoft-teams-overig-1": {
    nl: {
      mobiel: "Op een telefoon wel: de browser werkt daar niet voor Teams-vergaderingen.",
    },
    en: {
      mobiel: "On a phone, yes: the browser doesn't work for Teams meetings there.",
    },
  },
  "microsoft-teams-overig-3": {
    nl: {
      mobiel:
        "In de app: drie puntjes → “Delen” → “Scherm delen”. Alles wat daarna op je scherm staat is zichtbaar.",
      iphone: "Daarna “Start uitzending”.",
      android: "Daarna de waarschuwing bevestigen.",
    },
    en: {
      mobiel:
        "In the app: three dots → “Share” → “Share screen”. Everything on your screen after that is visible.",
      iphone: "Then “Start Broadcast”.",
      android: "Then confirm the warning.",
    },
  },
};

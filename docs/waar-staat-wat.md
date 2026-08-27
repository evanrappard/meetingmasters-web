# Waar staat wat

Kaart van je bestanden, zodat je niet hoeft te zoeken waar iets is opgeslagen.
Vijf plekken, meer niet.

---

## 1. De website — `~/meetingmasters-web/`

Dit is het echte project. Alles wat live staat of live gaat, staat hier.
Het is een git-repo: wijzigingen worden bijgehouden en zijn terug te draaien.

| Wat | Waar |
|---|---|
| Nederlandse pagina's | `app/nl/` |
| Engelse pagina's | `app/en/` |
| Componenten (herbruikbare blokken) | `components/` |
| Beeld | `public/images/` — Engelse varianten in `public/images/en/` |
| Video | `public/videos/` |
| Losse tools (bingo, calculator, storytelling) | `public/tools/<toolnaam>/` |
| Downloads (pdf's die bezoekers ophalen) | `public/downloads/` |
| Documenten voor jou | `docs/` |
| Scripts die ik voor je schrijf | `scripts/` |
| Screenshots die ik maak | `schermafdrukken/` |
| Controle vóór een commit | `.githooks/pre-commit` + `scripts/sleutelcheck.mjs` |

### Wat er in `docs/` staat

De belangrijkste vier:

- `wijzigingslog.md` — alles wat er aan tekst, beeld en componenten is veranderd, met de openstaande punten bovenaan
- `website-visuals.md` — het register van álle beelden op de site
- `tekststijlgids.md` — hoe de teksten geschreven horen te worden
- `waar-staat-wat.md` — dit bestand

Daarnaast submappen: `docs/beeld/`, `docs/juridisch/`, `docs/mobiel/`.

---

## 2. De speeltuin — `~/spelenmetclaude/`

Experimenten: bingo-varianten, inspiratiekaarten, Angel Cards.
Niet live, niet in git. Hier mag van alles misgaan.

---

## 3. SessionLab-vervanging — `~/SessionLab/`

De briefing voor een eigen meeting-planner webapp, als vervanging van
SessionLab. Nog niets gebouwd; zie `LEESMIJ.md` in die map.

---

## 4. Restanten — `~/website/` en `~/countdown-timer/`

Losse dingen uit eerdere sessies. Hier zet ik niets nieuws meer neer.
Laat staan tot je zeker weet dat je ze niet meer nodig hebt.

---

## 5. Wegwerpwerk — de scratchpad

Pad: `/private/tmp/claude-501/-Users-emilievanrappard/<sessie>/scratchpad/`

Hier zet ik tussenresultaten neer: testscreenshots, logs, half werk.
**Deze map wordt opgeruimd.** Staat er iets dat je wilt houden, zeg het —
dan verhuis ik het naar een van de mappen hierboven.

---

## De vuistregel

- Hoort het op de site? → `meetingmasters-web/`
- Is het een document voor jou? → `meetingmasters-web/docs/`
- Is het van mij, om even iets te checken? → scratchpad, weg ermee

En: ik noem voortaan bij elk bestand dat ik opsla het pad in gewone taal,
zodat je het in het gesprek kunt terugvinden zonder de tool-regels te lezen.


---

## Controle op sleutels

Deze repository is **openbaar** op GitHub. Alles wat je commit, is dus publiek.
Sleutels horen daarom in `.env.local`, dat in `.gitignore` staat.

Sinds 26 augustus 2026 draait er vóór elke commit een controle die waarschuwt
als er iets in staat dat op een sleutel lijkt (`scripts/sleutelcheck.mjs`). Die
houdt de commit tegen en zegt welk bestand en welke regel.

Werkt de controle niet, dan staat de haak nog niet aan op deze computer. Eenmalig:

```
git config core.hooksPath .githooks
```

De hele repo in één keer nakijken kan met `npm run sleutelcheck`.

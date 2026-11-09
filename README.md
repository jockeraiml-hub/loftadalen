# Löftadalens IF – ny hemsida (förslag)

En modern, responsiv hemsida för Löftadalens IF (Frillesås, Halland).
Byggd med ren HTML/CSS/JS – inga byggverktyg krävs.

## Filstruktur

- `index.html` – huvudsida (alla sektioner)
- `styles.css` – all styling (design tokens i `:root`)
- `script.js` – countdown, animationer, mobilmeny
- `assets/` – (tom, för bilder/loggor)

## Sektioner

Hem (hero + nästa match med countdown) · Nyheter · Matcher · Tabell · Lagen · Mer än en klubb · Föreningen (klubbinfo, styrelse, sponsorer) · Kontakt (karta + kontaktuppgifter) · Footer.

## Anpassa innehåll

- **Färger/typsnitt**: ändra CSS-variabler i `:root` i `styles.css`.
- **Klubbfärger**: byt `--green` / `--green-dark` mot klubbens färger.
- **Nästa match**: datumet i matchkortet sätts automatiskt (14 dagar framåt). Byt till riktigt datum i `index.html` (`#match-date`) och i `script.js` (`target`).
- **Tabell/matcher/nyheter**: statisk exempeldata – uppdatera manuellt eller koppla till Svenska Fotbollförbundets widget.
- **Sponsorer**: exempelnamn – byt mot riktiga sponsorer/loggor.
- **Grundad-år m.m.**: kontrollera faktauppgifter (föreningsnummer 2908-15 etc. är hämtade från nuvarande hemsida).

## Nästa steg (WordPress)

Nuvarande hemsida (lensif.se / löftadalensif.se) körs på WordPress. Två alternativ:

1. **Använd som statisk sida** – ladda upp filerna till valfri webbhotell/public_html.
2. **Gör om till WordPress-tema** – jag kan bygga ett WordPress-tema (PHP) baserat på denna design, så att innehåll kan redigeras i wp-admin (Gutenberg). Säg till om du vill ha det.

## SvFF-data (officiell)

Klubbinformation hämtad från SvFF Open Data API (klubb-id 10681):
- Officiell logotyp: https://staticcdn.svenskfotboll.se/img/teams/10681.png
- Dräkter: hemma vit/röd/vita, borta röd/röd/röda
- Klubbens e-post: info@loftadalensif.se
- Klubbens telefon: 070-602 90 29
- API-nyckel (subscription-key): 742a387603554ec8b3699cee1b9a964d

### Fogis Club (matchdata)
Nuvarande "Fogis Open"-access ger bara grunddata (klubbinfo, dräkter, logotyp).
För **automatiska matchuppdateringar** (matcher, resultat, tabell) behövs "Fogis Club"-access:

1. Gå till https://api-fogis-opendata.developer.azure-api.net/
2. Logga in med ditt konto
3. Ansök om "Fogis Club"-access (klubben ansöker om tillgång till egna data)
4. När accessen är godkänd: skicka mig API-nyckeln så bygger jag en JS-modul som hämtar matcher/resultat/tabell automatiskt

### SvFF-widget (enklast)
1. Gå till https://www.svenskfotboll.se/widgets/
2. Sök fram Löftadalens IF
3. Generera kod för tabell/kommande matcher/senaste resultat
4. Klistra in koden i `#svff-widget-placeholder` i index.html

## Förhandsgranskning

Öppna `index.html` i en webbläsare, eller kör en lokal server:

```bash
cd loftadalens-if
python3 -m http.server 8080
# öppna http://localhost:8080
```

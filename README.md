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

## Förhandsgranskning

Öppna `index.html` i en webbläsare, eller kör en lokal server:

```bash
cd loftadalens-if
python3 -m http.server 8080
# öppna http://localhost:8080
```

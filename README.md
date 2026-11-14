# Voorleeshoek

Een eenvoudige kijkronde met voorgelezen kinderboeken in tien talen. Open `dist/index.html` via een lokale webserver om de app te bekijken. GitHub Pages publiceert de inhoud van `dist/` bij een wijziging op `main`.

Open de startpagina met bijvoorbeeld `?lang=en-GB` om een taal vooraf te kiezen.

## Nieuwe voorleesboeken

De selectie in `dist/stories.js` bevat losse video's uit afspeellijsten en bibliotheekcollecties. De GitHub-actie **Zoek nieuwe voorleesboeken** controleert die bronnen wekelijks en zet video's die nog buiten de catalogus staan in het overzicht van de run. Je kunt dezelfde controle lokaal draaien:

```sh
python3 scripts/check-readaloud-sources.py
```

Bekijk een kandidaat vóór opname: past het verhaal bij ongeveer vijf jaar, wordt er een boek voorgelezen in de gekozen taal en kan de video worden ingesloten? Sommige lijsten bevatten ook rijmpjes, tekenfilms, andere talen of losse boekdelen.

Haal voor goedgekeurde filmpjes de titel, zichtbare kanaalnaam en speelduur op met:

```sh
python3 scripts/prepare-story.py sv 'https://www.youtube.com/watch?v=oMi3nIvjUf4'
```

De taalcodes voor links en het catalogusscript zijn `nl` (Nederlands), `sv` (Zweeds), `es` (Spaans), `it` (Italiaans), `en-GB` (Brits Engels), `ary` (Darija), `tr` (Turks), `pl` (Pools), `fr` (Frans) en `da` (Deens). Je kunt meerdere links of video-ID's opgeven. Het script geeft regels terug voor `dist/stories.js`. Controleer de titels en voeg nieuwe regels onderaan toe. Houd de volgorde van bestaande regels aan, zodat lopende kijkrondes na herladen hetzelfde boek terugvinden. De ouderpagina laadt het voorbeeldplaatje van YouTube op basis van het video-ID.

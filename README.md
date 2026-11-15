# Voorleeshoek

Een eenvoudige kijkronde met voorgelezen kinderboeken uit elf landen. Open `dist/index.html` via een lokale webserver om de app te bekijken. GitHub Pages publiceert de inhoud van `dist/` bij een wijziging op `main`.

Open de startpagina met bijvoorbeeld `?country=GB&lang=en` om een land vooraf te kiezen.

Bij een eerste bezoek kiest de site meteen een land op basis van de ingestelde browsertaal, met Nederland als laatste terugvaloptie. Een beschikbaar land op basis van het IP-adres krijgt voorrang zodra de opvraag klaar is. De browser probeert daarvoor GeoJS en bij een storing Country.is. Een keuze in de landenkiezer wordt onthouden. Een land in de link of een lopende kijkronde heeft voorrang op automatische detectie.

## Nieuwe voorleesboeken

De selectie in `dist/stories.js` bevat losse video's uit afspeellijsten en bibliotheekcollecties. De GitHub-actie **Zoek nieuwe voorleesboeken** controleert die bronnen wekelijks en zet video's die nog buiten de catalogus staan in het overzicht van de run. Je kunt dezelfde controle lokaal draaien:

```sh
python3 scripts/check-readaloud-sources.py
```

Bekijk een kandidaat vóór opname: past het verhaal bij ongeveer vijf jaar, wordt er een boek voorgelezen in de gekozen taal en kan de video worden ingesloten? Controleer op meerdere momenten of verschillende geïllustreerde pagina’s van dat boek zichtbaar zijn terwijl het verhaal wordt voorgelezen. Audio met een vaste omslag, achtergrond of voorlezer zonder zichtbare boekillustraties valt af. Sommige lijsten bevatten ook rijmpjes, tekenfilms, andere talen of losse boekdelen.

Haal voor goedgekeurde filmpjes de titel, zichtbare kanaalnaam en speelduur op met:

```sh
python3 scripts/prepare-story.py --beeld-gecontroleerd VIDEO_ID sv VIDEO_ID
```

De codes voor landkeuzes in links en het catalogusscript zijn `nl` (Nederlands), `nl-BE` (België / Vlaams), `sv` (Zweeds), `es` (Spaans), `it` (Italiaans), `en-GB` (Brits Engels), `ary` (Darija), `tr` (Turks), `pl` (Pools), `fr` (Frankrijk), `fr-BE` (Belgique / Français), `fr-MC` (Monaco / Français), `de` (Duitsland), `de-AT` (Österreich / Deutsch), `de-CH` (Schweiz / Deutsch), `is` (IJslands), `ga` (Iers), `nb` (Noors Bokmål), `fi` (Fins) en `da` (Deens). Je kunt meerdere links of video-ID’s opgeven. Herhaal `--beeld-gecontroleerd VIDEO_ID` voor iedere bekeken video. Het script geeft regels terug voor `dist/stories.js`. Controleer de titels en voeg nieuwe regels onderaan toe. Houd de volgorde van bestaande regels aan, zodat lopende kijkrondes na herladen hetzelfde boek terugvinden. De ouderpagina laadt het voorbeeldplaatje van YouTube op basis van het video-ID.

## Onderzoek per land en taal

Bekijk het [Europese onderzoeksplan](research/europa/README.md) en het [landenregister met voortgang](research/europa/VOORTGANG.md).

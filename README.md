# Voorleeshoek

Een eenvoudige kijkronde met voorgelezen kinderboeken in het Nederlands, Spaans en Zweeds. Open `dist/index.html` via een lokale webserver om de app te bekijken. GitHub Pages publiceert de inhoud van `dist/` bij een wijziging op `main`.

## Nieuwe voorleesboeken

De selectie in `dist/app.js` bevat losse video's uit afspeellijsten en bibliotheekcollecties. De GitHub-actie **Zoek nieuwe voorleesboeken** controleert die bronnen wekelijks en zet video's die nog buiten de catalogus staan in het overzicht van de run. Je kunt dezelfde controle lokaal draaien:

```sh
python3 scripts/check-readaloud-sources.py
```

Bekijk een kandidaat vóór opname: past het verhaal bij ongeveer vijf jaar, wordt er een boek voorgelezen in de gekozen taal en kan de video worden ingesloten? Sommige lijsten bevatten ook rijmpjes, tekenfilms, andere talen of losse boekdelen. Voeg goedgekeurde video's onderaan de betreffende selectie toe als `["YouTube-ID", "Boektitel", "nl"]` (of `"es"` / `"sv"`). Houd de volgorde van bestaande regels aan, zodat lopende kijkrondes na herladen hetzelfde boek terugvinden.

# Publiceren

Publiceer afgeronde, geteste wijzigingen aan dit project altijd direct. Commit de
wijzigingen en push ze naar `origin/main` om de GitHub Pages-workflow te starten.
Controleer daarna of de publicatie is geslaagd. De gebruiker heeft hiervoor
doorlopend toestemming gegeven; vraag niet opnieuw om bevestiging.

Gebruik voor dit project gerust `curl`, bijvoorbeeld om de live site te
controleren. De gebruiker heeft hier doorlopend toestemming voor gegeven.
Gebruik waar mogelijk de toegestane curl-opdracht en vraag de gebruiker niet
opnieuw om toestemming.

# Video verwijderen

Gebruik bij een verwijderverzoek de `?v=`-link uit de browsercontext of het
video-ID van de geselecteerde video. Voer vanuit deze repo uit:

```sh
python3 scripts/remove-story.py -- '<Voorleeshoek-link of video-ID>'
```

Het script houdt de posities voor oude kijkrondes intact en vernieuwt de
catalogusversie op beide pagina’s. Controleer de diff en publiceer volgens
de afspraken hierboven.

# Nieuwe video’s

Laat video’s van Ouderraad-kanalen buiten zoekresultaten, voorstellen en de
catalogus. Dit geldt ook voor `Ouderraad SBS De Regenboog & 't Zavelken` en
video’s uit de afspeellijst Digitaal voorlezen van dat kanaal. Controleer de
kanaalnaam met `scripts/prepare-story.py` vóór je een video toevoegt.

# Beeld bij voorleesvideo’s

Een voorleesvideo moet tijdens het verhaal meerdere herkenbare geïllustreerde
pagina’s van het voorgelezen boek tonen. Het boek mag in beeld worden gehouden
of de oorspronkelijke boekillustraties mogen digitaal in beeld komen. De
afbeeldingen moeten het voorgelezen verhaal volgen. Wijs opnamen met alleen
audio, een omslag, titelkaart, generieke achtergrond of een voorlezer zonder
zichtbare boekillustraties af. Losse animatie zonder de boekpagina’s of
boekillustraties voldoet ook niet.

Controleer de video per titel, op meerdere momenten tijdens het vertellen.
Leg de beoordeling met videolink en tijdstippen vast in de onderzoeksnotities.
Markeer twijfel als ‘Beeld open’. Alleen video’s met positief gecontroleerd
boekbeeld tellen mee voor de ondergrens per land. Bevestig de controle in
`scripts/prepare-story.py` via `--beeld-gecontroleerd VIDEO` voor elk video-ID.

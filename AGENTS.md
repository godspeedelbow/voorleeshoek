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
python3 scripts/remove-story.py '<Voorleeshoek-link of video-ID>'
```

Het script houdt de posities voor oude kijkrondes intact en vernieuwt de
catalogusversie op beide pagina’s. Controleer de diff en publiceer volgens
de afspraken hierboven.

# Nieuwe video’s

Laat video’s van Ouderraad-kanalen buiten zoekresultaten, voorstellen en de
catalogus. Dit geldt ook voor `Ouderraad SBS De Regenboog & 't Zavelken` en
video’s uit de afspeellijst Digitaal voorlezen van dat kanaal. Controleer de
kanaalnaam met `scripts/prepare-story.py` vóór je een video toevoegt.

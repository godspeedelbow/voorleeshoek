# Voorleesvideo’s in Europa

Voor elke nieuwe land- of taalkeuze zoeken we minstens vijf verschillende voorgelezen kinderboeken voor kinderen rond vijf jaar. Voor publicatie moeten alle vijf YouTube-video’s insluitbaar zijn en aan de beeldcontrole voldoen. Extra geschikte titels mogen in het dossier blijven staan. Het [landenregister en voortgangsoverzicht](VOORTGANG.md) is het startpunt voor elke volgende ronde.

## Afbakening

De [VN-indeling M49](https://unstats.un.org/unsd/methodology/m49/) vormt de geografische basis. De zoeklijst omvat ook Cyprus, Turkije, Armenië, Azerbeidzjan, Georgië, Kazachstan en Kosovo. We beginnen met officiële landstalen en nemen ook gedocumenteerde regionale, minderheids- en gebarentalen op. Gebruik de [talentabel van de Raad van Europa](https://rm.coe.int/november-2022-revised-table-languages-covered-english-/1680a8fef4) en voor aanvullende talen een nationale of regionale primaire bron. De eerste taalnamen in het register zijn startpunten voor dit onderzoek. Schrijf aanvullingen en bronnen bij het betreffende land.

Een video mag voor meerdere landen meetellen als de gesproken of gebaarde taal en taalvariant passen. Noteer de uitgever of het kanaal en gebruik een verwijzing naar de oorspronkelijke videolijst om dubbel zoekwerk te voorkomen. Binnen een land-taalpaar telt elk platform-ID eenmaal. Controleer heruploads en losse hoofdstukken inhoudelijk op dubbeltelling.

## Plan en hervatten

1. Zoek het land in [VOORTGANG.md](VOORTGANG.md). Voeg voor een nieuw land een rij met landcode, gedocumenteerde talen en link naar het regionale bestand toe. Gebruik een eigen sectie per taal en werk ook het [overzicht van het minimum per land](BEELDDEKKING.md) bij.
2. Vergelijk de bestaande catalogus in `dist/stories.js` en het regionale dossier. Begin bij het laatste hervatpunt. Gebruik lokale zoekwoorden en primaire bronnen, zoals bibliotheken, uitgevers, omroepen en taalorganisaties. Onderzoek eerst hun voorleescollecties en daarna afzonderlijke kanalen en titels.
3. Noteer per zoekronde datum, land en taal, zoektermen, bron-URL, daadwerkelijk bekeken onderdelen of posities, uitkomst en eerste open vervolgstap. Schrijf onbezochte bronnen op als tip. Een afspeellijst telt als bron. Alleen afzonderlijke video’s met positief gecontroleerd boekbeeld tellen mee voor de doelen.
4. Sla bruikbare resultaten op met titel, directe URL, kanaal of uitgever, herkomst en bewijsniveau. Sluit Ouderraad-kanalen uit volgens [AGENTS.md](../../AGENTS.md), inclusief de afspeellijst Digitaal voorlezen van Ouderraad SBS De Regenboog & ’t Zavelken.
5. Bekijk per kandidaat meerdere momenten verspreid over het verhaal. Controleer of verschillende geïllustreerde boekpagina’s herkenbaar in beeld zijn en de illustraties het voorlezen volgen. Boekpagina’s in de hand en digitale weergave van de oorspronkelijke illustraties zijn geldig. Wijs audio met een vaste omslag, los achtergrondbeeld, alleen een voorlezer of zelfstandige animatie zonder boekillustraties af. Leg de video, waargenomen scènes en tijdstippen vast in het [beeldlog](BEELDCONTROLE.md). Controleer ook leeftijd, taal, volledigheid, beschikbaarheid en insluiten. Gebruik vóór een eventuele opname `scripts/prepare-story.py` om de zichtbare kanaalnaam te controleren. Publicatie in de app is een aparte stap via de catalogus.
6. Werk het dossier en de voortgang bij zodra een bron is verwerkt. Voeg voor ‘zoek er meer voor land X’ alleen nieuwe zoekrondes toe, met het hervatpunt uit het dossier. Meld een tekort na brononderzoek met de reden, de resterende aantallen en de meest kansrijke vervolgstap.

## Bewijsniveau

| Niveau | Telt als |
| --- | --- |
| Tip | Bron of zoekresultaat om te openen. |
| Kandidaat | Unieke directe videolink met een titel en een bron die wijst op voorlezen in de bedoelde taal. |
| Beeld open | Kandidaat waarvoor de geïllustreerde pagina’s nog niet zijn vastgesteld. Telt voorlopig niet mee voor het minimum. |
| Beeld voldoet | Verschillende geïllustreerde pagina’s zichtbaar tijdens het verhaal. Telt mee voor het beeldminimum, met de overige controles apart. |
| Afgevallen op beeld | Het beeld voldoet niet. Bewaar de link in het zoeklog als uitsluiting. |
| Gecontroleerd | Boekbeeld, inhoud, beschikbaarheid, taal, leeftijd en insluiten gecontroleerd. |
| Bestaand | Staat al in de app. Bij een nieuwe zoektocht meenemen bij deduplicatie. |

Gebruik in een landdossier een tabel met `Titel · Video · Kanaal/bron · Bewijsniveau · Opmerking`. Bewaar zoekrondes onder een apart kopje. Bij grotere aantallen is één bestand per land-taal praktischer. Automatisering dient alleen om vaste bronpagina’s uit te lezen of dubbelen op te sporen. De Markdown-dossiers blijven leidend.

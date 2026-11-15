# Voorleesvideo’s in Europa

Per land en taal zoeken we 50 verschillende voorleesvideo’s met een boek of prentenboek voor kinderen rond vijf jaar. Het [landenregister en voortgangsoverzicht](VOORTGANG.md) is het startpunt voor elke volgende ronde.

## Afbakening

De [VN-indeling M49](https://unstats.un.org/unsd/methodology/m49/) vormt de geografische basis. De zoeklijst omvat ook Cyprus, Turkije, Armenië, Azerbeidzjan, Georgië, Kazachstan en Kosovo. We beginnen met officiële landstalen en nemen ook gedocumenteerde regionale, minderheids- en gebarentalen op. Gebruik de [talentabel van de Raad van Europa](https://rm.coe.int/november-2022-revised-table-languages-covered-english-/1680a8fef4) en voor aanvullende talen een nationale of regionale primaire bron. De eerste taalnamen in het register zijn startpunten voor dit onderzoek. Schrijf aanvullingen en bronnen bij het betreffende land.

Een video mag voor meerdere landen meetellen als de gesproken of gebaarde taal en taalvariant passen. Noteer de uitgever of het kanaal en gebruik een verwijzing naar de oorspronkelijke videolijst om dubbel zoekwerk te voorkomen. Binnen een land-taalpaar telt elk platform-ID eenmaal. Controleer heruploads en losse hoofdstukken inhoudelijk op dubbeltelling.

## Plan en hervatten

1. Zoek het land in [VOORTGANG.md](VOORTGANG.md). Voeg voor een nieuw land een rij met landcode, gedocumenteerde talen en link naar het regionale bestand toe. Gebruik een eigen sectie per taal.
2. Vergelijk de bestaande catalogus in `dist/stories.js` en het regionale dossier. Begin bij het laatste hervatpunt. Gebruik lokale zoekwoorden en primaire bronnen, zoals bibliotheken, uitgevers, omroepen en taalorganisaties. Onderzoek eerst hun voorleescollecties en daarna afzonderlijke kanalen en titels.
3. Noteer per zoekronde datum, land en taal, zoektermen, bron-URL, daadwerkelijk bekeken onderdelen of posities, uitkomst en eerste open vervolgstap. Schrijf onbezochte bronnen op als tip. Een afspeellijst telt als bron. Alleen afzonderlijke video’s tellen mee voor 50.
4. Sla bruikbare resultaten op met titel, directe URL, kanaal of uitgever, herkomst en bewijsniveau. Sluit Ouderraad-kanalen uit volgens [AGENTS.md](../../AGENTS.md), inclusief de afspeellijst Digitaal voorlezen van Ouderraad SBS De Regenboog & ’t Zavelken.
5. Controleer per kandidaat of het volledige verhaal past bij de leeftijd, de taal klopt en de video publiek afspeelbaar en insluitbaar is. Gebruik vóór een eventuele opname `scripts/prepare-story.py` om de zichtbare kanaalnaam te controleren. Publicatie in de app is een aparte stap via de catalogus.
6. Werk het dossier en de voortgang bij zodra een bron is verwerkt. Voeg voor ‘zoek er meer voor land X’ alleen nieuwe zoekrondes toe, met het hervatpunt uit het dossier. Meld een tekort na brononderzoek met de reden, de resterende aantallen en de meest kansrijke vervolgstap.

## Bewijsniveau

| Niveau | Telt als |
| --- | --- |
| Tip | Bron of zoekresultaat om te openen. |
| Kandidaat | Unieke directe videolink met een titel en een bron die wijst op voorlezen in de bedoelde taal. |
| Gecontroleerd | Video inhoudelijk bekeken en op beschikbaarheid, taal, leeftijd en insluiten gecontroleerd. |
| Bestaand | Staat al in de app. Bij een nieuwe zoektocht meenemen bij deduplicatie. |

Gebruik in een landdossier een tabel met `Titel · Video · Kanaal/bron · Bewijsniveau · Opmerking`. Bewaar zoekrondes onder een apart kopje. Bij grotere aantallen is één bestand per land-taal praktischer. Automatisering dient alleen om vaste bronpagina’s uit te lezen of dubbelen op te sporen. De Markdown-dossiers blijven leidend.

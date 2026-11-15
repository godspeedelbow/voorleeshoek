'use strict';

const searchField = document.getElementById('catalog-search');
const countryField = document.getElementById('catalog-country');
const channelField = document.getElementById('catalog-channel');
const sortField = document.getElementById('catalog-sort');
const status = document.getElementById('catalog-status');
const results = document.getElementById('catalog-results');
const translations = {
  "nl": {
    "pageTitle": "Voor ouders · Voorleeshoek",
    "back": "Terug naar de Voorleeshoek",
    "parents": "Voor ouders",
    "heading": "Alle voorleesfilmpjes",
    "intro": "Zoek op titel, filter op land of kanaal. Een filmpje opent in een nieuw tabblad.",
    "filters": "Filmpjes zoeken en sorteren",
    "search": "Zoek op titel",
    "example": "Bijv. Pelle",
    "country": "Land / taal",
    "allCountries": "Alle landen",
    "channel": "YouTube-kanaal",
    "allChannels": "Alle kanalen",
    "sort": "Sorteren",
    "title": "Titel",
    "unknownChannel": "Kanaal onbekend",
    "unknownDuration": "Duur onbekend",
    "empty": "Geen filmpjes gevonden.",
    "one": "filmpje",
    "other": "filmpjes"
  },
  "de": {
    "pageTitle": "Für Eltern · Vorleseecke",
    "back": "Zurück zur Vorleseecke",
    "parents": "Für Eltern",
    "heading": "Alle Vorlesevideos",
    "intro": "Suche nach Titel oder filtere nach Land oder Kanal. Jedes Video öffnet sich in einem neuen Tab.",
    "filters": "Videos suchen und sortieren",
    "search": "Nach Titel suchen",
    "example": "Z. B. Regenbogenfisch",
    "country": "Land / Sprache",
    "allCountries": "Alle Länder",
    "channel": "YouTube-Kanal",
    "allChannels": "Alle Kanäle",
    "sort": "Sortieren",
    "title": "Titel",
    "unknownChannel": "Kanal unbekannt",
    "unknownDuration": "Dauer unbekannt",
    "empty": "Keine Videos gefunden.",
    "one": "Video",
    "other": "Videos"
  },
  "is": {
    "pageTitle": "Fyrir foreldra · Söguhornið",
    "back": "Til baka í Söguhornið",
    "parents": "Fyrir foreldra",
    "heading": "Öll upplestrarmyndbönd",
    "intro": "Leitaðu eftir titli eða síaðu eftir landi eða rás. Hvert myndband opnast í nýjum flipa.",
    "filters": "Leita og raða myndböndum",
    "search": "Leita eftir titli",
    "example": "T.d. Hannes",
    "country": "Land / tungumál",
    "allCountries": "Öll lönd",
    "channel": "YouTube-rás",
    "allChannels": "Allar rásir",
    "sort": "Raða",
    "title": "Titill",
    "unknownChannel": "Óþekkt rás",
    "unknownDuration": "Óþekkt lengd",
    "empty": "Engin myndbönd fundust.",
    "one": "myndband",
    "other": "myndbönd"
  },
  "nb": {
    "pageTitle": "For foreldre · Lesekroken",
    "back": "Tilbake til Lesekroken",
    "parents": "For foreldre",
    "heading": "Alle høytlesingsvideoer",
    "intro": "Søk etter tittel eller filtrer etter land eller kanal. Hver video åpnes i en ny fane.",
    "filters": "Søk og sorter videoer",
    "search": "Søk etter tittel",
    "example": "F.eks. Mulan",
    "country": "Land / språk",
    "allCountries": "Alle land",
    "channel": "YouTube-kanal",
    "allChannels": "Alle kanaler",
    "sort": "Sorter",
    "title": "Tittel",
    "unknownChannel": "Ukjent kanal",
    "unknownDuration": "Ukjent varighet",
    "empty": "Fant ingen videoer.",
    "one": "video",
    "other": "videoer"
  },
  "fi": {
    "pageTitle": "Vanhemmille · Satunurkka",
    "back": "Takaisin Satunurkkaan",
    "parents": "Vanhemmille",
    "heading": "Kaikki lukuhetkivideot",
    "intro": "Hae nimellä tai suodata maan tai kanavan mukaan. Jokainen video avautuu uudessa välilehdessä.",
    "filters": "Hae ja lajittele videoita",
    "search": "Hae nimellä",
    "example": "Esim. Miina",
    "country": "Maa / kieli",
    "allCountries": "Kaikki maat",
    "channel": "YouTube-kanava",
    "allChannels": "Kaikki kanavat",
    "sort": "Lajittele",
    "title": "Nimi",
    "unknownChannel": "Tuntematon kanava",
    "unknownDuration": "Tuntematon kesto",
    "empty": "Videoita ei löytynyt.",
    "one": "video",
    "other": "videota"
  },
  "ga": {
    "pageTitle": "Do thuismitheoirí · Cúinne na Scéalta",
    "back": "Ar ais go Cúinne na Scéalta",
    "parents": "Do thuismitheoirí",
    "heading": "Na físeáin léitheoireachta go léir",
    "intro": "Cuardaigh de réir teidil nó scag de réir tíre nó cainéil. Osclaítear gach físeán i gcluaisín nua.",
    "filters": "Cuardaigh agus sórtáil físeáin",
    "search": "Cuardaigh de réir teidil",
    "example": "M.sh. Molly",
    "country": "Tír / teanga",
    "allCountries": "Gach tír",
    "channel": "Cainéal YouTube",
    "allChannels": "Gach cainéal",
    "sort": "Sórtáil",
    "title": "Teideal",
    "unknownChannel": "Cainéal anaithnid",
    "unknownDuration": "Fad anaithnid",
    "empty": "Níor aimsíodh aon fhíseán.",
    "one": "fhíseán",
    "other": "físeán"
  },
  "sv": {
    "pageTitle": "För föräldrar · Sagohörnan",
    "back": "Tillbaka till Sagohörnan",
    "parents": "För föräldrar",
    "heading": "Alla högläsningsfilmer",
    "intro": "Sök på titel eller filtrera efter land eller kanal. Filmen öppnas i en ny flik.",
    "filters": "Sök och sortera filmer",
    "search": "Sök på titel",
    "example": "T.ex. Pelle",
    "country": "Land / språk",
    "allCountries": "Alla länder",
    "channel": "YouTube-kanal",
    "allChannels": "Alla kanaler",
    "sort": "Sortera",
    "title": "Titel",
    "unknownChannel": "Okänd kanal",
    "unknownDuration": "Okänd längd",
    "empty": "Inga filmer hittades.",
    "one": "film",
    "other": "filmer"
  },
  "es": {
    "pageTitle": "Para padres · Rincón de cuentos",
    "back": "Volver al Rincón de cuentos",
    "parents": "Para padres",
    "heading": "Todos los cuentos en vídeo",
    "intro": "Busca por título o filtra por país o canal. Cada vídeo se abre en una pestaña nueva.",
    "filters": "Buscar y ordenar vídeos",
    "search": "Buscar por título",
    "example": "P. ej., Arturo",
    "country": "País / idioma",
    "allCountries": "Todos los países",
    "channel": "Canal de YouTube",
    "allChannels": "Todos los canales",
    "sort": "Ordenar",
    "title": "Título",
    "unknownChannel": "Canal desconocido",
    "unknownDuration": "Duración desconocida",
    "empty": "No se encontraron vídeos.",
    "one": "vídeo",
    "other": "vídeos"
  },
  "it": {
    "pageTitle": "Per i genitori · Angolo delle storie",
    "back": "Torna all’Angolo delle storie",
    "parents": "Per i genitori",
    "heading": "Tutte le storie in video",
    "intro": "Cerca per titolo o filtra per paese o canale. Ogni video si apre in una nuova scheda.",
    "filters": "Cerca e ordina i video",
    "search": "Cerca per titolo",
    "example": "Es. Piccola Nuvola",
    "country": "Paese / lingua",
    "allCountries": "Tutti i paesi",
    "channel": "Canale YouTube",
    "allChannels": "Tutti i canali",
    "sort": "Ordina",
    "title": "Titolo",
    "unknownChannel": "Canale sconosciuto",
    "unknownDuration": "Durata sconosciuta",
    "empty": "Nessun video trovato.",
    "one": "video",
    "other": "video"
  },
  "en-GB": {
    "pageTitle": "For parents · Story Corner",
    "back": "Back to Story Corner",
    "parents": "For parents",
    "heading": "All read-aloud videos",
    "intro": "Search by title or filter by country or channel. Each video opens in a new tab.",
    "filters": "Search and sort videos",
    "search": "Search by title",
    "example": "E.g. Elmer",
    "country": "Country / language",
    "allCountries": "All countries",
    "channel": "YouTube channel",
    "allChannels": "All channels",
    "sort": "Sort by",
    "title": "Title",
    "unknownChannel": "Unknown channel",
    "unknownDuration": "Unknown duration",
    "empty": "No videos found.",
    "one": "video",
    "other": "videos"
  },
  "ary": {
    "pageTitle": "للآباء والأمهات · ركن الحكايات",
    "back": "رجع لركن الحكايات",
    "parents": "للآباء والأمهات",
    "heading": "گاع فيديوهات الحكايات",
    "intro": "قلّب بالعنوان ولا صَفّي بالبلاد ولا بالقناة. كل فيديو كيتحلّ فتبويب جديد.",
    "filters": "قلّب ورتّب الفيديوهات",
    "search": "قلّب بالعنوان",
    "example": "مثلاً: بينوكيو",
    "country": "البلاد / اللغة",
    "allCountries": "گاع البلدان",
    "channel": "قناة يوتيوب",
    "allChannels": "گاع القنوات",
    "sort": "الترتيب",
    "title": "العنوان",
    "unknownChannel": "القناة ما معروفةش",
    "unknownDuration": "المدة ما معروفةش",
    "empty": "ما لقينا حتى فيديو.",
    "one": "فيديو",
    "other": "فيديوهات"
  },
  "tr": {
    "pageTitle": "Ebeveynler için · Masal Köşesi",
    "back": "Masal Köşesi’ne dön",
    "parents": "Ebeveynler için",
    "heading": "Tüm sesli hikâye videoları",
    "intro": "Başlığa göre ara veya ülkeye ya da kanala göre filtrele. Her video yeni bir sekmede açılır.",
    "filters": "Videoları ara ve sırala",
    "search": "Başlığa göre ara",
    "example": "Örn. Elmer",
    "country": "Ülke / dil",
    "allCountries": "Tüm ülkeler",
    "channel": "YouTube kanalı",
    "allChannels": "Tüm kanallar",
    "sort": "Sırala",
    "title": "Başlık",
    "unknownChannel": "Kanal bilinmiyor",
    "unknownDuration": "Süre bilinmiyor",
    "empty": "Video bulunamadı.",
    "one": "video",
    "other": "video"
  },
  "pl": {
    "pageTitle": "Dla rodziców · Kącik bajek",
    "back": "Wróć do Kącika bajek",
    "parents": "Dla rodziców",
    "heading": "Wszystkie nagrania z czytaniem bajek",
    "intro": "Szukaj według tytułu lub filtruj według kraju albo kanału. Każde nagranie otwiera się w nowej karcie.",
    "filters": "Wyszukuj i sortuj nagrania",
    "search": "Szukaj według tytułu",
    "example": "Np. Basia",
    "country": "Kraj / język",
    "allCountries": "Wszystkie kraje",
    "channel": "Kanał YouTube",
    "allChannels": "Wszystkie kanały",
    "sort": "Sortuj",
    "title": "Tytuł",
    "unknownChannel": "Nieznany kanał",
    "unknownDuration": "Nieznany czas trwania",
    "empty": "Nie znaleziono nagrań.",
    "one": "nagranie",
    "other": "nagrań",
    "few": "nagrania"
  },
  "fr": {
    "pageTitle": "Pour les parents · Le coin des histoires",
    "back": "Retour au coin des histoires",
    "parents": "Pour les parents",
    "heading": "Toutes les histoires lues en vidéo",
    "intro": "Recherchez par titre ou filtrez par pays ou par chaîne. Chaque vidéo s’ouvre dans un nouvel onglet.",
    "filters": "Rechercher et trier les vidéos",
    "search": "Rechercher par titre",
    "example": "P. ex. Billy",
    "country": "Pays / langue",
    "allCountries": "Tous les pays",
    "channel": "Chaîne YouTube",
    "allChannels": "Toutes les chaînes",
    "sort": "Trier",
    "title": "Titre",
    "unknownChannel": "Chaîne inconnue",
    "unknownDuration": "Durée inconnue",
    "empty": "Aucune vidéo trouvée.",
    "one": "vidéo",
    "other": "vidéos"
  },
  bm: {
    "pageTitle": "Bangebagaw ye · Nsiirinw",
    "back": "Segi nsiirinw ma",
    "parents": "Bangebagaw ye",
    "heading": "Nsiirin wideyow bɛɛ",
    "intro": "Wideyo ɲini a tɔgɔ, a jamana walima a YouTube kanali fɛ. Wideyo kelen-kelen bɛ yɛlɛ tab kura la.",
    "filters": "Wideyow ɲini ani k’u sigi ɲɔgɔn kɔ",
    "search": "Ɲini tɔgɔ fɛ",
    "example": "Misali: Dununba",
    "country": "Jamana / kan",
    "allCountries": "Jamanaw bɛɛ",
    "channel": "YouTube kanali",
    "allChannels": "Kanaliw bɛɛ",
    "sort": "Sigi ɲɔgɔn kɔ",
    "title": "Tɔgɔ",
    "unknownChannel": "Kanali tɔgɔ dɔnnen tɛ",
    "unknownDuration": "Wideyo waati dɔnnen tɛ",
    "empty": "Wideyo si ma sɔrɔ.",
    "one": "wideyo",
    "other": "wideyo"
  },
  "da": {
    "pageTitle": "Til forældre · Historiehjørnet",
    "back": "Tilbage til Historiehjørnet",
    "parents": "Til forældre",
    "heading": "Alle højtlæsningsvideoer",
    "intro": "Søg efter titel, eller filtrér efter land eller kanal. Hver video åbner i en ny fane.",
    "filters": "Søg og sortér videoer",
    "search": "Søg efter titel",
    "example": "F.eks. Lotte",
    "country": "Land / sprog",
    "allCountries": "Alle lande",
    "channel": "YouTube-kanal",
    "allChannels": "Alle kanaler",
    "sort": "Sortér",
    "title": "Titel",
    "unknownChannel": "Ukendt kanal",
    "unknownDuration": "Ukendt varighed",
    "empty": "Ingen videoer fundet.",
    "one": "video",
    "other": "videoer"
  }
};

const requestedCountry = countryFromQuery(location.search);
let savedCountry;
try {
  savedCountry = localStorage.getItem('voorleeshoek-language');
} catch {
  // The catalog works without browser storage.
}
const selectedCountry = requestedCountry ?? countryById.get(savedCountry) ?? countryById.get('nl');
const interfaceLanguage = selectedCountry.language;
const locale = interfaceLanguage === 'ary' ? 'ar-MA' : interfaceLanguage;
const copy = translations[interfaceLanguage];
const numberFormat = new Intl.NumberFormat(locale);
const plurals = new Intl.PluralRules(locale);
document.documentElement.lang = interfaceLanguage;
document.documentElement.dir = interfaceLanguage === 'ary' ? 'rtl' : 'ltr';
document.title = copy.pageTitle;
document.getElementById('catalog-back').href = './?' + setCountryQuery(new URLSearchParams(), selectedCountry);
document.querySelectorAll('[data-text]').forEach((element) => {
  element.textContent = copy[element.dataset.text];
});
document.querySelectorAll('[data-label]').forEach((element) => {
  element.setAttribute('aria-label', copy[element.dataset.label]);
});
searchField.placeholder = copy.example;
const ascending = locale.startsWith('ar') ? 'أ–ي' : 'A–Z';
const descending = locale.startsWith('ar') ? 'ي–أ' : 'Z–A';
sortField.options[0].textContent = copy.title + ' ' + ascending;
sortField.options[1].textContent = copy.title + ' ' + descending;

function searchableTitle(title, language) {
  return title.toLocaleLowerCase(language).normalize('NFD').replace(/\p{M}/gu, '');
}

const groups = countries.map(({ id, language, flag, label }) => {
  const option = document.createElement('option');
  option.value = id;
  option.lang = language;
  option.dir = 'auto';
  option.textContent = flag + ' ' + label;
  countryField.append(option);
  const collator = new Intl.Collator(language, { ignorePunctuation: true, numeric: true });
  const videos = stories
    .filter((story) => storyCountry(story) === id)
    .map(([id, title, , channel, duration]) => ({ id, title, channel, duration, searchTitle: searchableTitle(title, language) }))
    .sort((first, second) => collator.compare(first.title, second.title));
  return { id, language, flag, label, videos };
});

const channelCollator = new Intl.Collator(locale, { sensitivity: 'base' });

function updateCountryFilter(selectedChannel = channelField.value) {
  const selectedId = countryField.value;
  const channels = [...new Set(groups
    .filter(({ id }) => !selectedId || id === selectedId)
    .flatMap(({ videos }) => videos.map(({ channel }) => channel))
    .filter(Boolean))].sort(channelCollator.compare);
  channelField.replaceChildren(channelField.options[0], ...channels.map((channel) => new Option(channel, channel)));
  channelField.value = channels.includes(selectedChannel) ? selectedChannel : '';
  renderCatalog();
}

function formatCatalogDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const remainder = String(seconds % 60).padStart(2, '0');
  return hours ? hours + ':' + String(minutes).padStart(2, '0') + ':' + remainder : minutes + ':' + remainder;
}

function renderCatalog() {
  const query = searchField.value.trim();
  const selectedId = countryField.value;
  const selectedChannel = channelField.value;
  const descending = sortField.value === 'desc';
  const sections = [];
  let count = 0;

  for (const { id, language, flag, label, videos } of groups) {
    if (selectedId && selectedId !== id) continue;
    const searchQuery = searchableTitle(query, language);
    const matches = videos.filter((video) =>
      (!selectedChannel || video.channel === selectedChannel) && video.searchTitle.includes(searchQuery));
    if (matches.length === 0) continue;
    if (descending) matches.reverse();

    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const icon = document.createElement('span');
    icon.className = 'country-flag';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = flag;
    const name = document.createElement('bdi');
    name.lang = language;
    name.textContent = label;
    heading.append(icon, ' ', name, ' · ', numberFormat.format(matches.length));
    const list = document.createElement('ul');
    list.className = 'catalog-list';
    for (const { id, title, channel, duration } of matches) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = './?v=' + encodeURIComponent(id);
      link.target = '_blank';
      link.rel = 'noopener';
      const preview = document.createElement('img');
      preview.alt = '';
      preview.width = 320;
      preview.height = 180;
      preview.loading = 'lazy';
      preview.decoding = 'async';
      preview.referrerPolicy = 'no-referrer';
      preview.addEventListener('error', () => { preview.src = './book.svg'; }, { once: true });
      preview.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/mqdefault.jpg';
      const name = document.createElement('span');
      name.className = 'catalog-title';
      name.lang = language;
      name.dir = 'auto';
      name.textContent = title;
      const details = document.createElement('div');
      details.className = 'catalog-details';
      const channelName = document.createElement(channel ? 'button' : 'span');
      channelName.dir = 'auto';
      channelName.textContent = channel || copy.unknownChannel;
      if (channel) {
        channelName.type = 'button';
        channelName.className = 'catalog-channel-button';
        channelName.addEventListener('click', () => {
          searchField.value = '';
          channelField.value = channel;
          renderCatalog();
          channelField.focus({ preventScroll: true });
          window.scrollTo(0, 0);
        });
      }
      details.append(channelName);
      if (duration) {
        const time = document.createElement('time');
        time.dir = 'ltr';
        time.dateTime = 'PT' + duration + 'S';
        time.textContent = formatCatalogDuration(duration);
        details.append(time);
      } else {
        const unknown = document.createElement('span');
        unknown.textContent = copy.unknownDuration;
        details.append(unknown);
      }
      link.append(preview, name);
      item.append(link, details);
      list.append(item);
    }
    section.append(heading, list);
    sections.push(section);
    count += matches.length;
  }

  results.replaceChildren(...sections);
  status.textContent = count === 0 ? copy.empty :
    numberFormat.format(count) + ' ' + (copy[plurals.select(count)] ?? copy.other);
}

const savedView = history.state?.catalogView;
const savedFilter = savedView?.country ?? savedView?.language;
countryField.value = savedFilter === '' || countryById.has(savedFilter) ? savedFilter : selectedCountry.id;

if (savedView) {
  searchField.value = savedView.search;
  sortField.value = savedView.sort === 'desc' ? 'desc' : 'asc';
}

searchField.addEventListener('input', renderCatalog);
countryField.addEventListener('change', () => updateCountryFilter());
channelField.addEventListener('change', renderCatalog);
sortField.addEventListener('change', renderCatalog);
updateCountryFilter(savedView?.channel);

history.scrollRestoration = 'manual';
window.addEventListener('pagehide', () => {
  history.replaceState({ catalogView: {
    search: searchField.value,
    country: countryField.value,
    channel: channelField.value,
    sort: sortField.value,
    scrollY: window.scrollY,
  } }, '');
});
window.addEventListener('pageshow', () => {
  if (Number.isFinite(savedView?.scrollY)) {
    requestAnimationFrame(() => window.scrollTo(0, savedView.scrollY));
  }
});

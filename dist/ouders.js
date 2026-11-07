'use strict';

const searchField = document.getElementById('catalog-search');
const languageField = document.getElementById('catalog-language');
const channelField = document.getElementById('catalog-channel');
const sortField = document.getElementById('catalog-sort');
const status = document.getElementById('catalog-status');
const results = document.getElementById('catalog-results');
const storageKey = 'voorleeshoek-catalog-view';

function searchableTitle(title) {
  return title.toLocaleLowerCase('nl').normalize('NFD').replace(/\p{M}/gu, '');
}

const groups = Array.from(languageField.options).slice(1).map((option) => {
  const language = option.value;
  const collator = new Intl.Collator(language, { ignorePunctuation: true, numeric: true });
  const videos = stories
    .filter(([, , code]) => code === language)
    .map(([id, title, , channel, duration]) => ({ id, title, channel, duration, searchTitle: searchableTitle(title) }))
    .sort((first, second) => collator.compare(first.title, second.title));
  return { language, label: option.textContent, videos };
});

const channelCollator = new Intl.Collator('nl', { sensitivity: 'base' });

function updateLanguageFilter(selectedChannel = channelField.value) {
  const selectedLanguage = languageField.value;
  const channels = [...new Set(groups
    .filter(({ language }) => !selectedLanguage || language === selectedLanguage)
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
  const query = searchableTitle(searchField.value.trim());
  const selectedLanguage = languageField.value;
  const selectedChannel = channelField.value;
  const descending = sortField.value === 'desc';
  const sections = [];
  let count = 0;

  for (const { language, label, videos } of groups) {
    if (selectedLanguage && selectedLanguage !== language) continue;
    const matches = videos.filter((video) =>
      (!selectedChannel || video.channel === selectedChannel) && video.searchTitle.includes(query));
    if (matches.length === 0) continue;
    if (descending) matches.reverse();

    const section = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = label + ' · ' + matches.length;
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
      name.textContent = title;
      const details = document.createElement('div');
      details.className = 'catalog-details';
      const channelName = document.createElement(channel ? 'button' : 'span');
      channelName.textContent = channel || 'Kanaal onbekend';
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
        time.dateTime = 'PT' + duration + 'S';
        time.textContent = formatCatalogDuration(duration);
        details.append(time);
      } else {
        const unknown = document.createElement('span');
        unknown.textContent = 'Duur onbekend';
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
  status.textContent = count === 0 ? 'Geen filmpjes gevonden.' : count === 1 ? '1 filmpje' : count + ' filmpjes';
}

const interfaceLanguage = new URLSearchParams(location.search).get('lang');
let defaultLanguage = interfaceLanguage;
if (!defaultLanguage) {
  try {
    defaultLanguage = localStorage.getItem('voorleeshoek-language');
  } catch {
    // Dutch is the default if the stored language is unavailable.
  }
}
if (!groups.some(({ language }) => language === defaultLanguage)) defaultLanguage = 'nl';

let savedView;
try {
  savedView = JSON.parse(sessionStorage.getItem(storageKey));
} catch {
  // The catalog also works without browser storage.
}

let languageOverride = savedView?.languageOverride ?? (savedView?.language || null);
if (languageOverride !== '' && !groups.some(({ language }) => language === languageOverride)) {
  languageOverride = null;
}
languageField.value = languageOverride ?? defaultLanguage;

if (savedView) {
  searchField.value = savedView.search ?? '';
  sortField.value = savedView.sort === 'desc' ? 'desc' : 'asc';
}

searchField.addEventListener('input', renderCatalog);
languageField.addEventListener('change', () => {
  languageOverride = languageField.value;
  updateLanguageFilter();
});
channelField.addEventListener('change', renderCatalog);
sortField.addEventListener('change', renderCatalog);
updateLanguageFilter(savedView?.channel);

history.scrollRestoration = 'manual';
window.addEventListener('pagehide', () => {
  savedView = {
    search: searchField.value,
    languageOverride,
    channel: channelField.value,
    sort: sortField.value,
    scrollY: window.scrollY,
  };
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(savedView));
  } catch {
    // The current document can still restore its position from the back-forward cache.
  }
});
window.addEventListener('pageshow', () => {
  if (Number.isFinite(savedView?.scrollY)) {
    requestAnimationFrame(() => window.scrollTo(0, savedView.scrollY));
  }
});

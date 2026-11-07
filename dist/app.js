'use strict';

const translations = {
  nl: {
    siteName: 'Voorleeshoek',
    description: 'Een kijkplek voor Nederlandse voorleesverhalen.',
    language: 'Taal',
    rotate: 'Draai je scherm rechtop',
    welcome: 'Voorleestijd!',
    subtitle: 'Kruip lekker op de bank. Er wacht een verhaal op je.',
    storyCount: 'Hoeveel verhalen?',
    less: 'Eén verhaal minder',
    more: 'Eén verhaal meer',
    start: 'Begin met kijken',
    play: 'Afspelen',
    pause: 'Pauzeren',
    resume: 'Verder kijken',
    skip: 'Ander verhaal',
    skips: (count) => `Nog ${count} keer wisselen`,
    progress: (current, total) => `VERHAAL ${current} VAN ${total}`,
    timeline: 'Voortgang van het verhaal',
    skipUntil: (time) => `Wisselen kan tot ${time}`,
    skipClosed: 'Je kunt niet meer wisselen',
    loading: 'Het verhaal wordt klaargezet…',
    paused: 'Het verhaal staat op pauze.',
    waiting: 'Even wachten…',
    next: 'Straks komt er een ander verhaal',
    autoplayHint: 'Tik op ▶ in de video om het verhaal te starten.',
    playbackError: 'Dit verhaal kan nu niet worden afgespeeld.',
    retry: 'Probeer opnieuw',
    done: 'VOORLEESTIJD · KLAAR',
    doneTitle: 'Dat waren de verhalen!',
    farewell: 'Goed gekeken! Tot de volgende keer. ✦',
    parentCatalog: 'Voor ouders',
    restart: 'Opnieuw beginnen',
    confirmRestart: 'Wil je deze kijkronde afsluiten?',
    version: 'Versie',
    updated: 'Bijgewerkt op',
  },
  sv: {
    siteName: 'Sagohörnan',
    description: 'Här kan du titta på högläsning av sagor på svenska.',
    language: 'Språk',
    rotate: 'Vänd skärmen till stående läge',
    welcome: 'Dags för en saga!',
    subtitle: 'Mys ner dig i soffan. En saga väntar på dig.',
    storyCount: 'Hur många sagor?',
    less: 'En saga mindre',
    more: 'En saga till',
    start: 'Börja titta',
    play: 'Spela upp',
    pause: 'Pausa',
    resume: 'Fortsätt titta',
    skip: 'Byt saga',
    skips: (count) => `Du kan byta ${count} ${count === 1 ? 'gång' : 'gånger'} till`,
    progress: (current, total) => `SAGA ${current} AV ${total}`,
    timeline: 'Hur långt sagan har kommit',
    skipUntil: (time) => `Du kan byta saga fram till ${time}`,
    skipClosed: 'Du kan inte byta saga längre',
    loading: 'Sagan laddas…',
    paused: 'Sagan är pausad.',
    waiting: 'Vänta lite…',
    next: 'Snart kommer en annan saga',
    autoplayHint: 'Tryck på ▶ i videon för att starta sagan.',
    playbackError: 'Sagan går inte att spela upp just nu.',
    retry: 'Försök igen',
    done: 'SAGOSTUND · SLUT',
    doneTitle: 'Det var alla sagor!',
    farewell: 'Tack för att du tittade! Vi ses nästa gång. ✦',
    parentCatalog: 'För föräldrar',
    restart: 'Börja om',
    confirmRestart: 'Vill du avsluta sagostunden?',
    version: 'Version',
    updated: 'Uppdaterad',
  },
  es: {
    siteName: 'Rincón de cuentos',
    description: 'Un lugar para ver cuentos leídos en voz alta en español.',
    language: 'Idioma',
    rotate: 'Pon la pantalla en vertical',
    welcome: '¡Hora del cuento!',
    subtitle: 'Ponte a gusto en el sofá. Te espera un cuento.',
    storyCount: '¿Cuántos cuentos?',
    less: 'Un cuento menos',
    more: 'Un cuento más',
    start: 'Empezar a ver',
    play: 'Reproducir',
    pause: 'Pausar',
    resume: 'Seguir viendo',
    skip: 'Cambiar de cuento',
    skips: (count) => count === 1 ? 'Queda 1 cambio' : `Quedan ${count} cambios`,
    progress: (current, total) => `CUENTO ${current} DE ${total}`,
    timeline: 'Progreso del cuento',
    skipUntil: (time) => `Puedes cambiar de cuento hasta ${time}`,
    skipClosed: 'Ya no puedes cambiar de cuento',
    loading: 'Cargando el cuento…',
    paused: 'El cuento está en pausa.',
    waiting: 'Un momento…',
    next: 'Enseguida empieza otro cuento',
    autoplayHint: 'Toca ▶ en el vídeo para empezar el cuento.',
    playbackError: 'Este cuento no se puede reproducir ahora.',
    retry: 'Inténtalo de nuevo',
    done: 'HORA DEL CUENTO · FIN',
    doneTitle: '¡Ya vimos todos los cuentos!',
    farewell: '¡Gracias por mirar! Hasta la próxima. ✦',
    parentCatalog: 'Para padres',
    restart: 'Empezar de nuevo',
    confirmRestart: '¿Quieres terminar esta sesión de cuentos?',
    version: 'Versión',
    updated: 'Actualizado el',
  },
};

const get = (id) => document.getElementById(id);
const storageKey = 'voorleeshoek-round-v2';
const skipDeadline = 60;
const limit = get('limit');
const parentDialog = get('parent-dialog');
const landscapeTouchScreen = matchMedia('(orientation: landscape) and (pointer: coarse) and (hover: none)');
const languageOptions = get('language');
const languageInputs = languageOptions.querySelectorAll('input');
const languageKey = 'voorleeshoek-language';
const limitKey = 'voorleeshoek-limit';
let preferredLanguage = 'nl';

try {
  const saved = localStorage.getItem(languageKey);
  if (Object.hasOwn(translations, saved)) {
    preferredLanguage = saved;
  } else {
    const previous = JSON.parse(localStorage.getItem('voorleeshoek-languages'));
    if (Array.isArray(previous) && previous.length === 1 && Object.hasOwn(translations, previous[0])) {
      preferredLanguage = previous[0];
    }
  }
} catch {
  // Keep Dutch as the default when the saved language is unavailable.
}

let language;
let copy;

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  copy = translations[language];
  document.documentElement.lang = language;
  for (const input of languageInputs) input.checked = input.value === language;
  document.title = copy.siteName;
  document.querySelectorAll('[data-text]').forEach((element) => {
    element.textContent = copy[element.dataset.text];
  });
  document.querySelectorAll('[data-label]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.label]);
  });
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.siteName;

  const publishedAt = get('published-at');
  if (publishedAt) {
    publishedAt.textContent = new Intl.DateTimeFormat(language, {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date(publishedAt.dateTime));
  }
}

try {
  const savedLimit = Number(localStorage.getItem(limitKey));
  if (Number.isInteger(savedLimit) && savedLimit >= Number(limit.min) && savedLimit <= Number(limit.max)) {
    limit.value = savedLimit;
  }
} catch {
  // Keep the default number of stories when storage is unavailable.
}

let round;
let player;
let playerReady = false;
let playing = false;
let paused = false;
let timer;
let generation = 0;
let api;
let historyEntry = history.state?.voorleesEntry ?? 0;
let roundURL;

function storeRound() {
  try {
    if (round) {
      const order = round.order.map((index) => stories[index][0]);
      sessionStorage.setItem(storageKey, JSON.stringify({ ...round, order }));
    } else {
      sessionStorage.removeItem(storageKey);
    }
  } catch {
    // Keep the current round usable when browser storage is unavailable.
  }
}

function restoreRound() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey));
    if (saved && saved.total >= 1 && saved.total <= Number(limit.max) &&
        Array.isArray(saved.order) &&
        saved.completed >= 0 && saved.completed <= saved.total &&
        saved.skips >= 0 && saved.skips <= 3) {
      const indices = saved.order.map((entry) => {
        if (typeof entry === 'string') return stories.findIndex(([id]) => id === entry);

        // Rounds saved before video IDs used catalog positions. One entry was removed at index 201.
        const removedIndex = 201;
        if (!Number.isInteger(entry) || entry === removedIndex) return -1;
        return entry > removedIndex ? entry - 1 : entry;
      });
      const current = indices[saved.cursor];
      if (!stories[current]) return;
      const currentLanguage = stories[current][2];
      // Keep the current story and playback position in older multilingual rounds.
      const order = indices.filter((index) => stories[index]?.[2] === currentLanguage);
      saved.cursor = order.indexOf(current);
      saved.order = order;
      saved.skipLocked ||= saved.position >= skipDeadline;
      return saved;
    }
  } catch {
    // Invalid or unavailable browser storage starts at setup.
  }
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function shuffledStories(previous) {
  const order = [];
  stories.forEach((story, index) => {
    if (story[2] === language) order.push(index);
  });
  shuffle(order);
  if (order.length > 1 && order[0] === previous) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

function moveToNextStory() {
  const previous = round.order[round.cursor];
  round.cursor += 1;
  if (round.cursor === round.order.length) {
    round.order = shuffledStories(previous);
    round.cursor = 0;
  }
  round.position = 0;
  round.skipLocked = false;
}

function updateStepper() {
  get('minus').disabled = Number(limit.value) <= 1;
  get('plus').disabled = Number(limit.value) >= Number(limit.max);
}

function saveLimit() {
  updateStepper();
  if (!limit.validity.valid) return;
  try {
    localStorage.setItem(limitKey, limit.value);
  } catch {
    // The selected number remains available on this page.
  }
}

function showMessage(message, number = '', retry = false) {
  get('message').hidden = false;
  get('countdown').textContent = number;
  if (get('status').textContent !== message) get('status').textContent = message;
  get('retry').hidden = !retry;
}

function updateControls() {
  get('resume').hidden = !paused;
  get('play').disabled = !playerReady && !paused;
  get('play').textContent = paused ? '▶ ' + copy.resume : playing ? 'Ⅱ ' + copy.pause : '▶ ' + copy.play;
  updateSkipControls();
}

function updateSkipControls() {
  get('skip').disabled = !round.linked && (!round.skips || !!round.waitUntil || !!round.skipLocked);
  get('skips').hidden = !!round.linked || !!round.skipLocked;
  get('skips').textContent = copy.skips(round.skips);
  const status = round.linked ? '' : round.skipLocked ? copy.skipClosed :
    round.skips ? copy.skipUntil(formatTime(skipDeadline)) : '';
  if (get('skip-window').textContent !== status) get('skip-window').textContent = status;
}

function render() {
  const done = round.completed === round.total;
  get('setup').hidden = true;
  languageOptions.hidden = true;
  get('parents').hidden = false;
  get('session').hidden = false;
  get('controls').hidden = done && !round.linked;
  get('play').hidden = done;
  get('timeline').hidden = done || !!round.waitUntil;
  get('elapsed').textContent = formatTime(round.position || 0);
  get('duration').textContent = '–:––';
  get('video-progress').value = 0;
  get('skip-marker').hidden = true;
  get('progress').textContent = done ? copy.done : copy.progress(round.completed + 1, round.total);
  get('story').textContent = done ? copy.doneTitle :
    round.waitUntil ? copy.waiting : stories[round.order[round.cursor]][1];
  get('dots').replaceChildren(...Array.from({ length: round.total }, (_, index) => {
    const dot = document.createElement('span');
    if (index < round.completed) dot.className = 'filled';
    else if (index === round.completed) dot.className = 'current';
    return dot;
  }));
  updateControls();
}

function destroyPlayer() {
  generation += 1;
  clearTimeout(timer);
  if (playerReady) player.destroy();
  get('video').replaceChildren();
  get('autoplay-hint').hidden = true;
  player = null;
  playerReady = false;
  playing = false;
  paused = false;
}

function loadAPI() {
  if (window.YT?.Player) return Promise.resolve();
  if (api) return api;

  api = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const fail = () => {
      clearTimeout(timeout);
      script.remove();
      reject(new Error('YouTube iframe API failed to load'));
    };
    const timeout = setTimeout(fail, 12000);
    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timeout);
      resolve();
    };
    script.onerror = fail;
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.append(script);
  }).catch((error) => {
    api = null;
    throw error;
  });
  return api;
}

function failPlayback(ticket) {
  if (ticket !== generation) return;
  destroyPlayer();
  updateControls();
  showMessage(copy.playbackError, '', true);
}

function turnOffCaptions(player) {
  // YouTube can restore a caption track from viewer preferences or on a new video.
  if (!player.getOptions?.()?.includes('captions')) return;
  player.setOption('captions', 'track', {});
  player.unloadModule?.('captions');
}

async function mount(autoplay) {
  showStoryInURL();
  destroyPlayer();
  render();
  if (needsPortrait()) {
    pauseStory();
    return;
  }
  showMessage(copy.loading);
  const ticket = generation;
  const [id, title] = stories[round.order[round.cursor]];

  try {
    await loadAPI();
    if (ticket !== generation) return;
    if (needsPortrait()) {
      pauseStory();
      return;
    }
    const frame = document.createElement('iframe');
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      enablejsapi: '1',
      hl: language,
      origin: location.origin,
      rel: '0',
      playsinline: '1',
      cc_load_policy: '0',
      controls: '0',
      disablekb: '1',
      fs: '0',
      start: String(round.position || 0),
    });
    frame.title = title;
    frame.tabIndex = -1;
    frame.allow = 'autoplay; encrypted-media';
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?' + params;
    get('message').hidden = true;
    get('video').append(frame);
    timer = setTimeout(() => failPlayback(ticket), 12000);

    player = new YT.Player(frame, {
      events: {
        onReady(event) {
          if (ticket !== generation) return;
          clearTimeout(timer);
          playerReady = true;
          turnOffCaptions(event.target);
          updateTimeline();
          updateControls();
          if (autoplay && !playing) event.target.playVideo();
        },
        onApiChange(event) {
          if (ticket === generation) turnOffCaptions(event.target);
        },
        onAutoplayBlocked() {
          if (ticket === generation && !playing) get('autoplay-hint').hidden = false;
        },
        onError() {
          failPlayback(ticket);
        },
        onStateChange(event) {
          if (ticket !== generation) return;
          if (event.data === YT.PlayerState.PLAYING) turnOffCaptions(event.target);
          if (event.data === YT.PlayerState.ENDED) {
            completeStory();
            return;
          }
          if (event.data === YT.PlayerState.PAUSED && playing) {
            pauseStory();
            return;
          }
          playing = event.data === YT.PlayerState.PLAYING ||
            (playing && event.data === YT.PlayerState.BUFFERING);
          if (playing) get('autoplay-hint').hidden = true;
          updateControls();
        },
      },
    });
  } catch {
    failPlayback(ticket);
  }
}

function completeStory() {
  round.completed += 1;
  if (round.completed === round.total) {
    storeRound();
    destroyPlayer();
    render();
    showMessage(copy.farewell);
    get('story').focus();
  } else {
    // Keep the same player so the browser can carry playback permission forward.
    moveToNextStory();
    storeRound();
    showStoryInURL();
    playing = false;
    render();
    const [id, title] = stories[round.order[round.cursor]];
    player.getIframe().title = title;
    player.loadVideoById(id);
  }
}

function tick() {
  const seconds = Math.ceil((round.waitUntil - Date.now()) / 1000);
  if (seconds <= 0) {
    round.waitUntil = 0;
    storeRound();
    mount(true);
    return;
  }
  showMessage(copy.next, seconds);
  timer = setTimeout(tick, Math.max(1, round.waitUntil - Date.now() - (seconds - 1) * 1000));
}

function setPageVideo(id) {
  const url = new URL(location.href);
  if (url.searchParams.get('v') === id) return url.href;
  if (id) url.searchParams.set('v', id);
  else url.searchParams.delete('v');
  if (url.href !== location.href) {
    history.pushState({ voorleesEntry: historyEntry + 1 }, '', url);
    historyEntry += 1;
  }
  return url.href;
}

function showStoryInURL() {
  const [id, title] = stories[round.order[round.cursor]];
  roundURL = setPageVideo(id);
  round.historyEntry = historyEntry;
  storeRound();
  document.title = title + ' · ' + copy.siteName;
}

function showSetup() {
  destroyPlayer();
  round = null;
  storeRound();
  document.title = copy.siteName;
  updateStepper();
  get('session').hidden = true;
  get('setup').hidden = false;
  languageOptions.hidden = false;
  get('parents').hidden = true;
}

function roundForURL() {
  const id = new URL(location.href).searchParams.get('v');
  const index = stories.findIndex((story) => story[0] === id);
  if (index === -1) return;
  return {
    linked: true,
    total: 1,
    completed: 0,
    skips: 0,
    order: [index],
    cursor: 0,
    waitUntil: 0,
    position: 0,
  };
}

function savePosition() {
  if (!round || !playerReady) return;
  const position = player.getCurrentTime();
  if (Number.isFinite(position)) {
    round.position = Math.floor(position);
    lockSkipAtDeadline(position);
    storeRound();
  }
}

function formatTime(seconds) {
  const wholeSeconds = Math.floor(seconds);
  const minutes = Math.floor(wholeSeconds / 60);
  return minutes + ':' + String(wholeSeconds % 60).padStart(2, '0');
}

function lockSkipAtDeadline(position) {
  if (round.skipLocked || !round.skips || position < skipDeadline) return;
  round.skipLocked = true;
  round.position = Math.floor(position);
  updateSkipControls();
  storeRound();
}

function updateTimeline() {
  if (!playerReady) return;
  const duration = player.getDuration();
  const elapsed = player.getCurrentTime();
  if (!Number.isFinite(elapsed)) return;
  lockSkipAtDeadline(elapsed);
  if (!Number.isFinite(duration) || duration <= 0) return;

  const marker = get('skip-marker');
  marker.hidden = (!round.linked && !round.skips) || duration <= skipDeadline;
  if (!marker.hidden) marker.style.left = (100 * skipDeadline / duration) + '%';

  const position = Math.min(Math.max(elapsed, 0), duration);
  const progress = get('video-progress');
  progress.max = duration;
  progress.value = position;
  get('elapsed').textContent = formatTime(position);
  get('duration').textContent = formatTime(duration);
}

function pauseStory() {
  updateTimeline();
  savePosition();
  destroyPlayer();
  paused = true;
  updateControls();
  showMessage(copy.paused);
}

function needsPortrait() {
  return landscapeTouchScreen.matches && Math.min(screen.width, screen.height) <= 600;
}

function updateOrientation() {
  const showNotice = needsPortrait();
  if (showNotice) {
    if (parentDialog.open) parentDialog.close();
    if (player) pauseStory();
  }
  document.body.classList.toggle('needs-portrait', showNotice);
}

get('minus').onclick = () => {
  limit.stepDown();
  saveLimit();
};
get('plus').onclick = () => {
  limit.stepUp();
  saveLimit();
};
limit.oninput = saveLimit;
get('settings').onsubmit = (event) => {
  event.preventDefault();
  saveLimit();
  round = {
    total: Number(limit.value),
    completed: 0,
    skips: 3,
    order: shuffledStories(),
    cursor: 0,
    waitUntil: 0,
    position: 0,
  };
  storeRound();
  mount(true);
  get('story').focus();
};

languageOptions.onchange = (event) => {
  preferredLanguage = event.target.value;
  try {
    localStorage.setItem(languageKey, preferredLanguage);
  } catch {
    // The selection remains available on this page.
  }
  applyLanguage(preferredLanguage);

  if (!round) return;
  if (round.completed === round.total) {
    setPageVideo(null);
    showSetup();
    return;
  }
  round.order = shuffledStories();
  round.cursor = 0;
  round.position = 0;
  round.skipLocked = false;
  if (round.waitUntil) {
    destroyPlayer();
    showStoryInURL();
    render();
    tick();
  } else {
    mount(false);
  }
};

get('play').onclick = () => {
  if (paused) mount(true);
  else if (playing) pauseStory();
  else if (playerReady) player.playVideo();
};
get('skip').onclick = () => {
  if (round.linked) {
    round.completed = 0;
    moveToNextStory();
    mount(true);
    get('story').focus();
    return;
  }

  if (!round.skips || round.waitUntil || round.completed === round.total || round.skipLocked) return;
  if (playerReady) {
    const position = player.getCurrentTime();
    if (Number.isFinite(position)) lockSkipAtDeadline(position);
    if (round.skipLocked) return;
  }
  destroyPlayer();
  round.skips -= 1;
  round.waitUntil = Date.now() + 10000;
  moveToNextStory();
  storeRound();
  render();
  get('story').focus();
  tick();
};
get('retry').onclick = () => mount(true);
get('resume').onclick = () => {
  mount(true);
  get('story').focus();
};
get('parents').onclick = () => parentDialog.showModal();
get('stop').onclick = () => {
  limit.value = round.total;
  setPageVideo(null);
  showSetup();
  requestAnimationFrame(() => limit.focus());
};

window.addEventListener('popstate', (event) => {
  const entry = event.state?.voorleesEntry;
  if (round && location.href === roundURL) return;
  if (round && !round.linked && round.completed < round.total) {
    // Return to the current story without discarding earlier history entries.
    if (Number.isInteger(entry) && entry !== historyEntry) history.go(Math.sign(historyEntry - entry));
    else history.pushState({ voorleesEntry: historyEntry }, '', roundURL);
    return;
  }
  if (round) showSetup();
  historyEntry = entry ?? 0;
  round = roundForURL();
  applyLanguage(round ? stories[round.order[0]][2] : preferredLanguage);
  if (round) {
    storeRound();
    mount(false);
  }
});
window.addEventListener('pagehide', savePosition);
setInterval(savePosition, 1500);
setInterval(updateTimeline, 500);
window.addEventListener('keydown', (event) => {
  if (!round || parentDialog.open) return;
  if (event.key === 'F5' || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'r')) {
    event.preventDefault();
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) savePosition();
});

const knownEntry = Number.isInteger(history.state?.voorleesEntry);
history.replaceState({ voorleesEntry: historyEntry }, '');
roundURL = location.href;
const linkedRound = roundForURL();
round = restoreRound();
if ((linkedRound && (!round || !knownEntry)) ||
    (round?.historyEntry !== undefined && round.historyEntry !== historyEntry)) {
  round = linkedRound;
  storeRound();
}
applyLanguage(round ? stories[round.order[round.cursor]][2] : preferredLanguage);
landscapeTouchScreen.addEventListener('change', updateOrientation);
updateOrientation();
updateStepper();
if (round) {
  render();
  if (round.completed === round.total) {
    if (linkedRound) document.title = stories[linkedRound.order[0]][1] + ' · ' + copy.siteName;
    showMessage(copy.farewell);
  }
  else if (round.waitUntil) tick();
  else mount(false);
}

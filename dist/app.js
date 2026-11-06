'use strict';

const stories = [
  ["oMi3nIvjUf4", "Gummi Tarzan (ljudbok med bilder)"],
  ["8OBk3INZA2o", "Sagan om det röda äpplet (ljudbok)"],
  ["aILfIcinfho", "Håkan Bråkan och kramsjukan"],
  ["rpSxPEv3nQM", "Håkan Bråkan och fismysteriet"],
  ["XcSXMztHoBg", "På jakt efter älg"],
  ["PMjIi4v1c-o", "Håkan Bråkan och läskiga huset"],
  ["KWQc4lSAYR0", "Bajskorv!"],
  ["UMY8JzoyTG4", "Pelle Svanslös och skidtävlingen"],
  ["GN_AzZNOSgM", "Välkommen Pelle Svanslös"],
  ["cyn5vQq3rxA", "Örnis bilar"],
  ["ZsYkECVoVl4", "Laban och Labolinas jul"],
  ["pVRBOzaHpuU", "Sov gott pappa, sa lilla spöket Laban"],
  ["SkDONjUj92Q", "Lillklas och Storklas (av H C Andersen)"],
  ["_fsMgcSUx3k", "Vem är ensam?"],
  ["t5oawhaxMDY", "Alla vi barn i Bullerbyn"],
  ["B1wL9X_z5lM", "Lätta fakta om arkeologi"],
  ["QCT9BGnaU1A", "Pelle hjälper en riddare"],
  ["eNOhbcH1U9g", "Kvällen när pappa lekte"],
  ["2ESYjsI3uFg", "Leni är ett sockerhjärta"],
  ["LDXZ-78AZUE", "Leni blir en bebis"],
  ["tr_lQsbboFw", "Vem vågar?"],
  ["ahSOdy9HrVs", "Vem stör?"],
  ["FK1Ibc1eMmA", "Pappa läser: Pelle på planetfärd"],
  ["V25uEadUkKI", "Hattstugan av Elsa Beskow"],
  ["K6dqj6t9l8c", "Titta, Madicken det snöar!"],
  ["IY8H69ClVsI", "Vem städar inte?"],
  ["kPddfCMnhH8", "Vem blöder?"],
  ["EqnE95Mwrls", "Vem finns?"],
  ["n57s6lE1d3o", "Lenis Olle"],
  ["solzgg7iqjA", "Kan man...?"],
  ["VEU-bl0PwEs", "Vem bestämmer?"],
  ["gnd0bk4bO5c", "Tjuren Ferdinand"],
  ["NMEEwEtxU2I", "SKROT-NISSE av Jan Lööf"],
  ["w3P4vOYsAmc", "När Felix blev stor av Jan Lööf"],
  ["Ietr10U8mwg", "Pelle träffar en lokförare"],
  ["TnKs-ngG5Vg", "Pappa läser #52 Pelle i djungeln"],
  ["uj4bhJkNeq8", "Hundmannen av Dav Pilkey"],
  ["mxYtbVfvk3U", "Nämen Benny!"],
  ["3Akq9rYXF5o", "Max bil"],
  ["h1zLPqHBnMQ", "Emma och lillebror"],
  ["iSBWPXXH9JQ", "Tisdagen som till slut kom"],
  ["avERQqr8sVU", "Pappa, jag och havet #ljudbok"],
  ["z3hBN_tSzfU", "Sneeuwberen"],
  ["C8SVWVuHHWo", "Eend En Zijn Vrienden"],
  ["74H4gzFUP3E", "Rolle Bolle Beest"],
  ["zYYcWfyZ9mo", "Het Verlegen Poesje"],
  ["7ZU9VFOpy3g", "Zeven Kleine Vrienden"],
  ["Jahc2tQyqkw", "Wonen Er Beren In Afrika"],
  ["-AsgDVMrN_o", "Kleine Muis En Haar Speciale Vrienden"],
  ["4-jYxtf1BG4", "Spuit Elf Gaat Naar School"],
  ["HEJnRZONhvg", "Ik Wil Iets Heel Moois Geven"],
  ["-AOU6yqNYeg", "Ik Wil Ergens Anders Wonen"],
  ["8f3jgoCQvKA", "Ik Wil De Maan"],
  ["SGDywGX_pI8", "Ik Heb Een Geheim"],
  ["CDGHWih41rc", "De 5 Brandweermannetjes"],
  ["VmzbkQkCvX4", "Sneeuwwitje en de 7 Dwergen"],
  ["W0OO7QM8cQo", "Roodkapje"],
  ["m8Wa_bi0K-0", "Pinokkio"],
  ["q2cbf2za49M", "Jungleboek"],
  ["QRXpQr3NuG4", "Goudlokje en de Beren"],
  ["g5qpsB7o8rI", "De Gelaarsde Kat"],
  ["B6RocrLI8bU", "De Drie Biggetjes"],
  ["qhO_JY_oXyo", "De Bremer Stadsmuzikanten"],
  ["U4kTFFLikPE", "Assepoester"],
  ["7N3up2EbwCo", "Alice in Wonderland"],
  ["dPC2pkI5GTE", "Het Kleinste Rendier"],
  ["tx0vMbn_LNE", "Het Feestvarken"],
  ["NNZN6nwtLQU", "Groot En Klein"],
  ["rmv3K2PHxJg", "Ik Vind Je Lief Opa"],
  ["yGNvjcVN8bY", "Ik Vind Je Lief Oma"],
  ["UDbJ18aBqyI", "Eend Is De Baas"],
  ["qPn2FI498UU", "Lichtjes In Het Bos"],
  ["G_FrSIruAtE", "Rupsje Nooitgenoeg"],
  ["xFY472XVsNA", "De grote Gruffalo"],
  ["nl-V7cQR2JQ", "Hoe komt een olifant aan al die kilo’s grijs?"],
  ["K9TfvejMv_Q", "De jongen en de walvis"],
  ["0fFLx1mulXA", "Neushoorns eten geen pannenkoeken"],
  ["7Ca-mc48vcY", "Anna op de grote wc"],
  ["HMHQe7QnhL4", "Kikker en de vreemdeling"],
  ["-1E_F06jz9o", "Spuit Elf wordt brandweerolifant"],
  ["1r8BL1ojJx8", "Boer Boris gaat naar de markt"],
  ["Zdn76dqAk8w", "Kleine pinguïn is zijn knuffel kwijt"],
  ["foaF3rTbQr0", "De spin die het te druk had"],
  ["9ChyhvSmzX0", "Anansi de spin – Een koekje van eigen deeg"],
  ["9uZ3b4way68", "Papa, pak je de maan voor mij"],
  ["qpXA4KmPOts", "Niet zo veel"],
  ["kQU4lSXRCxg", "Kies maar iets"],
  ["qT8otNs9jek", "Flor en Roos"],
  ["G792fBn_PHw", "Niels is nat"],
  ["A2rVkqJwRiw", "Luna"],
  ["37DsRSYY50w", "Raf vangt een boef"],
  ["krrPXHz8BSw", "de schatkaart"],
  ["Cun9seYyb7Y", "de sik van bok"],
  ["3VrPjb4OY3E", "Vuur in het bos"],
  ["UcOAvF71EDQ", "Er was eens"],
  ["IjdqFeU61gQ", "Sint is ziek"],
  ["1pq09QycBdw", "Sint is in de war"],
  ["mEj7f6D2d2U", "Sint is te dik"],
  ["EDbedLLLMag", "Wie is bang in het donker?"],
  ["9WF-0iSp6mo", "de fiets van Sien"],
  ["3NUtc5EG6GE", "De kerstman is moe"],
  ["wtszFTlq0a8", "De kleren van de kerstman"],
  ["ndTQlPGq91Q", "Geen pakjes voor kerst"],
  ["0LNyP06xySU", "Kerst met big en pop"],
  ["EUk__uzmFL8", "Muis feest in de tuin"],
  ["0qvx4XR4j_0", "Beer is bang"],
  ["EmaYpyf4Ti0", "Pam en vis"],
  ["uVgfJ3FaeZk", "Mus op ski's"],
  ["-QsAZVn5WT8", "Wat moet ik met een sok?"],
  ["8c1VcWrx24o", "Een feest voor Jan"],
  ["u9eiNThdXtA", "De sneeuwman van Matti"],
  ["1MalE9HzM8M", "De heks zonder toverboek"],
  ["BI_MnkWhvww", "Kaat geeft een feest"],
  ["rYDSTcAsZEA", "Wat hoor ik?"],
  ["tG95P0Ldne8", "Bang voor de reus"],
  ["16p-OmbpPf4", "Pas op Pam!"],
  ["EsmvtYLktJs", "De jurk van Kaat"],
  ["6h-BAxq4YQM", "Wat een kip!"],
  ["pGr-zs99cO4", "Guus koopt niet aan de deur"],
  ["epC2ql9ChcU", "Pam en Raaf"],
  ["DRMc90V1sow", "Daar gaat Noor weer"],
  ["CZm0JmLXu4Y", "De kist van moe"],
  ["T9aTozKcn84", "Een leuke dag voor Sep"],
  ["DR1nKzBvrzQ", "Hardwerkende mannetjes"],
  ["_Sr223j8Phw", "Fien zegt nee"],
  ["BsyskWu32wE", "Parels en perziken"],
  ["en3PRMklnI0", "Hups op reis"],
  ["M2Rb2rFqHG8", "Net in zee"],
  ["WagwpNbbDP8", "Beer op de bank"],
  ["E7efKQGOIiQ", "Welk pakje voor papa?"],
  ["5nuJsN1j46Q", "Een tent in huis"],
  ["_Pc9ETLkFV0", "Het lijkt wel een eiland"],
  ["l9UGNeKgNjk", "1 april"],
  ["rgW8A8LJRis", "De pop van Haas"],
  ["5gNDrao031o", "Wie helpt Haas?"],
  ["G-Si8a-wcmI", "Sta op Troet!"],
  ["BCjeXsCwIIw", "Een vreemde vriendin"],
  ["-lAqMvfYH8k", "Kip, kip, kijk naar mij!"],
  ["nT5_JyY8K3Q", "Mie en Lars"],
  ["8zUqT-Cdcaw", "Help, een woeste tijger!"],
  ["t73SuLctCoY", "Het heksenfeest"],
  ["gE4pzWs4-uY", "Het ei van Mies"],
  ["VbXeGL_pTn4", "Kas, Saar en Mien"],
  ["emzJa-jdTUU", "Een vuur voor beer"],
  ["LDPWx1D3ogs", "Stoetel wil vakantie"],
  ["_xq_h2KZIS8", "Jet en Kas"],
  ["A3ngsNO8XMo", "Wie zit er in de bus?"],
  ["nHEu9jsmaFs", "De grote reis van Sam"],
  ["XIV0n1CFHcI", "Groot feest!"],
  ["8DNcdIGOPSg", "Wat een neus!"],
  ["EObKclwOlpc", "Hans de zanger"],
  ["Tw3P2GDxzAM", "Muis en Beer"],
  ["Ot3QIadsKEc", "Noor en het vrolijke visje"],
  ["kR3TkLZtsow", "Pato de drukke buur"],
  ["0tH1WYABWpc", "De wereld is mooi!"],
  ["4iUtBN0y9i8", "Het giet!"],
  ["TeB-vOyncG4", "Vos en muis bakken een koek"],
  ["63BAe3CM7F0", "Meester Bart maakt graag mopjes"],
  ["OxQczHTvT64", "Hoog in de boom"],
  ["0UrcrdlQTOA", "Prullewup"],
  ["Y-XGIWGGslU", "In het grote bos"],
  ["Lh9FDTxYUmQ", "Sol is dol op sla"],
  ["N2Mpv2a913Y", "Tuk wil vrij zijn"],
  ["7OnGujhkXH0", "Weg met wit!"],
  ["ZHCEQOncgzs", "Mus hijst het zeil"],
  ["iIIAcCs9ZVU", "Het geheim van Lies"],
  ["InL394MLkYQ", "Mus op het net"],
  ["PZHTdnJqYEk", "Een gat in de sok"],
  ["Q9pISTUCC-k", "Mol op het touw"],
  ["02XJ3m2pcjE", "De boom op de speelplaats"],
  ["FypKVIZoLhY", "De fiets van Fenne"],
  ["zF23BaSTAdw", "Spit, spet, spat!"],
  ["dDIJTc3Rc9w", "Drommel wil in zijn mand"],
  ["HmkJMkZK_EM", "Juf kan niet lezen"],
  ["oOSDLRAueHI", "Blijf wakker, Mot!"],
  ["FgCqLmGRhWI", "Mysterie in het museum"],
  ["-WjmSulMyzs", "De kip van Pam"],
  ["aRAKv9vgypw", "Te groot of te klein"],
  ["UnPB414kQhI", "Boe, zegt Koe"],
  ["dMA_i280xGI", "Op reis"],
  ["TuMPplPev6E", "Wat een wind!"],
  ["8KfyHvAIzLk", "Ros in het bos"],
  ["IwKi3Bpx-Qg", "Aap wil van zijn krulstaart af"],
  ["8Ktg-7zHdLw", "Ik wil op reis!"],
  ["JW0z3nPyiv8", "Nummer 100: Noor zet door"],
];

const get = (id) => document.getElementById(id);
const storageKey = 'voorleeshoek-round-v2';
const limit = get('limit');
const parentDialog = get('parent-dialog');
let round;
let player;
let playerReady = false;
let playing = false;
let paused = false;
let timer;
let generation = 0;
let api;

function storeRound() {
  try {
    if (round) sessionStorage.setItem(storageKey, JSON.stringify(round));
    else sessionStorage.removeItem(storageKey);
  } catch {
    // Keep the current round usable when browser storage is unavailable.
  }
}

function restoreRound() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey));
    if (saved && saved.total >= 1 && saved.total <= Number(limit.max) &&
        saved.order.every((index) => stories[index]) &&
        saved.completed >= 0 && saved.completed <= saved.total &&
        saved.skips >= 0 && saved.skips <= 3 &&
        (saved.completed === saved.total || stories[saved.order[saved.cursor]])) {
      return saved;
    }
  } catch {
    // Invalid or unavailable browser storage starts at setup.
  }
}

function shuffledStories(previous) {
  const order = stories.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  if (order[0] === previous) [order[0], order[1]] = [order[1], order[0]];
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
}

function updateStepper() {
  get('minus').disabled = Number(limit.value) <= 1;
  get('plus').disabled = Number(limit.value) >= Number(limit.max);
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
  get('play').textContent = paused ? '▶ Verder kijken' : playing ? 'Ⅱ Pauzeren' : '▶ Afspelen';
  get('skip').disabled = !round.skips || !!round.waitUntil;
  get('skips').textContent = round.skips === 1 ? 'Nog 1 keer wisselen' : 'Nog ' + round.skips + ' keer wisselen';
}

function render() {
  const done = round.completed === round.total;
  get('setup').hidden = true;
  get('session').hidden = false;
  get('parents').hidden = false;
  get('controls').hidden = done;
  get('progress').textContent = done ? 'SAGOSTUND · KLAAR' : 'VERHAAL ' + (round.completed + 1) + ' VAN ' + round.total;
  get('story').textContent = done ? 'Dat waren de verhalen!' :
    round.waitUntil ? 'Even wachten…' : stories[round.order[round.cursor]][1];
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
      reject(new Error('YouTube-speler niet bereikbaar'));
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
  showMessage('Dit verhaal kan nu niet worden afgespeeld.', '', true);
}

async function mount(autoplay) {
  destroyPlayer();
  render();
  showMessage('Het verhaal wordt klaargezet…');
  const ticket = generation;
  const [id, title] = stories[round.order[round.cursor]];

  try {
    await loadAPI();
    if (ticket !== generation) return;
    const frame = document.createElement('iframe');
    const params = new URLSearchParams({
      enablejsapi: '1',
      origin: location.origin,
      rel: '0',
      playsinline: '1',
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
          updateControls();
          if (autoplay) event.target.playVideo();
        },
        onError() {
          failPlayback(ticket);
        },
        onStateChange(event) {
          if (ticket !== generation) return;
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
  moveToNextStory();
  storeRound();
  if (round.completed === round.total) {
    destroyPlayer();
    render();
    showMessage('Goed gekeken! Tot de volgende keer. ✦');
    get('story').focus();
  } else {
    mount(true);
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
  showMessage('Straks komt er een ander verhaal', seconds);
  timer = setTimeout(tick, Math.max(1, round.waitUntil - Date.now() - (seconds - 1) * 1000));
}

function protectHistory() {
  if (history.state?.watchGuard) return;
  history.pushState({ watchGuard: true }, '');
}

function savePosition() {
  if (!round || !playerReady) return;
  const position = player.getCurrentTime();
  if (Number.isFinite(position)) {
    round.position = Math.floor(position);
    storeRound();
  }
}

function pauseStory() {
  savePosition();
  destroyPlayer();
  paused = true;
  updateControls();
  showMessage('Het verhaal staat op pauze.');
}

get('minus').onclick = () => {
  limit.stepDown();
  updateStepper();
};
get('plus').onclick = () => {
  limit.stepUp();
  updateStepper();
};
limit.oninput = updateStepper;
get('settings').onsubmit = (event) => {
  event.preventDefault();
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
  protectHistory();
  mount(true);
  get('story').focus();
};

get('play').onclick = () => {
  if (paused) mount(true);
  else if (playing) pauseStory();
  else if (playerReady) player.playVideo();
};
get('skip').onclick = () => {
  if (!round.skips || round.waitUntil || round.completed === round.total) return;
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
  destroyPlayer();
  limit.value = round.total;
  round = null;
  storeRound();
  updateStepper();
  get('session').hidden = true;
  get('parents').hidden = true;
  get('setup').hidden = false;
  requestAnimationFrame(() => limit.focus());
};

window.addEventListener('popstate', () => {
  if (round) protectHistory();
});
window.addEventListener('pagehide', savePosition);
setInterval(savePosition, 1500);
window.addEventListener('keydown', (event) => {
  if (!round || parentDialog.open) return;
  if (event.key === 'F5' || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'r')) {
    event.preventDefault();
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) savePosition();
});

round = restoreRound();
updateStepper();
if (round) {
  render();
  if (round.completed === round.total) showMessage('Goed gekeken! Tot de volgende keer. ✦');
  else if (round.waitUntil) tick();
  else mount(false);
}

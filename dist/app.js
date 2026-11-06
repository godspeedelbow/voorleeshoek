'use strict';

const stories = [
  ["oMi3nIvjUf4", "Gummi Tarzan (ljudbok med bilder)", "sv"],
  ["8OBk3INZA2o", "Sagan om det röda äpplet (ljudbok)", "sv"],
  ["aILfIcinfho", "Håkan Bråkan och kramsjukan", "sv"],
  ["rpSxPEv3nQM", "Håkan Bråkan och fismysteriet", "sv"],
  ["XcSXMztHoBg", "På jakt efter älg", "sv"],
  ["PMjIi4v1c-o", "Håkan Bråkan och läskiga huset", "sv"],
  ["KWQc4lSAYR0", "Bajskorv!", "sv"],
  ["UMY8JzoyTG4", "Pelle Svanslös och skidtävlingen", "sv"],
  ["GN_AzZNOSgM", "Välkommen Pelle Svanslös", "sv"],
  ["cyn5vQq3rxA", "Örnis bilar", "sv"],
  ["ZsYkECVoVl4", "Laban och Labolinas jul", "sv"],
  ["pVRBOzaHpuU", "Sov gott pappa, sa lilla spöket Laban", "sv"],
  ["SkDONjUj92Q", "Lillklas och Storklas (av H C Andersen)", "sv"],
  ["_fsMgcSUx3k", "Vem är ensam?", "sv"],
  ["t5oawhaxMDY", "Alla vi barn i Bullerbyn", "sv"],
  ["B1wL9X_z5lM", "Lätta fakta om arkeologi", "sv"],
  ["QCT9BGnaU1A", "Pelle hjälper en riddare", "sv"],
  ["eNOhbcH1U9g", "Kvällen när pappa lekte", "sv"],
  ["2ESYjsI3uFg", "Leni är ett sockerhjärta", "sv"],
  ["LDXZ-78AZUE", "Leni blir en bebis", "sv"],
  ["tr_lQsbboFw", "Vem vågar?", "sv"],
  ["ahSOdy9HrVs", "Vem stör?", "sv"],
  ["FK1Ibc1eMmA", "Pappa läser: Pelle på planetfärd", "sv"],
  ["V25uEadUkKI", "Hattstugan av Elsa Beskow", "sv"],
  ["K6dqj6t9l8c", "Titta, Madicken det snöar!", "sv"],
  ["IY8H69ClVsI", "Vem städar inte?", "sv"],
  ["kPddfCMnhH8", "Vem blöder?", "sv"],
  ["EqnE95Mwrls", "Vem finns?", "sv"],
  ["n57s6lE1d3o", "Lenis Olle", "sv"],
  ["solzgg7iqjA", "Kan man...?", "sv"],
  ["VEU-bl0PwEs", "Vem bestämmer?", "sv"],
  ["gnd0bk4bO5c", "Tjuren Ferdinand", "sv"],
  ["NMEEwEtxU2I", "SKROT-NISSE av Jan Lööf", "sv"],
  ["w3P4vOYsAmc", "När Felix blev stor av Jan Lööf", "sv"],
  ["Ietr10U8mwg", "Pelle träffar en lokförare", "sv"],
  ["TnKs-ngG5Vg", "Pappa läser #52 Pelle i djungeln", "sv"],
  ["uj4bhJkNeq8", "Hundmannen av Dav Pilkey", "sv"],
  ["mxYtbVfvk3U", "Nämen Benny!", "sv"],
  ["3Akq9rYXF5o", "Max bil", "sv"],
  ["h1zLPqHBnMQ", "Emma och lillebror", "sv"],
  ["iSBWPXXH9JQ", "Tisdagen som till slut kom", "sv"],
  ["avERQqr8sVU", "Pappa, jag och havet #ljudbok", "sv"],
  ["z3hBN_tSzfU", "Sneeuwberen", "nl"],
  ["C8SVWVuHHWo", "Eend En Zijn Vrienden", "nl"],
  ["74H4gzFUP3E", "Rolle Bolle Beest", "nl"],
  ["zYYcWfyZ9mo", "Het Verlegen Poesje", "nl"],
  ["7ZU9VFOpy3g", "Zeven Kleine Vrienden", "nl"],
  ["Jahc2tQyqkw", "Wonen Er Beren In Afrika", "nl"],
  ["-AsgDVMrN_o", "Kleine Muis En Haar Speciale Vrienden", "nl"],
  ["4-jYxtf1BG4", "Spuit Elf Gaat Naar School", "nl"],
  ["HEJnRZONhvg", "Ik Wil Iets Heel Moois Geven", "nl"],
  ["-AOU6yqNYeg", "Ik Wil Ergens Anders Wonen", "nl"],
  ["8f3jgoCQvKA", "Ik Wil De Maan", "nl"],
  ["SGDywGX_pI8", "Ik Heb Een Geheim", "nl"],
  ["CDGHWih41rc", "De 5 Brandweermannetjes", "nl"],
  ["VmzbkQkCvX4", "Sneeuwwitje en de 7 Dwergen", "nl"],
  ["W0OO7QM8cQo", "Roodkapje", "nl"],
  ["m8Wa_bi0K-0", "Pinokkio", "nl"],
  ["q2cbf2za49M", "Jungleboek", "nl"],
  ["QRXpQr3NuG4", "Goudlokje en de Beren", "nl"],
  ["g5qpsB7o8rI", "De Gelaarsde Kat", "nl"],
  ["B6RocrLI8bU", "De Drie Biggetjes", "nl"],
  ["qhO_JY_oXyo", "De Bremer Stadsmuzikanten", "nl"],
  ["U4kTFFLikPE", "Assepoester", "nl"],
  ["7N3up2EbwCo", "Alice in Wonderland", "nl"],
  ["dPC2pkI5GTE", "Het Kleinste Rendier", "nl"],
  ["tx0vMbn_LNE", "Het Feestvarken", "nl"],
  ["NNZN6nwtLQU", "Groot En Klein", "nl"],
  ["rmv3K2PHxJg", "Ik Vind Je Lief Opa", "nl"],
  ["yGNvjcVN8bY", "Ik Vind Je Lief Oma", "nl"],
  ["UDbJ18aBqyI", "Eend Is De Baas", "nl"],
  ["qPn2FI498UU", "Lichtjes In Het Bos", "nl"],
  ["G_FrSIruAtE", "Rupsje Nooitgenoeg", "nl"],
  ["xFY472XVsNA", "De grote Gruffalo", "nl"],
  ["nl-V7cQR2JQ", "Hoe komt een olifant aan al die kilo’s grijs?", "nl"],
  ["K9TfvejMv_Q", "De jongen en de walvis", "nl"],
  ["0fFLx1mulXA", "Neushoorns eten geen pannenkoeken", "nl"],
  ["7Ca-mc48vcY", "Anna op de grote wc", "nl"],
  ["HMHQe7QnhL4", "Kikker en de vreemdeling", "nl"],
  ["-1E_F06jz9o", "Spuit Elf wordt brandweerolifant", "nl"],
  ["1r8BL1ojJx8", "Boer Boris gaat naar de markt", "nl"],
  ["Zdn76dqAk8w", "Kleine pinguïn is zijn knuffel kwijt", "nl"],
  ["foaF3rTbQr0", "De spin die het te druk had", "nl"],
  ["9ChyhvSmzX0", "Anansi de spin – Een koekje van eigen deeg", "nl"],
  ["9uZ3b4way68", "Papa, pak je de maan voor mij", "nl"],
  ["qpXA4KmPOts", "Niet zo veel", "nl"],
  ["kQU4lSXRCxg", "Kies maar iets", "nl"],
  ["qT8otNs9jek", "Flor en Roos", "nl"],
  ["G792fBn_PHw", "Niels is nat", "nl"],
  ["A2rVkqJwRiw", "Luna", "nl"],
  ["37DsRSYY50w", "Raf vangt een boef", "nl"],
  ["krrPXHz8BSw", "de schatkaart", "nl"],
  ["Cun9seYyb7Y", "de sik van bok", "nl"],
  ["3VrPjb4OY3E", "Vuur in het bos", "nl"],
  ["UcOAvF71EDQ", "Er was eens", "nl"],
  ["IjdqFeU61gQ", "Sint is ziek", "nl"],
  ["1pq09QycBdw", "Sint is in de war", "nl"],
  ["mEj7f6D2d2U", "Sint is te dik", "nl"],
  ["EDbedLLLMag", "Wie is bang in het donker?", "nl"],
  ["9WF-0iSp6mo", "de fiets van Sien", "nl"],
  ["3NUtc5EG6GE", "De kerstman is moe", "nl"],
  ["wtszFTlq0a8", "De kleren van de kerstman", "nl"],
  ["ndTQlPGq91Q", "Geen pakjes voor kerst", "nl"],
  ["0LNyP06xySU", "Kerst met big en pop", "nl"],
  ["EUk__uzmFL8", "Muis feest in de tuin", "nl"],
  ["0qvx4XR4j_0", "Beer is bang", "nl"],
  ["EmaYpyf4Ti0", "Pam en vis", "nl"],
  ["uVgfJ3FaeZk", "Mus op ski's", "nl"],
  ["-QsAZVn5WT8", "Wat moet ik met een sok?", "nl"],
  ["8c1VcWrx24o", "Een feest voor Jan", "nl"],
  ["u9eiNThdXtA", "De sneeuwman van Matti", "nl"],
  ["1MalE9HzM8M", "De heks zonder toverboek", "nl"],
  ["BI_MnkWhvww", "Kaat geeft een feest", "nl"],
  ["rYDSTcAsZEA", "Wat hoor ik?", "nl"],
  ["tG95P0Ldne8", "Bang voor de reus", "nl"],
  ["16p-OmbpPf4", "Pas op Pam!", "nl"],
  ["EsmvtYLktJs", "De jurk van Kaat", "nl"],
  ["6h-BAxq4YQM", "Wat een kip!", "nl"],
  ["pGr-zs99cO4", "Guus koopt niet aan de deur", "nl"],
  ["epC2ql9ChcU", "Pam en Raaf", "nl"],
  ["DRMc90V1sow", "Daar gaat Noor weer", "nl"],
  ["CZm0JmLXu4Y", "De kist van moe", "nl"],
  ["T9aTozKcn84", "Een leuke dag voor Sep", "nl"],
  ["DR1nKzBvrzQ", "Hardwerkende mannetjes", "nl"],
  ["_Sr223j8Phw", "Fien zegt nee", "nl"],
  ["BsyskWu32wE", "Parels en perziken", "nl"],
  ["en3PRMklnI0", "Hups op reis", "nl"],
  ["M2Rb2rFqHG8", "Net in zee", "nl"],
  ["WagwpNbbDP8", "Beer op de bank", "nl"],
  ["E7efKQGOIiQ", "Welk pakje voor papa?", "nl"],
  ["5nuJsN1j46Q", "Een tent in huis", "nl"],
  ["_Pc9ETLkFV0", "Het lijkt wel een eiland", "nl"],
  ["l9UGNeKgNjk", "1 april", "nl"],
  ["rgW8A8LJRis", "De pop van Haas", "nl"],
  ["5gNDrao031o", "Wie helpt Haas?", "nl"],
  ["G-Si8a-wcmI", "Sta op Troet!", "nl"],
  ["BCjeXsCwIIw", "Een vreemde vriendin", "nl"],
  ["-lAqMvfYH8k", "Kip, kip, kijk naar mij!", "nl"],
  ["nT5_JyY8K3Q", "Mie en Lars", "nl"],
  ["8zUqT-Cdcaw", "Help, een woeste tijger!", "nl"],
  ["t73SuLctCoY", "Het heksenfeest", "nl"],
  ["gE4pzWs4-uY", "Het ei van Mies", "nl"],
  ["VbXeGL_pTn4", "Kas, Saar en Mien", "nl"],
  ["emzJa-jdTUU", "Een vuur voor beer", "nl"],
  ["LDPWx1D3ogs", "Stoetel wil vakantie", "nl"],
  ["_xq_h2KZIS8", "Jet en Kas", "nl"],
  ["A3ngsNO8XMo", "Wie zit er in de bus?", "nl"],
  ["nHEu9jsmaFs", "De grote reis van Sam", "nl"],
  ["XIV0n1CFHcI", "Groot feest!", "nl"],
  ["8DNcdIGOPSg", "Wat een neus!", "nl"],
  ["EObKclwOlpc", "Hans de zanger", "nl"],
  ["Tw3P2GDxzAM", "Muis en Beer", "nl"],
  ["Ot3QIadsKEc", "Noor en het vrolijke visje", "nl"],
  ["kR3TkLZtsow", "Pato de drukke buur", "nl"],
  ["0tH1WYABWpc", "De wereld is mooi!", "nl"],
  ["4iUtBN0y9i8", "Het giet!", "nl"],
  ["TeB-vOyncG4", "Vos en muis bakken een koek", "nl"],
  ["63BAe3CM7F0", "Meester Bart maakt graag mopjes", "nl"],
  ["OxQczHTvT64", "Hoog in de boom", "nl"],
  ["0UrcrdlQTOA", "Prullewup", "nl"],
  ["Y-XGIWGGslU", "In het grote bos", "nl"],
  ["Lh9FDTxYUmQ", "Sol is dol op sla", "nl"],
  ["N2Mpv2a913Y", "Tuk wil vrij zijn", "nl"],
  ["7OnGujhkXH0", "Weg met wit!", "nl"],
  ["ZHCEQOncgzs", "Mus hijst het zeil", "nl"],
  ["iIIAcCs9ZVU", "Het geheim van Lies", "nl"],
  ["InL394MLkYQ", "Mus op het net", "nl"],
  ["PZHTdnJqYEk", "Een gat in de sok", "nl"],
  ["Q9pISTUCC-k", "Mol op het touw", "nl"],
  ["02XJ3m2pcjE", "De boom op de speelplaats", "nl"],
  ["FypKVIZoLhY", "De fiets van Fenne", "nl"],
  ["zF23BaSTAdw", "Spit, spet, spat!", "nl"],
  ["dDIJTc3Rc9w", "Drommel wil in zijn mand", "nl"],
  ["HmkJMkZK_EM", "Juf kan niet lezen", "nl"],
  ["oOSDLRAueHI", "Blijf wakker, Mot!", "nl"],
  ["FgCqLmGRhWI", "Mysterie in het museum", "nl"],
  ["-WjmSulMyzs", "De kip van Pam", "nl"],
  ["aRAKv9vgypw", "Te groot of te klein", "nl"],
  ["UnPB414kQhI", "Boe, zegt Koe", "nl"],
  ["dMA_i280xGI", "Op reis", "nl"],
  ["TuMPplPev6E", "Wat een wind!", "nl"],
  ["8KfyHvAIzLk", "Ros in het bos", "nl"],
  ["IwKi3Bpx-Qg", "Aap wil van zijn krulstaart af", "nl"],
  ["8Ktg-7zHdLw", "Ik wil op reis!", "nl"],
  ["JW0z3nPyiv8", "Nummer 100: Noor zet door", "nl"],

  // Digitaal voorlezen · SBS De Regenboog & ’t Zavelken
  ["_s4R2t9BNR4", "Hennie de heks en de toverwedstrijd", "nl"],
  ["2-vPdlU6UOg", "Ik ben een tijger", "nl"],
  ["p3Z4tqvulug", "De gevaarlijkste wolf van de stad", "nl"],
  ["UGtMg64DewQ", "Robothond", "nl"],
  ["csPUkYlIXXo", "Monster nummer 10", "nl"],
  ["fhBfF6_r83U", "Nina, de kleine, verlegen dinosaurus", "nl"],
  ["YqNERKhF4AY", "Tomte en de vos", "nl"],
  ["lmZd15JZxno", "Flappie houdt van lezen", "nl"],
  ["_JTO8RDr-HI", "Warme truien", "nl"],
  ["RX3ziFLy79M", "Het huis met de gele deur", "nl"],
  ["qLNPwricJkw", "Daar zijn echte vrienden voor", "nl"],
  ["1yT9WUjmn5Q", "Coco kan het", "nl"],
  ["6g78sC5x7Z0", "Dappere dinovriendjes", "nl"],
  ["3YnJYc9jYrU", "Koning Ezelsoren", "nl"],
  ["g_h-rR0J-BE", "Stella en de zeemeeuw", "nl"],
  ["kBpQBXNBe_c", "Kijk uit, een draak!", "nl"],
  ["R5B8J3TCZcY", "Zo zijn ouders", "nl"],
  ["W7qJ6-kbXL0", "Help! Dit boek is dol", "nl"],
  ["0c4jRhBdY40", "Kikker is verliefd", "nl"],
  ["kUPfQn5La90", "Nieuwsgierige Lotje", "nl"],
  ["xwFTrHUW_Fg", "Het circusschip", "nl"],
  ["8InDXJzYuAs", "Eefje donkerblauw", "nl"],
  ["Rt5qVS-BhWI", "Het Kringloopwinkeltje", "nl"],
  ["P5tyPopsfqQ", "Kleine Rex", "nl"],
  ["VkX2Jj9-9lk", "Van mij!", "nl"],
  ["aYAg9A-5RuU", "En ik was de baas", "nl"],
  ["64i3hgb9ErA", "Het monsterbonsterbulderboek", "nl"],
  ["b-ftJG3off0", "Fred het hert", "nl"],
  ["1f2KMt3rHSE", "Muis in de leeuw", "nl"],

  // Biblioteken Svedala
  ["b55KWP_5_ag", "Strandstaden", "sv"],
  ["smoOdYRCgLs", "Sagan om flodhästen", "sv"],
  ["IuNU5uOAc3w", "Zogg och de flygande doktorerna", "sv"],
  ["5qD_TZWms2k", "Tre", "sv"],
  ["MpnbgUtzsLo", "En till dig, två till mig", "sv"],
  ["qSSYDtSRs9U", "Hamstern är borta", "sv"],
  ["SrpvIigtP5s", "Var är mamma?", "sv"],
  ["EuMyHQLjMBA", "Gustav och den snåla glasstanten", "sv"],
  ["KHHkJTHny1w", "Den lilla boksnapparen", "sv"],
  ["yo5uA3wSjrk", "De fula fem", "sv"],

  // Sagostunder · Biblioteken Sigtuna
  ["7LOvRFeZte4", "De tre små grisarna", "sv"],
  ["QLB4ibGU4mM", "Bockarna Bruse", "sv"],
  ["BHntjo0FRmg", "Lilla kotten får besök", "sv"],
  ["5oGVpBDojGU", "Sagan om Rödluvan och vargen", "sv"],
  ["FUGWlNwL8z8", "Gruffalon", "sv"],
  ["fYnq3v8K6hk", "Petter och hans 4 getter", "sv"],
  ["uQmCuQGw3Do", "Guldlock", "sv"],

  // Pappa Läser
  ["fXaATwXZpOI", "När Mamma Mu mötte Kråkan första gången", "sv"],
  ["FTxhYT4E76c", "Pettsson tältar", "sv"],
  ["h-WrkrD982A", "Kan du ingenting Pettsson?", "sv"],
  ["mCq7A5n31U0", "Mamma Mu simmar", "sv"],
  ["sSSpDweoZN8", "Mamma Mu åker bobb", "sv"],

  // Brightly Storytime · lecturas en español
  ["BFSxo0dE3FU", "Con mucho amor", "es"],
  ["jdNV2gUtu90", "Mi papi tiene una moto", "es"],
  ["C-BA9skxo3s", "Mis dos pueblos fronterizos", "es"],
  ["OcYvPJjixZ0", "La oruga muy hambrienta", "es"],
  ["ZsByOPVCSBk", "Rescatando palabras", "es"],

  // Biblioteca Pública Municipal de Baza
  ["bwiNxcb8PQk", "Una feliz catástrofe", "es"],
  ["WaHkE1ZGwiQ", "Arturo y Clementina", "es"],
  ["5iAux1oEGLc", "¿Las princesas usan botas de montaña?", "es"],
  ["3pi7xpSlzqk", "Te quiero (casi siempre)", "es"],
  ["ISpWTaJlpZw", "Monstruo rosa", "es"],
  ["1gxa1MD-CT0", "Orejas de mariposa", "es"],
  ["2rGQBLd6eOQ", "¿Hay algo más aburrido que ser una princesa rosa?", "es"],
  ["aELDiMUUTj0", "Lo que papá me ha dicho", "es"],
  ["d0wazd9VaRk", "Una caja", "es"],

  // Cuentos para niños 4–6 años · Cuéntame un cuento Mami
  ["d4C_Hp9G9DA", "El increíble niño comelibros", "es"],
  ["d3Dv2Mvppsw", "Atrapados", "es"],
  ["0IRB-sRdtXI", "Topito terremoto", "es"],
  ["SHR98zprgW8", "Cocorico", "es"],
  ["Ltb0WSjotIo", "Por cuatro esquinitas de nada", "es"],
  ["TGWKMoWNgqo", "En familia", "es"],
  ["RA4Zbpe_0uE", "¡No quiero ir a la escuela!", "es"],
  ["Ve8rJ8qO_oM", "La vaca que puso un huevo", "es"],
  ["DNQ-W65a3i0", "La ovejita que vino a cenar", "es"],
  ["8My8cNfQKRo", "Leotolda", "es"],
  ["Sd1vVZ06OEM", "El lobo que quería cambiar de color", "es"],
  ["7lWHN9zLf7M", "El día que los crayones renunciaron", "es"],
  ["WFQYpwChij8", "¿De qué color es un beso?", "es"],
  ["XLJ7clqkLs8", "¡Qué asco de sándwich!", "es"],
  ["we2hkC7kr4M", "El túnel arcoíris de Finn", "es"],

  // Biblioteca escolar · EducaMadrid
  ["aMd-jvnuYcI", "El pequeño conejo blanco", "es"],
  ["ip6R9rpq45s", "Pequeño Azul y Pequeño Amarillo", "es"],
];

const get = (id) => document.getElementById(id);
const storageKey = 'voorleeshoek-round-v2';
const limit = get('limit');
const parentDialog = get('parent-dialog');
const landscapeTouchScreen = matchMedia('(orientation: landscape) and (pointer: coarse) and (hover: none)');
const languageInputs = [...get('languages').querySelectorAll('input')];
const languageKey = 'voorleeshoek-languages';
try {
  const saved = JSON.parse(localStorage.getItem(languageKey));
  if (Array.isArray(saved) && languageInputs.some((input) => saved.includes(input.value))) {
    for (const input of languageInputs) input.checked = saved.includes(input.value);
  }
} catch {
  // All languages are enabled by default.
}

function selectedLanguages() {
  return languageInputs.filter((input) => input.checked).map((input) => input.value);
}

function updateLanguageInputs() {
  const languages = selectedLanguages();
  for (const input of languageInputs) input.disabled = input.checked && languages.length === 1;
}

get('languages').onchange = () => {
  updateLanguageInputs();
  try {
    localStorage.setItem(languageKey, JSON.stringify(selectedLanguages()));
  } catch {
    // The selection remains available on this page.
  }
};
updateLanguageInputs();
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

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function shuffledStories(languages, previous) {
  const queues = new Map(languages.map((language) => [language, []]));
  stories.forEach((story, index) => queues.get(story[2])?.push(index));
  const groups = shuffle([...queues.values()].filter((group) => group.length));
  groups.forEach(shuffle);

  // Give each chosen language a turn even when their libraries differ in size.
  const order = [];
  while (groups.some((group) => group.length)) {
    for (const group of groups) {
      if (group.length) order.push(group.pop());
    }
  }
  if (order.length > 1 && order[0] === previous) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

function moveToNextStory() {
  const previous = round.order[round.cursor];
  round.cursor += 1;
  if (round.cursor === round.order.length) {
    round.order = shuffledStories(round.languages ?? ['nl', 'sv'], previous);
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
  get('parents').hidden = false;
  get('session').hidden = false;
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
  if (needsPortrait()) {
    pauseStory();
    return;
  }
  showMessage('Het verhaal wordt klaargezet…');
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
        onReady() {
          if (ticket !== generation) return;
          clearTimeout(timer);
          playerReady = true;
          updateControls();
        },
        onAutoplayBlocked() {
          if (ticket === generation && !playing) get('autoplay-hint').hidden = false;
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
  updateStepper();
};
get('plus').onclick = () => {
  limit.stepUp();
  updateStepper();
};
limit.oninput = updateStepper;
get('settings').onsubmit = (event) => {
  event.preventDefault();
  const languages = selectedLanguages();
  round = {
    languages,
    total: Number(limit.value),
    completed: 0,
    skips: 3,
    order: shuffledStories(languages),
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
  get('setup').hidden = false;
  get('parents').hidden = true;
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
landscapeTouchScreen.addEventListener('change', updateOrientation);
updateOrientation();
updateStepper();
if (round) {
  render();
  if (round.completed === round.total) showMessage('Goed gekeken! Tot de volgende keer. ✦');
  else if (round.waitUntil) tick();
  else mount(false);
}

'use strict';

const translations = {
  nl: {
    siteName: 'Voorleeshoek',
    description: 'Een kijkplek voor Nederlandse voorleesverhalen.',
    chooseCountry: 'Kies een land',
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
    autoplayHint: 'Tik op Afspelen om het verhaal te starten.',
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
  de: {
    siteName: 'Vorleseecke',
    description: 'Hier kannst du dir vorgelesene Geschichten auf Deutsch anschauen.',
    chooseCountry: 'Land auswählen',
    rotate: 'Dreh deinen Bildschirm ins Hochformat',
    welcome: 'Zeit für eine Geschichte!',
    subtitle: 'Mach es dir gemütlich. Eine Geschichte wartet auf dich.',
    storyCount: 'Wie viele Geschichten?',
    less: 'Eine Geschichte weniger',
    more: 'Eine Geschichte mehr',
    start: 'Los geht’s',
    play: 'Abspielen',
    pause: 'Pause',
    resume: 'Weiterschauen',
    skip: 'Andere Geschichte',
    skips: (count) => `Du kannst noch ${count}-mal wechseln`,
    progress: (current, total) => `GESCHICHTE ${current} VON ${total}`,
    timeline: 'Fortschritt der Geschichte',
    skipUntil: (time) => `Wechseln bis ${time}`,
    skipClosed: 'Du kannst die Geschichte jetzt nicht mehr wechseln',
    loading: 'Die Geschichte wird geladen…',
    paused: 'Die Geschichte ist pausiert.',
    waiting: 'Einen Moment…',
    next: 'Gleich kommt eine andere Geschichte',
    autoplayHint: 'Tippe auf Abspielen, um die Geschichte zu starten.',
    playbackError: 'Diese Geschichte kann gerade nicht abgespielt werden.',
    retry: 'Noch einmal versuchen',
    done: 'VORLESEZEIT · FERTIG',
    doneTitle: 'Das waren alle Geschichten!',
    farewell: 'Schön, dass du da warst. Bis zum nächsten Mal! ✦',
    parentCatalog: 'Für Eltern',
    restart: 'Neu beginnen',
    confirmRestart: 'Möchtest du diese Runde beenden?',
    version: 'Version',
    updated: 'Aktualisiert am',
  },
  is: {
    siteName: 'Söguhornið',
    description: 'Hér geturðu horft á upplestur á íslenskum barnabókum.',
    chooseCountry: 'Veldu land',
    rotate: 'Snúðu skjánum í lóðrétta stöðu',
    welcome: 'Nú er sögustund!',
    subtitle: 'Komdu þér vel fyrir. Saga bíður þín.',
    storyCount: 'Hversu margar sögur?',
    less: 'Ein saga færri',
    more: 'Ein saga í viðbót',
    start: 'Byrja að horfa',
    play: 'Spila',
    pause: 'Gera hlé',
    resume: 'Halda áfram',
    skip: 'Önnur saga',
    skips: (count) => `Þú getur skipt ${count} sinnum í viðbót`,
    progress: (current, total) => `SAGA ${current} AF ${total}`,
    timeline: 'Framvinda sögunnar',
    skipUntil: (time) => `Hægt er að skipta til ${time}`,
    skipClosed: 'Ekki er lengur hægt að skipta um sögu',
    loading: 'Sagan er að hlaðast…',
    paused: 'Hlé er á sögunni.',
    waiting: 'Bíddu aðeins…',
    next: 'Önnur saga kemur bráðum',
    autoplayHint: 'Ýttu á Spila til að byrja söguna.',
    playbackError: 'Ekki er hægt að spila söguna núna.',
    retry: 'Reyna aftur',
    done: 'SÖGUSTUND · LOKIÐ',
    doneTitle: 'Þá eru sögurnar búnar!',
    farewell: 'Takk fyrir að horfa. Sjáumst næst! ✦',
    parentCatalog: 'Fyrir foreldra',
    restart: 'Byrja upp á nýtt',
    confirmRestart: 'Viltu ljúka þessari sögustund?',
    version: 'Útgáfa',
    updated: 'Uppfært',
  },
  sv: {
    siteName: 'Sagohörnan',
    description: 'Här kan du titta på högläsning av sagor på svenska.',
    chooseCountry: 'Välj land',
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
    autoplayHint: 'Tryck på Spela upp för att starta sagan.',
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
    chooseCountry: 'Elige un país',
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
    autoplayHint: 'Toca Reproducir para empezar el cuento.',
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
  it: {
    siteName: 'Angolo delle storie',
    description: 'Un posto dove guardare storie lette ad alta voce in italiano.',
    chooseCountry: 'Scegli un paese',
    rotate: 'Metti lo schermo in verticale',
    welcome: 'È ora di una storia!',
    subtitle: 'Mettiti comodo sul divano. C’è una storia che ti aspetta.',
    storyCount: 'Quante storie?',
    less: 'Una storia in meno',
    more: 'Una storia in più',
    start: 'Inizia a guardare',
    play: 'Riproduci',
    pause: 'Metti in pausa',
    resume: 'Continua a guardare',
    skip: 'Cambia storia',
    skips: (count) => count === 1 ? 'Puoi cambiare ancora una volta' : `Puoi cambiare ancora ${count} volte`,
    progress: (current, total) => `STORIA ${current} DI ${total}`,
    timeline: 'Avanzamento della storia',
    skipUntil: (time) => `Puoi cambiare storia fino a ${time}`,
    skipClosed: 'Non puoi più cambiare storia',
    loading: 'La storia si sta caricando…',
    paused: 'La storia è in pausa.',
    waiting: 'Aspetta un attimo…',
    next: 'Tra poco inizia un’altra storia',
    autoplayHint: 'Tocca Riproduci per iniziare la storia.',
    playbackError: 'Questa storia al momento non si può riprodurre.',
    retry: 'Riprova',
    done: 'L’ORA DELLE STORIE · FINE',
    doneTitle: 'Le storie sono finite!',
    farewell: 'Grazie per aver guardato! Alla prossima. ✦',
    parentCatalog: 'Per i genitori',
    restart: 'Ricomincia',
    confirmRestart: 'Vuoi finire di guardare le storie?',
    version: 'Versione',
    updated: 'Aggiornato il',
  },
  "en-GB": {
    siteName: "Story Corner",
    description: "A place to watch stories read aloud in British English.",
    chooseCountry: 'Choose a country',
    rotate: "Turn your screen upright",
    welcome: "Story time!",
    subtitle: "Get cosy on the sofa. A story is waiting for you.",
    storyCount: "How many stories?",
    less: "One fewer story",
    more: "One more story",
    start: "Start watching",
    play: "Play",
    pause: "Pause",
    resume: "Keep watching",
    skip: "Change story",
    skips: (count) => `${count} ${count === 1 ? 'swap' : 'swaps'} left`,
    progress: (current, total) => `STORY ${current} OF ${total}`,
    timeline: "Story progress",
    skipUntil: (time) => `You can switch until ${time}`,
    skipClosed: "You can no longer switch stories",
    loading: "Getting the story ready…",
    paused: "The story is paused.",
    waiting: "Just a moment…",
    next: "Another story is coming up",
    autoplayHint: "Tap Play to start the story.",
    playbackError: "This story cannot be played right now.",
    retry: "Try again",
    done: "STORY TIME · FINISHED",
    doneTitle: "That was the last story!",
    farewell: "Thanks for watching. See you next time! ✦",
    parentCatalog: "For parents",
    restart: "Start again",
    confirmRestart: "End this story session?",
    version: "Version",
    updated: "Updated on",
  },
  "ary": {
    siteName: "ركن الحكايات",
    description: "هنا تقدر تتفرج فحكايات مقروية بالدارجة المغربية.",
    chooseCountry: 'ختار البلاد',
    rotate: "رد الشاشة واقفة",
    welcome: "وقت الحكاية!",
    subtitle: "گلس مرتاح فالصالون. كاينة حكاية كتسناك.",
    storyCount: "شحال من حكاية؟",
    less: "نقص حكاية",
    more: "زيد حكاية",
    start: "بدا تفرج",
    play: "شغّل",
    pause: "وقف شوية",
    resume: "كمّل التفرّج",
    skip: "بدّل الحكاية",
    skips: (count) => `باقي تقدر تبدّل ${count} مرات`,
    progress: (current, total) => `الحكاية ${current} من ${total}`,
    timeline: "فين وصلات الحكاية",
    skipUntil: (time) => `تقدر تبدّل حتى لـ ${time}`,
    skipClosed: "ما بقاتش تقدر تبدّل الحكاية",
    loading: "كنوجدو الحكاية…",
    paused: "الحكاية واقفة.",
    waiting: "تسنّى شوية…",
    next: "دابا غادي تجي حكاية أخرى",
    autoplayHint: "ضغط على شغّل باش تبدا الحكاية.",
    playbackError: "الحكاية ما خداماش دابا.",
    retry: "عاود جرّب",
    done: "وقت الحكاية · سالا",
    doneTitle: "سالاو الحكايات!",
    farewell: "شكراً حيث تفرجتي! حتى للمرة الجاية. ✦",
    parentCatalog: "للآباء والأمهات",
    restart: "بدا من جديد",
    confirmRestart: "بغيتي تسالي هاد الجولة؟",
    version: "النسخة",
    updated: "آخر تحديث",
  },
  "tr": {
    siteName: "Masal Köşesi",
    description: "Türkçe sesli okunan hikâyeleri izleyebileceğin bir yer.",
    chooseCountry: 'Ülke seç',
    rotate: "Ekranını dik çevir",
    welcome: "Masal zamanı!",
    subtitle: "Kanepeye rahatça kurul. Bir hikâye seni bekliyor.",
    storyCount: "Kaç hikâye?",
    less: "Bir hikâye azalt",
    more: "Bir hikâye ekle",
    start: "İzlemeye başla",
    play: "Oynat",
    pause: "Duraklat",
    resume: "İzlemeye devam et",
    skip: "Hikâyeyi değiştir",
    skips: (count) => `${count} değiştirme hakkın kaldı`,
    progress: (current, total) => `${total} HİKÂYEDEN ${current}. HİKÂYE`,
    timeline: "Hikâyenin ilerleyişi",
    skipUntil: (time) => `${time} süresine kadar değiştirebilirsin`,
    skipClosed: "Artık hikâyeyi değiştiremezsin",
    loading: "Hikâye hazırlanıyor…",
    paused: "Hikâye duraklatıldı.",
    waiting: "Biraz bekle…",
    next: "Birazdan yeni bir hikâye başlayacak",
    autoplayHint: "Hikâyeyi başlatmak için Oynat’a dokun.",
    playbackError: "Bu hikâye şu anda oynatılamıyor.",
    retry: "Yeniden dene",
    done: "MASAL ZAMANI · BİTTİ",
    doneTitle: "Hikâyeler bitti!",
    farewell: "İzlediğin için teşekkürler. Görüşürüz! ✦",
    parentCatalog: "Ebeveynler için",
    restart: "Baştan başla",
    confirmRestart: "Bu izleme turunu bitirmek istiyor musun?",
    version: "Sürüm",
    updated: "Güncelleme tarihi",
  },
  "pl": {
    siteName: "Kącik bajek",
    description: "Tu obejrzysz bajki czytane po polsku.",
    chooseCountry: 'Wybierz kraj',
    rotate: "Ustaw ekran pionowo",
    welcome: "Czas na bajkę!",
    subtitle: "Usiądź wygodnie na kanapie. Czeka na ciebie bajka.",
    storyCount: "Ile bajek?",
    less: "O jedną bajkę mniej",
    more: "O jedną bajkę więcej",
    start: "Zacznij oglądać",
    play: "Odtwórz",
    pause: "Wstrzymaj",
    resume: "Oglądaj dalej",
    skip: "Zmień bajkę",
    skips: (count) => `Pozostałe zmiany: ${count}`,
    progress: (current, total) => `BAJKA ${current} Z ${total}`,
    timeline: "Postęp odtwarzania bajki",
    skipUntil: (time) => `Możesz zmienić bajkę do ${time}`,
    skipClosed: "Nie możesz już zmienić bajki",
    loading: "Przygotowujemy bajkę…",
    paused: "Bajka jest wstrzymana.",
    waiting: "Chwileczkę…",
    next: "Zaraz zacznie się kolejna bajka",
    autoplayHint: "Stuknij Odtwórz, aby zacząć bajkę.",
    playbackError: "Tej bajki nie można teraz odtworzyć.",
    retry: "Spróbuj ponownie",
    done: "CZAS NA BAJKĘ · KONIEC",
    doneTitle: "To już wszystkie bajki!",
    farewell: "Dzięki za oglądanie. Do następnego razu! ✦",
    parentCatalog: "Dla rodziców",
    restart: "Zacznij od nowa",
    confirmRestart: "Czy chcesz zakończyć oglądanie?",
    version: "Wersja",
    updated: "Aktualizacja",
  },
  "fr": {
    siteName: "Le coin des histoires",
    description: "Un endroit pour regarder des histoires lues à voix haute en français.",
    chooseCountry: 'Choisir un pays',
    rotate: "Tourne ton écran à la verticale",
    welcome: "C’est l’heure de l’histoire !",
    subtitle: "Installe-toi sur le canapé. Une histoire t’attend.",
    storyCount: "Combien d’histoires ?",
    less: "Une histoire de moins",
    more: "Une histoire de plus",
    start: "Commencer à regarder",
    play: "Lire",
    pause: "Mettre en pause",
    resume: "Continuer à regarder",
    skip: "Changer d’histoire",
    skips: (count) => `Changements restants : ${count}`,
    progress: (current, total) => `HISTOIRE ${current} SUR ${total}`,
    timeline: "Progression de l’histoire",
    skipUntil: (time) => `Tu peux changer d’histoire jusqu’à ${time}`,
    skipClosed: "Tu ne peux plus changer d’histoire",
    loading: "L’histoire se prépare…",
    paused: "L’histoire est en pause.",
    waiting: "Un petit instant…",
    next: "Une autre histoire va bientôt commencer",
    autoplayHint: "Appuie sur Lire pour lancer l’histoire.",
    playbackError: "Cette histoire ne peut pas être lue pour le moment.",
    retry: "Réessayer",
    done: "L’HEURE DE L’HISTOIRE · FIN",
    doneTitle: "C’étaient toutes les histoires !",
    farewell: "Merci d’avoir regardé. À la prochaine ! ✦",
    parentCatalog: "Pour les parents",
    restart: "Recommencer",
    confirmRestart: "Veux-tu terminer cette séance ?",
    version: "Version",
    updated: "Mis à jour le",
  },
  "da": {
    siteName: "Historiehjørnet",
    description: "Her kan du se historier blive læst højt på dansk.",
    chooseCountry: 'Vælg land',
    rotate: "Drej skærmen til stående format",
    welcome: "Tid til en historie!",
    subtitle: "Sæt dig godt til rette i sofaen. En historie venter på dig.",
    storyCount: "Hvor mange historier?",
    less: "En historie mindre",
    more: "En historie mere",
    start: "Begynd at se",
    play: "Afspil",
    pause: "Sæt på pause",
    resume: "Se videre",
    skip: "Skift historie",
    skips: (count) => `Du kan skifte ${count} gange endnu`,
    progress: (current, total) => `HISTORIE ${current} AF ${total}`,
    timeline: "Hvor langt historien er nået",
    skipUntil: (time) => `Du kan skifte historie indtil ${time}`,
    skipClosed: "Du kan ikke skifte historie længere",
    loading: "Historien gøres klar…",
    paused: "Historien er sat på pause.",
    waiting: "Vent et øjeblik…",
    next: "Om lidt kommer der en ny historie",
    autoplayHint: "Tryk på Afspil for at starte historien.",
    playbackError: "Historien kan ikke afspilles lige nu.",
    retry: "Prøv igen",
    done: "HISTORIETID · SLUT",
    doneTitle: "Det var alle historierne!",
    farewell: "Tak fordi du så med. Vi ses næste gang! ✦",
    parentCatalog: "Til forældre",
    restart: "Start forfra",
    confirmRestart: "Vil du slutte for denne gang?",
    version: "Version",
    updated: "Opdateret den",
  },
};

const get = (id) => document.getElementById(id);
const storageKey = 'voorleeshoek-round-v2';
const skipDeadline = 60;
const limit = get('limit');
const parentDialog = get('parent-dialog');
const landscapeTouchScreen = matchMedia('(orientation: landscape) and (pointer: coarse) and (hover: none)');
const countryPicker = get('country-picker');
const countryTrigger = countryPicker.querySelector('summary');
const countryOptions = get('country-options');
const languageKey = 'voorleeshoek-language';
const limitKey = 'voorleeshoek-limit';
const countryByRegion = new Map([
  ['NL', 'nl'], ['SE', 'sv'], ['ES', 'es'], ['IT', 'it'], ['GB', 'en-GB'],
  ['MA', 'ary'], ['TR', 'tr'], ['PL', 'pl'], ['FR', 'fr'], ['DK', 'da'], ['MC', 'fr-MC'], ['CH', 'de-CH'], ['IS', 'is'],
]);
let preferredCountry;
let detectedCountry;
let startedRound = false;

try {
  const saved = localStorage.getItem(languageKey);
  if (countryById.has(saved)) {
    preferredCountry = saved;
  } else {
    const previous = JSON.parse(localStorage.getItem('voorleeshoek-languages'));
    if (Array.isArray(previous) && previous.length === 1 && countryById.has(previous[0])) {
      preferredCountry = previous[0];
    }
  }
} catch {
  // The default can still be selected from the browser or its IP address.
}

let selectedCountry;
let language;
let copy;

function countryFromURL() {
  return countryFromQuery(location.search)?.id ?? null;
}

function defaultCountry() {
  return preferredCountry ?? detectedCountry ?? countryFromBrowser() ?? 'nl';
}

function browserLanguages() {
  return (navigator.languages?.length ? navigator.languages : [navigator.language])
    .map((tag) => tag.toLowerCase());
}

function countryFromBrowser() {
  for (const tag of browserLanguages()) {
    const exact = countries.find(({ id }) => id.toLowerCase() === tag);
    if (exact) return exact.id;

    const base = tag.split('-')[0];
    const match = countries.find(({ language }) => language.split('-')[0] === base);
    if (match) return match.id;
  }
  return null;
}

function canDetectCountry() {
  return !preferredCountry && !round && !startedRound && !countryFromURL();
}

async function detectCountry() {
  const providers = [
    ['https://get.geojs.io/v1/ip/country', (response) => response.text()],
    ['https://api.country.is/', async (response) => (await response.json())?.country],
  ];

  for (const [url, readCountry] of providers) {
    if (!canDetectCountry()) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
      });
      if (!response.ok) continue;
      const region = await readCountry(response);
      if (typeof region !== 'string' || !/^[a-z]{2}$/i.test(region.trim())) continue;
      const code = region.trim().toUpperCase();
      if (code === 'BE') {
        const belgianLanguage = browserLanguages()
          .map((tag) => tag.split('-')[0])
          .find((base) => base === 'fr' || base === 'nl');
        return belgianLanguage === 'fr' ? 'fr-BE' : 'nl-BE';
      }
      return countryByRegion.get(code);
    } catch {
      // Try the next provider after a timeout, network error or invalid response.
    } finally {
      clearTimeout(timeout);
    }
  }
}

function applyCountry(id) {
  selectedCountry = countryById.get(id);
  language = selectedCountry.language;
  copy = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ary' ? 'rtl' : 'ltr';
  get('parent-catalog-link').href = './ouders.html?' + setCountryQuery(new URLSearchParams(), selectedCountry);
  get('country-flag').textContent = selectedCountry.flag;
  const countryName = get('country-name');
  countryName.textContent = selectedCountry.label;
  countryName.lang = language;
  for (const button of countryOptions.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button.value === id));
  }
  const count = new Intl.NumberFormat(language).format(countries.length - 1);
  get('country-count').textContent = '+' + count;
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
        if (typeof entry === 'string') return stories.findIndex((story) => story?.[0] === entry);

        // Rounds saved before video IDs used catalog positions. One entry was removed at index 201.
        const removedIndex = 201;
        if (!Number.isInteger(entry) || entry === removedIndex) return -1;
        return entry > removedIndex ? entry - 1 : entry;
      });
      const current = indices[saved.cursor];
      if (!stories[current]) return;
      const currentCountry = storyCountry(stories[current]);
      // Keep the current story and playback position in older multilingual rounds.
      const order = indices.filter((index) => storyCountry(stories[index]) === currentCountry);
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
    if (storyCountry(story) === selectedCountry.id) order.push(index);
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
  const [, title, , channel] = stories[round.order[round.cursor]];
  get('setup').hidden = true;
  countryPicker.hidden = true;
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
    round.waitUntil ? copy.waiting : title;
  const storyChannel = get('story-channel');
  storyChannel.textContent = channel || '';
  storyChannel.hidden = done || !!round.waitUntil || !channel;
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
      hl: language === 'ary' ? 'ar' : language,
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
  countryPicker.hidden = false;
  get('parents').hidden = true;
}

function roundForURL() {
  const id = new URL(location.href).searchParams.get('v');
  const index = stories.findIndex((story) => story?.[0] === id);
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
  startedRound = true;
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

for (const { id, language, flag, label } of countries) {
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.type = 'button';
  button.value = id;
  const icon = document.createElement('span');
  icon.className = 'country-flag';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = flag;
  const name = document.createElement('bdi');
  name.lang = language;
  name.textContent = label;
  button.append(icon, name);
  button.addEventListener('click', () => {
    countryPicker.open = false;
    chooseCountry(id);
    countryTrigger.focus();
  });
  item.append(button);
  countryOptions.append(item);
}

document.addEventListener('click', (event) => {
  if (!countryPicker.contains(event.target)) countryPicker.open = false;
});
countryPicker.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !countryPicker.open) return;
  countryPicker.open = false;
  countryTrigger.focus();
});

function chooseCountry(id) {
  preferredCountry = id;
  const url = new URL(location.href);
  setCountryQuery(url.searchParams, countryById.get(id));
  history.replaceState(history.state, '', url);
  try {
    localStorage.setItem(languageKey, preferredCountry);
  } catch {
    // The selection remains available on this page.
  }
  applyCountry(preferredCountry);

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
}

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
  applyCountry(round ? storyCountry(stories[round.order[0]]) : countryFromURL() ?? defaultCountry());
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
if ((!linkedRound && countryFromURL()) || (linkedRound && (!round || !knownEntry)) ||
    (round?.historyEntry !== undefined && round.historyEntry !== historyEntry)) {
  round = linkedRound;
  storeRound();
}
applyCountry(round ? storyCountry(stories[round.order[round.cursor]]) : countryFromURL() ?? defaultCountry());
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
  else mount(round === linkedRound);
}

if (canDetectCountry()) {
  detectCountry().then((id) => {
    if (!id || !canDetectCountry()) return;
    detectedCountry = id;
    if (id !== selectedCountry.id) applyCountry(id);
  });
}

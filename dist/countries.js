'use strict';

const countries = [
  { id: 'nl', language: 'nl', flag: '🇳🇱', label: 'Nederland' },
  { id: 'nl-BE', language: 'nl', flag: '🇧🇪', label: 'België / Vlaams' },
  { id: 'fr-BE', language: 'fr', flag: '🇧🇪', label: 'Belgique / Français' },
  { id: 'sv', language: 'sv', flag: '🇸🇪', label: 'Sverige' },
  { id: 'es', language: 'es', flag: '🇪🇸', label: 'España' },
  { id: 'it', language: 'it', flag: '🇮🇹', label: 'Italia' },
  { id: 'en-GB', language: 'en-GB', flag: '🇬🇧', label: 'United Kingdom' },
  { id: 'ary', language: 'ary', flag: '🇲🇦', label: 'المغرب' },
  { id: 'tr', language: 'tr', flag: '🇹🇷', label: 'Türkiye' },
  { id: 'pl', language: 'pl', flag: '🇵🇱', label: 'Polska' },
  { id: 'fr', language: 'fr', flag: '🇫🇷', label: 'France' },
  { id: 'da', language: 'da', flag: '🇩🇰', label: 'Danmark' },
];

const countryById = new Map(countries.map((country) => [country.id, country]));

function storyCountry(story) {
  return story?.[5] ?? story?.[2];
}

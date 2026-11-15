'use strict';

const countries = [
  { id: 'nl', code: 'NL', language: 'nl', flag: '🇳🇱', label: 'Nederland' },
  { id: 'nl-BE', code: 'BE', language: 'nl', flag: '🇧🇪', label: 'België / Vlaams' },
  { id: 'fr-BE', code: 'BE', language: 'fr', flag: '🇧🇪', label: 'Belgique / Français' },
  { id: 'sv', code: 'SE', language: 'sv', flag: '🇸🇪', label: 'Sverige' },
  { id: 'es', code: 'ES', language: 'es', flag: '🇪🇸', label: 'España' },
  { id: 'it', code: 'IT', language: 'it', flag: '🇮🇹', label: 'Italia' },
  { id: 'en-GB', code: 'GB', language: 'en-GB', flag: '🇬🇧', label: 'United Kingdom' },
  { id: 'ary', code: 'MA', language: 'ary', flag: '🇲🇦', label: 'المغرب' },
  { id: 'tr', code: 'TR', language: 'tr', flag: '🇹🇷', label: 'Türkiye' },
  { id: 'pl', code: 'PL', language: 'pl', flag: '🇵🇱', label: 'Polska' },
  { id: 'fr', code: 'FR', language: 'fr', flag: '🇫🇷', label: 'France' },
  { id: 'fr-MC', code: 'MC', language: 'fr', flag: '🇲🇨', label: 'Monaco' },
  { id: 'de', code: 'DE', language: 'de', flag: '🇩🇪', label: 'Deutschland' },
  { id: 'de-AT', code: 'AT', language: 'de', flag: '🇦🇹', label: 'Österreich' },
  { id: 'de-CH', code: 'CH', language: 'de', flag: '🇨🇭', label: 'Schweiz' },
  { id: 'ga', code: 'IE', language: 'ga', flag: '🇮🇪', label: 'Éire' },
  { id: 'is', code: 'IS', language: 'is', flag: '🇮🇸', label: 'Ísland' },
  { id: 'da', code: 'DK', language: 'da', flag: '🇩🇰', label: 'Danmark' },
];

const countryById = new Map(countries.map((country) => [country.id, country]));

function queryLanguage(country) {
  return country.language.split('-')[0];
}

function countryFromQuery(search) {
  const params = new URLSearchParams(search);
  const code = params.get('country');
  const lang = params.get('lang')?.toLowerCase();
  if (!code) {
    return countryById.get(params.get('lang')) ??
      countries.find((country) => queryLanguage(country) === lang);
  }

  const matches = countries.filter((country) => country.code === code.toUpperCase());
  return matches.find((country) => queryLanguage(country) === lang || country.language.toLowerCase() === lang) ??
    countryById.get(code) ?? matches[0];
}

function setCountryQuery(params, country) {
  params.set('country', country.code);
  params.set('lang', queryLanguage(country));
  return params;
}

function storyCountry(story) {
  return story?.[5] ?? story?.[2];
}

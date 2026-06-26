import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ko from './locales/ko.json';
import type { Locale } from '@/types';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'ko'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ko: '한국어'
};

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const langs = [navigator.language, ...(navigator.languages ?? [])];
  for (const l of langs) {
    const lower = l.toLowerCase();
    if (lower.startsWith('ko')) return 'ko';
  }
  return 'en';
}

function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem('hanpick:locale');
    if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) return saved as Locale;
  } catch {
    /* ignore */
  }
  return detectBrowserLocale();
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko }
  },
  lng: initialLocale(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  returnNull: false
});

export default i18n;

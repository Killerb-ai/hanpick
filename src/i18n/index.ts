import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import type { Locale } from '@/types';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'zh', 'ja', 'ko'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어'
};

// Default to English per product direction, but fall back to browser language
// if it matches a supported locale.
export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const langs = [navigator.language, ...(navigator.languages ?? [])];
  for (const l of langs) {
    const lower = l.toLowerCase();
    if (lower.startsWith('ko')) return 'ko';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('zh')) return 'zh';
  }
  return 'en';
}

// Persisted language wins; otherwise browser detection; otherwise English.
function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem('hanpick:locale');
    if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) return saved as Locale;
  } catch {
    /* ignore */
  }
  return 'en'; // English is the primary default per product direction
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
    ja: { translation: ja },
    ko: { translation: ko }
  },
  lng: initialLocale(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already escapes
  },
  returnNull: false
});

export default i18n;

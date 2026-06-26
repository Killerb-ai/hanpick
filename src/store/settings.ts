import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Currency, Locale, ShippingZone } from '@/types';
import i18n, { SUPPORTED_LOCALES } from '@/i18n';

interface SettingsState {
  locale: Locale;
  currency: Currency;
  shipZone: ShippingZone; // customer's country/region for shipping calc
  setLocale: (l: Locale) => void;
  setCurrency: (c: Currency) => void;
  setShipZone: (z: ShippingZone) => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      locale: (i18n.language as Locale) ?? 'en',
      currency: 'USD',
      shipZone: 'US',
      setLocale: (locale) => {
        if (!SUPPORTED_LOCALES.includes(locale)) return;
        i18n.changeLanguage(locale);
        try {
          localStorage.setItem('hanpick:locale', locale);
        } catch {
          /* ignore */
        }
        document.documentElement.lang = localeBCP(locale);
        set({ locale });
      },
      setCurrency: (currency) => set({ currency }),
      setShipZone: (shipZone) => set({ shipZone })
    }),
    {
      name: 'hanpick:settings',
      // Only persist the data, not the actions.
      partialize: (s) => ({
        locale: s.locale,
        currency: s.currency,
        shipZone: s.shipZone
      })
    }
  )
);

function localeBCP(l: Locale): string {
  switch (l) {
    case 'ko':
      return 'ko-KR';
    case 'ja':
      return 'ja-JP';
    case 'zh':
      return 'zh-CN';
    default:
      return 'en-US';
  }
}

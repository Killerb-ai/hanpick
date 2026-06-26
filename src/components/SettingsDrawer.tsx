import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { LOCALE_LABELS, SUPPORTED_LOCALES } from '@/i18n';
import type { Currency, ShippingZone } from '@/types';

/** Slide-up sheet to change language / currency / shipping country. */
export function SettingsDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  const { locale, currency, shipZone, setLocale, setCurrency, setShipZone } = useSettings();

  if (!open) return null;

  const zones: ShippingZone[] = ['US', 'JP', 'CN', 'SEA', 'EU', 'GLOBAL', 'KR'];
  const currencies: Currency[] = ['USD', 'KRW'];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-app animate-fade-in-up rounded-t-3xl bg-paper p-5 pb-8 shadow-float">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-200" />
        <h2 className="mb-4 text-lg font-bold">{t('nav.search') === 'Search' ? 'Settings' : t('settings.language')}</h2>

        {/* Language */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
          {t('settings.language')}
        </p>
        <div className="mb-5 grid grid-cols-4 gap-2">
          {SUPPORTED_LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={`rounded-xl border px-2 py-2.5 text-sm font-medium transition ${
                locale === l
                  ? 'border-coral bg-coral-50 text-coral-700'
                  : 'border-stone-200 bg-paper text-stone-600'
              }`}
            >
              {LOCALE_LABELS[l]}
            </button>
          ))}
        </div>

        {/* Currency */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
          {t('settings.currency')}
        </p>
        <div className="mb-5 grid grid-cols-2 gap-2">
          {currencies.map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-xl border px-2 py-2.5 text-sm font-medium transition ${
                currency === c
                  ? 'border-coral bg-coral-50 text-coral-700'
                  : 'border-stone-200 bg-paper text-stone-600'
              }`}
            >
              {c === 'KRW' ? '₩ KRW' : '$ USD'}
            </button>
          ))}
        </div>

        {/* Shipping country */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
          {t('settings.country')}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {zones.map((z) => (
            <button
              key={z}
              onClick={() => setShipZone(z)}
              className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                shipZone === z
                  ? 'border-coral bg-coral-50 text-coral-700'
                  : 'border-stone-200 bg-paper text-stone-600'
              }`}
            >
              {t(`zone.${z}`)}
            </button>
          ))}
        </div>

        <button onClick={onClose} className="btn-primary mt-6 w-full">
          {t('filter.apply')}
        </button>
      </div>
    </div>
  );
}

/** Convenience hook to drive the drawer from any component. */
export function useSettingsDrawer() {
  const [open, setOpen] = useState(false);
  return { open, openDrawer: () => setOpen(true), closeDrawer: () => setOpen(false) };
}

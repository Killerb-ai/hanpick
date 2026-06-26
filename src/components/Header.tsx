import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { useCart } from '@/store/cart';
import { LOCALE_LABELS } from '@/i18n';

export function Header({ onOpenSettings }: { onOpenSettings: () => void }) {
  const { t } = useTranslation();
  const { locale } = useSettings();
  const count = useCart((s) => s.count());

  return (
    <header className="sticky top-0 z-30 border-b border-stone-100 bg-cream/95 backdrop-blur-md">
      <div className="container-px flex h-14 items-center justify-between">
        <a href="#/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-xs font-black text-white">
            HP
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Han<span className="text-coral">:</span>Pick
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSettings}
            className="rounded-lg border border-stone-200 bg-paper px-3 py-1.5 text-xs font-bold text-stone-600"
            aria-label={t('settings.language')}
          >
            {LOCALE_LABELS[locale]}
          </button>

          <a
            href="#/cart"
            className="relative flex h-9 min-w-9 items-center justify-center rounded-lg border border-stone-200 bg-paper px-2 text-xs font-bold"
            aria-label={t('nav.cart')}
          >
            {t('nav.cart')}
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}

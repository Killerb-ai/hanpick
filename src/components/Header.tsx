import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { useCart } from '@/store/cart';
import { LOCALE_LABELS } from '@/i18n';

/** Sticky top app header with brand, language shortcut, and cart count. */
export function Header({
  onOpenSettings
}: {
  onOpenSettings: () => void;
}) {
  const { t } = useTranslation();
  const { locale } = useSettings();
  const count = useCart((s) => s.count());

  return (
    <header className="sticky top-0 z-30 border-b border-stone-100 bg-cream/90 backdrop-blur-md">
      <div className="container-px flex h-14 items-center justify-between">
        <a href="#/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-coral text-white">
            <span className="text-sm font-black">한</span>
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Han<span className="text-coral">:</span>Pick
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSettings}
            className="flex items-center gap-1 rounded-full border border-stone-200 bg-paper px-3 py-1.5 text-xs font-semibold text-stone-600"
            aria-label={t('settings.language')}
          >
            <span aria-hidden>🌐</span>
            {LOCALE_LABELS[locale]}
          </button>

          <a
            href="#/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-paper"
            aria-label={t('nav.cart')}
          >
            <span className="text-base" aria-hidden>
              🛒
            </span>
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

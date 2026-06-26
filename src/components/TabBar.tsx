import { useTranslation } from 'react-i18next';
import { useCart } from '@/store/cart';

/** Fixed bottom navigation — Home / Categories / Cart. */
export function TabBar({ onOpenSettings }: { onOpenSettings: () => void }) {
  const { t } = useTranslation();
  const count = useCart((s) => s.count());

  const items = [
    { label: t('nav.home'), icon: '🏠', href: '#/', active: location.hash === '#/' },
    {
      label: t('nav.categories'),
      icon: '🧺',
      href: '#/products',
      active: location.hash.startsWith('#/products')
    },
    { label: t('nav.cart'), icon: '🛒', href: '#/cart', active: location.hash === '#/cart', badge: count }
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 mx-auto flex max-w-app items-stretch border-t border-stone-200 bg-paper/95 backdrop-blur-md"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition ${
            it.active ? 'text-coral' : 'text-stone-500'
          }`}
        >
          <span className="text-xl leading-none" aria-hidden>
            {it.icon}
          </span>
          <span>{it.label}</span>
          {typeof it.badge === 'number' && it.badge > 0 && (
            <span className="absolute right-[28%] top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold text-white">
              {it.badge}
            </span>
          )}
        </a>
      ))}
      <button
        onClick={onOpenSettings}
        className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium text-stone-500 transition"
        aria-label="Settings"
      >
        <span className="text-xl leading-none" aria-hidden>
          ⚙️
        </span>
        <span>⋯</span>
      </button>
    </nav>
  );
}

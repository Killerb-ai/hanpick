import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useCart } from '@/store/cart';

export function TabBar({ onOpenSettings }: { onOpenSettings: () => void }) {
  const { t } = useTranslation();
  const location = useLocation();
  const count = useCart((s) => s.count());

  const items = [
    { label: t('nav.home'), href: '#/', active: location.pathname === '/' },
    {
      label: t('nav.categories'),
      href: '#/products',
      active: location.pathname.startsWith('/products') || location.pathname.startsWith('/product')
    },
    { label: t('nav.cart'), href: '#/cart', active: location.pathname === '/cart', badge: count }
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
          className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold transition ${
            it.active ? 'text-coral' : 'text-stone-500'
          }`}
        >
          <span>{it.label}</span>
          {typeof it.badge === 'number' && it.badge > 0 && (
            <span className="absolute right-[24%] top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold text-white">
              {it.badge}
            </span>
          )}
        </a>
      ))}
      <button
        onClick={onOpenSettings}
        className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold text-stone-500 transition"
        aria-label="Settings"
      >
        <span>{t('settings.language')}</span>
      </button>
    </nav>
  );
}

import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { getByRank, getByCategory } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { formatPrice } from '@/lib/pricing';
import type { ProductCategory } from '@/types';

const CATEGORY_META: { key: ProductCategory; icon: string; tint: string }[] = [
  { key: 'beauty', icon: '💄', tint: 'bg-rose-50' },
  { key: 'food', icon: '🍜', tint: 'bg-amber-50' },
  { key: 'lifestyle', icon: '🫙', tint: 'bg-emerald-50' },
  { key: 'stationery', icon: '✒️', tint: 'bg-sky-50' },
  { key: 'tech', icon: '🔌', tint: 'bg-violet-50' }
];

export function HomePage() {
  const { t } = useTranslation();
  const { locale, currency } = useSettings();
  const ranked = getByRank();
  const top10 = ranked.slice(0, 10);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-4">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-8 text-white">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 right-10 h-32 w-32 rounded-full bg-coral/20 blur-2xl"
            aria-hidden
          />
          <p className="text-xs font-semibold uppercase tracking-widest text-coral-400">
            {t('brand.tagline')}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight">
            {t('brand.heroTitle')}
          </h1>
          <p className="mt-2 max-w-[28ch] text-sm text-white/70">
            {t('brand.heroSubtitle')}
          </p>
          <a href="#/products" className="btn-primary mt-5">
            {t('brand.heroCta')} →
          </a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="container-px mt-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { icon: '🇰🇷', label: 'Made in\nKorea' },
            { icon: '✈️', label: 'Worldwide\nshipping' },
            { icon: '⭐', label: 'Real\nreviews' }
          ].map((b) => (
            <div
              key={b.label}
              className="card flex flex-col items-center gap-1 py-3 text-[11px] font-medium text-stone-600"
            >
              <span className="text-xl" aria-hidden>
                {b.icon}
              </span>
              <span className="whitespace-pre-line leading-tight">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-px mt-7">
        <h2 className="mb-3 text-base font-bold">{t('section.browseCategories')}</h2>
        <div className="grid grid-cols-5 gap-2">
          {CATEGORY_META.map((c) => {
            const count = getByCategory(c.key).length;
            return (
              <a
                key={c.key}
                href={`#/products?category=${c.key}`}
                className="flex flex-col items-center gap-1.5"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.tint} text-2xl`}
                  aria-hidden
                >
                  {c.icon}
                </span>
                <span className="text-center text-[11px] font-medium leading-tight text-stone-600">
                  {t(`category.${c.key}`)}
                </span>
                <span className="text-[10px] text-stone-400">{count}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Top ranking rail */}
      <section className="mt-8">
        <div className="container-px mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-base font-bold">{t('section.topRanking')}</h2>
            <p className="text-xs text-stone-500">{t('section.topRankingSub')}</p>
          </div>
          <a href="#/products" className="text-xs font-semibold text-coral">
            {t('common.seeAll')} →
          </a>
        </div>

        {/* Top 3 podium */}
        <div className="container-px mb-4 grid grid-cols-3 gap-2">
          {ranked.slice(0, 3).map((p, i) => (
            <a
              key={p.id}
              href={`#/product/${p.id}`}
              className={`card relative flex flex-col ${
                i === 0 ? 'ring-2 ring-coral' : ''
              }`}
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={p.images[0]}
                  alt={p.name[locale]}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-coral text-xs font-black text-white shadow">
                  {p.rank}
                </span>
              </div>
              <div className="p-2">
                <p className="line-clamp-1 text-[11px] font-semibold">{p.name[locale]}</p>
                <p className="text-xs font-bold text-coral">
                  {formatPrice(p.priceKRW, currency, locale)}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* 4–10 horizontal rail */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
          {top10.slice(3).map((p) => (
            <div key={p.id} className="w-40 shrink-0">
              <ProductCard product={p} showRank />
            </div>
          ))}
        </div>
      </section>

      {/* Fast shipping banner */}
      <section className="container-px mt-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-coral-50 to-amber-50 p-5">
          <div className="flex items-center gap-2 text-2xl" aria-hidden>
            ✈️
          </div>
          <h2 className="mt-1 text-base font-bold">{t('section.fastShip')}</h2>
          <p className="mt-1 text-sm text-stone-600">{t('section.fastShipSub')}</p>
          <a href="#/products" className="btn-ghost mt-3 text-coral border-coral-100">
            {t('nav.categories')} →
          </a>
        </div>
      </section>

      {/* All products grid */}
      <section className="container-px mt-8">
        <h2 className="mb-3 text-base font-bold">{t('section.allProducts')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {ranked.map((p) => (
            <ProductCard key={p.id} product={p} showRank />
          ))}
        </div>
      </section>

      <footer className="container-px mt-10 pb-4 text-center text-[11px] text-stone-400">
        Han:Pick · Pilot demo · {t('cart.orderPlacedSub').split('.')[0]}
      </footer>
    </div>
  );
}

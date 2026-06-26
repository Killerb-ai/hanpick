import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { getByCategory, getByRank } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { formatPrice } from '@/lib/pricing';
import type { ProductCategory } from '@/types';

const CATEGORY_META: { key: ProductCategory; code: string; tone: string }[] = [
  { key: 'beauty', code: 'BE', tone: 'bg-rose-50 text-rose-700' },
  { key: 'food', code: 'FD', tone: 'bg-amber-50 text-amber-700' },
  { key: 'lifestyle', code: 'LF', tone: 'bg-emerald-50 text-emerald-700' },
  { key: 'stationery', code: 'ST', tone: 'bg-sky-50 text-sky-700' },
  { key: 'tech', code: 'TC', tone: 'bg-violet-50 text-violet-700' }
];

export function HomePage() {
  const { t } = useTranslation();
  const { locale, currency } = useSettings();
  const ranked = getByRank();
  const heroProducts = ranked.slice(0, 3);
  const top10 = ranked.slice(0, 10);

  return (
    <div>
      <section className="px-4 pt-4">
        <div className="overflow-hidden rounded-lg bg-[#12231f] text-white shadow-float">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 p-4">
            <div className="flex flex-col justify-between py-1">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-coral-400">
                  {t('brand.tagline')}
                </p>
                <h1 className="mt-2 text-2xl font-black leading-tight">
                  {t('brand.heroTitle')}
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t('brand.heroSubtitle')}
                </p>
              </div>
              <a href="#/products" className="btn-primary mt-5 self-start">
                {t('brand.heroCta')}
              </a>
            </div>
            <div className="grid gap-2">
              {heroProducts.map((p, index) => (
                <a
                  key={p.id}
                  href={`#/product/${p.id}`}
                  className={`flex items-center gap-2 rounded-md bg-white/95 p-2 text-ink ${
                    index === 0 ? 'min-h-28' : 'min-h-20'
                  }`}
                >
                  <div className="product-photo h-16 w-16 shrink-0 overflow-hidden rounded-md">
                    <img src={p.images[0]} alt={p.name[locale]} className="h-full w-full p-1.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-coral">#{p.rank}</p>
                    <p className="line-clamp-2 text-xs font-bold leading-tight">{p.name[locale]}</p>
                    <p className="mt-0.5 text-[11px] font-bold text-stone-500">
                      {formatPrice(p.priceKRW, currency, locale)}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mt-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { value: '20', label: 'curated SKUs' },
            { value: '7', label: 'shipping zones' },
            { value: '4.7', label: 'avg rating' }
          ].map((b) => (
            <div
              key={b.label}
              className="rounded-lg border border-stone-200 bg-paper px-2 py-3 shadow-card"
            >
              <p className="text-lg font-black text-ink">{b.value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-400">
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mt-7">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-base font-bold">{t('section.browseCategories')}</h2>
          <a href="#/products" className="text-xs font-bold text-coral">
            {t('common.seeAll')}
          </a>
        </div>
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
                  className={`flex h-12 w-full items-center justify-center rounded-lg text-sm font-black ${c.tone}`}
                >
                  {c.code}
                </span>
                <span className="line-clamp-2 min-h-[1.75rem] text-center text-[11px] font-semibold leading-tight text-stone-600">
                  {t(`category.${c.key}`)}
                </span>
                <span className="text-[10px] text-stone-400">{count}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <div className="container-px mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-base font-bold">{t('section.topRanking')}</h2>
            <p className="text-xs text-stone-500">{t('section.topRankingSub')}</p>
          </div>
          <a href="#/products" className="text-xs font-bold text-coral">
            {t('common.seeAll')}
          </a>
        </div>

        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
          {top10.map((p) => (
            <div key={p.id} className="w-40 shrink-0">
              <ProductCard product={p} showRank compact />
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mt-8">
        <div className="rounded-lg border border-stone-200 bg-paper p-4 shadow-card">
          <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
            Shipping edit
          </p>
          <h2 className="mt-1 text-base font-bold">{t('section.fastShip')}</h2>
          <p className="mt-1 text-sm leading-relaxed text-stone-600">{t('section.fastShipSub')}</p>
          <a href="#/products" className="btn-ghost mt-3">
            {t('nav.categories')}
          </a>
        </div>
      </section>

      <section className="container-px mt-8">
        <h2 className="mb-3 text-base font-bold">{t('section.allProducts')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {ranked.map((p) => (
            <ProductCard key={p.id} product={p} showRank />
          ))}
        </div>
      </section>

      <footer className="container-px mt-10 pb-4 text-center text-[11px] text-stone-400">
        Han:Pick Pilot marketplace
      </footer>
    </div>
  );
}

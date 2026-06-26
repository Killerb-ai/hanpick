import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useSettings } from '@/store/settings';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { formatPrice } from '@/lib/pricing';
import type { ProductCategory } from '@/types';

type SortKey = 'rank' | 'priceLow' | 'priceHigh' | 'rating';

const CATEGORIES: (ProductCategory | 'all')[] = [
  'all',
  'beauty',
  'food',
  'lifestyle',
  'stationery',
  'tech'
];
const SORTS: SortKey[] = ['rank', 'priceLow', 'priceHigh', 'rating'];

export function ProductsPage() {
  const { t } = useTranslation();
  const { currency, locale } = useSettings();
  const [params, setParams] = useSearchParams();
  const category = (params.get('category') as ProductCategory | 'all') ?? 'all';
  const [sort, setSort] = useState<SortKey>('rank');
  const [maxPrice, setMaxPrice] = useState<number>(120000);

  const setCategory = (c: ProductCategory | 'all') => {
    const next = new URLSearchParams(params);
    if (c === 'all') next.delete('category');
    else next.set('category', c);
    setParams(next, { replace: true });
  };

  const categoryCount = (c: ProductCategory | 'all') =>
    c === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c).length;

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => (category === 'all' ? true : p.category === category));
    list = list.filter((p) => p.priceKRW <= maxPrice);
    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'priceLow':
          return a.priceKRW - b.priceKRW;
        case 'priceHigh':
          return b.priceKRW - a.priceKRW;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.rank - b.rank;
      }
    });
    return list;
  }, [category, sort, maxPrice]);

  return (
    <div className="container-px pt-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold">{t('section.allProducts')}</h1>
          <p className="mt-1 text-xs text-stone-500">
            {t('filter.results', { n: filtered.length })} · {currency}
          </p>
        </div>
        <span className="rounded-md bg-ink px-2 py-1 text-[11px] font-bold text-white">
          Top 20
        </span>
      </div>

      <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-bold transition ${
              category === c
                ? 'border-coral bg-coral text-white'
                : 'border-stone-200 bg-paper text-stone-600'
            }`}
          >
            {t(`category.${c}`)}
            <span className="ml-1 opacity-70">{categoryCount(c)}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-stone-200 bg-paper p-3 shadow-card">
        <p className="text-[11px] font-bold uppercase tracking-wide text-stone-400">
          {t('filter.sort')}
        </p>
        <div className="no-scrollbar mt-2 flex gap-2 overflow-x-auto">
          {SORTS.map((s) => (
            <button
              key={s}
              onClick={() => setSort(s)}
              className={`shrink-0 rounded-md px-3 py-1.5 text-[11px] font-bold transition ${
                sort === s ? 'bg-ink text-white' : 'bg-stone-100 text-stone-500'
              }`}
            >
              {t(`filter.sortBy${cap(s)}`)}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="shrink-0 text-[11px] font-bold text-stone-500">
            {t('filter.priceRange')}
          </span>
          <input
            type="range"
            min={10000}
            max={120000}
            step={5000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-stone-300 accent-coral"
            aria-label={t('filter.priceRange')}
          />
          <span className="shrink-0 text-xs font-black text-coral">
            {formatPrice(maxPrice, currency, locale)}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} showRank />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-stone-400">
          No products match the current filters.
        </div>
      )}
    </div>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

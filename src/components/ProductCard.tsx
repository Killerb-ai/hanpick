import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { formatPrice } from '@/lib/pricing';
import type { Product } from '@/types';
import { discountPercent } from '@/lib/pricing';
import { MadeInKoreaBadge, Badge } from './Badge';
import { Rating } from './Rating';

/** Product card used in grids and rails. Links to the detail page. */
export function ProductCard({ product, showRank = false }: { product: Product; showRank?: boolean }) {
  const { t } = useTranslation();
  const { locale, currency } = useSettings();
  const discount = discountPercent(product.priceKRW, product.originalPriceKRW);

  return (
    <a
      href={`#/product/${product.id}`}
      className="card group flex flex-col animate-fade-in-up"
      aria-label={product.name[locale]}
    >
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.images[0]}
          alt={product.name[locale]}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {showRank && (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-bold text-white shadow">
              {product.rank}
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-coral px-2 py-0.5 text-[10px] font-bold text-white shadow">
              -{discount}%
            </span>
          )}
        </div>
        <div className="absolute bottom-2 right-2">
          <MadeInKoreaBadge small />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-stone-400">
          {product.brand}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink">
          {product.name[locale]}
        </h3>
        <p className="line-clamp-1 text-xs text-stone-500">{product.shortDesc[locale]}</p>

        <div className="mt-1">
          <Rating value={product.rating} count={product.reviewCount} />
        </div>

        <div className="mt-auto flex items-end gap-2 pt-2">
          <span className="text-base font-bold text-ink">
            {formatPrice(product.priceKRW, currency, locale)}
          </span>
          {product.originalPriceKRW && (
            <span className="text-xs text-stone-400 line-through">
              {formatPrice(product.originalPriceKRW, currency, locale)}
            </span>
          )}
        </div>

        {product.tags.includes('exportFriendly') && (
          <div className="pt-1">
            <Badge variant="green">✈ {t('tag.exportFriendly')}</Badge>
          </div>
        )}
      </div>
    </a>
  );
}

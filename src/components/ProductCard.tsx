import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { discountPercent, formatPrice } from '@/lib/pricing';
import type { Product } from '@/types';
import { Badge, MadeInKoreaBadge } from './Badge';
import { Rating } from './Rating';

export function ProductCard({
  product,
  showRank = false,
  compact = false
}: {
  product: Product;
  showRank?: boolean;
  compact?: boolean;
}) {
  const { t } = useTranslation();
  const { locale, currency } = useSettings();
  const discount = discountPercent(product.priceKRW, product.originalPriceKRW);

  return (
    <a
      href={`#/product/${product.id}`}
      className="card group flex h-full flex-col border border-stone-100 animate-fade-in-up"
      aria-label={product.name[locale]}
    >
      <div className="product-photo relative aspect-[4/5] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name[locale]}
          loading="lazy"
          className="h-full w-full p-3 transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {showRank && (
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-ink px-1 text-xs font-bold text-white shadow">
              #{product.rank}
            </span>
          )}
          {discount && (
            <span className="rounded-md bg-coral px-2 py-1 text-[10px] font-bold text-white shadow">
              -{discount}%
            </span>
          )}
        </div>
        <div className="absolute bottom-2 right-2">
          <MadeInKoreaBadge small />
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? 'gap-1 p-2.5' : 'gap-1.5 p-3'}`}>
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[11px] font-bold uppercase tracking-wide text-stone-400">
            {product.brand}
          </p>
          <span className="text-[10px] font-semibold text-emerald-700">
            {t('product.inStock')}
          </span>
        </div>
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold leading-snug text-ink">
          {product.name[locale]}
        </h3>
        {!compact && (
          <p className="line-clamp-2 min-h-[2rem] text-xs leading-snug text-stone-500">
            {product.shortDesc[locale]}
          </p>
        )}

        <Rating value={product.rating} count={product.reviewCount} />

        <div className="mt-auto flex flex-wrap items-end gap-x-2 gap-y-1 pt-2">
          <span className="text-base font-black text-ink">
            {formatPrice(product.priceKRW, currency, locale)}
          </span>
          {product.originalPriceKRW && (
            <span className="text-xs text-stone-400 line-through">
              {formatPrice(product.originalPriceKRW, currency, locale)}
            </span>
          )}
        </div>

        {product.tags.includes('exportFriendly') && !compact && (
          <div className="pt-1">
            <Badge variant="green">{t('tag.exportFriendly')}</Badge>
          </div>
        )}
      </div>
    </a>
  );
}

import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { useCart } from '@/store/cart';
import { getProductById, getRelated } from '@/data/products';
import { formatPrice, discountPercent, localeBCP47 } from '@/lib/pricing';
import { ShippingCalculator } from '@/components/ShippingCalculator';
import { MadeInKoreaBadge, Badge } from '@/components/Badge';
import { Rating } from '@/components/Rating';
import { ProductCard } from '@/components/ProductCard';

export function ProductDetailPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { locale, currency } = useSettings();
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  const [added, setAdded] = useState(false);

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container-px flex flex-col items-center gap-3 py-24 text-center">
        <p className="text-stone-500">404</p>
        <Link to="/" className="btn-primary">
          {t('common.back')}
        </Link>
      </div>
    );
  }

  const discount = discountPercent(product.priceKRW, product.originalPriceKRW);
  const related = getRelated(product, 4);

  const handleAdd = () => {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleBuyNow = () => {
    add(product.id, qty);
    navigate('/cart');
  };

  return (
    <div className="pb-4">
      {/* Image gallery */}
      <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
        <img
          src={product.images[imgIdx]}
          alt={product.name[locale]}
          className="h-full w-full object-cover"
        />
        <a
          href="#/products"
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-lg shadow"
          aria-label={t('common.back')}
        >
          ‹
        </a>
        <div className="absolute right-3 top-3">
          <span className="inline-flex h-7 items-center justify-center rounded-full bg-coral px-2.5 text-xs font-black text-white shadow">
            #{product.rank}
          </span>
        </div>
      </div>
      {product.images.length > 1 && (
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-2">
          {product.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setImgIdx(i)}
              className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 ${
                i === imgIdx ? 'border-coral' : 'border-transparent'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Core info */}
      <div className="container-px mt-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
          {product.brand}
        </p>
        <h1 className="mt-1 text-xl font-extrabold leading-snug">{product.name[locale]}</h1>
        <p className="mt-1 text-sm text-stone-500">{product.shortDesc[locale]}</p>

        <div className="mt-2 flex items-center gap-3">
          <Rating value={product.rating} count={product.reviewCount} size="md" />
          {discount && (
            <Badge variant="coral">
              {t('product.off', { n: discount })}
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-2xl font-black text-coral">
            {formatPrice(product.priceKRW, currency, locale)}
          </span>
          {product.originalPriceKRW && (
            <span className="text-sm text-stone-400 line-through">
              {formatPrice(product.originalPriceKRW, currency, locale)}
            </span>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          <MadeInKoreaBadge />
          <Badge variant="green">✈ {t('tag.exportFriendly')}</Badge>
          <Badge variant="gold">🔥 {t('product.trendUp', { n: product.weeklyTrend })}</Badge>
        </div>

        {/* Spec table */}
        <div className="mt-4 divide-y divide-stone-100 rounded-2xl border border-stone-200">
          <SpecRow label={t('product.origin')} value={product.origin[locale]} />
          <SpecRow label={t('product.weight')} value={fmtWeight(product.weightGrams)} />
          <SpecRow label={t('product.brand')} value={product.brand} />
          <SpecRow
            label={t('product.shipsTo')}
            value={t(`zone.${product.shippingZones.includes('GLOBAL') ? 'GLOBAL' : 'KR'}`)}
          />
        </div>

        {/* Shipping calculator */}
        <div className="mt-4">
          <ShippingCalculator totalGrams={product.weightGrams * qty} />
        </div>

        {/* Description */}
        <div className="mt-5">
          <h2 className="mb-1 text-sm font-bold">{t('section.allProducts').split(' ')[0]}</h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-stone-600">
            {product.description[locale]}
          </p>
        </div>

        {/* Reviews */}
        {product.reviews.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-2 text-sm font-bold">
              {t('section.reviews')} ({product.reviewCount.toLocaleString()})
            </h2>
            <div className="flex flex-col gap-2">
              {product.reviews.map((r) => (
                <div key={r.id} className="rounded-2xl bg-stone-100/60 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-[10px] font-bold">
                        {r.country}
                      </span>
                      <span className="text-xs font-semibold">{r.author}</span>
                    </div>
                    <span className="text-xs text-coral">{'★'.repeat(r.rating)}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{r.text[locale]}</p>
                  <p className="mt-1 text-[10px] text-stone-400">
                    {new Date(r.date).toLocaleDateString(localeBCP47(locale))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="container-px mb-3 text-sm font-bold">{t('section.youMayAlsoLike')}</h2>
          <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
            {related.map((p) => (
              <div key={p.id} className="w-40 shrink-0">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sticky add-to-cart bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-app border-t border-stone-200 bg-paper p-3"
        style={{ paddingBottom: 'calc(64px + 12px + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-stone-200">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-9 w-9 text-lg text-stone-500"
              aria-label="-"
            >
              −
            </button>
            <span className="w-7 text-center text-sm font-bold">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="h-9 w-9 text-lg text-stone-500"
              aria-label="+"
            >
              +
            </button>
          </div>
          <button onClick={handleAdd} className="btn-ghost flex-1">
            {added ? `✓ ${t('product.addedToCart')}` : t('product.addToCart')}
          </button>
          <button onClick={handleBuyNow} className="btn-primary flex-1">
            {t('product.buyNow')}
          </button>
        </div>
      </div>
      {/* spacer so content isn't hidden behind the sticky bar */}
      <div style={{ height: 'calc(120px + env(safe-area-inset-bottom))' }} />
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2.5">
      <span className="text-xs font-medium text-stone-400">{label}</span>
      <span className="text-right text-xs font-semibold text-ink">{value}</span>
    </div>
  );
}

function fmtWeight(g: number): string {
  return g >= 1000 ? `${(g / 1000).toFixed(2)} kg` : `${g} g`;
}

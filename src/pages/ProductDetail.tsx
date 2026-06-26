import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { useCart } from '@/store/cart';
import { getProductById, getRelated } from '@/data/products';
import { discountPercent, formatPrice, localeBCP47 } from '@/lib/pricing';
import { ShippingCalculator } from '@/components/ShippingCalculator';
import { Badge, MadeInKoreaBadge } from '@/components/Badge';
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
    window.setTimeout(() => setAdded(false), 1600);
  };

  const handleBuyNow = () => {
    add(product.id, qty);
    navigate('/cart');
  };

  return (
    <div className="pb-4">
      <div className="relative product-photo aspect-[4/5] w-full overflow-hidden bg-paper">
        <img
          src={product.images[imgIdx]}
          alt={product.name[locale]}
          className="h-full w-full p-5"
        />
        <a
          href="#/products"
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-paper/95 text-sm font-black shadow"
          aria-label={t('common.back')}
        >
          ‹
        </a>
        <div className="absolute right-3 top-3 flex items-center gap-2">
          {discount && (
            <span className="rounded-md bg-coral px-2.5 py-1 text-xs font-black text-white shadow">
              -{discount}%
            </span>
          )}
          <span className="rounded-md bg-ink px-2.5 py-1 text-xs font-black text-white shadow">
            #{product.rank}
          </span>
        </div>
      </div>

      {product.images.length > 1 && (
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3">
          {product.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setImgIdx(i)}
              className={`product-photo h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 ${
                i === imgIdx ? 'border-coral' : 'border-transparent'
              }`}
              aria-label={`${product.name[locale]} image ${i + 1}`}
            >
              <img src={src} alt="" className="h-full w-full p-1.5" />
            </button>
          ))}
        </div>
      )}

      <div className="container-px mt-2">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-wide text-stone-400">
            {product.brand}
          </p>
          <span className="text-xs font-bold text-emerald-700">{t('product.inStock')}</span>
        </div>
        <h1 className="mt-1 text-2xl font-black leading-snug">{product.name[locale]}</h1>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{product.shortDesc[locale]}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Rating value={product.rating} count={product.reviewCount} size="md" />
          <MadeInKoreaBadge />
          <Badge variant="gold">{t('product.trendUp', { n: product.weeklyTrend })}</Badge>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-3xl font-black text-coral">
            {formatPrice(product.priceKRW, currency, locale)}
          </span>
          {product.originalPriceKRW && (
            <span className="pb-1 text-sm text-stone-400 line-through">
              {formatPrice(product.originalPriceKRW, currency, locale)}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <SpecCard label={t('product.origin')} value={product.origin[locale]} />
          <SpecCard label={t('product.weight')} value={fmtWeight(product.weightGrams)} />
          <SpecCard label={t('product.brand')} value={product.brand} />
          <SpecCard
            label={t('product.shipsTo')}
            value={t(`zone.${product.shippingZones.includes('GLOBAL') ? 'GLOBAL' : 'KR'}`)}
          />
        </div>

        <div className="mt-4">
          <ShippingCalculator totalGrams={product.weightGrams * qty} />
        </div>

        <section className="mt-6 rounded-lg border border-stone-200 bg-paper p-4 shadow-card">
          <h2 className="text-sm font-bold">{locale === 'ko' ? '상품 설명' : 'Product notes'}</h2>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-600">
            {product.description[locale]}
          </p>
        </section>

        {product.reviews.length > 0 && (
          <section className="mt-6">
            <h2 className="mb-2 text-sm font-bold">
              {t('section.reviews')} ({product.reviewCount.toLocaleString()})
            </h2>
            <div className="flex flex-col gap-2">
              {product.reviews.map((r) => (
                <div key={r.id} className="rounded-lg border border-stone-200 bg-paper p-3 shadow-card">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-100 text-[10px] font-bold">
                        {r.country}
                      </span>
                      <span className="text-xs font-semibold">{r.author}</span>
                    </div>
                    <span className="text-xs text-coral">{'★'.repeat(r.rating)}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">{r.text[locale]}</p>
                  <p className="mt-1 text-[10px] text-stone-400">
                    {new Date(r.date).toLocaleDateString(localeBCP47(locale))}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="container-px mb-3 text-sm font-bold">{t('section.youMayAlsoLike')}</h2>
          <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
            {related.map((p) => (
              <div key={p.id} className="w-40 shrink-0">
                <ProductCard product={p} compact />
              </div>
            ))}
          </div>
        </section>
      )}

      <div
        className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-app border-t border-stone-200 bg-paper p-3 shadow-float"
        style={{ paddingBottom: 'calc(64px + 12px + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-stone-200">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-10 w-10 text-lg text-stone-500"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center text-sm font-bold">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="h-10 w-10 text-lg text-stone-500"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button onClick={handleAdd} className="btn-ghost flex-1 px-3">
            {added ? t('product.addedToCart') : t('product.addToCart')}
          </button>
          <button onClick={handleBuyNow} className="btn-primary flex-1 px-3">
            {t('product.buyNow')}
          </button>
        </div>
      </div>
      <div style={{ height: 'calc(120px + env(safe-area-inset-bottom))' }} />
    </div>
  );
}

function SpecCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-paper p-3 shadow-card">
      <p className="text-[10px] font-bold uppercase tracking-wide text-stone-400">{label}</p>
      <p className="mt-1 text-xs font-bold leading-snug text-ink">{value}</p>
    </div>
  );
}

function fmtWeight(g: number): string {
  return g >= 1000 ? `${(g / 1000).toFixed(2)} kg` : `${g} g`;
}

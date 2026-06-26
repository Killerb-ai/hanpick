import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { useCart } from '@/store/cart';
import { getProductById } from '@/data/products';
import { formatPrice, calcShipping } from '@/lib/pricing';
import { ShippingCalculator } from '@/components/ShippingCalculator';
import { MadeInKoreaBadge } from '@/components/Badge';

export function CartPage() {
  const { t } = useTranslation();
  const { locale, currency } = useSettings();
  const { lines, setQuantity, remove, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  const items = lines
    .map((l) => ({ line: l, product: getProductById(l.productId) }))
    .filter((x) => x.product);

  const subtotalKRW = items.reduce(
    (sum, { line, product }) => sum + (product!.priceKRW * line.quantity),
    0
  );
  const totalWeight = items.reduce(
    (sum, { line, product }) => sum + product!.weightGrams * line.quantity,
    0
  );
  const { shipZone } = useSettings();
  const shippingKRW = items.length === 0 ? 0 : calcShipping(totalWeight, shipZone).feeKRW;
  const totalKRW = subtotalKRW + shippingKRW;

  if (placed) {
    return (
      <div className="container-px flex flex-col items-center gap-3 py-24 text-center">
        <div className="text-5xl" aria-hidden>
          ✅
        </div>
        <h1 className="text-xl font-extrabold">{t('cart.orderPlaced')}</h1>
        <p className="max-w-[30ch] text-sm text-stone-500">{t('cart.orderPlacedSub')}</p>
        <Link to="/" className="btn-primary mt-3" onClick={() => { clear(); setPlaced(false); }}>
          {t('cart.continueShopping')}
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-px flex flex-col items-center gap-3 py-24 text-center">
        <div className="text-5xl" aria-hidden>
          🛒
        </div>
        <h1 className="text-lg font-extrabold">{t('cart.empty')}</h1>
        <p className="max-w-[30ch] text-sm text-stone-500">{t('cart.emptySub')}</p>
        <Link to="/products" className="btn-primary mt-3">
          {t('cart.browse')}
        </Link>
      </div>
    );
  }

  const totalUnits = items.reduce((s, x) => s + x.line.quantity, 0);

  return (
    <div className="container-px pt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold">{t('cart.title')}</h1>
        <span className="text-xs text-stone-500">
          {totalUnits} {t(totalUnits === 1 ? 'cart.item' : 'cart.items')}
        </span>
      </div>

      {/* Line items */}
      <div className="mt-4 flex flex-col gap-3">
        {items.map(({ line, product }) => (
          <div key={line.productId} className="card flex gap-3 p-3">
            <Link to={`/product/${product!.id}`} className="shrink-0">
              <img
                src={product!.images[0]}
                alt={product!.name[locale]}
                className="h-20 w-20 rounded-xl object-cover"
              />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase text-stone-400">{product!.brand}</p>
                  <Link
                    to={`/product/${product!.id}`}
                    className="line-clamp-2 text-sm font-semibold leading-snug"
                  >
                    {product!.name[locale]}
                  </Link>
                  <div className="mt-1">
                    <MadeInKoreaBadge small />
                  </div>
                </div>
                <button
                  onClick={() => remove(line.productId)}
                  className="shrink-0 text-xs text-stone-400 underline"
                >
                  {t('cart.remove')}
                </button>
              </div>

              <div className="mt-auto flex items-center justify-between pt-2">
                <div className="flex items-center rounded-full border border-stone-200">
                  <button
                    onClick={() => setQuantity(line.productId, line.quantity - 1)}
                    className="h-7 w-7 text-stone-500"
                    aria-label="-"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-xs font-bold">{line.quantity}</span>
                  <button
                    onClick={() => setQuantity(line.productId, line.quantity + 1)}
                    className="h-7 w-7 text-stone-500"
                    aria-label="+"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm font-bold">
                  {formatPrice(product!.priceKRW * line.quantity, currency, locale)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping calculator */}
      <div className="mt-5">
        <ShippingCalculator totalGrams={totalWeight} />
      </div>

      {/* Summary */}
      <div className="mt-4 rounded-2xl bg-stone-100/70 p-4">
        <Row label={t('cart.subtotal')} value={formatPrice(subtotalKRW, currency, locale)} />
        <Row
          label={t('cart.shippingTo', { zone: t(`zone.${shipZone}`) })}
          value={shippingKRW === 0 ? t('cart.freeShipping') : formatPrice(shippingKRW, currency, locale)}
        />
        <div className="my-2 border-t border-stone-200" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">{t('cart.total')}</span>
          <div className="text-right">
            <p className="text-lg font-black text-coral">
              {formatPrice(totalKRW, currency, locale)}
            </p>
            {currency === 'USD' && (
              <p className="text-[10px] text-stone-400">₩{totalKRW.toLocaleString()}</p>
            )}
          </div>
        </div>
      </div>

      <button onClick={() => setPlaced(true)} className="btn-primary mt-5 w-full py-3.5 text-base">
        {t('cart.placeOrder')}
      </button>
      <p className="mt-2 text-center text-[10px] text-stone-400">{t('cart.orderPlacedSub')}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-xs text-stone-500">{label}</span>
      <span className="text-xs font-semibold">{value}</span>
    </div>
  );
}

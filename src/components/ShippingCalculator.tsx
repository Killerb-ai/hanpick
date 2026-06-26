import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settings';
import { calcShipping, formatPrice } from '@/lib/pricing';

/** Shows estimated shipping cost + delivery time for a given total weight. */
export function ShippingCalculator({ totalGrams }: { totalGrams: number }) {
  const { t } = useTranslation();
  const { shipZone, currency, locale } = useSettings();
  const { feeKRW, rate } = calcShipping(totalGrams, shipZone);

  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-100/60 p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
        <span aria-hidden>📦</span>
        {t('shipping.title')}
      </div>
      <p className="mt-1 text-sm text-stone-600">
        {t('shipping.calcFor', { zone: t(`zone.${shipZone}`) })}
      </p>

      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-ink">
            {feeKRW === 0 ? t('cart.freeShipping') : formatPrice(feeKRW, currency, locale)}
          </p>
          <p className="text-xs text-stone-500">
            {t('shipping.deliveryEstimate', { min: rate.estimatedDays[0], max: rate.estimatedDays[1] })}
          </p>
        </div>
        <p className="text-right text-[11px] text-stone-400">
          {t('shipping.basedOnWeight')}
          <br />
          {totalGrams >= 1000
            ? `${(totalGrams / 1000).toFixed(2)} kg`
            : `${totalGrams} g`}
        </p>
      </div>
    </div>
  );
}

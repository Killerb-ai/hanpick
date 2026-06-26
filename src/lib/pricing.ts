import type { Currency, Locale, ShippingRate, ShippingZone } from '@/types';

export const FX_TO_KRW: Record<Exclude<Currency, 'KRW'>, number> = {
  USD: 1380
};

export function convertFromKRW(amountKRW: number, currency: Currency): number {
  if (currency === 'KRW') return amountKRW;
  return amountKRW / FX_TO_KRW[currency];
}

export function formatPrice(amountKRW: number, currency: Currency, locale: Locale): string {
  if (currency === 'KRW') {
    const formatted = new Intl.NumberFormat(localeBCP47(locale), {
      maximumFractionDigits: 0
    }).format(amountKRW);
    return `₩${formatted}`;
  }
  const usd = convertFromKRW(amountKRW, currency);
  return new Intl.NumberFormat(localeBCP47(locale), {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(usd);
}

export function localeBCP47(locale: Locale): string {
  switch (locale) {
    case 'ko':
      return 'ko-KR';
    case 'ja':
      return 'ja-JP';
    case 'zh':
      return 'zh-CN';
    default:
      return 'en-US';
  }
}

export const SHIPPING_RATES: ShippingRate[] = [
  { zone: 'KR', baseFeeKRW: 3000, perKgKRW: 0, estimatedDays: [1, 3] },
  { zone: 'JP', baseFeeKRW: 9000, perKgKRW: 4500, estimatedDays: [3, 6] },
  { zone: 'CN', baseFeeKRW: 9500, perKgKRW: 5000, estimatedDays: [4, 8] },
  { zone: 'SEA', baseFeeKRW: 11000, perKgKRW: 6000, estimatedDays: [5, 10] },
  { zone: 'US', baseFeeKRW: 13000, perKgKRW: 7000, estimatedDays: [6, 12] },
  { zone: 'EU', baseFeeKRW: 14000, perKgKRW: 7500, estimatedDays: [7, 14] },
  { zone: 'GLOBAL', baseFeeKRW: 16000, perKgKRW: 8500, estimatedDays: [8, 16] }
];

export function getRate(zone: ShippingZone): ShippingRate {
  const r = SHIPPING_RATES.find((s) => s.zone === zone);
  if (!r) throw new Error(`Unknown shipping zone: ${zone}`);
  return r;
}

export function calcShipping(
  totalGrams: number,
  zone: ShippingZone
): {
  feeKRW: number;
  rate: ShippingRate;
} {
  const rate = getRate(zone);
  const kg = Math.max(totalGrams / 1000, 0);
  const fee = Math.round(rate.baseFeeKRW + kg * rate.perKgKRW);
  return { feeKRW: fee, rate };
}

export function calcShippingForProduct(
  weightGrams: number,
  zone: ShippingZone
): { feeKRW: number; rate: ShippingRate } {
  return calcShipping(weightGrams, zone);
}

export function discountPercent(price: number, original?: number): number | null {
  if (!original || original <= price) return null;
  return Math.round((1 - price / original) * 100);
}

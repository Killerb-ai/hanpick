// Domain types for Han:Pick. The data layer (products.ts) implements these so a
// real-data adapter can later replace the curated dummy dataset without touching UI.

export type Locale = 'en' | 'zh' | 'ja' | 'ko';
export type Currency = 'KRW' | 'USD';

export type LocalizedString = Record<Locale, string>;

export type ProductCategory =
  | 'beauty'
  | 'food'
  | 'lifestyle'
  | 'stationery'
  | 'tech';

export interface Review {
  id: string;
  author: string;
  country: string; // ISO-2 country code of the reviewer (e.g. 'US', 'JP')
  rating: number; // 1..5
  text: LocalizedString;
  date: string; // ISO date
}

export interface Product {
  id: string;
  rank: number; // popularity rank within the curated Top 20
  category: ProductCategory;
  name: LocalizedString;
  shortDesc: LocalizedString;
  description: LocalizedString;
  priceKRW: number;
  originalPriceKRW?: number; // for showing discount
  brand: string;
  origin: LocalizedString; // "Made in Korea — Gyeonggi-do, Paju"
  weightGrams: number; // for international shipping cost & size rationale
  rating: number; // 0..5
  reviewCount: number;
  reviews: Review[];
  images: string[]; // placeholder image URLs (keyword-based)
  tags: string[]; // e.g. 'vegan', 'halal', 'export-friendly'
  // International shipping zones this product ships to
  shippingZones: ShippingZone[];
  weeklyTrend: number; // % change in orders this week (editorial signal)
}

export type ShippingZone =
  | 'KR'
  | 'US'
  | 'CN'
  | 'JP'
  | 'EU'
  | 'SEA' // Southeast Asia
  | 'GLOBAL'; // everywhere else

export interface CartLine {
  productId: string;
  quantity: number;
}

export interface ShippingRate {
  zone: ShippingZone;
  baseFeeKRW: number; // flat base per order
  perKgKRW: number; // additional per kg
  estimatedDays: [number, number]; // [min, max] business days
}

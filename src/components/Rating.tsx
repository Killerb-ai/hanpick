import { useTranslation } from 'react-i18next';

/** Inline star rating with optional review count. */
export function Rating({
  value,
  count,
  size = 'sm'
}: {
  value: number;
  count?: number;
  size?: 'sm' | 'md';
}) {
  const { t } = useTranslation();
  const star = size === 'sm' ? 'text-xs' : 'text-sm';
  return (
    <div className={`flex items-center gap-1 ${star}`}>
      <span className="text-coral" aria-hidden>
        ★
      </span>
      <span className="font-semibold text-ink">{value.toFixed(1)}</span>
      {typeof count === 'number' && (
        <span className="text-stone-400">
          ({count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count})
        </span>
      )}
      {typeof count === 'number' && (
        <span className="sr-only">{t('product.reviews', { n: count })}</span>
      )}
    </div>
  );
}

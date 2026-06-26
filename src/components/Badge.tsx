import type { ReactNode } from 'react';

type Variant = 'coral' | 'ink' | 'soft' | 'gold' | 'green';

const VARIANTS: Record<Variant, string> = {
  coral: 'bg-coral-50 text-coral-700',
  ink: 'bg-ink text-white',
  soft: 'bg-stone-100 text-stone-600',
  gold: 'bg-amber-50 text-amber-700',
  green: 'bg-emerald-50 text-emerald-700'
};

export function Badge({
  children,
  variant = 'soft',
  className = ''
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return <span className={`chip ${VARIANTS[variant]} ${className}`}>{children}</span>;
}

/** The signature trust badge — Made in Korea. */
export function MadeInKoreaBadge({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-coral px-2.5 py-1 font-bold text-white ${
        small ? 'text-[10px]' : 'text-xs'
      }`}
    >
      <span aria-hidden>●</span> K-Made
    </span>
  );
}

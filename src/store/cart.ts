import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartLine } from '@/types';

interface CartState {
  lines: CartLine[];
  add: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  count: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (productId, quantity = 1) =>
        set((state) => {
          const existing = state.lines.find((l) => l.productId === productId);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.productId === productId ? { ...l, quantity: l.quantity + quantity } : l
              )
            };
          }
          return { lines: [...state.lines, { productId, quantity }] };
        }),
      setQuantity: (productId, quantity) =>
        set((state) => ({
          lines:
            quantity <= 0
              ? state.lines.filter((l) => l.productId !== productId)
              : state.lines.map((l) =>
                  l.productId === productId ? { ...l, quantity } : l
                )
        })),
      remove: (productId) =>
        set((state) => ({ lines: state.lines.filter((l) => l.productId !== productId) })),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((sum, l) => sum + l.quantity, 0)
    }),
    { name: 'hanpick:cart' }
  )
);

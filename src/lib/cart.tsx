import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { getDrink, type DrinkId } from "./menu";

type CartLine = { id: DrinkId; qty: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (id: DrinkId) => void;
  remove: (id: DrinkId) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const total = lines.reduce((n, l) => n + l.qty * getDrink(l.id).price, 0);
    return {
      lines,
      count,
      total,
      open,
      setOpen,
      add: (id) =>
        setLines((prev) => {
          const found = prev.find((l) => l.id === id);
          if (found) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
          return [...prev, { id, qty: 1 }];
        }),
      remove: (id) =>
        setLines((prev) =>
          prev.flatMap((l) => (l.id !== id ? [l] : l.qty > 1 ? [{ ...l, qty: l.qty - 1 }] : [])),
        ),
      clear: () => setLines([]),
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatPrice, getDrink } from "@/lib/menu";

export function CartSheet() {
  const { lines, total, open, setOpen, add, remove, clear } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col bg-popover">
        <SheetHeader>
          <SheetTitle className="font-display text-caramel">Your order</SheetTitle>
        </SheetHeader>

        {lines.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">Your cup is empty. Pick a drink from the menu.</p>
        ) : (
          <ul className="mt-6 flex-1 space-y-4 overflow-y-auto">
            {lines.map((line) => {
              const drink = getDrink(line.id);
              return (
                <li key={line.id} className="glass flex items-center gap-3 rounded-2xl p-3">
                  <img src={drink.image} alt="" width={768} height={1024} className="h-14 w-auto" />
                  <div className="flex-1">
                    <p className="font-semibold">{drink.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(drink.price * line.qty)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="glass" size="icon" className="size-8" onClick={() => remove(line.id)} aria-label={`Remove one ${drink.name}`}>
                      <Minus />
                    </Button>
                    <span className="w-4 text-center text-sm">{line.qty}</span>
                    <Button variant="glass" size="icon" className="size-8" onClick={() => add(line.id)} aria-label={`Add one ${drink.name}`}>
                      <Plus />
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {lines.length > 0 && (
          <div className="mt-auto space-y-4 border-t border-border pt-4">
            <div className="flex justify-between font-display text-lg">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={() => {
                clear();
                setOpen(false);
                toast.success("Order placed! We'll have it ready in about 10 minutes.");
              }}
            >
              Place order
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

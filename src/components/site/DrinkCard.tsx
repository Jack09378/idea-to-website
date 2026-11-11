import { Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice, type Drink } from "@/lib/menu";

export function DrinkCard({ drink }: { drink: Drink }) {
  const { add } = useCart();

  return (
    <article className="glass group relative mt-16 flex flex-col rounded-3xl px-6 pb-6 pt-20 text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute -top-14 left-1/2 w-28 -translate-x-1/2">
        <div className="glass relative rounded-2xl px-3 pb-2 pt-1">
          <img
            src={drink.image}
            alt={drink.name}
            width={768}
            height={1024}
            loading="lazy"
            className="mx-auto -mt-8 h-32 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-3"
          />
          <span className="absolute -bottom-2 -right-3 flex items-center gap-1 rounded-md bg-rating px-1.5 py-0.5 text-[11px] font-bold text-rating-foreground">
            {drink.rating.toFixed(1)} <Star className="size-3 fill-caramel text-caramel" />
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{drink.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{drink.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-xl font-semibold">{formatPrice(drink.price)}</span>
        <Button
          variant="hero"
          size="round"
          aria-label={`Add ${drink.name} to cart`}
          onClick={() => {
            add(drink.id);
            toast.success(`${drink.name} added to your order`);
          }}
        >
          <Plus />
        </Button>
      </div>
    </article>
  );
}

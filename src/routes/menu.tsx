import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DrinkCard } from "@/components/site/DrinkCard";
import { PageIntro } from "@/components/site/PageIntro";
import { drinks, type Drink } from "@/lib/menu";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Bodrin Coffee" },
      { name: "description", content: "Classic, signature and cold coffee drinks at Bodrin. Add your favourites and order ahead." },
      { property: "og:title", content: "Menu — Bodrin Coffee" },
      { property: "og:description", content: "Classic, signature and cold coffee drinks at Bodrin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const categories = ["All", "Classic", "Signature", "Cold"] as const;

function MenuPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const shown: Drink[] = active === "All" ? drinks : drinks.filter((d) => d.category === active);

  return (
    <>
      <PageIntro eyebrow="Our menu" title="Brewed with love">
        Every drink is made to order with freshly roasted beans.
      </PageIntro>
      <div className="mt-10 flex justify-center px-4">
        <div className="glass flex gap-1 rounded-full p-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm transition-colors",
                active === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <section className="mx-auto mt-6 grid max-w-5xl gap-6 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {shown.map((d) => (
          <DrinkCard key={d.id} drink={d} />
        ))}
      </section>
    </>
  );
}

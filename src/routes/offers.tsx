import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — Bodrin Coffee" },
      { name: "description", content: "Current deals at Bodrin Coffee: happy hours, loyalty rewards and combo offers." },
      { property: "og:title", content: "Offers — Bodrin Coffee" },
      { property: "og:description", content: "Happy hours, loyalty rewards and combo offers at Bodrin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OffersPage,
});

const offers = [
  { tag: "Every day", title: "Morning happy hour", text: "20% off any classic drink before 10 am." },
  { tag: "Loyalty", title: "Every 6th cup free", text: "Collect a stamp with each drink — your sixth one is on us." },
  { tag: "Weekends", title: "Two for friends", text: "Order two signature drinks and get a cookie free." },
];

function OffersPage() {
  return (
    <>
      <PageIntro eyebrow="Offers" title="Something extra in every cup">
        Small treats to make your coffee ritual even better.
      </PageIntro>
      <section className="mx-auto mt-14 grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-8">
        {offers.map((o) => (
          <div key={o.title} className="glass flex flex-col rounded-3xl p-6">
            <span className="w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">{o.tag}</span>
            <h2 className="mt-4 text-xl font-semibold">{o.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
          </div>
        ))}
      </section>
      <div className="mt-10 text-center">
        <Button asChild variant="hero" size="xl">
          <Link to="/menu">Browse the menu</Link>
        </Button>
      </div>
    </>
  );
}

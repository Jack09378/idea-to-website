import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import interior from "@/assets/cafe-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us — Bodrin Coffee" },
      { name: "description", content: "The story behind Bodrin Coffee: carefully chosen beans, skilled baristas and a cozy space." },
      { property: "og:title", content: "About us — Bodrin Coffee" },
      { property: "og:description", content: "Carefully chosen beans, skilled baristas and a cozy space." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "12+", label: "Single-origin beans" },
  { value: "8", label: "Expert baristas" },
  { value: "50k", label: "Cups poured" },
];

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About us" title="Coffee is our craft">
        Bodrin began with a simple idea: a cup of coffee can make an ordinary day feel special.
      </PageIntro>
      <section className="mx-auto mt-14 grid max-w-6xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-2">
        <img src={interior} alt="A barista pouring latte art at the Bodrin counter" width={1280} height={896} loading="lazy" className="glass w-full rounded-3xl object-cover" />
        <div className="space-y-5 text-muted-foreground">
          <h2 className="text-3xl font-semibold text-foreground">From bean to cup</h2>
          <p className="leading-relaxed">
            We work with small farms to source beans we love, roast them in small batches and brew every drink by hand. Our menu is short on purpose — we would rather perfect a few drinks than rush through many.
          </p>
          <p className="leading-relaxed">
            Our café is a place to slow down. Come for a quick espresso or stay for an afternoon with a book — either way, you're welcome here.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <p className="font-display text-2xl font-bold text-caramel">{s.value}</p>
                <p className="mt-1 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Bodrin Coffee" },
      { name: "description", content: "What our guests say about Bodrin Coffee's drinks, baristas and atmosphere." },
      { property: "og:title", content: "Reviews — Bodrin Coffee" },
      { property: "og:description", content: "What our guests say about Bodrin Coffee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Priya S.", rating: 5, text: "The best latte in town. Creamy, balanced and always the same perfect taste." },
  { name: "Rahul M.", rating: 5, text: "Cozy place with lovely staff. The caramel raf is my weekly treat." },
  { name: "Ananya K.", rating: 4, text: "Great cold brew and a calm atmosphere — perfect for working a few hours." },
  { name: "Vikram T.", rating: 5, text: "The baristas really know their craft. They recommended a drink I now order every time." },
  { name: "Neha P.", rating: 5, text: "Took the coffee quiz for fun and it was spot on. Mocha all the way!" },
  { name: "Arjun D.", rating: 4, text: "Fast service when ordering ahead, and the cups look beautiful." },
];

function ReviewsPage() {
  return (
    <>
      <PageIntro eyebrow="Reviews" title="Loved by our guests">
        A few kind words from the people who make Bodrin what it is.
      </PageIntro>
      <section className="mx-auto mt-14 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="glass rounded-3xl p-6">
            <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={i < r.rating ? "size-4 fill-caramel text-caramel" : "size-4 text-muted-foreground/40"} />
              ))}
            </div>
            <blockquote className="mt-4 leading-relaxed">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">— {r.name}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}

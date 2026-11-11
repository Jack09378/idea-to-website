import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DrinkCard } from "@/components/site/DrinkCard";
import { featuredDrinks } from "@/lib/menu";
import heroCups from "@/assets/hero-cups.png";
import mochaCup from "@/assets/cup-mocha.png";
import beans from "@/assets/beans.png";
import spoon from "@/assets/spoon-beans.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bodrin Coffee — Exceptional taste in every sip" },
      { name: "description", content: "Handcrafted cappuccino, latte and mocha from Bodrin Coffee. Order ahead or take our quiz to find your perfect cup." },
      { property: "og:title", content: "Bodrin Coffee — Exceptional taste in every sip" },
      { property: "og:description", content: "Handcrafted cappuccino, latte and mocha. Order ahead or find your perfect cup." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reasons = [
  { n: "1", title: "Premium quality beans", text: "Our passion starts with choosing the beans. We care about every detail so each cup brings you pure quality and joy — it's not just coffee, it's a world of unforgettable flavour." },
  { n: "2", title: "A warm, inspiring atmosphere", text: "Our cozy space is full of warmth. Surrounded by attentive service, you can relax over a cup and a good conversation." },
  { n: "3", title: "A personal touch for every guest", text: "We brew to your taste, crafting drinks made just for you so every visit feels like a small occasion." },
  { n: "4", title: "A team of skilled baristas", text: "Our baristas bring years of experience and love showing off their craft in every cup they pour." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-12 sm:px-8 lg:grid-cols-2 lg:pt-20">
        <img src={beans} alt="" aria-hidden width={768} height={1024} className="pointer-events-none absolute -left-56 top-72 hidden w-56 opacity-90 animate-float-slow lg:block" />
        <div className="relative z-10 animate-rise">
          <h1 className="text-4xl font-bold leading-tight text-caramel sm:text-5xl lg:text-6xl">
            Discover exceptional taste in every sip!
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            For us, coffee isn't just a drink — it's an art. Join us on a journey where every sip meets the perfect flavour.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/menu">Choose your coffee</Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/quiz">Take the quiz</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-10 rounded-full bg-caramel/20 blur-3xl" />
          <img
            src={heroCups}
            alt="Two Bodrin takeaway cups with coffee splashing out"
            width={1024}
            height={1024}
            className="relative mx-auto w-full max-w-lg animate-float drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Featured */}
      <section className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <p aria-hidden className="text-outline pointer-events-none absolute inset-x-0 -top-10 select-none text-center font-display text-[9rem] font-extrabold leading-none sm:text-[14rem]">
          BODRIN
        </p>
        <div className="relative grid gap-6 sm:grid-cols-3">
          {featuredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/menu" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
            See the full menu
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto mt-28 max-w-6xl px-4 sm:px-8">
        <h2 className="text-center text-3xl font-bold text-caramel sm:text-4xl">
          BODRIN <span className="font-medium text-foreground">is</span>
        </h2>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-14">
            {reasons.slice(0, 2).map((r) => <Reason key={r.n} {...r} />)}
          </div>
          <div className="flex flex-col items-center gap-6">
            <img src={mochaCup} alt="Bodrin mocha cup" width={768} height={1024} loading="lazy" className="w-56 animate-float drop-shadow-2xl" />
            <Button asChild variant="hero" size="xl">
              <Link to="/menu">Order</Link>
            </Button>
          </div>
          <div className="space-y-14">
            {reasons.slice(2).map((r) => <Reason key={r.n} {...r} />)}
          </div>
        </div>
      </section>

      {/* Quiz banner */}
      <section className="mx-auto mt-28 max-w-6xl px-4 sm:px-8">
        <div className="glass bg-banner relative overflow-hidden rounded-3xl px-8 py-12 sm:px-14">
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">Find out which coffee suits you best</h2>
            <Button asChild variant="latte" size="lg" className="mt-6">
              <Link to="/quiz">Take the quiz</Link>
            </Button>
          </div>
          <img src={spoon} alt="" aria-hidden width={1024} height={768} loading="lazy" className="pointer-events-none absolute -bottom-10 -right-10 w-72 opacity-60 sm:w-[28rem] sm:opacity-100" />
        </div>
      </section>
    </>
  );
}

function Reason({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="relative">
      <span aria-hidden className="absolute -left-2 -top-6 font-display text-8xl font-extrabold leading-none text-foreground/10">
        {n}
      </span>
      <div className="relative pl-10">
        <h3 className="text-xl font-medium sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

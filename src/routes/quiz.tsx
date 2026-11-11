import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";
import { useCart } from "@/lib/cart";
import { formatPrice, getDrink } from "@/lib/menu";
import { quizQuestions, scoreQuiz } from "@/lib/quiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Coffee quiz — Bodrin Coffee" },
      { name: "description", content: "Answer three quick questions and find the Bodrin coffee that suits you best." },
      { property: "og:title", content: "Coffee quiz — Bodrin Coffee" },
      { property: "og:description", content: "Three quick questions to find your perfect cup." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const { add } = useCart();
  const step = answers.length;
  const current = quizQuestions[step];
  const done = !current;
  const result = done ? getDrink(scoreQuiz(answers)) : null;

  return (
    <>
      <PageIntro eyebrow="Coffee quiz" title="Find your perfect cup" />
      <section className="mx-auto mt-12 max-w-xl px-4">
        <div className="glass rounded-3xl p-8">
          {current ? (
            <>
              <p className="text-sm text-muted-foreground">
                Question {step + 1} of {quizQuestions.length}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-glass-strong">
                <div className="h-full bg-primary transition-all" style={{ width: `${(step / quizQuestions.length) * 100}%` }} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold">{current.question}</h2>
              <div className="mt-6 grid gap-3">
                {current.options.map((o, i) => (
                  <button
                    key={o.label}
                    onClick={() => setAnswers((a) => [...a, i])}
                    className="rounded-2xl border border-border bg-glass px-5 py-4 text-left transition-colors hover:border-primary hover:bg-glass-strong"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            result && (
              <div className="text-center animate-rise">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Your match</p>
                <img src={result.image} alt={result.name} width={768} height={1024} className="mx-auto mt-4 h-48 w-auto animate-float drop-shadow-2xl" />
                <h2 className="mt-4 text-3xl font-bold text-caramel">{result.name}</h2>
                <p className="mt-2 text-muted-foreground">{result.description}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => {
                      add(result.id);
                      toast.success(`${result.name} added to your order`);
                    }}
                  >
                    Add for {formatPrice(result.price)}
                  </Button>
                  <Button variant="glass" size="lg" onClick={() => setAnswers([])}>
                    Try again
                  </Button>
                </div>
                <Link to="/menu" className="mt-6 inline-block text-sm text-muted-foreground underline underline-offset-4">
                  See the full menu
                </Link>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

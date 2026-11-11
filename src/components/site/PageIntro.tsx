import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-16 text-center animate-rise">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold text-caramel sm:text-5xl">{title}</h1>
      {children && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </section>
  );
}

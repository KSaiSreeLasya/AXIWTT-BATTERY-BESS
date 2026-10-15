import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  accent,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-teal/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-volt">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          {title}
          {accent && (
            <>
              {" "}
              <span className="text-volt">{accent}</span>
            </>
          )}
        </h1>
        {children && (
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-white/75">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

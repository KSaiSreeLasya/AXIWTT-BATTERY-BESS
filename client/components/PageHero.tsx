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
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-volt/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-volt" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-volt">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
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

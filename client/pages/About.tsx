import { Link } from "react-router-dom";
import { ArrowRight, Eye, Layers, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To contribute to a cleaner and more energy-efficient future through innovative battery technologies and sustainable energy solutions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To support the transition toward efficient energy systems by focusing on product reliability, technological advancement, customer requirements, and responsible energy practices.",
  },
  {
    icon: Layers,
    title: "Our Approach",
    description:
      "We emphasize quality, performance, application suitability, and continuous improvement in delivering battery solutions for a wide range of energy requirements.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-volt">
            About AxiWatt
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Driving Innovation in{" "}
            <span className="text-volt">Battery Technology</span>
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <p className="text-lg leading-relaxed text-white/80">
              AxiWatt is focused on supporting the evolving energy needs of
              modern industries through advanced battery solutions and energy
              storage technologies. Our areas of focus include electric
              mobility, telecommunications, and energy storage applications.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              We believe that reliable energy is essential for progress. Our
              objective is to support businesses with practical, efficient, and
              dependable battery solutions that meet changing operational
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-border bg-card p-8 transition duration-300 hover:border-ink/20 hover:shadow-md hover:shadow-ink/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                  <principle.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-ink">
                  {principle.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-border bg-white px-8 py-12 sm:px-12 md:flex-row md:items-center">
          <p className="max-w-2xl font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            Let&rsquo;s power the future together.
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-full bg-ink px-7 text-base text-white hover:bg-ink/90"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

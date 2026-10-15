import { Building2, Car, Factory, RadioTower, Sun } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

const industries = [
  {
    icon: Car,
    title: "Electric Mobility",
    description:
      "Supporting the growing demand for battery-powered transportation and electric mobility solutions.",
  },
  {
    icon: RadioTower,
    title: "Telecommunications",
    description:
      "Helping maintain network reliability through dependable backup power solutions for communication infrastructure.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Supporting solar and other renewable energy installations with energy storage solutions designed for suitable applications.",
  },
  {
    icon: Factory,
    title: "Industrial and Commercial Power",
    description:
      "Addressing energy storage and backup power requirements for commercial buildings, industrial facilities, and critical equipment.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Supporting the development of resilient power systems for modern infrastructure and energy management applications.",
  },
];

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Energy Solutions"
        accent="Across Industries"
      >
        <p>
          From electric mobility to critical infrastructure, AxiWatt supports
          the power and storage needs of modern industries.
        </p>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:px-8 xl:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-ink/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt/25 text-ink transition group-hover:bg-volt">
                <industry.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-ink">
                {industry.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner title="Let's power the future together." />
    </>
  );
}

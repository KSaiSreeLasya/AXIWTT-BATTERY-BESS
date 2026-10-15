import { Battery, Gauge, Network, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

const pillars = [
  {
    icon: Battery,
    title: "Battery Technology",
    description:
      "Exploring battery technologies suited to different power, capacity, lifecycle, and operational requirements.",
  },
  {
    icon: Gauge,
    title: "Battery Management Systems",
    description:
      "Battery management technologies can help monitor battery conditions and support safe, efficient operation when integrated into appropriate systems.",
  },
  {
    icon: Network,
    title: "Energy Storage Integration",
    description:
      "Solutions designed to work within broader energy systems, including renewable power generation and backup power infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and Reliability",
    description:
      "Emphasizing the importance of suitable system design, operating conditions, protection mechanisms, and battery lifecycle management.",
  },
];

export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology & Innovation"
        title="Technology That"
        accent="Moves Energy Forward"
      >
        <p>
          At AxiWatt, we recognize the importance of technology in developing
          efficient and reliable battery solutions. Our technology focus is
          guided by evolving industry requirements, application suitability, and
          improvements in energy storage performance.
        </p>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group rounded-2xl border border-border bg-card p-8 transition duration-300 hover:border-ink/20 hover:shadow-md hover:shadow-ink/5 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                  <pillar.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="font-display text-sm font-bold text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-ink">
                {pillar.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner title="Let's power the future together." />
    </>
  );
}

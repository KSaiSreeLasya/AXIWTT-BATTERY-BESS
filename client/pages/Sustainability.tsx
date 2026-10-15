import { Leaf, Plug, Recycle, TrendingUp, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

const focusAreas = [
  {
    icon: Zap,
    title: "Energy Efficiency",
    description:
      "Supporting solutions designed to make effective use of stored energy.",
  },
  {
    icon: Plug,
    title: "Electrification",
    description:
      "Contributing to the development of electric mobility and cleaner energy systems.",
  },
  {
    icon: Recycle,
    title: "Responsible Battery Lifecycle",
    description:
      "Encouraging appropriate battery handling, collection, reuse, and recycling through suitable channels.",
  },
  {
    icon: Leaf,
    title: "Resource Responsibility",
    description:
      "Recognizing the importance of responsible material use and waste reduction.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    description:
      "Promoting the selection and use of battery solutions appropriate to their operating requirements.",
  },
];

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Energizing a"
        accent="Sustainable Future"
      >
        <p>
          At AxiWatt, we believe energy innovation should support a more
          sustainable future. Battery technology plays an important role in
          electrification, renewable energy utilization, and modern energy
          management.
        </p>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="max-w-2xl text-4xl font-bold text-ink sm:text-5xl">
            Our sustainability focus
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="group rounded-2xl border border-border bg-card p-8 transition duration-300 hover:border-ink/20 hover:shadow-md hover:shadow-ink/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                  <area.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Let's power the future together." />
    </>
  );
}

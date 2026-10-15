import {
  Check,
  BatteryCharging,
  Car,
  RadioTower,
  RefreshCw,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

const products = [
  {
    icon: Car,
    title: "Automotive Battery Solutions",
    description:
      "Battery technologies for electric mobility and automotive applications, with a focus on energy efficiency, dependable operation, and performance.",
    applications: [
      "Electric vehicles",
      "Mobility platforms",
      "Automotive energy systems",
    ],
  },
  {
    icon: RadioTower,
    title: "Telecom Battery Solutions",
    description:
      "Backup battery solutions designed to support telecom towers, communication networks, and critical connectivity infrastructure.",
    applications: [
      "Telecom towers",
      "Network equipment",
      "Backup power systems",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems (BESS)",
    description:
      "Energy storage solutions designed to support renewable energy integration, energy management, and reliable power availability.",
    applications: [
      "Commercial facilities",
      "Industrial sites",
      "Renewable energy projects",
    ],
  },
  {
    icon: RefreshCw,
    title: "Lead Replacement Batteries",
    description:
      "Modern battery alternatives for suitable applications where improved energy efficiency, reduced maintenance, or different performance characteristics are required.",
    applications: [
      "Backup power",
      "Industrial equipment",
      "Selected energy storage systems",
    ],
  },
];

const reasons = [
  {
    title: "Reliability First",
    description:
      "Solutions selected and developed around the power requirements of each application.",
  },
  {
    title: "Technology Focus",
    description:
      "An approach centered on battery innovation, energy storage, and evolving industry needs.",
  },
  {
    title: "Application-Based Solutions",
    description:
      "Battery options aligned with specific operational and infrastructure requirements.",
  },
  {
    title: "Sustainability Commitment",
    description:
      "Supporting efficient energy use and responsible battery lifecycle practices.",
  },
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & Solutions"
        title="Battery solutions for every"
        accent="application"
      >
        <p>
          Battery technologies for electric mobility, telecom backup power,
          energy storage, and suitable lead replacement applications.
        </p>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          {products.map((product) => (
            <article
              key={product.title}
              className="group rounded-2xl border border-border bg-card p-8 transition duration-300 hover:border-ink/20 hover:shadow-md hover:shadow-ink/5 lg:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                <product.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-ink">
                {product.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-teal">
                  Applications
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-1">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="flex items-center gap-3 text-sm font-medium text-ink"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-8">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal">
              Why Choose AxiWatt
            </p>
            <h2 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
              Built around your requirements
            </h2>
          </div>

          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex gap-5">
                <span className="font-display text-sm font-bold text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-24 lg:pt-28">
        <CtaBanner title="Let's power the future together." />
      </div>
    </>
  );
}

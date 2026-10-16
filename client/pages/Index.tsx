import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Car,
  RadioTower,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";

const solutions = [
  {
    icon: Car,
    title: "Automotive Batteries",
    description:
      "Supporting the evolution of electric mobility with battery solutions designed for performance, reliability, and efficient energy utilization.",
  },
  {
    icon: RadioTower,
    title: "Telecom Batteries",
    description:
      "Reliable backup power solutions designed to support telecom infrastructure, network continuity, and uninterrupted connectivity.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems",
    description:
      "Flexible energy storage solutions designed to help manage power demand, support renewable energy integration, and improve energy utilization.",
  },
  {
    icon: RefreshCw,
    title: "Lead Replacement Solutions",
    description:
      "Modern battery alternatives for suitable applications, designed to support dependable performance and reduced maintenance requirements.",
  },
];

const reasons = [
  {
    title: "Reliable Performance",
    description:
      "Solutions designed around dependable power and consistent operation.",
  },
  {
    title: "Technology-Driven Approach",
    description:
      "A focus on evolving battery technologies and energy storage innovation.",
  },
  {
    title: "Customer-Centric Solutions",
    description:
      "Products and services aligned with application-specific requirements.",
  },
  {
    title: "Sustainability Focus",
    description:
      "Supporting energy efficiency and responsible battery lifecycle management.",
  },
];

const HERO_IMAGE_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fa16b4d9292da4a3688fbc1ccfd166262%2F097748926afd42f2abf981610dd1f686?format=webp&width=800&height=1200";

function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
      <img
        src={HERO_IMAGE_URL}
        alt="AxiWatt battery energy storage solution"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <HeroBackground />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Powering Progress.{" "}
              <span className="text-volt">Energizing the Future.</span>
            </h1>
            <p className="mt-6 font-display text-xl font-semibold text-white sm:text-2xl">
              Advanced Battery Solutions for a Sustainable World
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              At AxiWatt, we are focused on delivering innovative battery and
              energy storage solutions for electric mobility,
              telecommunications, and modern power infrastructure. Our approach
              combines reliable performance, efficient energy management, and
              sustainability to meet the evolving needs of industries.
            </p>
            <p className="mt-8 border-l-2 border-volt pl-4 text-sm font-semibold uppercase tracking-wide text-volt sm:text-base">
              Powering mobility. Strengthening connectivity. Enabling a cleaner
              energy future.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-volt px-7 text-base text-ink hover:bg-volt/90"
              >
                <Link to="/products">
                  Explore Our Solutions
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-ink sm:text-5xl">
              Our Solutions
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="group rounded-2xl border border-border bg-card p-7 transition duration-300 hover:border-ink/20 hover:shadow-md hover:shadow-ink/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                  <solution.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold text-ink sm:text-5xl">
              Why AxiWatt?
            </h2>
          </div>

          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex gap-6">
                <span className="w-12 shrink-0 font-display text-3xl font-bold leading-none text-teal">
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

      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <h2 className="text-4xl font-bold text-ink sm:text-5xl">
            Building a Smarter Energy Future
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            As industries transition toward electrification and renewable
            energy, AxiWatt aims to support this transformation with battery
            technologies that enable reliable, efficient, and sustainable power.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute -bottom-32 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-teal/30 blur-3xl" />
          <h2 className="relative text-4xl font-bold text-white sm:text-5xl">
            Let&rsquo;s power the future together.
          </h2>
          <div className="relative mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-volt px-8 text-base text-ink hover:bg-volt/90"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import { Check, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: MapPin, label: "Registered Office" },
];

const enquiryPoints = [
  "Your application and project type",
  "Required battery capacity",
  "Expected operating conditions",
  "Your business needs and timeline",
];

const applicationTypes = [
  "Automotive Batteries",
  "Telecom Batteries",
  "Battery Energy Storage Systems",
  "Lead Replacement Solutions",
  "Other",
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Let's Connect"
        title="Find the Right Energy Solution"
        accent="for Your Business"
      >
        <p>
          Looking for battery solutions for electric mobility, telecom backup
          power, or energy storage? Connect with AxiWatt to discuss your
          application, technical requirements, and business needs.
        </p>
        <p>
          Our team welcomes enquiries from businesses, project developers,
          technology partners, and organizations seeking battery and energy
          storage solutions.
        </p>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <article className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-ink">Send an Enquiry</h2>
            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="application">Application</Label>
                <select
                  id="application"
                  name="application"
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select an application
                  </option>
                  {applicationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Required battery capacity, operating conditions, and timeline"
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 rounded-full bg-ink px-8 text-base text-white hover:bg-ink/90"
                >
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </article>

          <article className="flex flex-col rounded-2xl bg-ink p-8 text-white lg:p-10">
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <ul className="mt-8 divide-y divide-white/10">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center gap-5 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-volt">
                    <detail.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      {detail.label}
                    </p>
                    <p className="mt-1 font-medium text-white">
                      To be notified
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-volt">
                Your enquiry should include
              </p>
              <ul className="mt-5 space-y-4">
                {enquiryPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volt text-ink">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

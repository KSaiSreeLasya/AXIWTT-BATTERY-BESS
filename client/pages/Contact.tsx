import { Check, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";

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
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-ink">Get in Touch</h2>
            <ul className="mt-8 divide-y divide-border">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center gap-5 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-volt/25 text-ink">
                    <detail.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-1 font-medium text-ink">To be confirmed</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-ink p-8 text-white lg:p-10">
            <h2 className="text-2xl font-semibold">Send Us an Enquiry</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Tell us about your project, required battery capacity,
              application, and expected operating conditions so that the
              appropriate solution can be discussed.
            </p>
            <ul className="mt-8 space-y-4">
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
          </article>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Products & Solutions", to: "/products" },
      { label: "Industries", to: "/industries" },
    ],
  },
  {
    title: "Innovation",
    links: [
      { label: "Technology", to: "/technology" },
      { label: "Sustainability", to: "/sustainability" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-5 font-display text-lg font-semibold text-volt">
              Powering Progress. Energizing the Future.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Advanced battery solutions for electric mobility,
              telecommunications, and modern power infrastructure.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-volt"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AxiWatt. All rights reserved.</p>
          <p>Sustainable energy for a cleaner tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}

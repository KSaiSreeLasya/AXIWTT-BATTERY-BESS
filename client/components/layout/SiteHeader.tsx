import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products & Solutions", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Technology", to: "/technology" },
  { label: "Sustainability", to: "/sustainability" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-ink",
                  isActive ? "bg-secondary text-ink" : "text-muted-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden rounded-full px-5 md:inline-flex">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-ink xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-base font-medium",
                    isActive
                      ? "bg-secondary text-ink"
                      : "text-muted-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="mt-3 rounded-full md:hidden">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

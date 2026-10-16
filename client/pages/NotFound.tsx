import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();

  usePageMeta({
    title: "Page Not Found | AxiWatt",
    description: "The page you are looking for does not exist or has moved.",
    noindex: true,
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-6 py-24 lg:px-8">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
        This page has lost its charge
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-10 h-12 rounded-full bg-ink px-7 text-base text-white hover:bg-ink/90"
      >
        <Link to="/">Return to Home</Link>
      </Button>
    </section>
  );
};

export default NotFound;

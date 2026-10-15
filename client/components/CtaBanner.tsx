import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaBanner({ title }: { title: string }) {
  return (
    <section className="px-6 pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="absolute -bottom-32 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-teal/30 blur-3xl" />
        <h2 className="relative text-4xl font-bold text-white sm:text-5xl">
          {title}
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
  );
}

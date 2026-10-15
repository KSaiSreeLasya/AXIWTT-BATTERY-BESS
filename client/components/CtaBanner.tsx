import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaBanner({ title }: { title: string }) {
  return (
    <section className="px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-base text-ink hover:bg-white/90"
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

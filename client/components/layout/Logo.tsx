import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg",
          inverted ? "bg-volt" : "bg-ink",
        )}
      >
        <Zap
          className={cn(
            "h-5 w-5",
            inverted ? "fill-ink text-ink" : "fill-volt text-volt",
          )}
          strokeWidth={2.25}
        />
      </span>
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight",
          inverted ? "text-white" : "text-ink",
        )}
      >
        Axi<span className="text-teal">Watt</span>
      </span>
    </Link>
  );
}

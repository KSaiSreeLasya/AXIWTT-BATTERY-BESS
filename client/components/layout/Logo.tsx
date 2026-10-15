import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fa16b4d9292da4a3688fbc1ccfd166262%2F0ac07c720a2043fc9978ce606014cc60?format=webp&width=800&height=1200";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={LOGO_URL}
        alt="AxiWatt"
        className={cn("h-12 w-auto", inverted && "brightness-0 invert")}
      />
    </Link>
  );
}

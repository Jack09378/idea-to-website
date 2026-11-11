import { Link } from "@tanstack/react-router";
import { Coffee } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center font-display text-2xl font-semibold tracking-wide text-caramel" aria-label="Bodrin home">
      BODR
      <Coffee className="mx-0.5 size-6" strokeWidth={2.4} />
      N
    </Link>
  );
}

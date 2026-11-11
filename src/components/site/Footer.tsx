import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-muted-foreground">Exceptional coffee, one sip at a time.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/menu" className="hover:text-foreground">Menu</Link>
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/reviews" className="hover:text-foreground">Reviews</Link>
          <Link to="/offers" className="hover:text-foreground">Offers</Link>
          <Link to="/quiz" className="hover:text-foreground">Coffee quiz</Link>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Bodrin Coffee</p>
      </div>
    </footer>
  );
}

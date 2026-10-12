import Link from "next/link";
import { Logo } from "@/components/copper/logo";
import { ModeToggle } from "@/components/copper/mode-toggle";

const NAV = [
  { href: "#products", label: "Products" },
  { href: "#plus", label: "Copper Plus" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="bg-background/90 sticky top-0 z-50 border-b backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" aria-label="Copper State Labs home" className="shrink-0">
          <Logo className="w-28 sm:w-44" />
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          <nav aria-label="Main">
            <ul className="flex items-center gap-2.5 text-xs font-semibold whitespace-nowrap sm:gap-6 sm:text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

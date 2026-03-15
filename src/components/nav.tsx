"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSONAL } from "@/data/resume";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-surface/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {PERSONAL.name}
        </Link>
        <ul className="flex gap-1">
          {LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent-subtle text-accent"
                      : "text-muted hover:bg-accent-subtle/50 hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

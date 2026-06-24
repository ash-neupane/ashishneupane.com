"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSONAL } from "@/data/resume";

const LINKS = [
  { href: "/", label: "About Me" },
  { href: "/research", label: "Research Reading" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          {PERSONAL.name}
        </Link>
        <ul className="flex gap-2">
          {LINKS.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-[3px] border px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-accent bg-accent text-surface"
                      : "border-transparent text-muted hover:border-border hover:bg-paper hover:text-ink"
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

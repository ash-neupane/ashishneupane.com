import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-6xl font-bold text-foreground">404</h1>
      <p className="text-lg text-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-[3px] border border-accent bg-accent px-5 py-2 text-sm font-medium text-on-ink shadow-[var(--shadow-paper)] transition-shadow hover:shadow-[var(--shadow-pop)]"
      >
        Go Home
      </Link>
    </div>
  );
}

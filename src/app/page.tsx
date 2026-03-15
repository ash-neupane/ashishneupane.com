import { PERSONAL } from "@/data/resume";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative space-y-8 pt-8">
        {/* Decorative ocean gradient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-20 h-80 w-80 rounded-full bg-accent/8 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-16 h-64 w-64 rounded-full bg-accent-light/6 blur-3xl"
        />

        <div className="relative space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {PERSONAL.name}
          </h1>
          <p className="text-xl font-medium text-accent">
            {PERSONAL.title}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Under Construction */}
      <section className="flex flex-col items-center gap-6 rounded-2xl border border-border/60 bg-surface/80 p-12 text-center backdrop-blur-sm">
        <span className="text-6xl" role="img" aria-label="construction">
          🏗️
        </span>
        <h2 className="text-2xl font-bold text-foreground">
          Pardon the dust!
        </h2>
        <p className="max-w-md text-base leading-relaxed text-muted">
          This site is being built with vibes and an LLM.
          Check back soon — or don&apos;t, I&apos;m a sign not a cop.
        </p>
        <div className="flex items-center gap-2 rounded-lg bg-accent-subtle px-4 py-2 text-sm text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          Deploying neurons…
        </div>
      </section>
    </div>
  );
}

import { PERSONAL } from "@/data/resume";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {PERSONAL.name}
        </h1>
        <p className="font-mono text-sm uppercase tracking-wide text-muted">
          {PERSONAL.title}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-border bg-paper px-5 py-2 text-sm font-medium text-ink shadow-[var(--shadow-paper)] transition-colors hover:bg-surface"
          >
            GitHub
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-border bg-paper px-5 py-2 text-sm font-medium text-ink shadow-[var(--shadow-paper)] transition-colors hover:bg-surface"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="rounded-[3px] border border-border bg-surface p-8 shadow-[var(--shadow-paper)]">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Under construction
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink">
          A quiet corner of the web, built slowly with Claude Code. Until it
          fills in, you&apos;ll find what I&apos;m reading under{" "}
          <span className="font-medium">Research Reading</span>.
        </p>
      </section>
    </div>
  );
}

import { PERSONAL } from "@/data/resume";

export default function Home() {
  return (
    <div className="max-w-3xl px-8 py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {PERSONAL.name}
        </h1>
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

      <section className="rounded-[3px] border border-border bg-paper p-8 shadow-[var(--shadow-paper)]">
        <p className="max-w-xl text-base leading-relaxed text-ink">
          Hello, I am a human. I enjoy hiking and reading research papers.
        </p>
      </section>
    </div>
  );
}

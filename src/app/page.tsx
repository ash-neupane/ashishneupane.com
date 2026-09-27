import { PERSONAL } from "@/data/resume";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container className="space-y-12 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          {PERSONAL.name}
        </h1>
        <p className="text-base text-muted">{PERSONAL.title}</p>
      </header>

      <div className="flex flex-wrap gap-3">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border bg-surface px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper"
        >
          GitHub
        </a>
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border bg-surface px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper"
        >
          LinkedIn
        </a>
      </div>

      <section className="rounded-lg border border-border bg-surface p-8">
        <p className="max-w-xl text-base leading-relaxed text-ink">
          Hello, I am a human. I enjoy hiking and reading research papers.
        </p>
      </section>
    </Container>
  );
}

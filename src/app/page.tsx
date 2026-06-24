import { PERSONAL } from "@/data/resume";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container className="space-y-12 py-16">
      <div className="flex flex-wrap gap-3">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] border border-border bg-surface px-5 py-2 text-sm font-medium text-ink shadow-[var(--shadow-paper)] transition-colors hover:bg-paper"
        >
          GitHub
        </a>
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] border border-border bg-surface px-5 py-2 text-sm font-medium text-ink shadow-[var(--shadow-paper)] transition-colors hover:bg-paper"
        >
          LinkedIn
        </a>
      </div>

      <section className="rounded-[3px] border border-border bg-surface p-8 shadow-[var(--shadow-paper)]">
        <p className="max-w-xl text-base leading-relaxed text-ink">
          Hello, I am a human. I enjoy hiking and reading research papers.
        </p>
      </section>
    </Container>
  );
}

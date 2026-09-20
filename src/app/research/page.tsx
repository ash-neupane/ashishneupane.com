import type { Metadata } from "next";
import Link from "next/link";
import { RESEARCH } from "@/data/research";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Research Reading",
  description:
    "Literature reviews and idea write-ups on LLM inference hardware, looped transformers, tokenization, and reasoning.",
  alternates: { canonical: "/research" },
};

function formatStats(papers: number | null, edges: number | null) {
  const parts: string[] = [];
  if (papers !== null) parts.push(`${papers} papers`);
  if (edges !== null) parts.push(`${edges} links`);
  return parts.join(" · ");
}

export default function ResearchIndex() {
  if (RESEARCH.length === 0) {
    return (
      <Container className="py-16">
        <p className="rounded-[3px] border border-border bg-surface p-8 text-muted shadow-[var(--shadow-paper)]">
          No reports yet. Check back soon.
        </p>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <h1 className="sr-only">Research Reading</h1>
      <ul className="space-y-5">
        {RESEARCH.map((thread) => (
          <li key={thread.slug}>
            <Link
              href={`/research/${thread.slug}`}
              className="block rounded-[3px] border border-border bg-surface p-6 shadow-[var(--shadow-paper)] transition-shadow hover:shadow-[var(--shadow-pop)]"
            >
              <h2 className="text-lg font-semibold leading-snug text-ink">
                {thread.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                {thread.question}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
                {thread.date}
                {formatStats(thread.papers, thread.edges) &&
                  ` · ${formatStats(thread.papers, thread.edges)}`}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

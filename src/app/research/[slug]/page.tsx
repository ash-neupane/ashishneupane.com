import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESEARCH } from "@/data/research";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PERSONAL } from "@/data/resume";
import { SITE_URL } from "@/data/site";

export function generateStaticParams() {
  return RESEARCH.map((thread) => ({ slug: thread.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const thread = RESEARCH.find((t) => t.slug === slug);
  if (!thread) return {};
  return {
    title: thread.title,
    description: thread.question,
    alternates: { canonical: `/research/${slug}` },
    openGraph: {
      type: "article",
      title: thread.title,
      description: thread.question,
      url: `${SITE_URL}/research/${slug}`,
      publishedTime: thread.date,
    },
  };
}

export default async function ReportPage({ params }: Params) {
  const { slug } = await params;
  const thread = RESEARCH.find((t) => t.slug === slug);
  if (!thread) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: thread.title,
    description: thread.question,
    datePublished: thread.date,
    url: `${SITE_URL}/research/${slug}`,
    author: { "@type": "Person", name: PERSONAL.name, url: SITE_URL },
  };

  return (
    <div>
      <JsonLd data={articleJsonLd} />
      <header className="border-b border-border bg-background">
        <Container className="flex items-center gap-4 py-3">
          <Link
            href="/research"
            className="font-mono text-sm text-muted transition-colors hover:text-ink"
          >
            ← Research Reading
          </Link>
          <span className="truncate text-sm font-medium text-ink">
            {thread.title}
          </span>
        </Container>
      </header>
      <h1 className="sr-only">{thread.title}</h1>
      <p className="sr-only">{thread.question}</p>
      <iframe
        src={thread.reportPath}
        title={thread.title}
        className="block h-[calc(100vh-7rem)] w-full border-0 bg-background"
      />
    </div>
  );
}

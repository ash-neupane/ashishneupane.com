import Link from "next/link";
import { notFound } from "next/navigation";
import { RESEARCH } from "@/data/research";

export function generateStaticParams() {
  return RESEARCH.map((thread) => ({ slug: thread.slug }));
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thread = RESEARCH.find((t) => t.slug === slug);
  if (!thread) notFound();

  // Break out of the layout's centered max-w-3xl <main> so the report is full-bleed.
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] -my-16 w-screen">
      <header className="flex items-center gap-4 border-b border-border bg-surface px-6 py-3">
        <Link
          href="/research"
          className="font-mono text-sm text-muted transition-colors hover:text-ink"
        >
          ← Research Reading
        </Link>
        <span className="truncate text-sm font-medium text-ink">
          {thread.title}
        </span>
      </header>
      <iframe
        src={thread.reportPath}
        title={thread.title}
        className="block h-[calc(100vh-3.25rem)] w-full border-0 bg-paper"
      />
    </div>
  );
}

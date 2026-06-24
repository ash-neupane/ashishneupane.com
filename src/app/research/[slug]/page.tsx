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

  return (
    <div>
      <header className="flex items-center gap-4 border-b border-border bg-background px-8 py-3">
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
        className="block h-[calc(100vh-7rem)] w-full border-0 bg-background"
      />
    </div>
  );
}

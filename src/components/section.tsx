import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

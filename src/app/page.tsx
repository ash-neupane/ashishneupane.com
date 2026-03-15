import { PERSONAL, EDUCATION } from "@/data/resume";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative space-y-8 pt-8">
        {/* Decorative gradient blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
        />
        <div className="relative space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {PERSONAL.name}
          </h1>
          <p className="text-xl font-medium text-muted">{PERSONAL.title}</p>
          <p className="text-sm text-muted">
            Building production ML systems at{" "}
            <span className="font-medium text-foreground">Eight Sleep</span>
            {" · "}Previously at{" "}
            <span className="font-medium text-foreground">Microsoft</span>
            {" · "}
            <span className="font-medium text-foreground">
              Tufts University
            </span>
          </p>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {PERSONAL.summary}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-accent/25 transition-all hover:shadow-md hover:shadow-accent/30 hover:brightness-110"
          >
            Get in Touch
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Education */}
      <Section title="Education">
        <div className="rounded-xl border border-border bg-surface p-6">
          {EDUCATION.map((edu) => (
            <div key={edu.school}>
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-accent">{edu.school}</p>
                </div>
                <time className="shrink-0 text-sm text-muted">
                  {edu.period}
                </time>
              </div>
              <ul className="space-y-1.5">
                {edu.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent/40"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

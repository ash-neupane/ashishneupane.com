import type { Role } from "@/data/resume";

export function RoleCard({ role }: { role: Role }) {
  return (
    <article className="rounded-xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{role.title}</h3>
          <p className="text-sm text-accent">{role.company}</p>
        </div>
        <time className="shrink-0 text-sm text-muted">{role.period}</time>
      </div>
      <ul className="mb-4 space-y-2">
        {role.bullets.map((bullet) => (
          <li
            key={bullet}
            className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent/40"
          >
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {role.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-accent-subtle/70 px-2 py-0.5 text-xs font-medium text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

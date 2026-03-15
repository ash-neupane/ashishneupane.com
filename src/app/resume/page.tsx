import type { Metadata } from "next";
import { EXPERIENCE, EDUCATION } from "@/data/resume";
import { Section } from "@/components/section";
import { RoleCard } from "@/components/role-card";

export const metadata: Metadata = {
  title: "Resume — Ashish Neupane",
  description: "Professional experience, education, and technical roles.",
};

export default function ResumePage() {
  return (
    <div className="space-y-20">
      <Section title="Experience">
        <div className="space-y-6">
          {EXPERIENCE.map((role, i) => (
            <div key={`${role.company}-${role.title}`} className="relative sm:pl-8">
              {i < EXPERIENCE.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-[3px] top-3 hidden h-full w-px bg-gradient-to-b from-accent/30 to-accent/5 sm:block"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute left-0 top-3 hidden h-[7px] w-[7px] rounded-full border-2 border-accent/60 bg-surface sm:block"
              />
              <RoleCard role={role} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        {EDUCATION.map((edu) => (
          <div
            key={edu.school}
            className="rounded-xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm"
          >
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-accent">{edu.school}</p>
              </div>
              <time className="shrink-0 text-sm text-muted">{edu.period}</time>
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
      </Section>
    </div>
  );
}

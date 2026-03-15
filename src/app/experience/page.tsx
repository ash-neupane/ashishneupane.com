import type { Metadata } from "next";
import { EXPERIENCE } from "@/data/resume";
import { Section } from "@/components/section";
import { RoleCard } from "@/components/role-card";

export const metadata: Metadata = {
  title: "Experience — Ashish Neupane",
  description: "Professional experience and technical roles.",
};

export default function ExperiencePage() {
  return (
    <Section title="Experience">
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent sm:block"
        />
        {EXPERIENCE.map((role) => (
          <div key={`${role.company}-${role.title}`} className="sm:pl-8">
            {/* Timeline dot */}
            <div
              aria-hidden="true"
              className="absolute left-0 hidden h-2 w-2 -translate-x-[3.5px] translate-y-3 rounded-full bg-accent/60 sm:block"
            />
            <RoleCard role={role} />
          </div>
        ))}
      </div>
    </Section>
  );
}

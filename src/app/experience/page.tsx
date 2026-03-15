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
      <div className="space-y-6">
        {EXPERIENCE.map((role, i) => (
          <div key={`${role.company}-${role.title}`} className="relative sm:pl-8">
            {/* Timeline line — spans from this card to the next */}
            {i < EXPERIENCE.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute left-[3px] top-3 hidden h-full w-px bg-gradient-to-b from-accent/30 to-accent/5 sm:block"
              />
            )}
            {/* Timeline dot */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-3 hidden h-[7px] w-[7px] rounded-full border-2 border-accent/60 bg-surface sm:block"
            />
            <RoleCard role={role} />
          </div>
        ))}
      </div>
    </Section>
  );
}

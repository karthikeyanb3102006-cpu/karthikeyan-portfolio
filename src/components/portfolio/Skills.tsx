import {
  Braces,
  Brain,
  Clock,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Handshake,
  Languages as LanguagesIcon,
  Layout,
  MessageSquare,
  Palette,
  Puzzle,
  Repeat,
  Smartphone,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { languages, skillGroups, softSkills } from "@/data/profile";

const skillIcons: Record<string, LucideIcon> = {
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: Braces,
  "Responsive Web Design": Smartphone,
  Python: Terminal,
  Java: Code2,
  MySQL: Database,
  "Git & GitHub": GitBranch,
  "Basic UI/UX Design": Layout,
};

const softIcons: Record<string, LucideIcon> = {
  "Problem Solving": Puzzle,
  "Quick Learner": Brain,
  "Teamwork & Collaboration": Handshake,
  Communication: MessageSquare,
  "Time Management": Clock,
  Adaptability: Repeat,
};

export function TechnicalSkills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools and technologies I work with"
          description="Organized by category — languages, databases, tools and design."
        />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <Reveal delay={gi * 0.05}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                    {group.category}
                  </h3>
                  <span className="h-px flex-1 bg-border" />
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item, i) => {
                  const Icon = skillIcons[item] ?? Code2;
                  return (
                    <Reveal key={item} delay={i * 0.06}>
                      <div className="card-hover glass group h-full rounded-2xl p-5">
                        <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                          <Icon className="size-5" />
                        </span>
                        <h4 className="mt-4 text-sm font-semibold sm:text-base">{item}</h4>
                        <p className="mt-1 text-xs text-muted-foreground">{group.category}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoftSkills() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Soft Skills"
          title="Strengths I bring to a team"
          description="How I work with people, problems and deadlines."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s, i) => {
            const Icon = softIcons[s] ?? Puzzle;
            return (
              <Reveal key={s} delay={i * 0.07}>
                <div className="card-hover glass group h-full rounded-2xl bg-gradient-to-br from-transparent to-transparent p-6 transition-colors hover:from-primary/10 hover:to-cyan/5">
                  <span className="grid size-11 place-items-center rounded-xl bg-cyan/12 text-cyan transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{s}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  return (
    <section className="relative px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Languages" title="Languages I speak" />
        <div className="mx-auto grid max-w-lg gap-4 sm:grid-cols-2">
          {languages.map((l, i) => (
            <Reveal key={l} delay={i * 0.08}>
              <div className="card-hover glass flex items-center gap-3 rounded-2xl p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                  <LanguagesIcon className="size-5" />
                </span>
                <span className="text-base font-semibold">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

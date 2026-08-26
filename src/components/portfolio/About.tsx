import { GraduationCap, Code2, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const cards = [
  { icon: GraduationCap, title: "B.Sc. IT Student", sub: "2024 – 2027" },
  { icon: Code2, title: "Aspiring IT & Web Developer", sub: "Frontend • Programming • Databases" },
  { icon: Sparkles, title: "AI Dashboard Project", sub: "React.js · Node.js · AI APIs" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A student focused on building useful things"
          description="Getting to know the person behind the code."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I am <span className="text-foreground">Karthikeyan.B</span>, a B.Sc. Information
              Technology student at Sri Ramakrishna College of Arts and Sciences with a strong
              interest in technology, programming and web development.
            </p>
            <p>
              Motivated and hardworking, I am seeking a position where I can apply my skills, grow
              within the organization and contribute to team success — while building digital
              solutions that are genuinely useful to people.
            </p>
            <p>
              My current focus is on strengthening frontend fundamentals, writing clean and readable
              code, and turning ideas into responsive, accessible interfaces.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="card-hover glass flex items-start gap-4 rounded-2xl p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

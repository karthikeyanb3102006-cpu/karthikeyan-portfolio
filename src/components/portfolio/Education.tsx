import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { education } from "@/data/profile";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          description="From school to an Information Technology degree."
        />

        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-border sm:left-5" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-3 w-px bg-[image:var(--gradient-accent)] sm:left-5"
          />

          <div className="space-y-8">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute top-6 -left-[1.85rem] grid size-6 place-items-center rounded-full border border-primary/50 bg-background text-primary sm:-left-[2.6rem]">
                    <GraduationCap className="size-3.5" />
                  </span>
                  <div className="card-hover glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                        {e.period}
                      </span>
                      <span className="text-xs text-muted-foreground">{e.score}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
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

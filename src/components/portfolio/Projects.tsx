import { motion } from "motion/react";
import {
  CheckCircle2,
  CloudSun,
  ExternalLink,
  Github,
  Home,
  LayoutGrid,
  ListTodo,
  Moon,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile, project, secondProject } from "@/data/profile";


function DashboardMockup() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-4 sm:p-5" aria-hidden>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-cyan/60" />
          <span className="size-2.5 rounded-full bg-primary/70" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
          <Moon className="size-3" /> Theme
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-surface/60 p-3"
        >
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-primary">
            <ListTodo className="size-3.5" /> Today's tasks
          </p>
          <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground">
            {["Review DBMS notes", "Build portfolio section", "Practice Java arrays"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3 text-cyan" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="rounded-xl border border-border bg-surface/60 p-3"
        >
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-cyan">
            <CloudSun className="size-3.5" /> Weather
          </p>
          <p className="mt-2 font-display text-2xl font-bold">31°C</p>
          <p className="text-[11px] text-muted-foreground">Coimbatore · Partly cloudy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26 }}
          className="rounded-xl border border-primary/30 bg-primary/8 p-3 sm:col-span-2"
        >
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-primary">
            <Sparkles className="size-3.5" /> AI productivity insight
          </p>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            Concept preview: generated suggestions summarising the day and recommending a focus
            block.
          </p>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-border">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "68%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="h-full rounded-full bg-[image:var(--gradient-accent)]"
            />
          </div>
        </motion.div>

        <div className="rounded-xl border border-dashed border-border p-3 text-[11px] text-muted-foreground sm:col-span-2">
          <span className="inline-flex items-center gap-1.5">
            <LayoutGrid className="size-3.5" /> Modular widgets — conceptual UI preview, not a
            screenshot
          </span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured project"
          description="A personalized dashboard powered by AI APIs."
        />

        <Reveal>
          <article className="card-hover glass overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="size-3.5" /> Featured
                </span>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan/30 bg-cyan/8 px-3 py-1 text-xs font-medium text-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={profile.links.projectDemo || undefined}
                    aria-disabled={!profile.links.projectDemo}
                    title={profile.links.projectDemo ? "Open project" : "Link to be added"}
                    className={`inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] ${
                      profile.links.projectDemo ? "" : "opacity-60"
                    }`}
                  >
                    <ExternalLink className="size-4" /> View Project
                  </a>
                  <a
                    href={profile.links.projectRepo || undefined}
                    aria-disabled={!profile.links.projectRepo}
                    title={profile.links.projectRepo ? "Open repository" : "Link to be added"}
                    className={`inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 ${
                      profile.links.projectRepo ? "" : "opacity-60"
                    }`}
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                </div>
              </div>

              <DashboardMockup />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.features.map((f, i) => (
                <Reveal key={f} delay={i * 0.05}>
                  <div className="rounded-xl border border-border bg-surface/40 p-4 text-sm transition-colors hover:border-primary/40">
                    <CheckCircle2 className="mb-2 size-4 text-cyan" />
                    {f}
                  </div>
                </Reveal>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

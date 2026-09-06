import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-4xl">
      <div className="flex items-center gap-4 text-[10px] font-semibold tracking-[0.28em] text-primary uppercase">
        <span className="h-px w-10 bg-primary/60" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-5xl leading-none font-normal sm:text-7xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </Reveal>
  );
}

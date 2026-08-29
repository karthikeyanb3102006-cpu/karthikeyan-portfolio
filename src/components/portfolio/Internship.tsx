import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BadgeCheck, Briefcase, CalendarDays, MapPin, X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { internship } from "@/data/profile";
import certificate from "@/assets/internship-certificate.png.asset.json";

export function Internship() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="internship" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Internship"
          title="Industry training experience"
          description="Hands-on web development internship at INITZ Technologies, Coimbatore."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="card-hover glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">{internship.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{internship.company}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                  <CalendarDays className="size-3.5 text-primary" />
                  {internship.period}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                  <MapPin className="size-3.5 text-primary" />
                  {internship.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                  <BadgeCheck className="size-3.5 text-primary" />
                  Certified
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {internship.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <button
              onClick={() => setShowCert(true)}
              className="card-hover glass group block w-full overflow-hidden rounded-2xl text-left"
              aria-label="View internship certificate"
            >
              <img
                src={certificate.url}
                alt="Web Development internship completion certificate from INITZ Technologies"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium">Internship Certificate</span>
                <span className="text-xs text-primary transition-transform duration-300 group-hover:translate-x-1">
                  View full →
                </span>
              </div>
            </button>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {showCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-background/85 p-4 backdrop-blur-sm"
            onClick={() => setShowCert(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Internship certificate"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative max-h-[85vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCert(false)}
                aria-label="Close certificate"
                className="glass absolute -top-3 -right-3 z-10 grid size-9 place-items-center rounded-full"
              >
                <X className="size-4" />
              </button>
              <img
                src={certificate.url}
                alt="Web Development internship completion certificate from INITZ Technologies"
                className="max-h-[85vh] w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

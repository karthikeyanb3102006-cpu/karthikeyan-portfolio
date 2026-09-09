import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Download, Github, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import profilePhoto from "@/assets/profile.jpg.asset.json";

const phrases = [
  "Aspiring IT & Web Developer",
  "B.Sc. Information Technology Student",
  "Frontend & Problem Solving Enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]!);
      return;
    }
    const full = phrases[i]!;
    const delay = deleting ? 35 : text === full ? 1600 : 65;
    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((v) => (v + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-primary">
      {text}
      <span className="animate-caret ml-0.5 inline-block w-[2px] bg-primary align-middle text-transparent">
        |
      </span>
    </span>
  );
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="film-grain relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24 pb-20 sm:px-8 lg:px-12">
      <div aria-hidden className="absolute inset-x-0 top-[22%] whitespace-nowrap font-display text-[31vw] leading-none text-foreground/[0.025] uppercase">Developer</div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10 lg:pt-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-muted-foreground uppercase"
          >
            <span className="h-px w-10 bg-primary/70" /> Scene 01 / Introduction
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.62, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-7xl leading-[0.84] font-normal uppercase sm:text-8xl lg:text-[9.5rem]"
          >
            KARTHIKEYAN<span className="text-primary">.B</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.74, duration: 0.6 }}
            className="mt-7 min-h-8 text-sm font-medium tracking-[0.12em] uppercase sm:text-base"
          >
            <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.84, duration: 0.6 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Motivated and hardworking, I am looking for a role where I can apply my skills in web
            development and programming, keep learning, and contribute to team success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.94, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 text-xs font-bold tracking-[0.12em] text-primary-foreground uppercase transition-all hover:gap-5"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={profile.resumeUrl}
              download="Karthikeyan-B-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >

              <Download className="size-4" />
              Resume
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikeyan.b3102006@gmail.com&su=Job / Internship Opportunity for Karthikeyan.B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-4" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Mail className="size-3.5" /> {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs self-end sm:max-w-md"
        >
          <div className="absolute inset-x-[15%] bottom-0 h-2/3 bg-primary/15 blur-[70px]" />
          <div className="relative aspect-[4/5] overflow-hidden border-x border-t border-border bg-surface">
            <img
              src={profilePhoto.url}
              alt="Karthikeyan.B"
              className="h-full w-full object-cover grayscale-[20%] contrast-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_35%)]" />
          </div>
          <div className="absolute right-0 bottom-5 border-l border-primary pl-4 text-right text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            B.Sc. IT<br/><span className="text-primary">2024—2027</span>
          </div>
          <a href={profile.links.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"><Github className="size-4" /></a>
        </motion.div>
      </div>
      <button onClick={() => scrollTo("about")} aria-label="Scroll to about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] tracking-[0.25em] text-muted-foreground uppercase sm:flex"><span>Scroll to explore</span><ArrowDown className="size-4 animate-bounce text-primary" /></button>
    </section>
  );
}

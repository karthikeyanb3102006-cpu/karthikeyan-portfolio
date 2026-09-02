import { motion } from "motion/react";
import { ArrowRight, Eye, Mail, MapPin } from "lucide-react";
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
    <span className="text-cyan">
      {text}
      <span className="animate-caret ml-0.5 inline-block w-[2px] bg-cyan align-middle text-transparent">
        |
      </span>
    </span>
  );
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-cyan" />
            Open to internships & fresher IT roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.62, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl"
          >
            KARTHIKEYAN<span className="text-gradient">.B</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.74, duration: 0.6 }}
            className="mt-4 font-display text-lg font-medium sm:text-xl"
          >
            <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.84, duration: 0.6 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Motivated and hardworking, I am looking for a role where I can apply my skills in web
            development and programming, keep learning, and contribute to team success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.94, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-accent)] transition-transform hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
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
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-accent)] opacity-20 blur-3xl" />
          <div className="glass relative aspect-square overflow-hidden rounded-[2rem] p-1">
            <img
              src={profilePhoto.url}
              alt="Karthikeyan.B"
              className="h-full w-full rounded-[1.75rem] object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs whitespace-nowrap">
            <Eye className="size-3.5 text-cyan" /> B.Sc. IT · 2024–2027
          </div>
        </motion.div>
      </div>
    </section>
  );
}

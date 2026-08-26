import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[image:var(--gradient-accent)]"
    />
  );
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="glass fixed right-4 bottom-4 z-50 rounded-full p-3 text-primary transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      setBig(!!t?.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <motion.div
        className="absolute size-2 rounded-full bg-primary"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 900, damping: 40, mass: 0.2 }}
      />
      <motion.div
        className="absolute rounded-full border border-primary/40 bg-primary/5"
        animate={{
          x: pos.x - (big ? 26 : 16),
          y: pos.y - (big ? 26 : 16),
          width: big ? 52 : 32,
          height: big ? 52 : 32,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      />
    </div>
  );
}

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[80] grid place-items-center bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-display text-6xl font-bold"
        >
          KB
        </motion.div>
        <div className="mx-auto mt-5 h-0.5 w-32 overflow-hidden rounded-full bg-border">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="h-full w-full bg-[image:var(--gradient-accent)]"
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Karthikeyan.B
        </p>
      </div>
    </motion.div>
  );
}

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg animate-grid-drift absolute inset-0 opacity-40" />
      <div className="animate-float-slow absolute -top-32 -left-24 size-[26rem] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-float-slow absolute top-1/3 -right-28 size-[24rem] rounded-full bg-cyan/15 blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--background)_85%)]" />
    </div>
  );
}

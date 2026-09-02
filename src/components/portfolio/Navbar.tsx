import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const hireMailto = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Job / Internship Opportunity for Karthikeyan.B",
)}&body=${encodeURIComponent(
  "Hi Karthikeyan,\n\nI came across your portfolio and would like to discuss an opportunity with you.\n\nRole: \nCompany: \nDetails: \n\nBest regards,\n",
)}`;

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "internship", label: "Internship" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b py-2" : "border-b border-transparent py-4"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-bold tracking-tight"
          aria-label="Go to top"
        >
          <span className="text-gradient">KB</span>
          <span className="ml-2 hidden text-sm font-medium text-muted-foreground sm:inline">
            Karthikeyan.B
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                aria-current={active === l.id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={hireMailto}
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg border border-border p-2 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <button
                  onClick={() => go(l.id)}
                  className={`block w-full px-5 py-3 text-left text-sm ${
                    active === l.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

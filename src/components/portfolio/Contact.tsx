import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/profile";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email address.";
    if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // No email service is connected yet. Connect a backend/email provider here later.
    setSent(true);
    setValues({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const field =
    "w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-primary/15";

  const details = [
    { icon: User, label: "Name", value: profile.name },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  ];

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Open to internships, placements and fresher IT roles."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="card-hover glass flex items-center gap-4 rounded-2xl p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <d.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="block truncate text-sm hover:text-primary">
                      {d.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className={field}
                    placeholder="Your name"
                    value={values.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={field}
                    placeholder="you@example.com"
                    value={values.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={field}
                    placeholder="How can I help?"
                    value={values.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
                >
                  <Send className="size-4" /> Send Message
                </button>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      role="status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-xl border border-cyan/30 bg-cyan/8 px-4 py-3 text-sm text-cyan"
                    >
                      <CheckCircle2 className="size-4" />
                      Thanks! Your message is validated. Email delivery isn't connected yet — please
                      reach me directly at {profile.email}.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

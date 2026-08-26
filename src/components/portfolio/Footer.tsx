import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold">
            Karthikeyan<span className="text-gradient">.B</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{profile.role}</p>
          <div className="mt-4 flex gap-2">
            {/* Add real profile URLs in src/data/profile.ts when available */}
            <span
              title="LinkedIn — link to be added"
              className="glass grid size-9 place-items-center rounded-lg text-muted-foreground opacity-60"
            >
              <Linkedin className="size-4" />
            </span>
            <span
              title="GitHub — link to be added"
              className="glass grid size-9 place-items-center rounded-lg text-muted-foreground opacity-60"
            >
              <Github className="size-4" />
            </span>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground sm:justify-self-end">
          <li className="flex items-center gap-2">
            <Mail className="size-4 shrink-0 text-primary" />
            <a href={`mailto:${profile.footerEmail}`} className="break-all hover:text-foreground">
              {profile.footerEmail}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="size-4 shrink-0 text-primary" />
            <a href={`tel:${profile.phone}`} className="hover:text-foreground">
              {profile.phone}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{profile.address}</span>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Karthikeyan.B. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 hover:text-foreground"
        >
          Back to Top <ArrowUp className="size-3.5" />
        </button>
      </div>
    </footer>
  );
}

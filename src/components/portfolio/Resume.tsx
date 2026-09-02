import { Download, ExternalLink, FileText } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Resume"
          title="My resume"
          description="A clean, one-page summary of my education, internship, projects and skills."
        />

        <Reveal>
          <div className="glass rounded-2xl p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="size-4 text-primary" />
                Karthikeyan_B_Resume.pdf
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <ExternalLink className="size-4" />
                  Open in new tab
                </a>
                <a
                  href={profile.resumeUrl}
                  download=""
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" />
                  Download
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-background/40">
              <object
                data={`${profile.resumeUrl}#view=FitH`}
                type="application/pdf"
                className="h-[70vh] max-h-[900px] min-h-[420px] w-full"
                aria-label="Resume preview"
              >
                <div className="p-8 text-center text-sm text-muted-foreground">
                  Your browser can&apos;t display PDFs inline.{" "}
                  <a href={profile.resumeUrl} className="text-primary underline" download="">
                    Download the resume
                  </a>{" "}
                  instead.
                </div>
              </object>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

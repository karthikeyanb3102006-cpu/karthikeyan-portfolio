import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechnicalSkills, SoftSkills, Languages } from "@/components/portfolio/Skills";
import { Internship } from "@/components/portfolio/Internship";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import {
  Backdrop,
  CustomCursor,
  Preloader,
  ScrollProgress,
  ScrollToTop,
} from "@/components/portfolio/Effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karthikeyan.B | B.Sc. IT Student & Aspiring Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Karthikeyan.B — B.Sc. Information Technology student and aspiring IT & Web Developer. Frontend skills in HTML, CSS, JavaScript, React, plus Python, Java, and MySQL. Open to internships and fresher IT roles.",
      },
      { property: "og:title", content: "Karthikeyan.B | B.Sc. IT Student & Aspiring Web Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Karthikeyan.B — B.Sc. IT student and aspiring IT & Web Developer. Open to internships and fresher IT roles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://karthikeyan-portfolio-ai.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Karthikeyan.B | B.Sc. IT Student & Aspiring Web Developer",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Karthikeyan.B — B.Sc. IT student and aspiring IT & Web Developer.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://karthikeyan-portfolio-ai.lovable.app/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <SoftSkills />
        <Languages />
        <Internship />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

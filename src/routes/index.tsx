import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Braces,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { learningItems, navigation, profile, projects, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeevika Godachi — CSE Student & Java Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jeevika Godachi, a Computer Science Engineering student learning Java, software development, and problem-solving through practical projects.",
      },
      { property: "og:title", content: "Jeevika Godachi — Developer Portfolio" },
      {
        property: "og:description",
        content: "Java practice, programming projects, and the learning journey of CSE student Jeevika Godachi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="mb-10 grid gap-4 border-t border-border pt-5 md:grid-cols-[1fr_2fr] md:mb-16">
      <p className="text-xs font-bold uppercase text-primary">{number} / {label}</p>
      <h2 className="max-w-3xl text-4xl font-black leading-[0.98] text-foreground sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-foreground p-7 text-background md:min-h-[28rem] md:p-9">
        <div className="absolute -right-12 top-16 size-56 rotate-12 rounded-lg border-[18px] border-primary opacity-90 transition-transform duration-500 motion-safe:group-hover:rotate-6" aria-hidden="true" />
        <div className="absolute bottom-10 right-20 size-24 rounded-full bg-primary" aria-hidden="true" />
        <span className="relative text-xs font-bold uppercase text-primary">Featured / {project.number}</span>
        <p className="relative max-w-xs text-5xl font-black leading-none sm:text-6xl">{project.title.split(" ").map((word) => <span className="block" key={word}>{word}</span>)}</p>
      </div>
      <div className="flex flex-col justify-between p-7 md:p-9">
        <div>
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase text-primary">{project.type}</span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{project.status}</span>
          </div>
          <h3 className="text-3xl font-black leading-tight text-card-foreground">{project.title}</h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{project.description}</p>
        </div>
        <ul className="mt-10 border-t border-border" aria-label="Details to be added">
          {project.details.map((detail) => (
            <li className="flex items-center justify-between border-b border-border py-3 text-sm font-semibold" key={detail}>
              {detail}<ArrowDownRight className="size-4 text-primary" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3 font-black focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-sm text-primary-foreground">JG</span>
            <span className="hidden sm:inline">Jeevika Godachi</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navigation.map((item) => <a className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring" href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">
            {navigation.map((item) => <a className="block border-b border-border py-3 text-lg font-bold" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="scroll-mt-24 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-center justify-between border-b border-border pb-4 text-xs font-bold uppercase text-muted-foreground">
              <span>Portfolio / 2026</span><span>Learning through building</span>
            </div>
            <div className="grid items-end gap-10 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <p className="mb-5 flex items-center gap-2 text-sm font-bold text-primary"><span className="size-2 rounded-full bg-primary" /> Hello, I’m</p>
                <h1 className="text-[clamp(4rem,10vw,8.8rem)] font-black leading-[0.82] text-foreground">
                  Jeevika<br /><span className="text-primary">Godachi.</span>
                </h1>
              </div>
              <div className="lg:pb-2">
                <p className="text-xl font-black leading-tight sm:text-2xl">CSE Student <span className="text-primary">/</span><br />Java & Software Development</p>
                <p className="mt-5 max-w-md leading-7 text-muted-foreground">I’m developing my programming skills through Java practice, problem-solving, and practical projects—one concept at a time.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild><a href="#projects">View my projects <ArrowRight className="size-4" /></a></Button>
                  <Button asChild variant="outline"><a href={profile.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a></Button>
                  <Button asChild variant="dark"><a href={`mailto:${profile.email}`}><Mail className="size-4" /> Contact me</a></Button>
                </div>
                <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline decoration-primary decoration-2 underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> Connect on LinkedIn <ExternalLink className="size-3" /></a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-2" aria-hidden="true">
              <div className="h-2 bg-primary" /><div className="h-2 bg-foreground" /><div className="h-2 bg-accent" />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-accent px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="01" label="About" title="Curious by nature. Consistent by practice." />
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <p className="text-sm font-bold uppercase text-primary">My approach</p>
              <div className="max-w-4xl">
                <p className="text-2xl font-semibold leading-snug sm:text-3xl">I’m a Computer Science Engineering student interested in Java and software development. I learn best by writing programs, working through problems, and turning ideas into small, practical projects.</p>
                <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">Right now, my focus is strengthening programming fundamentals, understanding how solutions work, and documenting what I learn with honesty and clarity.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="02" label="Projects" title="Work in progress, shown honestly." />
            <div className="space-y-6">{projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-foreground px-5 py-20 text-background sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 border-t border-dark-border pt-5 md:mb-16"><p className="text-xs font-bold uppercase text-primary">03 / Skills</p><h2 className="mt-4 max-w-4xl text-4xl font-black leading-none sm:text-5xl md:text-6xl">The tools I’m learning to think with.</h2></div>
            <div className="grid gap-px overflow-hidden rounded-lg bg-dark-border md:grid-cols-3">
              {skillGroups.map((group) => (
                <article className="min-h-64 bg-foreground p-7 md:p-9" key={group.title}>
                  <span className="text-xs font-bold text-primary">{group.number}</span>
                  <h3 className="mt-6 text-2xl font-black">{group.title}</h3>
                  <ul className="mt-8 space-y-3">{group.skills.map((skill) => <li className="flex items-center gap-3 text-background-muted" key={skill}><Braces className="size-4 text-primary" />{skill}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-background-muted">A focused starting point—not a claim of advanced proficiency.</p>
          </div>
        </section>

        <section id="learning" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="04" label="Learning" title="Progress is a practice." />
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-10"><BookOpen className="size-8" /><p className="mt-16 text-3xl font-black leading-tight">Currently learning, building, and improving the fundamentals.</p></div>
              <ol className="border-t border-border">
                {learningItems.map((item, index) => <li className="flex items-center gap-5 border-b border-border py-6 text-xl font-bold sm:text-2xl" key={item}><span className="text-sm text-primary">0{index + 1}</span>{item}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section id="notes" className="bg-accent px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="05" label="Engineering notes" title="Notes will begin here." />
            <div className="grid gap-5 border-y border-border py-8 md:grid-cols-[1fr_2fr] md:py-12">
              <p className="text-sm font-bold uppercase text-primary">No published notes yet</p>
              <p className="max-w-2xl text-xl leading-relaxed">This space is reserved for concepts explained in my own words, debugging lessons, and decisions from real projects—once they are ready to share.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-primary px-5 py-20 text-primary-foreground sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase">06 / Contact</p>
            <div className="mt-7 grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              <h2 className="text-5xl font-black leading-[0.95] sm:text-7xl md:text-8xl">Let’s talk about code, ideas, and learning.</h2>
              <div>
                <p className="mb-6 leading-7">Open to conversations about projects, collaboration, and software development.</p>
                <Button asChild variant="dark"><a href={`mailto:${profile.email}`}><Mail className="size-4" /> Send an email</a></Button>
                <div className="mt-8 flex gap-5">
                  <a className="font-bold underline underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="font-bold underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground px-5 py-8 text-background sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm sm:flex-row sm:items-center">
          <p className="font-bold">© {year} {profile.name}</p>
          <div className="flex flex-wrap gap-5">{navigation.slice(0, 4).map((item) => <a className="text-background-muted hover:text-primary" href={item.href} key={item.href}>{item.label}</a>)}</div>
        </div>
      </footer>
    </div>
  );
}

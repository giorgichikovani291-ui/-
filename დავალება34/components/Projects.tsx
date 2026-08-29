import type { Project } from "@/types";
import ProjectThumb from "./ProjectThumb";
import { EyeIcon, CodeIcon } from "./icons";

const projects: Project[] = [
  {
    id: "weatherly",
    title: "Weatherly — Weather Dashboard",
    tags: ["React", "TypeScript", "Tailwind"],
    colorFrom: "#1e293b",
    colorTo: "#6366f1",
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "scoot",
    title: "Scoot — Scooter Sharing Site",
    tags: ["React", "TypeScript", "Tailwind"],
    colorFrom: "#0f2e1f",
    colorTo: "#4ee1a0",
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "library-manager",
    title: "Library Manager Desktop App",
    tags: ["Python", "PyQt5", "SQLite"],
    colorFrom: "#3f2d1c",
    colorTo: "#d69a4e",
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "rockstar-redesign",
    title: "Rockstar Games — Redesign",
    tags: ["React", "TypeScript", "Tailwind"],
    colorFrom: "#1a0000",
    colorTo: "#b91c1c",
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "devfinder",
    title: "DevFinder — GitHub Search",
    tags: ["React", "TypeScript", "GitHub API"],
    colorFrom: "#0f172a",
    colorTo: "#3b82f6",
    demoHref: "#",
    codeHref: "#",
  },
  {
    id: "entertainment-app",
    title: "Entertainment Web App",
    tags: ["React", "TypeScript", "TVMaze API"],
    colorFrom: "#2e1065",
    colorTo: "#db2777",
    demoHref: "#",
    codeHref: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 md:px-10 lg:px-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-heading-l font-bold">Projects</h2>
        <a
          href="#contact"
          className="hidden border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent sm:inline-block"
        >
          Contact me
        </a>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="relative">
              <ProjectThumb
                colorFrom={project.colorFrom}
                colorTo={project.colorTo}
                title={project.title}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                <a
                  href={project.demoHref}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent"
                >
                  <EyeIcon /> View project
                </a>
                <a
                  href={project.codeHref}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-accent"
                >
                  <CodeIcon /> View code
                </a>
              </div>
            </div>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">
              {project.title}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted/60">
              {project.tags.join("   ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function ProjectEntry({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal border-b border-line py-7"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-sign text-xl font-extrabold uppercase tracking-tight text-ink">{project.title}</h3>
        {project.pending && (
          <span className="bg-paper-dim px-2 py-0.5 font-sign text-xs font-bold uppercase tracking-wide text-ink-muted">
            Details pending
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
      <div className="mt-3 flex items-center gap-4">
        <p className="font-sign text-sm font-semibold text-blue">{project.tags.join(" · ")}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-sign text-sm font-bold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-amber"
          >
            View
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-line px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading zone="C" title="Projects" />
        <div>
          {projects.map((project, i) => (
            <ProjectEntry key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

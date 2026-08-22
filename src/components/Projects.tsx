import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal flex flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-muted"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink">{project.title}</h3>
        {project.pending && (
          <span className="shrink-0 rounded-full border border-amber/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-amber">
            Details pending
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted">
            {tag}
          </span>
        ))}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-phosphor hover:underline"
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
    <section id="projects" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="// BUILD LOG" title="Selected projects" />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function ProjectEntry({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal border-t border-line py-8 first:border-t-0 first:pt-0"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
        {project.pending && (
          <span className="text-xs italic text-ink-muted">Details pending</span>
        )}
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{project.summary}</p>
      <div className="mt-3 flex items-center gap-4">
        <p className="text-sm text-ink-muted">{project.tags.join(" · ")}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-accent"
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
    <section id="projects" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div>
          {projects.map((project, i) => (
            <ProjectEntry key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

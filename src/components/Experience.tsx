import { experience } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function LogEntry({ entry, index }: { entry: (typeof experience)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal grid gap-4 border-t border-line py-8 first:border-t-0 md:grid-cols-[200px_1fr] md:gap-8"
      style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <p className="text-ink">
          {entry.start} <span className="text-line">—</span> {entry.end}
        </p>
        <p className="mt-1">{entry.duration}</p>
        <p className="mt-1">{entry.location}</p>
      </div>

      <div>
        <h3 className="font-display text-xl font-bold text-ink">{entry.role}</h3>
        <p className="mt-0.5 font-mono text-sm text-phosphor">{entry.company}</p>
        <ul className="mt-4 space-y-2.5">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-line" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="// SYSTEMS LOG" title="Where I've worked" />
        <div>
          {experience.map((entry, i) => (
            <LogEntry key={entry.company + entry.role} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

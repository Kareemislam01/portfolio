import { experience } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function LogEntry({ entry, index }: { entry: (typeof experience)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal relative py-9 pl-9 first:pt-0"
      style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
    >
      <span className="absolute left-0 top-[calc(2.25rem+0.4rem)] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-paper" />
      <p className="font-display text-sm text-ink-muted">
        {entry.start} <span className="mx-1">–</span> {entry.end}
        <span className="mx-2 text-line">·</span>
        {entry.location}
      </p>
      <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{entry.role}</h3>
      <p className="italic text-ink-muted">{entry.company}</p>
      <ul className="mt-4 space-y-2.5">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="text-[15px] leading-relaxed text-ink-muted">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="relative border-l border-line pl-0">
          {experience.map((entry, i) => (
            <LogEntry key={entry.company + entry.role} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

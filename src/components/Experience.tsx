import { experience } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function BoardRow({ entry, index }: { entry: (typeof experience)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const current = entry.end === "Present";
  return (
    <div
      ref={ref}
      className="flip-row grid gap-x-4 gap-y-2 border-b border-line py-6 sm:grid-cols-[140px_1fr_auto] sm:items-baseline"
      style={{ transitionDelay: `${Math.min(index, 3) * 110}ms` }}
    >
      <p className="font-sign text-sm font-bold tabular-nums text-ink-muted">
        {entry.start} – {entry.end}
      </p>
      <div>
        <h3 className="font-sign text-xl font-extrabold uppercase tracking-tight text-ink">{entry.role}</h3>
        <p className="font-sign text-sm font-semibold text-blue">
          {entry.company} <span className="font-normal text-ink-muted">· {entry.location}</span>
        </p>
        <ul className="mt-3 space-y-2">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="text-sm leading-relaxed text-ink-muted">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      {current && (
        <span className="h-fit bg-amber px-2.5 py-1 font-sign text-xs font-extrabold uppercase tracking-wide text-blue-deep sm:justify-self-end">
          Boarding now
        </span>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-paper-dim px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading zone="B" title="Experience" />
        <div>
          {experience.map((entry, i) => (
            <BoardRow key={entry.company + entry.role} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

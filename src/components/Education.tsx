import { education } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="// EDUCATION" title="Where it started" />
        <div
          ref={ref}
          className="reveal flex flex-col justify-between gap-3 rounded-lg border border-line bg-panel p-6 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-ink">{education.school}</h3>
            <p className="mt-1 text-muted">{education.degree}</p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:text-right">
            <p className="text-ink">
              {education.start} <span className="text-line">—</span> {education.end}
            </p>
            <p className="mt-1">{education.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

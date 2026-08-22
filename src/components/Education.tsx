import { education } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" className="border-b border-line px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading zone="E" title="Education" />
        <div
          ref={ref}
          className="reveal flex flex-col justify-between gap-2 border-t-2 border-blue pt-5 sm:flex-row sm:items-baseline"
        >
          <div>
            <h3 className="font-sign text-xl font-extrabold uppercase tracking-tight text-ink">{education.school}</h3>
            <p className="text-ink-muted">{education.degree}</p>
          </div>
          <p className="font-sign text-sm font-bold tabular-nums text-ink-muted sm:text-right">
            {education.start} – {education.end}
            <br />
            {education.location}
          </p>
        </div>
      </div>
    </section>
  );
}

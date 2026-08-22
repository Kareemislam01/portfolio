import { education } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Education" title="Where it started" />
        <div
          ref={ref}
          className="reveal flex flex-col justify-between gap-2 border-t border-line pt-6 sm:flex-row sm:items-baseline"
        >
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{education.school}</h3>
            <p className="italic text-ink-muted">{education.degree}</p>
          </div>
          <p className="text-sm text-ink-muted sm:text-right">
            {education.start} – {education.end}
            <br />
            {education.location}
          </p>
        </div>
      </div>
    </section>
  );
}

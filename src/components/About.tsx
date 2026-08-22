import { about } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="border-b border-line px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading zone="A" title="About" />
        <div ref={ref} className="reveal space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

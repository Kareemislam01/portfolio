import { about } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={about.eyebrow} title="A little about my path" />
        <div ref={ref} className="reveal space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

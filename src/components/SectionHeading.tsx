import { useReveal } from "../hooks/useReveal";

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-10 md:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

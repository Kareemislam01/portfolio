import { useReveal } from "../hooks/useReveal";

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-10 md:mb-14">
      <p className="font-display text-sm font-medium uppercase tracking-[0.14em] text-ink-muted">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

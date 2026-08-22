import { useReveal } from "../hooks/useReveal";

export function SectionHeading({ zone, title }: { zone: string; title: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-10 flex items-center gap-4 md:mb-14">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue font-sign text-lg font-extrabold text-on-blue">
        {zone}
      </span>
      <h2 className="font-sign text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

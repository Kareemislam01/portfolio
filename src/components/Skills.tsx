import { skillGroups, certifications } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function SkillPanel({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal rounded-lg border border-line bg-panel p-6"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">{group.label}</p>
      <ul className="mt-4 space-y-3">
        {group.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3 border-t border-line pt-3 first:border-t-0 first:pt-0">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-phosphor" aria-hidden />
            <span className="font-mono text-[13px] text-ink">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-line px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="// INSTRUMENTATION" title="What I work with" />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillPanel key={group.label} group={group} index={i} />
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert.name}
                className="rounded-full border border-line px-4 py-2 font-mono text-[11px] text-muted"
              >
                {cert.name} · {cert.issuer}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

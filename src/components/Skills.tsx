import { skillGroups, certifications } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function SkillColumn({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      <p className="border-b-2 border-blue pb-2 font-sign text-sm font-extrabold uppercase tracking-wide text-ink">
        {group.label}
      </p>
      <ul className="mt-4 space-y-2.5">
        {group.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm text-ink">
            <span className="h-1.5 w-1.5 shrink-0 bg-amber" aria-hidden />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-line px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading zone="D" title="Skills" />
        <div className="grid gap-10 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillColumn key={group.label} group={group} index={i} />
          ))}
        </div>

        {certifications.length > 0 && (
          <p className="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
            {certifications.map((cert) => (
              <span key={cert.name}>
                {cert.name} — {cert.issuer}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

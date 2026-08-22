import { skillGroups, certifications } from "../data";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "../hooks/useReveal";

function SkillColumn({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      <p className="font-display text-sm font-medium uppercase tracking-[0.1em] text-ink-muted">{group.label}</p>
      <ul className="mt-4 space-y-2.5">
        {group.skills.map((skill) => (
          <li key={skill} className="text-[15px] text-ink">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="grid gap-10 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillColumn key={group.label} group={group} index={i} />
          ))}
        </div>

        {certifications.length > 0 && (
          <p className="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
            {certifications.map((cert) => (
              <span key={cert.name}>
                {cert.name} <span className="italic">— {cert.issuer}</span>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

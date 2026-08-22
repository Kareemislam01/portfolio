import { Mail } from "lucide-react";
import { profile, domains } from "../data";
import { useReveal } from "../hooks/useReveal";
import { Pictogram } from "./icons/Pictogram";
import { SignArrow } from "./icons/SignArrow";

function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-blue px-6 pb-16 pt-14 text-on-blue md:px-10 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-5xl">
        <RevealBlock>
          <p className="font-sign text-sm font-bold uppercase tracking-[0.16em] text-amber">
            Directory · {profile.role} · Cairo, Egypt
          </p>
        </RevealBlock>

        <RevealBlock delay={90}>
          <h1 className="mt-5 max-w-3xl font-sign text-5xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-7xl">
            Not one <span className="mark text-amber">gate.</span>
            <br />
            Every terminal.
          </h1>
        </RevealBlock>

        <RevealBlock delay={170}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-blue-muted">
            I move across data analysis, front-end interfaces, and core software engineering —
            currently building AI-powered industrial automation at Siemens.
          </p>
        </RevealBlock>

        <RevealBlock delay={250}>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-amber px-6 py-3.5 font-sign text-sm font-bold uppercase tracking-wide text-blue-deep transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Email me
            </a>
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 font-sign text-sm font-bold uppercase tracking-wide text-on-blue"
            >
              View experience
              <SignArrow direction="right" className="text-amber transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </RevealBlock>

        <RevealBlock delay={330} className="mt-14 border-t border-line-on-blue pt-10">
          <div className="flex flex-wrap items-start gap-10">
            {domains.map((d) => (
              <Pictogram key={d.code} name={d.name} code={d.code} label={d.label} inverted />
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

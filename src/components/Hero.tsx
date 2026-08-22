import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";
import { GrowthCurve } from "./GrowthCurve";

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
    <section id="top" className="relative overflow-hidden border-b border-line px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <GrowthCurve
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-[0.35] md:h-56"
        stroke="muted"
      />

      <div className="relative mx-auto max-w-3xl">
        <RevealBlock>
          <p className="font-display text-sm font-medium uppercase tracking-[0.14em] text-ink-muted">
            {profile.name} · {profile.role} · Cairo, Egypt
          </p>
        </RevealBlock>

        <RevealBlock delay={90}>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Range, <span className="mark">not a lane.</span>
          </h1>
        </RevealBlock>

        <RevealBlock delay={170}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            I move across data analysis, front-end interfaces, and core software engineering — currently
            building AI-powered industrial automation at Siemens. Consider this page a working paper: current,
            and still being revised.
          </p>
        </RevealBlock>

        <RevealBlock delay={250}>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-sm font-medium text-paper-raised transition-transform hover:-translate-y-0.5"
            >
              <Mail size={15} />
              Email me
            </a>
            <a
              href="#experience"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              View experience
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

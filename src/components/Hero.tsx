import { ArrowRight, Mail } from "lucide-react";
import { profile, domains, education } from "../data";
import { useReveal } from "../hooks/useReveal";

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
    <section id="top" className="relative overflow-hidden border-b border-line bg-grid px-6 pt-16 pb-20 md:px-16 md:pt-28 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,176,32,0.08),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-start md:gap-10">
        <div>
          <RevealBlock>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">// Portfolio — Kareem Mohamed</p>
          </RevealBlock>

          <RevealBlock delay={90}>
            <h1 className="mt-5 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Software, engineered
              <br />
              <span className="text-amber">properly.</span>
            </h1>
          </RevealBlock>

          <RevealBlock delay={170}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Computer Engineering graduate focused on software development and data analysis —
              building automation tooling, shaping data pipelines, and writing code meant to hold up
              in production.
            </p>
          </RevealBlock>

          <RevealBlock delay={250}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-amber px-5 py-3 font-mono text-[13px] font-medium uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
              >
                <Mail size={15} />
                Get in touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded border border-line px-5 py-3 font-mono text-[13px] uppercase tracking-wide text-ink transition-colors hover:border-muted"
              >
                View experience
                <ArrowRight size={15} />
              </a>
            </div>
          </RevealBlock>
        </div>

        <RevealBlock delay={200}>
          <div className="rounded-lg border border-line bg-panel p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">System Status</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phosphor opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-phosphor" />
              </span>
            </div>

            <dl className="mt-4 space-y-3 font-mono text-[12.5px]">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">ROLE</dt>
                <dd className="text-right text-ink">Software Developer · Data Analyst</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">LOCATION</dt>
                <dd className="text-right text-ink">{profile.location}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">EDUCATION</dt>
                <dd className="text-right text-ink">B.Eng, Concordia '25</dd>
              </div>
            </dl>

            <div className="mt-5 border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Domains</span>
              <ul className="mt-3 space-y-2.5">
                {domains.map((d) => (
                  <li key={d.label} className="flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        d.color === "amber" ? "bg-amber" : "bg-phosphor"
                      }`}
                    />
                    <span className="font-mono text-[12px] text-ink">{d.label}</span>
                    <span className="ml-auto truncate font-mono text-[11px] text-muted">{d.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 border-t border-line pt-3 font-mono text-[10.5px] text-muted">
              {education.school} · {education.start}–{education.end}
            </p>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

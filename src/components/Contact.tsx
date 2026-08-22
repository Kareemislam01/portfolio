import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-grid px-6 py-24 md:px-16 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">// CONTACT</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Let's build something reliable.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Open to conversations about software engineering, AI, and industrial systems roles — reach out directly.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded bg-amber px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:border-muted"
          >
            <LinkedinIcon size={16} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

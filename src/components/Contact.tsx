import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-medium uppercase tracking-[0.14em] text-ink-muted">Contact</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Let's <span className="mark">talk shop.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
          Open to conversations about software engineering, AI, and where this working paper goes next.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded bg-ink px-6 py-3.5 text-sm font-medium text-paper-raised transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-accent"
          >
            <LinkedinIcon size={15} />
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

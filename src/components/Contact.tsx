import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-blue px-6 py-20 text-on-blue md:px-10 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
        <p className="font-sign text-sm font-bold uppercase tracking-[0.16em] text-amber">Zone F · Contact</p>
        <h2 className="mt-4 font-sign text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Final <span className="mark text-amber">call.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-on-blue-muted">
          Open to conversations about software engineering, AI, and where this range goes next.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-amber px-6 py-3.5 font-sign text-sm font-bold uppercase tracking-wide text-blue-deep transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-sign text-sm font-bold uppercase tracking-wide text-on-blue"
          >
            <LinkedinIcon size={15} />
            LinkedIn
            <ArrowUpRight size={13} className="text-amber" />
          </a>
        </div>
      </div>
    </section>
  );
}

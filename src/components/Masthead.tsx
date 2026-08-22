import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { profile, nav } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Masthead() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">Kareem Mohamed</span>
          <span className="hidden font-body text-sm italic text-ink-muted sm:inline">Software Engineer</span>
        </a>

        <nav aria-label="Section navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 font-display text-[14px]">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative pb-1 transition-colors ${
                    active === item.id ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-accent" aria-hidden />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`mailto:${profile.email}`} aria-label="Email Kareem" className="text-ink-muted hover:text-accent">
            <Mail size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Kareem's LinkedIn"
            className="text-ink-muted hover:text-accent"
          >
            <LinkedinIcon size={17} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded border border-line text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-1 font-display text-[15px]">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-2 py-2.5 ${
                    active === item.id ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 border-t border-line pt-4">
            <a href={`mailto:${profile.email}`} aria-label="Email Kareem" className="text-ink-muted hover:text-accent">
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Kareem's LinkedIn"
              className="text-ink-muted hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

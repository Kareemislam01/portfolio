import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { profile, nav } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Masthead() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <header className="sticky top-0 z-40 bg-blue text-on-blue">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center bg-amber font-sign text-sm font-extrabold text-blue-deep">
            K
          </span>
          <span className="font-sign text-base font-bold tracking-tight">KAREEM MOHAMED</span>
        </a>

        <nav aria-label="Section navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 font-sign text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-1.5 border-b-2 px-3 py-1.5 transition-colors ${
                    active === item.id
                      ? "border-amber text-on-blue"
                      : "border-transparent text-on-blue-muted hover:text-on-blue"
                  }`}
                >
                  <span className="font-sign text-xs font-bold text-amber">{item.zone}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={`mailto:${profile.email}`} aria-label="Email Kareem" className="text-on-blue-muted hover:text-amber">
            <Mail size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Kareem's LinkedIn"
            className="text-on-blue-muted hover:text-amber"
          >
            <LinkedinIcon size={17} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-line-on-blue text-on-blue md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line-on-blue px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-1 font-sign text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 px-2 py-2.5 ${
                    active === item.id ? "text-on-blue" : "text-on-blue-muted"
                  }`}
                >
                  <span className="font-sign text-xs font-bold text-amber">{item.zone}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 border-t border-line-on-blue pt-4">
            <a href={`mailto:${profile.email}`} aria-label="Email Kareem" className="text-on-blue-muted hover:text-amber">
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Kareem's LinkedIn"
              className="text-on-blue-muted hover:text-amber"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

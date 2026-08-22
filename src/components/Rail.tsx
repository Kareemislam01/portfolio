import { useState } from "react";
import { Mail, MapPin, Menu, X } from "lucide-react";
import { profile, nav } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Rail() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((n) => n.id));

  const closeAndScroll = () => setOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-line bg-bg/95 px-5 py-4 backdrop-blur">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          KM<span className="text-amber">.</span>
        </a>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded border border-line text-ink"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[65px] z-30 border-b border-line bg-panel px-5 py-6">
          <nav aria-label="Section navigation">
            <ul className="flex flex-col gap-1 font-mono text-sm">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeAndScroll}
                    className={`block rounded px-3 py-2.5 tracking-wide transition-colors ${
                      active === item.id ? "bg-panel-raised text-amber" : "text-muted hover:text-ink"
                    }`}
                  >
                    {String(item.label).toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
            <a href={`mailto:${profile.email}`} aria-label="Email Kareem" className="text-muted hover:text-ink">
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Kareem's LinkedIn"
              className="text-muted hover:text-ink"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Desktop rail */}
      <aside className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:w-[280px] md:flex-col md:justify-between md:border-r md:border-line md:bg-panel md:px-8 md:py-10">
        <div>
          <a href="#top" className="block">
            <span className="font-display text-2xl font-bold tracking-tight text-ink">
              Kareem<span className="text-amber">.</span>
            </span>
          </a>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Mohamed / Software Eng.
          </p>

          <div className="mt-9 rounded border border-line bg-panel-raised px-4 py-3.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phosphor opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-phosphor" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-phosphor">Active</span>
            </div>
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted">{profile.status}</p>
          </div>

          <nav aria-label="Section navigation" className="mt-10">
            <ul className="flex flex-col gap-0.5 font-mono text-[13px]">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center gap-3 rounded px-2.5 py-2 tracking-wide transition-colors ${
                      active === item.id ? "text-amber" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      className={`h-px w-4 transition-all ${
                        active === item.id ? "w-6 bg-amber" : "bg-line group-hover:bg-muted"
                      }`}
                    />
                    {String(item.label).toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
            <MapPin size={13} className="shrink-0" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Kareem"
              className="text-muted transition-colors hover:text-amber"
            >
              <Mail size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Kareem's LinkedIn"
              className="text-muted transition-colors hover:text-amber"
            >
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

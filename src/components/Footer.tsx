import { profile } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 text-sm text-ink-muted sm:flex-row">
        <p>
          {profile.name} © {year}
        </p>
        <p className="italic">Still being revised.</p>
      </div>
    </footer>
  );
}

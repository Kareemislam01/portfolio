import { profile } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] text-muted sm:flex-row">
        <p>
          {profile.name} © {year}
        </p>
        <p className="text-line">// EOF</p>
      </div>
    </footer>
  );
}

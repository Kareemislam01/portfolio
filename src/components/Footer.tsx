import { profile } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-deep px-6 py-6 text-on-blue-muted md:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 font-sign text-xs font-semibold uppercase tracking-wide sm:flex-row">
        <p>
          {profile.name} © {year}
        </p>
        <p>Gate open</p>
      </div>
    </footer>
  );
}

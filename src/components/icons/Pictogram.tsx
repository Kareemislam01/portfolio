type PictogramName = "data" | "frontend" | "software";

const PATHS: Record<PictogramName, React.ReactNode> = {
  data: (
    <>
      <rect x="7" y="20" width="4" height="9" />
      <rect x="14" y="14" width="4" height="15" />
      <rect x="21" y="9" width="4" height="20" />
    </>
  ),
  frontend: (
    <>
      <rect x="6" y="8" width="24" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <line x1="6" y1="13.5" x2="30" y2="13.5" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="9.5" cy="10.7" r="0.9" />
    </>
  ),
  software: (
    <>
      <rect x="12" y="12" width="12" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <line x1="18" y1="4" x2="18" y2="9" stroke="currentColor" strokeWidth="2.4" />
      <line x1="18" y1="27" x2="18" y2="32" stroke="currentColor" strokeWidth="2.4" />
      <line x1="4" y1="18" x2="9" y2="18" stroke="currentColor" strokeWidth="2.4" />
      <line x1="27" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2.4" />
    </>
  ),
};

export function Pictogram({
  name,
  code,
  label,
  inverted = false,
  className = "",
}: {
  name: PictogramName;
  code: string;
  label: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-2 text-center ${className}`}>
      <div
        className={`flex h-16 w-16 items-center justify-center ${
          inverted ? "bg-amber text-blue-deep" : "bg-blue text-on-blue"
        }`}
      >
        <svg viewBox="0 0 36 36" width="30" height="30" fill="currentColor" aria-hidden="true">
          {PATHS[name]}
        </svg>
      </div>
      <div>
        <p className={`font-sign text-sm font-bold tracking-wide ${inverted ? "text-on-blue" : "text-ink"}`}>
          {code}
        </p>
        <p className={`font-sign text-xs ${inverted ? "text-on-blue-muted" : "text-ink-muted"}`}>{label}</p>
      </div>
    </div>
  );
}

export function SignArrow({ direction = "down", className = "" }: { direction?: "down" | "right"; className?: string }) {
  const rotation = direction === "down" ? "rotate(90 12 12)" : "";
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" className={className} aria-hidden="true">
      <g transform={rotation}>
        <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.4" />
        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

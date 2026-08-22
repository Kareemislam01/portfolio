type GrowthCurveProps = {
  className?: string;
  stroke?: "muted" | "accent";
};

export function GrowthCurve({ className = "", stroke = "muted" }: GrowthCurveProps) {
  const color = stroke === "accent" ? "var(--color-accent)" : "var(--color-line)";
  return (
    <svg
      viewBox="0 0 640 200"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M4 168 C 90 168, 120 150, 160 140 S 230 118, 260 108 S 330 60, 380 66 S 470 40, 520 30 S 600 8, 636 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[
        [4, 168],
        [160, 140],
        [260, 108],
        [380, 66],
        [520, 30],
        [636, 4],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.5} fill={color} />
      ))}
    </svg>
  );
}

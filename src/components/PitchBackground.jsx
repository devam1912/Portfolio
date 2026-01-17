export default function PitchBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <div className="absolute inset-0 pitch-bg" />

      {/* Subtle spotlight so pitch feels alive */}
      <div className="absolute inset-0 pitch-spotlight" />

      {/* Lines */}
      <svg
        className="absolute inset-0 pitch-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* outer */}
        <rect x="6" y="8" width="88" height="84" className="pitch-stroke" fill="none" />
        {/* mid line */}
        <line x1="50" y1="8" x2="50" y2="92" className="pitch-stroke" />
        {/* center circle */}
        <circle cx="50" cy="50" r="10" className="pitch-stroke" fill="none" />
        <circle cx="50" cy="50" r="0.8" className="pitch-fill" />
        {/* boxes */}
        <rect x="6" y="32" width="16" height="36" className="pitch-stroke" fill="none" />
        <rect x="78" y="32" width="16" height="36" className="pitch-stroke" fill="none" />
        <rect x="6" y="42" width="7" height="16" className="pitch-stroke" fill="none" />
        <rect x="87" y="42" width="7" height="16" className="pitch-stroke" fill="none" />
      </svg>
    </div>
  );
}

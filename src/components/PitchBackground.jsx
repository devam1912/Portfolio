export default function PitchBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Pitch base */}
      <div className="absolute inset-0 pitch-bg" />

      {/* White lines */}
      <svg
        className="absolute inset-0 h-full w-full pitch-lines"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Outer boundary */}
        <rect x="2" y="2" width="96" height="56" fill="none" className="pitch-stroke" />

        {/* Halfway line */}
        <line x1="50" y1="2" x2="50" y2="58" className="pitch-stroke" />

        {/* Center circle */}
        <circle cx="50" cy="30" r="8" fill="none" className="pitch-stroke" />
        <circle cx="50" cy="30" r="0.8" className="pitch-fill" />

        {/* Left penalty box */}
        <rect x="2" y="18" width="14" height="24" fill="none" className="pitch-stroke" />
        <rect x="2" y="24" width="6" height="12" fill="none" className="pitch-stroke" />
        <circle cx="12" cy="30" r="0.7" className="pitch-fill" />

        {/* Right penalty box */}
        <rect x="84" y="18" width="14" height="24" fill="none" className="pitch-stroke" />
        <rect x="92" y="24" width="6" height="12" fill="none" className="pitch-stroke" />
        <circle cx="88" cy="30" r="0.7" className="pitch-fill" />
      </svg>

      {/* soft vignette */}
      <div className="absolute inset-0 pitch-vignette" />
    </div>
  );
}

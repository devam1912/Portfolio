export default function GoalToggleAnimation({ play }) {
  return (
    <div className={`pointer-events-none fixed inset-0 z-[999] ${play ? "" : "hidden"}`} aria-hidden="true">
      {/* Ball */}
      <div className="goal-ball" />

      {/* Net ripple */}
      <div className="goal-net" />

      {/* SIUU text pop (subtle) */}
      <div className="goal-text">SIUUU!</div>
    </div>
  );
}

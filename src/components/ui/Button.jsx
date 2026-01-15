export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary", // "primary" | "ghost"
  className = "",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold " +
    "transition active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "ghost"
      ? "border border-white/15 bg-white/5 hover:bg-white/10"
      : "border border-white/20 bg-white/15 hover:bg-white/20";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

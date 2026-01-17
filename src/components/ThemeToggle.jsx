import { useEffect, useState } from "react";

const KEY = "dt-theme"; // "green" | "dark"

export default function ThemeToggle() {
  const [mode, setMode] = useState("green");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const initial = saved === "dark" ? "dark" : "green";
    setMode(initial);
    document.documentElement.setAttribute(
      "data-theme",
      initial === "dark" ? "dark" : ""
    );
  }, []);

  function toggle() {
    const next = mode === "dark" ? "green" : "dark";
    setMode(next);
    localStorage.setItem(KEY, next);
    document.documentElement.setAttribute(
      "data-theme",
      next === "dark" ? "dark" : ""
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
      aria-label="Toggle pitch theme"
    >
      {mode === "dark" ? "Black Pitch" : "Green Pitch"}
    </button>
  );
}

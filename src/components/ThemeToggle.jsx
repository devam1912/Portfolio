import { useEffect, useState } from "react";
import GoalToggleAnimation from "./GoalToggleAnimation.jsx";

const STORAGE_KEY = "dt_theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);

    // play animation
    setPlay(true);
    window.setTimeout(() => setPlay(false), 750);
  }

  return (
    <>
      <button
        onClick={toggle}
        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
        aria-label="Toggle theme"
        type="button"
      >
        {theme === "dark" ? "Black Pitch" : "Green Pitch"}
      </button>

      <GoalToggleAnimation play={play} />
    </>
  );
}

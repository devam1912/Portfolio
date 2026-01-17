import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const desktopLinkBase =
  "rounded-2xl border border-transparent px-3 py-2 text-sm transition hover:bg-white/10 hover:border-white/10";

function Links({ onClick, variant = "desktop" }) {
  const base =
    variant === "mobile"
      ? "rounded-2xl border border-transparent px-3 py-2 text-sm transition hover:bg-white/10 hover:border-white/10 w-full text-left"
      : desktopLinkBase;

  const active = "bg-white/15 border-white/15";

  return (
    <>
      <NavLink
        to="/"
        end
        onClick={onClick}
        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        onClick={onClick}
        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        onClick={onClick}
        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
      >
        Projects
      </NavLink>

      <NavLink
        to="/achievements"
        onClick={onClick}
        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
      >
        Achievements
      </NavLink>

      <NavLink
        to="/contact"
        onClick={onClick}
        className={({ isActive }) => `${base} ${isActive ? active : ""}`}
      >
        Contact
      </NavLink>

      <a
        href="/resume/Resume.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={base}
      >
        Resume ↗
      </a>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative">
      {/* Desktop */}
      <nav className="hidden items-center gap-1 sm:flex">
        <Links variant="desktop" />
      </nav>

      {/* Mobile button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Lightweight overlay (click outside to close) */}
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/15 sm:hidden"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      ) : null}

      {/* Mobile dropdown */}
      {open ? (
        <div className="absolute right-0 mt-2 z-50 w-52 overflow-hidden rounded-3xl border border-white/15 glass p-2 sm:hidden animate-popIn">
          <div className="flex flex-col gap-1 min-w-full">
            <Links variant="mobile" onClick={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const linkBase =
  "rounded-2xl px-3 py-2 text-sm transition hover:bg-white/10 w-full text-left";

function Links({ onClick }) {
  return (
    <>
      <NavLink
        to="/"
        end
        onClick={onClick}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={onClick}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        onClick={onClick}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        onClick={onClick}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        Contact
      </NavLink>
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
        <Links />
      </nav>

      {/* Mobile button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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

      {/* Mobile dropdown (small, readable, above overlay) */}
      {open ? (
        <div className="absolute right-0 mt-2 z-50 w-52 overflow-hidden rounded-3xl border border-white/15 glass p-2 sm:hidden animate-popIn">
          <div className="flex flex-col gap-1">
            <Links onClick={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { useState } from "react";

const linkBase =
  "rounded-2xl px-3 py-2 text-sm transition hover:bg-white/10";

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

  return (
    <div className="relative">
      {/* Desktop */}
      <nav className="hidden items-center gap-1 sm:flex">
        <Links />
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15"
        aria-label="Open menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      {/* Mobile panel */}
      {open ? (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-3xl border border-white/15 glass p-2 sm:hidden">
          <div className="flex flex-col gap-1">
            <Links onClick={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

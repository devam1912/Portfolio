    import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-full px-3 py-1.5 text-sm transition hover:bg-white/10";

export default function Navbar() {
  return (
    <nav className="hidden items-center gap-1 sm:flex">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "bg-white/15" : ""}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

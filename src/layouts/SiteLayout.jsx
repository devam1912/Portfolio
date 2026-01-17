import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import PitchBackground from "../components/PitchBackground.jsx";
import ChatWidget from "../components/ChatWidget.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen">
      <PitchBackground />

      <header className="sticky top-0 z-40">
        <div className="glass-header border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label="Go to home"
            >
              <div className="h-9 w-9 rounded-full border border-white/15 bg-white/10" />
              <div className="leading-tight">
                <div className="text-sm font-bold">Devam Tanna</div>
                <div className="text-xs opacity-90">Portfolio</div>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Navbar />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>

     <footer className="border-t border-white/10">
  <div className="mx-auto max-w-6xl px-4 py-8">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="text-sm font-semibold">Devam Tanna</div>
        <div className="mt-1 text-xs opacity-80">
          Backend-focused full-stack developer
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          href="mailto:devamtanna07@gmail.com"
        >
          Email
        </a>

        <a
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          href="https://github.com/devam1912"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          href="https://www.linkedin.com/in/devam-tanna-885a96286/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <a
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          href="/resume/Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>

        <button
          type="button"
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          onClick={() => window.dispatchEvent(new Event("dt:open-chat"))}
        >
          Open chat
        </button>
      </div>
    </div>

    <div className="mt-6 text-xs opacity-70">
      © {new Date().getFullYear()} Devam Tanna • Built with React + Vite + Tailwind
    </div>
  </div>
</footer>


      <ChatWidget endpoint={import.meta.env.VITE_FORMSPREE_ENDPOINT} />
    </div>
  );
}

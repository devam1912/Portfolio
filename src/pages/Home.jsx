import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="rounded-3xl glass p-8">
        <p className="text-sm opacity-80">Football-themed portfolio</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Devam Tanna
        </h1>

        <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-90">
          I build fast, clean web apps with real-world UX—focused on MERN,
          production-ready architecture, and polished UI.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => window.dispatchEvent(new Event("dt:open-chat"))}>
            Message me
          </Button>

          <Button variant="ghost" onClick={() => navigate("/projects")}>
            View projects
          </Button>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs opacity-80">Stack</div>
            <div className="mt-1 text-sm font-semibold">MERN + React</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs opacity-80">Focus</div>
            <div className="mt-1 text-sm font-semibold">Performance + UX</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs opacity-80">Theme</div>
            <div className="mt-1 text-sm font-semibold">Pitch Mode</div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl glass p-6">
          <div className="text-sm font-semibold">What I’m building</div>
          <p className="mt-2 text-sm opacity-90">
            Service Bee — local service discovery + booking platform (backend-first).
          </p>
        </div>

        <div className="rounded-3xl glass p-6">
          <div className="text-sm font-semibold">What I care about</div>
          <p className="mt-2 text-sm opacity-90">
            Clean code, readable structure, fast load times, and smooth interactions.
          </p>
        </div>
      </div>
    </section>
  );
}

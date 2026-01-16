import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="space-y-8">
      <div className="rounded-3xl glass p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold">
            ⚽ Pitch Mode UI
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs opacity-90">
            Backend-focused
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Devam Tanna
        </h1>

        <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-90">
          I build fast, clean web apps with real-world UX—focused on production-ready
          backend systems, APIs, auth, payments, and smooth UI.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => window.dispatchEvent(new Event("dt:open-chat"))}>
            Message me
          </Button>
          <Button variant="ghost" onClick={() => navigate("/projects")}>
            View projects
          </Button>
          <Button variant="ghost" onClick={() => navigate("/contact")}>
            Contact
          </Button>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs opacity-80">Strength</div>
            <div className="mt-1 text-sm font-semibold">Backend Architecture</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs opacity-80">Experience</div>
            <div className="mt-1 text-sm font-semibold">Full-Stack Builds</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs opacity-80">Focus</div>
            <div className="mt-1 text-sm font-semibold">Performance + UX</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl glass p-6">
          <div className="text-sm font-semibold">Currently building</div>
          <p className="mt-2 text-sm opacity-90">
            SaaS-AI and Virtual Course — real production patterns: auth, plans,
            metering, payments, and scalable APIs.
          </p>
        </div>

        <div className="rounded-3xl glass p-6">
          <div className="text-sm font-semibold">What you’ll see here</div>
          <p className="mt-2 text-sm opacity-90">
            Projects with clean code, clear README, and backend-first thinking.
          </p>
        </div>
      </div>
    </section>
  );
}

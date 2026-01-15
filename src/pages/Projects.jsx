import ProjectCard from "../components/projects/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="space-y-4">
      <div className="rounded-3xl glass p-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-sm opacity-90">
          Production-focused builds — clean architecture, real features, and polished UX.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <section className="space-y-6">
   <div className="rounded-3xl glass p-8">
        <div className="text-sm opacity-80">Football-themed portfolio</div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Devam Tanna
        </h1>
        <p className="mt-3 max-w-2xl opacity-90">
          Building clean, fast web apps with a focus on real-world UX.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            MERN
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            React
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            Node
          </span>
        </div>
      </div>
    </section>
  );
}

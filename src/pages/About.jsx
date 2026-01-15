export default function About() {
  return (
    <section className="space-y-4">
      <div className="rounded-3xl glass p-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-sm opacity-90">
          Backend-focused full-stack developer building production-grade systems with clean APIs,
          solid data modeling, and smooth user experiences.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl glass p-6">
          <div className="text-sm font-semibold">What I do</div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm opacity-90">
            <li>Design REST APIs with clear structure and validation</li>
            <li>Authentication & role-based access control (JWT / OAuth / Clerk)</li>
            <li>Payments, subscriptions, metering, and plan enforcement</li>
            <li>Real-time features using Socket.IO when needed</li>
            <li>Media uploads + pipelines (Multer, Cloudinary)</li>
          </ul>
        </div>

        <div className="rounded-3xl glass p-6">
          <div className="text-sm font-semibold">Tech stack</div>

          <div className="mt-3 space-y-3 text-sm opacity-90">
            <div>
              <div className="text-xs opacity-80">Backend</div>
              <div className="mt-1">Node.js, Express, MongoDB, PostgreSQL</div>
            </div>

            <div>
              <div className="text-xs opacity-80">Frontend</div>
              <div className="mt-1">React, Vite, Tailwind</div>
            </div>

            <div>
              <div className="text-xs opacity-80">Auth / Payments</div>
              <div className="mt-1">JWT, Google OAuth, Clerk, Razorpay</div>
            </div>

            <div>
              <div className="text-xs opacity-80">Cloud</div>
              <div className="mt-1">Cloudinary, Render (and Vercel-ready)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl glass p-6">
        <div className="text-sm font-semibold">What I’m aiming for</div>
        <p className="mt-2 text-sm opacity-90">
          Placement-ready engineering: scalable backend systems, clean code, and projects that feel real.
        </p>
      </div>
    </section>
  );
}

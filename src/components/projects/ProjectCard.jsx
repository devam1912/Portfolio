function TypeBadge({ type }) {
  const text = type === "Backend" ? "Backend-centric" : "Full-Stack";
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold">
      {text}
    </span>
  );
}

export default function ProjectCard({
  title,
  type,
  subtitle,
  description,
  highlights = [],
  tags = [],
  repo,
  live,
}) {
  return (
    <article className="rounded-3xl glass p-6 flex flex-col gap-4 hover:scale-[1.01]">
      <header>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {subtitle ? (
              <p className="mt-1 text-xs opacity-80">{subtitle}</p>
            ) : null}
          </div>
          {type ? <TypeBadge type={type} /> : null}
        </div>

        <p className="mt-3 text-sm opacity-90">{description}</p>
      </header>

      {highlights.length > 0 ? (
        <ul className="list-disc pl-5 text-sm opacity-90 space-y-1">
          {highlights.slice(0, 6).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}

      {tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-1 flex flex-wrap gap-2">
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          >
            Repo <span aria-hidden="true">↗</span>
          </a>
        ) : null}

        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          >
            Live <span aria-hidden="true">↗</span>
          </a>
        ) : null}

        {!repo && !live ? (
          <span className="text-xs opacity-70">Links will be added soon</span>
        ) : null}
      </div>
    </article>
  );
}

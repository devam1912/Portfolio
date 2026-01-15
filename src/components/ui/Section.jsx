export default function Section({ title, subtitle, children }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm opacity-80">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function Contact() {
  return (
    <section className="space-y-4">
      <div className="rounded-3xl glass p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm opacity-90">
          Fastest way: use the chat widget (bottom-right). You can also reach me via links below.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            href="mailto:devamtanna07@gmail.com"
          >
            Email
          </a>

          <a
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            href="tel:+918758191256"
          >
            Call
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

          <button
            type="button"
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            onClick={() => window.dispatchEvent(new Event("dt:open-chat"))}
          >
            Open chat
          </button>
        </div>
      </div>

      <div className="rounded-3xl glass p-6">
        <div className="text-sm font-semibold">What to include</div>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm opacity-90">
          <li>Your name + what you’re reaching out about</li>
          <li>Timeline / deadline (if any)</li>
          <li>Links (repo, doc, screenshot) if relevant</li>
        </ul>
      </div>
    </section>
  );
}

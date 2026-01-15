export default function Contact() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <div className="rounded-3xl glass p-6 space-y-3">
        <p className="opacity-90">
          Use the chat widget (bottom-right) to send me a message.
        </p>

        <button
          type="button"
          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          onClick={() => window.dispatchEvent(new Event("dt:open-chat"))}
        >
          Open chat
        </button>
      </div>
    </section>
  );
}

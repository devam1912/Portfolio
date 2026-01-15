import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "dt_chat_draft_v1";

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatWidget({ endpoint }) {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "err" | null

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(() => [
    {
      role: "bot",
      text: "Hey! Leave a message and I’ll get back to you.",
      time: nowTime(),
    },
    {
      role: "bot",
      text: "What’s your name and email?",
      time: nowTime(),
    },
  ]);

  const listRef = useRef(null);

  useEffect(() => {
    // restore draft fields
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const d = JSON.parse(raw);
      setName(d.name || "");
      setEmail(d.email || "");
      setMessage(d.message || "");
    } catch {
      // ignore
    }
  }, []);

    useEffect(() => {
  const fn = () => setOpen(true);
  window.addEventListener("dt:open-chat", fn);
  return () => window.removeEventListener("dt:open-chat", fn);
}, []);



  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ name, email, message })
    );
  }, [name, email, message]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [open, messages]);

  const canSend = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return name.trim().length >= 2 && emailOk && message.trim().length >= 5;
  }, [name, email, message]);

  async function handleSend() {
    setStatus(null);
    if (!endpoint) {
      setStatus("err");
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Missing form endpoint. Add it in code first.", time: nowTime() },
      ]);
      return;
    }
    if (!canSend || sending) return;

    const userBubble = {
      role: "user",
      text: message.trim(),
      time: nowTime(),
    };

    setMessages((m) => [...m, userBubble]);
    setSending(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Portfolio message from ${name.trim()}`,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("ok");
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Sent! ✅ I’ll reply soon.",
          time: nowTime(),
        },
      ]);

      setMessage("");
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email, message: "" }));
    } catch {
      setStatus("err");
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Couldn’t send right now. Please try again in a bit.",
          time: nowTime(),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Launcher */}
    <button
  type="button"
  onClick={() => setOpen((v) => !v)}
 className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full glass grid place-items-center pulse-soft hover:scale-[1.04] active:scale-[0.98]"
  aria-label={open ? "Close chat" : "Open chat"}
  title={open ? "Close" : "Chat"}
>
  {open ? (
    /* X icon */
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    /* Chatbot icon */
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M8 10h.01M16 10h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M12 3v2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M7 6h10a4 4 0 0 1 4 4v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-4a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M9 15c1.2 1 4.8 1 6 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )}
</button>


      {/* Panel */}
      <div
        className={`fixed bottom-20 right-5 z-50 w-[min(360px,calc(100vw-40px))] overflow-hidden rounded-3xl border border-white/15 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="glass">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <div className="text-sm font-semibold">Message Devam</div>
              <div className="text-xs opacity-80">Usually replies within a day</div>
            </div>
            <span className="text-[10px] opacity-70">pitch chat</span>
          </div>

          <div
            ref={listRef}
            className="max-h-[320px] space-y-2 overflow-auto px-3 py-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-white/15"
                      : "bg-white/10"
                  }`}
                >
                  <div>{m.text}</div>
                  <div className="mt-1 text-[10px] opacity-70">{m.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-white/10 px-3 py-3">
            <div className="grid grid-cols-2 gap-2">
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/25"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/25"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <input
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-white/25"
                placeholder="Type your message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!canSend || sending}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </div>

            {status === "ok" && (
              <div className="text-xs opacity-80">Delivered ✅</div>
            )}
            {status === "err" && (
              <div className="text-xs opacity-80">Send failed ❌</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

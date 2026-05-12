import { useState } from "react";

const EMAIL = "algerdegdimaymay@gmail.com";

const CONTACT_LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: "ken-dimaymay", href: "https://www.linkedin.com/in/ken-alger-dimaymay-671927307/" },
  { label: "GitHub", value: "@kendimaymay", href: "https://github.com/kenalger" },
  { label: "Facebook", value: "ken.dimaymay", href: "https://www.facebook.com/kenalger.dimaymay" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 700);
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", message: "" });
  };

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="section" data-screen-label="05 Contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">05 — Contact</span>
          <h2 className="h-display">
            Got a system that needs<br />untangling?
          </h2>
          <p className="lead muted">
            I'm currently open to senior-track full-stack and platform roles.
            The fastest way to reach me is the form on the right — or copy my
            email and write whenever.
          </p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-copy">
              <span className="contact-copy-email">{EMAIL}</span>
              <button
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={copyEmail}
                data-magnetic
              >
                {copied ? (
                  <>
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                      <rect x="4" y="4" width="9" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M3 11V3a1 1 0 0 1 1-1h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            <ul className="contact-ledger">
              <li className="contact-ledger-head" aria-hidden="true">
                <span>Profiles</span>
                <span className="contact-ledger-count">04 entries</span>
              </li>
              {CONTACT_LINKS.map((l, i) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-row"
                    data-magnetic
                  >
                    <span className="contact-row-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="contact-row-label">{l.label}</span>
                    <span className="contact-row-value">{l.value}</span>
                    <span className="contact-row-arrow" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="form reveal" onSubmit={submit} style={{ "--rd": "120ms" }}>
            <div className="field">
              <label htmlFor="f-name">Your name</label>
              <input
                id="f-name"
                className="input"
                type="text"
                placeholder="e.g. Sara Cruz"
                value={form.name}
                onChange={onChange("name")}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input
                id="f-email"
                className="input"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={onChange("email")}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-msg">What's on your mind?</label>
              <textarea
                id="f-msg"
                className="textarea"
                placeholder="Tell me a little about the project, team, or role…"
                value={form.message}
                onChange={onChange("message")}
                required
              />
            </div>
            <div className="form-bottom">
              <span className="form-note">I usually reply within a day.</span>
              <button type="submit" className="btn btn-primary" disabled={busy} data-magnetic>
                {busy ? "Sending…" : "Send message"}
                <span className="arrow">→</span>
              </button>
            </div>

            <div className={`form-success ${sent ? "show" : ""}`} aria-hidden={!sent}>
              <div className="check">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5 10 17 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Message sent.</h4>
              <p>Thanks for reaching out, {form.name || "friend"}. I'll get back to you shortly.</p>
              <button type="button" className="btn btn-ghost" onClick={reset} data-magnetic>
                Send another
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


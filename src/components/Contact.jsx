import { useState } from "react";

const EMAIL = "ken.dimaymay@gmail.com";

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
            <div
              className="copy-row"
              style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 8 }}
            >
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--text-1)" }}>
                {EMAIL}
              </span>
              <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyEmail} data-magnetic>
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

            <div className="contact-links">
              <ContactLink href={`mailto:${EMAIL}`} label="Email" value={EMAIL} icon="mail" />
              <ContactLink href="https://linkedin.com/" label="LinkedIn" value="ken-dimaymay" icon="linkedin" />
              <ContactLink href="https://github.com/" label="GitHub" value="@kendimaymay" icon="github" />
              <ContactLink href="https://facebook.com/" label="Facebook" value="ken.dimaymay" icon="facebook" />
            </div>
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

function ContactLink({ href, label, value, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="contact-link" data-magnetic>
      <div className="ic">
        <ContactIcon kind={icon} />
      </div>
      <div>
        <div className="lab">{label}</div>
        <div className="val">{value}</div>
      </div>
      <span className="arrow-r">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

function ContactIcon({ kind }) {
  switch (kind) {
    case "mail":
      return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="m3 5 7 6 7-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 7v9H2V7h3Zm-1.5-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7 7h3v1.4c.5-.8 1.5-1.6 3-1.6 2.6 0 4 1.6 4 4.6V16h-3v-4.2c0-1.4-.5-2.3-1.7-2.3-1 0-1.6.6-1.9 1.3-.1.2-.2.6-.2 1V16H7V7Z" />
        </svg>
      );
    case "github":
      return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C17.1 18.2 20 14.4 20 10c0-5.5-4.5-10-10-10Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11.5 20v-8h2.7l.4-3.1h-3.1V7c0-.9.3-1.5 1.6-1.5h1.7V2.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.2H5.5V12h2.9v8h3.1Z" />
        </svg>
      );
    default:
      return null;
  }
}

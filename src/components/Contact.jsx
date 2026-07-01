export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="reveal contact-eyebrow">
        <span className="mark">$</span> contact
      </div>

      <a
        href="mailto:algerdegdimaymay@gmail.com"
        className="reveal contact-email ul"
        style={{ "--rd": "60ms" }}
      >
        algerdegdimaymay@gmail.com
      </a>

      <div className="reveal contact-meta" style={{ "--rd": "120ms" }}>
        <a
          href="https://linkedin.com/in/ken-alger-dimaymay"
          target="_blank"
          rel="noopener"
          className="ul"
        >
          LinkedIn ↗
        </a>
        <a href="tel:+639212662965" className="ul">
          +63 921 266 2965
        </a>
        <span>Cebu City, PH</span>
        <span className="contact-status">
          <span className="dot" />
          Open to freelance
        </span>
      </div>
    </section>
  );
}

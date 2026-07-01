export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <p className="contact-lead reveal">Have a system that needs building?</p>
        <a
          className="contact-email reveal"
          style={{ "--rd": "60ms" }}
          href="mailto:algerdegdimaymay@gmail.com"
        >
          algerdegdimaymay@gmail.com
        </a>

        <dl className="contact-dl reveal" style={{ "--rd": "120ms" }}>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://linkedin.com/in/ken-alger-dimaymay"
                target="_blank"
                rel="noopener"
              >
                /ken-alger-dimaymay
              </a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+639212662965" style={{ border: "none" }}>
                +63 921 266 2965
              </a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Cebu City, Philippines</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd><span className="status-dot" />Open to freelance</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

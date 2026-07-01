export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="eyebrow hero-eyebrow reveal">
        <span className="rule" />
        Software Developer — Cebu, Philippines
      </div>

      <h1 className="hero-title reveal" style={{ "--rd": "60ms" }}>
        Ken Alger <em>Dimaymay</em>
      </h1>

      <div className="hero-cols reveal" style={{ "--rd": "140ms" }}>
        <p className="hero-statement">
          I build the quiet machinery that keeps businesses running.
        </p>
        <div>
          <p className="hero-intro">
            Mostly .NET and Angular on the back end, React and Next.js on the
            front — shipping ERP, CRM and e-commerce systems for teams in Cebu and
            beyond. Currently building at Semo-network and Myvan Holdings, and
            taking on freelance work.
          </p>
          <div className="hero-links">
            <a className="primary" href="mailto:algerdegdimaymay@gmail.com">
              Email me
            </a>
            <a
              className="subtle"
              href="https://linkedin.com/in/ken-alger-dimaymay"
              target="_blank"
              rel="noopener"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <dl className="hero-stats reveal" style={{ "--rd": "220ms" }}>
        <div className="stat">
          <dt>Based in</dt>
          <dd>Cebu City, Philippines</dd>
        </div>
        <div className="stat">
          <dt>Focus</dt>
          <dd>ERP · CRM · E-commerce</dd>
        </div>
        <div className="stat">
          <dt>Status</dt>
          <dd><span className="status-dot" />Open to freelance</dd>
        </div>
      </dl>
    </section>
  );
}

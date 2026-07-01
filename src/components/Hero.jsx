export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="reveal hero-kicker">
        <span className="mark">$</span> software_developer — cebu, ph
      </div>

      <h1 className="reveal hero-title" style={{ "--rd": "60ms" }}>
        Ken Alger
        <br />
        Dimaymay
        <span className="cursor" aria-hidden="true" />
      </h1>

      <p className="reveal hero-lead" style={{ "--rd": "140ms" }}>
        Full-stack developer building ERP, CRM &amp; e-commerce systems — .NET
        and Angular on the back end, React and Next.js on the front. Currently at
        Semo-network &amp; Myvan Holdings, and open to freelance.
      </p>

      <div className="reveal hero-actions" style={{ "--rd": "220ms" }}>
        <a href="#work" className="btn-solid">
          View work →
        </a>
        <a href="#contact" className="btn-text ul">
          Get in touch
        </a>
      </div>

      <div className="reveal scroll-hint" style={{ "--rd": "320ms" }}>
        Scroll
        <span />
      </div>
    </section>
  );
}

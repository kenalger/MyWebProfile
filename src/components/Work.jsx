const PROJECTS = [
  {
    name: "BetterFlags",
    year: "2026",
    cat: "E-commerce · Semo-network",
    desc:
      "An e-commerce platform with built-in sales reporting, analytics and order management. I work across the stack here — frontend features, backend services, and the performance tuning that keeps the data flowing.",
    stack: "React · Next.js · Node.js",
    fig: "Fig. 01 — BetterFlags storefront",
    placeholder: "BetterFlags",
  },
  {
    name: "MHI ERP",
    year: "2025",
    cat: "Enterprise ERP · Myvan Holdings Inc.",
    desc:
      "ERP modules across procurement, finance, sales, manufacturing and real estate. I built the PRF & SFL approval workflows with fund tracking, and the manufacturing flow that turns sales orders into job orders with live material allocation.",
    stack: "ASP.NET Core · Angular · C# · LINQ",
    fig: "Fig. 02 — MHI ERP dashboard",
    placeholder: "MHI ERP",
    reverse: true,
  },
  {
    name: "CRM Platform",
    year: "Web & Mobile",
    cat: "CRM · Myvan Holdings Inc.",
    desc:
      "A web and mobile CRM covering lead acquisition, opportunity management, quotation generation and KPI monitoring — plus broker accreditation and real-estate reservation with payment-terms handling.",
    stack: "React Native · React · TypeScript",
    fig: "Fig. 03 — CRM, web & mobile",
    placeholder: "CRM Platform",
  },
];

function Figure({ p }) {
  return (
    <figure className="work-figure">
      <div className="frame">
        <span className="ph">{p.placeholder}</span>
      </div>
      <figcaption>{p.fig}</figcaption>
    </figure>
  );
}

function Body({ p }) {
  return (
    <div>
      <div className="work-title-row">
        <h3 className="work-title">{p.name}</h3>
        <span className="work-year">{p.year}</span>
      </div>
      <div className="work-cat">{p.cat}</div>
      <p className="work-desc">{p.desc}</p>
      <div className="work-stack">
        <b>Stack</b>
        {p.stack}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <div className="work-head reveal">
          <h2 className="section-title">Selected work</h2>
          <p className="note">
            Three systems, in use by real teams — across web and mobile.
          </p>
        </div>

        {PROJECTS.map((p) => (
          <article key={p.name} className="work-item reveal">
            {p.reverse ? (
              <>
                <Body p={p} />
                <Figure p={p} />
              </>
            ) : (
              <>
                <Figure p={p} />
                <Body p={p} />
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

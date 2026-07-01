const PROJECTS = [
  {
    no: "01",
    meta: "E-commerce · 2026 · Semo-network",
    name: "BetterFlags",
    desc: "An e-commerce platform with built-in sales reporting, analytics and order management. I work across the stack — frontend features, backend services, and the performance tuning that keeps the data flowing.",
    stack: "React · Next.js · Node.js",
    placeholder: "Drop a BetterFlags screenshot",
  },
  {
    no: "02",
    meta: "Enterprise ERP · 2025 · Myvan Holdings Inc.",
    name: "MHI ERP",
    desc: "ERP modules across procurement, finance, sales, manufacturing and real estate. I built the PRF & SFL approval workflows with fund tracking, and the manufacturing flow that turns sales orders into job orders with live material allocation.",
    stack: "ASP.NET Core · Angular · C# · LINQ",
    placeholder: "Drop an ERP dashboard screenshot",
  },
  {
    no: "03",
    meta: "CRM · Web & Mobile · Myvan Holdings Inc.",
    name: "CRM Platform",
    desc: "A web and mobile CRM covering lead acquisition, opportunity management, quotation generation and KPI monitoring — plus broker accreditation and real-estate reservation with payment-terms handling.",
    stack: "React Native · React · TypeScript",
    placeholder: "Drop a CRM / mobile screenshot",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="reveal section-head">
        <div className="eyebrow">
          <span className="mark">//</span> selected_work
        </div>
        <h2 className="section-title">Things I&apos;ve shipped</h2>
      </div>

      {PROJECTS.map((p) => (
        <article key={p.no} className="reveal work-item">
          <div className="work-meta">
            <span className="mark">{p.no}</span> — {p.meta}
          </div>
          <h3 className="work-name">{p.name}</h3>
          <p className="work-desc">{p.desc}</p>
          <div className="fig">
            <div className="fig-ph">{p.placeholder}</div>
          </div>
          <div className="work-stack">{p.stack}</div>
        </article>
      ))}
    </section>
  );
}

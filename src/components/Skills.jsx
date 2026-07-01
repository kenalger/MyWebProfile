const SKILLS = [
  {
    name: "Front end",
    desc:
      "React, Next.js, Angular and React Native — responsive interfaces, NG-ZORRO component work, and TypeScript throughout.",
  },
  {
    name: "Back end",
    desc:
      "ASP.NET Core Web APIs in C#, Node.js services, LINQ and SQL data work, and REST integrations.",
  },
  {
    name: "Systems & ERP",
    desc:
      "SAP ERP, inventory (MRIS, stock transfer), procurement, sales-order processing, manufacturing and CRM workflows.",
  },
  {
    name: "How I work",
    desc:
      "Approval routing, fund tracking, performance tuning, and reporting with KPI dashboards.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2
          className="section-title reveal"
          style={{ marginBottom: "clamp(36px, 6vh, 64px)" }}
        >
          What I work with
        </h2>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div key={s.name} className="skill reveal" style={{ "--rd": `${i * 60}ms` }}>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

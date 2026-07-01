const GROUPS = [
  {
    cat: "Frontend",
    items: "React · Next.js · Angular · React Native · TypeScript · NG-ZORRO",
  },
  {
    cat: "Backend",
    items: "ASP.NET Core · C# · Node.js · LINQ · SQL · REST APIs",
  },
  {
    cat: "Systems & ERP",
    items:
      "SAP ERP · Inventory · Procurement · Sales Orders · Manufacturing · CRM",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="reveal section-head">
        <div className="eyebrow">
          <span className="mark">//</span> stack
        </div>
        <h2 className="section-title">What I work with</h2>
      </div>

      <div className="skills-list">
        {GROUPS.map((g, i) => (
          <div
            key={g.cat}
            className="reveal"
            style={{ "--rd": `${i * 60}ms` }}
          >
            <div className="skill-cat">{g.cat}</div>
            <div className="skill-items">{g.items}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

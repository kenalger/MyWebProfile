const SKILL_CATS = [
  {
    name: "Frontend",
    note: "Building the interfaces users actually live in.",
    items: [
      { name: "React + Vite", years: "3y", level: "Daily" },
      { name: "React Native", years: "1y", level: "Production" },
      { name: "Angular TS", years: "2y", level: "Production" },
      { name: "TypeScript", years: "3y", level: "Daily" },
      { name: "JavaScript", years: "4y", level: "Daily" },
    ],
  },
  {
    name: "Backend",
    note: "APIs, business logic, and integrations.",
    items: [
      { name: "ASP.NET Core", years: "3y", level: "Daily" },
      { name: "C#", years: "3y", level: "Daily" },
      { name: "Node.js", years: "2y", level: "Working" },
    ],
  },
  {
    name: "Database",
    note: "Where the business actually lives.",
    items: [
      { name: "MSSQL", years: "3y", level: "Daily" },
      { name: "SQL", years: "3y", level: "Daily" },
      { name: "Supabase", years: "1y", level: "Working" },
    ],
  },
  {
    name: "Tools & Platforms",
    note: "How I ship and stay productive.",
    items: [
      { name: "SaaS architecture", years: "—", level: "Concepts" },
      { name: "OOP", years: "—", level: "Principles" }, 
      { name: "CI/CD", years: "—", level: "Principles" },
      { name: "SDLC", years: "—", level: "Principles" },
      { name: "Git / GitHub", years: "—", level: "Daily" },
      { name: "Figma", years: "—", level: "Working" },
      { name: "Postman", years: "—", level: "Daily" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" data-screen-label="04 Skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">04 — Skills</span>
          <h2 className="h-display">
            A pragmatic stack,<br />chosen for shipping.
          </h2>
          <p className="lead muted">
            I'm comfortable spanning frontend, backend, and database — most of
            what I build is full-stack, with mobile when the team needs it.
          </p>
        </div>

        <div className="ledger-grid reveal">
          {SKILL_CATS.map((cat, ci) => (
            <div key={cat.name} className="ledger-col">
              <div className="ledger-col-head">
                <span className="ledger-group-num">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <h3 className="ledger-group-name">{cat.name}</h3>
                <p className="ledger-group-note">{cat.note}</p>
                <span className="ledger-group-count">
                  {String(cat.items.length).padStart(2, "0")} entries
                </span>
              </div>

              <ul className="ledger-list">
                {cat.items.map((s) => (
                  <li key={s.name} className="ledger-row">
                    <span className="ledger-name">{s.name}</span>
                    <span className="ledger-meta">
                      <span className="ledger-level">{s.level}</span>
                      <span className="ledger-years">{s.years}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

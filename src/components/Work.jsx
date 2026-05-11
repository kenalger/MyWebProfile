const WORK_ITEMS = [
  {
    period: "2026 — Present",
    org: "MyVan Holdings Inc.",
    title: "CRM Platform — Founding Developer (Web & Mobile)",
    desc: "Owned the architecture of an internal CRM from a blank slate. Designed the data model, auth, lead pipeline, deal stages, and reporting; shipped a React Native mobile companion so the field team could update opportunities offline.",
    tags: ["React Vite", "React Native", "ASP.NET Core", "MSSQL", "Supabase"],
    icon: "users",
  },
  {
    period: "2025 — 2026",
    org: "MyVan Holdings Inc.",
    title: "Manufacturing Module — Lead Developer",
    desc: "Lead developer of the manufacturing module that extended the in-house ERP: bill-of-materials, work orders, production scheduling, and shop-floor reporting. Owned the design, the data model, and the rollout — replacing a tangle of spreadsheets with one source of truth for ops.",
    tags: ["ASP.NET Core", "C#", "SQL", "Angular TS"],
    icon: "factory",
  },
  {
    period: "2025",
    org: "MyVan Holdings Inc.",
    title: "ERP Maintenance, Modules & Integration",
    desc: "Started by maintaining the company's existing ERP — owning inventory and sales-order flows day-to-day, fixing long-standing bugs, refactoring brittle code paths, and untangling reports. From there I built new modules around finance, inventory and accreditation, plus the integration layer that let the new manufacturing module share stock, costing and BOM entities with the legacy ERP cleanly. This is where I learned how the business actually runs end-to-end.",
    tags: ["C#", "ASP.NET Core", "Angular TS", "TypeScript", "MSSQL", "MSSMS"],
    icon: "wrench",
  },
];

const WORK_ICONS = {
  users: <path d="M5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 11.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5V13H2v-1.5Zm5.5 1.5h5v-1.5c0-1.5-1.5-2.5-3-2.5-.6 0-1.2.15-1.7.4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>,
  factory: <path d="M2 13V6l4 2.5V6l4 2.5V4l4 2.5V13H2Zm2 0V11h2v2H4Zm4 0V11h2v2H8Z" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinejoin="round"/>,
  modules: <path d="M2 5.5 7.5 3 13 5.5 7.5 8 2 5.5Zm0 0V11l5.5 2.5M13 5.5V11L7.5 13.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>,
  wrench: <path d="m4 12 5-5m1.5-1.5a2.5 2.5 0 1 1-3-3l1.5 1.5L7.5 5.5 6 7l-1.5-1.5a2.5 2.5 0 0 0 3 3l4 4a1.4 1.4 0 0 0 2-2l-4-4Z" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
};

export default function Work() {
  return (
    <section id="work" className="section" data-screen-label="02 Work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">02 — Work</span>
          <h2 className="h-display">
            From maintaining systems<br />to founding them.
          </h2>
          <p className="lead muted">
            A short tour of how my role at MyVan Holdings grew from ERP fix-it
            work into owning a CRM platform end-to-end.
          </p>
        </div>

        <div className="timeline">
          <div className="tl-rail" />
          {WORK_ITEMS.map((w, i) => (
            <div key={i} className="tl-item reveal" style={{ "--rd": `${i * 80}ms` }}>
              <div className="tl-dot">
                <svg width="14" height="14" viewBox="0 0 16 16">
                  {WORK_ICONS[w.icon]}
                </svg>
              </div>
              <div className="tl-content">
                <div className="tl-meta">
                  <span>{w.period}</span>
                  <span className="pip" />
                  <span>{w.org}</span>
                </div>
                <h3 className="tl-title">{w.title}</h3>
                <p className="tl-desc">{w.desc}</p>
                <div className="tl-tags">
                  {w.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

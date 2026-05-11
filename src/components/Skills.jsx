const SKILL_CATS = [
  {
    name: "Frontend",
    desc: "Building the interfaces users actually live in.",
    items: [
      { name: "React + Vite", years: "3y", logo: "react" },
      { name: "React Native", years: "1y", logo: "rn" },
      { name: "Angular TS", years: "2y", logo: "angular" },
      { name: "TypeScript", years: "3y", logo: "ts" },
      { name: "JavaScript", years: "4y", logo: "js" },
    ],
  },
  {
    name: "Backend",
    desc: "APIs, business logic, and integrations.",
    items: [
      { name: "ASP.NET Core", years: "3y", logo: "dotnet" },
      { name: "C#", years: "3y", logo: "cs" },
      { name: "Node.js", years: "2y", logo: "node" },
    ],
  },
  {
    name: "Database",
    desc: "Where the business actually lives.",
    items: [
      { name: "MSSQL", years: "3y", logo: "sql" },
      { name: "SQL", years: "3y", logo: "sql" },
      { name: "Supabase", years: "1y", logo: "supabase" },
    ],
  },
  {
    name: "Tools & Platforms",
    desc: "How I ship and stay productive.",
    items: [
      { name: "SaaS architecture", years: "—", logo: "cloud" },
      { name: "Git / GitHub", years: "—", logo: "git" },
      { name: "Figma", years: "—", logo: "figma" },
      { name: "Postman", years: "—", logo: "postman" },
    ],
  },
];

function SkillLogo({ kind }) {
  const c = "var(--accent-2)";
  switch (kind) {
    case "react":
    case "rn":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill={c} />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke={c} strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke={c} strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke={c} strokeWidth="1.2" transform="rotate(-60 12 12)" />
        </svg>
      );
    case "angular":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2 3 5l1.5 12L12 22l7.5-5L21 5 12 2Z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M8.5 16 12 8l3.5 8M9.7 13.5h4.6" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ts":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke={c} strokeWidth="1.3" />
          <path d="M9 11h6M12 11v7M16 14c.4-.7 1.2-1 2-1 1.2 0 2 .7 2 1.7s-.7 1.4-1.7 1.7c-1.1.3-1.8.7-1.8 1.7s.8 1.6 1.8 1.6c.9 0 1.6-.4 2-1" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "js":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke={c} strokeWidth="1.3" />
          <path d="M11 9v7c0 1.5-.8 2.2-2 2.2S7 17.5 7 16M14 16c.5.7 1.2 1.2 2.5 1.2 1.4 0 2.5-.7 2.5-1.7s-1-1.5-2.3-1.9c-1.4-.4-2.4-.9-2.4-2.1s1-1.8 2.3-1.8c1.1 0 1.9.4 2.3 1" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "dotnet":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 18V8h2l4 7V8M14 18h6M17 8v10M14 13h5" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cs":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M16 7a6 6 0 1 0 0 10M19 11h-4M19 14h-4M14 9v5M16 9v5" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "node":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M9 16c.5.6 1.4 1 2.5 1 1.7 0 2.5-.7 2.5-1.7s-.7-1.5-2.5-1.7-2.5-.6-2.5-1.6S9.8 10.3 11.4 10.3c1 0 1.7.3 2.1.8" stroke={c} strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      );
    case "sql":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="7" ry="3" stroke={c} strokeWidth="1.3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke={c} strokeWidth="1.3" />
        </svg>
      );
    case "supabase":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M13 2 4 13h7v9l9-11h-7V2Z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M7 17a4 4 0 1 1 .9-7.9A6 6 0 0 1 19 12a4 4 0 0 1-.5 8H7Z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case "git":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="6" r="2.5" stroke={c} strokeWidth="1.3" />
          <circle cx="6" cy="18" r="2.5" stroke={c} strokeWidth="1.3" />
          <circle cx="18" cy="12" r="2.5" stroke={c} strokeWidth="1.3" />
          <path d="M6 8.5v7M8 6.5c5 0 8 3 8 5.5" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "figma":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="8" y="3" width="8" height="6" rx="3" stroke={c} strokeWidth="1.3" />
          <rect x="8" y="9" width="8" height="6" rx="3" stroke={c} strokeWidth="1.3" />
          <rect x="8" y="15" width="4" height="6" rx="3" stroke={c} strokeWidth="1.3" />
          <circle cx="15" cy="12" r="3" stroke={c} strokeWidth="1.3" />
        </svg>
      );
    case "postman":
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.3" />
          <path d="M8 13.5 11.2 16l5-7" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

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

        <div className="skills-cats">
          {SKILL_CATS.map((cat, ci) => (
            <div key={cat.name} className="skill-cat reveal" style={{ "--rd": `${ci * 80}ms` }}>
              <div className="skill-cat-h">
                <div>
                  <h3>{cat.name}</h3>
                  <p className="muted" style={{ margin: "4px 0 0", fontSize: 13 }}>
                    {cat.desc}
                  </p>
                </div>
                <span className="ct">{String(cat.items.length).padStart(2, "0")}</span>
              </div>
              <div className="skill-grid">
                {cat.items.map((s) => (
                  <div key={s.name} className="skill-card" data-magnetic>
                    <div className="skill-icon">
                      <SkillLogo kind={s.logo} />
                    </div>
                    <div>
                      <div className="skill-name">{s.name}</div>
                      <div className="skill-meta">{s.years}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

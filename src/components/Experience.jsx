const ENTRIES = [
  {
    date: "May 2026 — Present",
    role: "Web / Software Developer",
    org: "Semo-network",
    desc:
      "Developing and maintaining BetterFlags — frontend and backend features in React, Next.js and Node.js, with responsive UI and performance work.",
  },
  {
    date: "Jan 2025 — Present",
    role: "Web / Software Developer",
    org: "Myvan Holdings Inc.",
    desc:
      "Built ERP modules and CRM web/mobile apps — approval routing, fund tracking, quotation generation, manufacturing and real-estate reservation workflows.",
  },
  {
    date: "2025",
    role: "Associate Developer — SAP ERP",
    org: "Myvan Holdings Inc.",
    desc:
      "Maintained Inventory Management (MRIS, Stock Transfer Slip), optimized Purchasing via LINQ and backend pagination, and improved Sales Order processing.",
  },
  {
    date: "Graduated Dec 2024",
    role: "BS Information Technology",
    org: "Cebu Institute of Technology — University",
    desc: "Bachelor of Science in Information Technology.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2
          className="section-title reveal"
          style={{ marginBottom: "clamp(36px, 6vh, 64px)" }}
        >
          Experience
        </h2>

        <div className="exp-list">
          {ENTRIES.map((e) => (
            <div key={e.date + e.role} className="exp-row reveal">
              <div className="exp-date">{e.date}</div>
              <div>
                <h3 className="exp-role">{e.role}</h3>
                <div className="exp-org">{e.org}</div>
              </div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

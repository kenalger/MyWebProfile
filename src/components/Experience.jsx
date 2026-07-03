const ENTRIES = [
  {
    date: "MAY 2026 — PRESENT",
    role: "Web / Software Developer",
    org: "Semo-network",
    desc: "Developing and maintaining BetterFlags — frontend and backend features in React, Next.js and Node.js, with responsive UI and performance work.",
  },
  {
    date: "JAN 2025 — PRESENT",
    role: "Web / Software Developer",
    org: "Myvan Holdings Inc.",
    desc: "Built ERP modules and CRM web/mobile apps — approval routing, fund tracking, quotation generation, manufacturing and real-estate reservation workflows. Also maintained SAP ERP Inventory Management (MRIS, Stock Transfer Slip), optimized Purchasing via LINQ and backend pagination, and improved Sales Order processing.",
  },
  {
    date: "GRADUATED DEC 2024",
    role: "BS Information Technology",
    org: "Cebu Institute of Technology — University",
    desc: "Bachelor of Science in Information Technology.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="reveal section-head">
        <div className="eyebrow">
          <span className="mark">//</span> experience
        </div>
        <h2 className="section-title">Where I&apos;ve worked</h2>
      </div>

      <div className="exp-list">
        {ENTRIES.map((e) => (
          <div key={e.date + e.role} className="reveal exp-item">
            <div className="exp-date">{e.date}</div>
            <h3 className="exp-role">{e.role}</h3>
            <div className="exp-org">{e.org}</div>
            <p className="exp-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const BUILD_AREAS = [
  {
    title: "Enterprise Resource Planning",
    tags: ["Procurement", "Sales", "Inventory", "Accreditation"],
  },
  {
    title: "Customer Relationship Management.",
    tags: ["Pipeline", "Deals", "Reporting"],
  },
  {
    title: "Manufacturing",
    tags: ["BOM", "Work orders", "Shop-floor"],
  },
  {
    title: "Internal tools",
    tags: ["Dashboards", "Admin", "Workflows"],
  },
];

export default function MarqueeStrip() {
  return (
    <div className="build-strip">
      <div className="container">
        <div className="build-strip-head">
          <span className="eyebrow">What I build</span>
          <span className="build-strip-rule" aria-hidden="true" />
        </div>
        <div className="build-strip-grid">
          {BUILD_AREAS.map((a, i) => (
            <div key={a.title} className="build-strip-cell">
              <span className="build-strip-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="build-strip-title">{a.title}</h3>
              <p className="build-strip-tags">{a.tags.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

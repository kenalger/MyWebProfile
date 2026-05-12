const MARQUEE_ITEMS = [
  "ERP Maintenance",
  "CRM Platform",
  "Manufacturing",
  "Realty Accreditation",
  "Sales Operation",
  "Web · Mobile",
  "Internal Tools",
];

export default function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {items.map((it, i) => (
          <span key={i} className="strip-item">
            <span className="sep" />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

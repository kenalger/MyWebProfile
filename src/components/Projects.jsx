import { useEffect, useRef, useState } from "react";
import { PlaceholderUI } from "./PlaceholderUI.jsx";

const PROJECTS = [
  {
    id: "crm",
    name: "CRM System",
    short: "Sales pipeline · Web + Mobile",
    title: "An end-to-end CRM platform built from scratch.",
    desc: "Founding developer for MyVan's CRM. Modeled the lead → opportunity → deal pipeline, designed an offline-first React Native companion for the field team, and tied it back into the existing ERP so reps and ops see the same numbers.",
    role: "Founding Developer",
    timeline: "2026 — Present",
    stack: ["React Vite", "React Native", "ASP.NET Core", "MSSQL", "Supabase"],
    ctas: [
      { label: "Live demo", icon: "ext", href: "#" },
      { label: "GitHub", icon: "gh", href: "#" },
      { label: "Case study", icon: "doc", href: "#" },
    ],
    slides: [
      { kind: "dashboard", caption: "CRM dashboard · pipeline overview" },
      { kind: "kanban", caption: "Deal pipeline · drag-and-drop stages" },
      { kind: "lead", caption: "Lead detail view" },
      { kind: "mobile", caption: "Mobile companion · offline-first" },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing System",
    short: "Production planning · ERP module",
    title: "Manufacturing module replacing a wall of spreadsheets.",
    desc: "Extended the ERP with bill-of-materials, work orders, and production scheduling. Plant managers used to live in Excel; now they plan and report from one app, with real-time inventory deductions on each completion.",
    role: "Lead Developer",
    timeline: "2025 — 2026",
    stack: ["ASP.NET Core", "C#", "Angular TS", "MSSQL"],
    ctas: [{ label: "Case study", icon: "doc", href: "#" }],
    slides: [
      { kind: "schedule", caption: "Production schedule · weekly view" },
      { kind: "bom", caption: "Bill of materials editor" },
      { kind: "report", caption: "Shop-floor reporting" },
    ],
  },
  {
    id: "erp",
    name: "ERP Module System",
    short: "Modular core · cross-domain",
    title: "ERP modules, finally talking to each other.",
    desc: "Refactored a tangled set of ERP modules into a clean module-per-domain architecture. Each module owns its data, exposes a thin API, and shares only the entities it needs — so we can ship new modules without touching the legacy core.",
    role: "Module Developer",
    timeline: "2025",
    stack: ["C#", "ASP.NET Core", "MSSQL"],
    ctas: [{ label: "Case study", icon: "doc", href: "#" }],
    slides: [
      { kind: "modules", caption: "Module dependency map" },
      { kind: "settings", caption: "Per-module configuration" },
      { kind: "audit", caption: "Cross-module audit log" },
    ],
  },
  {
    id: "realty",
    name: "Realty Accreditation Module",
    short: "Broker onboarding · Compliance",
    title: "Broker accreditation, end to end.",
    desc: "Built the accreditation module for the realty arm: broker applications, document review, status tracking, and automatic notifications. Cut the average accreditation cycle from weeks to days.",
    role: "Full-stack Developer",
    timeline: "2025",
    stack: ["Angular TS", "ASP.NET Core", "MSSQL"],
    ctas: [{ label: "Case study", icon: "doc", href: "#" }],
    slides: [
      { kind: "intake", caption: "Application intake form" },
      { kind: "queue", caption: "Reviewer queue" },
      { kind: "status", caption: "Broker status dashboard" },
    ],
  },
  {
    id: "kpi",
    name: "Sales KPI Dashboard",
    short: "Analytics · Real-time",
    title: "A live KPI board the sales team actually checks.",
    desc: "An analytics surface on top of the CRM data: targets, attainment, win rate, cycle time, and rep leaderboard. Refreshes in seconds, with drill-down from any metric back to the deals behind it.",
    role: "Full-stack Developer",
    timeline: "2026",
    stack: ["React Vite", "TypeScript", "ASP.NET Core", "MSSQL"],
    ctas: [
      { label: "Live demo", icon: "ext", href: "#" },
      { label: "Case study", icon: "doc", href: "#" },
    ],
    slides: [
      { kind: "kpi", caption: "Top-level KPI board" },
      { kind: "leaderboard", caption: "Rep leaderboard" },
      { kind: "drilldown", caption: "Deal drill-down" },
    ],
  },
  {
    id: "salon",
    name: "Salon Management System",
    short: "Personal project · Bookings + POS",
    personal: true,
    title: "A salon platform that handles the day, end-to-end.",
    desc: "A personal project I built from scratch — a salon management system covering online bookings, the appointment calendar, service catalog, staff schedules, walk-in queue, point-of-sale and daily reporting. Designed it the way I'd want to use it if I were running the front desk: zero double-bookings, every receipt traceable, and the next free stylist always one tap away.",
    role: "Solo Developer (Design + Frontend + Backend)",
    timeline: "2026 · Personal",
    stack: ["React Vite", "TypeScript", "Supabase", "Tailwind"],
    ctas: [
      { label: "Live demo", icon: "ext", href: "#" },
      { label: "GitHub", icon: "gh", href: "#" },
    ],
    slides: [
      { kind: "booking-cal", caption: "Appointment calendar · weekly view" },
      { kind: "services", caption: "Service catalog & pricing" },
      { kind: "queue", caption: "Walk-in queue" },
      { kind: "pos", caption: "Point-of-sale & receipt" },
      { kind: "kpi", caption: "Daily reporting" },
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section id="projects" className="section" data-screen-label="03 Projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">03 — Selected Projects</span>
          <h2 className="h-display">
            Real systems, real users,<br />real workflows.
          </h2>
          <p className="lead muted">
            Each project below shipped to production and is in active use inside
            MyVan Holdings. Click through for screenshots and stack details.
          </p>
        </div>

        <div className="proj-layout" style={{ "--proj-count": PROJECTS.length }}>
          <aside className="proj-rail reveal">
            <div className="proj-rail-track">
              <span
                className="proj-rail-indicator"
                style={{ transform: `translateY(${active * 100}%)` }}
              />
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  className={`proj-rail-item ${active === i ? "active" : ""}`}
                  onClick={() => setActive(i)}
                  data-magnetic
                >
                  <span className="proj-rail-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="proj-rail-body">
                    <span className="proj-rail-name">
                      {p.name}
                      {p.personal && <span className="proj-rail-badge">Personal</span>}
                    </span>
                    <span className="proj-rail-meta">
                      {p.role} · {p.timeline}
                    </span>
                  </span>
                  <span className="proj-rail-arrow" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="proj-stage reveal" key={project.id}>
            <div className="proj-info">
              <div className="proj-num">
                PROJECT · {String(active + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                {project.personal && (
                  <span
                    style={{
                      marginLeft: 10,
                      display: "inline-flex",
                      alignItems: "center",
                      height: 20,
                      padding: "0 8px",
                      borderRadius: 999,
                      background: "color-mix(in oklab, var(--accent-1), transparent 85%)",
                      border: "1px solid var(--accent-line)",
                      color: "var(--accent-1)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "var(--f-display)",
                      fontWeight: 600,
                    }}
                  >
                    Personal
                  </span>
                )}
              </div>
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-desc lead">{project.desc}</p>

              <div className="proj-meta-grid">
                <div>
                  <div className="k">Role</div>
                  <div className="v">{project.role}</div>
                </div>
                <div>
                  <div className="k">Timeline</div>
                  <div className="v">{project.timeline}</div>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <div className="k">Stack</div>
                  <div className="proj-tags" style={{ marginTop: 8 }}>
                    {project.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="proj-ctas">
                {project.ctas.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"}`}
                    data-magnetic
                    onClick={(e) => e.preventDefault()}
                  >
                    <CtaIcon kind={c.icon} />
                    {c.label}
                    <span className="arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="proj-media">
              <Carousel project={project} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaIcon({ kind }) {
  if (kind === "gh")
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.6V15.2c0 .2.1.5.5.4 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8Z" />
      </svg>
    );
  if (kind === "doc")
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M3 1.5h6L13 5v9.5H3v-13Z M9 1.5V5h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Carousel({ project }) {
  const slides = project.slides;
  const [idx, setIdx] = useState(0);
  const [drag, setDrag] = useState({ active: false, startX: 0, dx: 0 });
  const trackRef = useRef(null);

  useEffect(() => {
    setIdx(0);
  }, [project.id]);

  const go = (n) => setIdx(Math.max(0, Math.min(slides.length - 1, n)));

  const onDown = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDrag({ active: true, startX: x, dx: 0 });
  };

  useEffect(() => {
    if (!drag.active) return;
    const onMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setDrag((d) => ({ ...d, dx: x - d.startX }));
    };
    const onUp = () => {
      const w = trackRef.current?.offsetWidth || 600;
      const threshold = w * 0.18;
      setDrag((d) => {
        if (d.dx < -threshold) setIdx((i) => Math.min(slides.length - 1, i + 1));
        else if (d.dx > threshold) setIdx((i) => Math.max(0, i - 1));
        return { active: false, startX: 0, dx: 0 };
      });
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [drag.active, slides.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") go(idx - 1);
      if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, slides.length]);

  const offset =
    -idx * 100 +
    (drag.active && trackRef.current ? (drag.dx / trackRef.current.offsetWidth) * 100 : 0);

  return (
    <div>
      <div className="carousel">
        <div className="carousel-counter">
          {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
        <div
          ref={trackRef}
          className={`carousel-track ${drag.active ? "dragging" : ""}`}
          style={{ transform: `translateX(${offset}%)` }}
          onMouseDown={onDown}
          onTouchStart={onDown}
        >
          {slides.map((s, i) => (
            <div key={i} className="carousel-slide">
              <PlaceholderUI kind={s.kind} caption={s.caption} />
            </div>
          ))}
        </div>
        <div className="carousel-arrows">
          <button
            className="carousel-arrow"
            onClick={() => go(idx - 1)}
            disabled={idx === 0}
            aria-label="Previous"
            data-magnetic
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="carousel-arrow"
            onClick={() => go(idx + 1)}
            disabled={idx === slides.length - 1}
            aria-label="Next"
            data-magnetic
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="carousel-thumbs">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`carousel-thumb ${idx === i ? "active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          >
            <PlaceholderUI kind={s.kind} compact />
          </button>
        ))}
      </div>
    </div>
  );
}

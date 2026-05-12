import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PlaceholderUI } from "./PlaceholderUI.jsx";
import salonLogin from "../assets/salon image.png";
import salonAppointments from "../assets/armansalon.png";

const OWNER_EMAIL = "algerdegdimaymay@gmail.com";

const PROJECTS = [
  {
    id: "crm",
    name: "CRM System",
    short: "Sales pipeline · Web + Mobile",
    title: "An end-to-end CRM platform built from scratch.",
    desc: "Founding developer for Myvan Holdings INC's CRM. Modeled the lead → opportunity → deal pipeline, designed an offline-first React Native companion for the field team, and tied it back into the existing ERP so reps and ops see the same numbers.",
    role: "Founding Developer",
    timeline: "2025 — 2026",
    stack: ["React Vite", "React Native", "ASP.NET Core", "MSSQL", "Supabase"],
    privateApp: true,
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
    privateApp: true,
    slides: [
      { kind: "job-order", caption: "Job orders · to be made" },
      { kind: "stocking-order", caption: "Stocking orders · inventory replenishment" },
      { kind: "production-order", caption: "Production orders · to be manufactured" },
      { kind: "bom", caption: "Bill of materials · production detail" },
      { kind: "inventory", caption: "Warehouse inventory · stock levels" },
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
    privateApp: true,
    slides: [
      { kind: "erp-purchasing", caption: "Purchasing module · PR approval workflow" },
      { kind: "erp-sales-order", caption: "Sales order module · order fulfillment" },
      { kind: "erp-inventory", caption: "Inventory module · warehouse stock overview" },
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
    privateApp: true,
    slides: [
      { kind: "intake", caption: "Application intake form" },
      { kind: "queue", caption: "Reviewer queue" },
      { kind: "status", caption: "Broker status dashboard" },
    ],
  },
  {
    id: "salon",
    name: "Salon Management System",
    short: "Personal project · Bookings + POS",
    personal: true,
    title: "A salon platform that handles the day, end-to-end.",
    desc: "A personal project I built from scratch — a salon management system covering online bookings, the appointment calendar, service catalog, staff schedules, walk-in queue, point-of-sale and daily reporting. Designed it the way I'd want to use it if I were running the front desk: zero double-bookings, every receipt traceable, and the next free stylist always one tap away. The platform is available for licensing or acquisition — get in touch to schedule a tailored walkthrough.",
    role: "Solo Developer (Design + Frontend + Backend)",
    timeline: "2026 · Personal",
    stack: ["React Vite", "TypeScript", "Supabase", "Tailwind", "ASP.NET Core"],
    ctas: [
      { label: "Request live demo", icon: "ext", action: "request-demo" },
      { label: "GitHub", icon: "gh", href: "https://github.com/kenalger/SalonManagementSystem" },
    ],
    slides: [
      { image: salonLogin, caption: "Landing & sign-in · Elevate Your Salon Experience" },
      { image: salonAppointments, caption: "Appointments · daily schedule & KPIs" },
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [demoRequest, setDemoRequest] = useState(null);
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

          <div className="proj-stage reveal">
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
                {project.privateApp ? (
                  <span className="proj-private" aria-label="Private application">
                    <CtaIcon kind="lock" />
                    Private application
                  </span>
                ) : (
                  project.ctas?.map((c, i) => {
                    const isExternal = c.href && /^https?:\/\//.test(c.href);
                    return (
                      <a
                        key={i}
                        href={c.href || "#"}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"}`}
                        data-magnetic
                        onClick={(e) => {
                          if (c.action === "request-demo") {
                            e.preventDefault();
                            setDemoRequest({ project: project.name });
                          } else if (!isExternal) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <CtaIcon kind={c.icon} />
                        {c.label}
                        <span className="arrow">→</span>
                      </a>
                    );
                  })
                )}
              </div>
            </div>

            <div className="proj-media">
              <Carousel project={project} />
            </div>
          </div>
        </div>
      </div>

      {demoRequest && (
        <DemoRequestModal
          projectName={demoRequest.project}
          onClose={() => setDemoRequest(null)}
        />
      )}
    </section>
  );
}

function DemoRequestModal({ projectName, onClose }) {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const subject = encodeURIComponent(`Live demo request — ${projectName}`);
    const body = encodeURIComponent(
      `Hi Ken,\n\nI'd like to request a live demo of ${projectName}.\n\nMy email: ${email}\n${note ? `\nNotes:\n${note}\n` : ""}\nThanks.`
    );
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="demo-modal-backdrop" onMouseDown={onClose}>
      <div
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="demo-modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <div className="demo-modal-eyebrow">Live demo · {projectName}</div>
        <h3 id="demo-modal-title" className="demo-modal-title">Request a guided walkthrough</h3>
        <p className="demo-modal-lead">
          Leave your email and I'll get back to you with a scheduled live demo,
          along with licensing and acquisition details.
        </p>
        <form onSubmit={onSubmit} className="demo-modal-form" noValidate>
          <label className="demo-modal-label" htmlFor="demo-email">Your email</label>
          <input
            id="demo-email"
            ref={inputRef}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="demo-modal-input"
            aria-invalid={touched && !valid}
          />
          {touched && !valid && (
            <span className="demo-modal-error">Please enter a valid email.</span>
          )}

          <label className="demo-modal-label" htmlFor="demo-note">Anything I should know? (optional)</label>
          <textarea
            id="demo-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Use case, preferred time, team size…"
            rows={3}
            className="demo-modal-input"
          />

          <div className="demo-modal-actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Send request
              <span className="arrow">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SlideImage({ src, caption, eager, onOpen }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="slide-image">
      {!loaded && <div className="slide-skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={caption || ""}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onClick={onOpen}
        className={`${loaded ? "is-loaded" : "is-loading"} ${onOpen ? "is-zoomable" : ""}`}
      />
      {caption && <div className="slide-image-caption">{caption}</div>}
    </div>
  );
}

function ThumbImage({ src }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="thumb-skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`carousel-thumb-img ${loaded ? "is-loaded" : "is-loading"}`}
      />
    </>
  );
}

function CtaIcon({ kind }) {
  if (kind === "lock")
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="7" width="10" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
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
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const draggedRef = useRef(false);
  const trackRef = useRef(null);

  useEffect(() => {
    setIdx(0);
  }, [project.id]);

  const go = (n) => setIdx(Math.max(0, Math.min(slides.length - 1, n)));

  const onDown = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    draggedRef.current = false;
    setDrag({ active: true, startX: x, dx: 0 });
  };

  useEffect(() => {
    if (!drag.active) return;
    const onMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = x - drag.startX;
      if (Math.abs(dx) > 5) draggedRef.current = true;
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
              {s.image ? (
                <SlideImage
                  src={s.image}
                  caption={s.caption}
                  eager={i === 0}
                  onOpen={() => {
                    if (draggedRef.current) return;
                    setLightboxIdx(i);
                  }}
                />
              ) : (
                <PlaceholderUI kind={s.kind} caption={s.caption} />
              )}
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
            {s.image ? (
              <ThumbImage src={s.image} />
            ) : (
              <PlaceholderUI kind={s.kind} compact />
            )}
          </button>
        ))}
      </div>

      {lightboxIdx !== null && slides[lightboxIdx]?.image && (
        <Lightbox
          slides={slides.filter((s) => s.image)}
          startIdx={slides.filter((s) => s.image).findIndex((s) => s === slides[lightboxIdx])}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </div>
  );
}

function Lightbox({ slides, startIdx, onClose }) {
  const [i, setI] = useState(startIdx);
  const total = slides.length;
  const go = (n) => setI((prev) => (n + total) % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(i - 1);
      else if (e.key === "ArrowRight") go(i + 1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [i, onClose]);

  const s = slides[i];

  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      {total > 1 && (
        <>
          <button
            className="lightbox-arrow lightbox-arrow-prev"
            onClick={(e) => { e.stopPropagation(); go(i - 1); }}
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="lightbox-arrow lightbox-arrow-next"
            onClick={(e) => { e.stopPropagation(); go(i + 1); }}
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <img src={s.image} alt={s.caption || ""} className="lightbox-img" />
        <div className="lightbox-meta">
          {s.caption && <span className="lightbox-caption">{s.caption}</span>}
          {total > 1 && (
            <span className="lightbox-counter">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

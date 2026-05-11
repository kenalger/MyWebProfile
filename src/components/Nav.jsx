import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const [mode, setMode] = useState(() => document.body.dataset.mode || "dark");
  const linksRef = useRef(null);

  useEffect(() => {
    const onMode = (e) => setMode(e.detail || document.body.dataset.mode || "dark");
    window.addEventListener("modechange", onMode);
    const t = setTimeout(() => setMode(document.body.dataset.mode || "dark"), 0);
    return () => {
      window.removeEventListener("modechange", onMode);
      clearTimeout(t);
    };
  }, []);

  const toggleMode = () => {
    const next = mode === "light" ? "dark" : "light";
    if (typeof window.__setMode === "function") window.__setMode(next);
    setMode(next);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + window.innerHeight * 0.35;
      const sections = ["hero", ...NAV_ITEMS.map((n) => n.id)];
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!linksRef.current) return;
    const el = linksRef.current.querySelector(`[data-id="${active}"]`);
    if (el) {
      const r = el.getBoundingClientRect();
      const pr = linksRef.current.getBoundingClientRect();
      setPill({ left: r.left - pr.left, width: r.width, opacity: 1 });
    } else {
      setPill((p) => ({ ...p, opacity: 0 }));
    }
  }, [active]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={(e) => scrollTo(e, "hero")} data-magnetic>
          <span className="dot" />
          <span>Ken Dimaymay</span>
        </a>
        <ul className="nav-links" ref={linksRef}>
          <span
            className="nav-pill"
            style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
          />
          {NAV_ITEMS.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                data-id={n.id}
                className={`nav-link ${active === n.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, n.id)}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-mode"
            aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
            onClick={toggleMode}
            data-magnetic
          >
            <span className={`nav-mode-icon ${mode === "light" ? "is-light" : "is-dark"}`}>
              <svg className="sun" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
                <path
                  d="M8 1.5v1.6M8 12.9v1.6M14.5 8h-1.6M3.1 8H1.5M12.6 3.4l-1.1 1.1M4.5 11.5l-1.1 1.1M12.6 12.6l-1.1-1.1M4.5 4.5 3.4 3.4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="moon" width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 9.6A5.5 5.5 0 1 1 6.4 2.5a4.5 4.5 0 0 0 7.1 7.1Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => scrollTo(e, "contact")}
            data-magnetic
          >
            Let's talk
          </a>
        </div>
        <button className="nav-burger" aria-label="Menu" onClick={(e) => scrollTo(e, "contact")}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 4h12M2 8h12M2 12h12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

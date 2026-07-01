import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills", collapse: true },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("contact");
  const [mode, setMode] = useState(() => document.body.dataset.mode || "paper");

  useEffect(() => {
    const onMode = (e) => setMode(e.detail || document.body.dataset.mode || "paper");
    window.addEventListener("modechange", onMode);
    return () => window.removeEventListener("modechange", onMode);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = active;
      for (const n of NAV_ITEMS) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) current = n.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMode = () => {
    const next = mode === "slate" ? "paper" : "slate";
    if (typeof window.__setMode === "function") window.__setMode(next);
    setMode(next);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="header-brand" onClick={toTop}>
        Ken Alger Dimaymay
      </a>
      <nav className="header-nav">
        {NAV_ITEMS.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            data-collapse={n.collapse ? "" : undefined}
            className={active === n.id ? "active" : ""}
            onClick={(e) => scrollTo(e, n.id)}
          >
            {n.label}
          </a>
        ))}
        <button
          type="button"
          className="header-mode"
          aria-label={mode === "slate" ? "Switch to paper theme" : "Switch to slate theme"}
          onClick={toggleMode}
        >
          {mode === "slate" ? (
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M8 1.5v1.6M8 12.9v1.6M14.5 8h-1.6M3.1 8H1.5M12.6 3.4l-1.1 1.1M4.5 11.5l-1.1 1.1M12.6 12.6l-1.1-1.1M4.5 4.5 3.4 3.4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 9.6A5.5 5.5 0 1 1 6.4 2.5a4.5 4.5 0 0 0 7.1 7.1Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Exp" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ mode, setTweak }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#contact");

  useEffect(() => {
    const onScroll = () => {
      const y =
        window.scrollY ||
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        0;
      setScrolled(y > 30);

      // active section = the last one whose top has passed the viewport middle
      const mid = window.innerHeight * 0.4;
      let current = active;
      for (const { href } of LINKS) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= mid) current = href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="brand ul">
        ken_alger_dimaymay
      </a>
      <nav className="nav">
        {LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`ul${active === href ? " active" : ""}`}
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          className="theme-toggle"
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={mode === "dark"}
          onClick={() => setTweak("mode", mode === "dark" ? "light" : "dark")}
        >
          {mode === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

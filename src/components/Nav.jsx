import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Exp" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
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
      </nav>
    </header>
  );
}

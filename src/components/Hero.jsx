import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero" data-screen-label="01 Hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-status reveal in">
              <span className="pulse" />
              <span>Available for new opportunities</span>
            </div>
            <h1 className="h-display reveal in" style={{ "--rd": "60ms" }}>
              Software Developer<br />
              <span className="accent">& Web Developer</span>
            </h1>
            <p className="hero-tag reveal in" style={{ "--rd": "140ms" }}>
              Turning workflows into scalable software.
            </p>
            <p className="lead hero-desc reveal in" style={{ "--rd": "200ms" }}>
              I build scalable business systems, CRM platforms, and enterprise web
              applications. Currently at <span className="silver">MyVan Holdings Inc.</span>,
              where I went from maintaining the company's ERP to founding its CRM
              platform across web and mobile.
            </p>
            <div className="hero-ctas reveal in" style={{ "--rd": "260ms" }}>
              <a
                href="#projects"
                className="btn btn-primary"
                data-magnetic
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                View Projects
                <span className="arrow">→</span>
              </a>
              <a
                href="#contact"
                className="btn btn-ghost"
                data-magnetic
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Contact Me
              </a>
            </div>
            <div className="hero-meta reveal in" style={{ "--rd": "340ms" }}>
              <div className="hero-meta-item">
                <span className="k">2 yrs</span>
                <span className="v">Corporate experience</span>
              </div>
              <div className="hero-meta-item">
                <span className="k">1 yr</span>
                <span className="v">Freelancing</span>
              </div>
              <div className="hero-meta-item">
                <span className="k">5</span>
                <span className="v">Modules shipped</span>
              </div>
              <div className="hero-meta-item">
                <span className="k">2</span>
                <span className="v">Platforms (web · mobile)</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb-ring r1" />
            <div className="orb-ring r2" />
            <div className="orb-ring r3" />
            <div className="orb" />
            <CodeWindow />
            <div className="float-card fc-1">
              <span className="icon">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8l3 3 9-9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="v">Build passing</div>
                <div style={{ color: "var(--text-2)", fontSize: 11.5 }}>CRM · prod deploy</div>
              </div>
            </div>
            <div className="float-card fc-2">
              <span className="icon">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 13V7m4 6V4m4 9v-5m4 5V2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <div className="v">+38%</div>
                <div style={{ color: "var(--text-2)", fontSize: 11.5 }}>Sales pipeline / Q</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeWindow() {
  const FULL = "  return scalable(business);";
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    let t;
    const start = setTimeout(function loop() {
      if (i <= FULL.length) {
        setTyped(FULL.slice(0, i));
        i++;
        t = setTimeout(loop, 55);
      } else {
        setTimeout(() => {
          i = 0;
          setTyped("");
          t = setTimeout(loop, 200);
        }, 2400);
      }
    }, 600);
    return () => {
      clearTimeout(start);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="code-window">
      <div className="code-bar">
        <div className="lights"><span /><span /><span /></div>
        <div className="file">~/ken/crm/core.ts</div>
      </div>
      <div className="code-body">
        <div className="code-line"><span className="ln">1</span><span><span className="tk-com">// CRM platform · web + mobile</span></span></div>
        <div className="code-line"><span className="ln">2</span><span><span className="tk-key">import</span> <span className="tk-pun">{"{ "}</span><span className="tk-var">Pipeline</span><span className="tk-pun">, </span><span className="tk-var">Lead</span><span className="tk-pun">{" }"}</span> <span className="tk-key">from</span> <span className="tk-str">"@/crm"</span><span className="tk-pun">;</span></span></div>
        <div className="code-line"><span className="ln">3</span><span> </span></div>
        <div className="code-line"><span className="ln">4</span><span><span className="tk-key">export function</span> <span className="tk-fn">build</span><span className="tk-pun">(</span><span className="tk-var">team</span><span className="tk-pun">: </span><span className="tk-var">Team</span><span className="tk-pun">) {"{"}</span></span></div>
        <div className="code-line"><span className="ln">5</span><span><span className="tk-pun">  </span><span className="tk-key">const</span> <span className="tk-var">business</span> <span className="tk-pun">= </span><span className="tk-var">team</span><span className="tk-pun">.</span><span className="tk-fn">scope</span><span className="tk-pun">(</span><span className="tk-num">1</span><span className="tk-pun">);</span></span></div>
        <div className="code-line"><span className="ln">6</span><span><span className="tk-var">{typed}</span><span className="code-cursor" /></span></div>
        <div className="code-line"><span className="ln">7</span><span><span className="tk-pun">{"}"}</span></span></div>
      </div>
    </div>
  );
}

import React, { useEffect, lazy, Suspense } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import MarqueeStrip from "./components/MarqueeStrip.jsx";
import Footer from "./components/Footer.jsx";
import TweaksPanel from "./components/TweaksPanel.jsx";

const Work = lazy(() => import("./components/Work.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
import { useTweaks } from "./hooks/useTweaks.js";
import { useReveal } from "./hooks/useReveal.js";
import { useMagnetic } from "./hooks/useMagnetic.js";
import { applyTheme } from "./theme.js";

const TWEAK_DEFAULTS = {
  mode: "light",
  accent: "warm",
  bg: "charcoal",
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS, "mywebprofile:tweaks");

  useEffect(() => {
    applyTheme(t);
  }, [t.accent, t.bg, t.mode]);

  useEffect(() => {
    window.__setMode = (m) => setTweak("mode", m);
    window.dispatchEvent(new CustomEvent("modechange", { detail: t.mode }));
    return () => {
      delete window.__setMode;
    };
  }, [t.mode, setTweak]);

  useReveal();
  useMagnetic();

  return (
    <>
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <MarqueeStrip />
        <Suspense fallback={<SectionFallback />}>
          <Work />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <TweaksPanel t={t} setTweak={setTweak} />
    </>
  );
}

function SectionFallback() {
  return (
    <div className="section-fallback" aria-hidden="true">
      <div className="section-fallback-inner" />
    </div>
  );
}

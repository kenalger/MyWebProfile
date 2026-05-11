import React, { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import MarqueeStrip from "./components/MarqueeStrip.jsx";
import Footer from "./components/Footer.jsx";
import TweaksPanel from "./components/TweaksPanel.jsx";
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
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel t={t} setTweak={setTweak} />
    </>
  );
}

import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import TweaksPanel from "./components/TweaksPanel.jsx";
import { useTweaks } from "./hooks/useTweaks.js";
import { useReveal } from "./hooks/useReveal.js";
import { applyTheme } from "./theme.js";

const TWEAK_DEFAULTS = {
  mode: "paper",
  accent: "forest",
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS, "mywebprofile:tweaks:v2");

  useEffect(() => {
    applyTheme(t);
    window.dispatchEvent(new CustomEvent("modechange", { detail: t.mode }));
  }, [t.accent, t.mode]);

  useEffect(() => {
    window.__setMode = (m) => setTweak("mode", m);
    return () => {
      delete window.__setMode;
    };
  }, [setTweak]);

  useReveal();

  return (
    <>
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel t={t} setTweak={setTweak} />
    </>
  );
}

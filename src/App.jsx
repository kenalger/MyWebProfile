import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useTweaks } from "./hooks/useTweaks.js";
import { useReveal } from "./hooks/useReveal.js";
import { applyTheme } from "./theme.js";

const TWEAK_DEFAULTS = {
  mode: "light",
  accent: "blue",
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS, "mywebprofile:tweaks:v3");

  useEffect(() => {
    applyTheme(t);
  }, [t.mode, t.accent]);

  useReveal();

  return (
    <div className="page">
      <Nav mode={t.mode} setTweak={setTweak} />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

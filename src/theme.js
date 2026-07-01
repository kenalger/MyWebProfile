// Accent palette + theme — mirrors the imported design's Theme props.
export const ACCENTS = {
  blue: "#0a5bff",
  red: "#ff3b30",
  ink: "#0a0a0a",
  green: "#1f5c3d",
};

export function applyTheme(t) {
  const root = document.documentElement;
  const accent = ACCENTS[t.accent] || ACCENTS.blue;
  root.dataset.theme = t.mode === "dark" ? "dark" : "light";
  // In dark mode the "ink" accent would vanish against the near-black bg,
  // so fall back to a readable tint.
  root.style.setProperty(
    "--accent",
    t.mode === "dark" && t.accent === "ink" ? "#f5f5f5" : accent
  );
}

// Accent palette — matches the imported design's Theme props.
export const ACCENTS = {
  forest: "#2c4a3e",
  rust: "#8a3324",
  indigo: "#2b3a67",
  ink: "#1a1916",
};

export function applyTheme(t) {
  const accent = ACCENTS[t.accent] || ACCENTS.forest;
  document.documentElement.style.setProperty("--accent", accent);
  document.body.dataset.mode = t.mode === "slate" ? "slate" : "paper";
}

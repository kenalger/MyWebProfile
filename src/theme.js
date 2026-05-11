export const ACCENT_THEMES = {
  "blue-cyan": { a1: "#6b9bff", a2: "#8ad8ff", soft: "rgba(107, 155, 255, 0.12)", line: "rgba(107, 155, 255, 0.22)" },
  lavender:    { a1: "#9d8bff", a2: "#c4b1ff", soft: "rgba(157, 139, 255, 0.14)", line: "rgba(157, 139, 255, 0.26)" },
  indigo:      { a1: "#7a8df0", a2: "#a7b6ff", soft: "rgba(122, 141, 240, 0.14)", line: "rgba(122, 141, 240, 0.26)" },
  rose:        { a1: "#e89aa6", a2: "#f0c1c8", soft: "rgba(232, 154, 166, 0.14)", line: "rgba(232, 154, 166, 0.26)" },
  warm:        { a1: "#c96f4a", a2: "#e8a784", soft: "rgba(201, 111, 74, 0.12)",  line: "rgba(201, 111, 74, 0.22)"  },
};

export const BG_THEMES = {
  charcoal:    { bg0: "#0c0e13", bg1: "#11141b", bg2: "#161a23", grada: "#0e1118", gradb: "#0a0c11" },
  slate:       { bg0: "#0e131c", bg1: "#141a26", bg2: "#1a2231", grada: "#101824", gradb: "#0b121b" },
  "near-black":{ bg0: "#07080b", bg1: "#0d0f14", bg2: "#12151c", grada: "#0a0b0f", gradb: "#050608" },
};

export function applyTheme(t) {
  const a = ACCENT_THEMES[t.accent] || ACCENT_THEMES["blue-cyan"];
  const r = document.documentElement.style;
  r.setProperty("--accent-1", a.a1);
  r.setProperty("--accent-2", a.a2);
  r.setProperty("--accent-soft", a.soft);
  r.setProperty("--accent-line", a.line);

  document.body.dataset.mode = t.mode === "light" ? "light" : "dark";

  if (t.mode !== "light") {
    const b = BG_THEMES[t.bg] || BG_THEMES.charcoal;
    r.setProperty("--bg-0", b.bg0);
    r.setProperty("--bg-1", b.bg1);
    r.setProperty("--bg-2", b.bg2);
    r.setProperty("--bg-grad-a", b.grada);
    r.setProperty("--bg-grad-b", b.gradb);
  } else {
    ["--bg-0", "--bg-1", "--bg-2", "--bg-grad-a", "--bg-grad-b"].forEach((k) =>
      r.removeProperty(k)
    );
  }
}

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    const observeAll = (root) =>
      root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    observeAll(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.classList?.contains("reveal") && !node.classList.contains("in")) {
            io.observe(node);
          }
          if (typeof node.querySelectorAll === "function") observeAll(node);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Failsafe: anything still hidden after 1.2s gets revealed unconditionally
    // (covers cases where IO never fires — fast scroll, prefers-reduced-motion, etc.)
    const failsafe = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        el.classList.add("in");
      });
    }, 1200);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
}

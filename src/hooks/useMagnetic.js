import { useEffect } from "react";

export function useMagnetic() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-magnetic]");
    const handlers = [];
    els.forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.18;
        const dy = (e.clientY - cy) * 0.25;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push([el, onMove, onLeave]);
    });
    return () => {
      handlers.forEach(([el, m, l]) => {
        el.removeEventListener("mousemove", m);
        el.removeEventListener("mouseleave", l);
      });
    };
  });
}

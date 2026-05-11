import { useEffect, useRef, useState } from "react";

const PANEL_STYLE = `
  .twk-fab{position:fixed;right:18px;bottom:18px;z-index:2147483645;
    width:42px;height:42px;border-radius:999px;border:1px solid var(--line-strong);
    background:rgba(12,14,19,0.78);color:var(--text-0);
    backdrop-filter:blur(14px) saturate(150%);-webkit-backdrop-filter:blur(14px) saturate(150%);
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 8px 28px rgba(0,0,0,.25);cursor:pointer;
    transition:transform .2s ease, background .25s, border-color .25s}
  .twk-fab:hover{transform:translateY(-2px);border-color:var(--accent-line)}
  body[data-mode="light"] .twk-fab{
    background:rgba(255,255,255,0.82);border-color:rgba(38,30,18,0.12);
    color:var(--text-0);box-shadow:0 8px 28px rgba(38,30,18,.12)}
  .twk-panel{position:fixed;right:18px;bottom:70px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 100px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.82);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:pointer;padding:4px 6px;line-height:1.2}
`;

export default function TweaksPanel({ t, setTweak }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <style>{PANEL_STYLE}</style>
      <button
        type="button"
        className="twk-fab"
        aria-label="Open theme tweaks"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M19.4 13.6a7.5 7.5 0 0 0 .1-3.2l2-1.5-2-3.4-2.3.9a7.5 7.5 0 0 0-2.8-1.6L14 2h-4l-.4 2.8a7.5 7.5 0 0 0-2.8 1.6l-2.3-.9-2 3.4 2 1.5a7.5 7.5 0 0 0 .1 3.2l-2 1.5 2 3.4 2.3-.9a7.5 7.5 0 0 0 2.8 1.6L10 22h4l.4-2.8a7.5 7.5 0 0 0 2.8-1.6l2.3.9 2-3.4-2-1.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div ref={panelRef} className="twk-panel" role="dialog" aria-label="Theme tweaks">
          <div className="twk-hd">
            <b>Tweaks</b>
            <button className="twk-x" aria-label="Close tweaks" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <div className="twk-body">
            <TweakSection label="Mode" />
            <TweakRadio
              label="Appearance"
              value={t.mode}
              options={[
                { value: "dark", label: "Dark" },
                { value: "light", label: "Light" },
              ]}
              onChange={(v) => setTweak("mode", v)}
            />
            <TweakSection label="Accent" />
            <TweakSelect
              label="Theme"
              value={t.accent}
              options={[
                { value: "blue-cyan", label: "Blue · Cyan" },
                { value: "lavender", label: "Lavender" },
                { value: "indigo", label: "Indigo" },
                { value: "rose", label: "Rose" },
                { value: "warm", label: "Warm · Terracotta" },
              ]}
              onChange={(v) => setTweak("accent", v)}
            />
            {t.mode !== "light" && (
              <>
                <TweakSection label="Background tone" />
                <TweakRadio
                  label="Tone"
                  value={t.bg}
                  options={[
                    { value: "charcoal", label: "Charcoal" },
                    { value: "slate", label: "Slate" },
                    { value: "near-black", label: "Near black" },
                  ]}
                  onChange={(v) => setTweak("bg", v)}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function TweakSection({ label }) {
  return <div className="twk-sect">{label}</div>;
}

function TweakRow({ label, children }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>{label}</span></div>
      {children}
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const opts = options.map((o) => (typeof o === "object" ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;
  return (
    <TweakRow label={label}>
      <div role="radiogroup" className="twk-seg">
        <div
          className="twk-seg-thumb"
          style={{
            left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
            width: `calc((100% - 4px) / ${n})`,
          }}
        />
        {opts.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={o.value === value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select
        className="twk-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => {
          const v = typeof o === "object" ? o.value : o;
          const l = typeof o === "object" ? o.label : o;
          return (
            <option key={v} value={v}>
              {l}
            </option>
          );
        })}
      </select>
    </TweakRow>
  );
}

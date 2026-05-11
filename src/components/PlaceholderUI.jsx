import React from "react";

export function PlaceholderUI({ kind, caption, compact }) {
  return (
    <div className="placeholder-ui" style={compact ? { padding: 8, gap: 4 } : null}>
      {!compact && (
        <div className="ph-row" style={{ alignItems: "center" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,.15)" }} />
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,.15)" }} />
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,.15)" }} />
          </div>
          <div className="ph-tag" style={{ marginLeft: 10 }}>{caption}</div>
        </div>
      )}
      <PlaceholderBody kind={kind} compact={compact} />
      {!compact && <div className="ph-watermark">Screenshot placeholder · drop a real shot here</div>}
    </div>
  );
}

function PlaceholderBody({ kind }) {
  const accent = "var(--accent-1)";
  switch (kind) {
    case "dashboard":
    case "kpi":
      return (
        <>
          <div className="ph-row">
            {[1, 2, 3].map((i) => (
              <div className="ph-card" key={i}>
                <div className="ph-tag">METRIC {i}</div>
                <div className="ph-num">{["$842k", "38%", "1,204"][i - 1]}</div>
                <div className="ph-spark">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <span key={j} style={{ height: `${20 + Math.sin((i * 3 + j) * 0.7) * 16 + j * 2}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="ph-card" style={{ flex: 1 }}>
            <div className="ph-tag">PIPELINE</div>
            <div style={{ display: "flex", gap: 6, alignItems: "end", height: "100%", paddingTop: 8 }}>
              {Array.from({ length: 16 }).map((_, j) => (
                <span
                  key={j}
                  style={{
                    flex: 1,
                    background: `linear-gradient(180deg, ${accent}, rgba(107,155,255,0.15))`,
                    height: `${30 + Math.sin(j * 0.8) * 30 + j * 3}%`,
                    borderRadius: 3,
                    minHeight: 6,
                  }}
                />
              ))}
            </div>
          </div>
        </>
      );
    case "kanban":
      return (
        <div className="ph-row" style={{ flex: 1, gap: 10 }}>
          {["New", "Qualified", "Proposal", "Won"].map((stage, i) => (
            <div key={stage} className="ph-card" style={{ minHeight: 0 }}>
              <div className="ph-tag" style={{ color: i === 3 ? "#5dd39e" : "var(--accent-2)" }}>{stage}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {[1, 2, 3].slice(0, 4 - Math.floor(i / 2)).map((k) => (
                  <div
                    key={k}
                    style={{
                      height: 30,
                      borderRadius: 6,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--line)",
                      padding: "6px 8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <span style={{ height: 6, width: "70%", borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
                    <span style={{ height: 4, width: "40%", borderRadius: 3, background: "rgba(255,255,255,0.08)" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "lead":
      return (
        <div className="ph-row" style={{ flex: 1 }}>
          <div className="ph-card" style={{ flex: 1.3 }}>
            <div className="ph-tag">CONTACT</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 4 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: accent, opacity: 0.4 }} />
              <div style={{ flex: 1 }}>
                <span className="ph-bar" style={{ width: "60%", display: "block", height: 8 }} />
                <span className="ph-bar" style={{ width: "40%", display: "block", height: 6, marginTop: 6 }} />
              </div>
            </div>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="ph-bar" style={{ height: 6 }} />
              <span className="ph-bar" style={{ height: 6, width: "85%" }} />
              <span className="ph-bar" style={{ height: 6, width: "70%" }} />
            </div>
          </div>
          <div className="ph-card">
            <div className="ph-tag">ACTIVITY</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: i === 1 ? accent : "rgba(255,255,255,0.2)" }} />
                  <span className="ph-bar" style={{ flex: 1, height: 5 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "mobile":
      return (
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          {[0, 1].map((i) => (
            <div
              key={i}
              style={{
                width: 160,
                aspectRatio: "9/19",
                borderRadius: 22,
                background: "linear-gradient(180deg, #1a1f2b, #0e1218)",
                border: "1px solid var(--line-strong)",
                padding: 14,
                boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                transform: i === 0 ? "rotate(-4deg)" : "rotate(4deg) translateY(-12px)",
              }}
            >
              <div style={{ height: 6, width: 36, borderRadius: 999, background: "rgba(255,255,255,0.1)", margin: "2px auto 6px" }} />
              <div className="ph-tag" style={{ fontSize: 8 }}>{i === 0 ? "PIPELINE" : "DEAL"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[1, 2, 3, 4].map((k) => (
                  <span
                    key={k}
                    className="ph-bar"
                    style={{
                      height: 18,
                      borderRadius: 6,
                      background: k === 1 ? "rgba(107,155,255,0.2)" : "rgba(255,255,255,0.04)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "schedule": {
      const cu = "#c87941";
      const jobColors = ["#c87941", "#4a7fa8", "#7a5ca0", "#5aa87a", "#a87a4a"];
      const lines = ["LINE-A", "LINE-B", "CNC-01", "ASSEMB", "INSPEC"];
      const gantt = [
        [[0, 3, "JO-441", 0], [3, 2, "JO-445", 2]],
        [[0, 5, "JO-442", 1]],
        [[1, 2, "JO-443", 0], [3, 2, "JO-446", 3]],
        [[0, 4, "JO-444", 2]],
        [[2, 3, "JO-447", 1]],
      ];
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>PRODUCTION SCHEDULE · WK 47</div>
            <div style={{ display: "flex", gap: 4 }}>
              {["ACTIVE", "PLANNED"].map((s, i) => (
                <span key={s} style={{ fontSize: 8, padding: "2px 5px", borderRadius: 3, background: i === 0 ? `${cu}22` : "rgba(255,255,255,0.04)", border: `1px solid ${i === 0 ? `${cu}66` : "rgba(255,255,255,0.1)"}`, color: i === 0 ? cu : "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 4 }}>
            <div />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 2 }}>
              {["MON", "TUE", "WED", "THU", "FRI"].map(d => (
                <div key={d} style={{ textAlign: "center", fontSize: 8, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", paddingBottom: 3, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{d}</div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            {lines.map((line, i) => (
              <div key={line} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 4, height: 22 }}>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.32)", fontFamily: "var(--f-mono)", display: "flex", alignItems: "center", letterSpacing: "0.04em" }}>{line}</div>
                <div style={{ position: "relative", height: "100%", background: "rgba(255,255,255,0.02)", borderRadius: 3 }}>
                  {gantt[i].map(([start, span, jobId, cIdx], j) => (
                    <div key={j} style={{ position: "absolute", top: 2, bottom: 2, left: `calc(${start * 20}% + 2px)`, width: `calc(${span * 20}% - 4px)`, background: `linear-gradient(90deg, ${jobColors[cIdx]}, ${jobColors[cIdx]}99)`, borderRadius: 3, display: "flex", alignItems: "center", paddingLeft: 5, fontSize: 7, color: "rgba(255,255,255,0.92)", fontFamily: "var(--f-mono)", letterSpacing: "0.05em", boxShadow: `0 1px 6px ${jobColors[cIdx]}44`, zIndex: 1 }}>{jobId}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "stocking-order": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const steel = "#4a7fa8";
      const schedule = [
        { date: "NOV 14", day: "TUE", orders: [
          { id: "ST-8831", item: "RM-1043", desc: "Galvanized Steel Coil 0.5mm", qty: 5000, warehouse: "WH-02", status: "IN PRODUCTION" },
        ]},
        { date: "NOV 16", day: "THU", orders: [
          { id: "ST-8821", item: "RM-1082", desc: "Color Coated Steel Sheet", qty: 2000, warehouse: "WH-01", status: "APPROVED" },
          { id: "ST-8825", item: "RM-2201", desc: "EPDM Rubber Seal Strip", qty: 800, warehouse: "WH-01", status: "APPROVED" },
        ]},
        { date: "NOV 20", day: "MON", orders: [
          { id: "ST-8829", item: "RM-4412", desc: "Polyurethane Foam Closure", qty: 500, warehouse: "WH-02", status: "PENDING" },
          { id: "ST-8830", item: "RM-5521", desc: "Hex Screw Self-Drill #14", qty: 10000, warehouse: "WH-01", status: "PENDING" },
        ]},
      ];
      const statusColor = { APPROVED: cu, PENDING: steel, "IN PRODUCTION": green };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>STOCKING ORDER SCHEDULE</div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>INVENTORY REPLENISHMENT</span>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {schedule.map(day => (
              <div key={day.date}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu, fontWeight: 600 }}>{day.date}</span>
                  <span style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{day.day}</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 16 }}>
                  {day.orders.map(o => (
                    <div key={o.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "7px 10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu, fontWeight: 600 }}>{o.id}</span>
                          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)", padding: "1px 5px", background: "rgba(255,255,255,0.05)", borderRadius: 3, letterSpacing: "0.06em" }}>{o.item}</span>
                        </div>
                        <span style={{ fontSize: 7, padding: "2px 6px", borderRadius: 3, background: `${statusColor[o.status]}18`, border: `1px solid ${statusColor[o.status]}55`, color: statusColor[o.status], letterSpacing: "0.07em", fontWeight: 600 }}>{o.status}</span>
                      </div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)" }}>{o.desc} <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)" }}>· Qty: {o.qty} · {o.warehouse}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "production-order": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const steel = "#4a7fa8";
      const schedule = [
        { date: "NOV 14", day: "TUE", orders: [
          { id: "PO-1033", so: "ST-8821", item: "Color Coated Roof Panel", qty: 2000, ws: "ROLL-1", ops: 3, pct: 71, status: "RUNNING" },
        ]},
        { date: "NOV 15", day: "WED", orders: [
          { id: "PO-1034", so: "ST-8825", item: "EPDM Seal Strip Run", qty: 800, ws: "PRESS-1", ops: 1, pct: 38, status: "RUNNING" },
        ]},
        { date: "NOV 17", day: "FRI", orders: [
          { id: "PO-1035", so: "ST-8829", item: "PU Foam Closure Strip", qty: 500, ws: "BEND-01", ops: 2, pct: 0, status: "SCHEDULED" },
          { id: "PO-1037", so: "ST-8831", item: "G.I. Ridge Cap Roll", qty: 1000, ws: "ROLL-2", ops: 0, pct: 0, status: "SCHEDULED" },
        ]},
        { date: "NOV 20", day: "MON", orders: [
          { id: "PO-1036", so: "ST-8830", item: "Fastener Assembly Kit", qty: 10000, ws: "ASSEMB", ops: 0, pct: 0, status: "PENDING" },
        ]},
      ];
      const statusColor = { RUNNING: cu, SCHEDULED: steel, PENDING: "rgba(255,255,255,0.3)", COMPLETE: green };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>PRODUCTION ORDER SCHEDULE</div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>STOCKING ORDER → PRODUCTION</span>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {schedule.map(day => (
              <div key={day.date}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu, fontWeight: 600 }}>{day.date}</span>
                  <span style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{day.day}</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 16 }}>
                  {day.orders.map(o => (
                    <div key={o.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "7px 10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu, fontWeight: 600 }}>{o.id}</span>
                          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)", padding: "1px 5px", background: "rgba(255,255,255,0.05)", borderRadius: 3, letterSpacing: "0.06em" }}>{o.so}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          {o.pct > 0 && (
                            <>
                              <div style={{ width: 44, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }}>
                                <div style={{ width: `${o.pct}%`, height: "100%", background: `linear-gradient(90deg, ${cu}, ${cu}88)` }} />
                              </div>
                              <span style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: cu }}>{o.pct}%</span>
                            </>
                          )}
                          <span style={{ fontSize: 7, padding: "2px 6px", borderRadius: 3, background: `${statusColor[o.status]}18`, border: `1px solid ${statusColor[o.status]}44`, color: statusColor[o.status], letterSpacing: "0.07em" }}>{o.status}</span>
                        </div>
                      </div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)" }}>{o.item} <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)" }}>· Qty: {o.qty} · {o.ws}{o.ops > 0 ? ` · ${o.ops} ops` : ""}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "bom": {
      const cu = "#c87941";
      const items = [
        { code: "FG-3001", desc: "Standing Seam Roof Panel Set", qty: "100", unit: "SET", level: 0, status: "ok" },
        { code: "RM-1043", desc: "Galvanized Steel Coil 0.5mm", qty: "500", unit: "KG", level: 1, status: "ok" },
        { code: "RM-1082", desc: "Color Coating Film", qty: "50", unit: "ROLL", level: 1, status: "ok" },
        { code: "RM-2201", desc: "EPDM Rubber Seal Strip", qty: "200", unit: "M", level: 1, status: "low" },
        { code: "RM-3310", desc: "Hex Screw Self-Drill #14", qty: "1200", unit: "PCS", level: 1, status: "ok" },
        { code: "WO-4412", desc: "Roll Forming Operation", qty: "100", unit: "OPS", level: 1, status: "sched" },
      ];
      const statusColor = { ok: "#5aa87a", low: "#c8a041", sched: "#4a7fa8" };
      const statusLabel = { ok: "AVAIL", low: "LOW", sched: "SCHED" };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>BILL OF MATERIALS · PO-1033</div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", fontFamily: "var(--f-mono)" }}>REV 2</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "16px 1fr 36px 28px 40px", gap: "2px 6px", alignItems: "center" }}>
            {["", "COMPONENT", "QTY", "UNIT", "STATUS"].map((h, i) => (
              <div key={i} style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", paddingBottom: 4, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{h}</div>
            ))}
            {items.map((it) => (
              <React.Fragment key={it.code}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {it.level === 0
                    ? <span style={{ width: 8, height: 8, borderRadius: 2, background: cu, opacity: 0.8 }} />
                    : <span style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(255,255,255,0.12)", marginLeft: 2 }} />}
                </div>
                <div style={{ paddingLeft: it.level === 1 ? 8 : 0 }}>
                  <div style={{ fontSize: 9, color: it.level === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.55)", fontFamily: "var(--f-mono)", letterSpacing: "0.03em" }}>{it.code}</div>
                  <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{it.desc}</div>
                </div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", fontFamily: "var(--f-mono)", textAlign: "right" }}>{it.qty}</div>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>{it.unit}</div>
                <div><span style={{ fontSize: 7, padding: "2px 4px", borderRadius: 3, background: `${statusColor[it.status]}18`, border: `1px solid ${statusColor[it.status]}55`, color: statusColor[it.status], letterSpacing: "0.07em" }}>{statusLabel[it.status]}</span></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }
    case "inventory": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const amber = "#c8a041";
      const red = "#a85a5a";
      const items = [
        { code: "RM-1043", desc: "Galvanized Steel Coil 0.5mm", curr: 4200, target: 5000, reorder: 1500, unit: "KG", status: "ok" },
        { code: "RM-1082", desc: "Color Coated Steel Sheet", curr: 320, target: 2000, reorder: 500, unit: "SHT", status: "low" },
        { code: "RM-2201", desc: "EPDM Rubber Seal Strip", curr: 180, target: 800, reorder: 200, unit: "ROLL", status: "low" },
        { code: "RM-3310", desc: "Hex Screw Self-Drill #14", curr: 8400, target: 10000, reorder: 3000, unit: "PCS", status: "ok" },
        { code: "RM-4412", desc: "Polyurethane Foam Closure", curr: 55, target: 500, reorder: 100, unit: "PCS", status: "out" },
        { code: "RM-5521", desc: "Ridge Vent Strip PVC", curr: 140, target: 300, reorder: 80, unit: "PCS", status: "ok" },
      ];
      const statusColor = { ok: green, low: amber, out: red };
      const statusLabel = { ok: "OK", low: "LOW", out: "REORDER" };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>WAREHOUSE INVENTORY · WH-01</div>
            <div style={{ display: "flex", gap: 4 }}>
              {[["2 LOW", amber], ["1 REORDER", red]].map(([label, c]) => (
                <span key={label} style={{ fontSize: 8, padding: "2px 6px", borderRadius: 3, background: `${c}18`, border: `1px solid ${c}55`, color: c, letterSpacing: "0.07em" }}>{label}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
            {[
              { k: "TOTAL ITEMS", v: "48", c: "rgba(255,255,255,0.6)" },
              { k: "LOW STOCK", v: "7", c: amber },
              { k: "REORDER NOW", v: "3", c: red },
            ].map(m => (
              <div key={m.k} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 5, padding: "6px 8px" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em" }}>{m.k}</div>
                <div style={{ fontSize: 14, fontFamily: "var(--f-display)", fontWeight: 700, color: m.c, marginTop: 2 }}>{m.v}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            {items.map(it => (
              <div key={it.code} style={{ display: "grid", gridTemplateColumns: "1fr 64px 36px", gap: 6, alignItems: "center", padding: "5px 8px", background: "rgba(255,255,255,0.02)", borderRadius: 4, border: it.status !== "ok" ? `1px solid ${statusColor[it.status]}33` : "1px solid transparent" }}>
                <div>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <span style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: cu }}>{it.code}</span>
                    <span style={{ fontSize: 7, color: "rgba(255,255,255,0.35)" }}>{it.desc}</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginTop: 3, position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${Math.min((it.reorder / it.target) * 100, 100)}%`, background: "rgba(255,255,255,0.08)", borderRight: "1px dashed rgba(255,255,255,0.18)" }} />
                    <div style={{ width: `${Math.min((it.curr / it.target) * 100, 100)}%`, height: "100%", background: `linear-gradient(90deg, ${statusColor[it.status]}, ${statusColor[it.status]}88)`, borderRadius: 999 }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: statusColor[it.status] }}>{it.curr.toLocaleString()}</span>
                  <span style={{ fontSize: 6, color: "rgba(255,255,255,0.22)" }}>/{it.target} {it.unit}</span>
                </div>
                <span style={{ fontSize: 6, padding: "2px 4px", borderRadius: 3, background: `${statusColor[it.status]}18`, border: `1px solid ${statusColor[it.status]}44`, color: statusColor[it.status], letterSpacing: "0.06em", textAlign: "center" }}>{statusLabel[it.status]}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "report": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const amber = "#c8a041";
      const machines = [
        { id: "LINE-A", util: 88, status: "run" },
        { id: "LINE-B", util: 72, status: "run" },
        { id: "CNC-01", util: 95, status: "run" },
        { id: "ASSEMB", util: 61, status: "idle" },
        { id: "INSPEC", util: 44, status: "maint" },
      ];
      const statusColor = { run: green, idle: amber, maint: "#a85a5a" };
      const metrics = [
        { k: "OEE", v: "82.4%", bar: 82, c: cu },
        { k: "YIELD", v: "94.2%", bar: 94, c: green },
        { k: "DOWNTIME", v: "2.1 h", bar: 18, c: amber },
      ];
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="ph-tag" style={{ color: cu }}>SHOP-FLOOR REPORT · WK 47</div>
          <div style={{ display: "flex", gap: 8, flex: 1 }}>
            <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: 6 }}>
              {metrics.map(m => (
                <div key={m.k} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "8px 10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>{m.k}</span>
                    <span style={{ fontSize: 11, fontFamily: "var(--f-mono)", color: m.c, fontWeight: 600 }}>{m.v}</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                    <div style={{ width: `${m.bar}%`, height: "100%", background: `linear-gradient(90deg, ${m.c}, ${m.c}88)`, borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", marginBottom: 2 }}>MACHINE UTILIZATION</div>
              {machines.map(m => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: statusColor[m.status], flexShrink: 0 }} />
                  <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontFamily: "var(--f-mono)", width: 44 }}>{m.id}</span>
                  <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.04)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${m.util}%`, height: "100%", background: `linear-gradient(90deg, ${statusColor[m.status]}, ${statusColor[m.status]}66)` }} />
                  </div>
                  <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", fontFamily: "var(--f-mono)", width: 26, textAlign: "right" }}>{m.util}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    case "job-order": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const steel = "#4a7fa8";
      const schedule = [
        { date: "NOV 14", day: "TUE", orders: [
          { id: "JO-441", so: "SO-2841", item: "Long Span Roof Panel (Color)", qty: 200, pct: 62, status: "IN PROGRESS" },
        ]},
        { date: "NOV 15", day: "WED", orders: [
          { id: "JO-442", so: "SO-2843", item: "Ridge Cap Hip Type", qty: 120, pct: 0, status: "SCHEDULED" },
          { id: "JO-448", so: "SO-2850", item: "Corrugated G.I. Sheet", qty: 300, pct: 0, status: "SCHEDULED" },
        ]},
        { date: "NOV 17", day: "FRI", orders: [
          { id: "JO-443", so: "SO-2847", item: "Standing Seam Panel 0.5mm", qty: 150, pct: 28, status: "IN PROGRESS" },
        ]},
        { date: "NOV 19", day: "SUN", orders: [
          { id: "JO-444", so: "SO-2852", item: "Gutter System w/ Downspout", qty: 80, pct: 0, status: "SCHEDULED" },
        ]},
      ];
      const statusColor = { "IN PROGRESS": cu, SCHEDULED: steel, COMPLETE: green };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>JOB ORDER SCHEDULE</div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>SALES ORDER → JOB ORDER</span>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {schedule.map(day => (
              <div key={day.date}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu, fontWeight: 600 }}>{day.date}</span>
                  <span style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{day.day}</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 16 }}>
                  {day.orders.map(o => (
                    <div key={o.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "7px 10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu, fontWeight: 600 }}>{o.id}</span>
                          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)", padding: "1px 5px", background: "rgba(255,255,255,0.05)", borderRadius: 3, letterSpacing: "0.06em" }}>{o.so}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          {o.pct > 0 && (
                            <>
                              <div style={{ width: 44, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 999, overflow: "hidden" }}>
                                <div style={{ width: `${o.pct}%`, height: "100%", background: `linear-gradient(90deg, ${cu}, ${cu}88)` }} />
                              </div>
                              <span style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: cu }}>{o.pct}%</span>
                            </>
                          )}
                          <span style={{ fontSize: 7, padding: "2px 6px", borderRadius: 3, background: `${statusColor[o.status]}18`, border: `1px solid ${statusColor[o.status]}44`, color: statusColor[o.status], letterSpacing: "0.07em" }}>{o.status}</span>
                        </div>
                      </div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)" }}>{o.item} <span style={{ fontSize: 7, color: "rgba(255,255,255,0.28)" }}>· Qty: {o.qty}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "mfg-kpi": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const steel = "#4a7fa8";
      const kpis = [
        { k: "OEE", v: "82.4%", delta: "+3.2%", up: true, c: cu },
        { k: "OUTPUT", v: "1,247", delta: "+84 units", up: true, c: steel },
        { k: "ON-TIME", v: "94.1%", delta: "+1.1%", up: true, c: green },
        { k: "DEFECTS", v: "2.8%", delta: "-0.4%", up: false, c: "#a87a4a" },
      ];
      const weeks = ["WK44", "WK45", "WK46", "WK47"];
      const actual = [74, 81, 78, 82];
      const target = [80, 80, 80, 80];
      const barH = 48;
      const maxVal = 90;
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="ph-tag" style={{ color: cu }}>MANUFACTURING KPIs · WK 47</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
            {kpis.map(k => (
              <div key={k.k} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "8px 8px 6px" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: 4 }}>{k.k}</div>
                <div style={{ fontSize: 14, fontFamily: "var(--f-display)", fontWeight: 700, color: k.c, lineHeight: 1 }}>{k.v}</div>
                <div style={{ fontSize: 7, color: k.up ? green : "#a85a5a", marginTop: 4, letterSpacing: "0.05em" }}>{k.delta}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", borderRadius: 6, padding: "10px 12px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", marginBottom: 8 }}>OEE · ACTUAL vs TARGET</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: barH }}>
              {weeks.map((w, i) => (
                <div key={w} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div style={{ width: "100%", display: "flex", gap: 2, alignItems: "flex-end", height: barH - 14 }}>
                    <div style={{ flex: 1, height: `${(actual[i] / maxVal) * 100}%`, background: `linear-gradient(180deg, ${cu}, ${cu}77)`, borderRadius: "3px 3px 0 0" }} />
                    <div style={{ flex: 1, height: `${(target[i] / maxVal) * 100}%`, background: "rgba(255,255,255,0.1)", borderRadius: "3px 3px 0 0", border: "1px solid rgba(255,255,255,0.15)", borderBottom: "none" }} />
                  </div>
                  <span style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>{w}</span>
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingBottom: 14, flexShrink: 0 }}>
                {[[cu, "ACTUAL"], ["rgba(255,255,255,0.25)", "TARGET"]].map(([c, l]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 8, height: 4, background: c, borderRadius: 2 }} />
                    <span style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.07em" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    case "erp-purchasing": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const steel = "#4a7fa8";
      const amber = "#c8a041";
      const counters = [
        { label: "FOR APPROVAL", v: 12, c: amber },
        { label: "APPROVED", v: 8, c: cu },
        { label: "COMPLETED", v: 34, c: green },
      ];
      const rows = [
        { pr: "PR-2841", supplier: "TechBuild Supplies",  dept: "Engineering", by: "J. Santos",    amt: "₱48,200",  status: "FOR APPROVAL", date: "Nov 10" },
        { pr: "PR-2842", supplier: "Metro Office Depot",  dept: "Admin",       by: "M. Reyes",     amt: "₱12,500",  status: "APPROVED",     date: "Nov 10" },
        { pr: "PR-2843", supplier: "Apex Steel Corp",     dept: "Production",  by: "R. Cruz",      amt: "₱182,000", status: "FOR APPROVAL", date: "Nov 11" },
        { pr: "PR-2844", supplier: "Global Parts PH",     dept: "Maintenance", by: "L. Torres",    amt: "₱9,800",   status: "COMPLETED",    date: "Nov 08" },
        { pr: "PR-2845", supplier: "Prestige Logistics",  dept: "Operations",  by: "A. Dela Cruz", amt: "₱28,400",  status: "APPROVED",     date: "Nov 11" },
      ];
      const sc = { "FOR APPROVAL": amber, APPROVED: cu, COMPLETED: green };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>PURCHASING MODULE · PURCHASE REQUESTS</div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>PR APPROVAL WORKFLOW</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            {counters.map(c => (
              <div key={c.label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${c.c}33`, borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 20, fontFamily: "var(--f-display)", fontWeight: 700, color: c.c, lineHeight: 1 }}>{c.v}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "52px 1fr 64px 60px 52px 76px 44px", gap: "0 6px", padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {["PR #", "SUPPLIER", "DEPT", "REQ BY", "AMOUNT", "STATUS", "DATE"].map(h => (
                <div key={h} style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{h}</div>
              ))}
            </div>
            {rows.map((r, i) => (
              <div key={r.pr} style={{ display: "grid", gridTemplateColumns: "52px 1fr 64px 60px 52px 76px 44px", gap: "0 6px", padding: "6px 10px", borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", alignItems: "center" }}>
                <div style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: cu }}>{r.pr}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.65)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.supplier}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{r.dept}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.by}</div>
                <div style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: "rgba(255,255,255,0.6)", textAlign: "right" }}>{r.amt}</div>
                <div><span style={{ fontSize: 7, padding: "2px 5px", borderRadius: 3, background: `${sc[r.status]}18`, border: `1px solid ${sc[r.status]}44`, color: sc[r.status], letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{r.status}</span></div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.28)" }}>{r.date}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "erp-sales-order": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const steel = "#4a7fa8";
      const amber = "#c8a041";
      const red = "#a85a5a";
      const counters = [
        { label: "FOR APPROVAL", v: 6,  c: amber },
        { label: "APPROVED",     v: 14, c: cu },
        { label: "UNDELIVERED",  v: 9,  c: red },
        { label: "COMPLETED",    v: 47, c: green },
      ];
      const rows = [
        { so: "SO-4201", customer: "ABC Construction", item: "Long Span Panel x200",  sched: "Nov 18", status: "APPROVED",     team: "Team Alpha" },
        { so: "SO-4202", customer: "XYZ Realty Corp",  item: "Ridge Cap Hip x120",    sched: "Nov 19", status: "UNDELIVERED",  team: "Team Bravo" },
        { so: "SO-4203", customer: "Metro Builders",   item: "Corrugated G.I. x300",  sched: "Nov 20", status: "FOR APPROVAL", team: "Team Alpha" },
        { so: "SO-4204", customer: "Pacific Homes",    item: "Gutter System x80",     sched: "Nov 22", status: "APPROVED",     team: "Team Bravo" },
        { so: "SO-4205", customer: "Greenfield Dev",   item: "Standing Seam x150",    sched: "Nov 23", status: "UNDELIVERED",  team: "Team Charlie" },
      ];
      const sc = { "FOR APPROVAL": amber, APPROVED: cu, UNDELIVERED: red, COMPLETED: green };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>SALES ORDER MODULE · ORDER QUEUE</div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>ORDER FULFILLMENT</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5 }}>
            {counters.map(c => (
              <div key={c.label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${c.c}33`, borderRadius: 6, padding: "7px 8px" }}>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.09em", marginBottom: 3 }}>{c.label}</div>
                <div style={{ fontSize: 18, fontFamily: "var(--f-display)", fontWeight: 700, color: c.c, lineHeight: 1 }}>{c.v}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "52px 1fr 1fr 52px 76px 72px", gap: "0 6px", padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {["SO #", "CUSTOMER", "ITEM", "SCHED", "STATUS", "TEAM"].map(h => (
                <div key={h} style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{h}</div>
              ))}
            </div>
            {rows.map((r, i) => (
              <div key={r.so} style={{ display: "grid", gridTemplateColumns: "52px 1fr 1fr 52px 76px 72px", gap: "0 6px", padding: "6px 10px", borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", alignItems: "center" }}>
                <div style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: cu }}>{r.so}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.65)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.customer}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.45)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.item}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{r.sched}</div>
                <div><span style={{ fontSize: 7, padding: "2px 5px", borderRadius: 3, background: `${sc[r.status]}18`, border: `1px solid ${sc[r.status]}44`, color: sc[r.status], letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{r.status}</span></div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.team}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "erp-inventory": {
      const cu = "#c87941";
      const green = "#5aa87a";
      const amber = "#c8a041";
      const red = "#a85a5a";
      const warehouses = [
        { id: "WH-01", name: "Main Warehouse",      items: 32, low: 5, util: 74 },
        { id: "WH-02", name: "Secondary Warehouse", items: 16, low: 2, util: 48 },
      ];
      const rows = [
        { code: "RM-1043", name: "Galv. Steel Coil 0.5mm",   cat: "Raw Material",   curr: "4,200 KG",  reserved: "800 KG",   wh: "WH-01", reorder: "1,500 KG", status: "ok" },
        { code: "RM-1082", name: "Color Coated Steel Sheet",  cat: "Raw Material",   curr: "320 SHT",   reserved: "120 SHT",  wh: "WH-01", reorder: "500 SHT",  status: "low" },
        { code: "RM-2201", name: "EPDM Rubber Seal Strip",    cat: "Consumable",     curr: "180 ROLL",  reserved: "50 ROLL",  wh: "WH-01", reorder: "200 ROLL", status: "low" },
        { code: "RM-3310", name: "Hex Screw Self-Drill #14",  cat: "Hardware",       curr: "8,400 PCS", reserved: "2,000 PCS",wh: "WH-02", reorder: "3,000 PCS",status: "ok" },
        { code: "RM-4412", name: "PU Foam Closure Strip",     cat: "Consumable",     curr: "55 PCS",    reserved: "0",        wh: "WH-02", reorder: "100 PCS",  status: "critical" },
        { code: "FG-3001", name: "Roof Panel Set (Finished)", cat: "Finished Good",  curr: "142 SET",   reserved: "80 SET",   wh: "WH-01", reorder: "50 SET",   status: "ok" },
      ];
      const sc = { ok: green, low: amber, critical: red };
      const sl = { ok: "OK", low: "LOW", critical: "CRITICAL" };
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="ph-tag" style={{ color: cu }}>INVENTORY MODULE · STOCK OVERVIEW</div>
            <div style={{ display: "flex", gap: 4 }}>
              {[["5 LOW", amber], ["1 CRITICAL", red]].map(([l, c]) => (
                <span key={l} style={{ fontSize: 8, padding: "2px 6px", borderRadius: 3, background: `${c}18`, border: `1px solid ${c}44`, color: c, letterSpacing: "0.07em" }}>{l}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {warehouses.map(w => (
              <div key={w.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                  <div>
                    <div style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: cu }}>{w.id}</div>
                    <div style={{ fontSize: 7, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>{w.name}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, fontFamily: "var(--f-display)", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>{w.items} items</div>
                    {w.low > 0 && <div style={{ fontSize: 7, color: amber, marginTop: 1 }}>{w.low} low stock</div>}
                  </div>
                </div>
                <div style={{ height: 3, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{ width: `${w.util}%`, height: "100%", background: `linear-gradient(90deg, ${cu}, ${cu}88)` }} />
                </div>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{w.util}% capacity used</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 68px 60px 56px 60px 52px", gap: "0 5px", padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {["CODE", "ITEM NAME", "CATEGORY", "CURRENT", "RESERVED", "REORDER", "STATUS"].map(h => (
                <div key={h} style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.09em" }}>{h}</div>
              ))}
            </div>
            {rows.map((r, i) => (
              <div key={r.code} style={{ display: "grid", gridTemplateColumns: "60px 1fr 68px 60px 56px 60px 52px", gap: "0 5px", padding: "5px 10px", borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", alignItems: "center" }}>
                <div style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: cu }}>{r.code}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.6)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.name}</div>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)" }}>{r.cat}</div>
                <div style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: sc[r.status] }}>{r.curr}</div>
                <div style={{ fontSize: 8, fontFamily: "var(--f-mono)", color: "rgba(255,255,255,0.35)" }}>{r.reserved}</div>
                <div style={{ fontSize: 7, color: "rgba(255,255,255,0.28)" }}>{r.reorder}</div>
                <div><span style={{ fontSize: 7, padding: "2px 4px", borderRadius: 3, background: `${sc[r.status]}18`, border: `1px solid ${sc[r.status]}44`, color: sc[r.status], letterSpacing: "0.06em" }}>{sl[r.status]}</span></div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "modules":
      return (
        <div className="ph-card" style={{ flex: 1, position: "relative" }}>
          <div className="ph-tag">MODULE GRAPH</div>
          <svg viewBox="0 0 300 180" style={{ width: "100%", flex: 1, marginTop: 8 }}>
            {[[60, 40], [220, 40], [40, 140], [150, 90], [260, 140], [150, 160]].map(([x, y], i) => (
              <g key={i}>
                {i > 0 && (
                  <line x1={150} y1={90} x2={x} y2={y} stroke="rgba(107,155,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={i === 3 ? 14 : 10}
                  fill={i === 3 ? "rgba(107,155,255,0.25)" : "rgba(255,255,255,0.05)"}
                  stroke={i === 3 ? "var(--accent-1)" : "rgba(255,255,255,0.15)"}
                  strokeWidth="1"
                />
              </g>
            ))}
          </svg>
        </div>
      );
    case "settings":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">MODULE CONFIG</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
            {["Permissions", "Webhooks", "Notifications", "Audit log"].map((label, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "6px 0",
                  borderBottom: i < 3 ? "1px solid var(--line)" : "none",
                }}
              >
                <span style={{ fontSize: 12, color: "var(--text-1)" }}>{label}</span>
                <span
                  style={{
                    width: 28,
                    height: 14,
                    borderRadius: 999,
                    background: i % 2 === 0 ? accent : "rgba(255,255,255,0.1)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      [i % 2 === 0 ? "right" : "left"]: 2,
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "white",
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case "audit":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">AUDIT TRAIL</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--text-3)", width: 56 }}>
                  14:2{i}:0{i}
                </span>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: i === 0 ? "var(--accent-2)" : "rgba(255,255,255,0.2)",
                  }}
                />
                <span className="ph-bar" style={{ flex: 1, height: 6 }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "intake":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">BROKER APPLICATION</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.1em" }}>FIELD {i}</span>
                <span
                  className="ph-bar"
                  style={{
                    height: 22,
                    borderRadius: 6,
                    background: i === 1 ? "rgba(107,155,255,0.1)" : "rgba(255,255,255,0.04)",
                    border: i === 1 ? "1px solid var(--accent-line)" : "1px solid var(--line)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      );
    case "queue":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">REVIEW QUEUE · 14 PENDING</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 6,
                  border: "1px solid var(--line)",
                }}
              >
                <span style={{ width: 24, height: 24, borderRadius: 999, background: "rgba(107,155,255,0.2)" }} />
                <div style={{ flex: 1 }}>
                  <span className="ph-bar" style={{ height: 6, width: "55%", display: "block" }} />
                </div>
                <span className="chip" style={{ height: 18, fontSize: 9, padding: "0 6px" }}>
                  {["new", "review", "approved"][i % 3]}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case "status":
      return (
        <div className="ph-row" style={{ flex: 1 }}>
          {[
            ["Pending", "47", "rgba(255,176,136,0.5)"],
            ["Approved", "182", "rgba(93,211,158,0.5)"],
            ["Active", "118", accent],
          ].map(([k, v, c]) => (
            <div key={k} className="ph-card" style={{ flex: 1 }}>
              <div className="ph-tag" style={{ color: c }}>{k}</div>
              <div className="ph-num">{v}</div>
              <div className="ph-spark">
                {Array.from({ length: 10 }).map((_, j) => (
                  <span
                    key={j}
                    style={{
                      height: `${30 + Math.sin(j * 0.9 + k.length) * 30}%`,
                      background: `linear-gradient(180deg, ${c}, transparent)`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "leaderboard":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">REP LEADERBOARD · Q4</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            {[92, 78, 71, 60, 47, 32].map((w, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--text-3)", width: 18 }}>{i + 1}</span>
                <span style={{ width: 22, height: 22, borderRadius: 999, background: i === 0 ? accent : "rgba(255,255,255,0.05)" }} />
                <div style={{ flex: 1, height: 16, background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${w}%`, height: "100%", background: `linear-gradient(90deg, ${accent}, var(--accent-2))` }} />
                </div>
                <span style={{ fontSize: 11, fontFamily: "var(--f-mono)", color: "var(--text-1)", width: 36, textAlign: "right" }}>
                  {w}%
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case "drilldown":
      return (
        <div className="ph-row" style={{ flex: 1 }}>
          <div className="ph-card" style={{ flex: 1 }}>
            <div className="ph-tag">DEAL · ACME CO.</div>
            <div className="ph-num">$42,800</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
              {["Discovery", "Qualified", "Proposal", "Negotiation"].map((stg, i) => (
                <div key={stg} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: i <= 2 ? accent : "rgba(255,255,255,0.15)" }} />
                  <span style={{ fontSize: 11, color: i <= 2 ? "var(--text-0)" : "var(--text-3)" }}>{stg}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ph-card" style={{ flex: 1 }}>
            <div className="ph-tag">FORECAST</div>
            <svg viewBox="0 0 100 50" style={{ width: "100%", marginTop: 8 }}>
              <path d="M0,40 L20,30 L40,32 L60,18 L80,22 L100,8" fill="none" stroke="var(--accent-1)" strokeWidth="1.5" />
              <path d="M0,40 L20,30 L40,32 L60,18 L80,22 L100,8 L100,50 L0,50 Z" fill="url(#g)" opacity="0.3" />
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--accent-1)" />
                  <stop offset="1" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      );
    case "booking-cal":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">APPOINTMENTS · WK 12</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32px repeat(7, 1fr)",
              gridAutoRows: "10px",
              gap: 2,
              marginTop: 8,
              flex: 1,
            }}
          >
            <span />
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} style={{ fontSize: 9, color: "var(--text-3)", textAlign: "center", letterSpacing: "0.1em" }}>{d}</span>
            ))}
            {Array.from({ length: 9 }).map((_, h) => (
              <React.Fragment key={h}>
                <span style={{ fontSize: 8, color: "var(--text-3)", fontFamily: "var(--f-mono)", textAlign: "right", paddingRight: 4 }}>
                  {9 + h}:00
                </span>
                {Array.from({ length: 7 }).map((_, d) => {
                  const filled = (h * 3 + d * 7) % 11 < 5;
                  const a = (h + d) % 4 === 0;
                  return (
                    <span
                      key={d}
                      style={{
                        borderRadius: 3,
                        background: filled
                          ? a
                            ? "var(--accent-1)"
                            : "color-mix(in oklab, var(--accent-1), transparent 65%)"
                          : "rgba(255,255,255,0.04)",
                        opacity: filled ? 0.85 : 1,
                      }}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    case "services":
      return (
        <div className="ph-row" style={{ flex: 1, flexWrap: "wrap" }}>
          {[
            ["Haircut", "₱350"],
            ["Color", "₱2,400"],
            ["Treatment", "₱1,800"],
            ["Manicure", "₱250"],
            ["Pedicure", "₱350"],
            ["Facial", "₱1,200"],
          ].map(([n, p]) => (
            <div key={n} className="ph-card" style={{ flex: "1 1 30%", minWidth: 0, minHeight: 60, padding: 12 }}>
              <div className="ph-tag" style={{ fontSize: 9 }}>{n}</div>
              <div className="ph-num" style={{ fontSize: 18, marginTop: 2 }}>{p}</div>
              <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                {Array.from({ length: 4 }).map((_, j) => (
                  <span
                    key={j}
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 999,
                      background: j === 0 ? "var(--accent-1)" : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "pos":
      return (
        <div className="ph-row" style={{ flex: 1 }}>
          <div className="ph-card" style={{ flex: 1.3 }}>
            <div className="ph-tag">CART · TICKET #0428</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
              {[["Haircut", "₱350"], ["Color", "₱2,400"], ["Treatment", "₱1,800"]].map(([n, p]) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "6px 8px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 11, color: "var(--text-1)" }}>{n}</span>
                  <span style={{ fontSize: 11, color: "var(--text-0)", fontFamily: "var(--f-mono)" }}>{p}</span>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 6,
                  paddingTop: 6,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em" }}>TOTAL</span>
                <span style={{ fontFamily: "var(--f-display)", fontWeight: 700, color: "var(--accent-2)" }}>₱4,550</span>
              </div>
            </div>
          </div>
          <div className="ph-card" style={{ flex: 1 }}>
            <div className="ph-tag">PAY</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginTop: 8 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "⌫"].map((k, i) => (
                <span
                  key={i}
                  style={{
                    height: 24,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    color: "var(--text-1)",
                    fontFamily: "var(--f-mono)",
                  }}
                >
                  {k}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: 6,
                height: 22,
                borderRadius: 6,
                background: "var(--accent-1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              CHARGE
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">PREVIEW</div>
        </div>
      );
  }
}

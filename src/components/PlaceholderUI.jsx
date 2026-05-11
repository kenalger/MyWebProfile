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
    case "schedule":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">PRODUCTION SCHEDULE · WK 47</div>
          <div style={{ display: "grid", gridTemplateRows: "repeat(5, 1fr)", gap: 4, marginTop: 8, flex: 1 }}>
            {[[10, 30, 40], [25, 45], [5, 25, 30, 25], [15, 50], [20, 30, 25]].map((row, i) => (
              <div key={i} style={{ display: "flex", gap: 4 }}>
                {row.map((w, j) => (
                  <span
                    key={j}
                    style={{
                      width: `${w}%`,
                      background: `linear-gradient(90deg, ${j % 2 === 0 ? accent : "var(--accent-2)"}, rgba(255,255,255,0.05))`,
                      borderRadius: 4,
                      opacity: 0.7,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    case "bom":
      return (
        <div className="ph-card" style={{ flex: 1 }}>
          <div className="ph-tag">BILL OF MATERIALS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 16, height: 16, borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid var(--line)" }} />
                <span className="ph-bar" style={{ flex: 1, height: 8 }} />
                <span className="ph-bar" style={{ width: 40, height: 8 }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "report":
      return (
        <div className="ph-row" style={{ flex: 1 }}>
          <div className="ph-card" style={{ flex: 1 }}>
            <div className="ph-tag">YIELD</div>
            <div className="ph-num">94.2%</div>
            <div style={{ display: "flex", height: 6, borderRadius: 999, background: "rgba(255,255,255,0.05)", overflow: "hidden", marginTop: 8 }}>
              <span style={{ width: "94.2%", background: `linear-gradient(90deg, ${accent}, var(--accent-2))` }} />
            </div>
          </div>
          <div className="ph-card" style={{ flex: 1 }}>
            <div className="ph-tag">DOWNTIME</div>
            <div className="ph-num">2.1h</div>
            <div className="ph-spark">
              {Array.from({ length: 14 }).map((_, j) => (
                <span key={j} style={{ height: `${20 + Math.cos(j * 0.6) * 30 + 30}%` }} />
              ))}
            </div>
          </div>
        </div>
      );
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

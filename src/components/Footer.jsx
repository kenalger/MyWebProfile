export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {new Date().getFullYear()} Ken Dimaymay · Built with care, shipped with intent.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="muted" style={{ fontFamily: "var(--f-mono)", fontSize: 12 }}>
            Manila, PH · UTC+08
          </span>
          <a
            href="#hero"
            className="muted"
            style={{ textDecoration: "none" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

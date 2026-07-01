export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Ken Alger Dimaymay</span>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}

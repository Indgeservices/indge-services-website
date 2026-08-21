import Link from "next/link";

const nav = [
  ["Services", "/services"],
  ["Areas", "/areas"],
  ["About", "/about"],
  ["Selected Work", "/selected-work"],
  ["Reviews", "/reviews"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="INDGE Services home">
          <span className="brand-main">indge</span><span className="brand-sub">SERVICES LTD</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="header-quote" href="/quote">Get a quote →</Link>
        </nav>
      </div>
    </header>
  );
}

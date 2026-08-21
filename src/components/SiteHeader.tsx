import Link from "next/link";

const links = [
  ["Services", "/services"],
  ["Areas", "/areas"],
  ["About", "/about"],
  ["Selected work", "/selected-work"],
  ["Reviews", "/reviews"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="INDGE Services home">
          <span className="brand-main">INDGE</span>
          <span className="brand-sub">SERVICES LTD</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="header-quote" href="/quote">Get a quote →</Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><strong>INDGE Services Ltd</strong><p>Professional mobile vehicle servicing, diagnostics and repairs. Based in Romsey and mobile across our wider service area.</p></div>
        <div><strong>Explore</strong><Link href="/services">Services</Link><Link href="/areas">Areas</Link><Link href="/about">About</Link><Link href="/reviews">Reviews</Link></div>
        <div><strong>Contact</strong><a href="tel:+447738688509">07738 688509</a><Link href="/quote">Get a quote</Link></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} INDGE Services Ltd</span><span>Romsey · South Hampshire · New Forest · Dorset</span></div>
    </footer>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div><strong>INDGE Services Ltd</strong><br />Mobile vehicle care based in Romsey.</div>
        <div><strong>07738 688509</strong><br />indgeservices@gmail.com</div>
        <div>South Hampshire · New Forest · Dorset</div>
        <div><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function PageHero({ eyebrow, title, accent, copy, cta = true }: { eyebrow: string; title: string; accent?: string; copy: string; cta?: boolean }) {
  return <section className="page-hero"><div className="shell page-hero-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}{accent && <> <span>{accent}</span></>}</h1><p className="lede">{copy}</p>{cta && <Link className="btn btn-primary" href="/quote">Get a quote <span>→</span></Link>}</div></section>;
}

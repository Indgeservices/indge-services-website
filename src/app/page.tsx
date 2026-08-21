import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  ["01", "Servicing", "Interim, full and major servicing carried out at your home or workplace.", "/services/servicing"],
  ["02", "Diagnostics", "Proper fault finding for warning lights, non-starts and difficult intermittent issues.", "/services/diagnostics"],
  ["03", "Repairs & maintenance", "Brakes, steering, suspension, starting faults and general mechanical repairs.", "/services"],
  ["04", "General repairs", "Straightforward advice and quality workmanship for everyday vehicle faults.", "/services"],
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="shell hero-inner">
            <div>
              <div className="eyebrow">Mobile servicing · diagnostics · repairs</div>
              <h1>Professional<br />vehicle care.<br /><span>At your door.</span></h1>
              <p className="lede">Mobile servicing, diagnostics and repairs from Romsey across South Hampshire, the New Forest and into Dorset.</p>
              <div className="actions">
                <Link className="btn btn-primary" href="/quote">Get a quote →</Link>
                <a className="phone" href="tel:+447738688509">07738 688509</a>
              </div>
              <div className="rating"><span className="stars">★★★★★</span><span><strong>Highly rated</strong> by hundreds of customers</span></div>
              <div className="credentials"><span>Former military</span><i>•</i><span>Mercedes-Benz experience</span><i>•</i><span>15+ years&apos; experience</span></div>
            </div>
            <div className="hero-art" aria-label="Professional mobile mechanic photography area">
              <div className="hero-art-line" />
              <div className="hero-art-copy"><span>Photography direction</span><p>Real technician. Real vehicle. Real INDGE van. The production image will sit here without changing the page layout.</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="shell">
            <div className="section-label">01 — Services</div>
            <h2>Dealer-level knowledge.<br />Delivered to your door.</h2>
            <p className="section-copy">Professional vehicle care without the workshop waiting room. We come to your home or workplace and keep the process clear, convenient and straightforward.</p>
            <div className="services-grid">
              {services.map(([number, title, copy, href]) => (
                <article className="service" key={title}>
                  <div className="service-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link className="text-link" href={href}>Explore →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell split">
            <div className="photo-placeholder" aria-hidden="true" />
            <div>
              <div className="section-label">02 — About INDGE</div>
              <h2>Experience you can trust.</h2>
              <p className="section-copy">Years of hands-on experience across demanding fleet environments, Mercedes-Benz and independent mobile vehicle care now come directly to your driveway.</p>
              <Link className="text-link" href="/about">Meet INDGE →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell split">
            <div>
              <div className="section-label">03 — Selected work</div>
              <h2>Problems solved.<br />Work we&apos;re proud of.</h2>
              <p className="section-copy">A curated selection of diagnostics, servicing and repairs — not an endless feed. Real examples will show the problem, the work and the result.</p>
              <Link className="text-link" href="/selected-work">View selected work →</Link>
            </div>
            <div className="photo-placeholder" aria-hidden="true" />
          </div>
        </section>

        <section className="section">
          <div className="shell split">
            <div className="quote-panel">
              <div className="section-label">04 — Reviews</div>
              <blockquote>“Real customers. Real confidence.”</blockquote>
              <p>Read independent customer feedback on Google and ClickMechanic.</p>
              <Link className="text-link" href="/reviews">Read reviews →</Link>
            </div>
            <div>
              <div className="section-label">05 — Areas</div>
              <h2>Based in Romsey.<br />Covering the region.</h2>
              <p className="section-copy">Our agreed coverage stretches west to Poole, east to Gosport and north to Winchester, including South Hampshire and the New Forest.</p>
              <Link className="text-link" href="/areas">View coverage →</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell coverage">
            <div>
              <div className="section-label">Coverage</div>
              <h2>Local expertise.<br />Right where you need us.</h2>
              <p className="section-copy">The production Areas page will use an accurate interactive map and a custom service-area polygon centred on Romsey.</p>
            </div>
            <div className="map-placeholder" aria-label="Service area from Poole to Gosport and north to Winchester" />
          </div>
        </section>

        <section className="cta">
          <div className="shell cta-inner">
            <h2>Need your vehicle<br /><span>looked at?</span></h2>
            <div className="actions">
              <Link className="btn btn-primary" href="/quote">Get a quote →</Link>
              <a className="phone" href="tel:+447738688509">07738 688509</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

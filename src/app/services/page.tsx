import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Mobile Mechanic Services", description: "Mobile servicing, diagnostics, repairs and maintenance from INDGE Services, based in Romsey." };
const services = [
  ["01", "Diagnostics", "Proper fault finding for warning lights, non-starts, loss of power, electrical faults and intermittent problems.", "/services/diagnostics"],
  ["02", "Servicing", "Interim, full and major servicing at your home or workplace, tailored to your vehicle and its requirements.", "/services/servicing"],
  ["03", "Brakes", "Inspection and repair of braking systems, with clear advice on what needs attention and why.", "/services/brakes"],
  ["04", "Steering & suspension", "Fault investigation and repair for knocks, handling issues, worn components and suspension concerns.", "/services/steering-suspension"],
  ["05", "Batteries & starting", "Testing and repair for battery, charging and starting problems, including non-start diagnosis.", "/services/batteries-starting"],
  ["06", "Repairs & maintenance", "General mechanical repairs and planned maintenance carried out wherever mobile work is appropriate.", "/services/repairs-maintenance"],
] as const;
export default function ServicesPage(){return <main><PageHero eyebrow="Services" title="Vehicle care." accent="Brought to you." copy="From routine servicing to difficult fault finding, INDGE provides professional mobile mechanical work without turning the Services page into a wall of sales cards."/><section className="section"><div className="shell"><div className="intro-grid"><div><p className="section-label">What we do</p><h2>One mechanic. A broad capability.</h2></div><p className="section-copy">Choose the area that best describes what your vehicle needs. If you are not sure, tell us the symptoms and we can start there.</p></div><div className="service-list">{services.map(([n,t,d,h])=><article className="service-row" key={t}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><Link href={h}>Explore service →</Link></article>)}</div></div></section><section className="section compact"><div className="shell statement"><p className="section-label">Mobile by design</p><h2>Your driveway can be the workshop.</h2><p>Based in Romsey and travelling across South Hampshire, the New Forest and into Dorset, subject to the job and location.</p><Link className="text-link" href="/areas">See where we work →</Link></div></section></main>}

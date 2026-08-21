import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indgeservices.co.uk"),
  title: { default: "INDGE Services | Mobile Mechanic Romsey, Hampshire & Dorset", template: "%s | INDGE Services" },
  description: "Professional mobile vehicle servicing, diagnostics and repairs. Based in Romsey and covering South Hampshire, the New Forest and into Dorset.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}

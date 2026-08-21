import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indgeservices.co.uk"),
  title: {
    default: "INDGE Services | Mobile Mechanic in Hampshire & Dorset",
    template: "%s | INDGE Services",
  },
  description:
    "Professional mobile vehicle servicing, diagnostics and repairs from Romsey across South Hampshire, the New Forest and into Dorset.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "INDGE Services",
    title: "INDGE Services | Professional vehicle care at your door",
    description:
      "Mobile servicing, diagnostics and repairs across South Hampshire, the New Forest and into Dorset.",
    url: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}

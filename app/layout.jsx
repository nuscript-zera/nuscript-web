import localFont from "next/font/local";

import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import CertificateFooter from "@/components/CertificateFooter";

// Fonts — self-hosted from files committed in the repo (next/font/local).
// No build-time fetch from Google, so the fonts are guaranteed to ship and
// load on every deploy (Cloudflare included) instead of falling back to Times.
//   Instrument Serif → display headings   (--font-heading)
//   Public Sans      → body copy           (--font-sans)
//   Inter Tight      → uppercase labels/UI (--font-ui)
const instrumentSerif = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const publicSans = localFont({
  src: "./fonts/PublicSans-Variable.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

const interTight = localFont({
  src: "./fonts/InterTight-Variable.woff2",
  weight: "100 900",
  variable: "--font-ui",
  display: "swap",
});

const SITE_URL = "https://nuscript.net";
const SITE_DESCRIPTION =
  "NuScript delivers clinical documentation and revenue cycle management services, backed by 25+ years of experience helping U.S. healthcare organizations improve accuracy, cash flow, and operational efficiency.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NuScript | Clinical Documentation & Revenue Cycle Services",
    template: "%s | NuScript",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "medical transcription",
    "medical scribing",
    "medical coding",
    "revenue cycle management",
    "clinical documentation",
    "medico-legal transcription",
    "healthcare BPO",
    "HIPAA compliant",
  ],
  applicationName: "NuScript",
  authors: [{ name: "NuScript Data Solutions Private Limited" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "NuScript",
    title: "NuScript | Clinical Documentation & Revenue Cycle Services",
    description: SITE_DESCRIPTION,
    images: [{ url: "/nds.icon.png" }],
  },
  twitter: {
    card: "summary",
    title: "NuScript | Clinical Documentation & Revenue Cycle Services",
    description: SITE_DESCRIPTION,
    images: ["/nds.icon.png"],
  },
  icons: { icon: "/nds.icon.png" },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#0D1B1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${publicSans.variable} ${interTight.variable}`}
    >
      <body>
        <div className="lab-grain min-h-screen">
          <SiteHeader />
          {children}
          <CertificateFooter />
        </div>
      </body>
    </html>
  );
}

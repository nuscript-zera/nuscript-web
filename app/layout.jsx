import { Instrument_Serif, Public_Sans, Inter_Tight } from "next/font/google";

import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import CertificateFooter from "@/components/CertificateFooter";

// Fonts — self-hosted at build by next/font (no runtime CDN):
//   Instrument Serif → display headings   (--font-heading)
//   Public Sans      → body copy           (--font-sans)
//   Inter Tight      → uppercase labels/UI (--font-ui)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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

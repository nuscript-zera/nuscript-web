import localFont from "next/font/local";
import { Toaster } from "sonner";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Self-hosted General Sans (variable, weights 200–700). next/font handles the
// @font-face, hashing, and <link rel=preload> automatically — no CDN, no FOUT.
const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "200 700",
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
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

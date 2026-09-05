import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import CertificateFooter from "@/components/CertificateFooter";

// Fonts are self-hosted from /public/fonts and declared via @font-face in
// globals.css. They're served at /fonts/*.woff2 — the same site-root path the
// images use, which the deploy serves reliably — with no next/font and no
// dependency on /_next/static/media. Instrument Serif (headings), Public Sans
// (body), Inter Tight (uppercase labels).

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
    <html lang="en">
      <head>
        {/* Kill any leftover service worker / PWA cache from the old Base44 site.
            Those intercept requests and re-serve the stale old app, which caused
            the new fonts to flash in and then revert. This runs on every load and
            reloads once after clearing so returning visitors get the fresh site. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){var had=rs.length>0;rs.forEach(function(r){r.unregister();});if(window.caches&&caches.keys){caches.keys().then(function(ks){ks.forEach(function(k){caches.delete(k);});});}if(had){location.reload();}});}}catch(e){}})();`,
          }}
        />
      </head>
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

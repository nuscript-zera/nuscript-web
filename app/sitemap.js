export const dynamic = "force-static";

const BASE = "https://nuscript.net";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/clinical-documentation", priority: 0.9 },
  { path: "/medico-legal-transcription", priority: 0.9 },
  { path: "/medical-coding", priority: 0.9 },
  { path: "/revenue-cycle-management", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-use", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}

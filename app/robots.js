export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nuscript.net/sitemap.xml",
    host: "https://nuscript.net",
  };
}

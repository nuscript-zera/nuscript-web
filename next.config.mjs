/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — Next exports plain HTML/CSS/JS to `out/`,
  // which Cloudflare Pages serves directly (same model as the Dictra site).
  output: "export",
  // No server at runtime, so images are served as-is from /public.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <span className="micro-label text-sage">Error · 404</span>
        <h1 className="mt-4 font-heading text-[clamp(3.5rem,12vw,10rem)] italic leading-[0.9] tracking-tight text-ink">
          Not found.
        </h1>
        <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/65">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-ui text-sm font-medium text-bone transition-colors hover:bg-plasma hover:text-ink"
        >
          Back to home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
        </Link>
      </div>
    </main>
  );
}

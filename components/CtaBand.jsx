import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand({ title = "Ready to transform your operations?", subtitle }) {
  return (
    <section className="relative bg-ink py-24 text-bone md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(247,248,243,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(247,248,243,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-12">
        <span className="micro-label text-sage">Let&apos;s talk</span>
        <h2 className="mx-auto mt-3 max-w-3xl font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-6 max-w-xl font-body text-lg text-bone/70">{subtitle}</p>}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-plasma px-7 py-3.5 font-ui text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            Schedule a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
          </Link>
          <a
            href="tel:+919790444939"
            className="font-ui text-sm font-medium text-bone/70 underline-offset-8 hover:text-bone hover:underline"
          >
            Talk with our team
          </a>
        </div>
      </div>
    </section>
  );
}

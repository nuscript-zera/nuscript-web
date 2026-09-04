import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CtaBand from "./CtaBand";

// The CertificateFooter is rendered globally by the root layout.
export default function ServicePage({ service, others }) {
  const words = service.title.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const last = words.slice(-1);

  return (
    <>
      <section className="relative bg-bone pt-16 md:pt-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-ui text-[13px] text-ink/55 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> Back
          </Link>
          <div className="mt-8 flex items-center justify-between border-b border-ink/10 pb-6">
            <span className="micro-label text-sage">
              § {service.no} — {service.tag}
            </span>
            <span className="micro-label text-sage">SERVICE</span>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1 className="font-heading text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-tight text-ink">
                {lead} <span className="italic text-plasma">{last}</span>
              </h1>
              <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-ink/70">
                {service.overview}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={service.img} alt={service.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="border-b border-ink/10 pb-6">
            <span className="micro-label text-sage">What&apos;s included</span>
          </div>
          <div className="grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {service.features.map((f) => (
              <div key={f.title} className="bg-bone p-8">
                <span className="font-heading text-5xl italic leading-none text-plasma">·</span>
                <h3 className="mt-2 font-heading text-2xl text-ink">{f.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/65">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="border-b border-ink/10 pb-6">
            <span className="micro-label text-sage">The workflow</span>
          </div>
          <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div key={p.step} className="relative">
                <span className="font-heading text-6xl italic leading-none text-plasma/80">{p.step}</span>
                <h3 className="mt-3 font-heading text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/65">{p.desc}</p>
                {i < service.process.length - 1 && (
                  <span className="absolute right-0 top-6 hidden h-px w-8 bg-sage/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.chips && (
        <section className="bg-bone py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="border-b border-ink/10 pb-6">
              <span className="micro-label text-sage">{service.chips.label}</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-10">
              {service.chips.items.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-ink/15 px-5 py-2.5 font-ui text-sm text-ink/75 transition-colors hover:border-plasma hover:text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-bone py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="border-b border-ink/10 pb-6">
              <span className="micro-label text-sage">Why choose NuScript</span>
            </div>
            <div className="grid grid-cols-1 gap-x-12 gap-y-5 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 border-t border-ink/10 pt-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plasma" />
                  <p className="font-body text-[15px] leading-relaxed text-ink/75">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {others && others.length > 0 && (
        <section className="bg-bone pb-16 md:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="border-b border-ink/10 pb-6">
              <span className="micro-label text-sage">Explore more services</span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group bg-bone p-8 transition-colors hover:bg-plasma/5"
                >
                  <span className="font-ui text-sm text-sage">{s.no}</span>
                  <h3 className="mt-2 font-heading text-2xl text-ink">{s.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 font-ui text-[13px] text-ink/60 transition-colors group-hover:text-ink">
                    View service{" "}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}

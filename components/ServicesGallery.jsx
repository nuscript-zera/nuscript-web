"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export default function ServicesGallery() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="services" className="relative bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col gap-6 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="micro-label text-sage">§ 02 — Our Services</span>
            <h2 className="mt-3 font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
              From documentation to revenue, <span className="italic">seamlessly connected</span>.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-bone"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-bone"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto px-6 pb-4 md:px-12"
      >
        {SERVICES.map((s) => (
          <article
            key={s.slug}
            className="group relative mr-8 w-[78vw] shrink-0 snap-start sm:w-[52vw] lg:w-[34vw] xl:w-[30vw]"
          >
            <Link href={`/${s.slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sage/10">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="space-y-1.5 font-ui text-[11px] tracking-wider text-bone/90">
                    {s.specs.map((sp) => (
                      <div key={sp} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-plasma" />
                        {sp}
                      </div>
                    ))}
                  </div>
                </div>
                <span className="absolute left-5 top-5 micro-label text-bone/80 drop-shadow">{s.tag}</span>
              </div>
              <div className="mt-5 flex items-start justify-between border-t border-ink/10 pt-4">
                <div>
                  <h3 className="font-heading text-3xl leading-none text-ink">{s.title}</h3>
                  <p className="mt-3 max-w-xs font-body text-[15px] leading-relaxed text-ink/65">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-ui text-[13px] font-medium text-ink/60 transition-colors group-hover:text-ink">
                    View service{" "}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
                <span className="font-ui text-sm text-sage">{s.no}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const STATS = [
  { v: "25+", k: "Years" },
  { v: "99.5%", k: "Accuracy" },
  { v: "40+", k: "Specialties" },
  { v: "50M+", k: "Documents" },
  { v: "<4hr", k: "Turnaround" },
];

export default function Hero() {
  return (
    <section id="formula" className="relative min-h-screen overflow-hidden bg-transparent pt-20">
      <span className="pointer-events-none absolute -right-6 top-24 select-none font-heading text-[28vw] leading-none text-ink/[0.04] md:text-[20vw]">
        Rx
      </span>

      <div className="pointer-events-none absolute inset-6 z-10 hidden md:block">
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-sage/50" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-sage/50" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-sage/50" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-sage/50" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-ink/10 pb-6">
          <span className="micro-label text-sage">NUSCRIPT · CLINICAL DOCUMENTATION · 2026</span>
          <span className="micro-label hidden text-sage sm:block">HIPAA COMPLIANT · SOC 2 ALIGNED</span>
        </div>

        <div className="relative grid min-h-[74vh] grid-cols-1 items-center md:grid-cols-12">
          <div className="relative z-20 md:col-span-8">
            <h1 className="font-heading text-[clamp(3.5rem,12vw,11rem)] leading-[0.88] tracking-tight text-ink">
              <span className="block italic animate-rise">Documentation,</span>
              <span className="block animate-rise" style={{ animationDelay: "0.12s" }}>
                Formulated
              </span>
              <span className="relative block animate-rise" style={{ animationDelay: "0.24s" }}>
                for <span className="italic text-plasma">One</span>
                <span className="ml-3 align-middle font-ui text-base font-medium not-italic tracking-normal text-sage">
                  · 01
                </span>
              </span>
            </h1>
          </div>

          <div className="relative z-30 mt-10 md:col-span-5 md:col-start-8 md:mt-0 md:-ml-24">
            <div className="relative aspect-[3/4] w-full max-w-[440px] animate-drift">
              <img
                src="/healthtech.webp"
                alt="Caregiver assisting an elderly patient in a clinical setting"
                className="h-full w-full rounded-sm object-cover"
              />
              <div className="absolute -left-10 top-1/4 hidden flex-col items-end gap-1 lg:flex">
                <span className="h-px w-10 bg-sage/60" />
                <span className="micro-label text-sage">FIG.01</span>
              </div>
              <div className="absolute -right-8 bottom-10 hidden flex-col items-start gap-1 lg:flex">
                <span className="h-px w-10 bg-sage/60" />
                <span className="micro-label text-sage">99.5%</span>
              </div>
              <div className="absolute -bottom-3 left-0 right-0 flex items-center justify-between px-1">
                <span className="micro-label text-sage">CARE TEAM · 001</span>
                <span className="micro-label text-sage">40+ SPECIALTIES</span>
              </div>
            </div>
          </div>
        </div>

        <p
          className="relative z-20 mt-2 max-w-md font-body text-lg leading-relaxed text-ink/70 animate-rise"
          style={{ animationDelay: "0.4s" }}
        >
          From the moment a clinician speaks to the moment revenue hits your account —
          transcription, scribing, coding, and RCM compounded into one accurate, compliant workflow.
        </p>

        <div
          className="relative z-20 mt-10 flex flex-wrap items-center gap-4 animate-rise"
          style={{ animationDelay: "0.55s" }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-ui text-sm font-medium text-bone transition-colors hover:bg-plasma hover:text-ink"
          >
            Schedule a consultation
            <span className="h-1.5 w-1.5 rounded-full bg-plasma transition-colors group-hover:bg-ink" />
          </Link>
          <Link
            href="/clinical-documentation"
            className="font-ui text-sm font-medium text-ink/60 underline-offset-8 hover:text-ink hover:underline"
          >
            Explore our services
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/10 pt-6">
          {STATS.map((s) => (
            <div key={s.k} className="flex items-baseline gap-2">
              <span className="font-heading text-3xl italic text-ink">{s.v}</span>
              <span className="micro-label text-sage">{s.k}</span>
            </div>
          ))}
          <span className="ml-auto hidden items-center gap-3 text-sage md:flex">
            <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.25} />
            <span className="micro-label">Scroll to deconstruct</span>
          </span>
        </div>
      </div>
    </section>
  );
}

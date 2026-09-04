import React from "react";

const FINDINGS = [
  { k: "Documents processed", v: "50M+", d: "Transcribed, coded, and reconciled across 40+ U.S. specialties over 25 years." },
  { k: "Avg turnaround", v: "<4hr", d: "Same-day, chart-ready notes keep clinicians current and claims moving." },
  { k: "Avg accuracy", v: "99%+", d: "Skilled MTs, scribes, coders & billers backed by AI-enhanced QA workflows." },
];

export default function ScienceOfCare() {
  return (
    <section id="science" className="relative bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="border-b border-ink/10 pb-8">
          <span className="micro-label text-sage">§ 04 — The Science of Care</span>
          <h2 className="mt-3 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
            Why accurate documentation <span className="italic">pays for itself</span>.
          </h2>
        </div>
      </div>

      <div className="relative my-16 overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img
            src="/provider.webp"
            alt="Physician reviewing clinical documentation at a desk"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <blockquote className="max-w-2xl">
            <p className="font-heading text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1] text-bone">
              <span className="text-plasma">“</span>A clean note is a clean claim. The documentation
              <span className="italic"> is the revenue</span> — every word the clinician speaks either
              strengthens the chart or erodes it.<span className="text-plasma">”</span>
            </p>
            <footer className="mt-6 font-ui text-sm tracking-wide text-sage">
              — NuScript Clinical Documentation Editorial Team
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
          {FINDINGS.map((f) => (
            <div key={f.k} className="bg-bone p-8">
              <span className="micro-label text-sage">{f.k}</span>
              <div className="mt-4 font-heading text-6xl leading-none text-ink">{f.v}</div>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-ink/65">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

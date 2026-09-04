import React from "react";

const MILESTONES = [
  { year: "2000", title: "Founded", desc: "Medical transcription services launched." },
  { year: "2017", title: "Expanded", desc: "Multi-specialty documentation services." },
  { year: "2023", title: "Diversified", desc: "Added coding & RCM services." },
  { year: "2025", title: "AI-Enhanced", desc: "Integrated AI into documentation workflows." },
  { year: "Now", title: "Full-Service", desc: "Clinical documentation through revenue cycle." },
];

const TRUST = [
  "HIPAA-compliant processes for all PHI handling",
  "Scalable teams of transcriptionists, scribes, coders & billers",
  "Extended coverage across U.S. time zones",
  "Structured around U.S. regulatory expectations",
  "Specialty-specific expertise across 40+ specialties",
  "Cost efficiency without compromising quality",
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-bone py-24 md:py-32">
      <span className="pointer-events-none absolute -left-6 top-10 select-none font-heading text-[24vw] leading-none text-ink/[0.035]">
        25
      </span>
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="border-b border-ink/10 pb-8">
          <span className="micro-label text-sage">§ 05 — Our Journey</span>
          <h2 className="mt-3 font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
            25 years of <span className="italic">healthcare excellence</span>.
          </h2>
        </div>

        <div className="mt-16 space-y-12 md:space-y-20">
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-12 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:col-span-5 md:[direction:ltr]">
                <span className="font-heading text-[clamp(4rem,10vw,9rem)] italic leading-none text-plasma">
                  {m.year}
                </span>
              </div>
              <div className="relative md:col-span-6 md:col-start-7 md:[direction:ltr]">
                <span className="absolute -left-4 top-3 hidden h-px w-8 bg-sage/50 md:block" />
                <h3 className="font-heading text-3xl text-ink">{m.title}</h3>
                <p className="mt-2 max-w-md font-body text-lg leading-relaxed text-ink/65">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.map((t) => (
            <div key={t} className="flex items-start gap-3 bg-bone p-6">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plasma" />
              <p className="font-body text-[15px] leading-relaxed text-ink/75">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

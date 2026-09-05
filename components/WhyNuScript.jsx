import React from "react";

const STATS = [
  { k: "Years Experience", v: "25+" },
  { k: "Accuracy", v: "99.5%" },
  { k: "Specialties", v: "40+" },
  { k: "Documents", v: "50M+" },
];

const PILLARS = [
  { title: "Expert Teams", desc: "Skilled MTs, scribes, coders & billers." },
  { title: "End-to-End Services", desc: "Documentation through revenue." },
  { title: "24/7 Operations", desc: "Extended coverage across U.S. time zones." },
  { title: "HIPAA Compliant", desc: "Enterprise-grade security & compliance." },
  { title: "Rigorous QA", desc: "Multi-layer review ensuring accuracy." },
  { title: "Transparent Reporting", desc: "Complete visibility into your operations." },
];

export default function WhyNuScript() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="border-b border-ink/10 pb-8">
          <span className="micro-label text-sage">Why NuScript</span>
          <h2 className="mt-3 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
            Expertise + technology, <span className="italic">working together</span>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.k} className="bg-bone p-8">
              <span className="micro-label text-sage">{s.k}</span>
              <div className="mt-3 font-heading text-6xl leading-none text-ink">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-px grid grid-cols-1 gap-px border-x border-b border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-bone p-8">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-plasma" />
              <h3 className="mt-3 font-heading text-2xl text-ink">{p.title}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/65">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

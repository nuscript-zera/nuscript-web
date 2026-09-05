import React from "react";

const CAPABILITIES = [
  {
    title: "Clinical Documentation Excellence",
    desc: "Built on a long history in medical transcription and scribing to capture every encounter accurately and compliantly.",
  },
  {
    title: "Optimized Medical Coding & RCM",
    desc: "Advanced methodologies and technology to maximize reimbursement, minimize denials, and accelerate cash flow.",
  },
  {
    title: "Integrated Technology & Support",
    desc: "Streamlined workflows across the revenue cycle with a single, reliable offshore partner.",
  },
];

export default function WhatNuScriptDoes() {
  return (
    <section className="bg-bone pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="border-b border-ink/10 pb-8">
          <span className="micro-label text-sage">§ What We Do</span>
          <h2 className="mt-3 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
            What NuScript <span className="italic">does</span>.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="bg-bone p-8">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-plasma" />
              <h3 className="mt-3 font-heading text-2xl text-ink">{c.title}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/65">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

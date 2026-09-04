import React from "react";

const VALUES = [
  { title: "Integrity", desc: "Building trust through honest, transparent, and ethical practices in every client relationship." },
  { title: "Accountability", desc: "Taking ownership of quality, compliance, and delivering on commitments with measurable results." },
  { title: "Collaboration", desc: "Working as true partners with clients, providers, and team members to achieve shared success." },
  { title: "Excellence", desc: "Pursuing the highest standards in training, quality measurement, and client outcomes." },
];

export default function ValuesInAction() {
  return (
    <section className="bg-bone pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="border-b border-ink/10 pb-8">
          <span className="micro-label text-sage">§ Our Culture</span>
          <h2 className="mt-3 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
            Values in <span className="italic">action</span>.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink/70">
            NuScript&apos;s work is grounded in integrity, accountability, collaboration, and
            excellence — reflected in how teams are trained, how quality is measured, and how
            long-term client relationships are built.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div key={v.title} className="bg-bone p-8">
              <span className="font-heading text-4xl italic leading-none text-plasma/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-2xl text-ink">{v.title}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/65">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

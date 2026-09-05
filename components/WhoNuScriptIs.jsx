import React from "react";
import { SPECIALTIES } from "./SpecialtiesMarquee";

// Care settings beyond the core specialty list (kept from the original list).
const CARE_SETTINGS = [
  "Mental Health", "Pain Management", "Physical Therapy",
  "Acute Care", "Ambulatory Surgery Centers",
];

const SERVED = [...SPECIALTIES, ...CARE_SETTINGS];

export default function WhoNuScriptIs() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="border-b border-ink/10 pb-8">
          <span className="micro-label text-sage">§ Our Foundation</span>
          <h2 className="mt-3 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-ink">
            Who NuScript <span className="italic">is</span>.
          </h2>
        </div>
        <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-ink/70">
          NuScript was founded after decades of working alongside physicians, practice leaders, and
          hospital teams who needed clearer documentation and more predictable revenue. Today, the
          company serves providers across a wide range of specialties and care settings.
        </p>

        <div className="mt-12">
          <span className="micro-label text-sage">Specialties served</span>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVED.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink/15 px-5 py-2.5 font-ui text-sm text-ink/75 transition-colors hover:border-plasma hover:text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

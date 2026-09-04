import React from "react";

export default function BeakerProgress({ step, total }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <div className="relative h-12 w-9 overflow-hidden rounded-b-lg rounded-t-sm border border-ink/30">
        <div
          className="absolute bottom-0 left-0 right-0 bg-plasma transition-all duration-700 ease-out"
          style={{ height: `${pct}%` }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-bone/40" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-1">
          {[0, 1, 2, 3].map((t) => (
            <span key={t} className="mx-auto h-px w-4 bg-ink/15" />
          ))}
        </div>
      </div>
      <div className="font-ui text-[11px] leading-tight tracking-wider text-sage">
        <div className="text-ink">{pct}%</div>
        <div>
          step {step}/{total}
        </div>
      </div>
    </div>
  );
}

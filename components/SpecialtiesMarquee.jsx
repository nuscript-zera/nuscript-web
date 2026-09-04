import React from "react";

const SPECIALTIES = [
  "Cardiology", "Orthopedics", "Radiology", "Dermatology", "Oncology", "Pediatrics",
  "Neurology", "Gastroenterology", "OBGYN", "Psychiatry", "Urology", "ENT",
  "Ophthalmology", "Endocrinology", "Rheumatology", "Nephrology", "Pulmonology",
  "Hematology", "Emergency Medicine", "Anesthesiology", "Pathology", "Family Medicine",
  "Internal Medicine", "General Surgery", "Plastic Surgery", "Vascular Surgery",
  "Neurosurgery", "Cardiac Surgery", "Dentistry", "Podiatry",
];

function Row({ reverse }) {
  return (
    <div className={`flex w-max gap-10 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
      {[...SPECIALTIES, ...SPECIALTIES].map((s, i) => (
        <span
          key={i}
          className="flex items-center gap-10 whitespace-nowrap font-heading text-4xl italic text-bone/80 md:text-6xl"
        >
          {s}
          <span className="text-plasma">·</span>
        </span>
      ))}
    </div>
  );
}

export default function SpecialtiesMarquee() {
  return (
    <section className="overflow-hidden border-y border-bone/10 bg-ink py-10 md:py-14">
      <div className="mb-6 flex items-center justify-between px-6 md:px-12">
        <span className="micro-label text-sage">40+ SPECIALTIES · SPECIALTY-SPECIFIC EXPERTISE</span>
        <span className="micro-label text-sage">SCROLL →</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <Row />
        </div>
        <div className="flex">
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
